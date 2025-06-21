
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
    <div className="min-h-screen bg-gradient-to-br from-[#0D1B2A] via-[#1B263B] to-[#0D1B2A] flex">
      {/* Left Side - Features */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-[#36CFC9]/10 to-[#FFC857]/10 items-center justify-center p-12 relative">
        <div className="max-w-lg text-center space-y-8">
          <h2 className="text-white text-4xl font-bold leading-tight">
            Join Thousands of Teams Using
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#36CFC9] to-[#FFC857]"> SOPora</span>
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4 text-left bg-white/5 rounded-lg p-4">
              <CheckCircle className="w-6 h-6 text-[#36CFC9] flex-shrink-0" />
              <span className="text-[#E0E1DD]">30-day free trial with full features</span>
            </div>
            <div className="flex items-center space-x-4 text-left bg-white/5 rounded-lg p-4">
              <CheckCircle className="w-6 h-6 text-[#36CFC9] flex-shrink-0" />
              <span className="text-[#E0E1DD]">No credit card required to get started</span>
            </div>
            <div className="flex items-center space-x-4 text-left bg-white/5 rounded-lg p-4">
              <CheckCircle className="w-6 h-6 text-[#36CFC9] flex-shrink-0" />
              <span className="text-[#E0E1DD]">24/7 priority support included</span>
            </div>
          </div>
          
          <div className="pt-8">
            <p className="text-[#E0E1DD]/60 text-sm">
              "SOPora transformed how we manage our standard operating procedures. Setup took minutes, not weeks."
            </p>
            <div className="mt-4 flex items-center justify-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#36CFC9] to-[#FFC857] rounded-full"></div>
              <div className="text-left">
                <p className="text-white font-medium text-sm">Sarah Chen</p>
                <p className="text-[#E0E1DD]/60 text-xs">Operations Director, TechCorp</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Registration Form */}
      <div className="flex-1 flex items-center justify-center p-8 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23415A77" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        
        <div className="w-full max-w-md relative z-10">
          {/* Logo Section */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-[#36CFC9] to-[#FFC857] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <span className="text-[#0D1B2A] font-bold text-3xl">S</span>
            </div>
            <h1 className="text-white font-bold text-3xl mb-2">Create your account</h1>
            <p className="text-[#E0E1DD]/80 text-lg">Start your SOPora journey today</p>
          </div>

          <Card className="bg-white/10 border-white/20 backdrop-blur-xl shadow-2xl">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-white text-2xl">Get Started</CardTitle>
              <CardDescription className="text-[#E0E1DD]/80 text-base">
                Create your workspace in under 2 minutes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="tenant_name" className="text-white font-medium flex items-center">
                    <Building className="w-4 h-4 mr-2" />
                    Organization Name
                  </Label>
                  <Input 
                    id="tenant_name" 
                    type="text" 
                    placeholder="Enter your company name"
                    value={formData.tenant_name}
                    onChange={(e) => handleChange('tenant_name', e.target.value)}
                    className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 h-12 focus:border-[#36CFC9] focus:ring-[#36CFC9]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white font-medium flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    Full Name
                  </Label>
                  <Input 
                    id="name" 
                    type="text" 
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 h-12 focus:border-[#36CFC9] focus:ring-[#36CFC9]"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white font-medium flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Address
                  </Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Enter your work email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 h-12 focus:border-[#36CFC9] focus:ring-[#36CFC9]"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role" className="text-white font-medium">Role</Label>
                  <Select value={formData.role} onValueChange={(value) => handleChange('role', value)}>
                    <SelectTrigger className="bg-white/10 border-white/30 text-white h-12 focus:border-[#36CFC9] focus:ring-[#36CFC9]">
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
                  <Label htmlFor="password" className="text-white font-medium flex items-center">
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
                      className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 h-12 pr-12 focus:border-[#36CFC9] focus:ring-[#36CFC9]"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-[#36CFC9] to-[#FFC857] hover:from-[#36CFC9]/90 hover:to-[#FFC857]/90 text-[#0D1B2A] font-semibold h-12 text-lg shadow-lg transition-all duration-200 transform hover:scale-[1.02]"
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
              
              <Separator className="bg-white/20" />
              
              <div className="text-center text-[#E0E1DD]/80">
                Already have an account?{" "}
                <Link to="/login" className="text-[#36CFC9] hover:text-[#FFC857] font-semibold transition-colors">
                  Sign in
                </Link>
              </div>
              
              <p className="text-xs text-[#E0E1DD]/60 text-center">
                By creating an account, you agree to our{" "}
                <Link to="#" className="text-[#36CFC9] hover:underline">Terms of Service</Link>
                {" "}and{" "}
                <Link to="#" className="text-[#36CFC9] hover:underline">Privacy Policy</Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
