
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/index/Index";
import NotFound from "./pages/NotFound";

// About pages
import Chairman from "./pages/Navigation/About/chairman";
import Vision from "./pages/Navigation/About/vision";
import Advantage from "./pages/Navigation/About/advantage";
import Affiliation from "./pages/Navigation/About/Affiliation";

// Main navigation pages
import Infrastructure from "./pages/Navigation/infrastructure";
import Training from "./pages/Navigation/Training";
import Research from "./pages/Navigation/Research";
import PhDCenter from "./pages/Navigation/Research/PhDCenter";
import News from "./pages/Navigation/News";

// Student section pages
import Counseling from "./pages/Navigation/Student/Counseling";
import CSR from "./pages/Navigation/Student/CSR";
import Facility from "./pages/Navigation/Student/Facility";
import Transport from "./pages/Navigation/Student/Transport";
import Hotel from "./pages/Navigation/Student/Hotel";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* About routes */}
          <Route path="/Navigation/About/chairman" element={<Chairman />} />
          <Route path="/Navigation/About/vision" element={<Vision />} />
          <Route path="/Navigation/About/advantage" element={<Advantage />} />
          <Route path="/Navigation/About/Affiliation" element={<Affiliation />} />
          
          {/* Main navigation routes */}
          <Route path="/Navigation/infrastructure" element={<Infrastructure />} />
          <Route path="/Navigation/Training" element={<Training />} />
          <Route path="/Navigation/Research" element={<Research />} />
          <Route path="/Navigation/Research/PhDCenter" element={<PhDCenter />} />
          <Route path="/Navigation/News" element={<News />} />
          
          {/* Student section routes */}
          <Route path="/Navigation/Student/Counseling" element={<Counseling />} />
          <Route path="/Navigation/Student/CSR" element={<CSR />} />
          <Route path="/Navigation/Student/Facility" element={<Facility />} />
          <Route path="/Navigation/Student/Transport" element={<Transport />} />
          <Route path="/Navigation/Student/Hotel" element={<Hotel />} />
          
          {/* 404 route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
