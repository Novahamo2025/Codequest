// Python Runtime Engine managing Pyodide Web Worker & Infinite Loop Watchdog

export interface PythonRunResponse {
  success: boolean;
  stdout: string;
  stderr: string;
  error?: string;
  friendlyError?: string;
  testOutput?: string;
  resultVal?: string;
  durationMs: number;
}

export interface PythonRuntimeListener {
  onStatusChange?: (status: 'uninitialized' | 'loading' | 'ready' | 'error', message?: string) => void;
}

class PythonRuntimeEngine {
  private worker: Worker | null = null;
  private status: 'uninitialized' | 'loading' | 'ready' | 'error' = 'uninitialized';
  private statusMessage: string = 'Runtime not started';
  private listeners: Set<(status: 'uninitialized' | 'loading' | 'ready' | 'error', message: string) => void> = new Set();
  private pendingRequests: Map<string, {
    resolve: (res: PythonRunResponse) => void;
    startTime: number;
    timer: number;
  }> = new Map();

  constructor() {
    // Lazily initialized or explicitly triggered
  }

  public subscribe(cb: (status: 'uninitialized' | 'loading' | 'ready' | 'error', message: string) => void) {
    this.listeners.add(cb);
    cb(this.status, this.statusMessage);
    return () => this.listeners.delete(cb);
  }

  private notify(status: 'uninitialized' | 'loading' | 'ready' | 'error', message: string) {
    this.status = status;
    this.statusMessage = message;
    this.listeners.forEach(cb => cb(status, message));
  }

  public getStatus() {
    return { status: this.status, message: this.statusMessage };
  }

  public init() {
    if (this.worker && (this.status === 'ready' || this.status === 'loading')) {
      return;
    }

    this.createWorker();
  }

  private createWorker() {
    if (this.worker) {
      try {
        this.worker.terminate();
      } catch (_) {}
    }

    this.notify('loading', 'Igniting the Arcane Python Engine...');

    try {
      this.worker = new Worker(new URL('../workers/python.worker.ts', import.meta.url), {
        type: 'module'
      });

      this.worker.onmessage = (event: MessageEvent) => {
        const data = event.data;

        if (data.type === 'STATUS') {
          this.notify(data.status, data.message);
          return;
        }

        if (data.type === 'RESULT') {
          const req = this.pendingRequests.get(data.id);
          if (req) {
            clearTimeout(req.timer);
            const durationMs = Date.now() - req.startTime;
            this.pendingRequests.delete(data.id);

            let friendlyError: string | undefined = undefined;
            if (data.error) {
              friendlyError = this.humanizePythonError(data.error);
            }

            req.resolve({
              success: data.success,
              stdout: data.stdout || '',
              stderr: data.stderr || '',
              error: data.error,
              friendlyError,
              testOutput: data.testOutput,
              resultVal: data.resultVal,
              durationMs
            });
          }
        }
      };

      this.worker.onerror = (err) => {
        console.error('Python Worker Error:', err);
        this.notify('error', 'Worker error: ' + (err.message || 'Unknown'));
      };

      this.worker.postMessage({ type: 'INIT' });
    } catch (err: any) {
      console.error('Failed to spawn Python worker:', err);
      this.notify('error', 'Could not create Python Worker: ' + (err?.message || err));
    }
  }

  public async runCode(
    code: string,
    inputs: string[] = [],
    testScript?: string,
    timeoutMs: number = 10000
  ): Promise<PythonRunResponse> {
    if (!this.worker || this.status === 'error') {
      this.createWorker();
    }

    const id = 'cq_' + Math.random().toString(36).substring(2, 9);
    const startTime = Date.now();
    const effectiveTimeout = this.status === 'ready' ? timeoutMs : Math.max(timeoutMs, 25000);

    return new Promise((resolve) => {
      const timer = window.setTimeout(() => {
        // Watchdog timeout hit (e.g. infinite loop)
        if (this.pendingRequests.has(id)) {
          this.pendingRequests.delete(id);
          // Terminate locked worker and spin up a fresh one
          this.createWorker();

          resolve({
            success: false,
            stdout: '',
            stderr: '',
            error: 'TimeoutError: Execution exceeded limit (' + (effectiveTimeout / 1000) + 's). Possible infinite loop or slow initialization in your code!',
            friendlyError: '⚠️ Your spell got caught in an endless loop! Check your while or for loops to make sure they eventually stop.',
            durationMs: effectiveTimeout
          });
        }
      }, effectiveTimeout);

      this.pendingRequests.set(id, { resolve, startTime, timer });

      this.worker?.postMessage({
        id,
        type: 'RUN',
        code,
        inputs,
        testScript
      });
    });
  }

  private humanizePythonError(rawError: string): string {
    if (rawError.includes('SyntaxError')) {
      if (rawError.includes('unexpected EOF while parsing') || rawError.includes('was never closed')) {
        return 'Spell Grammar Error (SyntaxError): You opened a quote or parenthesis that was never closed. Check for missing quotes "" or brackets ().';
      }
      if (rawError.includes('invalid syntax')) {
        return 'Spell Grammar Error (SyntaxError): Python did not understand this line. Check for misspelled keywords, missing colons (:), or unmatched symbols.';
      }
      return 'Spell Grammar Error (SyntaxError): Check your spelling and syntax symbols carefully.';
    }

    if (rawError.includes('IndentationError')) {
      return 'Alignment Error (IndentationError): Python requires matching spaces or tabs at the start of code blocks (like inside if-statements, loops, or functions).';
    }

    if (rawError.includes('NameError')) {
      const match = rawError.match(/name '(\w+)' is not defined/);
      const varName = match ? `'${match[1]}'` : 'a variable or function';
      return `Unknown Rune (NameError): Python does not recognize ${varName}. Did you misspell it, or forget to define it beforehand?`;
    }

    if (rawError.includes('TypeError')) {
      return 'Type Mismatch (TypeError): You tried to perform an operation on incompatible types (for example, adding text and numbers together without converting).';
    }

    if (rawError.includes('ValueError')) {
      return 'Value Error (ValueError): A function received an argument with the right type but inappropriate value (e.g. converting "banana" to an int).';
    }

    if (rawError.includes('ZeroDivisionError')) {
      return 'Division by Zero (ZeroDivisionError): You cannot divide any number by zero in mathematics or Python!';
    }

    if (rawError.includes('IndexError')) {
      return 'Boundary Exceeded (IndexError): You tried to reach an item in a list or string at a position that does not exist.';
    }

    if (rawError.includes('KeyError')) {
      return 'Vault Lock Error (KeyError): The dictionary key you requested does not exist in the collection.';
    }

    return rawError;
  }
}

export const pythonRuntime = new PythonRuntimeEngine();
