
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Eye, EyeOff, Loader2, CheckCircle, Building, User, Mail, Lock } from "lucide-react";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
    tenant_name: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const { register, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await register(formData);
    if (success) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
      </div>

      <div className="relative z-10 flex min-h-screen">
        {/* Left Side - Features */}
        <div className="hidden lg:flex flex-1 items-center justify-center p-12">
          <div className="max-w-lg text-center space-y-8">
            <h2 className="text-foreground text-4xl font-bold leading-tight">
              Join Thousands of Teams Using
              <span className="text-primary block"> SOPora</span>
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-left bg-card/60 rounded-xl p-4 backdrop-blur-sm border border-border">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">30-day free trial with full features</span>
              </div>
              <div className="flex items-center space-x-4 text-left bg-card/60 rounded-xl p-4 backdrop-blur-sm border border-border">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">No credit card required to get started</span>
              </div>
              <div className="flex items-center space-x-4 text-left bg-card/60 rounded-xl p-4 backdrop-blur-sm border border-border">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">24/7 priority support included</span>
              </div>
            </div>
            
            <div className="pt-8">
              <p className="text-muted-foreground text-sm mb-4">
                "SOPora transformed how we manage our standard operating procedures. Setup took minutes, not weeks."
              </p>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-10 h-10 bg-primary rounded-full"></div>
                <div className="text-left">
                  <p className="text-foreground font-medium text-sm">Sarah Chen</p>
                  <p className="text-muted-foreground text-xs">Operations Director, TechCorp</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Registration Form */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            {/* Logo Section */}
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                <span className="text-primary-foreground font-bold text-3xl">S</span>
              </div>
              <h1 className="text-foreground font-bold text-4xl mb-2">
                Create your account
              </h1>
              <p className="text-muted-foreground text-lg">Start your SOPora journey today</p>
            </div>

            <Card className="bg-card border-border backdrop-blur-sm shadow-lg">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-card-foreground text-2xl">Get Started</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Create your workspace in under 2 minutes
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="tenant_name" className="text-foreground font-medium flex items-center">
                      <Building className="w-4 h-4 mr-2" />
                      Organization Name
                    </Label>
                    <Input 
                      id="tenant_name" 
                      type="text" 
                      placeholder="Enter your company name"
                      value={formData.tenant_name}
                      onChange={(e) => handleChange('tenant_name', e.target.value)}
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground font-medium flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      Full Name
                    </Label>
                    <Input 
                      id="name" 
                      type="text" 
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className="h-12"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-medium flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      Email Address
                    </Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your work email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className="h-12"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role" className="text-foreground font-medium">Role</Label>
                    <Select value={formData.role} onValueChange={(value) => handleChange('role', value)}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="admin">Administrator</SelectItem>
                        <SelectItem value="manager">Manager</SelectItem>
                        <SelectItem value="user">Team Member</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-foreground font-medium flex items-center">
                      <Lock className="w-4 h-4 mr-2" />
                      Password
                    </Label>
                    <div className="relative">
                      <Input 
                        id="password" 
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a strong password"
                        value={formData.password}
                        onChange={(e) => handleChange('password', e.target.value)}
                        className="h-12 pr-12"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full h-12 text-lg font-semibold shadow-md transition-all duration-200 transform hover:scale-[1.02]"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Creating Account...
                      </>
                    ) : (
                      "Create Account"
                    )}
                  </Button>
                </form>
                
                <Separator />
                
                <div className="text-center text-muted-foreground">
                  Already have an account?{" "}
                  <Link to="/login" className="text-primary hover:text-primary/80 font-semibold transition-colors">
                    Sign in
                  </Link>
                </div>
                
                <p className="text-xs text-muted-foreground text-center">
                  By creating an account, you agree to our{" "}
                  <Link to="#" className="text-primary hover:underline">Terms of Service</Link>
                  {" "}and{" "}
                  <Link to="#" className="text-primary hover:underline">Privacy Policy</Link>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
