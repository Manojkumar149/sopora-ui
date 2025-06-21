
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-200/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-slate-200/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
      </div>

      <div className="relative z-10 flex min-h-screen">
        {/* Left Side - Login Form */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            {/* Logo Section */}
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                <span className="text-white font-bold text-3xl">S</span>
              </div>
              <h1 className="text-slate-800 font-bold text-4xl mb-2">
                Welcome back
              </h1>
              <p className="text-slate-600 text-lg">Sign in to continue to SOPora</p>
            </div>

            <Card className="bg-white/80 border-slate-200 backdrop-blur-sm shadow-lg">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-slate-800 text-2xl">Sign In</CardTitle>
                <CardDescription className="text-slate-600">
                  Enter your credentials to access your workspace
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-700 font-medium">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-white border-slate-300 text-slate-800 placeholder:text-slate-400 h-12 focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-slate-700 font-medium">Password</Label>
                    <div className="relative">
                      <Input 
                        id="password" 
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-white border-slate-300 text-slate-800 placeholder:text-slate-400 h-12 pr-12 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <Link to="#" className="text-blue-600 hover:text-blue-700 transition-colors font-medium">
                      Forgot password?
                    </Link>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold h-12 text-lg shadow-md transition-all duration-200 transform hover:scale-[1.02]"
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
                
                <Separator className="bg-slate-200" />
                
                <div className="text-center text-slate-600">
                  Don't have an account?{" "}
                  <Link to="/register" className="text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                    Create account
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Right Side - Features */}
        <div className="hidden lg:flex flex-1 items-center justify-center p-12">
          <div className="max-w-lg text-center space-y-8">
            <h2 className="text-slate-800 text-4xl font-bold leading-tight">
              Streamline Your Operations with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> SOPora</span>
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 text-left bg-white/60 rounded-xl p-6 backdrop-blur-sm border border-slate-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-slate-800 font-semibold text-lg mb-2">Enterprise Security</h3>
                  <p className="text-slate-600">Bank-grade encryption and multi-tenant architecture ensure your data stays protected.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 text-left bg-white/60 rounded-xl p-6 backdrop-blur-sm border border-slate-200">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-slate-800 font-semibold text-lg mb-2">Lightning Fast</h3>
                  <p className="text-slate-600">Optimized for speed with real-time updates and instant synchronization across teams.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 text-left bg-white/60 rounded-xl p-6 backdrop-blur-sm border border-slate-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-slate-800 font-semibold text-lg mb-2">Team Collaboration</h3>
                  <p className="text-slate-600">Built for teams with advanced permission controls and workflow management.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
