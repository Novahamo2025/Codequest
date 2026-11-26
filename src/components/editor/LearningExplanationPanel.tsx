import React from 'react';
import { ConceptExplanation } from '../../types/mission';
import { BookOpen, AlertCircle, Lightbulb, Code, CheckCircle } from 'lucide-react';

interface LearningExplanationPanelProps {
  concept: ConceptExplanation;
}

export const LearningExplanationPanel: React.FC<LearningExplanationPanelProps> = ({ concept }) => {
  return (
    <div className="h-full overflow-y-auto p-5 space-y-5 text-gray-800 bg-quest-bg text-sm">
      {/* Title & Overview */}
      <div className="space-y-1 pb-3 border-b border-quest-border">
        <div className="flex items-center gap-2 text-amber-800 font-extrabold text-xs uppercase tracking-wider">
          <BookOpen className="w-4 h-4 text-amber-600" />
          <span>Python Concept Guild Guide</span>
        </div>
        <h3 className="font-display font-bold text-xl text-gray-900">
          {concept.title}
        </h3>
        <p className="text-xs text-gray-600 leading-relaxed">
          {concept.whatIsIt}
        </p>
      </div>

      {/* Why is it useful? */}
      <div className="p-3.5 rounded-2xl bg-white border border-quest-border shadow-xs space-y-1">
        <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
          <Lightbulb className="w-3.5 h-3.5 text-amber-600" /> Why is this useful?
        </h4>
        <p className="text-xs text-gray-600 leading-relaxed">
          {concept.whyUseful}
        </p>
      </div>

      {/* Syntax Box */}
      <div className="space-y-1.5">
        <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider flex items-center gap-1.5">
          <Code className="w-3.5 h-3.5 text-indigo-600" /> Syntax Pattern
        </h4>
        <pre className="p-3 rounded-xl bg-white border border-quest-border font-mono text-xs text-indigo-900 overflow-x-auto shadow-xs">
          {concept.syntax}
        </pre>
      </div>

      {/* Example & Expected Output */}
      <div className="space-y-2">
        <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider">
          Example Demonstration
        </h4>
        <div className="rounded-2xl border border-quest-border overflow-hidden bg-white shadow-xs">
          <div className="bg-quest-cream/60 px-3 py-1.5 text-[11px] font-bold text-gray-700 border-b border-quest-border">
            Python Spell Code
          </div>
          <pre className="p-3 font-mono text-xs text-emerald-900 bg-emerald-50/30 overflow-x-auto">
            {concept.exampleCode}
          </pre>
          <div className="bg-quest-cream/60 px-3 py-1.5 text-[11px] font-bold text-gray-700 border-t border-b border-quest-border">
            Expected Console Output
          </div>
          <pre className="p-3 font-mono text-xs text-gray-800 bg-gray-50 overflow-x-auto">
            {concept.expectedOutput}
          </pre>
        </div>
      </div>

      {/* Real-World Metaphor */}
      <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-amber-950 space-y-1">
        <div className="font-bold flex items-center gap-1.5">
          <span>🏰 Real-World Metaphor</span>
        </div>
        <p className="leading-relaxed opacity-90">
          {concept.realWorldMetaphor}
        </p>
      </div>

      {/* Common Pitfalls / Mistakes */}
      {concept.commonMistakes && concept.commonMistakes.length > 0 && (
        <div className="p-3.5 rounded-2xl bg-rose-50/70 border border-rose-200 text-xs text-rose-950 space-y-2">
          <h4 className="font-bold flex items-center gap-1.5 text-rose-900">
            <AlertCircle className="w-4 h-4 text-rose-600" /> Watch Out for Common Mistakes
          </h4>
          <ul className="space-y-1 list-disc list-inside text-rose-900/90 leading-relaxed">
            {concept.commonMistakes.map((mistake, i) => (
              <li key={i}>{mistake}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
