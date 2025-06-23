
import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "./AppSidebar";
import AppTopbar from "./AppTopbar";
import AppFooter from "./AppFooter";
import { useDeviceType } from "@/hooks/use-mobile";

const AppLayout = () => {
  const { isMobile } = useDeviceType();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-[#E0E1DD] via-[#F5F5F5] to-[#E0E1DD]">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <AppTopbar />
          <main className={`flex-1 ${isMobile ? 'p-4' : 'p-6'} overflow-auto`}>
            <div className="max-w-full mx-auto">
              <Outlet />
            </div>
          </main>
          {!isMobile && <AppFooter />}
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AppLayout;
