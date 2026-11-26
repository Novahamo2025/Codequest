import { WorldDefinition } from '../types/mission';

export const WORLDS: WorldDefinition[] = [
  {
    id: 'beginner-forest',
    index: 1,
    name: 'Beginner Forest',
    subtitle: 'The Awakening of Syntax',
    description: 'A verdant forest ancient trees, sparkling waterfalls, wooden bridges, and magical gates where the fundamentals of Python are restored.',
    themeColor: '#15803D', // Forest Green
    badgeIcon: '🌲',
    difficulty: 'Beginner',
    requiredLevel: 1,
    bossTitle: 'Elder Forest Crystal',
    skyColor: '#BAE6FD',
    groundColor: '#4ADE80',
    fogColor: '#E0F2FE',
    bannerImage: 'forest'
  },
  {
    id: 'conditional-valley',
    index: 2,
    name: 'Conditional Valley',
    subtitle: 'The Pathways of Logic',
    description: 'A grand mountain valley with gated stone bridges, waterfalls, and watchtowers that only yield to true logical conditions.',
    themeColor: '#0284C7', // Sky Blue
    badgeIcon: '⚖️',
    difficulty: 'Beginner',
    requiredLevel: 2,
    bossTitle: 'Valley Stone Guardian',
    skyColor: '#7DD3FC',
    groundColor: '#38BDF8',
    fogColor: '#E0F2FE',
    bannerImage: 'valley'
  },
  {
    id: 'looping-jungle',
    index: 3,
    name: 'Looping Jungle',
    subtitle: 'The Cycles of Eternity',
    description: 'A dense, emerald rainforest filled with ancient rhythmic watermills and repeating stone gears awaiting reactivation.',
    themeColor: '#059669', // Emerald
    badgeIcon: '🔄',
    difficulty: 'Intermediate',
    requiredLevel: 4,
    bossTitle: 'The Ancient Jungle Engine',
    skyColor: '#A7F3D0',
    groundColor: '#10B981',
    fogColor: '#D1FAE5',
    bannerImage: 'jungle'
  },
  {
    id: 'function-mountains',
    index: 4,
    name: 'Function Mountains',
    subtitle: 'The Peaks of Reusability',
    description: 'Snow-capped peaks, rope bridges, and high sanctuary temples where powerful reusable spells are crafted into functions.',
    themeColor: '#7C3AED', // Purple
    badgeIcon: '⛰️',
    difficulty: 'Intermediate',
    requiredLevel: 6,
    bossTitle: 'The High Archmage of Spells',
    skyColor: '#DDD6FE',
    groundColor: '#E2E8F0',
    fogColor: '#EDE9FE',
    bannerImage: 'mountains'
  },
  {
    id: 'data-kingdom',
    index: 5,
    name: 'Data Structure Kingdom',
    subtitle: 'The Royal Archives',
    description: 'A magnificent golden city of libraries, vaults, and markets where vast collections of knowledge are structured into lists and dictionaries.',
    themeColor: '#D97706', // Amber Gold
    badgeIcon: '📚',
    difficulty: 'Advanced',
    requiredLevel: 8,
    bossTitle: 'The Grand Vault Keeper',
    skyColor: '#FDE68A',
    groundColor: '#FBBF24',
    fogColor: '#FEF3C7',
    bannerImage: 'kingdom'
  },
  {
    id: 'master-dungeon',
    index: 6,
    name: 'Master Dungeon',
    subtitle: 'The Citadel of Architecture',
    description: 'The monumental fortress containing the Lost Kingdom core. Command classes, inheritance, and error shields to restore the realm.',
    themeColor: '#E11D48', // Ruby
    badgeIcon: '👑',
    difficulty: 'Master',
    requiredLevel: 10,
    bossTitle: 'The Lost Kingdom Guardian',
    skyColor: '#FECDD3',
    groundColor: '#94A3B8',
    fogColor: '#FFE4E6',
    bannerImage: 'dungeon'
  }
];
