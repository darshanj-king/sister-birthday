import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { useState } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import UniverseStars from "./components/UniverseStars";
import SongReminders from "./components/SongReminders";
import StoryBook from "./components/StoryBook";
import SecretVault from "./components/SecretVault";
import GiftReveal from "./components/GiftReveal";
import BTSPlaylist from "./components/BTSPlaylist";
import LetterToSister from "./components/LetterToSister";
import WishJar from "./components/WishJar";

const queryClient = new QueryClient();

const App = () => {
  const [currentView, setCurrentView] = useState('gift');

  const handleNavigation = (view: string) => {
    setCurrentView(view);
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'playlist':
        return <BTSPlaylist onBack={() => setCurrentView('gift')} />;
      case 'letter':
        return <LetterToSister onBack={() => setCurrentView('gift')} />;
      case 'wishjar':
        return <WishJar onBack={() => setCurrentView('gift')} />;
      default:
        return (
          <GiftReveal 
            onBack={() => window.history.back()}
            onPlaylist={() => setCurrentView('playlist')}
            onLetter={() => setCurrentView('letter')}
            onWishJar={() => setCurrentView('wishjar')}
          />
        );
    }
  };

  return (
    <ThemeProvider defaultTheme="light">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/gift" element={renderCurrentView()} />
              <Route path="/universe" element={<UniverseStars />} />
              <Route path="/songs" element={<SongReminders />} />
              <Route path="/story" element={<StoryBook />} />
              <Route path="/vault" element={<SecretVault />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;