
import { 
  FileText, 
  Users, 
  Settings, 
  Bell, 
  User, 
  LayoutDashboard,
  Calendar,
  Media,
  Folder
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";

const menuItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "SOPs",
    url: "/sops",
    icon: FileText,
  },
  {
    title: "Assignments",
    url: "/assignments",
    icon: Calendar,
  },
  {
    title: "Quizzes",
    url: "/quizzes",
    icon: Folder,
  },
  {
    title: "Media",
    url: "/media",
    icon: Media,
  },
  {
    title: "Users",
    url: "/users",
    icon: Users,
  },
  {
    title: "Notifications",
    url: "/notifications",
    icon: Bell,
  },
  {
    title: "Profile",
    url: "/profile",
    icon: User,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

const AppSidebar = () => {
  const location = useLocation();

  return (
    <Sidebar className="bg-[#0D1B2A] border-r border-[#1B263B]">
      <SidebarHeader className="p-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-[#36CFC9] rounded-lg flex items-center justify-center">
            <span className="text-[#0D1B2A] font-bold text-lg">S</span>
          </div>
          <div>
            <h2 className="text-white font-bold text-lg">SOPora</h2>
            <p className="text-[#415A77] text-sm">Smart SOP Assistant</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-[#415A77] uppercase text-xs font-semibold">
            Main Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={location.pathname === item.url}
                    className="text-white hover:bg-[#1B263B] data-[active=true]:bg-[#36CFC9] data-[active=true]:text-[#0D1B2A]"
                  >
                    <Link to={item.url}>
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
