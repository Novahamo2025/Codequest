import React from 'react';
import { useGameStore } from '../../store/gameStore';
import { AlertTriangle, X } from 'lucide-react';

export const ResetConfirmModal: React.FC = () => {
  const { isResetConfirmOpen, setModalState, resetGameProgress } = useGameStore();

  if (!isResetConfirmOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-card border border-rose-200 overflow-hidden animate-scaleUp">
        <div className="p-6 text-center space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mx-auto text-2xl shadow-xs">
            <AlertTriangle className="w-7 h-7" />
          </div>
          <div>
            <h3 className="font-display font-bold text-xl text-gray-900">
              Reset All Progress?
            </h3>
            <p className="text-xs text-gray-600 mt-1 max-w-xs mx-auto leading-relaxed">
              This action will permanently erase your character, completed missions, coins, XP, and unlocked worlds from this device.
            </p>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              onClick={() => setModalState('resetConfirm', false)}
              className="flex-1 py-2.5 px-4 rounded-xl border border-quest-border bg-white hover:bg-gray-50 text-gray-700 font-bold text-xs transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => resetGameProgress()}
              className="flex-1 py-2.5 px-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-md transition-colors"
            >
              Yes, Reset Everything
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
