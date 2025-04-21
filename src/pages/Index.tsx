
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
    <div className="relative min-h-screen overflow-hidden bg-goinft-darker">
      {/* Cyberpunk city background with rain effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-blue-900/20 to-goinft-darker">
        {/* Animated rain drops */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-10 bg-gradient-to-b from-neon-purple/20 to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-10px`,
              animation: `raindrop ${2 + Math.random() * 2}s linear infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-between py-4 sm:py-8 px-3 sm:px-4 gap-4 sm:gap-8">
        {/* Phone frame and content */}
        <div className="relative max-w-lg w-full mx-auto mt-8">
          {/* Phone frame */}
          <div className="relative aspect-[9/19] bg-goinft-dark rounded-[3rem] p-3 shadow-2xl border-2 border-neon-purple/30">
            {/* Phone screen */}
            <div className="absolute inset-3 rounded-[2.5rem] overflow-hidden bg-goinft-darker">
              {/* App content */}
              <div className="relative h-full flex flex-col items-center justify-center p-6 space-y-6">
                {/* App title */}
                <h1 className="text-4xl sm:text-5xl font-bold font-orbitron neon-text mb-4">
                  GoINFT
                </h1>

                {/* Cards grid */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {STICKERS.map((sticker, i) => (
                    <NFTFloatingCard
                      key={i}
                      isHolographic
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
                        className="w-full h-full object-cover"
                      />
                    </NFTFloatingCard>
                  ))}
                </div>

                {/* Empty slots */}
                <div className="grid grid-cols-3 gap-2 w-full">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className="aspect-[3/4] rounded-lg border-2 border-dashed border-neon-purple/20 bg-goinft-card/20"
                    />
                  ))}
                </div>

                {/* Action button */}
                <button
                  onClick={() => navigate("/welcome")}
                  className="group relative btn-neon text-lg font-orbitron px-12 py-3 mt-6"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-neon-green/0 via-neon-green/30 to-neon-green/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-[shine_3s_ease-in-out_infinite]" />
                  <span className="relative z-10 flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    COLLECT
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Phone reflections */}
          <div className="absolute -bottom-12 left-0 right-0 h-12 bg-gradient-to-b from-neon-purple/30 to-transparent blur-lg" />
        </div>

        {/* Reflective ground */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent backdrop-blur-sm" />
      </div>
    </div>
  );
};

export default Index;
