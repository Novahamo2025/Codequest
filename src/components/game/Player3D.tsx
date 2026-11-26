import React, { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useGameStore } from '../../store/gameStore';
import { soundEngine } from '../../engine/SoundEngine';

export interface PlayerInput {
  forward: boolean;
  backward: boolean;
  left: boolean;
  right: boolean;
  jump: boolean;
  interact: boolean;
}

interface Player3DProps {
  inputRef: React.MutableRefObject<PlayerInput>;
  onPositionUpdate: (pos: THREE.Vector3) => void;
  initialPosition?: [number, number, number];
}

export const Player3D: React.FC<Player3DProps> = ({ 
  inputRef, 
  onPositionUpdate,
  initialPosition = [0, 0, 0] 
}) => {
  const { player, isCodingWorkspaceOpen, isNpcDialogueOpen } = useGameStore();
  const { camera } = useThree();

  const groupRef = useRef<THREE.Group>(null);
  const bodyRef = useRef<THREE.Mesh>(null);
  const capeRef = useRef<THREE.Mesh>(null);

  // Movement physics state
  const pos = useRef(new THREE.Vector3(...initialPosition));
  const vel = useRef(new THREE.Vector3(0, 0, 0));
  const rotation = useRef(0);
  const isGrounded = useRef(true);
  const walkCycle = useRef(0);

  useEffect(() => {
    pos.current.set(...initialPosition);
    if (groupRef.current) {
      groupRef.current.position.set(...initialPosition);
    }
  }, [initialPosition]);

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    // Freeze player input if workspace or dialogue is open
    const input = (!isCodingWorkspaceOpen && !isNpcDialogueOpen) 
      ? inputRef.current 
      : { forward: false, backward: false, left: false, right: false, jump: false, interact: false };

    const speed = 7.5;
    const turnSpeed = 3.5;
    const gravity = -20;
    const jumpStrength = 7.5;

    // Handle turning
    if (input.left) {
      rotation.current += turnSpeed * delta;
    }
    if (input.right) {
      rotation.current -= turnSpeed * delta;
    }

    // Handle forward/backward
    let moveZ = 0;
    if (input.forward) moveZ -= 1;
    if (input.backward) moveZ += 1;

    // Calculate forward vector based on current rotation
    const forwardVec = new THREE.Vector3(0, 0, moveZ).applyAxisAngle(
      new THREE.Vector3(0, 1, 0),
      rotation.current
    );

    vel.current.x = forwardVec.x * speed;
    vel.current.z = forwardVec.z * speed;

    // Handle jump
    if (input.jump && isGrounded.current) {
      vel.current.y = jumpStrength;
      isGrounded.current = false;
      soundEngine.playJump();
    }

    // Apply gravity
    vel.current.y += gravity * delta;

    // Update position
    pos.current.x += vel.current.x * delta;
    pos.current.z += vel.current.z * delta;
    pos.current.y += vel.current.y * delta;

    // Ground collision clamp (y = 0 is ground)
    if (pos.current.y <= 0) {
      pos.current.y = 0;
      vel.current.y = 0;
      isGrounded.current = true;
    }

    // Boundary constraints (-40 to 40 on X, -75 to 15 on Z)
    pos.current.x = Math.max(-38, Math.min(38, pos.current.x));
    pos.current.z = Math.max(-75, Math.min(15, pos.current.z));

    groupRef.current.position.copy(pos.current);
    groupRef.current.rotation.y = rotation.current;

    // Walk animation (bobbing & cape flutter)
    const isMoving = moveZ !== 0;
    if (isMoving && isGrounded.current) {
      walkCycle.current += delta * 12;
      if (bodyRef.current) {
        bodyRef.current.position.y = 0.8 + Math.sin(walkCycle.current) * 0.08;
      }
      if (capeRef.current) {
        capeRef.current.rotation.x = 0.2 + Math.abs(Math.sin(walkCycle.current)) * 0.35;
      }
    } else {
      if (bodyRef.current) {
        bodyRef.current.position.y = THREE.MathUtils.lerp(bodyRef.current.position.y, 0.8, 0.1);
      }
      if (capeRef.current) {
        capeRef.current.rotation.x = THREE.MathUtils.lerp(capeRef.current.rotation.x, 0.1, 0.1);
      }
    }

    // Notify parent for distance checks (NPCs, coding stations, coins)
    onPositionUpdate(pos.current);

    // Smooth third-person camera follow
    const camOffset = new THREE.Vector3(0, 4.2, 7.5).applyAxisAngle(
      new THREE.Vector3(0, 1, 0),
      rotation.current
    );
    const targetCamPos = pos.current.clone().add(camOffset);
    camera.position.lerp(targetCamPos, 0.08);

    // Look slightly above the player
    const lookTarget = pos.current.clone().add(new THREE.Vector3(0, 1.2, 0));
    camera.lookAt(lookTarget);
  });

  return (
    <group ref={groupRef} position={initialPosition}>
      {/* Shadow Blob */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 0]}>
        <circleGeometry args={[0.6, 16]} />
        <meshBasicMaterial color="#000000" opacity={0.25} transparent />
      </mesh>

      {/* Main Character Body Mesh */}
      <group ref={bodyRef as any} position={[0, 0.8, 0]}>
        {/* Torso */}
        <mesh castShadow receiveShadow position={[0, 0.1, 0]}>
          <boxGeometry args={[0.55, 0.65, 0.35]} />
          <meshStandardMaterial 
            color={player.characterClass === 'knight' ? '#475569' : '#334155'} 
            roughness={0.4}
            metalness={player.characterClass === 'knight' ? 0.6 : 0.1}
          />
        </mesh>

        {/* Head */}
        <mesh castShadow position={[0, 0.62, 0]}>
          <boxGeometry args={[0.42, 0.42, 0.42]} />
          <meshStandardMaterial color={player.skinTone || '#FCD34D'} roughness={0.6} />
        </mesh>

        {/* Hair / Headpiece */}
        <mesh position={[0, 0.84, 0]}>
          <boxGeometry args={[0.45, 0.15, 0.45]} />
          <meshStandardMaterial color={player.hairColor || '#D97706'} />
        </mesh>

        {/* Hero Cape */}
        <mesh 
          ref={capeRef} 
          castShadow 
          position={[0, 0.25, -0.2]} 
          rotation={[0.1, 0, 0]}
        >
          <boxGeometry args={[0.5, 0.85, 0.06]} />
          <meshStandardMaterial color={player.capeColor || '#4F46E5'} roughness={0.7} />
        </mesh>

        {/* Class Weapon / Relic Prop on Hand */}
        <group position={[0.35, 0, 0.1]}>
          {player.characterClass === 'knight' && (
            <mesh position={[0, 0.1, 0]}>
              <boxGeometry args={[0.08, 0.8, 0.08]} />
              <meshStandardMaterial color="#94A3B8" metalness={0.8} />
            </mesh>
          )}
          {player.characterClass === 'pyromancer' && (
            <mesh position={[0, 0.2, 0]}>
              <sphereGeometry args={[0.15, 8, 8]} />
              <meshStandardMaterial color="#F97316" emissive="#EA580C" emissiveIntensity={0.8} />
            </mesh>
          )}
          {player.characterClass === 'ranger' && (
            <mesh position={[0, 0.1, 0]}>
              <cylinderGeometry args={[0.04, 0.04, 0.7]} />
              <meshStandardMaterial color="#78350F" />
            </mesh>
          )}
          {player.characterClass === 'sage' && (
            <mesh position={[0, 0.2, 0]}>
              <octahedronGeometry args={[0.16]} />
              <meshStandardMaterial color="#A855F7" emissive="#9333EA" emissiveIntensity={0.9} />
            </mesh>
          )}
        </group>
      </group>
    </group>
  );
};
