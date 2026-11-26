// Pyodide Web Worker for CodeQuest: The Lost Kingdom
// Executes real Python code isolated in a background thread

interface WorkerMessage {
  id: string;
  type: 'INIT' | 'RUN';
  code?: string;
  inputs?: string[];
  testScript?: string;
}

let pyodideInstance: any = null;
let initPromise: Promise<any> | null = null;

async function getLoadPyodide() {
  // 1. Try local ES module from /pyodide/pyodide.mjs
  try {
    const origin = (typeof self !== 'undefined' && self.location && self.location.origin) 
      ? self.location.origin 
      : '';
    const localMjsUrl = `${origin}/pyodide/pyodide.mjs`;
    const mod = await import(/* @vite-ignore */ localMjsUrl);
    if (mod && mod.loadPyodide) {
      return mod.loadPyodide;
    }
  } catch (e1) {
    console.warn('Local pyodide.mjs failed, trying bundled package...', e1);
  }

  // 2. Try imported pyodide npm package
  try {
    const mod = await import('pyodide');
    if (mod && mod.loadPyodide) {
      return mod.loadPyodide;
    }
  } catch (e2) {
    console.warn('Bundled pyodide package failed, trying CDN...', e2);
  }

  // 3. Fallback to official CDN ES module
  const cdnUrl = 'https://cdn.jsdelivr.net/pyodide/v0.26.1/full/pyodide.mjs';
  const mod = await import(/* @vite-ignore */ cdnUrl);
  return mod.loadPyodide;
}

async function initPyodideWorker() {
  if (pyodideInstance) {
    self.postMessage({ type: 'STATUS', status: 'ready', message: 'Pyodide runtime active' });
    return pyodideInstance;
  }

  if (initPromise) {
    return initPromise;
  }

  initPromise = (async () => {
    self.postMessage({ type: 'STATUS', status: 'loading', message: 'Igniting the Arcane Python Engine...' });

    try {
      const loadPyodide = await getLoadPyodide();

      const origin = (typeof self !== 'undefined' && self.location && self.location.origin) 
        ? self.location.origin 
        : '';
      const localIndexURL = `${origin}/pyodide/`;

      let instance: any = null;

      // Try local assets first
      try {
        instance = await loadPyodide({
          indexURL: localIndexURL
        });
      } catch (errLocal) {
        console.warn('Local indexURL failed, attempting CDN fallback...', errLocal);
        instance = await loadPyodide({
          indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.26.1/full/'
        });
      }

      // Initialize custom I/O harness in Python
      await instance.runPythonAsync(`
import sys
import io
import builtins

class CodeQuestIO:
    def __init__(self):
        self.stdout_buf = io.StringIO()
        self.stderr_buf = io.StringIO()
        self.inputs_queue = []
    
    def reset(self, inputs=None):
        self.stdout_buf = io.StringIO()
        self.stderr_buf = io.StringIO()
        self.inputs_queue = list(inputs) if inputs else []
    
    def custom_input(self, prompt=""):
        if prompt:
            self.stdout_buf.write(str(prompt))
        if self.inputs_queue:
            return str(self.inputs_queue.pop(0))
        return ""

cq_io = CodeQuestIO()
builtins.input = cq_io.custom_input
`);

      pyodideInstance = instance;
      self.postMessage({ type: 'STATUS', status: 'ready', message: 'Arcane Python Engine Ready' });
      return pyodideInstance;
    } catch (err: any) {
      initPromise = null; // Allow retry on failure
      const errorMsg = 'Failed to initialize Python runtime: ' + (err?.message || String(err));
      console.error(errorMsg, err);
      self.postMessage({ 
        type: 'STATUS', 
        status: 'error', 
        message: errorMsg
      });
      throw err;
    }
  })();

  return initPromise;
}

self.onmessage = async (event: MessageEvent<WorkerMessage>) => {
  const { id, type, code, inputs, testScript } = event.data;

  if (type === 'INIT') {
    try {
      await initPyodideWorker();
    } catch (_) {}
    return;
  }

  if (type === 'RUN') {
    try {
      if (!pyodideInstance) {
        await initPyodideWorker();
      }
    } catch (initErr: any) {
      self.postMessage({
        id,
        type: 'RESULT',
        success: false,
        error: 'Python initialization failed: ' + (initErr?.message || String(initErr)),
        stdout: '',
        stderr: '',
        variables: {}
      });
      return;
    }

    if (!pyodideInstance) {
      self.postMessage({
        id,
        type: 'RESULT',
        success: false,
        error: 'Python runtime is not ready yet. Please wait a moment and try again.',
        stdout: '',
        stderr: '',
        variables: {}
      });
      return;
    }

    try {
      // Pass inputs queue to Python harness
      const safeInputs = JSON.stringify(inputs || []);
      await pyodideInstance.runPythonAsync(`
import json
cq_io.reset(json.loads('''${safeInputs}'''))
sys.stdout = cq_io.stdout_buf
sys.stderr = cq_io.stderr_buf
`);

      // Run user code
      const executionResult = await pyodideInstance.runPythonAsync(code || '');

      // Run optional test script verification
      let testOutput = '';
      if (testScript) {
        testOutput = await pyodideInstance.runPythonAsync(testScript);
      }

      // Collect captured output
      const rawStdout: string = await pyodideInstance.runPythonAsync(`cq_io.stdout_buf.getvalue()`);
      const rawStderr: string = await pyodideInstance.runPythonAsync(`cq_io.stderr_buf.getvalue()`);

      // Cap output size to 50KB to protect browser
      const MAX_OUTPUT = 50000;
      let stdout = rawStdout;
      if (stdout.length > MAX_OUTPUT) {
        stdout = stdout.slice(0, MAX_OUTPUT) + '\n... [Output truncated: maximum limit exceeded]';
      }

      self.postMessage({
        id,
        type: 'RESULT',
        success: true,
        stdout,
        stderr: rawStderr,
        testOutput: testOutput != null ? String(testOutput) : undefined,
        resultVal: executionResult != null ? String(executionResult) : undefined
      });
    } catch (err: any) {
      // Collect whatever was printed before error
      let currentStdout = '';
      try {
        currentStdout = await pyodideInstance.runPythonAsync(`cq_io.stdout_buf.getvalue()`);
      } catch (_) {}

      self.postMessage({
        id,
        type: 'RESULT',
        success: false,
        error: err?.message || String(err),
        stdout: currentStdout,
        stderr: ''
      });
    }
  }
};
