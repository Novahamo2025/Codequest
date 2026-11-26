import { create } from 'zustand';
import { 
  GameScreen, 
  PlayerCustomization, 
  GameSettings, 
  InventoryItem, 
  Achievement, 
  SaveData 
} from '../types/game';
import { Mission, WorldId, NPCData } from '../types/mission';
import { 
  GameStorageManager, 
  createDefaultSaveData, 
  DEFAULT_SETTINGS, 
  INITIAL_PLAYER 
} from '../storage/gameStorage';
import { getMissionById, isWorldUnlocked, WORLDS, ALL_WORLD_IDS } from '../missions';
import { soundEngine } from '../engine/SoundEngine';

export interface ToastNotification {
  id: string;
  title: string;
  message: string;
  type: 'success' | 'level_up' | 'achievement' | 'info';
  icon?: string;
}

export interface GameState {
  screen: GameScreen;
  player: PlayerCustomization;
  level: number;
  xp: number;
  coins: number;
  currentWorld: WorldId;
  activeMission: Mission | null;
  completedMissions: string[];
  unlockedWorlds: WorldId[];
  inventory: InventoryItem[];
  achievements: Achievement[];
  collectedCoins: string[];
  settings: GameSettings;

  // UI state
  isCodingWorkspaceOpen: boolean;
  isNpcDialogueOpen: boolean;
  currentNpc: NPCData | null;
  dialogueMission: Mission | null;
  isPauseMenuOpen: boolean;
  isSettingsModalOpen: boolean;
  isHowToPlayModalOpen: boolean;
  isLearningPathModalOpen: boolean;
  isResetConfirmOpen: boolean;
  toasts: ToastNotification[];

  // Actions
  setScreen: (screen: GameScreen) => void;
  setPlayer: (player: PlayerCustomization) => void;
  startNewGame: (player: PlayerCustomization) => void;
  loadSavedGame: () => boolean;
  resetGameProgress: () => void;
  selectWorld: (worldId: WorldId) => void;
  openMission: (mission: Mission) => void;
  closeMission: () => void;
  openNpcDialogue: (npc: NPCData, mission?: Mission) => void;
  closeNpcDialogue: () => void;
  completeMission: (missionId: string, xpReward: number, coinReward: number) => void;
  collect3dCoin: (coinId: string) => void;
  updateSettings: (newSettings: Partial<GameSettings>) => void;
  setModalState: (modal: 'pause' | 'settings' | 'howToPlay' | 'learningPath' | 'resetConfirm', open: boolean) => void;
  addToast: (toast: Omit<ToastNotification, 'id'>) => void;
  removeToast: (id: string) => void;
  hasSavedGame: () => boolean;
}

export const xpForNextLevel = (level: number) => level * 250;

export const useGameStore = create<GameState>((set, get) => {
  // Try loading save data initially
  const existingSave = GameStorageManager.load();
  const initialData = existingSave || createDefaultSaveData();

  return {
    screen: 'welcome',
    player: initialData.player,
    level: initialData.level,
    xp: initialData.xp,
    coins: initialData.coins,
    currentWorld: initialData.currentWorld,
    activeMission: initialData.activeMissionId ? getMissionById(initialData.activeMissionId) || null : null,
    completedMissions: initialData.completedMissions,
    unlockedWorlds: ALL_WORLD_IDS,
    inventory: initialData.inventory,
    achievements: initialData.achievements,
    collectedCoins: initialData.collectedCoins,
    settings: initialData.settings,

    isCodingWorkspaceOpen: false,
    isNpcDialogueOpen: false,
    currentNpc: null,
    dialogueMission: null,
    isPauseMenuOpen: false,
    isSettingsModalOpen: false,
    isHowToPlayModalOpen: false,
    isLearningPathModalOpen: false,
    isResetConfirmOpen: false,
    toasts: [],

    hasSavedGame: () => GameStorageManager.hasSave(),

    setScreen: (screen) => {
      soundEngine.playButton();
      set({ screen });
    },

    setPlayer: (player) => {
      set({ player });
      const current = get();
      GameStorageManager.save(exportSave(current));
    },

    startNewGame: (player) => {
      const defaultData = createDefaultSaveData(player);
      GameStorageManager.save(defaultData);
      set({
        ...defaultData,
        screen: 'dashboard',
        activeMission: getMissionById('w1_m1') || null,
        isCodingWorkspaceOpen: false,
        isNpcDialogueOpen: false
      });
      soundEngine.playLevelUp();
      get().addToast({
        title: 'Adventure Started!',
        message: `Welcome to the Lost Kingdom, ${player.name}!`,
        type: 'info',
        icon: '⚔️'
      });
    },

    loadSavedGame: () => {
      const save = GameStorageManager.load();
      if (!save) return false;

      set({
        player: save.player,
        level: save.level,
        xp: save.xp,
        coins: save.coins,
        currentWorld: save.currentWorld,
        activeMission: save.activeMissionId ? getMissionById(save.activeMissionId) || null : null,
        completedMissions: save.completedMissions,
        unlockedWorlds: ALL_WORLD_IDS,
        inventory: save.inventory,
        achievements: save.achievements,
        collectedCoins: save.collectedCoins,
        settings: save.settings,
        screen: 'dashboard'
      });

      soundEngine.setVolumes(
        save.settings.soundVolume,
        save.settings.musicVolume,
        save.settings.soundEnabled,
        save.settings.musicEnabled
      );

      get().addToast({
        title: 'Save Loaded',
        message: `Welcome back, ${save.player.name}!`,
        type: 'info',
        icon: '💾'
      });

      return true;
    },

    resetGameProgress: () => {
      GameStorageManager.clear();
      const defaultData = createDefaultSaveData();
      set({
        ...defaultData,
        screen: 'welcome',
        activeMission: null,
        isResetConfirmOpen: false,
        isPauseMenuOpen: false
      });
      get().addToast({
        title: 'Progress Reset',
        message: 'All local save data has been wiped.',
        type: 'info',
        icon: '🔄'
      });
    },

    selectWorld: (worldId) => {
      soundEngine.playButton();
      set({ currentWorld: worldId, screen: 'gameplay' });
      const state = get();
      GameStorageManager.save(exportSave(state));
    },

    openMission: (mission) => {
      soundEngine.playButton();
      set({ activeMission: mission, isCodingWorkspaceOpen: true, isNpcDialogueOpen: false });
    },

    closeMission: () => {
      soundEngine.playButton();
      set({ isCodingWorkspaceOpen: false });
    },

    openNpcDialogue: (npc, mission) => {
      soundEngine.playNpc();
      set({ currentNpc: npc, dialogueMission: mission || null, isNpcDialogueOpen: true });
    },

    closeNpcDialogue: () => {
      soundEngine.playButton();
      set({ isNpcDialogueOpen: false, currentNpc: null, dialogueMission: null });
    },

    completeMission: (missionId, xpReward, coinReward) => {
      const state = get();
      const isAlreadyCompleted = state.completedMissions.includes(missionId);
      const newCompleted = isAlreadyCompleted 
        ? state.completedMissions 
        : [...state.completedMissions, missionId];

      let newXp = state.xp + (isAlreadyCompleted ? Math.floor(xpReward * 0.2) : xpReward);
      let newCoins = state.coins + (isAlreadyCompleted ? Math.floor(coinReward * 0.2) : coinReward);
      let newLevel = state.level;

      // Check level up
      let leveledUp = false;
      while (newXp >= xpForNextLevel(newLevel)) {
        newXp -= xpForNextLevel(newLevel);
        newLevel += 1;
        leveledUp = true;
      }

      // Check unlocked worlds
      const newUnlockedWorlds = [...state.unlockedWorlds];
      WORLDS.forEach(w => {
        if (!newUnlockedWorlds.includes(w.id) && isWorldUnlocked(w.id, newCompleted)) {
          newUnlockedWorlds.push(w.id);
          get().addToast({
            title: 'New World Unlocked!',
            message: `You unlocked ${w.name}!`,
            type: 'success',
            icon: w.badgeIcon
          });
        }
      });

      // Update achievements
      const updatedAchievements = state.achievements.map(ach => {
        if (ach.unlockedAt) return ach;
        let unlock = false;

        if (ach.id === 'first_code' && newCompleted.length >= 1) unlock = true;
        if (ach.id === 'forest_restored' && newCompleted.includes('w1_m10')) unlock = true;
        if (ach.id === 'valley_cleared' && newCompleted.includes('w2_m10')) unlock = true;
        if (ach.id === 'jungle_awakened' && newCompleted.includes('w3_m10')) unlock = true;
        if (ach.id === 'mountain_ascended' && newCompleted.includes('w4_m10')) unlock = true;
        if (ach.id === 'kingdom_archivist' && newCompleted.includes('w5_m10')) unlock = true;
        if (ach.id === 'kingdom_restored' && newCompleted.includes('w6_m10')) unlock = true;
        if (ach.id === 'coin_collector' && newCoins >= 500) unlock = true;

        if (unlock) {
          get().addToast({
            title: 'Achievement Unlocked!',
            message: ach.title,
            type: 'achievement',
            icon: ach.icon
          });
          return { ...ach, unlockedAt: new Date().toISOString() };
        }
        return ach;
      });

      // Check final boss victory
      const isFinalBoss = missionId === 'w6_m10';

      set({
        completedMissions: newCompleted,
        xp: newXp,
        coins: newCoins,
        level: newLevel,
        unlockedWorlds: newUnlockedWorlds,
        achievements: updatedAchievements,
        isCodingWorkspaceOpen: false,
        screen: isFinalBoss ? 'certificate' : state.screen
      });

      if (leveledUp) {
        soundEngine.playLevelUp();
        get().addToast({
          title: 'LEVEL UP!',
          message: `You reached Level ${newLevel}! Magic power boosted!`,
          type: 'level_up',
          icon: '⭐'
        });
      } else {
        soundEngine.playMissionSuccess();
      }

      const updatedState = get();
      GameStorageManager.save(exportSave(updatedState));
    },

    collect3dCoin: (coinId) => {
      const state = get();
      if (state.collectedCoins.includes(coinId)) return;

      soundEngine.playCoin();
      const newCoins = state.coins + 10;
      const newCollected = [...state.collectedCoins, coinId];

      set({
        coins: newCoins,
        collectedCoins: newCollected
      });

      get().addToast({
        title: '+10 Coins!',
        message: 'Picked up a shiny gold coin.',
        type: 'info',
        icon: '🪙'
      });

      const updatedState = get();
      GameStorageManager.save(exportSave(updatedState));
    },

    updateSettings: (newSettings) => {
      const current = get();
      const merged = { ...current.settings, ...newSettings };
      set({ settings: merged });

      soundEngine.setVolumes(
        merged.soundVolume,
        merged.musicVolume,
        merged.soundEnabled,
        merged.musicEnabled
      );

      if (merged.musicEnabled) {
        soundEngine.startBgm();
      } else {
        soundEngine.stopBgm();
      }

      GameStorageManager.save(exportSave({ ...current, settings: merged }));
    },

    setModalState: (modal, open) => {
      soundEngine.playButton();
      if (modal === 'pause') set({ isPauseMenuOpen: open });
      if (modal === 'settings') set({ isSettingsModalOpen: open });
      if (modal === 'howToPlay') set({ isHowToPlayModalOpen: open });
      if (modal === 'learningPath') set({ isLearningPathModalOpen: open });
      if (modal === 'resetConfirm') set({ isResetConfirmOpen: open });
    },

    addToast: (toast) => {
      const id = 'toast_' + Math.random().toString(36).substring(2, 9);
      const newToast: ToastNotification = { ...toast, id };
      set((s) => ({ toasts: [...s.toasts, newToast] }));

      setTimeout(() => {
        get().removeToast(id);
      }, 4500);
    },

    removeToast: (id) => {
      set((s) => ({ toasts: s.toasts.filter(t => t.id !== id) }));
    }
  };
});

function exportSave(state: GameState): SaveData {
  return {
    version: 1,
    lastSaved: new Date().toISOString(),
    player: state.player,
    level: state.level,
    xp: state.xp,
    coins: state.coins,
    currentWorld: state.currentWorld,
    activeMissionId: state.activeMission?.id || null,
    completedMissions: state.completedMissions,
    unlockedWorlds: state.unlockedWorlds,
    inventory: state.inventory,
    achievements: state.achievements,
    collectedCoins: state.collectedCoins,
    settings: state.settings
  };
}
