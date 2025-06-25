
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingElementsProps {
  count?: number;
  radius?: number;
}

const FloatingElements = ({ count = 8, radius = 6 }: FloatingElementsProps) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  const elements = Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * Math.PI * 2;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    const y = Math.sin(i * 0.5) * 2;

    return (
      <Float
        key={i}
        speed={2 + Math.random() * 2}
        rotationIntensity={0.3}
        floatIntensity={0.5}
      >
        <mesh position={[x, y, z]} scale={0.3 + Math.random() * 0.2}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#36CFC9"
            emissive="#36CFC9"
            emissiveIntensity={0.1}
            transparent
            opacity={0.6}
            roughness={0.3}
            metalness={0.8}
          />
        </mesh>
      </Float>
    );
  });

  return <group ref={groupRef}>{elements}</group>;
};

export default FloatingElements;
