
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <h1 className="text-slate-800 font-bold text-2xl">SOPora</h1>
                <p className="text-blue-600 text-sm font-medium">Smart SOP & Training Assistant</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex items-center space-x-6 text-sm">
                <Link to="#features" className="text-slate-600 hover:text-blue-600 transition-colors">Features</Link>
                <Link to="#pricing" className="text-slate-600 hover:text-blue-600 transition-colors">Pricing</Link>
                <Link to="#testimonials" className="text-slate-600 hover:text-blue-600 transition-colors">Reviews</Link>
              </div>
              <Button variant="ghost" asChild className="text-slate-600 hover:bg-slate-100">
                <Link to="/login">Sign In</Link>
              </Button>
              <Button asChild className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold shadow-md">
                <Link to="/register">Start Free Trial</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-indigo-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-slate-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-blue-50 rounded-full px-4 py-2 mb-8 border border-blue-200">
            <Award className="w-4 h-4 text-blue-600" />
            <span className="text-slate-700 text-sm font-medium">Trusted by 500+ companies worldwide</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-8 leading-tight">
            Transform Your Team's
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Training & SOPs
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Streamline standard operating procedures, enhance team training, and ensure compliance 
            with our AI-powered SOP management platform. Join the future of workplace training.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-lg px-8 py-4 shadow-lg transform hover:scale-105 transition-all">
              <Link to="/register" className="flex items-center">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 text-lg px-8 py-4">
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">{stat.number}</div>
                <div className="text-slate-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-blue-50 rounded-full px-4 py-2 mb-6 border border-blue-200">
              <Zap className="w-4 h-4 text-blue-600" />
              <span className="text-blue-600 text-sm font-medium">Powerful Features</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
              Everything You Need for
              <span className="block text-blue-600">Effective Training</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our comprehensive platform helps you create, manage, and deliver training content that drives real results and measurable outcomes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white border-slate-200 hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-slate-800 text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-amber-50 rounded-full px-4 py-2 mb-6 border border-amber-200">
              <Star className="w-4 h-4 text-amber-600" />
              <span className="text-amber-700 text-sm font-medium">Customer Stories</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
              Loved by Teams
              <span className="block text-amber-600">Worldwide</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-slate-200 shadow-sm">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />
                    ))}
                  </div>
                  <CardDescription className="text-slate-600 text-base leading-relaxed italic">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="text-slate-800 font-semibold">{testimonial.name}</p>
                      <p className="text-slate-500 text-sm">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 mb-8">
              <TrendingUp className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium">Join the revolution</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Ready to Transform Your
              <span className="block text-blue-100">
                Training Process?
              </span>
            </h2>
            
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Join thousands of teams who have already improved their training efficiency and compliance with SOPora.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button size="lg" asChild className="bg-white hover:bg-slate-50 text-blue-600 font-semibold text-lg px-8 py-4 shadow-lg">
                <Link to="/register">Get Started Today</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4">
                Schedule Demo
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-8 text-blue-100 text-sm">
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
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="text-white font-bold text-xl">SOPora</span>
              </div>
              <p className="text-slate-400 text-sm">
                Empowering teams with intelligent SOP management and training solutions.
              </p>
              <div className="flex items-center space-x-2 text-slate-400 text-sm">
                <Globe className="w-4 h-4" />
                <span>Trusted globally</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <div className="space-y-2 text-slate-400 text-sm">
                <Link to="#" className="block hover:text-blue-400 transition-colors">Features</Link>
                <Link to="#" className="block hover:text-blue-400 transition-colors">Pricing</Link>
                <Link to="#" className="block hover:text-blue-400 transition-colors">Security</Link>
                <Link to="#" className="block hover:text-blue-400 transition-colors">Integrations</Link>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-slate-400 text-sm">
                <Link to="#" className="block hover:text-blue-400 transition-colors">About Us</Link>
                <Link to="#" className="block hover:text-blue-400 transition-colors">Careers</Link>
                <Link to="#" className="block hover:text-blue-400 transition-colors">Blog</Link>
                <Link to="#" className="block hover:text-blue-400 transition-colors">Press</Link>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <div className="space-y-2 text-slate-400 text-sm">
                <Link to="#" className="block hover:text-blue-400 transition-colors">Help Center</Link>
                <Link to="#" className="block hover:text-blue-400 transition-colors">Documentation</Link>
                <Link to="#" className="block hover:text-blue-400 transition-colors">API Reference</Link>
                <Link to="#" className="block hover:text-blue-400 transition-colors">Contact Us</Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-slate-400">
            <div className="mb-4 md:mb-0">
              <span>© 2024 SOPora. All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-6">
              <Link to="#" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
              <Link to="#" className="hover:text-blue-400 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
