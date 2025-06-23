
import { Bell, ChevronDown, LogOut, Settings } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/hooks/useAuth";
import { useDeviceType } from "@/hooks/use-mobile";

const AppTopbar = () => {
  const { user, tenant, logout } = useAuth();
  const navigate = useNavigate();
  const { isMobile } = useDeviceType();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const getUserInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <header className="h-16 bg-white/95 backdrop-blur-md border-b border-gray-200/50 flex items-center justify-between px-4 md:px-6 shadow-sm">
      <div className="flex items-center space-x-3 md:space-x-4">
        <SidebarTrigger />
        {!isMobile && (
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#36CFC9] to-[#FFC857] rounded-lg flex items-center justify-center shadow-md">
                <span className="text-[#0D1B2A] font-bold text-sm">
                  {tenant?.name ? tenant.name.charAt(0).toUpperCase() : 'T'}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-[#0D1B2A]">
                  {tenant?.name || 'Your Organization'}
                </span>
                <span className="text-xs text-gray-500">Workspace</span>
              </div>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
        )}
      </div>
      
      <div className="flex items-center space-x-2 md:space-x-4">
        <Button variant="ghost" size="icon" asChild className="relative hover:bg-gray-100/80">
          <Link to="/notifications">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-[#FFC857] to-[#36CFC9] rounded-full border-2 border-white shadow-sm animate-pulse"></span>
            <span className="sr-only">Notifications</span>
          </Link>
        </Button>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className={`flex items-center space-x-2 md:space-x-3 h-12 px-2 md:px-3 hover:bg-gray-100/80 transition-all duration-200`}>
              <Avatar className="w-8 h-8 ring-2 ring-[#36CFC9]/20">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-gradient-to-br from-[#36CFC9] to-[#FFC857] text-[#0D1B2A] font-semibold text-sm">
                  {user ? getUserInitials(user.name) : 'U'}
                </AvatarFallback>
              </Avatar>
              {!isMobile && (
                <>
                  <div className="flex flex-col items-start">
                    <span className="text-sm font-semibold text-[#0D1B2A] truncate max-w-24">
                      {user?.name || 'User'}
                    </span>
                    <Badge variant="secondary" className="text-xs bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 font-medium">
                      {user?.role || 'user'}
                    </Badge>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 bg-white/95 backdrop-blur-md border border-gray-200/50 shadow-lg">
            <div className="p-3">
              <p className="text-sm font-semibold text-[#0D1B2A]">{user?.name}</p>
              <p className="text-xs text-gray-500 truncate">{user?.email}</p>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild className="hover:bg-gray-50/80">
              <Link to="/profile" className="flex items-center cursor-pointer">
                Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="hover:bg-gray-50/80">
              <Link to="/settings" className="flex items-center cursor-pointer">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout} className="text-red-600 focus:text-red-600 hover:bg-red-50/80 cursor-pointer">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default AppTopbar;
