import { useNavigate } from "react-router-dom";
import { Trophy, Award } from "lucide-react";

import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const STICKERS = [
  {
    name: "Real Madrid",
    club: "La Liga",
    img: "/lovable-uploads/8fa39490-b282-4507-beb3-bf4813082d17.png",
  },
  {
    name: "Manchester United",
    club: "Premier League",
    img: "/lovable-uploads/784d0ec2-86ff-4108-b22f-d1e611e0c4cc.png",
  },
  {
    name: "Barcelona FC",
    club: "Liga F",
    img: "/lovable-uploads/1cb631c9-795d-4a11-8750-3e34509f594d.png",
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

        {/* Futuristic Phone Card Album */}
        <div className="relative max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 bg-goinft-card/80 rounded-3xl p-6 shadow-2xl backdrop-blur-lg">
          {/* Sticker Cards */}
          <div className="flex flex-col items-center gap-8 py-4 px-2">
            <div className="flex gap-6">
              {STICKERS.map((sticker, i) => (
                <div key={i} className="group">
                  <div className="cyberpunk-card hologram-effect w-32 h-44 rounded-xl overflow-hidden flex items-center justify-center shadow-lg border-2 border-neon-blue/40 bg-goinft-dark relative animate-float">
                    <img
                      src={sticker.img}
                      alt={sticker.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-2 text-center">
                    <span className="font-orbitron text-sm text-neon-blue">
                      {sticker.name}
                    </span>
                    <span className="block font-montserrat text-xs text-white/80">
                      {sticker.club}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn-neon text-lg font-orbitron px-12 py-4 mt-6" onClick={() => navigate("/welcome")}>
              Entrar na Arena
            </button>
          </div>
          {/* Description */}
          <div className="text-left max-w-md">
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-4">
              O futuro do <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue">colecionismo</span> esportivo
            </h2>
            <ul className="space-y-4">
              <li className="text-lg text-white/80">
                • Cards NFT autênticos dos maiores jogadores do mundo
              </li>
              <li className="text-lg text-white/80">
                • Complete álbuns digitais e conquiste recompensas exclusivas
              </li>
              <li className="text-lg text-white/80">
                • Blockchain segura na Chiliz Chain
              </li>
            </ul>
          </div>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
};

export default Index;
