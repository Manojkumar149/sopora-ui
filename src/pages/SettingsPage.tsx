
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Building, Palette, Key, Bell, Shield, Download } from "lucide-react";

const SettingsPage = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-[#0D1B2A]">Settings</h1>
        <p className="text-gray-600">Manage your organization settings and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Settings */}
        <div className="lg:col-span-2 space-y-6">
          {/* Organization Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-[#0D1B2A]">
                <Building className="w-5 h-5" />
                <span>Organization Information</span>
              </CardTitle>
              <CardDescription>Basic information about your organization</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="orgName">Organization Name</Label>
                <Input id="orgName" defaultValue="Acme Corporation" />
              </div>
              <div>
                <Label htmlFor="orgDescription">Description</Label>
                <Textarea 
                  id="orgDescription" 
                  rows={3}
                  defaultValue="A leading technology company focused on innovative solutions"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="industry">Industry</Label>
                  <Input id="industry" defaultValue="Technology" />
                </div>
                <div>
                  <Label htmlFor="size">Company Size</Label>
                  <Input id="size" defaultValue="50-100 employees" />
                </div>
              </div>
              <Button className="bg-[#36CFC9] hover:bg-[#36CFC9]/90 text-[#0D1B2A]">
                Save Changes
              </Button>
            </CardContent>
          </Card>

          {/* Branding */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-[#0D1B2A]">
                <Palette className="w-5 h-5" />
                <span>Branding & Appearance</span>
              </CardTitle>
              <CardDescription>Customize the look and feel of your workspace</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Logo</Label>
                <div className="mt-2 flex items-center space-x-4">
                  <div className="w-16 h-16 bg-[#36CFC9] rounded-lg flex items-center justify-center">
                    <span className="text-[#0D1B2A] font-bold text-xl">A</span>
                  </div>
                  <Button variant="outline">Upload New Logo</Button>
                </div>
              </div>
              <div>
                <Label htmlFor="primaryColor">Primary Color</Label>
                <div className="flex items-center space-x-4 mt-2">
                  <div className="w-8 h-8 bg-[#36CFC9] rounded border"></div>
                  <Input id="primaryColor" defaultValue="#36CFC9" className="w-32" />
                </div>
              </div>
              <Button variant="outline">Reset to Default</Button>
            </CardContent>
          </Card>

          {/* API & Integrations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-[#0D1B2A]">
                <Key className="w-5 h-5" />
                <span>API Keys & Integrations</span>
              </CardTitle>
              <CardDescription>Manage API access and third-party integrations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>API Key</Label>
                <div className="flex items-center space-x-2 mt-2">
                  <Input 
                    value="sk_live_••••••••••••••••••••••••••••••••" 
                    readOnly 
                    className="font-mono"
                  />
                  <Button variant="outline">Copy</Button>
                </div>
              </div>
              <div>
                <Label>Webhook URL</Label>
                <Input 
                  placeholder="https://your-domain.com/webhooks/sopera"
                  className="mt-2"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Enable API Access</Label>
                  <p className="text-sm text-gray-600">Allow external applications to access your data</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Button variant="outline">Generate New API Key</Button>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Settings */}
        <div className="space-y-6">
          {/* Notifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-[#0D1B2A]">
                <Bell className="w-5 h-5" />
                <span>Notifications</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Email Notifications</Label>
                  <p className="text-sm text-gray-600">Receive updates via email</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label>Assignment Alerts</Label>
                  <p className="text-sm text-gray-600">New training assignments</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label>Quiz Reminders</Label>
                  <p className="text-sm text-gray-600">Upcoming quiz deadlines</p>
                </div>
                <Switch />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label>Weekly Reports</Label>
                  <p className="text-sm text-gray-600">Training progress summaries</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          {/* Security */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-[#0D1B2A]">
                <Shield className="w-5 h-5" />
                <span>Security</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Two-Factor Authentication</Label>
                  <p className="text-sm text-gray-600">Add an extra layer of security</p>
                </div>
                <Switch />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label>Session Timeout</Label>
                  <p className="text-sm text-gray-600">Auto-logout after inactivity</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Button variant="outline" className="w-full">
                View Security Log
              </Button>
            </CardContent>
          </Card>

          {/* Data & Privacy */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-[#0D1B2A]">
                <Download className="w-5 h-5" />
                <span>Data & Privacy</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full">
                Export Data
              </Button>
              <Button variant="outline" className="w-full">
                Privacy Policy
              </Button>
              <Button variant="outline" className="w-full text-red-600 hover:text-red-700">
                Delete Organization
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
