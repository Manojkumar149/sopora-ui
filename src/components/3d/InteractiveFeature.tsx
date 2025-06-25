
import { useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Html } from '@react-three/drei';
import * as THREE from 'three';

interface InteractiveFeatureProps {
  position: [number, number, number];
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  delay?: number;
}

const InteractiveFeature = ({ 
  position, 
  title, 
  description, 
  icon: Icon,
  delay = 0
}: InteractiveFeatureProps) => {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    // Animate appearance with delay
    if (state.clock.elapsedTime > delay && !visible) {
      setVisible(true);
    }

    if (meshRef.current && visible) {
      // Gentle floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.5 + delay) * 0.1;
      
      // Glow effect
      if (glowRef.current) {
        glowRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2 + delay) * 0.1);
      }
    }
  });

  if (!visible) return null;

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <group position={position}>
        {/* Glow effect */}
        <mesh ref={glowRef} scale={hovered ? 1.3 : 1.1}>
          <sphereGeometry args={[0.8, 16, 16]} />
          <meshBasicMaterial
            color="#36CFC9"
            transparent
            opacity={hovered ? 0.15 : 0.08}
          />
        </mesh>
        
        {/* Main feature orb */}
        <mesh
          ref={meshRef}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          scale={hovered ? 1.1 : 1}
        >
          <sphereGeometry args={[0.4, 32, 32]} />
          <meshStandardMaterial
            color="#36CFC9"
            emissive="#36CFC9"
            emissiveIntensity={hovered ? 0.4 : 0.2}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>

        {/* Feature information */}
        <Html
          position={[0, 1.2, 0]}
          center
          className={`transition-all duration-500 ${hovered ? 'scale-110 opacity-100' : 'scale-100 opacity-90'}`}
        >
          <div className="bg-black/80 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/10 max-w-sm text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-[#36CFC9]/20 to-[#FFC857]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon className="w-6 h-6 text-[#36CFC9]" />
            </div>
            <h3 className="font-bold text-lg text-white mb-2">{title}</h3>
            <p className="text-sm text-white/70 leading-relaxed">{description}</p>
          </div>
        </Html>
      </group>
    </Float>
  );
};

export default InteractiveFeature;
