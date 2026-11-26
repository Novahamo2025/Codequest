import { Mission, WorldId } from '../types/mission';
import { WORLD1_MISSIONS } from './world1';
import { WORLD2_MISSIONS } from './world2';
import { WORLD3_MISSIONS } from './world3';
import { WORLD4_MISSIONS } from './world4';
import { WORLD5_MISSIONS } from './world5';
import { WORLD6_MISSIONS } from './world6';
import { WORLDS } from './worldData';

export const ALL_MISSIONS: Mission[] = [
  ...WORLD1_MISSIONS,
  ...WORLD2_MISSIONS,
  ...WORLD3_MISSIONS,
  ...WORLD4_MISSIONS,
  ...WORLD5_MISSIONS,
  ...WORLD6_MISSIONS
];

export { WORLDS };

export function getMissionsForWorld(worldId: WorldId): Mission[] {
  return ALL_MISSIONS.filter(m => m.worldId === worldId);
}

export function getMissionById(id: string): Mission | undefined {
  return ALL_MISSIONS.find(m => m.id === id);
}

export function getNextMission(currentId: string): Mission | undefined {
  const idx = ALL_MISSIONS.findIndex(m => m.id === currentId);
  if (idx >= 0 && idx < ALL_MISSIONS.length - 1) {
    return ALL_MISSIONS[idx + 1];
  }
  return undefined;
}

export const ALL_WORLD_IDS: WorldId[] = [
  'beginner-forest',
  'conditional-valley',
  'looping-jungle',
  'function-mountains',
  'data-kingdom',
  'master-dungeon'
];

export function isMissionUnlocked(_missionId: string, _completedMissions: string[]): boolean {
  return true; // All missions unlocked by default for free exploration
}

export function isWorldUnlocked(_worldId: WorldId, _completedMissions: string[]): boolean {
  return true; // All worlds unlocked by default for free exploration
}
