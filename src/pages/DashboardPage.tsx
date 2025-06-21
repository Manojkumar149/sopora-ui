
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Users, Clock, TrendingUp, Plus, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  const stats = [
    {
      title: "Total SOPs",
      value: "127",
      description: "+12 from last month",
      icon: FileText,
      color: "text-[#36CFC9]"
    },
    {
      title: "Active Users",
      value: "48",
      description: "+4 from last week",
      icon: Users,
      color: "text-[#FFC857]"
    },
    {
      title: "Training Hours",
      value: "342",
      description: "+28 from last month",
      icon: Clock,
      color: "text-[#415A77]"
    },
    {
      title: "Completion Rate",
      value: "94%",
      description: "+2% from last month",
      icon: TrendingUp,
      color: "text-green-500"
    }
  ];

  const recentActivity = [
    { action: "New SOP created", item: "Customer Onboarding Process", time: "2 hours ago" },
    { action: "Training completed", item: "Sarah Johnson completed Safety Training", time: "4 hours ago" },
    { action: "Quiz assigned", item: "Product Knowledge Quiz assigned to Sales Team", time: "6 hours ago" },
    { action: "SOP updated", item: "Quality Control Checklist updated", time: "1 day ago" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#0D1B2A]">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your training.</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button asChild className="bg-[#36CFC9] hover:bg-[#36CFC9]/90 text-[#0D1B2A]">
            <Link to="/sops">
              <Plus className="w-4 h-4 mr-2" />
              Create SOP
            </Link>
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#0D1B2A]">{stat.value}</div>
              <p className="text-xs text-gray-600">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="text-[#0D1B2A]">Recent Activity</CardTitle>
            <CardDescription>Latest updates from your team</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-[#0D1B2A]">{activity.action}</p>
                    <p className="text-sm text-gray-600">{activity.item}</p>
                  </div>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
              ))}
            </div>
            <Button variant="ghost" asChild className="w-full mt-4">
              <Link to="/notifications">
                View All Activity
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-[#0D1B2A]">Quick Actions</CardTitle>
            <CardDescription>Get started with common tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" asChild className="h-20 flex-col">
                <Link to="/sops">
                  <FileText className="w-6 h-6 mb-2" />
                  <span>Create SOP</span>
                </Link>
              </Button>
              <Button variant="outline" asChild className="h-20 flex-col">
                <Link to="/assignments">
                  <Users className="w-6 h-6 mb-2" />
                  <span>Assign Training</span>
                </Link>
              </Button>
              <Button variant="outline" asChild className="h-20 flex-col">
                <Link to="/quizzes">
                  <Clock className="w-6 h-6 mb-2" />
                  <span>Create Quiz</span>
                </Link>
              </Button>
              <Button variant="outline" asChild className="h-20 flex-col">
                <Link to="/users">
                  <TrendingUp className="w-6 h-6 mb-2" />
                  <span>View Reports</span>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;
