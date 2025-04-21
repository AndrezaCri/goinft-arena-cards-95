
import { useNavigate } from "react-router-dom";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { NFTFloatingCard } from "@/components/ui/nft-floating-card";
import { AlbumStickerGrid } from "@/components/ui/album-sticker-grid";
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
      <div className="min-h-screen w-full overflow-hidden relative flex flex-col items-center justify-center py-16">
        <div className="text-center mb-10 animate-float">
          <h1 className="text-7xl sm:text-8xl font-bold font-orbitron neon-text mb-4">
            GoINFT
          </h1>
          <p className="text-white text-xl sm:text-2xl max-w-2xl mx-auto font-montserrat">
            Colecione cards NFT de futebol e complete álbuns digitais na Chiliz Chain
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto flex flex-col items-center justify-center gap-10 bg-goinft-card/80 rounded-3xl p-6 shadow-2xl backdrop-blur-lg border border-neon-purple/20">
          {/* Elemento decorativo de linhas neon */}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-neon-purple to-transparent"></div>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent"></div>
          
          <div className="flex flex-nowrap justify-center items-center gap-6 overflow-x-auto p-4 w-full">
            {STICKERS.map((sticker, i) => (
              <NFTFloatingCard
                key={i}
                isHolographic
                size="lg"
                delay={`${i * 0.2}s`}
                className="flex-shrink-0"
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
                  className="w-full h-full object-cover"
                />
              </NFTFloatingCard>
            ))}
          </div>
          
          <div className="w-full max-w-4xl">
            <div className="flex items-center justify-center mb-4 gap-2">
              <Trophy className="text-neon-purple h-6 w-6" />
              <h2 className="text-2xl font-orbitron text-white">SEU ÁLBUM DIGITAL</h2>
              <Trophy className="text-neon-purple/50 h-6 w-6" />
            </div>
            <AlbumStickerGrid 
              rows={3} 
              cols={4} 
              emptySlots={[]} 
              filledSlots={[]} 
            />
          </div>
          
          <button 
            className="group relative btn-neon text-lg font-orbitron px-16 py-5 mt-4 overflow-hidden"
            onClick={() => navigate("/welcome")}
          >
            {/* Efeito de brilho no hover */}
            <span className="absolute inset-0 bg-gradient-to-r from-neon-green/0 via-neon-green/30 to-neon-green/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-[shine_3s_ease-in-out_infinite]"></span>
            
            {/* Texto com ícone */}
            <span className="relative z-10 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              COLLECT
            </span>
          </button>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
};

export default Index;
