import { ReactNode } from "react";
import { AppHeader } from "@/components/navigation/app-header";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface AppLayoutProps {
  children: ReactNode;
  isConnected?: boolean;
  walletAddress?: string;
  onConnectWallet?: () => void;
  onDisconnectWallet?: () => void;
}

export function AppLayout({
  children,
  isConnected = false,
  walletAddress = "",
  onConnectWallet,
  onDisconnectWallet
}: AppLayoutProps) {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col font-montserrat">
      {!isLandingPage && (
        <AppHeader
          isConnected={isConnected}
          walletAddress={walletAddress}
          onConnectWallet={onConnectWallet}
          onDisconnectWallet={onDisconnectWallet}
        />
      )}
      <main className={cn(
        "flex-1",
        !isLandingPage && "pt-8",
        "relative z-20"
      )}>
        <div className="container mx-auto px-2 py-4">
          <div className="bg-goinft-card/80 rounded-2xl p-2 sm:p-4 shadow-xl backdrop-blur-lg border border-neon-purple/20 relative">
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-neon-purple to-transparent"></div>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent"></div>
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
