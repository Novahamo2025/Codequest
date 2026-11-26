import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface Gate3DProps {
  position: [number, number, number];
  isUnlocked: boolean;
  label?: string;
}

export const Gate3D: React.FC<Gate3DProps> = ({ position, isUnlocked, label = 'Gate' }) => {
  const leftDoorRef = useRef<THREE.Group>(null);
  const rightDoorRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    // Animate gate swing open if unlocked
    const targetAngle = isUnlocked ? Math.PI * 0.45 : 0;

    if (leftDoorRef.current) {
      leftDoorRef.current.rotation.y = THREE.MathUtils.lerp(
        leftDoorRef.current.rotation.y,
        -targetAngle,
        delta * 2.5
      );
    }
    if (rightDoorRef.current) {
      rightDoorRef.current.rotation.y = THREE.MathUtils.lerp(
        rightDoorRef.current.rotation.y,
        targetAngle,
        delta * 2.5
      );
    }
  });

  return (
    <group position={position}>
      {/* Left Pillar */}
      <mesh castShadow position={[-2.4, 3, 0]}>
        <boxGeometry args={[0.9, 6, 0.9]} />
        <meshStandardMaterial color="#475569" roughness={0.7} />
      </mesh>

      {/* Right Pillar */}
      <mesh castShadow position={[2.4, 3, 0]}>
        <boxGeometry args={[0.9, 6, 0.9]} />
        <meshStandardMaterial color="#475569" roughness={0.7} />
      </mesh>

      {/* Arch Top Header */}
      <mesh castShadow position={[0, 6.2, 0]}>
        <boxGeometry args={[5.8, 0.8, 1]} />
        <meshStandardMaterial color="#334155" roughness={0.6} />
      </mesh>

      {/* Runic Keystone Crystal */}
      <mesh position={[0, 6.2, 0.6]}>
        <octahedronGeometry args={[0.3]} />
        <meshStandardMaterial 
          color={isUnlocked ? '#10B981' : '#EF4444'} 
          emissive={isUnlocked ? '#059669' : '#DC2626'} 
          emissiveIntensity={0.8}
        />
      </mesh>

      {/* Left Door Pivot */}
      <group ref={leftDoorRef} position={[-2, 0, 0]}>
        <mesh castShadow position={[0.95, 2.7, 0]}>
          <boxGeometry args={[1.9, 5.2, 0.2]} />
          <meshStandardMaterial color="#78350F" roughness={0.8} />
        </mesh>
      </group>

      {/* Right Door Pivot */}
      <group ref={rightDoorRef} position={[2, 0, 0]}>
        <mesh castShadow position={[-0.95, 2.7, 0]}>
          <boxGeometry args={[1.9, 5.2, 0.2]} />
          <meshStandardMaterial color="#78350F" roughness={0.8} />
        </mesh>
      </group>
    </group>
  );
};
