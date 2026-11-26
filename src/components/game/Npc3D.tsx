import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { NPCData, Mission } from '../../types/mission';
import { useGameStore } from '../../store/gameStore';
import { MessageSquare } from 'lucide-react';

interface Npc3DProps {
  npc: NPCData;
  mission: Mission;
  position: [number, number, number];
  playerPos: THREE.Vector3;
}

export const Npc3D: React.FC<Npc3DProps> = ({ npc, mission, position, playerPos }) => {
  const { 
    openNpcDialogue, 
    completedMissions, 
    isCodingWorkspaceOpen, 
    isNpcDialogueOpen, 
    isPauseMenuOpen 
  } = useGameStore();
  const groupRef = useRef<THREE.Group>(null);
  const isMissionCompleted = completedMissions.includes(mission.id);
  const isAnyModalOpen = isCodingWorkspaceOpen || isNpcDialogueOpen || isPauseMenuOpen;

  // Check distance to player
  const npcVec = new THREE.Vector3(...position);
  const dist = playerPos.distanceTo(npcVec);
  const isNearby = dist <= 3.8;

  useFrame(({ clock }) => {
    if (groupRef.current) {
      // Gentle idle floating / bobbing
      groupRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 2) * 0.08;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Shadow */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 0]}>
        <circleGeometry args={[0.5, 16]} />
        <meshBasicMaterial color="#000000" opacity={0.25} transparent />
      </mesh>

      {/* NPC Character Model */}
      <group position={[0, 0.8, 0]}>
        {/* Robes */}
        <mesh castShadow position={[0, 0, 0]}>
          <cylinderGeometry args={[0.3, 0.45, 1.1, 8]} />
          <meshStandardMaterial color={npc.color} roughness={0.6} />
        </mesh>

        {/* Head */}
        <mesh castShadow position={[0, 0.7, 0]}>
          <sphereGeometry args={[0.26, 12, 12]} />
          <meshStandardMaterial color="#FCD34D" roughness={0.7} />
        </mesh>

        {/* Wizard / Scholar Hat */}
        <mesh position={[0, 1.05, 0]}>
          <coneGeometry args={[0.35, 0.6, 8]} />
          <meshStandardMaterial color={npc.color} />
        </mesh>

        {/* Quest Icon Float Above Head */}
        <mesh position={[0, 1.6, 0]}>
          <octahedronGeometry args={[0.18]} />
          <meshStandardMaterial 
            color={isMissionCompleted ? '#10B981' : '#F59E0B'} 
            emissive={isMissionCompleted ? '#059669' : '#D97706'} 
            emissiveIntensity={0.8}
          />
        </mesh>
      </group>

      {/* Floating 2D Nameplate & Interaction Prompt */}
      {!isAnyModalOpen && (
        <Html position={[0, 2.6, 0]} center distanceFactor={15}>
          <div className="flex flex-col items-center pointer-events-auto select-none">
            {/* NPC Name Tag */}
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 border border-quest-border shadow-sm text-xs font-bold text-gray-900 whitespace-nowrap">
              <span>{npc.avatar}</span>
              <span>{npc.name}</span>
              {isMissionCompleted && (
                <span className="text-[10px] text-emerald-600">✓</span>
              )}
            </div>

            {/* Interactive Action Prompt when Player is close */}
            {isNearby && (
              <button
                onClick={() => openNpcDialogue(npc, mission)}
                className="mt-1.5 px-3 py-1 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-[11px] shadow-glow-gold flex items-center gap-1.5 animate-bounce cursor-pointer whitespace-nowrap"
              >
                <MessageSquare className="w-3 h-3" />
                <span>Talk [E]</span>
              </button>
            )}
          </div>
        </Html>
      )}
    </group>
  );
};
