import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FarmerAuth from "./pages/auth/FarmerAuth";
import FarmerDashboard from "./pages/farmer/FarmerDashboard";
import FarmerDashboardComplete from "./pages/farmer/FarmerDashboardComplete";
import AIDateDetector from "./pages/ai-date-detector";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/farmer-auth" element={<FarmerAuth />} />
          <Route path="/farmer-dashboard" element={<FarmerDashboardComplete />} />
          <Route path="/farmer-dashboard-simple" element={<FarmerDashboard />} />
          <Route path="/ai-date-detector" element={<AIDateDetector />} />  {/* الصفحة الجديدة */}
          <Route path="*" element={<NotFound />} />  {/* هذا الأخير فقط */}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
