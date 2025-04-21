
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { WalletButton } from "@/components/ui/wallet-button";
import { WalletConnectModal } from "@/components/ui/wallet-connect-modal";
import { CircleDollarSign, Repeat2, Trophy } from "lucide-react";
import { CyberpunkHeading } from "@/components/ui/cyberpunk-heading";

const Welcome = () => {
  const navigate = useNavigate();
  const [walletModalOpen, setWalletModalOpen] = useState(false);

  const handleConnectWallet = (provider: string) => {
    console.log(`Connecting with ${provider}`);
    setWalletModalOpen(false);
    navigate("/dashboard");
  };

  const features = [
    {
      icon: <CircleDollarSign className="w-8 h-8 text-neon-purple" />,
      title: "Colecionar",
      description: "Compre pacotes e colecione cards NFT raros dos seus jogadores favoritos"
    },
    {
      icon: <Repeat2 className="w-8 h-8 text-neon-blue" />,
      title: "Trocar",
      description: "Troque cards com outros colecionadores para completar seu álbum"
    },
    {
      icon: <Trophy className="w-8 h-8 text-neon-pink" />,
      title: "Recompensas",
      description: "Ganhe recompensas exclusivas completando álbuns e coleções"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col bg-goinft-darker">
      {/* Background gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-neon-purple/10 filter blur-[100px] animate-pulse"></div>
        <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-neon-blue/10 filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-neon-pink/10 filter blur-[100px] animate-pulse"></div>
      </div>

      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 bg-circuit-bg opacity-5 z-0"></div>
      
      <main className="container mx-auto px-4 py-16 flex-1 flex flex-col justify-center items-center relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16 max-w-2xl">
          <CyberpunkHeading
            size="2xl"
            variant="gradient"
            className="mb-6 animate-float"
          >
            GoINFT
          </CyberpunkHeading>
          
          <h2 className="text-xl md:text-2xl text-white/90 font-light mb-8 leading-relaxed">
            Colecione, troque e jogue com cards digitais de futebol na blockchain
          </h2>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              <div className="cyberpunk-card relative h-full p-6 flex flex-col items-center text-center group-hover:border-neon-purple/50 transition-all duration-300">
                <div className="mb-4 p-3 rounded-xl bg-goinft-dark/50 border border-neon-purple/20 group-hover:border-neon-purple/40 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-orbitron text-white mb-3">{feature.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center">
          <WalletButton
            className="relative py-4 px-8 text-lg font-orbitron bg-gradient-to-r from-neon-purple via-neon-purple to-neon-blue 
                       hover:opacity-90 transition-all duration-300 group overflow-hidden
                       before:absolute before:inset-0 before:bg-gradient-to-r before:from-neon-blue before:to-neon-purple 
                       before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100
                       shadow-[0_0_20px_rgba(155,135,245,0.5)] hover:shadow-[0_0_30px_rgba(155,135,245,0.8)]"
            onClick={() => setWalletModalOpen(true)}
          >
            <span className="relative z-10">Conectar Carteira</span>
          </WalletButton>
          
          <p className="text-white/50 text-sm mt-6 max-w-md mx-auto leading-relaxed">
            Desenvolvido com Chiliz Chain. Seus colecionáveis digitais são armazenados com segurança na blockchain.
          </p>
        </div>
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
