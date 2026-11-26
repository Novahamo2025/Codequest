import React from 'react';
import { useGameStore } from '../../store/gameStore';
import { X, Volume2, Music, Monitor, RotateCcw } from 'lucide-react';
import { soundEngine } from '../../engine/SoundEngine';

export const SettingsModal: React.FC = () => {
  const { 
    isSettingsModalOpen, 
    setModalState, 
    settings, 
    updateSettings 
  } = useGameStore();

  if (!isSettingsModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-fadeIn">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-card border border-quest-border overflow-hidden animate-scaleUp">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-quest-border bg-quest-cream/50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-base">
              ⚙️
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-gray-900">
                Adventure Settings
              </h3>
              <p className="text-xs text-quest-text-muted">
                Audio, graphics, and controls customization
              </p>
            </div>
          </div>
          <button
            onClick={() => setModalState('settings', false)}
            className="p-1.5 rounded-xl hover:bg-gray-100 text-gray-500 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Sound & Music */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-amber-800 flex items-center gap-2">
              <Volume2 className="w-4 h-4" /> Audio & Atmosphere
            </h4>

            {/* Sound FX Toggle & Volume */}
            <div className="bg-quest-bg p-4 rounded-2xl border border-quest-border/80 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-bold text-sm text-gray-800">Sound Effects (SFX)</span>
                  <p className="text-xs text-gray-500">Spell chimes, coin dings, and victory fanfares</p>
                </div>
                <input 
                  type="checkbox"
                  checked={settings.soundEnabled}
                  onChange={(e) => updateSettings({ soundEnabled: e.target.checked })}
                  className="w-5 h-5 accent-amber-600 rounded cursor-pointer"
                />
              </div>
              {settings.soundEnabled && (
                <div className="pt-2">
                  <div className="flex justify-between text-xs font-semibold text-gray-600 mb-1">
                    <span>SFX Volume</span>
                    <span>{Math.round(settings.soundVolume * 100)}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={settings.soundVolume}
                    onChange={(e) => updateSettings({ soundVolume: parseFloat(e.target.value) })}
                    className="w-full accent-amber-600 cursor-pointer"
                  />
                </div>
              )}
            </div>

            {/* Ambient Music Toggle & Volume */}
            <div className="bg-quest-bg p-4 rounded-2xl border border-quest-border/80 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-bold text-sm text-gray-800">Fantasy Ambient Music</span>
                  <p className="text-xs text-gray-500">Gentle generative melodic chord harmonies</p>
                </div>
                <input 
                  type="checkbox"
                  checked={settings.musicEnabled}
                  onChange={(e) => updateSettings({ musicEnabled: e.target.checked })}
                  className="w-5 h-5 accent-amber-600 rounded cursor-pointer"
                />
              </div>
              {settings.musicEnabled && (
                <div className="pt-2">
                  <div className="flex justify-between text-xs font-semibold text-gray-600 mb-1">
                    <span>Music Volume</span>
                    <span>{Math.round(settings.musicVolume * 100)}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={settings.musicVolume}
                    onChange={(e) => updateSettings({ musicVolume: parseFloat(e.target.value) })}
                    className="w-full accent-amber-600 cursor-pointer"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Graphics Quality */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-amber-800 flex items-center gap-2">
              <Monitor className="w-4 h-4" /> Graphics Quality
            </h4>
            <div className="grid grid-cols-3 gap-2">
              {(['low', 'medium', 'high'] as const).map((q) => (
                <button
                  key={q}
                  onClick={() => updateSettings({ graphicsQuality: q })}
                  className={`py-2.5 px-3 rounded-xl border text-xs font-bold capitalize transition-all ${
                    settings.graphicsQuality === q
                      ? 'bg-amber-100 border-amber-400 text-amber-900 shadow-xs'
                      : 'bg-white border-quest-border text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {q}
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-500">
              {settings.graphicsQuality === 'low' && 'Optimized for older student laptops with low power consumption.'}
              {settings.graphicsQuality === 'medium' && 'Balanced performance with smooth 3D rendering.'}
              {settings.graphicsQuality === 'high' && 'Full soft shadows, high particle density, and dynamic lighting.'}
            </p>
          </div>

          {/* Code Editor Font Size */}
          <div className="bg-quest-bg p-4 rounded-2xl border border-quest-border/80">
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-sm text-gray-800">Code Editor Font Size</span>
              <span className="text-xs font-bold text-amber-900">{settings.codeFontSize}px</span>
            </div>
            <input 
              type="range"
              min="12"
              max="20"
              step="1"
              value={settings.codeFontSize}
              onChange={(e) => updateSettings({ codeFontSize: parseInt(e.target.value) })}
              className="w-full accent-amber-600 cursor-pointer"
            />
          </div>

          {/* Reset Save Data */}
          <div className="pt-2 border-t border-quest-border">
            <button
              onClick={() => {
                setModalState('settings', false);
                setModalState('resetConfirm', true);
              }}
              className="w-full py-2.5 px-4 rounded-xl border border-rose-200 text-rose-700 bg-rose-50/70 hover:bg-rose-100 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Reset Adventure Progress
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-quest-cream/30 border-t border-quest-border flex justify-end">
          <button
            onClick={() => setModalState('settings', false)}
            className="px-5 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-sm transition-all"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
