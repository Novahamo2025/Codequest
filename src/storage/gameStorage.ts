import { SaveData, PlayerCustomization, GameSettings } from '../types/game';
import { ALL_WORLD_IDS } from '../missions';

const STORAGE_KEY = 'CODEQUEST_LOST_KINGDOM_SAVE_V1';
const CURRENT_VERSION = 1;

export const DEFAULT_SETTINGS: GameSettings = {
  soundEnabled: true,
  musicEnabled: true,
  soundVolume: 0.8,
  musicVolume: 0.5,
  graphicsQuality: 'high',
  showControlsOverlay: true,
  codeFontSize: 15
};

export const INITIAL_PLAYER: PlayerCustomization = {
  name: 'Apprentice Adept',
  characterClass: 'knight',
  capeColor: '#4F46E5', // Indigo
  hairColor: '#D97706', // Golden amber
  skinTone: '#FCD34D'
};

export function createDefaultSaveData(player: PlayerCustomization = INITIAL_PLAYER): SaveData {
  return {
    version: CURRENT_VERSION,
    lastSaved: new Date().toISOString(),
    player,
    level: 1,
    xp: 0,
    coins: 50,
    currentWorld: 'beginner-forest',
    activeMissionId: 'w1_m1',
    completedMissions: [],
    unlockedWorlds: [...ALL_WORLD_IDS],
    collectedCoins: [],
    inventory: [
      {
        id: 'novice_scroll',
        name: 'Rookie Coder Parchment',
        category: 'scroll',
        description: 'Contains the fundamental incantations of Python grammar.',
        icon: '📜',
        rarity: 'common',
        count: 1
      },
      {
        id: 'mana_potion',
        name: 'Elixir of Focus',
        category: 'potion',
        description: 'Restores mental clarity during complex algorithm design.',
        icon: '🧪',
        rarity: 'common',
        count: 2
      }
    ],
    achievements: [
      {
        id: 'first_step',
        title: 'The Journey Begins',
        description: 'Stepped into the enchanted realm of The Lost Kingdom.',
        icon: '🌟',
        category: 'exploration',
        xpReward: 50,
        unlockedAt: new Date().toISOString()
      },
      {
        id: 'first_code',
        title: 'Hello Kingdom!',
        description: 'Cast your very first print() statement.',
        icon: '📜',
        category: 'learning',
        xpReward: 100,
        unlockedAt: null
      },
      {
        id: 'forest_restored',
        title: 'Forest Guardian',
        description: 'Completed all 10 missions in the Beginner Forest.',
        icon: '🌲',
        category: 'mastery',
        xpReward: 300,
        unlockedAt: null
      },
      {
        id: 'valley_cleared',
        title: 'Master of Decision',
        description: 'Conquered Conditional Valley and unlocked all pathways.',
        icon: '⚖️',
        category: 'mastery',
        xpReward: 350,
        unlockedAt: null
      },
      {
        id: 'jungle_awakened',
        title: 'Infinite Looper',
        description: 'Reactivated the ancient loop machinery of Looping Jungle.',
        icon: '🔄',
        category: 'mastery',
        xpReward: 400,
        unlockedAt: null
      },
      {
        id: 'mountain_ascended',
        title: 'Function Wizard',
        description: 'Built the reusable spell system in Function Mountains.',
        icon: '⛰️',
        category: 'mastery',
        xpReward: 450,
        unlockedAt: null
      },
      {
        id: 'kingdom_archivist',
        title: 'Archivist Supreme',
        description: 'Restored the Data Structure Kingdom library records.',
        icon: '📚',
        category: 'mastery',
        xpReward: 500,
        unlockedAt: null
      },
      {
        id: 'kingdom_restored',
        title: 'Savior of the Lost Kingdom',
        description: 'Conquered the Master Dungeon and restored programming power to the realm.',
        icon: '👑',
        category: 'mastery',
        xpReward: 1000,
        unlockedAt: null
      },
      {
        id: 'coin_collector',
        title: 'Royal Treasurer',
        description: 'Accumulate at least 500 gold coins across your adventure.',
        icon: '💰',
        category: 'wealth',
        xpReward: 200,
        unlockedAt: null
      }
    ],
    settings: DEFAULT_SETTINGS
  };
}

export class GameStorageManager {
  public static load(): SaveData | null {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') {
        return this.migrate(parsed);
      }
      return null;
    } catch (e) {
      console.warn('Failed to parse save data from LocalStorage:', e);
      return null;
    }
  }

  public static save(data: SaveData): boolean {
    try {
      data.lastSaved = new Date().toISOString();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      return true;
    } catch (e) {
      console.error('Failed to save game data to LocalStorage:', e);
      return false;
    }
  }

  public static clear(): void {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (_) {}
  }

  public static hasSave(): boolean {
    try {
      return !!localStorage.getItem(STORAGE_KEY);
    } catch (_) {
      return false;
    }
  }

  private static migrate(raw: any): SaveData {
    // If future versions exist, handle migration here
    const defaultData = createDefaultSaveData();
    return {
      ...defaultData,
      ...raw,
      player: { ...defaultData.player, ...(raw.player || {}) },
      settings: { ...defaultData.settings, ...(raw.settings || {}) },
      completedMissions: Array.isArray(raw.completedMissions) ? raw.completedMissions : [],
      unlockedWorlds: [...ALL_WORLD_IDS],
      collectedCoins: Array.isArray(raw.collectedCoins) ? raw.collectedCoins : [],
      inventory: Array.isArray(raw.inventory) ? raw.inventory : defaultData.inventory,
      achievements: defaultData.achievements.map(defAch => {
        const existing = (raw.achievements || []).find((a: any) => a.id === defAch.id);
        return existing ? { ...defAch, unlockedAt: existing.unlockedAt } : defAch;
      })
    };
  }
}
