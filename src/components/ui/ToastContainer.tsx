import React from 'react';
import { useGameStore, ToastNotification } from '../../store/gameStore';
import { X } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useGameStore();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-16 right-4 z-50 flex flex-col gap-2.5 max-w-sm pointer-events-none">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onDismiss={() => removeToast(toast.id)} />
      ))}
    </div>
  );
};

const ToastItem: React.FC<{ toast: ToastNotification; onDismiss: () => void }> = ({ toast, onDismiss }) => {
  const getStyles = () => {
    switch (toast.type) {
      case 'level_up':
        return 'bg-gradient-to-r from-amber-50 to-amber-100 border-amber-300 text-amber-900 shadow-glow-gold';
      case 'achievement':
        return 'bg-gradient-to-r from-purple-50 to-purple-100 border-purple-300 text-purple-900 shadow-md';
      case 'success':
        return 'bg-gradient-to-r from-emerald-50 to-emerald-100 border-emerald-300 text-emerald-900 shadow-glow-emerald';
      case 'info':
      default:
        return 'bg-white border-quest-border text-gray-800 shadow-card';
    }
  };

  return (
    <div 
      className={`pointer-events-auto flex items-start gap-3 p-3.5 rounded-2xl border ${getStyles()} animate-float transition-all`}
    >
      <div className="text-2xl select-none">
        {toast.icon || '✨'}
      </div>
      <div className="flex-1 pr-2">
        <h4 className="font-display font-bold text-sm leading-tight">
          {toast.title}
        </h4>
        <p className="text-xs font-medium opacity-90 mt-0.5 leading-snug">
          {toast.message}
        </p>
      </div>
      <button 
        onClick={onDismiss}
        className="opacity-60 hover:opacity-100 p-1 rounded-lg hover:bg-black/5 transition-opacity"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
