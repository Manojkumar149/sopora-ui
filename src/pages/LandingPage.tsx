
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Users, Zap, Shield, BarChart, Clock, CheckCircle, Star, ArrowRight, Play, Award, Globe, TrendingUp } from "lucide-react";

const LandingPage = () => {
  const features = [
    {
      icon: FileText,
      title: "Smart SOP Management",
      description: "Create, organize, and maintain standard operating procedures with AI assistance and automated workflows."
    },
    {
      icon: Users,
      title: "Team Training Excellence",
      description: "Assign training materials and track team progress in real-time with advanced analytics."
    },
    {
      icon: Zap,
      title: "Interactive Assessments",
      description: "Test knowledge retention with automated quizzes, assessments, and personalized learning paths."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption and compliance-ready features that meet industry standards."
    },
    {
      icon: BarChart,
      title: "Advanced Analytics",
      description: "Track performance metrics, identify training gaps, and optimize your workflows."
    },
    {
      icon: Clock,
      title: "Efficiency Boost",
      description: "Reduce training time by 60% with our smart learning system and automation."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Operations Director",
      company: "TechCorp",
      content: "SOPora transformed how we manage our standard operating procedures. Setup took minutes, not weeks. Our team efficiency increased by 40%.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Training Manager", 
      company: "Global Industries",
      content: "The AI-powered features saved us countless hours. Training completion rates improved from 65% to 95% in just 3 months.",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "CEO",
      company: "StartupCo",
      content: "Best investment we've made this year. The ROI was evident within the first month of implementation.",
      rating: 5
    }
  ];

  const stats = [
    { number: "50K+", label: "Active Users" },
    { number: "99.9%", label: "Uptime" },
    { number: "60%", label: "Time Saved" },
    { number: "500+", label: "Companies" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D1B2A] via-[#1B263B] to-[#0D1B2A]">
      {/* Enhanced Header */}
      <header className="bg-white/5 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#36CFC9] to-[#FFC857] rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-[#0D1B2A] font-bold text-xl">S</span>
              </div>
              <div>
                <h1 className="text-white font-bold text-2xl">SOPora</h1>
                <p className="text-[#36CFC9] text-sm font-medium">Smart SOP & Training Assistant</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex items-center space-x-6 text-sm">
                <Link to="#features" className="text-white/80 hover:text-[#36CFC9] transition-colors">Features</Link>
                <Link to="#pricing" className="text-white/80 hover:text-[#36CFC9] transition-colors">Pricing</Link>
                <Link to="#testimonials" className="text-white/80 hover:text-[#36CFC9] transition-colors">Reviews</Link>
              </div>
              <Button variant="ghost" asChild className="text-white hover:bg-white/10">
                <Link to="/login">Sign In</Link>
              </Button>
              <Button asChild className="bg-gradient-to-r from-[#36CFC9] to-[#FFC857] hover:from-[#36CFC9]/90 hover:to-[#FFC857]/90 text-[#0D1B2A] font-semibold shadow-lg">
                <Link to="/register">Start Free Trial</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#36CFC9]/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-[#FFC857]/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          {/* Trust badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <Award className="w-4 h-4 text-[#FFC857]" />
            <span className="text-white/90 text-sm font-medium">Trusted by 500+ companies worldwide</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Transform Your Team's
            <span className="block bg-gradient-to-r from-[#36CFC9] to-[#FFC857] bg-clip-text text-transparent">
              Training & SOPs
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            Streamline standard operating procedures, enhance team training, and ensure compliance 
            with our AI-powered SOP management platform. Join the future of workplace training.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button size="lg" asChild className="bg-gradient-to-r from-[#36CFC9] to-[#FFC857] hover:from-[#36CFC9]/90 hover:to-[#FFC857]/90 text-[#0D1B2A] font-semibold text-lg px-8 py-4 shadow-2xl transform hover:scale-105 transition-all">
              <Link to="/register" className="flex items-center">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-8 py-4">
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section id="features" className="py-20 lg:py-32 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-[#36CFC9]/10 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-[#36CFC9]" />
              <span className="text-[#36CFC9] text-sm font-medium">Powerful Features</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Everything You Need for
              <span className="block text-[#36CFC9]">Effective Training</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Our comprehensive platform helps you create, manage, and deliver training content that drives real results and measurable outcomes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-xl hover:bg-white/15 transition-all duration-300 hover:scale-105 group">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#36CFC9] to-[#FFC857] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-[#0D1B2A]" />
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

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-[#FFC857]/10 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-[#FFC857]" />
              <span className="text-[#FFC857] text-sm font-medium">Customer Stories</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Loved by Teams
              <span className="block text-[#FFC857]">Worldwide</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-xl">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#FFC857] fill-current" />
                    ))}
                  </div>
                  <CardDescription className="text-white/80 text-base leading-relaxed italic">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#36CFC9] to-[#FFC857] rounded-full flex items-center justify-center">
                      <span className="text-[#0D1B2A] font-bold text-lg">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">{testimonial.name}</p>
                      <p className="text-white/60 text-sm">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-[#36CFC9]/10 to-[#FFC857]/10 backdrop-blur-sm">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 mb-8">
              <TrendingUp className="w-4 h-4 text-[#36CFC9]" />
              <span className="text-white/90 text-sm font-medium">Join the revolution</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Ready to Transform Your
              <span className="block bg-gradient-to-r from-[#36CFC9] to-[#FFC857] bg-clip-text text-transparent">
                Training Process?
              </span>
            </h2>
            
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              Join thousands of teams who have already improved their training efficiency and compliance with SOPora.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button size="lg" asChild className="bg-gradient-to-r from-[#36CFC9] to-[#FFC857] hover:from-[#36CFC9]/90 hover:to-[#FFC857]/90 text-[#0D1B2A] font-semibold text-lg px-8 py-4 shadow-2xl">
                <Link to="/register">Get Started Today</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-8 py-4">
                Schedule Demo
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/60 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-[#36CFC9]" />
                <span>30-day free trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-[#36CFC9]" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-[#36CFC9]" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-[#0D1B2A] border-t border-white/10 py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#36CFC9] to-[#FFC857] rounded-lg flex items-center justify-center">
                  <span className="text-[#0D1B2A] font-bold text-lg">S</span>
                </div>
                <span className="text-white font-bold text-xl">SOPora</span>
              </div>
              <p className="text-white/60 text-sm">
                Empowering teams with intelligent SOP management and training solutions.
              </p>
              <div className="flex items-center space-x-2 text-white/60 text-sm">
                <Globe className="w-4 h-4" />
                <span>Trusted globally</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <div className="space-y-2 text-white/60 text-sm">
                <Link to="#" className="block hover:text-[#36CFC9] transition-colors">Features</Link>
                <Link to="#" className="block hover:text-[#36CFC9] transition-colors">Pricing</Link>
                <Link to="#" className="block hover:text-[#36CFC9] transition-colors">Security</Link>
                <Link to="#" className="block hover:text-[#36CFC9] transition-colors">Integrations</Link>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-white/60 text-sm">
                <Link to="#" className="block hover:text-[#36CFC9] transition-colors">About Us</Link>
                <Link to="#" className="block hover:text-[#36CFC9] transition-colors">Careers</Link>
                <Link to="#" className="block hover:text-[#36CFC9] transition-colors">Blog</Link>
                <Link to="#" className="block hover:text-[#36CFC9] transition-colors">Press</Link>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <div className="space-y-2 text-white/60 text-sm">
                <Link to="#" className="block hover:text-[#36CFC9] transition-colors">Help Center</Link>
                <Link to="#" className="block hover:text-[#36CFC9] transition-colors">Documentation</Link>
                <Link to="#" className="block hover:text-[#36CFC9] transition-colors">API Reference</Link>
                <Link to="#" className="block hover:text-[#36CFC9] transition-colors">Contact Us</Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-white/60">
            <div className="mb-4 md:mb-0">
              <span>© 2024 SOPora. All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-6">
              <Link to="#" className="hover:text-[#36CFC9] transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-[#36CFC9] transition-colors">Terms of Service</Link>
              <Link to="#" className="hover:text-[#36CFC9] transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
