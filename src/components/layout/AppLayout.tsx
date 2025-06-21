
import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "./AppSidebar";
import AppTopbar from "./AppTopbar";
import AppFooter from "./AppFooter";

const AppLayout = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-[#E0E1DD]">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <AppTopbar />
          <main className="flex-1 p-6">
            <Outlet />
          </main>
          <AppFooter />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AppLayout;
