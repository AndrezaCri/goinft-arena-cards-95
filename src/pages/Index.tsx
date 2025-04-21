import { useNavigate } from "react-router-dom";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { NFTFloatingCard } from "@/components/ui/nft-floating-card";

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

        <div className="relative max-w-6xl mx-auto flex flex-col items-center justify-center gap-10 bg-goinft-card/80 rounded-3xl p-6 shadow-2xl backdrop-blur-lg">
          <div className="flex flex-wrap justify-center gap-6">
            {STICKERS.map((sticker, i) => (
              <NFTFloatingCard
                key={i}
                isHolographic
                size={i === 0 ? "lg" : "md"}
                delay={`${i * 0.2}s`}
                className="w-full"
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
          
          <button 
            className="btn-neon text-lg font-orbitron px-12 py-4" 
            onClick={() => navigate("/welcome")}
          >
            Começar Coleção
          </button>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
};

export default Index;
