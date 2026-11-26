import React from 'react';
import { useGameStore, xpForNextLevel } from '../../store/gameStore';
import { 
  Sparkles, 
  Coins, 
  Map, 
  Compass, 
  Settings, 
  Volume2, 
  VolumeX, 
  HelpCircle,
  Home
} from 'lucide-react';
import { soundEngine } from '../../engine/SoundEngine';

export const Navbar: React.FC = () => {
  const { 
    screen, 
    setScreen, 
    player, 
    level, 
    xp, 
    coins, 
    settings, 
    updateSettings, 
    setModalState 
  } = useGameStore();

  const nextLevelXp = xpForNextLevel(level);
  const xpPercent = Math.min(100, Math.floor((xp / nextLevelXp) * 100));

  const toggleSound = () => {
    updateSettings({ soundEnabled: !settings.soundEnabled });
    soundEngine.playButton();
  };

  return (
    <header className="sticky top-0 z-30 w-full glass-panel border-b border-quest-border/80 px-4 py-2.5 transition-all shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <div 
          onClick={() => setScreen('dashboard')}
          className="flex items-center gap-2.5 cursor-pointer group select-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform text-white font-bold text-xl">
            ⚔️
          </div>
          <div>
            <div className="font-display font-bold text-lg leading-tight text-gray-900 flex items-center gap-1.5">
              CodeQuest
              <span className="text-[10px] tracking-wider uppercase font-sans font-extrabold px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300">
                Lost Kingdom
              </span>
            </div>
            <div className="text-xs text-quest-text-muted font-medium">
              Python 3D Adventure
            </div>
          </div>
        </div>

        {/* Player Stats (Only visible in authenticated screens) */}
        {screen !== 'welcome' && screen !== 'player_creation' && (
          <div className="hidden md:flex items-center gap-5">
            {/* Level & XP */}
            <div className="flex items-center gap-2.5 bg-amber-50/80 border border-amber-200/80 px-3 py-1.5 rounded-xl shadow-xs">
              <div className="w-7 h-7 rounded-lg bg-amber-500 text-white font-bold text-xs flex items-center justify-center shadow-xs">
                {level}
              </div>
              <div className="w-28">
                <div className="flex justify-between text-[11px] font-semibold text-amber-900 mb-0.5">
                  <span>Level {level}</span>
                  <span>{xp}/{nextLevelXp} XP</span>
                </div>
                <div className="w-full bg-amber-200/70 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-amber-500 to-amber-600 h-full rounded-full transition-all duration-300"
                    style={{ width: `${xpPercent}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Gold Coins */}
            <div className="flex items-center gap-1.5 bg-yellow-50/80 border border-yellow-200 px-3 py-1.5 rounded-xl shadow-xs text-yellow-900 font-bold text-sm">
              <span className="text-base">🪙</span>
              <span>{coins}</span>
            </div>

            {/* Player Avatar Name */}
            <div className="flex items-center gap-2 bg-quest-cream/80 border border-quest-border px-3 py-1.5 rounded-xl">
              <div className="w-6 h-6 rounded-full bg-indigo-500 text-white text-xs flex items-center justify-center font-bold">
                {player.name.charAt(0).toUpperCase()}
              </div>
              <span className="text-xs font-semibold text-gray-800 max-w-[100px] truncate">
                {player.name}
              </span>
            </div>
          </div>
        )}

        {/* Navigation & Controls */}
        <div className="flex items-center gap-1.5">
          {screen !== 'welcome' && screen !== 'player_creation' && (
            <>
              <button
                onClick={() => setScreen('dashboard')}
                title="Dashboard"
                className={`p-2 rounded-xl transition-colors ${
                  screen === 'dashboard' 
                    ? 'bg-amber-100 text-amber-900 font-bold shadow-xs' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Home className="w-5 h-5" />
              </button>

              <button
                onClick={() => setScreen('world_select')}
                title="World Map"
                className={`p-2 rounded-xl transition-colors ${
                  screen === 'world_select' 
                    ? 'bg-amber-100 text-amber-900 font-bold shadow-xs' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Compass className="w-5 h-5" />
              </button>

              <button
                onClick={() => setScreen('gameplay')}
                title="Resume 3D Adventure"
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  screen === 'gameplay' 
                    ? 'bg-emerald-600 text-white shadow-md' 
                    : 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                }`}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                </span>
                3D World
              </button>
            </>
          )}

          {/* Audio toggle */}
          <button
            onClick={toggleSound}
            title={settings.soundEnabled ? 'Mute Sounds' : 'Unmute Sounds'}
            className="p-2 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors"
          >
            {settings.soundEnabled ? <Volume2 className="w-5 h-5 text-gray-700" /> : <VolumeX className="w-5 h-5 text-gray-400" />}
          </button>

          {/* How to play */}
          <button
            onClick={() => setModalState('howToPlay', true)}
            title="How to Play"
            className="p-2 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors"
          >
            <HelpCircle className="w-5 h-5" />
          </button>

          {/* Settings */}
          <button
            onClick={() => setModalState('settings', true)}
            title="Settings"
            className="p-2 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors"
          >
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};
