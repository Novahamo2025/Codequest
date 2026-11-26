import React from 'react';
import { useGameStore } from '../../store/gameStore';
import { X, BookOpen, CheckCircle2, Lock } from 'lucide-react';
import { WORLDS, getMissionsForWorld } from '../../missions';

export const LearningPathModal: React.FC = () => {
  const { isLearningPathModalOpen, setModalState, completedMissions } = useGameStore();

  if (!isLearningPathModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-fadeIn">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-card border border-quest-border overflow-hidden animate-scaleUp">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-quest-border bg-quest-cream/50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-base">
              🎓
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-gray-900">
                The Python Mastery Curriculum
              </h3>
              <p className="text-xs text-quest-text-muted">
                6 Enchanted Worlds • 60 Progressive Missions • Beginner to Master
              </p>
            </div>
          </div>
          <button
            onClick={() => setModalState('learningPath', false)}
            className="p-1.5 rounded-xl hover:bg-gray-100 text-gray-500 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          <div className="space-y-4">
            {WORLDS.map((world) => {
              const missions = getMissionsForWorld(world.id);
              const completedCount = missions.filter(m => completedMissions.includes(m.id)).length;
              const percent = Math.round((completedCount / missions.length) * 100);

              return (
                <div 
                  key={world.id}
                  className="p-4 rounded-2xl border border-quest-border bg-quest-bg space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white border border-quest-border shadow-xs flex items-center justify-center text-xl">
                        {world.badgeIcon}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-display font-bold text-base text-gray-900">
                            World {world.index}: {world.name}
                          </h4>
                          <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                            {world.difficulty}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500">{world.subtitle}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold text-gray-800">{completedCount}/{missions.length} Missions</span>
                      <div className="text-[11px] font-semibold text-amber-700">{percent}% Complete</div>
                    </div>
                  </div>

                  {/* Mission list chips */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-quest-border/60">
                    {missions.map((m) => {
                      const isDone = completedMissions.includes(m.id);
                      return (
                        <div 
                          key={m.id}
                          className={`flex items-center gap-2 p-2 rounded-xl text-xs font-medium border ${
                            isDone 
                              ? 'bg-emerald-50/80 border-emerald-200 text-emerald-900' 
                              : 'bg-white border-quest-border/80 text-gray-700'
                          }`}
                        >
                          {isDone ? (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          ) : (
                            <div className="w-3.5 h-3.5 rounded-full border border-gray-300 shrink-0 text-center text-[9px] leading-3 text-gray-400">
                              {m.missionNumber}
                            </div>
                          )}
                          <span className="truncate">{m.missionNumber}. {m.title}</span>
                          {m.isBoss && (
                            <span className="text-[9px] font-bold text-rose-700 bg-rose-100 px-1.5 py-0.2 rounded ml-auto">
                              BOSS
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-quest-cream/30 border-t border-quest-border flex justify-end">
          <button
            onClick={() => setModalState('learningPath', false)}
            className="px-5 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-sm transition-all"
          >
            Close Curriculum
          </button>
        </div>
      </div>
    </div>
  );
};
