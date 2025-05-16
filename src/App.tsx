
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ParcelsPage from "./pages/ParcelsPage";
import { CRMProvider } from "./contexts/CRMContext";
import { AppSettingsProvider } from "./contexts/AppSettingsContext";
import { useEffect } from "react";
import { trackPageView } from "./utils/analytics";

// Create query client with enhanced configuration
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

interface AppProps {
  token?: string;
}

// Application main component with properly nested providers
const App = ({ token }: AppProps) => {
  useEffect(() => {
    // Track page view for analytics
    trackPageView('parcelles');
    
    // Optional: You can use the token here if needed
    if (token) {
      console.log('App initialized with token:', token);
    }
  }, [token]);
  
  return (
    <QueryClientProvider client={queryClient}>
      <AppSettingsProvider>
        <CRMProvider>
          <TooltipProvider>
            <ParcelsPage />
          </TooltipProvider>
        </CRMProvider>
      </AppSettingsProvider>
    </QueryClientProvider>
  );
};

export default App;
