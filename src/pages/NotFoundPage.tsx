
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, ArrowLeft, Search } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D1B2A] to-[#1B263B] flex items-center justify-center p-6">
      <Card className="w-full max-w-md bg-white/10 border-white/20 backdrop-blur-sm">
        <CardHeader className="text-center">
          <div className="w-24 h-24 bg-[#36CFC9]/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-6xl">🔍</span>
          </div>
          <CardTitle className="text-white text-3xl">404</CardTitle>
          <CardDescription className="text-[#E0E1DD] text-lg">
            Page Not Found
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 text-center">
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Oops! This page doesn't exist
            </h2>
            <p className="text-[#E0E1DD]">
              The page you're looking for might have been moved, deleted, or doesn't exist.
            </p>
          </div>
          
          <div className="space-y-3">
            <Button asChild className="w-full bg-[#36CFC9] hover:bg-[#36CFC9]/90 text-[#0D1B2A]">
              <Link to="/dashboard">
                <Home className="w-4 h-4 mr-2" />
                Go to Dashboard
              </Link>
            </Button>
            
            <Button variant="outline" asChild className="w-full border-white/30 text-white hover:bg-white/10">
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
          
          <div className="pt-4 border-t border-white/20">
            <p className="text-[#E0E1DD] text-sm mb-3">
              Need help? Try these popular pages:
            </p>
            <div className="space-y-2 text-sm">
              <Link to="/sops" className="block text-[#36CFC9] hover:underline">
                Browse SOPs
              </Link>
              <Link to="/assignments" className="block text-[#36CFC9] hover:underline">
                View Assignments
              </Link>
              <Link to="/profile" className="block text-[#36CFC9] hover:underline">
                Manage Profile
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFoundPage;
