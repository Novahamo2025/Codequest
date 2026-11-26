import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useGameStore } from '../../store/gameStore';

interface CollectibleCoin3DProps {
  id: string;
  position: [number, number, number];
  playerPos: THREE.Vector3;
}

export const CollectibleCoin3D: React.FC<CollectibleCoin3DProps> = ({ 
  id, 
  position, 
  playerPos 
}) => {
  const { collectedCoins, collect3dCoin } = useGameStore();
  const coinRef = useRef<THREE.Group>(null);
  const isCollected = collectedCoins.includes(id);

  useFrame(({ clock }) => {
    if (isCollected || !coinRef.current) return;

    // Spin coin
    coinRef.current.rotation.y += 0.05;
    // Bob up and down
    coinRef.current.position.y = position[1] + 0.6 + Math.sin(clock.getElapsedTime() * 3) * 0.15;

    // Check collision radius
    const coinVec = new THREE.Vector3(position[0], position[1] + 0.6, position[2]);
    if (playerPos.distanceTo(coinVec) < 1.6) {
      collect3dCoin(id);
    }
  });

  if (isCollected) return null;

  return (
    <group ref={coinRef} position={position}>
      {/* Coin Cylinder Mesh */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.08, 16]} />
        <meshStandardMaterial 
          color="#F59E0B" 
          emissive="#D97706" 
          emissiveIntensity={0.5} 
          metalness={0.8} 
          roughness={0.2} 
        />
      </mesh>
    </group>
  );
};
