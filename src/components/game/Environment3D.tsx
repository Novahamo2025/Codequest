import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { WorldId } from '../../types/mission';
import { WORLDS } from '../../missions';

interface Environment3DProps {
  worldId: WorldId;
}

export const Environment3D: React.FC<Environment3DProps> = ({ worldId }) => {
  const worldDef = WORLDS.find(w => w.id === worldId) || WORLDS[0];

  // Animated elements (gears in jungle, lava in dungeon)
  const gear1Ref = useRef<THREE.Group>(null);
  const gear2Ref = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (gear1Ref.current) {
      gear1Ref.current.rotation.z += delta * 0.5;
    }
    if (gear2Ref.current) {
      gear2Ref.current.rotation.z -= delta * 0.5;
    }
  });

  return (
    <group>
      {/* Main Ground Plane */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, -30]}>
        <planeGeometry args={[90, 110]} />
        <meshStandardMaterial 
          color={worldDef.groundColor} 
          roughness={0.8}
        />
      </mesh>

      {/* Central Pathway leading through the realm */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, -30]}>
        <planeGeometry args={[4.5, 95]} />
        <meshStandardMaterial 
          color={
            worldId === 'master-dungeon' ? '#334155' :
            worldId === 'data-kingdom' ? '#FDE68A' :
            worldId === 'function-mountains' ? '#CBD5E1' :
            '#E2D8C9'
          }
          roughness={0.7}
        />
      </mesh>

      {/* World-Specific Environmental Elements */}
      {worldId === 'beginner-forest' && (
        <group>
          {/* Forest Trees */}
          {[-12, -8, 8, 12].map((x, i) => (
            [-10, -25, -40, -55].map((z, j) => (
              <group key={`tree_${i}_${j}`} position={[x + (j % 2) * 2, 0, z]}>
                {/* Trunk */}
                <mesh castShadow position={[0, 1.5, 0]}>
                  <cylinderGeometry args={[0.3, 0.45, 3]} />
                  <meshStandardMaterial color="#78350F" roughness={0.9} />
                </mesh>
                {/* Foliage Cones */}
                <mesh castShadow position={[0, 3.2, 0]}>
                  <coneGeometry args={[1.8, 2.5, 7]} />
                  <meshStandardMaterial color="#166534" roughness={0.8} />
                </mesh>
                <mesh castShadow position={[0, 4.6, 0]}>
                  <coneGeometry args={[1.3, 2, 7]} />
                  <meshStandardMaterial color="#15803D" roughness={0.8} />
                </mesh>
              </group>
            ))
          ))}

          {/* River Creek on the side */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-16, 0.02, -30]}>
            <planeGeometry args={[5, 100]} />
            <meshStandardMaterial color="#38BDF8" roughness={0.2} metalness={0.3} />
          </mesh>
        </group>
      )}

      {worldId === 'conditional-valley' && (
        <group>
          {/* Mountain Canyons on left and right */}
          {[-15, 15].map((sideX, i) => (
            <group key={`canyon_${i}`}>
              {[-10, -30, -50].map((z, j) => (
                <mesh key={`rock_${j}`} castShadow position={[sideX, 3.5, z]}>
                  <dodecahedronGeometry args={[4.5 + j * 0.5]} />
                  <meshStandardMaterial color="#64748B" roughness={0.9} />
                </mesh>
              ))}
            </group>
          ))}
          {/* Watchtowers */}
          <mesh castShadow position={[-6, 4, -20]}>
            <cylinderGeometry args={[1.2, 1.4, 8, 8]} />
            <meshStandardMaterial color="#475569" />
          </mesh>
          <mesh castShadow position={[6, 4, -20]}>
            <cylinderGeometry args={[1.2, 1.4, 8, 8]} />
            <meshStandardMaterial color="#475569" />
          </mesh>
        </group>
      )}

      {worldId === 'looping-jungle' && (
        <group>
          {/* Ancient Spinning Clockwork Gears in the landscape */}
          <group ref={gear1Ref} position={[-8, 3.5, -28]}>
            <mesh castShadow rotation={[0, Math.PI / 2, 0]}>
              <torusGeometry args={[2.5, 0.4, 8, 16]} />
              <meshStandardMaterial color="#065F46" metalness={0.7} roughness={0.4} />
            </mesh>
          </group>
          <group ref={gear2Ref} position={[-8, 3.5, -34]}>
            <mesh castShadow rotation={[0, Math.PI / 2, 0]}>
              <torusGeometry args={[2.5, 0.4, 8, 16]} />
              <meshStandardMaterial color="#047857" metalness={0.7} roughness={0.4} />
            </mesh>
          </group>

          {/* Exotic Jungle Palm Plants */}
          {[-10, 10].map((px, i) => (
            [-15, -45].map((pz, j) => (
              <mesh key={`palm_${i}_${j}`} position={[px, 2.5, pz]}>
                <sphereGeometry args={[1.8, 8, 8]} />
                <meshStandardMaterial color="#059669" roughness={0.6} />
              </mesh>
            ))
          ))}
        </group>
      )}

      {worldId === 'function-mountains' && (
        <group>
          {/* Snowy peaks */}
          {[-16, 16].map((mx, i) => (
            [-15, -35, -55].map((mz, j) => (
              <mesh key={`peak_${i}_${j}`} castShadow position={[mx, 6, mz]}>
                <coneGeometry args={[6, 12, 5]} />
                <meshStandardMaterial color="#F8FAFC" roughness={0.7} />
              </mesh>
            ))
          ))}
          {/* Ice Crystals */}
          <mesh position={[-6, 1.5, -30]} rotation={[0.2, 0.4, 0]}>
            <octahedronGeometry args={[1.2]} />
            <meshStandardMaterial color="#93C5FD" roughness={0.1} metalness={0.5} transparent opacity={0.85} />
          </mesh>
          <mesh position={[6, 1.5, -45]} rotation={[-0.2, 0.3, 0]}>
            <octahedronGeometry args={[1.4]} />
            <meshStandardMaterial color="#93C5FD" roughness={0.1} metalness={0.5} transparent opacity={0.85} />
          </mesh>
        </group>
      )}

      {worldId === 'data-kingdom' && (
        <group>
          {/* Royal Colonnade Pillars along the avenue */}
          {[-5, 5].map((colX, i) => (
            [-5, -18, -32, -45, -58].map((colZ, j) => (
              <group key={`col_${i}_${j}`} position={[colX, 0, colZ]}>
                <mesh castShadow position={[0, 2.5, 0]}>
                  <cylinderGeometry args={[0.35, 0.45, 5, 12]} />
                  <meshStandardMaterial color="#FEF3C7" roughness={0.3} metalness={0.2} />
                </mesh>
                <mesh position={[0, 5.1, 0]}>
                  <boxGeometry args={[1.1, 0.3, 1.1]} />
                  <meshStandardMaterial color="#D97706" metalness={0.4} />
                </mesh>
              </group>
            ))
          ))}
        </group>
      )}

      {worldId === 'master-dungeon' && (
        <group>
          {/* Obsidian Fortress Walls */}
          {[-10, 10].map((wallX, i) => (
            <mesh key={`wall_${i}`} position={[wallX, 3.5, -30]}>
              <boxGeometry args={[2, 7, 75]} />
              <meshStandardMaterial color="#1E293B" roughness={0.5} />
            </mesh>
          ))}
          {/* Lava Channels with Crimson Glow */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-7, 0.03, -30]}>
            <planeGeometry args={[1.5, 75]} />
            <meshStandardMaterial color="#EF4444" emissive="#DC2626" emissiveIntensity={0.8} />
          </mesh>
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[7, 0.03, -30]}>
            <planeGeometry args={[1.5, 75]} />
            <meshStandardMaterial color="#EF4444" emissive="#DC2626" emissiveIntensity={0.8} />
          </mesh>
        </group>
      )}
    </group>
  );
};
