
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Users, Zap, Shield, BarChart, Clock } from "lucide-react";

const LandingPage = () => {
  const features = [
    {
      icon: FileText,
      title: "Smart SOP Management",
      description: "Create, organize, and maintain standard operating procedures with AI assistance."
    },
    {
      icon: Users,
      title: "Team Training",
      description: "Assign training materials and track team progress in real-time."
    },
    {
      icon: Zap,
      title: "Interactive Quizzes",
      description: "Test knowledge retention with automated quizzes and assessments."
    },
    {
      icon: Shield,
      title: "Compliance Ready",
      description: "Ensure your team follows industry standards and regulations."
    },
    {
      icon: BarChart,
      title: "Analytics Dashboard",
      description: "Track performance metrics and identify training gaps."
    },
    {
      icon: Clock,
      title: "Time Efficient",
      description: "Reduce training time by 60% with our smart learning system."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D1B2A] to-[#1B263B]">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#36CFC9] rounded-lg flex items-center justify-center">
                <span className="text-[#0D1B2A] font-bold text-xl">S</span>
              </div>
              <div>
                <h1 className="text-white font-bold text-xl">SOPora</h1>
                <p className="text-[#E0E1DD] text-sm">Smart SOP & Training Assistant</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" asChild className="text-white hover:bg-white/10">
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild className="bg-[#36CFC9] hover:bg-[#36CFC9]/90 text-[#0D1B2A]">
                <Link to="/register">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Transform Your Team's <span className="text-[#36CFC9]">Training</span>
          </h1>
          <p className="text-xl text-[#E0E1DD] mb-8 max-w-3xl mx-auto">
            Streamline standard operating procedures, enhance team training, and ensure compliance 
            with our AI-powered SOP management platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-[#36CFC9] hover:bg-[#36CFC9]/90 text-[#0D1B2A]">
              <Link to="/register">Start Free Trial</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Everything You Need for Effective Training
            </h2>
            <p className="text-xl text-[#E0E1DD] max-w-2xl mx-auto">
              Our comprehensive platform helps you create, manage, and deliver training content that drives results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#36CFC9] rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-[#0D1B2A]" />
                  </div>
                  <CardTitle className="text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#E0E1DD]">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Training?
          </h2>
          <p className="text-xl text-[#E0E1DD] mb-8 max-w-2xl mx-auto">
            Join thousands of teams who have already improved their training efficiency with SOPora.
          </p>
          <Button size="lg" asChild className="bg-[#FFC857] hover:bg-[#FFC857]/90 text-[#0D1B2A]">
            <Link to="/register">Get Started Today</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0D1B2A] border-t border-white/10 py-8">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between text-sm text-[#E0E1DD]">
            <div>
              <span>© 2024 SOPora. All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-6">
              <Link to="#" className="hover:text-[#36CFC9] transition-colors">
                Docs
              </Link>
              <Link to="#" className="hover:text-[#36CFC9] transition-colors">
                GitHub
              </Link>
              <Link to="#" className="hover:text-[#36CFC9] transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
