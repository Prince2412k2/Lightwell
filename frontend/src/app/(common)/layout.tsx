import { AppHeader } from "@/components/app-header";
import AppSidebar from "@/components/app-sidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="bg-accent/20">
        <AppHeader />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Layout;
