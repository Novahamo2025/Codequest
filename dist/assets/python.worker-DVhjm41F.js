let i=null,l=null;async function m(){try{const r=await import(`${typeof self<"u"&&self.location&&self.location.origin?self.location.origin:""}/pyodide/pyodide.mjs`);if(r&&r.loadPyodide)return r.loadPyodide}catch(t){console.warn("Local pyodide.mjs failed, trying bundled package...",t)}try{const t=await import("./pyodide-CNZFuwjx.js");if(t&&t.loadPyodide)return t.loadPyodide}catch(t){console.warn("Bundled pyodide package failed, trying CDN...",t)}return(await import("https://cdn.jsdelivr.net/pyodide/v0.26.1/full/pyodide.mjs")).loadPyodide}async function y(){return i?(self.postMessage({type:"STATUS",status:"ready",message:"Pyodide runtime active"}),i):l||(l=(async()=>{self.postMessage({type:"STATUS",status:"loading",message:"Igniting the Arcane Python Engine..."});try{const e=await m(),t=`${typeof self<"u"&&self.location&&self.location.origin?self.location.origin:""}/pyodide/`;let n=null;try{n=await e({indexURL:t})}catch(r){console.warn("Local indexURL failed, attempting CDN fallback...",r),n=await e({indexURL:"https://cdn.jsdelivr.net/pyodide/v0.26.1/full/"})}return await n.runPythonAsync(`
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
`),i=n,self.postMessage({type:"STATUS",status:"ready",message:"Arcane Python Engine Ready"}),i}catch(e){l=null;const o="Failed to initialize Python runtime: "+((e==null?void 0:e.message)||String(e));throw console.error(o,e),self.postMessage({type:"STATUS",status:"error",message:o}),e}})(),l)}self.onmessage=async e=>{const{id:o,type:t,code:n,inputs:r,testScript:c}=e.data;if(t==="INIT"){try{await y()}catch{}return}if(t==="RUN"){try{i||await y()}catch(s){self.postMessage({id:o,type:"RESULT",success:!1,error:"Python initialization failed: "+((s==null?void 0:s.message)||String(s)),stdout:"",stderr:"",variables:{}});return}if(!i){self.postMessage({id:o,type:"RESULT",success:!1,error:"Python runtime is not ready yet. Please wait a moment and try again.",stdout:"",stderr:"",variables:{}});return}try{const s=JSON.stringify(r||[]);await i.runPythonAsync(`
import json
cq_io.reset(json.loads('''${s}'''))
sys.stdout = cq_io.stdout_buf
sys.stderr = cq_io.stderr_buf
`);const a=await i.runPythonAsync(n||"");let d="";c&&(d=await i.runPythonAsync(c));const p=await i.runPythonAsync("cq_io.stdout_buf.getvalue()"),g=await i.runPythonAsync("cq_io.stderr_buf.getvalue()"),f=5e4;let u=p;u.length>f&&(u=u.slice(0,f)+`
... [Output truncated: maximum limit exceeded]`),self.postMessage({id:o,type:"RESULT",success:!0,stdout:u,stderr:g,testOutput:d!=null?String(d):void 0,resultVal:a!=null?String(a):void 0})}catch(s){let a="";try{a=await i.runPythonAsync("cq_io.stdout_buf.getvalue()")}catch{}self.postMessage({id:o,type:"RESULT",success:!1,error:(s==null?void 0:s.message)||String(s),stdout:a,stderr:""})}}};
