
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { WalletButton } from "@/components/ui/wallet-button";
import { WalletConnectModal } from "@/components/ui/wallet-connect-modal";
import { WelcomeBackground } from "@/components/welcome/WelcomeBackground";
import { WelcomeHero } from "@/components/welcome/WelcomeHero";
import { FeaturesGrid } from "@/components/welcome/FeaturesGrid";
import { WelcomeFooter } from "@/components/welcome/WelcomeFooter";

const Welcome = () => {
  const navigate = useNavigate();
  const [walletModalOpen, setWalletModalOpen] = useState(false);

  const handleConnectWallet = (provider: string) => {
    console.log(`Connecting with ${provider}`);
    setWalletModalOpen(false);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col bg-goinft-darker">
      <WelcomeBackground />
      
      <main className="container mx-auto px-4 py-8 flex-1 flex flex-col justify-center items-center relative z-10">
        <WelcomeHero />
        
        <FeaturesGrid />
        
        <div className="flex flex-col md:flex-row gap-2 w-full max-w-md">
          <WalletButton
            className="flex-1 py-4 text-base font-orbitron bg-gradient-to-r from-neon-purple via-neon-purple to-neon-blue hover:opacity-90 transition-all duration-300 shadow-[0_0_15px_rgba(155,135,245,0.5)] hover:shadow-[0_0_25px_rgba(155,135,245,0.8)]"
            onClick={() => setWalletModalOpen(true)}
          >
            Conectar Carteira
          </WalletButton>
        </div>
        
        <WelcomeFooter />
      </main>
      
      <WalletConnectModal
        open={walletModalOpen}
        onClose={() => setWalletModalOpen(false)}
        onConnect={handleConnectWallet}
      />
    </div>
  );
};

export default Welcome;
