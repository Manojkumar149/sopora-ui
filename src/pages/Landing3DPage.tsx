
import { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Brain, Workflow, Bell, Smartphone, ArrowRight, CheckCircle, Star } from "lucide-react";
import Scene3D from "@/components/3d/Scene3D";

const Loading3D = () => (
  <div className="flex items-center justify-center h-full">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-[#36CFC9]/30 border-t-[#36CFC9] rounded-full animate-spin mb-4"></div>
      <p className="text-white/70">Loading experience...</p>
    </div>
  </div>
);

const Landing3DPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    // Simulate loading completion
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const features = [
    {
      icon: Zap,
      title: "Smart Automation",
      description: "Eliminate repetitive tasks with intelligent workflow automation that adapts to your business patterns and scales with your growth.",
      metric: "95% Time Saved"
    },
    {
      icon: Brain,
      title: "AI-Powered Assistant",
      description: "Advanced SOP management with contextual AI that understands your processes and provides intelligent recommendations.",
      metric: "50% Faster Training"
    },
    {
      icon: Workflow,
      title: "Custom Workflows",
      description: "Build sophisticated processes tailored to your unique requirements with drag-and-drop simplicity.",
      metric: "Unlimited Flexibility"
    },
    {
      icon: Bell,
      title: "Real-time Collaboration",
      description: "Stay synchronized with instant updates, live notifications, and seamless team coordination.",
      metric: "Zero Delays"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Experience",
      description: "Full-featured mobile interface designed for productivity on any device, anywhere, anytime.",
      metric: "100% Responsive"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D1B2A] via-[#1B263B] to-[#0D1B2A] text-white overflow-x-hidden">
      {/* Premium Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#36CFC9] to-[#FFC857] rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-[#0D1B2A] font-bold text-xl">S</span>
              </div>
              <div>
                <span className="text-white font-bold text-2xl">SOPora</span>
                <div className="flex items-center space-x-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#FFC857] text-[#FFC857]" />
                  ))}
                  <span className="text-xs text-white/60 ml-2">Trusted by 1000+ teams</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <nav className="hidden md:flex items-center space-x-8">
                <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
                <a href="#pricing" className="text-white/80 hover:text-white transition-colors">Pricing</a>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
              </nav>
              <Button variant="ghost" asChild className="text-white hover:bg-white/10">
                <Link to="/login">Sign In</Link>
              </Button>
              <Button asChild className="bg-gradient-to-r from-[#36CFC9] to-[#FFC857] text-[#0D1B2A] font-semibold hover:scale-105 transition-transform shadow-lg">
                <Link to="/register">Start Free Trial</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with 3D Canvas */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20">
          <Canvas shadows>
            <PerspectiveCamera makeDefault position={[0, 0, 10]} />
            <Suspense fallback={<Loading3D />}>
              <Scene3D />
            </Suspense>
            <OrbitControls 
              enableZoom={false} 
              enablePan={false}
              autoRotate={false}
              dampingFactor={0.05}
              enableDamping
            />
          </Canvas>
        </div>
        
        {/* Hero Content Overlay */}
        <div 
          className="relative z-10 text-center max-w-5xl mx-auto px-6"
          style={{ 
            transform: `translateY(${scrollY * 0.3}px)`,
            opacity: Math.max(0, 1 - scrollY / 400)
          }}
        >
          <div className="bg-black/20 backdrop-blur-xl rounded-3xl p-12 border border-white/10 shadow-2xl">
            <h1 className="text-7xl md:text-9xl font-light mb-8 bg-gradient-to-r from-[#36CFC9] via-white to-[#FFC857] bg-clip-text text-transparent leading-tight">
              Enterprise
              <br />
              <span className="font-bold">Automation</span>
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 mb-12 leading-relaxed font-light">
              Transform your business operations with AI-powered automation,
              <br />
              intelligent workflows, and seamless team collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Button size="lg" asChild className="bg-gradient-to-r from-[#36CFC9] to-[#FFC857] text-[#0D1B2A] font-semibold text-xl px-12 py-6 hover:scale-105 transition-all shadow-xl">
                <Link to="/register" className="flex items-center">
                  Start Your Journey
                  <ArrowRight className="ml-3 w-6 h-6" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 text-xl px-12 py-6 backdrop-blur-sm">
                Watch Demo
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/60 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-[#36CFC9]" />
                <span>30-day free trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-[#36CFC9]" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-[#36CFC9]" />
                <span>Enterprise security</span>
              </div>
            </div>
          </div>
        </div>

        {/* Elegant scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-8 h-12 border-2 border-white/20 rounded-full flex justify-center p-2">
            <div className="w-1 h-4 bg-gradient-to-b from-[#36CFC9] to-transparent rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-32 bg-gradient-to-br from-[#1B263B] to-[#0D1B2A]">
        <div 
          className="container mx-auto px-6"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        >
          <div className="text-center mb-20">
            <h2 className="text-6xl font-light mb-8 bg-gradient-to-r from-[#36CFC9] to-[#FFC857] bg-clip-text text-transparent">
              Revolutionary Features
            </h2>
            <p className="text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              Discover the powerful capabilities that make SOPora the ultimate solution for modern businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="bg-black/20 backdrop-blur-xl border-white/10 hover:border-[#36CFC9]/30 transition-all duration-500 hover:scale-105 group shadow-2xl"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animation: isLoaded ? 'fade-in 0.8s ease-out forwards' : 'none'
                }}
              >
                <CardHeader className="pb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#36CFC9]/10 to-[#FFC857]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-white/5">
                    <feature.icon className="w-10 h-10 text-[#36CFC9]" />
                  </div>
                  <CardTitle className="text-white text-2xl mb-2">{feature.title}</CardTitle>
                  <div className="text-[#FFC857] font-semibold text-sm">{feature.metric}</div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/70 text-lg leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="relative py-32 bg-gradient-to-r from-[#36CFC9] to-[#FFC857] overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.03&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-6xl font-light text-[#0D1B2A] mb-12">
              Ready to Transform
              <br />
              <span className="font-bold">Your Business?</span>
            </h2>
            <p className="text-2xl text-[#0D1B2A]/80 mb-16 max-w-3xl mx-auto leading-relaxed">
              Join thousands of forward-thinking companies already using SOPora to revolutionize their workflows and achieve unprecedented efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center mb-16">
              <Button size="lg" asChild className="bg-[#0D1B2A] hover:bg-[#1B263B] text-white font-semibold text-xl px-12 py-6 shadow-2xl hover:scale-105 transition-all">
                <Link to="/register">Start Your Free Trial</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-[#0D1B2A]/30 text-[#0D1B2A] hover:bg-[#0D1B2A]/10 text-xl px-12 py-6 backdrop-blur-sm">
                Schedule Demo
              </Button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#0D1B2A] mb-2">1000+</div>
                <div className="text-[#0D1B2A]/70">Active Teams</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#0D1B2A] mb-2">95%</div>
                <div className="text-[#0D1B2A]/70">Time Saved</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#0D1B2A] mb-2">24/7</div>
                <div className="text-[#0D1B2A]/70">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing3DPage;
