import { useState, useEffect } from "react";
import { NFTFloatingCard } from "@/components/ui/nft-floating-card";
import { CyberpunkButton } from "@/components/ui/cyberpunk-button";
import { useRewards } from "@/contexts/RewardsContext";

interface RewardsHologramProps {
  currentTab: "daily" | "weekly" | "albums" | "rank";
}

export function RewardsHologram({ currentTab }: RewardsHologramProps) {
  const [visibleRewards, setVisibleRewards] = useState<number[]>([]);
  const {
    loginStreak,
    completedMissions,
    completedAlbums,
    handleDailyLogin,
    handleCompleteMission,
    handleCompleteAlbum
  } = useRewards();
  
  useEffect(() => {
    setVisibleRewards([]);
    const showRewards = () => {
      const numRewards = {
        daily: 7,
        weekly: 5,
        albums: 4,
        rank: 3
      }[currentTab];
      
      const interval = setInterval(() => {
        setVisibleRewards(prev => {
          if (prev.length >= numRewards) {
            clearInterval(interval);
            return prev;
          }
          return [...prev, prev.length];
        });
      }, 200);
      
      return () => clearInterval(interval);
    };
    
    const timeout = setTimeout(showRewards, 100);
    return () => clearTimeout(timeout);
  }, [currentTab]);
  
  const handleAction = (type: string, id: string) => {
    switch (type) {
      case "daily":
        handleDailyLogin();
        break;
      case "mission":
        handleCompleteMission(id);
        break;
      case "album":
        handleCompleteAlbum(id);
        break;
    }
  };

  const renderRewards = () => {
    switch (currentTab) {
      case "daily":
        return (
          <div className="grid grid-cols-7 gap-2 mt-4 items-end">
            {Array.from({ length: 7 }).map((_, index) => (
              index >= 5 ? (
                <NFTFloatingCard 
                  className="h-28 md:h-36 w-full" 
                  size="sm" 
                  isHolographic
                  glowColor={index === 6 ? "rgba(255, 113, 225, 0.8)" : "rgba(155, 135, 245, 0.6)"}
                >
                  <div className="absolute inset-0 flex items-center justify-center bg-goinft-card rounded-lg">
                    <img 
                      src={`/lovable-uploads/${index === 5 ? "1cb631c9-795d-4a11-8750-3e34509f594d.png" : "506f8852-1303-4875-ae3d-6068e947cb1d.png"}`} 
                      alt={`NFT Reward ${index + 1}`}
                      className="h-16 w-16 md:h-20 md:w-20 object-contain"
                    />
                  </div>
                </NFTFloatingCard>
              ) : (
                <div key={index} className={`flex flex-col items-center transition-opacity duration-500 ${visibleRewards.includes(index) ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="text-center mb-2">
                    <span className="font-orbitron text-sm text-white">Dia {index + 1}</span>
                  </div>
                  <div className="relative h-28 md:h-36 w-full">
                    {index < 5 ? (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-goinft-card rounded-lg h-20 w-20 md:h-24 md:w-24 flex items-center justify-center border border-neon-blue/30">
                          <img 
                            src={`/lovable-uploads/${["4263efde-699d-4758-a229-b5e15b0b60dd.png", "8959e228-6687-4e32-bf1e-849b2c9ea30c.png", "8b42a4aa-6e29-46c0-a04e-60ebfa0b064c.png", "e8cc150f-670e-4639-8235-bfd8df7e7551.png", "c7c901dd-d2db-46de-9129-42fb4c41c341.png"][index % 5]}`} 
                            alt={`Reward ${index + 1}`}
                            className="h-16 w-16 md:h-20 md:w-20 object-contain"
                          />
                          <div className="absolute -bottom-2 -right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded-full font-orbitron">
                            {[5, 10, 15, 20, 25][index % 5]} CHZ
                          </div>
                        </div>
                      </div>
                    ) : (
                      <NFTFloatingCard 
                        className="h-full w-full" 
                        size="sm" 
                        isHolographic
                        glowColor={index === 6 ? "rgba(255, 113, 225, 0.8)" : "rgba(155, 135, 245, 0.6)"}
                      >
                        <div className="absolute inset-0 flex items-center justify-center bg-goinft-card rounded-lg">
                          <img 
                            src={`/lovable-uploads/${index === 5 ? "1cb631c9-795d-4a11-8750-3e34509f594d.png" : "506f8852-1303-4875-ae3d-6068e947cb1d.png"}`} 
                            alt={`NFT Reward ${index + 1}`}
                            className="h-20 w-20 md:h-24 md:w-24 object-contain"
                          />
                        </div>
                      </NFTFloatingCard>
                    )}
                  </div>
                  <div className="mt-2 text-center">
                    <span className="text-xs text-white/70">
                      {index < 5 ? `${[5, 10, 15, 20, 25][index % 5]} CHZ` : index === 5 ? "NFT Raro" : "NFT Lendário"}
                    </span>
                  </div>
                  <CyberpunkButton
                    size="sm"
                    variant={index <= loginStreak ? "accent" : "outline"}
                    className="text-xs"
                    onClick={() => index === loginStreak && handleAction("daily", `day${index + 1}`)}
                    disabled={index !== loginStreak}
                  >
                    {index < loginStreak ? "Coletado" : index === loginStreak ? "Coletar" : "Bloqueado"}
                  </CyberpunkButton>
                </div>
              )
            ))}
          </div>
        );
      
      case "weekly":
        return (
          <div className="grid grid-cols-3 md:grid-cols-5 gap-6 mt-6">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className={`flex flex-col items-center transition-opacity duration-500 ${visibleRewards.includes(index) ? 'opacity-100' : 'opacity-0'}`}>
                <div className="text-center mb-2">
                  <span className="font-orbitron text-sm text-white">Missão {index + 1}</span>
                </div>
                <div className="bg-goinft-light/40 p-4 rounded-lg border border-neon-blue/20 relative">
                  <div className="absolute -top-3 -right-3 bg-neon-purple text-white text-xs px-2 py-1 rounded-full font-orbitron animate-pulse">
                    {[30, 50, 75, 100, 150][index]} XP
                  </div>
                  <div className="flex flex-col items-center">
                    <img 
                      src={`/lovable-uploads/${["880aa3ab-ecec-4848-808a-018afa7bb652.png", "920baa56-b00d-43ea-8372-f544a6ca420e.png", "e7bd521b-75c6-4c78-817b-74fff9947c90.png", "687d40f8-9816-4f77-989c-1129fd953a1e.png", "c0d8c9e1-73d1-408e-8931-a00e77136d8d.png"][index]}`} 
                      alt={`Missão ${index + 1}`}
                      className="h-16 w-16 object-contain mb-2"
                    />
                    <div className="text-center mt-2">
                      <h4 className="text-white text-sm font-orbitron">
                        {["Troque 3 cards", "Complete 1 álbum", "Compre 2 pacotes", "Visite 5 dias", "Abra 10 pacotes"][index]}
                      </h4>
                      <div className="mt-3">
                        <CyberpunkButton 
                          size="sm" 
                          variant="accent" 
                          className="text-xs"
                          onClick={() => handleAction("mission", `mission${index + 1}`)}
                          disabled={completedMissions.includes(`mission${index + 1}`)}
                        >
                          {completedMissions.includes(`mission${index + 1}`) ? "Completo" : "Iniciar"}
                        </CyberpunkButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
        
      case "albums":
        return (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className={`flex flex-col items-center transition-opacity duration-500 ${visibleRewards.includes(index) ? 'opacity-100' : 'opacity-0'}`}>
                <div className="text-center mb-2">
                  <span className="font-orbitron text-sm text-white">
                    {["Álbum Copa SP", "Álbum Brasileirão", "Álbum Libertadores", "Álbum Legends"][index]}
                  </span>
                </div>
                <NFTFloatingCard 
                  className="h-40 w-full" 
                  isHolographic
                  glowColor={index === 3 ? "rgba(255, 113, 225, 0.8)" : "rgba(155, 135, 245, 0.6)"}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img 
                      src={`/lovable-uploads/${["f71a92ea-61b6-45ba-9ec3-f8dcddc3e308.png", "9832dfdf-6d17-4325-8a48-c213e974b590.png", "d9140fa2-0a1d-43c3-b0a7-58d2465593b5.png", "fa413546-ff6e-44d1-a74a-edfe85745477.png"][index]}`} 
                      alt={`Álbum ${index + 1}`}
                      className="h-32 w-32 object-contain"
                    />
                  </div>
                </NFTFloatingCard>
                <div className="mt-3 text-center">
                  <h4 className="text-white text-sm font-orbitron mb-1">Recompensa</h4>
                  <div className="flex items-center justify-center gap-2">
                    <span className="bg-goinft-dark px-2 py-1 rounded text-xs text-neon-blue">
                      {index !== 3 ? "10 CHZ" : "50 CHZ"}
                    </span>
                    <span className="bg-goinft-dark px-2 py-1 rounded text-xs text-neon-green">
                      NFT Exclusivo
                    </span>
                  </div>
                </div>
                <CyberpunkButton 
                  size="sm" 
                  variant={completedAlbums.includes(`album${index + 1}`) ? "accent" : "accent"}
                  className="text-xs mt-2"
                  onClick={() => handleAction("album", `album${index + 1}`)}
                  disabled={completedAlbums.includes(`album${index + 1}`)}
                >
                  {completedAlbums.includes(`album${index + 1}`) ? "Coletado" : "Coletar Recompensa"}
                </CyberpunkButton>
              </div>
            ))}
          </div>
        );
        
      case "rank":
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className={`flex flex-col items-center transition-opacity duration-500 ${visibleRewards.includes(index) ? 'opacity-100' : 'opacity-0'}`}>
                <div className="text-center mb-2">
                  <span className={`font-orbitron text-lg ${index === 0 ? "text-neon-blue" : index === 1 ? "text-neon-purple" : "text-neon-pink"}`}>
                    {["Elite", "Lenda", "Hall da Fama"][index]}
                  </span>
                </div>
                <div className="relative">
                  <NFTFloatingCard 
                    className="h-48 w-full" 
                    isHolographic
                    glowColor={
                      index === 0 ? "rgba(0, 217, 255, 0.8)" : 
                      index === 1 ? "rgba(155, 135, 245, 0.8)" : 
                      "rgba(255, 113, 225, 0.8)"
                    }
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img 
                        src={`/lovable-uploads/${["3ed65cb1-f49f-4076-be44-44a53cff5153.png", "784d0ec2-86ff-4108-b22f-d1e611e0c4cc.png", "83efb069-d2ec-496b-81f2-330f7015674f.png"][index]}`} 
                        alt={`Recompensa ${index + 1}`}
                        className="h-40 w-40 object-contain"
                      />
                    </div>
                  </NFTFloatingCard>
                  <div className="absolute -top-4 -right-4 bg-goinft-dark border-2 border-neon-purple px-3 py-1 rounded-full font-orbitron text-white text-sm">
                    {["TOP 100", "TOP 10", "TOP 3"][index]}
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h4 className="text-white text-sm font-orbitron mb-2">Recompensa do Mundo Real</h4>
                  <span className="bg-gradient-to-r from-neon-purple to-neon-pink text-white text-xs px-3 py-1 rounded-full">
                    {[
                      "Camisa Oficial Autografada", 
                      "Ingresso VIP + Meet & Greet", 
                      "Bola Autografada + Experiência Exclusiva"
                    ][index]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        );
      
      default:
        return null;
    }
  };
  
  return (
    <div className="min-h-[400px]">
      <h3 className="font-orbitron text-lg text-white">Recompensas</h3>
      <div className="relative mt-2">
        <div className="absolute inset-0 bg-circuit-pattern opacity-10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-neon-purple/5 to-transparent pointer-events-none"></div>
        
        {renderRewards()}
      </div>
    </div>
  );
}
