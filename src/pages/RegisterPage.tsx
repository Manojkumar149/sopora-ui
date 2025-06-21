
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    tenant_name: "",
  });
  const { register, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
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
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="tenant_name" className="text-white">Organization Name</Label>
                <Input 
                  id="tenant_name" 
                  name="tenant_name"
                  type="text" 
                  placeholder="Enter organization name"
                  value={formData.tenant_name}
                  onChange={handleChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first_name" className="text-white">First Name</Label>
                  <Input 
                    id="first_name" 
                    name="first_name"
                    type="text" 
                    placeholder="First name"
                    value={formData.first_name}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last_name" className="text-white">Last Name</Label>
                  <Input 
                    id="last_name" 
                    name="last_name"
                    type="text" 
                    placeholder="Last name"
                    value={formData.last_name}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">Email</Label>
                <Input 
                  id="email" 
                  name="email"
                  type="email" 
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-white">Password</Label>
                <Input 
                  id="password" 
                  name="password"
                  type="password" 
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-[#36CFC9] hover:bg-[#36CFC9]/90 text-[#0D1B2A]"
                disabled={isLoading}
              >
                {isLoading ? "Creating Account..." : "Create Account"}
              </Button>
              <div className="text-center text-sm text-[#E0E1DD]">
                Already have an account?{" "}
                <Link to="/login" className="text-[#36CFC9] hover:underline">
                  Sign in
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegisterPage;
