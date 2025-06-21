
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 flex min-h-screen">
        {/* Left Side - Features */}
        <div className="hidden lg:flex flex-1 items-center justify-center p-12">
          <div className="max-w-lg text-center space-y-8">
            <h2 className="text-white text-4xl font-bold leading-tight">
              Join Thousands of Teams Using
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"> SOPora</span>
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-left bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">30-day free trial with full features</span>
              </div>
              <div className="flex items-center space-x-4 text-left bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">No credit card required to get started</span>
              </div>
              <div className="flex items-center space-x-4 text-left bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">24/7 priority support included</span>
              </div>
            </div>
            
            <div className="pt-8">
              <p className="text-gray-300 text-sm mb-4">
                "SOPora transformed how we manage our standard operating procedures. Setup took minutes, not weeks."
              </p>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                <div className="text-left">
                  <p className="text-white font-medium text-sm">Sarah Chen</p>
                  <p className="text-gray-400 text-xs">Operations Director, TechCorp</p>
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
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <span className="text-white font-bold text-3xl">S</span>
              </div>
              <h1 className="text-white font-bold text-4xl mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Create your account
              </h1>
              <p className="text-gray-300 text-lg">Start your SOPora journey today</p>
            </div>

            <Card className="bg-white/10 border-white/20 backdrop-blur-xl shadow-2xl">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-white text-2xl">Get Started</CardTitle>
                <CardDescription className="text-gray-300">
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
                      className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 h-12 focus:border-blue-400 focus:ring-blue-400"
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
                      className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 h-12 focus:border-blue-400 focus:ring-blue-400"
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
                      className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 h-12 focus:border-blue-400 focus:ring-blue-400"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role" className="text-white font-medium">Role</Label>
                    <Select value={formData.role} onValueChange={(value) => handleChange('role', value)}>
                      <SelectTrigger className="bg-white/10 border-white/30 text-white h-12 focus:border-blue-400 focus:ring-blue-400">
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
                        className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 h-12 pr-12 focus:border-blue-400 focus:ring-blue-400"
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
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold h-12 text-lg shadow-lg transition-all duration-200 transform hover:scale-[1.02]"
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
                
                <div className="text-center text-gray-300">
                  Already have an account?{" "}
                  <Link to="/login" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                    Sign in
                  </Link>
                </div>
                
                <p className="text-xs text-gray-400 text-center">
                  By creating an account, you agree to our{" "}
                  <Link to="#" className="text-blue-400 hover:underline">Terms of Service</Link>
                  {" "}and{" "}
                  <Link to="#" className="text-blue-400 hover:underline">Privacy Policy</Link>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default RegisterPage;
