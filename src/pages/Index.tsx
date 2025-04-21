
import { useNavigate } from "react-router-dom";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { Trophy, Zap } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <BackgroundGradientAnimation>
      <div className="flex min-h-screen flex-col items-center justify-between py-4 sm:py-8 px-3 sm:px-4 gap-4 sm:gap-8">
        <div className="flex-1 flex items-center justify-center w-full max-w-7xl mx-auto">
          <div className="text-center px-4">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold font-orbitron neon-text mb-4">
              GoINFT
            </h1>
            <p className="text-white text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto font-montserrat">
              Colecione cards NFT de futebol e complete álbuns digitais na Chiliz Chain
            </p>
          </div>
        </div>

        <div className="flex-1 w-full max-w-6xl mx-auto px-3 sm:px-6">
          <div className="bg-goinft-card/80 rounded-3xl p-4 sm:p-6 shadow-2xl backdrop-blur-lg border border-neon-purple/20 relative">
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-neon-purple to-transparent"></div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent"></div>
            
            <div className="w-full max-w-4xl mx-auto px-2 sm:px-4 text-center mb-6">
              <p className="text-white text-lg sm:text-xl max-w-2xl mx-auto font-montserrat">
                Colecione cards NFT de futebol e complete álbuns digitais na Chiliz Chain
              </p>
            </div>
            
            <div className="flex justify-center mt-6 sm:mt-8">
              <button 
                className="group relative btn-neon text-base sm:text-lg font-orbitron px-8 sm:px-16 py-4 sm:py-5 overflow-hidden"
                onClick={() => navigate("/welcome")}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-neon-purple/0 via-neon-purple/30 to-neon-purple/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-[shine_3s_ease-in-out_infinite]"></span>
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
