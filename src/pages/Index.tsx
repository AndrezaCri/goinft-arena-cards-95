
import { useNavigate } from "react-router-dom";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { NFTFloatingCard } from "@/components/ui/nft-floating-card";
import { Trophy, Zap } from "lucide-react";

const STICKERS = [
  {
    name: "Barcelona",
    club: "La Liga",
    img: "/lovable-uploads/8fa39490-b282-4507-beb3-bf4813082d17.png",
    rarity: "legendary" as const,
  },
  {
    name: "Atlético Madrid",
    club: "La Liga",
    img: "/lovable-uploads/784d0ec2-86ff-4108-b22f-d1e611e0c4cc.png",
    rarity: "epic" as const,
  },
  {
    name: "Arsenal",
    club: "Premier League",
    img: "/lovable-uploads/1cb631c9-795d-4a11-8750-3e34509f594d.png",
    rarity: "rare" as const,
  },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <BackgroundGradientAnimation>
      <div className="flex min-h-screen flex-col items-center justify-between py-4 sm:py-8 px-3 sm:px-4 gap-4 sm:gap-8">
        <div className="flex-1 flex items-center justify-center w-full max-w-7xl mx-auto">
          <div className="text-center px-4">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-orbitron neon-text mb-4">
              GoINFT
            </h1>
            <p className="text-white text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto font-montserrat">
              Colecione cards NFT de futebol e complete álbuns digitais na Chiliz Chain
            </p>
          </div>
        </div>

        <div className="flex-1 w-full max-w-6xl mx-auto px-3 sm:px-6">
          <div className="rounded-3xl p-4 sm:p-6 shadow-2xl border border-neon-purple/20 relative">
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-neon-purple to-transparent"></div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 mb-4 sm:mb-8">
              {STICKERS.map((sticker, i) => (
                <div key={i} className="flex justify-center">
                  <NFTFloatingCard
                    isHolographic
                    size={i < 3 ? "lg" : "md"}
                    delay={`${i * 0.2}s`}
                    glowColor={
                      sticker.rarity === "legendary"
                        ? "rgba(234,179,8,0.6)"
                        : sticker.rarity === "epic"
                        ? "rgba(168,85,247,0.6)"
                        : "rgba(59,130,246,0.5)"
                    }
                  >
                    <img
                      src={sticker.img}
                      alt={sticker.name}
                      className="w-full h-full object-cover hover:scale-110 hover:rotate-6 transition-transform duration-300 ease-in-out"
                    />
                  </NFTFloatingCard>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-6 sm:mt-8">
              <button 
                className="group relative btn-neon text-base sm:text-lg font-orbitron px-8 sm:px-16 py-4 sm:py-5 overflow-hidden"
                onClick={() => navigate("/welcome")}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-neon-green/0 via-neon-green/30 to-neon-green/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-[shine_3s_ease-in-out_infinite]"></span>
                <span className="relative z-10 flex items-center gap-2">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                  COLLECT
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
};

export default Index;
