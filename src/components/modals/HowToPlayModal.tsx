import React from 'react';
import { useGameStore } from '../../store/gameStore';
import { X, Gamepad2, Code2, Sparkles, Trophy } from 'lucide-react';

export const HowToPlayModal: React.FC = () => {
  const { isHowToPlayModalOpen, setModalState } = useGameStore();

  if (!isHowToPlayModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-fadeIn">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-card border border-quest-border overflow-hidden animate-scaleUp">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-quest-border bg-quest-cream/50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-base">
              📖
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-gray-900">
                How to Play CodeQuest
              </h3>
              <p className="text-xs text-quest-text-muted">
                Your survival and mastery guide to The Lost Kingdom
              </p>
            </div>
          </div>
          <button
            onClick={() => setModalState('howToPlay', false)}
            className="p-1.5 rounded-xl hover:bg-gray-100 text-gray-500 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Controls */}
          <div>
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-amber-800 flex items-center gap-2 mb-3">
              <Gamepad2 className="w-4 h-4" /> 3D World Navigation Controls
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-quest-bg p-3 rounded-2xl border border-quest-border text-center">
                <div className="font-mono font-bold text-amber-800 bg-amber-100/80 px-2 py-1 rounded-lg text-xs inline-block mb-1">
                  W / ↑
                </div>
                <div className="text-xs font-semibold text-gray-800">Move Forward</div>
              </div>
              <div className="bg-quest-bg p-3 rounded-2xl border border-quest-border text-center">
                <div className="font-mono font-bold text-amber-800 bg-amber-100/80 px-2 py-1 rounded-lg text-xs inline-block mb-1">
                  S / ↓
                </div>
                <div className="text-xs font-semibold text-gray-800">Move Backward</div>
              </div>
              <div className="bg-quest-bg p-3 rounded-2xl border border-quest-border text-center">
                <div className="font-mono font-bold text-amber-800 bg-amber-100/80 px-2 py-1 rounded-lg text-xs inline-block mb-1">
                  A / D / ← →
                </div>
                <div className="text-xs font-semibold text-gray-800">Turn Left / Right</div>
              </div>
              <div className="bg-quest-bg p-3 rounded-2xl border border-quest-border text-center">
                <div className="font-mono font-bold text-amber-800 bg-amber-100/80 px-2 py-1 rounded-lg text-xs inline-block mb-1">
                  Space
                </div>
                <div className="text-xs font-semibold text-gray-800">Jump</div>
              </div>
              <div className="bg-quest-bg p-3 rounded-2xl border border-quest-border text-center">
                <div className="font-mono font-bold text-amber-800 bg-amber-100/80 px-2 py-1 rounded-lg text-xs inline-block mb-1">
                  E Key
                </div>
                <div className="text-xs font-semibold text-gray-800">Interact with NPCs & Stations</div>
              </div>
              <div className="bg-quest-bg p-3 rounded-2xl border border-quest-border text-center">
                <div className="font-mono font-bold text-amber-800 bg-amber-100/80 px-2 py-1 rounded-lg text-xs inline-block mb-1">
                  Esc
                </div>
                <div className="text-xs font-semibold text-gray-800">Pause Menu</div>
              </div>
              <div className="bg-quest-bg p-3 rounded-2xl border border-quest-border text-center sm:col-span-2">
                <div className="font-mono font-bold text-amber-800 bg-amber-100/80 px-2 py-1 rounded-lg text-xs inline-block mb-1">
                  Touch / Drag
                </div>
                <div className="text-xs font-semibold text-gray-800">Virtual Joystick on Mobile</div>
              </div>
            </div>
          </div>

          {/* Gameplay Loop */}
          <div>
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-amber-800 flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4" /> The Educational Adventure Loop
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-quest-bg rounded-2xl border border-quest-border">
                <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0">
                  1
                </div>
                <div>
                  <h5 className="text-sm font-bold text-gray-900">Explore & Talk to Friendly NPCs</h5>
                  <p className="text-xs text-gray-600 mt-0.5">
                    Walk up to Elders, Shamans, and Scouts. When you get close, press <kbd className="px-1.5 py-0.5 bg-gray-200 rounded text-[10px] font-mono">E</kbd> to listen to the lore and accept coding quests.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-quest-bg rounded-2xl border border-quest-border">
                <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 font-bold text-xs flex items-center justify-center shrink-0">
                  2
                </div>
                <div>
                  <h5 className="text-sm font-bold text-gray-900">Learn in the Built-In Coding Workspace</h5>
                  <p className="text-xs text-gray-600 mt-0.5">
                    Coding pedestals open the integrated Monaco Editor. Read the story, concept explanations, and syntax examples before writing Python code.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-quest-bg rounded-2xl border border-quest-border">
                <div className="w-7 h-7 rounded-full bg-purple-100 text-purple-800 font-bold text-xs flex items-center justify-center shrink-0">
                  3
                </div>
                <div>
                  <h5 className="text-sm font-bold text-gray-900">Execute Real Python & Validate Tests</h5>
                  <p className="text-xs text-gray-600 mt-0.5">
                    Your code executes using Pyodide directly inside your browser! Our automated test engine evaluates your output and logic against test cases.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-quest-bg rounded-2xl border border-quest-border">
                <div className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-800 font-bold text-xs flex items-center justify-center shrink-0">
                  4
                </div>
                <div>
                  <h5 className="text-sm font-bold text-gray-900">Unlock Gates, Earn XP, & Defeat Bosses</h5>
                  <p className="text-xs text-gray-600 mt-0.5">
                    Solving missions physically unlocks gates and mechanisms in the 3D world, awards XP, levels up your hero, and unlocks subsequent worlds!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-quest-cream/30 border-t border-quest-border flex justify-end">
          <button
            onClick={() => setModalState('howToPlay', false)}
            className="px-5 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-sm transition-all"
          >
            Got it, Let's Adventure!
          </button>
        </div>
      </div>
    </div>
  );
};
