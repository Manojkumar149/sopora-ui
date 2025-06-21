
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { User, Mail, Phone, Building, Shield, Calendar } from "lucide-react";

const ProfilePage = () => {
  const userStats = [
    { label: "SOPs Completed", value: "23", icon: User },
    { label: "Quizzes Passed", value: "18", icon: Shield },
    { label: "Training Hours", value: "45", icon: Calendar },
    { label: "Average Score", value: "92%", icon: Shield }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-[#0D1B2A]">Profile</h1>
        <p className="text-gray-600">Manage your account settings and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#0D1B2A]">Personal Information</CardTitle>
              <CardDescription>Update your personal details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="John" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Doe" />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" defaultValue="john.doe@acmecorp.com" />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
              </div>
              <div>
                <Label htmlFor="department">Department</Label>
                <Input id="department" defaultValue="Sales" />
              </div>
              <Button className="bg-[#36CFC9] hover:bg-[#36CFC9]/90 text-[#0D1B2A]">
                Save Changes
              </Button>
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#0D1B2A]">Security Settings</CardTitle>
              <CardDescription>Manage your password and security preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="currentPassword">Current Password</Label>
                <Input id="currentPassword" type="password" />
              </div>
              <div>
                <Label htmlFor="newPassword">New Password</Label>
                <Input id="newPassword" type="password" />
              </div>
              <div>
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <Input id="confirmPassword" type="password" />
              </div>
              <Button variant="outline">
                Update Password
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Profile Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#0D1B2A]">Profile Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="text-2xl bg-[#36CFC9] text-[#0D1B2A]">JD</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-[#0D1B2A]">John Doe</h3>
                <p className="text-gray-600">Sales Manager</p>
                <Badge className="mt-2 bg-green-100 text-green-800">Active</Badge>
              </div>
              
              <Separator />
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-gray-500" />
                  <span className="text-sm">john.doe@acmecorp.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-gray-500" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Building className="w-4 h-4 text-gray-500" />
                  <span className="text-sm">Acme Corporation</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Statistics */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#0D1B2A]">Training Statistics</CardTitle>
              <CardDescription>Your learning progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {userStats.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-[#36CFC9]/10 rounded-lg flex items-center justify-center">
                        <stat.icon className="w-4 h-4 text-[#36CFC9]" />
                      </div>
                      <span className="text-sm font-medium">{stat.label}</span>
                    </div>
                    <span className="font-bold text-[#0D1B2A]">{stat.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#0D1B2A]">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full">
                Download Certificate
              </Button>
              <Button variant="outline" className="w-full">
                Export Training Records
              </Button>
              <Button variant="outline" className="w-full text-red-600 hover:text-red-700">
                Deactivate Account
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
