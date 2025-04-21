
import { useNavigate } from "react-router-dom";
import { Trophy, Award } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-cyber-dark overflow-hidden circuit-bg relative">
      {/* Background neon city effect with overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark/80 to-cyber-dark/90 z-0"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-neon-purple/20 filter blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 rounded-full bg-neon-green/20 filter blur-3xl"></div>
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-neon-blue/20 filter blur-3xl"></div>
      
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-screen">
        {/* Logo and headline */}
        <div className="text-center mb-16 animate-float">
          <h1 className="text-7xl sm:text-8xl font-bold font-orbitron neon-text mb-4">
            GoINFT
          </h1>
          <p className="text-white text-xl sm:text-2xl max-w-2xl mx-auto font-montserrat">
            Colecione cards NFT de futebol e complete álbuns digitais na Chiliz Chain
          </p>
        </div>
        
        {/* Hero content with phone mockup */}
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Phone mockup */}
          <div className="relative mx-auto neon-glow order-2 lg:order-1 animate-float">
            <div className="w-full max-w-xs mx-auto relative">
              {/* Phone outer frame with circuit pattern */}
              <div className="absolute inset-0 rounded-[40px] p-[2px] bg-gradient-to-r from-neon-purple via-neon-blue to-neon-purple animate-pulse-neon">
                <div className="absolute inset-0 rounded-[38px] overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-b from-goinft-darker to-cyber-dark"></div>
                </div>
              </div>
              
              {/* Phone screen with app interface */}
              <div className="relative rounded-[36px] overflow-hidden aspect-[9/19] border-[2px] border-neon-purple/30">
                <div className="absolute inset-0 bg-cyber-dark p-4 flex flex-col">
                  {/* App header */}
                  <div className="text-center mb-4">
                    <h2 className="font-orbitron text-xl text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue">GoINFT</h2>
                  </div>
                  
                  {/* App content - Album display */}
                  <div className="flex-1 flex flex-col">
                    <p className="text-white/80 text-sm text-center mb-4">
                      Collect football NFTs and complete digital sticker albums!
                    </p>
                    
                    {/* Cards with hologram effect */}
                    <div className="relative h-60 mb-6">
                      {/* Center card */}
                      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-32 h-44 cyberpunk-card hologram-effect animate-float">
                        <div className="w-full h-full rounded-lg overflow-hidden border-2 border-neon-blue/50 flex flex-col items-center justify-center">
                          <div className="w-10 h-10 rounded-full bg-neon-blue/20 mb-2 flex items-center justify-center">
                            <Award className="w-6 h-6 text-neon-blue" />
                          </div>
                          <span className="text-center font-orbitron text-xs text-neon-blue">ATLETICO</span>
                        </div>
                      </div>
                      
                      {/* Left card */}
                      <div className="absolute left-4 top-6 w-28 h-40 cyberpunk-card hologram-effect animate-float" style={{animationDelay: "0.2s"}}>
                        <div className="w-full h-full rounded-lg overflow-hidden border-2 border-neon-green/50 flex flex-col items-center justify-center">
                          <div className="w-8 h-8 rounded-full bg-neon-green/20 mb-2 flex items-center justify-center">
                            <Trophy className="w-5 h-5 text-neon-green" />
                          </div>
                          <span className="text-center font-orbitron text-xs text-neon-green">BARCELON</span>
                        </div>
                      </div>
                      
                      {/* Right card */}
                      <div className="absolute right-4 top-6 w-28 h-40 cyberpunk-card hologram-effect animate-float" style={{animationDelay: "0.4s"}}>
                        <div className="w-full h-full rounded-lg overflow-hidden border-2 border-neon-orange/50 flex flex-col items-center justify-center">
                          <div className="w-8 h-8 rounded-full bg-neon-orange/20 mb-2 flex items-center justify-center">
                            <Award className="w-5 h-5 text-neon-orange" />
                          </div>
                          <span className="text-center font-orbitron text-xs text-neon-orange">ARSENAL</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Album grid */}
                    <div className="grid grid-cols-3 grid-rows-2 gap-2 mb-6">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="aspect-square rounded-md bg-cyber-darkBlue/50 border border-neon-purple/20"></div>
                      ))}
                    </div>
                    
                    {/* Action button */}
                    <button className="btn-neon py-3 w-full font-orbitron">
                      COLLECT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Features */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-8">
              O futuro do <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue">colecionismo</span> esportivo
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-lg bg-neon-purple/20 flex items-center justify-center flex-shrink-0 border border-neon-purple/30">
                  <Award className="text-neon-purple w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-orbitron text-xl font-bold text-white mb-2">Cards NFT de Futebol</h3>
                  <p className="text-white/70">Colecione cards únicos e raros dos seus clubes e jogadores favoritos, com propriedade comprovada pela blockchain.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-lg bg-neon-green/20 flex items-center justify-center flex-shrink-0 border border-neon-green/30">
                  <Trophy className="text-neon-green w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-orbitron text-xl font-bold text-white mb-2">Álbuns Digitais</h3>
                  <p className="text-white/70">Complete álbuns temáticos e ganhe recompensas exclusivas, acessos VIP e experiências no mundo real.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-lg bg-neon-blue/20 flex items-center justify-center flex-shrink-0 border border-neon-blue/30">
                  <Award className="text-neon-blue w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-orbitron text-xl font-bold text-white mb-2">Tecnologia Blockchain</h3>
                  <p className="text-white/70">Segurança, transparência e raridade garantidas pela Chiliz Chain, a blockchain líder para aplicações esportivas.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <button 
                onClick={() => navigate("/welcome")} 
                className="btn-neon text-lg px-10 py-4"
              >
                ENTRAR NA ARENA
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating cards section */}
        <div className="w-full max-w-6xl relative h-64 hidden md:block">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Multiple floating cards with different animations */}
            {[
              { delay: "0s", left: "5%", top: "20%", scale: 0.8 },
              { delay: "0.2s", left: "20%", top: "40%", scale: 0.9 },
              { delay: "0.4s", left: "35%", top: "10%", scale: 0.7 },
              { delay: "0.6s", left: "50%", top: "30%", scale: 1 },
              { delay: "0.8s", left: "65%", top: "15%", scale: 0.75 },
              { delay: "1s", left: "80%", top: "45%", scale: 0.85 },
              { delay: "1.2s", left: "95%", top: "25%", scale: 0.7 },
            ].map((card, i) => (
              <div 
                key={i}
                className="absolute cyberpunk-card hologram-effect" 
                style={{
                  left: card.left, 
                  top: card.top,
                  transform: `translateX(-50%) scale(${card.scale})`,
                  animationDelay: card.delay,
                  width: "120px",
                  height: "160px"
                }}
              >
                <div className="w-full h-full rounded-lg overflow-hidden border-2 border-neon-purple/50"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
