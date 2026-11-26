import React from 'react';
import { useGameStore } from '../../store/gameStore';
import { Play, Home, Compass, Settings, HelpCircle, X, RotateCcw } from 'lucide-react';
import { soundEngine } from '../../engine/SoundEngine';

export const PauseModal: React.FC = () => {
  const { 
    isPauseMenuOpen, 
    setModalState, 
    setScreen 
  } = useGameStore();

  if (!isPauseMenuOpen) return null;

  const handleResume = () => {
    soundEngine.playButton();
    setModalState('pause', false);
  };

  const handleDashboard = () => {
    soundEngine.playButton();
    setModalState('pause', false);
    setScreen('dashboard');
  };

  const handleWorldSelect = () => {
    soundEngine.playButton();
    setModalState('pause', false);
    setScreen('world_select');
  };

  const handleSettings = () => {
    soundEngine.playButton();
    setModalState('pause', false);
    setModalState('settings', true);
  };

  const handleHowToPlay = () => {
    soundEngine.playButton();
    setModalState('pause', false);
    setModalState('howToPlay', true);
  };

  const handleReset = () => {
    soundEngine.playButton();
    setModalState('pause', false);
    setModalState('resetConfirm', true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-fadeIn">
      <div className="w-full max-w-sm bg-white rounded-3xl shadow-card border border-quest-border p-6 text-center space-y-5 animate-scaleUp">
        <div className="space-y-1">
          <div className="text-3xl select-none mb-1">⏸️</div>
          <h3 className="font-display font-bold text-2xl text-gray-900">
            Adventure Paused
          </h3>
          <p className="text-xs text-gray-500">
            Take a breather, apprentice.
          </p>
        </div>

        <div className="space-y-2.5">
          <button
            onClick={handleResume}
            className="w-full py-3 px-4 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-glow-gold transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Resume Adventure</span>
          </button>

          <button
            onClick={handleDashboard}
            className="w-full py-2.5 px-4 rounded-xl bg-quest-bg hover:bg-quest-cream border border-quest-border text-gray-700 font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Home className="w-4 h-4 text-amber-700" />
            <span>Main Dashboard</span>
          </button>

          <button
            onClick={handleWorldSelect}
            className="w-full py-2.5 px-4 rounded-xl bg-quest-bg hover:bg-quest-cream border border-quest-border text-gray-700 font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Compass className="w-4 h-4 text-sky-700" />
            <span>Select Different World</span>
          </button>

          <button
            onClick={handleHowToPlay}
            className="w-full py-2.5 px-4 rounded-xl bg-quest-bg hover:bg-quest-cream border border-quest-border text-gray-700 font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <HelpCircle className="w-4 h-4 text-emerald-700" />
            <span>Controls & How to Play</span>
          </button>

          <button
            onClick={handleSettings}
            className="w-full py-2.5 px-4 rounded-xl bg-quest-bg hover:bg-quest-cream border border-quest-border text-gray-700 font-bold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Settings className="w-4 h-4 text-purple-700" />
            <span>Settings & Volume</span>
          </button>

          <button
            onClick={handleReset}
            className="w-full py-2 px-4 rounded-xl text-rose-600 hover:bg-rose-50 text-[11px] font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Save Progress</span>
          </button>
        </div>
      </div>
    </div>
  );
};
