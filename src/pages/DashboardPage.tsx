
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Users, Clock, TrendingUp, Plus, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useDeviceType } from "@/hooks/use-mobile";

const DashboardPage = () => {
  const { isMobile, isTablet } = useDeviceType();
  
  const stats = [
    {
      title: "Total SOPs",
      value: "127",
      description: "+12 from last month",
      icon: FileText,
      color: "text-[#36CFC9]",
      bgGradient: "from-[#36CFC9]/10 to-[#36CFC9]/5"
    },
    {
      title: "Active Users",
      value: "48",
      description: "+4 from last week",
      icon: Users,
      color: "text-[#FFC857]",
      bgGradient: "from-[#FFC857]/10 to-[#FFC857]/5"
    },
    {
      title: "Training Hours",
      value: "342",
      description: "+28 from last month",
      icon: Clock,
      color: "text-[#415A77]",
      bgGradient: "from-[#415A77]/10 to-[#415A77]/5"
    },
    {
      title: "Completion Rate",
      value: "94%",
      description: "+2% from last month",
      icon: TrendingUp,
      color: "text-green-500",
      bgGradient: "from-green-500/10 to-green-500/5"
    }
  ];

  const recentActivity = [
    { action: "New SOP created", item: "Customer Onboarding Process", time: "2 hours ago" },
    { action: "Training completed", item: "Sarah Johnson completed Safety Training", time: "4 hours ago" },
    { action: "Quiz assigned", item: "Product Knowledge Quiz assigned to Sales Team", time: "6 hours ago" },
    { action: "SOP updated", item: "Quality Control Checklist updated", time: "1 day ago" },
  ];

  const gridCols = isMobile ? "grid-cols-2" : isTablet ? "grid-cols-2" : "grid-cols-4";

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-[#0D1B2A]">Dashboard</h1>
          <p className="text-gray-600 text-sm md:text-base">Welcome back! Here's what's happening with your training.</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button asChild className="bg-gradient-to-r from-[#36CFC9] to-[#FFC857] hover:from-[#36CFC9]/90 hover:to-[#FFC857]/90 text-[#0D1B2A] font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <Link to="/sops">
              <Plus className="w-4 h-4 mr-2" />
              Create SOP
            </Link>
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className={`grid ${gridCols} gap-4 md:gap-6`}>
        {stats.map((stat, index) => (
          <Card key={index} className="bg-gradient-to-br from-white via-white to-gray-50/50 border border-gray-200/60 hover:shadow-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs md:text-sm font-semibold text-gray-600">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-lg bg-gradient-to-br ${stat.bgGradient}`}>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-xl md:text-2xl font-bold text-[#0D1B2A]">{stat.value}</div>
              <p className="text-xs text-gray-600 mt-1">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card className="bg-gradient-to-br from-white via-white to-gray-50/30 border border-gray-200/60 shadow-lg backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-[#0D1B2A] font-bold">Recent Activity</CardTitle>
            <CardDescription>Latest updates from your team</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gradient-to-r from-gray-50/80 to-white/80 rounded-lg border border-gray-100/50 hover:shadow-md transition-all duration-200">
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-[#0D1B2A] text-sm">{activity.action}</p>
                    <p className="text-sm text-gray-600 truncate">{activity.item}</p>
                  </div>
                  <span className="text-xs text-gray-500 ml-2 flex-shrink-0">{activity.time}</span>
                </div>
              ))}
            </div>
            <Button variant="ghost" asChild className="w-full mt-4 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 transition-all duration-200">
              <Link to="/notifications">
                View All Activity
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="bg-gradient-to-br from-white via-white to-gray-50/30 border border-gray-200/60 shadow-lg backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-[#0D1B2A] font-bold">Quick Actions</CardTitle>
            <CardDescription>Get started with common tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" asChild className="h-20 flex-col bg-gradient-to-br from-white to-gray-50/50 hover:from-[#36CFC9]/5 hover:to-[#36CFC9]/10 border-gray-200/60 hover:border-[#36CFC9]/30 transition-all duration-300 transform hover:scale-105">
                <Link to="/sops">
                  <FileText className="w-6 h-6 mb-2 text-[#36CFC9]" />
                  <span className="font-semibold">Create SOP</span>
                </Link>
              </Button>
              <Button variant="outline" asChild className="h-20 flex-col bg-gradient-to-br from-white to-gray-50/50 hover:from-[#FFC857]/5 hover:to-[#FFC857]/10 border-gray-200/60 hover:border-[#FFC857]/30 transition-all duration-300 transform hover:scale-105">
                <Link to="/assignments">
                  <Users className="w-6 h-6 mb-2 text-[#FFC857]" />
                  <span className="font-semibold">Assign Training</span>
                </Link>
              </Button>
              <Button variant="outline" asChild className="h-20 flex-col bg-gradient-to-br from-white to-gray-50/50 hover:from-[#415A77]/5 hover:to-[#415A77]/10 border-gray-200/60 hover:border-[#415A77]/30 transition-all duration-300 transform hover:scale-105">
                <Link to="/quizzes">
                  <Clock className="w-6 h-6 mb-2 text-[#415A77]" />
                  <span className="font-semibold">Create Quiz</span>
                </Link>
              </Button>
              <Button variant="outline" asChild className="h-20 flex-col bg-gradient-to-br from-white to-gray-50/50 hover:from-green-500/5 hover:to-green-500/10 border-gray-200/60 hover:border-green-500/30 transition-all duration-300 transform hover:scale-105">
                <Link to="/users">
                  <TrendingUp className="w-6 h-6 mb-2 text-green-500" />
                  <span className="font-semibold">View Reports</span>
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
