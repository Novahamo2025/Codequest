import React from 'react';
import { useGameStore } from '../../store/gameStore';
import { WORLDS, getMissionsForWorld } from '../../missions';
import { Compass, Lock, Play, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { soundEngine } from '../../engine/SoundEngine';

export const WorldSelectScreen: React.FC = () => {
  const { 
    unlockedWorlds, 
    completedMissions, 
    selectWorld, 
    setScreen 
  } = useGameStore();

  return (
    <div className="min-h-[calc(100vh-65px)] bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EB] to-[#F5EFE6] py-10 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <button
              onClick={() => {
                soundEngine.playButton();
                setScreen('dashboard');
              }}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-gray-900 mb-2 cursor-pointer transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Dashboard
            </button>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900">
              Select Your World
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Choose an unlocked realm to explore, solve coding challenges, and restore magic.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl border border-quest-border shadow-xs">
            <Compass className="w-5 h-5 text-amber-700" />
            <span className="text-xs font-bold text-gray-800">
              {unlockedWorlds.length}/6 Realms Unlocked
            </span>
          </div>
        </div>

        {/* 6 Illustrated World Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WORLDS.map((world) => {
            const isUnlocked = unlockedWorlds.includes(world.id);
            const missions = getMissionsForWorld(world.id);
            const completedCount = missions.filter(m => completedMissions.includes(m.id)).length;
            const percent = Math.round((completedCount / missions.length) * 100);
            const isFinished = completedCount === missions.length;

            return (
              <div
                key={world.id}
                className={`group relative overflow-hidden rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                  isUnlocked
                    ? 'bg-white border-quest-border shadow-card hover:shadow-xl hover:-translate-y-1'
                    : 'bg-gray-50/80 border-gray-200 opacity-75'
                }`}
              >
                {/* World Card Top Banner */}
                <div 
                  className="p-6 relative overflow-hidden border-b border-quest-border/60"
                  style={{ 
                    background: `linear-gradient(135deg, ${world.themeColor}15, ${world.themeColor}30)` 
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div 
                      className="w-14 h-14 rounded-2xl bg-white border border-quest-border/80 flex items-center justify-center text-3xl shadow-sm"
                    >
                      {world.badgeIcon}
                    </div>
                    <span 
                      className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full border shadow-2xs"
                      style={{ 
                        backgroundColor: `${world.themeColor}20`, 
                        borderColor: `${world.themeColor}40`,
                        color: world.themeColor
                      }}
                    >
                      {world.difficulty}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-gray-900 leading-tight">
                    World {world.index}: {world.name}
                  </h3>
                  <p className="text-xs text-gray-600 font-medium mt-0.5">
                    {world.subtitle}
                  </p>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {world.description}
                  </p>

                  <div className="space-y-1.5 pt-2">
                    <div className="flex justify-between text-xs font-semibold text-gray-700">
                      <span>World Missions</span>
                      <span className="flex items-center gap-1 font-bold">
                        {isFinished && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
                        {completedCount}/{missions.length} ({percent}%)
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-300"
                        style={{ 
                          width: `${percent}%`,
                          backgroundColor: world.themeColor 
                        }}
                      />
                    </div>
                  </div>

                  {/* Boss Challenge Note */}
                  <div className="p-2.5 rounded-xl bg-quest-bg border border-quest-border text-[11px] text-gray-700 flex items-center gap-2">
                    <span>👑</span>
                    <span className="truncate">Boss: <strong>{world.bossTitle}</strong></span>
                  </div>

                  {/* Action Button */}
                  <div className="pt-2">
                    {isUnlocked ? (
                      <button
                        onClick={() => selectWorld(world.id)}
                        className="w-full py-3 px-4 rounded-xl text-white font-bold text-xs shadow-sm hover:brightness-105 transition-all flex items-center justify-center gap-2 cursor-pointer"
                        style={{ backgroundColor: world.themeColor }}
                      >
                        <Play className="w-4 h-4 fill-white" />
                        <span>Enter {world.name}</span>
                      </button>
                    ) : (
                      <div className="w-full py-3 px-4 rounded-xl bg-gray-200 text-gray-600 font-bold text-xs flex items-center justify-center gap-2 text-center select-none">
                        <Lock className="w-3.5 h-3.5" />
                        <span>Defeat World {world.index - 1} Boss to Unlock</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
