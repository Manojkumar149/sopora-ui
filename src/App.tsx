
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";

// Pages
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import SOPListPage from "./pages/SOPListPage";
import SOPEditorPage from "./pages/SOPEditorPage";
import SOPDetailsPage from "./pages/SOPDetailsPage";
import AssignmentsPage from "./pages/AssignmentsPage";
import QuizzesPage from "./pages/QuizzesPage";
import QuizDetailsPage from "./pages/QuizDetailsPage";
import MediaPage from "./pages/MediaPage";
import ProfilePage from "./pages/ProfilePage";
import NotificationsPage from "./pages/NotificationsPage";
import UsersPage from "./pages/UsersPage";
import SettingsPage from "./pages/SettingsPage";
import NotFoundPage from "./pages/NotFoundPage";

// Layout
import AppLayout from "./components/layout/AppLayout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            
            {/* Protected routes with layout */}
            <Route path="/" element={<AppLayout />}>
              <Route path="dashboard" element={<DashboardPage />} />
              <Route path="sops" element={<SOPListPage />} />
              <Route path="sops/:sopId/edit" element={<SOPEditorPage />} />
              <Route path="sops/:sopId" element={<SOPDetailsPage />} />
              <Route path="assignments" element={<AssignmentsPage />} />
              <Route path="quizzes" element={<QuizzesPage />} />
              <Route path="quizzes/:quizId" element={<QuizDetailsPage />} />
              <Route path="media" element={<MediaPage />} />
              <Route path="profile" element={<ProfilePage />} />
              <Route path="notifications" element={<NotificationsPage />} />
              <Route path="users" element={<UsersPage />} />
              <Route path="settings" element={<SettingsPage />} />
            </Route>
            
            {/* 404 route */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
