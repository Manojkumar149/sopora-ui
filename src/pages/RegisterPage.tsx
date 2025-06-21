
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D1B2A] to-[#1B263B] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#36CFC9] rounded-lg flex items-center justify-center mx-auto mb-4">
            <span className="text-[#0D1B2A] font-bold text-2xl">S</span>
          </div>
          <h1 className="text-white font-bold text-2xl">Join SOPora</h1>
          <p className="text-[#E0E1DD] text-sm">Create your account and get started</p>
        </div>

        <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Create Account</CardTitle>
            <CardDescription className="text-[#E0E1DD]">
              Fill in your details to get started
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="orgName" className="text-white">Organization Name</Label>
              <Input 
                id="orgName" 
                type="text" 
                placeholder="Enter organization name"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-white">First Name</Label>
                <Input 
                  id="firstName" 
                  type="text" 
                  placeholder="First name"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-white">Last Name</Label>
                <Input 
                  id="lastName" 
                  type="text" 
                  placeholder="Last name"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
            </div>
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
                placeholder="Create a password"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
            </div>
            <Button asChild className="w-full bg-[#36CFC9] hover:bg-[#36CFC9]/90 text-[#0D1B2A]">
              <Link to="/dashboard">Create Account</Link>
            </Button>
            <div className="text-center text-sm text-[#E0E1DD]">
              Already have an account?{" "}
              <Link to="/login" className="text-[#36CFC9] hover:underline">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegisterPage;
