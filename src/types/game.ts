import { WorldId } from './mission';

export type CharacterClass = 'pyromancer' | 'ranger' | 'knight' | 'sage';

export interface PlayerCustomization {
  name: string;
  characterClass: CharacterClass;
  capeColor: string;
  hairColor: string;
  skinTone: string;
}

export interface InventoryItem {
  id: string;
  name: string;
  category: 'scroll' | 'crystal' | 'key' | 'potion' | 'relic';
  description: string;
  icon: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  count: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'learning' | 'exploration' | 'mastery' | 'wealth';
  xpReward: number;
  unlockedAt: string | null; // ISO timestamp or null
}

export interface GameSettings {
  soundEnabled: boolean;
  musicEnabled: boolean;
  soundVolume: number; // 0 to 1
  musicVolume: number; // 0 to 1
  graphicsQuality: 'low' | 'medium' | 'high';
  showControlsOverlay: boolean;
  codeFontSize: number;
}

export interface SaveData {
  version: number;
  lastSaved: string;
  player: PlayerCustomization;
  level: number;
  xp: number;
  coins: number;
  currentWorld: WorldId;
  activeMissionId: string | null;
  completedMissions: string[]; // List of mission IDs
  unlockedWorlds: WorldId[];
  inventory: InventoryItem[];
  achievements: Achievement[];
  collectedCoins: string[]; // IDs of coins collected in 3D worlds e.g. "forest_c1"
  settings: GameSettings;
}

export type GameScreen = 
  | 'welcome'
  | 'player_creation'
  | 'dashboard'
  | 'world_select'
  | 'gameplay'
  | 'certificate';
