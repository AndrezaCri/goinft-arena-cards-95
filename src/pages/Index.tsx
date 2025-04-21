
import { useNavigate } from "react-router-dom";
import { Trophy, Award } from "lucide-react";

import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { NavbarMain } from "@/components/ui/navbar-main";

const STICKERS = [
  {
    name: "Lionel Messi",
    club: "Inter Miami",
    img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=facearea&w=256&q=80&facepad=3",
  },
  {
    name: "Cristiano Ronaldo",
    club: "Al Nassr",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=256&q=80&facepad=3",
  },
  {
    name: "Neymar Jr.",
    club: "Al Hilal",
    img: "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?auto=format&fit=facearea&w=256&q=80&facepad=3",
  },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <BackgroundGradientAnimation>
      {/* Navbar está presente na LP */}
      <NavbarMain />
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
                <div key={i} className="cyberpunk-card hologram-effect w-32 h-44 rounded-xl overflow-hidden flex flex-col items-center shadow-lg border-2 border-neon-blue/40 bg-goinft-dark relative animate-float">
                  <img
                    src={sticker.img}
                    alt={sticker.name}
                    className="w-20 h-20 rounded-md mt-4 object-cover border-2 border-neon-blue/60 shadow"
                  />
                  <div className="flex flex-col items-center justify-center mt-2">
                    <span className="font-orbitron text-sm text-neon-blue">
                      {sticker.name}
                    </span>
                    <span className="font-montserrat text-xs text-white/80">
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
