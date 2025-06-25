import { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Float, Environment, PerspectiveCamera, Html } from '@react-three/drei';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Brain, Workflow, Bell, Smartphone, ArrowRight, CheckCircle } from "lucide-react";
import Simple3DText from "@/components/3d/Simple3DText";
import * as THREE from 'three';

// 3D Scene Components
const FloatingOrb = ({ position, color, scale = 1 }: { position: [number, number, number], color: string, scale?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.005;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial 
          color={color} 
          emissive={color} 
          emissiveIntensity={0.2}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
};

const FeatureHotspot = ({ 
  position, 
  title, 
  description, 
  icon: Icon 
}: { 
  position: [number, number, number], 
  title: string, 
  description: string,
  icon: any 
}) => {
  const [hovered, setHovered] = useState(false);
  
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh 
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.2 : 1}
      >
        <cylinderGeometry args={[0.2, 0.2, 0.1, 32]} />
        <meshStandardMaterial 
          color="#36CFC9" 
          emissive="#36CFC9" 
          emissiveIntensity={hovered ? 0.5 : 0.2}
        />
        <Html
          position={[0, 0.5, 0]}
          center
          className={`transition-all duration-300 ${hovered ? 'scale-110' : 'scale-100'}`}
        >
          <div className="bg-white/90 backdrop-blur-md rounded-lg p-4 shadow-lg border border-primary/20 max-w-xs text-center">
            <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
            <h3 className="font-bold text-sm text-foreground mb-1">{title}</h3>
            <p className="text-xs text-muted-foreground">{description}</p>
          </div>
        </Html>
      </mesh>
    </Float>
  );
};

const Scene3D = () => {
  const { camera } = useThree();
  
  useFrame((state) => {
    camera.position.x = Math.sin(state.clock.elapsedTime * 0.1) * 2;
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <Environment preset="night" />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} color="#36CFC9" intensity={0.5} />
      
      {/* Central 3D Logo */}
      <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
        <Simple3DText position={[0, 0, 0]} size={0.8}>
          SOPora
        </Simple3DText>
      </Float>

      {/* Floating Orbs */}
      <FloatingOrb position={[-3, 2, -2]} color="#36CFC9" />
      <FloatingOrb position={[3, -1, -1]} color="#FFC857" />
      <FloatingOrb position={[-2, -2, 2]} color="#36CFC9" scale={0.7} />
      <FloatingOrb position={[2, 2, 1]} color="#FFC857" scale={0.8} />

      {/* Feature Hotspots */}
      <FeatureHotspot 
        position={[-4, 1, 0]} 
        title="Smart Automation" 
        description="Automate daily tasks with AI"
        icon={Zap}
      />
      <FeatureHotspot 
        position={[4, 0, 0]} 
        title="AI Training" 
        description="Intelligent SOP management"
        icon={Brain}
      />
      <FeatureHotspot 
        position={[0, 3, 0]} 
        title="Custom Workflows" 
        description="Tailored for your business"
        icon={Workflow}
      />
      <FeatureHotspot 
        position={[-3, -2, 0]} 
        title="Real-time Updates" 
        description="Stay informed instantly"
        icon={Bell}
      />
      <FeatureHotspot 
        position={[3, -1, 0]} 
        title="Mobile-First" 
        description="Optimized for all devices"
        icon={Smartphone}
      />

      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  );
};

const Landing3DPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: Zap,
      title: "Smart Automation",
      description: "Automate repetitive tasks and workflows with intelligent AI that learns from your patterns."
    },
    {
      icon: Brain,
      title: "AI-Powered Training",
      description: "Create, manage, and deliver training content with AI assistance for maximum effectiveness."
    },
    {
      icon: Workflow,
      title: "Custom Workflows",
      description: "Build tailored processes that fit your unique business needs and requirements."
    },
    {
      icon: Bell,
      title: "Real-time Updates",
      description: "Stay informed with instant notifications and live updates across all your devices."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Access everything seamlessly on any device with our responsive, mobile-optimized interface."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D1B2A] via-[#1B263B] to-[#0D1B2A] text-white overflow-x-hidden">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#36CFC9] to-[#FFC857] rounded-lg flex items-center justify-center">
                <span className="text-[#0D1B2A] font-bold text-xl">S</span>
              </div>
              <span className="text-white font-bold text-xl">SOPora</span>
            </div>
            <div className="flex items-center space-x-6">
              <Button variant="ghost" asChild className="text-white hover:bg-white/10">
                <Link to="/login">Sign In</Link>
              </Button>
              <Button asChild className="bg-gradient-to-r from-[#36CFC9] to-[#FFC857] text-[#0D1B2A] font-semibold hover:scale-105 transition-transform">
                <Link to="/register">Start Free Trial</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* 3D Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 8]} />
            <Suspense fallback={null}>
              <Scene3D />
            </Suspense>
          </Canvas>
        </div>
        
        {/* Overlay Content */}
        <div 
          className="relative z-10 text-center max-w-4xl mx-auto px-6"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8 border border-white/10">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-[#36CFC9] to-[#FFC857] bg-clip-text text-transparent">
              Welcome to the Future
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
              Experience next-generation SOP management with AI-powered automation, 
              immersive training, and intelligent workflows designed for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" asChild className="bg-gradient-to-r from-[#36CFC9] to-[#FFC857] text-[#0D1B2A] font-semibold text-lg px-8 py-4 hover:scale-105 transition-all">
                <Link to="/register" className="flex items-center">
                  Enter the Experience
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4">
                Explore Features
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#36CFC9] rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section with Parallax */}
      <section className="relative py-20 bg-gradient-to-br from-[#1B263B] to-[#0D1B2A]">
        <div 
          className="container mx-auto px-6"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#36CFC9] to-[#FFC857] bg-clip-text text-transparent">
              Cutting-Edge Features
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Discover the powerful capabilities that make SOPora the ultimate solution for modern businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="bg-black/30 backdrop-blur-md border-white/10 hover:border-[#36CFC9]/50 transition-all duration-300 hover:scale-105 group"
              >
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#36CFC9]/20 to-[#FFC857]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-[#36CFC9]" />
                  </div>
                  <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/70 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#36CFC9] to-[#FFC857]">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-[#0D1B2A] mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-[#0D1B2A]/80 mb-12 max-w-2xl mx-auto">
              Join thousands of forward-thinking companies already using SOPora to revolutionize their workflows
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button size="lg" asChild className="bg-[#0D1B2A] hover:bg-[#1B263B] text-white font-semibold text-lg px-8 py-4 shadow-lg">
                <Link to="/register">Start Your Journey</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-[#0D1B2A]/30 text-[#0D1B2A] hover:bg-[#0D1B2A]/10 text-lg px-8 py-4">
                Schedule Demo
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-8 text-[#0D1B2A]/80 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>30-day free trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>Premium support included</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing3DPage;
