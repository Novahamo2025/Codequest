export type DifficultyLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Master';

export type WorldId = 
  | 'beginner-forest'
  | 'conditional-valley'
  | 'looping-jungle'
  | 'function-mountains'
  | 'data-kingdom'
  | 'master-dungeon';

export interface ConceptExplanation {
  title: string;
  whatIsIt: string;
  whyUseful: string;
  syntax: string;
  exampleCode: string;
  expectedOutput: string;
  realWorldMetaphor: string;
  commonMistakes: string[];
}

export interface TestCase {
  id: string;
  description: string;
  type: 'output_exact' | 'output_contains' | 'output_lines' | 'behavior_test' | 'variable_value';
  expectedOutput?: string;
  expectedVariables?: Record<string, any>;
  testScript?: string; // Hidden python test verification code appended or run
  inputs?: string[]; // Inputs provided if input() is called
}

export interface NPCData {
  id: string;
  name: string;
  title: string;
  avatar: string;
  color: string;
  greeting: string;
  dialogue: string[];
}

export interface Mission {
  id: string;
  worldId: WorldId;
  worldIndex: number; // 1 to 6
  missionNumber: number; // 1 to 10
  title: string;
  difficulty: DifficultyLevel;
  npc: NPCData;
  story: string;
  learningObjective: string;
  concept: ConceptExplanation;
  challenge: string;
  starterCode: string;
  expectedOutputSummary?: string;
  testCases: TestCase[];
  hints: [string, string, string]; // 1: Concept reminder, 2: Syntax help, 3: Partial solution
  successMessage: string;
  xpReward: number;
  coinReward: number;
  unlockRequirements: string[]; // Mission IDs required
  isBoss?: boolean;
  stationPosition: [number, number, number]; // 3D coordinates for station/gate
  npcPosition: [number, number, number]; // 3D coordinates for NPC
}

export interface WorldDefinition {
  id: WorldId;
  index: number;
  name: string;
  subtitle: string;
  description: string;
  themeColor: string;
  badgeIcon: string;
  difficulty: DifficultyLevel;
  requiredLevel: number;
  bossTitle: string;
  skyColor: string;
  groundColor: string;
  fogColor: string;
  bannerImage: string;
}
