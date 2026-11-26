import React from 'react';
import { PlayerInput } from './Player3D';
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight, ArrowUpCircle, MessageSquare } from 'lucide-react';

interface MobileControlsProps {
  inputRef: React.MutableRefObject<PlayerInput>;
  onInteract: () => void;
}

export const MobileControls: React.FC<MobileControlsProps> = ({ inputRef, onInteract }) => {
  const setKey = (key: keyof PlayerInput, val: boolean) => {
    inputRef.current[key] = val;
  };

  return (
    <div className="fixed bottom-6 inset-x-6 z-20 flex items-end justify-between pointer-events-none md:hidden select-none">
      {/* Directional Pad */}
      <div className="pointer-events-auto grid grid-cols-3 gap-1.5 p-2 rounded-3xl glass-panel shadow-card">
        <div />
        <button
          onTouchStart={() => setKey('forward', true)}
          onTouchEnd={() => setKey('forward', false)}
          onMouseDown={() => setKey('forward', true)}
          onMouseUp={() => setKey('forward', false)}
          className="w-12 h-12 rounded-2xl bg-white active:bg-amber-100 border border-quest-border flex items-center justify-center text-gray-700 shadow-xs"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
        <div />

        <button
          onTouchStart={() => setKey('left', true)}
          onTouchEnd={() => setKey('left', false)}
          onMouseDown={() => setKey('left', true)}
          onMouseUp={() => setKey('left', false)}
          className="w-12 h-12 rounded-2xl bg-white active:bg-amber-100 border border-quest-border flex items-center justify-center text-gray-700 shadow-xs"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        <button
          onTouchStart={() => setKey('backward', true)}
          onTouchEnd={() => setKey('backward', false)}
          onMouseDown={() => setKey('backward', true)}
          onMouseUp={() => setKey('backward', false)}
          className="w-12 h-12 rounded-2xl bg-white active:bg-amber-100 border border-quest-border flex items-center justify-center text-gray-700 shadow-xs"
        >
          <ArrowDown className="w-6 h-6" />
        </button>

        <button
          onTouchStart={() => setKey('right', true)}
          onTouchEnd={() => setKey('right', false)}
          onMouseDown={() => setKey('right', true)}
          onMouseUp={() => setKey('right', false)}
          className="w-12 h-12 rounded-2xl bg-white active:bg-amber-100 border border-quest-border flex items-center justify-center text-gray-700 shadow-xs"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>

      {/* Action & Jump Buttons */}
      <div className="pointer-events-auto flex flex-col gap-3">
        {/* Interact / Talk */}
        <button
          onClick={onInteract}
          className="w-14 h-14 rounded-2xl bg-amber-600 active:bg-amber-700 text-white flex flex-col items-center justify-center shadow-glow-gold"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="text-[10px] font-bold mt-0.5">Act</span>
        </button>

        {/* Jump */}
        <button
          onTouchStart={() => setKey('jump', true)}
          onTouchEnd={() => setKey('jump', false)}
          onMouseDown={() => setKey('jump', true)}
          onMouseUp={() => setKey('jump', false)}
          className="w-14 h-14 rounded-2xl bg-emerald-600 active:bg-emerald-700 text-white flex flex-col items-center justify-center shadow-glow-emerald"
        >
          <ArrowUpCircle className="w-6 h-6" />
          <span className="text-[10px] font-bold mt-0.5">Jump</span>
        </button>
      </div>
    </div>
  );
};
