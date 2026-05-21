import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import HomePage from "@/pages/HomePage";
import { LoadingScreen } from "@/sections/LoadingScreen";
import { CursorGlow } from "@/components/CursorGlow";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <TooltipProvider>
        {loading ? (
          <LoadingScreen onComplete={() => setLoading(false)} />
        ) : (
          <>
            <CursorGlow />
            <HomePage />
            <Toaster 
              position="top-center" 
              toastOptions={{ 
                style: { background: '#1c1c1c', color: '#f5f5f5', border: '1px solid #333' } 
              }} 
            />
          </>
        )}
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
