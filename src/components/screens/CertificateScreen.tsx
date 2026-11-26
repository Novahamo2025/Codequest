import React, { useEffect } from 'react';
import { useGameStore } from '../../store/gameStore';
import confetti from 'canvas-confetti';
import { Award, CheckCircle, Home, Sparkles, Trophy, Download } from 'lucide-react';
import { soundEngine } from '../../engine/SoundEngine';

export const CertificateScreen: React.FC = () => {
  const { player, level, xp, coins, completedMissions, setScreen } = useGameStore();

  useEffect(() => {
    soundEngine.playLevelUp();
    // Fire festive fireworks confetti
    const duration = 4000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#D97706', '#059669', '#0284C7', '#7C3AED', '#E11D48']
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#D97706', '#059669', '#0284C7', '#7C3AED', '#E11D48']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  return (
    <div className="min-h-[calc(100vh-65px)] bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EB] to-[#F5EFE6] py-12 px-4 flex flex-col items-center justify-center">
      <div className="max-w-3xl w-full space-y-8 animate-scaleUp">
        {/* Celebration Banner */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 font-bold text-xs uppercase tracking-wider mb-2 border border-amber-300">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Kingdom Restored • Victory Achieved</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-gray-900 tracking-tight">
            The Lost Kingdom is Saved!
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-lg mx-auto">
            You have conquered all six Python realms, overcome the Lost Kingdom Guardian, and restored programming knowledge to all people!
          </p>
        </div>

        {/* Master Diploma / Certificate */}
        <div className="relative bg-white p-8 sm:p-12 rounded-3xl shadow-glow-gold border-8 border-amber-200/90 text-center space-y-6 overflow-hidden">
          {/* Subtle background seal */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl opacity-5 pointer-events-none select-none">
            ⚔️
          </div>

          <div className="space-y-1">
            <div className="font-display text-xs tracking-widest uppercase font-extrabold text-amber-700">
              Royal Academy of Arcane Computation
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-900">
              Certificate of Python Mastery
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mt-2" />
          </div>

          <p className="text-xs uppercase tracking-wider font-semibold text-gray-500">
            This royal parchment honors
          </p>

          <div className="font-display font-extrabold text-3xl sm:text-4xl text-amber-900 underline decoration-amber-400 decoration-2 underline-offset-8">
            {player.name}
          </div>

          <p className="text-xs sm:text-sm text-gray-700 max-w-md mx-auto leading-relaxed">
            for successfully mastering the fundamental arts of <strong>Python Programming</strong>:
            variables, branching logic, loop structures, reusable functions, data collections, and object-oriented architecture across all 60 missions.
          </p>

          {/* Stats Badges */}
          <div className="grid grid-cols-3 gap-3 max-w-md mx-auto pt-4 border-t border-quest-border/80">
            <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200">
              <div className="font-bold text-sm text-amber-900">Level {level}</div>
              <div className="text-[10px] text-gray-500 font-medium">Hero Standing</div>
            </div>
            <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200">
              <div className="font-bold text-sm text-emerald-900">{completedMissions.length}/60</div>
              <div className="text-[10px] text-gray-500 font-medium">Missions Solved</div>
            </div>
            <div className="p-2.5 rounded-xl bg-yellow-50 border border-yellow-200">
              <div className="font-bold text-sm text-yellow-900">{coins} 🪙</div>
              <div className="text-[10px] text-gray-500 font-medium">Gold Collected</div>
            </div>
          </div>

          {/* Royal Signature & Date */}
          <div className="pt-6 flex items-center justify-between text-xs text-gray-500 border-t border-quest-border/60">
            <div className="text-left">
              <div className="font-display font-bold text-gray-800">Elder Orion & Council</div>
              <div className="text-[10px]">Guardians of the Six Realms</div>
            </div>
            <div className="w-12 h-12 rounded-full border-2 border-amber-500 bg-amber-100/50 flex items-center justify-center text-xl shadow-xs">
              👑
            </div>
            <div className="text-right">
              <div className="font-semibold text-gray-800">{new Date().toLocaleDateString()}</div>
              <div className="text-[10px]">Restoration Date</div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => {
              soundEngine.playButton();
              setScreen('dashboard');
            }}
            className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-glow-gold hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Return to Dashboard</span>
          </button>
          <button
            onClick={() => window.print()}
            className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white hover:bg-gray-50 border border-quest-border text-gray-700 font-bold text-sm shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4 text-amber-700" />
            <span>Print Diploma</span>
          </button>
        </div>
      </div>
    </div>
  );
};
