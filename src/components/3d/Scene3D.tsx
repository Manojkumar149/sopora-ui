
import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Environment, PerspectiveCamera } from '@react-three/drei';
import { Zap, Brain, Workflow, Bell, Smartphone } from 'lucide-react';
import Simple3DText from './Simple3DText';
import FloatingElements from './FloatingElements';
import InteractiveFeature from './InteractiveFeature';
import * as THREE from 'three';

const Scene3D = () => {
  const { camera } = useThree();
  const lightRef = useRef<THREE.DirectionalLight>(null);

  useFrame((state) => {
    // Smooth camera movement
    const time = state.clock.elapsedTime;
    camera.position.x = Math.sin(time * 0.1) * 1.5;
    camera.position.y = Math.cos(time * 0.15) * 0.5;
    camera.lookAt(0, 0, 0);

    // Dynamic lighting
    if (lightRef.current) {
      lightRef.current.position.x = Math.sin(time * 0.2) * 5;
      lightRef.current.position.z = Math.cos(time * 0.2) * 5;
    }
  });

  return (
    <>
      <Environment preset="night" />
      
      {/* Lighting setup */}
      <ambientLight intensity={0.3} />
      <directionalLight
        ref={lightRef}
        position={[5, 5, 5]}
        intensity={0.8}
        color="#ffffff"
        castShadow
      />
      <pointLight
        position={[-5, -5, -5]}
        color="#36CFC9"
        intensity={0.4}
      />
      <pointLight
        position={[5, -5, 5]}
        color="#FFC857"
        intensity={0.3}
      />

      {/* Central branding */}
      <Simple3DText 
        position={[0, 0, 0]} 
        size={1.2}
        color="#36CFC9"
        emissive="#36CFC9"
        emissiveIntensity={0.4}
      >
        SOPora
      </Simple3DText>

      {/* Floating ambient elements */}
      <FloatingElements count={12} radius={8} />

      {/* Interactive feature showcases */}
      <InteractiveFeature
        position={[-4, 2, -2]}
        title="Smart Automation"
        description="Streamline daily workflows with intelligent task automation that learns from your patterns"
        icon={Zap}
        delay={0.5}
      />
      
      <InteractiveFeature
        position={[4, 1, -1]}
        title="AI-Powered Assistant"
        description="Advanced SOP and training management with AI that understands your business context"
        icon={Brain}
        delay={1}
      />
      
      <InteractiveFeature
        position={[0, 3, 1]}
        title="Custom Workflows"
        description="Build tailored processes that adapt to your team's unique requirements"
        icon={Workflow}
        delay={1.5}
      />
      
      <InteractiveFeature
        position={[-3, -1, 2]}
        title="Real-time Updates"
        description="Stay synchronized with instant notifications and live collaboration features"
        icon={Bell}
        delay={2}
      />
      
      <InteractiveFeature
        position={[3, -2, 1]}
        title="Mobile-First Design"
        description="Seamless experience across all devices with responsive, touch-optimized interface"
        icon={Smartphone}
        delay={2.5}
      />
    </>
  );
};

export default Scene3D;
