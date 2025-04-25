
import React, { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "@/components/layout/app-layout";
import Dashboard from "@/pages/Dashboard";
import Welcome from "@/pages/Welcome";
import Albums from "@/pages/Albums";
import Marketplace from "@/pages/Marketplace";
import Packs from "@/pages/Packs";
import Profile from "@/pages/Profile";
import Rewards from "@/pages/Rewards";
import Experiences from "@/pages/Experiences";
import NotFound from "@/pages/NotFound";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { RewardsProvider } from "@/contexts/RewardsContext";

const queryClient = new QueryClient();

const App = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  const handleConnectWallet = () => {
    setIsConnected(true);
    setWalletAddress("0x1234...5678");
  };

  const handleDisconnectWallet = () => {
    setIsConnected(false);
    setWalletAddress("");
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <RewardsProvider>
          <BrowserRouter>
            <div className="min-h-screen w-full bg-goinft-dark font-montserrat">
              <BackgroundGradientAnimation>
                <AppLayout 
                  isConnected={isConnected}
                  walletAddress={walletAddress}
                  onConnectWallet={handleConnectWallet}
                  onDisconnectWallet={handleDisconnectWallet}
                >
                  <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/experiences" element={<Experiences />} />
                    <Route path="/albums" element={<Albums />} />
                    <Route path="/marketplace" element={<Marketplace />} />
                    <Route path="/packs" element={<Packs />} />
                    <Route path="/rewards" element={<Rewards />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </AppLayout>
              </BackgroundGradientAnimation>
            </div>
          </BrowserRouter>
        </RewardsProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
