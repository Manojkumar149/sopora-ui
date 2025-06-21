
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D1B2A] to-[#1B263B] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#36CFC9] rounded-lg flex items-center justify-center mx-auto mb-4">
            <span className="text-[#0D1B2A] font-bold text-2xl">S</span>
          </div>
          <h1 className="text-white font-bold text-2xl">Welcome back to SOPora</h1>
          <p className="text-[#E0E1DD] text-sm">Sign in to your account</p>
        </div>

        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Sign In</CardTitle>
            <CardDescription className="text-[#E0E1DD]">
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-white">Password</Label>
              <Input 
                id="password" 
                type="password" 
                placeholder="Enter your password"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <Link to="#" className="text-[#36CFC9] hover:underline">
                Forgot password?
              </Link>
            </div>
            <Button asChild className="w-full bg-[#36CFC9] hover:bg-[#36CFC9]/90 text-[#0D1B2A]">
              <Link to="/dashboard">Sign In</Link>
            </Button>
            <div className="text-center text-sm text-[#E0E1DD]">
              Don't have an account?{" "}
              <Link to="/register" className="text-[#36CFC9] hover:underline">
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
