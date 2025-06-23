
import { 
  FileText, 
  Users, 
  Settings, 
  Bell, 
  User, 
  LayoutDashboard,
  Calendar,
  Images,
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
import { useDeviceType } from "@/hooks/use-mobile";

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
    icon: Images,
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
  const { isMobile } = useDeviceType();

  return (
    <Sidebar className="bg-gradient-to-b from-[#0D1B2A] via-[#0D1B2A] to-[#1B263B] border-r border-[#1B263B]/50 backdrop-blur-md">
      <SidebarHeader className={`${isMobile ? 'p-4' : 'p-6'}`}>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-[#36CFC9] to-[#FFC857] rounded-xl flex items-center justify-center shadow-lg ring-2 ring-white/10">
            <span className="text-[#0D1B2A] font-bold text-xl">S</span>
          </div>
          {!isMobile && (
            <div>
              <h2 className="text-white font-bold text-xl">SOPora</h2>
              <p className="text-[#415A77] text-sm font-medium">Smart SOP Assistant</p>
            </div>
          )}
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-[#415A77] uppercase text-xs font-bold tracking-wider px-3">
            Main Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={location.pathname === item.url}
                    className="text-white/90 hover:bg-gradient-to-r hover:from-[#1B263B] hover:to-[#36CFC9]/10 data-[active=true]:bg-gradient-to-r data-[active=true]:from-[#36CFC9] data-[active=true]:to-[#FFC857] data-[active=true]:text-[#0D1B2A] font-medium transition-all duration-300 rounded-lg mx-2 my-1 shadow-sm data-[active=true]:shadow-lg"
                  >
                    <Link to={item.url} className="flex items-center space-x-3">
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.title}</span>
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
