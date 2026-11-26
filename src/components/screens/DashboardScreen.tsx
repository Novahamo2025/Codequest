import React, { useState } from 'react';
import { useGameStore, xpForNextLevel } from '../../store/gameStore';
import { WORLDS, ALL_MISSIONS, getMissionById, getMissionsForWorld } from '../../missions';
import { 
  Compass, 
  Play, 
  Trophy, 
  Backpack, 
  ChevronRight, 
  Award, 
  MapPin, 
  Sparkles, 
  CheckCircle2 
} from 'lucide-react';
import { soundEngine } from '../../engine/SoundEngine';

export const DashboardScreen: React.FC = () => {
  const { 
    player, 
    level, 
    xp, 
    coins, 
    currentWorld, 
    completedMissions, 
    unlockedWorlds, 
    inventory, 
    achievements, 
    activeMission, 
    setScreen, 
    selectWorld 
  } = useGameStore();

  const [activeTab, setActiveTab] = useState<'quest' | 'worlds' | 'achievements' | 'inventory'>('quest');

  const currentWorldDef = WORLDS.find(w => w.id === currentWorld) || WORLDS[0];
  const nextLevelXp = xpForNextLevel(level);
  const xpPercent = Math.min(100, Math.floor((xp / nextLevelXp) * 100));

  const totalCompleted = completedMissions.length;
  const overallProgress = Math.round((totalCompleted / ALL_MISSIONS.length) * 100);

  // Active or next quest
  const displayQuest = activeMission || getMissionById('w1_m1')!;

  return (
    <div className="min-h-[calc(100vh-65px)] bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EB] to-[#F5EFE6] py-8 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Top Hero Banner */}
        <div className="relative overflow-hidden bg-white p-6 sm:p-8 rounded-3xl shadow-card border border-quest-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            {/* Avatar Badge */}
            <div 
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl flex items-center justify-center text-3xl sm:text-4xl shadow-md border-4 border-white shrink-0"
              style={{ backgroundColor: `${player.capeColor}20` }}
            >
              {player.characterClass === 'knight' && '🛡️'}
              {player.characterClass === 'pyromancer' && '🔥'}
              {player.characterClass === 'ranger' && '🏹'}
              {player.characterClass === 'sage' && '⚡'}
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-900">
                  {player.name}
                </h2>
                <span className="text-[11px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300">
                  Level {level}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 font-medium">
                Currently exploring <strong className="text-amber-800 font-semibold">{currentWorldDef.name}</strong> • {totalCompleted}/60 Missions Complete ({overallProgress}%)
              </p>
              
              {/* Level XP Bar */}
              <div className="mt-3 flex items-center gap-3 max-w-xs">
                <div className="flex-1 bg-amber-100 h-2.5 rounded-full overflow-hidden border border-amber-200">
                  <div 
                    className="bg-gradient-to-r from-amber-500 to-amber-600 h-full rounded-full transition-all duration-300"
                    style={{ width: `${xpPercent}%` }}
                  />
                </div>
                <span className="text-[11px] font-bold text-amber-900 shrink-0">
                  {xp}/{nextLevelXp} XP
                </span>
              </div>
            </div>
          </div>

          {/* Quick Action Button */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <button
              onClick={() => {
                soundEngine.playButton();
                setScreen('gameplay');
              }}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold text-sm shadow-glow-emerald hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Enter 3D World</span>
            </button>
            <button
              onClick={() => {
                soundEngine.playButton();
                setScreen('world_select');
              }}
              className="w-full sm:w-auto px-5 py-3.5 rounded-2xl bg-quest-bg hover:bg-white border border-quest-border text-gray-700 font-bold text-sm shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Compass className="w-4 h-4 text-amber-700" />
              <span>World Map</span>
            </button>
          </div>
        </div>

        {/* Dashboard Tabs */}
        <div className="flex items-center gap-2 border-b border-quest-border pb-2 overflow-x-auto">
          {[
            { id: 'quest', label: 'Active Quest', icon: Sparkles },
            { id: 'worlds', label: 'Kingdom Worlds', icon: Compass },
            { id: 'achievements', label: 'Achievements', icon: Trophy },
            { id: 'inventory', label: 'Inventory & Items', icon: Backpack },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  soundEngine.playButton();
                  setActiveTab(tab.id as any);
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-amber-100 text-amber-900 border border-amber-300 shadow-xs'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white/60'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-amber-700' : 'text-gray-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: Active Quest Card */}
        {activeTab === 'quest' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white p-6 sm:p-8 rounded-3xl shadow-card border border-quest-border space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-extrabold tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
                  {currentWorldDef.name} • Mission {displayQuest.missionNumber}
                </span>
                <span className="text-xs font-bold text-gray-500">
                  Difficulty: {displayQuest.difficulty}
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-2xl text-gray-900">
                  {displayQuest.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  {displayQuest.story}
                </p>
              </div>

              {/* Concept Sneak Peek */}
              <div className="p-4 rounded-2xl bg-quest-bg border border-quest-border space-y-2">
                <div className="text-xs font-bold text-amber-900 uppercase tracking-wider">
                  📖 Core Learning Concept
                </div>
                <div className="text-sm font-semibold text-gray-800">
                  {displayQuest.concept.title}
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {displayQuest.concept.whatIsIt}
                </p>
              </div>

              {/* Rewards */}
              <div className="flex items-center gap-4 pt-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800 bg-amber-50 px-3 py-1.5 rounded-xl border border-amber-200">
                  <span>⭐</span>
                  <span>+{displayQuest.xpReward} XP</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-yellow-800 bg-yellow-50 px-3 py-1.5 rounded-xl border border-yellow-200">
                  <span>🪙</span>
                  <span>+{displayQuest.coinReward} Coins</span>
                </div>

                <button
                  onClick={() => {
                    soundEngine.playButton();
                    setScreen('gameplay');
                  }}
                  className="ml-auto px-6 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Begin Challenge in 3D</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Side: NPC Guide */}
            <div className="bg-quest-cream/60 p-6 rounded-3xl border border-quest-border flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-quest-border flex items-center justify-center text-2xl shadow-xs">
                    {displayQuest.npc.avatar}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-gray-900">
                      {displayQuest.npc.name}
                    </h4>
                    <p className="text-[11px] text-gray-500 font-medium">
                      {displayQuest.npc.title}
                    </p>
                  </div>
                </div>
                <div className="p-3.5 rounded-2xl bg-white border border-quest-border/80 text-xs text-gray-700 italic leading-relaxed shadow-xs">
                  "{displayQuest.npc.greeting}"
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-quest-border/60">
                <div className="text-[11px] text-gray-500 font-medium flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-600" />
                  <span>Located near the central gateway of {currentWorldDef.name}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Worlds Overview */}
        {activeTab === 'worlds' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WORLDS.map((w) => {
              const missions = getMissionsForWorld(w.id);
              const doneCount = missions.filter(m => completedMissions.includes(m.id)).length;
              const isUnlocked = unlockedWorlds.includes(w.id);
              const percent = Math.round((doneCount / missions.length) * 100);

              return (
                <div 
                  key={w.id}
                  className={`p-6 rounded-3xl border transition-all ${
                    isUnlocked 
                      ? 'bg-white border-quest-border shadow-card hover:shadow-lg' 
                      : 'bg-gray-100/60 border-gray-200 opacity-75'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-quest-bg border border-quest-border flex items-center justify-center text-2xl shadow-xs">
                      {w.badgeIcon}
                    </div>
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                      {w.difficulty}
                    </span>
                  </div>

                  <h4 className="font-display font-bold text-lg text-gray-900 mb-1">
                    {w.index}. {w.name}
                  </h4>
                  <p className="text-xs text-gray-500 mb-4 line-clamp-2">
                    {w.description}
                  </p>

                  <div className="space-y-1.5 mb-5">
                    <div className="flex justify-between text-xs font-semibold text-gray-700">
                      <span>Missions Completed</span>
                      <span>{doneCount}/{missions.length} ({percent}%)</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-amber-600 h-full rounded-full transition-all"
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                  </div>

                  {isUnlocked ? (
                    <button
                      onClick={() => selectWorld(w.id)}
                      className="w-full py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-xs transition-colors cursor-pointer"
                    >
                      Enter World
                    </button>
                  ) : (
                    <div className="text-center py-2 text-xs font-bold text-gray-500 bg-gray-200/60 rounded-xl">
                      🔒 Defeat World {w.index - 1} Boss to Unlock
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 3: Achievements */}
        {activeTab === 'achievements' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {achievements.map((ach) => {
              const isUnlocked = !!ach.unlockedAt;
              return (
                <div
                  key={ach.id}
                  className={`p-4 rounded-2xl border flex items-start gap-3.5 transition-all ${
                    isUnlocked
                      ? 'bg-white border-amber-300 shadow-sm'
                      : 'bg-gray-50 border-gray-200 opacity-60'
                  }`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-quest-bg border border-quest-border flex items-center justify-center text-2xl shrink-0">
                    {ach.icon}
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-sm text-gray-900">
                      {ach.title}
                    </h5>
                    <p className="text-xs text-gray-600 mt-0.5 leading-snug">
                      {ach.description}
                    </p>
                    <div className="mt-2 text-[10px] font-bold text-amber-800">
                      {isUnlocked ? '✓ Unlocked' : `Reward: +${ach.xpReward} XP`}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 4: Inventory */}
        {activeTab === 'inventory' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {inventory.map((item) => (
              <div 
                key={item.id}
                className="p-4 rounded-2xl bg-white border border-quest-border shadow-xs flex items-start gap-3.5"
              >
                <div className="w-12 h-12 rounded-2xl bg-quest-cream/60 border border-quest-border flex items-center justify-center text-2xl shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h5 className="font-display font-bold text-sm text-gray-900 truncate">
                      {item.name}
                    </h5>
                    <span className="text-xs font-bold text-gray-500">x{item.count}</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded">
                    {item.category}
                  </span>
                  <p className="text-xs text-gray-500 mt-1 leading-snug">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
