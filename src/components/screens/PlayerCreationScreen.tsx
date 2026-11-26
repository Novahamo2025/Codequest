import React, { useState } from 'react';
import { useGameStore } from '../../store/gameStore';
import { CharacterClass, PlayerCustomization } from '../../types/game';
import { 
  Sparkles, 
  Dice5, 
  ArrowRight, 
  Shield, 
  Flame, 
  Trees, 
  Zap, 
  Check 
} from 'lucide-react';
import { soundEngine } from '../../engine/SoundEngine';

interface ClassOption {
  id: CharacterClass;
  name: string;
  title: string;
  avatar: string;
  color: string;
  description: string;
  perk: string;
}

const CHARACTER_CLASSES: ClassOption[] = [
  {
    id: 'knight',
    name: 'Code Paladin',
    title: 'Bastion of Strict Logic',
    avatar: '🛡️',
    color: '#4F46E5', // Indigo
    description: 'Armored in structured principles. Approaches coding challenges with steadfast patience and methodical debugging.',
    perk: '+10% bonus coins from milestone missions'
  },
  {
    id: 'pyromancer',
    name: 'Flame Pyromancer',
    title: 'Sorcerer of Swift Incantations',
    avatar: '🔥',
    color: '#E11D48', // Ruby
    description: 'Blazes through algorithms with fiery speed and experimental curiosity, transforming errors into fuel for victory.',
    perk: '+15% bonus XP on first-try code submissions'
  },
  {
    id: 'ranger',
    name: 'Forest Ranger',
    title: 'Pathfinder of Algorithms',
    avatar: '🏹',
    color: '#15803D', // Emerald
    description: 'Scouts out patterns and optimal data paths in the foliage. Excels at tracking variable states and loops.',
    perk: 'Unlocks advanced hints at lower costs'
  },
  {
    id: 'sage',
    name: 'Cyber Sage',
    title: 'Architect of Sacred Systems',
    avatar: '⚡',
    color: '#7C3AED', // Violet
    description: 'A deep thinker who sees through data structures and object-oriented abstractions with celestial clarity.',
    perk: 'Starts with 2 extra Focus Elixirs in inventory'
  }
];

const CAPE_COLORS = [
  { name: 'Royal Indigo', value: '#4F46E5' },
  { name: 'Forest Green', value: '#15803D' },
  { name: 'Crimson Ember', value: '#E11D48' },
  { name: 'Golden Sun', value: '#D97706' },
  { name: 'Arcane Purple', value: '#7C3AED' },
  { name: 'Sky Azure', value: '#0284C7' },
];

const HAIR_COLORS = [
  { name: 'Golden Amber', value: '#D97706' },
  { name: 'Obsidian Black', value: '#1F2937' },
  { name: 'Silver Starlight', value: '#E2E8F0' },
  { name: 'Chestnut Brown', value: '#78350F' },
  { name: 'Emerald Moss', value: '#059669' },
];

const RANDOM_NAMES = [
  'Adept Orion',
  'Knight Gareth',
  'Ranger Talia',
  'Sorceress Lyra',
  'Coder Kieran',
  'Sage Valen',
  'Apprentice Maya',
  'Paladin Rowen'
];

export const PlayerCreationScreen: React.FC = () => {
  const { startNewGame } = useGameStore();

  const [name, setName] = useState('Apprentice Adept');
  const [characterClass, setCharacterClass] = useState<CharacterClass>('knight');
  const [capeColor, setCapeColor] = useState('#4F46E5');
  const [hairColor, setHairColor] = useState('#D97706');
  const [skinTone, setSkinTone] = useState('#FCD34D');

  const selectedClass = CHARACTER_CLASSES.find(c => c.id === characterClass)!;

  const handleRandomName = () => {
    soundEngine.playButton();
    const randomName = RANDOM_NAMES[Math.floor(Math.random() * RANDOM_NAMES.length)];
    setName(randomName);
  };

  const handleEmbark = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = name.trim() || 'Apprentice Adept';
    const player: PlayerCustomization = {
      name: trimmed,
      characterClass,
      capeColor,
      hairColor,
      skinTone
    };
    startNewGame(player);
  };

  return (
    <div className="min-h-[calc(100vh-65px)] bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EB] to-[#F5EFE6] py-10 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            Character Creation
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900">
            Forge Your Hero
          </h2>
          <p className="text-sm text-gray-600 mt-1 max-w-lg mx-auto">
            Choose your character class, customize your appearance, and prepare to awaken the ancient programming magic.
          </p>
        </div>

        {/* Creation Card */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 bg-white p-6 sm:p-8 rounded-3xl shadow-card border border-quest-border">
          {/* Left Column: Interactive Character Preview */}
          <div className="md:col-span-5 flex flex-col items-center justify-between bg-quest-bg p-6 rounded-2xl border border-quest-border/80">
            <div className="text-center w-full">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-800">
                Hero Preview
              </span>
              <h3 className="font-display font-bold text-xl text-gray-900 mt-0.5 truncate">
                {name || 'Hero'}
              </h3>
              <p className="text-xs text-quest-text-muted">
                {selectedClass.title}
              </p>
            </div>

            {/* Stylized Animated Character Avatar */}
            <div className="relative my-6 w-44 h-44 rounded-3xl flex items-center justify-center shadow-soft border-4 border-white transition-all overflow-hidden"
              style={{ backgroundColor: `${selectedClass.color}15` }}
            >
              <div 
                className="absolute inset-0 opacity-20"
                style={{ 
                  background: `radial-gradient(circle, ${capeColor} 10%, transparent 70%)` 
                }}
              />
              
              {/* Character Visual Avatar */}
              <div className="relative flex flex-col items-center animate-float">
                <div className="text-6xl select-none filter drop-shadow-md">
                  {selectedClass.avatar}
                </div>
                <div 
                  className="mt-2 px-3 py-0.5 rounded-full text-[10px] font-bold text-white shadow-xs"
                  style={{ backgroundColor: capeColor }}
                >
                  {selectedClass.name}
                </div>
              </div>

              {/* Decorative corner aura */}
              <div 
                className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full blur-xl opacity-60"
                style={{ backgroundColor: capeColor }}
              />
            </div>

            {/* Class Lore & Perk */}
            <div className="w-full text-center space-y-2 bg-white p-3.5 rounded-xl border border-quest-border/60">
              <p className="text-xs text-gray-600 leading-relaxed italic">
                "{selectedClass.description}"
              </p>
              <div className="text-[11px] font-bold text-amber-800 bg-amber-50 py-1 px-2 rounded-lg border border-amber-200">
                ✨ {selectedClass.perk}
              </div>
            </div>
          </div>

          {/* Right Column: Customization Controls */}
          <form onSubmit={handleEmbark} className="md:col-span-7 space-y-6">
            {/* Player Name */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                Hero Name
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  maxLength={20}
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter character name..."
                  className="flex-1 px-4 py-2.5 rounded-xl border border-quest-border focus:border-amber-500 focus:ring-2 focus:ring-amber-200 text-sm font-semibold text-gray-800 bg-quest-bg outline-none transition-all"
                />
                <button
                  type="button"
                  onClick={handleRandomName}
                  title="Randomize Name"
                  className="px-3.5 py-2.5 rounded-xl border border-quest-border bg-white hover:bg-gray-50 text-gray-600 hover:text-amber-800 transition-colors flex items-center justify-center cursor-pointer"
                >
                  <Dice5 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Character Class Archetype */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                Select Class
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {CHARACTER_CLASSES.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => {
                      soundEngine.playButton();
                      setCharacterClass(c.id);
                      setCapeColor(c.color);
                    }}
                    className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                      characterClass === c.id
                        ? 'bg-amber-50/80 border-amber-500 ring-2 ring-amber-300 shadow-xs'
                        : 'bg-white border-quest-border hover:bg-quest-bg'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl">{c.avatar}</span>
                      <span className="font-display font-bold text-xs text-gray-900">
                        {c.name}
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-500 line-clamp-1">
                      {c.title}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Cape Color Picker */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                Cape & Robe Hue
              </label>
              <div className="flex items-center gap-2.5">
                {CAPE_COLORS.map((color) => (
                  <button
                    key={color.value}
                    type="button"
                    title={color.name}
                    onClick={() => {
                      soundEngine.playButton();
                      setCapeColor(color.value);
                    }}
                    className={`w-8 h-8 rounded-full border-2 transition-transform cursor-pointer flex items-center justify-center ${
                      capeColor === color.value 
                        ? 'border-gray-900 scale-110 shadow-sm' 
                        : 'border-white hover:scale-105'
                    }`}
                    style={{ backgroundColor: color.value }}
                  >
                    {capeColor === color.value && (
                      <Check className="w-4 h-4 text-white stroke-[3]" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Hair Color Picker */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                Hair / Accent Color
              </label>
              <div className="flex items-center gap-2.5">
                {HAIR_COLORS.map((color) => (
                  <button
                    key={color.value}
                    type="button"
                    title={color.name}
                    onClick={() => {
                      soundEngine.playButton();
                      setHairColor(color.value);
                    }}
                    className={`w-8 h-8 rounded-full border-2 transition-transform cursor-pointer flex items-center justify-center ${
                      hairColor === color.value 
                        ? 'border-gray-900 scale-110 shadow-sm' 
                        : 'border-white hover:scale-105'
                    }`}
                    style={{ backgroundColor: color.value }}
                  >
                    {hairColor === color.value && (
                      <Check className="w-4 h-4 text-white stroke-[3]" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 hover:brightness-105 text-white font-bold text-base shadow-glow-gold hover:shadow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <span>Embark on the Adventure</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
