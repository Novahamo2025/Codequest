import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { Mission } from '../../types/mission';
import { useGameStore } from '../../store/gameStore';
import { Code2, CheckCircle2 } from 'lucide-react';

interface CodingStation3DProps {
  mission: Mission;
  position: [number, number, number];
  playerPos: THREE.Vector3;
}

export const CodingStation3D: React.FC<CodingStation3DProps> = ({ 
  mission, 
  position, 
  playerPos 
}) => {
  const { 
    openMission, 
    completedMissions, 
    isCodingWorkspaceOpen, 
    isNpcDialogueOpen, 
    isPauseMenuOpen 
  } = useGameStore();
  const crystalRef = useRef<THREE.Mesh>(null);
  const isCompleted = completedMissions.includes(mission.id);
  const isAnyModalOpen = isCodingWorkspaceOpen || isNpcDialogueOpen || isPauseMenuOpen;

  // Proximity check
  const stationVec = new THREE.Vector3(...position);
  const dist = playerPos.distanceTo(stationVec);
  const isNearby = dist <= 4.0;

  useFrame((_, delta) => {
    if (crystalRef.current) {
      crystalRef.current.rotation.y += delta * 1.5;
      crystalRef.current.rotation.x = Math.sin(Date.now() * 0.002) * 0.2;
    }
  });

  const handleOpen = () => {
    openMission(mission);
  };

  return (
    <group position={position}>
      {/* Stone Pedestal Base */}
      <mesh castShadow position={[0, 0.45, 0]}>
        <cylinderGeometry args={[0.7, 0.9, 0.9, 8]} />
        <meshStandardMaterial color="#475569" roughness={0.7} />
      </mesh>

      {/* Runic Inscription Plate */}
      <mesh position={[0, 0.92, 0]}>
        <cylinderGeometry args={[0.75, 0.75, 0.08, 8]} />
        <meshStandardMaterial 
          color={isCompleted ? '#059669' : '#D97706'} 
          emissive={isCompleted ? '#047857' : '#B45309'} 
          emissiveIntensity={0.6}
        />
      </mesh>

      {/* Floating Rotating Arcane Crystal */}
      <mesh 
        ref={crystalRef} 
        castShadow 
        position={[0, 1.6, 0]}
      >
        <octahedronGeometry args={[0.35]} />
        <meshStandardMaterial 
          color={isCompleted ? '#34D399' : '#FBBF24'} 
          emissive={isCompleted ? '#10B981' : '#F59E0B'} 
          emissiveIntensity={0.9}
          metalness={0.2}
          roughness={0.1}
        />
      </mesh>

      {/* Floating UI Tag and Interact Button */}
      {!isAnyModalOpen && (
        <Html position={[0, 2.3, 0]} center distanceFactor={15}>
          <div className="flex flex-col items-center pointer-events-auto select-none">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 border border-quest-border shadow-sm text-xs font-bold text-gray-900 whitespace-nowrap">
              <Code2 className="w-3.5 h-3.5 text-amber-600" />
              <span>M{mission.missionNumber}: {mission.title.split('—')[0].trim()}</span>
              {isCompleted && (
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              )}
            </div>

            {isNearby && (
              <button
                onClick={handleOpen}
                className="mt-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold text-xs shadow-glow-gold flex items-center gap-1.5 animate-bounce cursor-pointer whitespace-nowrap"
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>Code Quest [E]</span>
              </button>
            )}
          </div>
        </Html>
      )}
    </group>
  );
};
