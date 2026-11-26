import React from 'react';
import { TestResultItem } from '../../engine/TestEvaluator';
import { Terminal, CheckCircle2, XCircle, AlertTriangle, ArrowRight } from 'lucide-react';

interface OutputConsoleProps {
  stdout: string;
  stderr: string;
  friendlyError?: string;
  results: TestResultItem[];
  allPassed: boolean;
  hasRun: boolean;
  inputs: string[];
  onInputChange: (index: number, val: string) => void;
  requiredInputCount: number;
}

export const OutputConsole: React.FC<OutputConsoleProps> = ({
  stdout,
  stderr,
  friendlyError,
  results,
  allPassed,
  hasRun,
  inputs,
  onInputChange,
  requiredInputCount
}) => {
  return (
    <div className="h-full flex flex-col bg-white overflow-hidden text-xs">
      {/* Header */}
      <div className="px-4 py-2.5 bg-quest-cream/60 border-b border-quest-border flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-gray-800">
          <Terminal className="w-4 h-4 text-amber-700" />
          <span>Python Console & Test Results</span>
        </div>
        {hasRun && (
          <span className={`px-2 py-0.5 rounded-full font-bold text-[10px] uppercase ${
            allPassed 
              ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' 
              : 'bg-rose-100 text-rose-800 border border-rose-300'
          }`}>
            {allPassed ? '✓ All Tests Passed' : 'Test Failures Detected'}
          </span>
        )}
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 font-mono">
        {/* Interactive Input Prompt Fields (if mission takes input()) */}
        {requiredInputCount > 0 && (
          <div className="p-3 bg-amber-50/80 rounded-xl border border-amber-200 space-y-2 font-sans">
            <div className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
              <span>⌨️ Input Required for input() calls:</span>
            </div>
            <div className="space-y-1.5">
              {Array.from({ length: requiredInputCount }).map((_, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-gray-600">Input #{idx + 1}:</span>
                  <input
                    type="text"
                    value={inputs[idx] || ''}
                    onChange={(e) => onInputChange(idx, e.target.value)}
                    placeholder={`e.g. Hero`}
                    className="flex-1 px-2.5 py-1 text-xs font-mono rounded-lg border border-quest-border bg-white text-gray-900 focus:outline-amber-600"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Standard Output Console */}
        <div className="space-y-1">
          <div className="font-sans text-[11px] font-bold text-gray-500 uppercase tracking-wider">
            Standard Output:
          </div>
          <div className="p-3 bg-quest-bg rounded-xl border border-quest-border text-gray-800 min-h-[60px] whitespace-pre-wrap select-text">
            {stdout ? stdout : <span className="text-gray-400 italic font-sans">No output yet. Click 'Run Code' or 'Submit & Test' to execute your Python spell.</span>}
          </div>
        </div>

        {/* Friendly Error Diagnostic */}
        {friendlyError && (
          <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-300 text-rose-900 space-y-1.5 font-sans">
            <div className="font-bold text-xs flex items-center gap-1.5 text-rose-700">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              <span>Diagnostic Spell Feedback</span>
            </div>
            <p className="text-xs leading-relaxed font-medium">
              {friendlyError}
            </p>
          </div>
        )}

        {/* Standard Error Raw Traceback */}
        {stderr && (
          <div className="space-y-1">
            <div className="font-sans text-[11px] font-bold text-rose-600 uppercase tracking-wider">
              Error Trace:
            </div>
            <pre className="p-3 bg-rose-50/50 rounded-xl border border-rose-200 text-rose-800 text-[11px] whitespace-pre-wrap select-text">
              {stderr}
            </pre>
          </div>
        )}

        {/* Test Case Evaluation Results */}
        {results.length > 0 && (
          <div className="space-y-2 pt-2 border-t border-quest-border font-sans">
            <div className="text-[11px] font-bold text-gray-600 uppercase tracking-wider">
              Validation Test Cases:
            </div>
            <div className="space-y-2">
              {results.map((r, i) => (
                <div
                  key={r.id || i}
                  className={`p-3 rounded-xl border flex flex-col gap-1.5 ${
                    r.passed
                      ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
                      : 'bg-rose-50/70 border-rose-200 text-rose-950'
                  }`}
                >
                  <div className="flex items-center justify-between font-bold text-xs">
                    <div className="flex items-center gap-2">
                      {r.passed ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <XCircle className="w-4 h-4 text-rose-600" />
                      )}
                      <span>{r.description}</span>
                    </div>
                    <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded ${
                      r.passed ? 'bg-emerald-200/60 text-emerald-800' : 'bg-rose-200/60 text-rose-800'
                    }`}>
                      {r.passed ? 'PASS' : 'FAIL'}
                    </span>
                  </div>

                  {!r.passed && (
                    <div className="text-[11px] font-mono space-y-1 pt-1 border-t border-rose-200/60">
                      <div>
                        <span className="text-gray-500 font-sans">Expected: </span>
                        <span className="text-emerald-700">{r.expected}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 font-sans">Actual: </span>
                        <span className="text-rose-700">{r.actual}</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
