
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Eye, EyeOff, Loader2, Shield, Zap, Users } from "lucide-react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await login(email, password);
    if (success) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D1B2A] via-[#1B263B] to-[#0D1B2A] flex">
      {/* Left Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23415A77" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        
        <div className="w-full max-w-md relative z-10">
          {/* Logo Section */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-[#36CFC9] to-[#FFC857] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <span className="text-[#0D1B2A] font-bold text-3xl">S</span>
            </div>
            <h1 className="text-white font-bold text-3xl mb-2">Welcome back</h1>
            <p className="text-[#E0E1DD]/80 text-lg">Sign in to continue to SOPora</p>
          </div>

          <Card className="bg-white/10 border-white/20 backdrop-blur-xl shadow-2xl">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-white text-2xl">Sign In</CardTitle>
              <CardDescription className="text-[#E0E1DD]/80 text-base">
                Enter your credentials to access your workspace
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white font-medium">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 h-12 focus:border-[#36CFC9] focus:ring-[#36CFC9]"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-white font-medium">Password</Label>
                  <div className="relative">
                    <Input 
                      id="password" 
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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
                
                <div className="flex items-center justify-between text-sm">
                  <Link to="#" className="text-[#36CFC9] hover:text-[#FFC857] transition-colors font-medium">
                    Forgot password?
                  </Link>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-[#36CFC9] to-[#FFC857] hover:from-[#36CFC9]/90 hover:to-[#FFC857]/90 text-[#0D1B2A] font-semibold h-12 text-lg shadow-lg transition-all duration-200 transform hover:scale-[1.02]"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Signing In...
                    </>
                  ) : (
                    "Sign In"
                  )}
                </Button>
              </form>
              
              <Separator className="bg-white/20" />
              
              <div className="text-center text-[#E0E1DD]/80">
                Don't have an account?{" "}
                <Link to="/register" className="text-[#36CFC9] hover:text-[#FFC857] font-semibold transition-colors">
                  Create account
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Right Side - Features */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-[#36CFC9]/10 to-[#FFC857]/10 items-center justify-center p-12 relative">
        <div className="max-w-lg text-center space-y-8">
          <h2 className="text-white text-4xl font-bold leading-tight">
            Streamline Your Operations with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#36CFC9] to-[#FFC857]"> SOPora</span>
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4 text-left">
              <div className="w-12 h-12 bg-[#36CFC9]/20 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-[#36CFC9]" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">Enterprise Security</h3>
                <p className="text-[#E0E1DD]/80">Bank-grade encryption and multi-tenant architecture ensure your data stays protected.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 text-left">
              <div className="w-12 h-12 bg-[#FFC857]/20 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-[#FFC857]" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">Lightning Fast</h3>
                <p className="text-[#E0E1DD]/80">Optimized for speed with real-time updates and instant synchronization across teams.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 text-left">
              <div className="w-12 h-12 bg-[#36CFC9]/20 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-[#36CFC9]" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">Team Collaboration</h3>
                <p className="text-[#E0E1DD]/80">Built for teams with advanced permission controls and workflow management.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
