import React, { useState } from 'react';
import { useGameStore } from '../../store/gameStore';
import { X, ChevronRight, Play, BookOpen } from 'lucide-react';
import { soundEngine } from '../../engine/SoundEngine';

export const NpcDialogueModal: React.FC = () => {
  const { 
    isNpcDialogueOpen, 
    currentNpc, 
    dialogueMission, 
    closeNpcDialogue, 
    openMission 
  } = useGameStore();

  const [dialogueIndex, setDialogueIndex] = useState(0);

  if (!isNpcDialogueOpen || !currentNpc) return null;

  const dialogueLines = currentNpc.dialogue && currentNpc.dialogue.length > 0 
    ? currentNpc.dialogue 
    : [currentNpc.greeting];

  const hasNext = dialogueIndex < dialogueLines.length - 1;

  const handleNext = () => {
    soundEngine.playNpc();
    if (hasNext) {
      setDialogueIndex(i => i + 1);
    } else if (dialogueMission) {
      openMission(dialogueMission);
    } else {
      closeNpcDialogue();
    }
  };

  const handleAcceptQuest = () => {
    soundEngine.playButton();
    if (dialogueMission) {
      openMission(dialogueMission);
    } else {
      closeNpcDialogue();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-fadeIn">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-card border border-quest-border overflow-hidden animate-scaleUp">
        {/* Top bar with NPC identification */}
        <div 
          className="px-6 py-4 border-b border-quest-border flex items-center justify-between"
          style={{ backgroundColor: `${currentNpc.color}15` }}
        >
          <div className="flex items-center gap-3.5">
            <div 
              className="w-12 h-12 rounded-2xl bg-white border border-quest-border flex items-center justify-center text-3xl shadow-xs"
            >
              {currentNpc.avatar}
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-gray-900 leading-tight">
                {currentNpc.name}
              </h3>
              <p className="text-xs font-semibold" style={{ color: currentNpc.color }}>
                {currentNpc.title}
              </p>
            </div>
          </div>

          <button
            onClick={closeNpcDialogue}
            className="p-1.5 rounded-xl hover:bg-black/5 text-gray-500 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Dialogue Body */}
        <div className="p-6 sm:p-8 space-y-5">
          {/* Mission context if attached */}
          {dialogueMission && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-[11px] font-bold">
              <span>📜 Quest:</span>
              <span>{dialogueMission.title}</span>
            </div>
          )}

          {/* Current Dialogue Speech Bubble */}
          <div className="p-5 rounded-2xl bg-quest-bg border border-quest-border text-sm sm:text-base text-gray-800 leading-relaxed font-medium min-h-[90px] flex items-center shadow-xs">
            "{dialogueLines[dialogueIndex]}"
          </div>

          {/* Dialogue step indicators */}
          {dialogueLines.length > 1 && (
            <div className="flex items-center justify-center gap-1.5">
              {dialogueLines.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all ${
                    i === dialogueIndex 
                      ? 'w-6 bg-amber-600' 
                      : 'w-2 bg-gray-200'
                  }`}
                />
              ))}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={closeNpcDialogue}
              className="px-4 py-2 text-xs font-bold text-gray-500 hover:text-gray-800 transition-colors cursor-pointer"
            >
              Farewell
            </button>

            <div className="flex items-center gap-2.5">
              {hasNext ? (
                <button
                  onClick={handleNext}
                  className="px-6 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Continue</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : dialogueMission ? (
                <button
                  onClick={handleAcceptQuest}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold text-xs shadow-glow-emerald transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>Accept Quest & Open Code Editor</span>
                </button>
              ) : (
                <button
                  onClick={closeNpcDialogue}
                  className="px-6 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-xs transition-all cursor-pointer"
                >
                  Understood
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
