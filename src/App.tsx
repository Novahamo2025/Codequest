import React, { useEffect } from 'react';
import { useGameStore } from './store/gameStore';
import { Navbar } from './components/layout/Navbar';
import { WelcomeScreen } from './components/screens/WelcomeScreen';
import { PlayerCreationScreen } from './components/screens/PlayerCreationScreen';
import { DashboardScreen } from './components/screens/DashboardScreen';
import { WorldSelectScreen } from './components/screens/WorldSelectScreen';
import { CertificateScreen } from './components/screens/CertificateScreen';
import { GameWorldCanvas } from './components/game/GameWorldCanvas';
import { CodingWorkspaceModal } from './components/editor/CodingWorkspaceModal';
import { NpcDialogueModal } from './components/npc/NpcDialogueModal';
import { SettingsModal } from './components/modals/SettingsModal';
import { HowToPlayModal } from './components/modals/HowToPlayModal';
import { LearningPathModal } from './components/modals/LearningPathModal';
import { ResetConfirmModal } from './components/modals/ResetConfirmModal';
import { PauseModal } from './components/modals/PauseModal';
import { ToastContainer } from './components/ui/ToastContainer';
import { pythonRuntime } from './engine/PythonRuntime';

export const App: React.FC = () => {
  const { screen, settings } = useGameStore();

  // Initialize Pyodide runtime in Web Worker in the background
  useEffect(() => {
    pythonRuntime.init();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-quest-bg text-quest-text font-game selection:bg-amber-200 selection:text-amber-900">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Screen Content */}
      <main className="flex-1 relative">
        {screen === 'welcome' && <WelcomeScreen />}
        {screen === 'player_creation' && <PlayerCreationScreen />}
        {screen === 'dashboard' && <DashboardScreen />}
        {screen === 'world_select' && <WorldSelectScreen />}
        {screen === 'gameplay' && <GameWorldCanvas />}
        {screen === 'certificate' && <CertificateScreen />}
      </main>

      {/* Global Interactive Overlays */}
      <CodingWorkspaceModal />
      <NpcDialogueModal />
      <SettingsModal />
      <HowToPlayModal />
      <LearningPathModal />
      <ResetConfirmModal />
      <PauseModal />
      <ToastContainer />
    </div>
  );
};

export default App;
