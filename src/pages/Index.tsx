import { useNavigate } from "react-router-dom";
import { Trophy, Award } from "lucide-react";
import { CyberpunkBg } from "@/components/ui/cyberpunk-bg";
import { RainEffect } from "@/components/ui/rain-effect";
import { CircuitOverlay } from "@/components/ui/circuit-overlay";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-cyber-dark overflow-hidden circuit-bg relative">
      {/* CITY CYBERPUNK BACKGROUND */}
      <CyberpunkBg />

      {/* RAIN EFFECT */}
      <RainEffect dropColor="#9b87f5" rainCount={45} className="mix-blend-lighten opacity-90" />

      {/* Overlay de circuitos brilhando nas bordas da interface */}
      <div className="hidden md:block absolute left-1/2 top-16 z-30 pointer-events-none" style={{transform: "translateX(-50%)", width: 340, height: 670}}>
        <CircuitOverlay />
      </div>

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
          <h1 className="text-7xl sm:text-8xl font-bold font-orbitron neon-text mb-4 drop-shadow-[0_2px_40px_rgba(155,135,245,0.8)]">
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
            <div className="w-full max-w-xs mx-auto relative z-20">
              {/* Neon border highlight glow */}
              <div className="absolute inset-0 rounded-[40px] p-[3px] bg-gradient-to-r from-neon-purple via-neon-blue to-neon-green animate-glow shadow-[0_0_30px_10px_rgba(155,135,245,0.45)]" style={{filter:'blur(1px)'}}></div>
              <div className="absolute inset-0 pointer-events-none">
                {/* Circuit Overlay denso nas bordas do App */}
                <CircuitOverlay />
              </div>
              <div className="relative rounded-[36px] overflow-hidden aspect-[9/19] border-[3px] border-neon-purple/70 shadow-[0_0_25px_8px_rgba(155,135,245,0.4)] hover:shadow-lg transition hover:scale-[1.015] bg-goinft-card">
                <div className="absolute inset-0 bg-cyber-dark p-4 flex flex-col">
                  {/* App header */}
                  <div className="text-center mb-4">
                    <h2 className="font-orbitron text-xl text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue">
                      GoINFT
                    </h2>
                  </div>
                  
                  {/* App content - Album display */}
                  <div className="flex-1 flex flex-col">
                    <p className="text-white/80 text-sm text-center mb-4">
                      Collect football NFTs and complete digital sticker albums!
                    </p>
                    
                    {/* Cards with hologram effect */}
                    <div className="relative h-60 mb-6">
                      {/* Center card */}
                      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-32 h-44 cyberpunk-card hologram-effect animate-float z-20 ring-2 ring-neon-blue ring-offset-2 ring-offset-cyber-dark/60"
                        style={{ boxShadow: "0 0 20px 8px #00d9ff88" }}>
                        <div className="w-full h-full rounded-lg overflow-hidden border-2 border-neon-blue/50 flex flex-col items-center justify-center">
                          <div className="w-10 h-10 rounded-full bg-neon-blue/20 mb-2 flex items-center justify-center">
                            <Award className="w-6 h-6 text-neon-blue" />
                          </div>
                          <span className="text-center font-orbitron text-xs text-neon-blue">ATLETICO</span>
                        </div>
                        {/* Holo overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-neon-blue/30 to-transparent opacity-40 pointer-events-none animate-pulse-glow rounded-lg" />
                      </div>
                      {/* Left card */}
                      <div className="absolute left-4 top-6 w-28 h-40 cyberpunk-card hologram-effect animate-float z-10" style={{animationDelay: "0.2s", boxShadow:"0 0 16px #00ff9466"}}>
                        <div className="w-full h-full rounded-lg overflow-hidden border-2 border-neon-green/50 flex flex-col items-center justify-center">
                          <div className="w-8 h-8 rounded-full bg-neon-green/20 mb-2 flex items-center justify-center">
                            <Trophy className="w-5 h-5 text-neon-green" />
                          </div>
                          <span className="text-center font-orbitron text-xs text-neon-green">BARCELON</span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-neon-green/25 to-transparent opacity-30 pointer-events-none animate-pulse-glow rounded-lg" />
                      </div>
                      {/* Right card */}
                      <div className="absolute right-4 top-6 w-28 h-40 cyberpunk-card hologram-effect animate-float z-10" style={{animationDelay: "0.4s", boxShadow:"0 0 16px #ffba3d77"}}>
                        <div className="w-full h-full rounded-lg overflow-hidden border-2 border-neon-orange/50 flex flex-col items-center justify-center">
                          <div className="w-8 h-8 rounded-full bg-neon-orange/20 mb-2 flex items-center justify-center">
                            <Award className="w-5 h-5 text-neon-orange" />
                          </div>
                          <span className="text-center font-orbitron text-xs text-neon-orange">ARSENAL</span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-neon-orange/20 to-transparent opacity-30 pointer-events-none animate-pulse-glow rounded-lg" />
                      </div>
                      {/* Partículas de luz holográficas */}
                      <div className="absolute inset-0 pointer-events-none z-30">
                        {[...Array(8)].map((_,i) =>
                          <span key={i}
                            className="absolute rounded-full blur-[2.5px]" 
                            style={{
                              left: `${12+Math.random()*74}%`,
                              top: `${5+i*9}%`,
                              width: `${12+Math.random()*12}px`,
                              height: `${5+Math.random()*10}px`,
                              background: "radial-gradient(ellipse at center, #fffdeee0 25%, #00d9ffa0 55%, transparent 80%)",
                              opacity: 0.26+Math.random()*0.22
                            }}
                          />
                        )}
                      </div>
                    </div>
                    
                    {/* Album grid */}
                    <div className="grid grid-cols-3 grid-rows-2 gap-2 mb-6">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="aspect-square rounded-md bg-cyber-darkBlue/50 border border-neon-purple/20">
                          {/* Área de “colar” a figurinha */}
                          {i === 1 || i === 3 ? (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="animate-glow text-neon-green text-3xl">+</span>
                            </div>
                          ) : null}
                        </div>
                      ))}
                    </div>
                    
                    {/* Action button */}
                    <button className="btn-neon py-3 w-full font-orbitron shadow-[0_0_14px_4px_rgba(155,135,245,0.56)]">
                      COLLECT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Features (mantém, só realce visual para Futurismo) */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-8 drop-shadow-[0_2px_24px_rgba(155,135,245,0.5)]">
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
                className="btn-neon text-lg px-10 py-4 drop-shadow-[0_0_18px_rgba(155,135,245,0.46)]"
              >
                ENTRAR NA ARENA
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating cards section */}
        <div className="w-full max-w-6xl relative h-64 hidden md:block z-10">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Floating cards com brilhos e néons */}
            {[
              { delay: "0s", left: "5%", top: "20%", scale: 0.8, color: "#9b87f5" },
              { delay: "0.2s", left: "20%", top: "40%", scale: 0.9, color: "#43ebc9" },
              { delay: "0.4s", left: "35%", top: "10%", scale: 0.7, color: "#50fa7b" },
              { delay: "0.6s", left: "50%", top: "30%", scale: 1, color: "#00d9ff" },
              { delay: "0.8s", left: "65%", top: "15%", scale: 0.75, color: "#7ffeef" },
              { delay: "1s", left: "80%", top: "45%", scale: 0.85, color: "#9b87f5" },
              { delay: "1.2s", left: "95%", top: "25%", scale: 0.7, color: "#50fa7b" },
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
                  height: "160px",
                  boxShadow: `0 0 30px 8px ${card.color}99`
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
