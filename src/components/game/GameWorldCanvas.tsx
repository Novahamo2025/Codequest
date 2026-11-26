import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { useGameStore } from '../../store/gameStore';
import { getMissionsForWorld, WORLDS } from '../../missions';
import { Player3D, PlayerInput } from './Player3D';
import { Environment3D } from './Environment3D';
import { Npc3D } from './Npc3D';
import { CodingStation3D } from './CodingStation3D';
import { Gate3D } from './Gate3D';
import { CollectibleCoin3D } from './CollectibleCoin3D';
import { MobileControls } from './MobileControls';
import { 
  Pause, 
  HelpCircle, 
  Compass, 
  BookOpen, 
  Sparkles, 
  ChevronRight,
  Maximize2
} from 'lucide-react';
import { soundEngine } from '../../engine/SoundEngine';

export const GameWorldCanvas: React.FC = () => {
  const { 
    currentWorld, 
    completedMissions, 
    setModalState, 
    openNpcDialogue, 
    openMission,
    isCodingWorkspaceOpen,
    isNpcDialogueOpen
  } = useGameStore();

  const worldDef = WORLDS.find(w => w.id === currentWorld) || WORLDS[0];
  const missions = getMissionsForWorld(currentWorld);

  // Keyboard input state
  const inputRef = useRef<PlayerInput>({
    forward: false,
    backward: false,
    left: false,
    right: false,
    jump: false,
    interact: false
  });

  const [playerPos, setPlayerPos] = useState<THREE.Vector3>(new THREE.Vector3(0, 0, 0));

  // Determine closest interactive target for [E] key
  const handleInteraction = useCallback(() => {
    if (isCodingWorkspaceOpen || isNpcDialogueOpen) return;

    // Check closest NPC
    for (const mission of missions) {
      const npcVec = new THREE.Vector3(...mission.npcPosition);
      if (playerPos.distanceTo(npcVec) <= 4.0) {
        openNpcDialogue(mission.npc, mission);
        return;
      }
    }

    // Check closest Coding Station
    for (const mission of missions) {
      const stationVec = new THREE.Vector3(...mission.stationPosition);
      if (playerPos.distanceTo(stationVec) <= 4.0) {
        openMission(mission);
        return;
      }
    }
  }, [missions, playerPos, isCodingWorkspaceOpen, isNpcDialogueOpen, openNpcDialogue, openMission]);

  // Keyboard listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (e.key === 'Escape') {
        setModalState('pause', true);
        return;
      }

      if (e.key === 'e' || e.key === 'E') {
        handleInteraction();
        return;
      }

      if (e.key === 'w' || e.key === 'W' || e.key === 'ArrowUp') inputRef.current.forward = true;
      if (e.key === 's' || e.key === 'S' || e.key === 'ArrowDown') inputRef.current.backward = true;
      if (e.key === 'a' || e.key === 'A' || e.key === 'ArrowLeft') inputRef.current.left = true;
      if (e.key === 'd' || e.key === 'D' || e.key === 'ArrowRight') inputRef.current.right = true;
      if (e.key === ' ') inputRef.current.jump = true;
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'w' || e.key === 'W' || e.key === 'ArrowUp') inputRef.current.forward = false;
      if (e.key === 's' || e.key === 'S' || e.key === 'ArrowDown') inputRef.current.backward = false;
      if (e.key === 'a' || e.key === 'A' || e.key === 'ArrowLeft') inputRef.current.left = false;
      if (e.key === 'd' || e.key === 'D' || e.key === 'ArrowRight') inputRef.current.right = false;
      if (e.key === ' ') inputRef.current.jump = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [handleInteraction, setModalState]);

  // Coins positions in this world
  const coinPositions: Array<{ id: string; pos: [number, number, number] }> = [
    { id: `${currentWorld}_c1`, pos: [-2, 0, -10] },
    { id: `${currentWorld}_c2`, pos: [2, 0, -18] },
    { id: `${currentWorld}_c3`, pos: [-3, 0, -25] },
    { id: `${currentWorld}_c4`, pos: [3, 0, -35] },
    { id: `${currentWorld}_c5`, pos: [-2, 0, -48] },
    { id: `${currentWorld}_c6`, pos: [1, 0, -58] }
  ];

  // Active mission in this world
  const currentWorldMissionsDone = missions.filter(m => completedMissions.includes(m.id)).length;
  const activeWorldMission = missions.find(m => !completedMissions.includes(m.id)) || missions[missions.length - 1];

  return (
    <div className="relative w-full h-[calc(100vh-65px)] bg-quest-bg overflow-hidden select-none">
      {/* 3D Scene Canvas */}
      <Canvas
        shadows
        camera={{ position: [0, 4.2, 7.5], fov: 50 }}
        style={{ width: '100%', height: '100%' }}
      >
        {/* Sky and Atmospheric Fog */}
        <color attach="background" args={[worldDef.skyColor]} />
        <fog attach="fog" args={[worldDef.fogColor, 20, 85]} />

        {/* Ambient & Directional Sun Lights */}
        <ambientLight intensity={0.8} />
        <directionalLight
          castShadow
          position={[25, 40, 20]}
          intensity={1.2}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={0.5}
          shadow-camera-far={120}
          shadow-camera-left={-40}
          shadow-camera-right={40}
          shadow-camera-top={40}
          shadow-camera-bottom={-40}
        />

        {/* 3D Player Character with Camera Follow */}
        <Player3D 
          inputRef={inputRef} 
          onPositionUpdate={setPlayerPos}
          initialPosition={[0, 0, 0]}
        />

        {/* 3D Environment (Terrain, Trees, Foliage, World Assets) */}
        <Environment3D worldId={currentWorld} />

        {/* Entrance Gate */}
        <Gate3D 
          position={[0, 0, -2]} 
          isUnlocked={true} 
          label="Entrance" 
        />

        {/* Boss Gateway at the end */}
        <Gate3D 
          position={[0, 0, -62]} 
          isUnlocked={true} 
          label="Grand Portal" 
        />

        {/* NPCs for this world */}
        {missions.map((mission) => (
          <Npc3D
            key={mission.id + '_npc'}
            npc={mission.npc}
            mission={mission}
            position={mission.npcPosition}
            playerPos={playerPos}
          />
        ))}

        {/* Coding Pedestals for this world */}
        {missions.map((mission) => (
          <CodingStation3D
            key={mission.id + '_station'}
            mission={mission}
            position={mission.stationPosition}
            playerPos={playerPos}
          />
        ))}

        {/* Collectible Gold Coins */}
        {coinPositions.map((c) => (
          <CollectibleCoin3D
            key={c.id}
            id={c.id}
            position={c.pos}
            playerPos={playerPos}
          />
        ))}
      </Canvas>

      {/* Floating Top Left HUD: World Badge & Mission Goal */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2 max-w-sm pointer-events-none">
        <div className="pointer-events-auto p-3.5 rounded-2xl glass-panel shadow-card flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-quest-bg border border-quest-border flex items-center justify-center text-2xl shadow-xs">
            {worldDef.badgeIcon}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-display font-bold text-sm text-gray-900">
                {worldDef.name}
              </h3>
              <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.2 rounded bg-amber-100 text-amber-800">
                {currentWorldMissionsDone}/{missions.length}
              </span>
            </div>
            <p className="text-xs text-gray-600 line-clamp-1">
              Active Quest: <strong>{activeWorldMission.title}</strong>
            </p>
          </div>
        </div>

        {/* Keyboard Controls Reminder Card */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/80 border border-quest-border text-[11px] font-semibold text-gray-600 shadow-xs">
          <span>WASD: Move</span>
          <span>•</span>
          <span>Space: Jump</span>
          <span>•</span>
          <span>E: Interact / Talk / Code</span>
          <span>•</span>
          <span>Esc: Pause</span>
        </div>
      </div>

      {/* Floating Top Right Controls: Pause & Help */}
      <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
        <button
          onClick={() => setModalState('howToPlay', true)}
          title="Controls & Guide"
          className="p-2.5 rounded-2xl glass-panel hover:bg-white text-gray-700 shadow-card transition-colors cursor-pointer"
        >
          <HelpCircle className="w-5 h-5" />
        </button>

        <button
          onClick={() => setModalState('pause', true)}
          title="Pause Game [Esc]"
          className="p-2.5 rounded-2xl glass-panel hover:bg-white text-gray-700 shadow-card transition-colors cursor-pointer"
        >
          <Pause className="w-5 h-5" />
        </button>
      </div>

      {/* On-Screen Mobile Touch Controls */}
      <MobileControls inputRef={inputRef} onInteract={handleInteraction} />
    </div>
  );
};
