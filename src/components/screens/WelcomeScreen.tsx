import React from 'react';
import { useGameStore } from '../../store/gameStore';
import { 
  Play, 
  BookOpen, 
  HelpCircle, 
  Settings, 
  Sparkles, 
  Terminal, 
  Compass, 
  ShieldCheck 
} from 'lucide-react';
import { soundEngine } from '../../engine/SoundEngine';

export const WelcomeScreen: React.FC = () => {
  const { 
    setScreen, 
    hasSavedGame, 
    loadSavedGame, 
    setModalState 
  } = useGameStore();

  const saveExists = hasSavedGame();

  const handleContinue = () => {
    soundEngine.playButton();
    const success = loadSavedGame();
    if (!success) {
      setScreen('player_creation');
    }
  };

  const handleStart = () => {
    soundEngine.playButton();
    setScreen('player_creation');
  };

  return (
    <div className="relative min-h-[calc(100vh-65px)] flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EB] to-[#F5EFE6]">
      {/* Decorative ambient backdrop */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-amber-200/50 blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 rounded-full bg-sky-200/40 blur-3xl" />
      </div>

      {/* Hero section */}
      <div className="relative max-w-5xl mx-auto px-4 pt-12 pb-8 text-center flex-1 flex flex-col justify-center items-center z-10">
        {/* Emblem badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/90 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-6 shadow-xs animate-float">
          <Sparkles className="w-4 h-4 text-amber-600" />
          <span>Interactive 3D Python Educational Adventure</span>
        </div>

        {/* Title */}
        <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl text-gray-900 tracking-tight mb-4 drop-shadow-xs">
          CodeQuest
          <span className="block text-2xl sm:text-3xl md:text-4xl font-display font-bold text-amber-700 mt-2">
            The Lost Kingdom
          </span>
        </h1>

        {/* Narrative Description */}
        <p className="max-w-2xl text-base sm:text-lg text-gray-600 font-normal leading-relaxed mb-8">
          The ancient realm has lost its magic as programming knowledge disappeared.
          Explore vibrant 3D worlds, awaken gates, interact with elders, and restore the kingdom by mastering real Python code!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full max-w-md justify-center mb-10">
          {saveExists ? (
            <>
              <button
                onClick={handleContinue}
                className="w-full sm:w-auto flex-1 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold text-base shadow-glow-gold hover:shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Play className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" />
                Continue Adventure
              </button>
              <button
                onClick={handleStart}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white hover:bg-gray-50 border border-quest-border text-gray-700 font-bold text-sm shadow-xs transition-colors cursor-pointer"
              >
                New Game
              </button>
            </>
          ) : (
            <button
              onClick={handleStart}
              className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 hover:brightness-105 text-white font-bold text-lg shadow-glow-gold hover:shadow-xl transition-all flex items-center justify-center gap-3 group cursor-pointer"
            >
              <Play className="w-6 h-6 fill-white group-hover:scale-110 transition-transform" />
              Start Adventure
            </button>
          )}
        </div>

        {/* Secondary Navigation Options */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-bold text-gray-700">
          <button
            onClick={() => setModalState('howToPlay', true)}
            className="px-4 py-2 rounded-xl bg-white/80 hover:bg-white border border-quest-border/80 shadow-xs flex items-center gap-2 transition-colors cursor-pointer"
          >
            <HelpCircle className="w-4 h-4 text-amber-700" />
            How to Play
          </button>
          <button
            onClick={() => setModalState('learningPath', true)}
            className="px-4 py-2 rounded-xl bg-white/80 hover:bg-white border border-quest-border/80 shadow-xs flex items-center gap-2 transition-colors cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-emerald-700" />
            60-Mission Curriculum
          </button>
          <button
            onClick={() => setModalState('settings', true)}
            className="px-4 py-2 rounded-xl bg-white/80 hover:bg-white border border-quest-border/80 shadow-xs flex items-center gap-2 transition-colors cursor-pointer"
          >
            <Settings className="w-4 h-4 text-indigo-700" />
            Settings
          </button>
        </div>
      </div>

      {/* 4 Feature Pillars */}
      <div className="relative max-w-6xl mx-auto px-4 pb-8 w-full z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-white/90 border border-quest-border shadow-xs flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-lg shrink-0">
              <Compass className="w-5 h-5 text-emerald-700" />
            </div>
            <div>
              <h4 className="font-display font-bold text-sm text-gray-900">Six 3D Open Worlds</h4>
              <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                Explore forests, mountain valleys, jungle gears, snowy peaks, and the Master Dungeon.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/90 border border-quest-border shadow-xs flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center text-lg shrink-0">
              <Terminal className="w-5 h-5 text-sky-700" />
            </div>
            <div>
              <h4 className="font-display font-bold text-sm text-gray-900">Real Python in Browser</h4>
              <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                No simulated outputs. Powered by Pyodide running inside an isolated Web Worker thread.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/90 border border-quest-border shadow-xs flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center text-lg shrink-0">
              <BookOpen className="w-5 h-5 text-purple-700" />
            </div>
            <div>
              <h4 className="font-display font-bold text-sm text-gray-900">Beginner to Mastery</h4>
              <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                From your first print() call all the way to object-oriented programming, classes, and exceptions.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/90 border border-quest-border shadow-xs flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center text-lg shrink-0">
              <ShieldCheck className="w-5 h-5 text-amber-700" />
            </div>
            <div>
              <h4 className="font-display font-bold text-sm text-gray-900">100% Client-Side</h4>
              <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                Zero backend, zero tracking, instant local auto-save to keep your progress intact anywhere.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
