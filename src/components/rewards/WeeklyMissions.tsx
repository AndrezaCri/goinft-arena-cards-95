
import { useRewards } from "@/contexts/RewardsContext";
import { CyberpunkButton } from "@/components/ui/cyberpunk-button";
import { useState, memo, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { useIsMobile } from "@/hooks/use-mobile";
import { ScrollArea } from "@/components/ui/scroll-area";

// Optimized image component
const OptimizedImage = memo(function OptimizedImage({ src, alt, className }: { src: string, alt: string, className?: string }) {
  const [loaded, setLoaded] = useState(false);
  
  return (
    <div className="relative w-full h-full">
      {!loaded && <Skeleton className="h-16 w-16 bg-goinft-darker/60 rounded-lg" />}
      <img 
        src={src} 
        alt={alt}
        className={`${className} ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        onLoad={() => setLoaded(true)}
        loading="lazy"
        width="64"
        height="64"
      />
    </div>
  );
});

export function WeeklyMissions({ visibleRewards }: { visibleRewards: number[] }) {
  const { completedMissions, handleCompleteMission } = useRewards();
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  
  // Check if screen width is less than 920px
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 920);
    };
    
    // Initial check
    checkScreenSize();
    
    // Add event listener
    window.addEventListener('resize', checkScreenSize);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Updated image sources with the new uploaded images
  const missionImages = [
    "41cc2534-5691-4017-9139-eabc6252d7b4.png", 
    "e6ee08c7-701b-443a-aef5-c1564bcc3bf0.png", 
    "bfb57833-c13a-46bf-9b77-d240a70a9fe1.png", 
    "73671899-97eb-4960-9263-1b9fc542ff21.png", 
    "5f5cedfc-bae7-41ab-aed0-e44cde3853d1.png"
  ];

  if (isSmallScreen) {
    return (
      <div className="flex flex-col gap-6 mt-6">
        {/* Horizontal scrollable container for first 4 cards */}
        <ScrollArea className="w-full pb-4">
          <div className="flex space-x-4 min-w-max">
            {Array.from({ length: 4 }).map((_, index) => (
              <div 
                key={index} 
                className={`flex-shrink-0 w-[220px] transition-opacity duration-500 ${
                  visibleRewards.includes(index) ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="text-center mb-2">
                  <span className="font-orbitron text-sm text-white">Missão {index + 1}</span>
                </div>
                <div className="bg-goinft-light/40 p-4 rounded-lg border border-neon-blue/20 relative h-[180px]">
                  <div className="absolute -top-3 -right-3 bg-neon-purple text-white text-xs px-2 py-1 rounded-full font-orbitron animate-pulse">
                    {[30, 50, 75, 100][index]} XP
                  </div>
                  <div className="flex flex-col items-center h-full">
                    <div className="h-16 w-16 mb-2">
                      <OptimizedImage 
                        src={`/lovable-uploads/${missionImages[index]}`} 
                        alt={`Missão ${index + 1}`}
                        className="h-16 w-16 object-contain"
                      />
                    </div>
                    <div className="text-center mt-2 flex-grow">
                      <h4 className="text-white text-sm font-orbitron">
                        {["Troque 3 cards", "Complete 1 álbum", "Compre 2 pacotes", "Visite 5 dias"][index]}
                      </h4>
                      <div className="mt-3 flex flex-row justify-center gap-1">
                        <CyberpunkButton 
                          size="sm" 
                          variant={completedMissions.includes(`mission${index + 1}`) ? "accent" : "accent"}
                          className="text-xs px-2 py-1 h-auto"
                          onClick={() => handleCompleteMission(`mission${index + 1}`)}
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
        </ScrollArea>
        
        {/* Vertical stacking for remaining cards */}
        {Array.from({ length: 1 }).map((_, i) => {
          const index = i + 4; // Starting from the 5th card
          return (
            <div 
              key={index} 
              className={`w-full transition-opacity duration-500 ${
                visibleRewards.includes(index) ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="text-center mb-2">
                <span className="font-orbitron text-sm text-white">Missão {index + 1}</span>
              </div>
              <div className="bg-goinft-light/40 p-4 rounded-lg border border-neon-blue/20 relative h-[180px]">
                <div className="absolute -top-3 -right-3 bg-neon-purple text-white text-xs px-2 py-1 rounded-full font-orbitron animate-pulse">
                  150 XP
                </div>
                <div className="flex flex-col items-center h-full">
                  <div className="h-16 w-16 mb-2">
                    <OptimizedImage 
                      src={`/lovable-uploads/${missionImages[index]}`} 
                      alt={`Missão ${index + 1}`}
                      className="h-16 w-16 object-contain"
                    />
                  </div>
                  <div className="text-center mt-2 flex-grow">
                    <h4 className="text-white text-sm font-orbitron">Abra 10 pacotes</h4>
                    <div className="mt-3 flex flex-row justify-center gap-1">
                      <CyberpunkButton 
                        size="sm" 
                        variant={completedMissions.includes(`mission${index + 1}`) ? "accent" : "accent"}
                        className="text-xs px-2 py-1 h-auto"
                        onClick={() => handleCompleteMission(`mission${index + 1}`)}
                        disabled={completedMissions.includes(`mission${index + 1}`)}
                      >
                        {completedMissions.includes(`mission${index + 1}`) ? "Completo" : "Iniciar"}
                      </CyberpunkButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  
  // Original grid layout for screens larger than 920px
  return (
    <div className="grid grid-cols-5 gap-6 mt-6">
      {Array.from({ length: 5 }).map((_, index) => (
        <div 
          key={index} 
          className={`flex flex-col items-center transition-opacity duration-500 ${
            visibleRewards.includes(index) ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="text-center mb-2">
            <span className="font-orbitron text-sm text-white">Missão {index + 1}</span>
          </div>
          <div className="bg-goinft-light/40 p-4 rounded-lg border border-neon-blue/20 relative h-[180px]">
            <div className="absolute -top-3 -right-3 bg-neon-purple text-white text-xs px-2 py-1 rounded-full font-orbitron animate-pulse">
              {[30, 50, 75, 100, 150][index]} XP
            </div>
            <div className="flex flex-col items-center h-full">
              <div className="h-16 w-16 mb-2">
                <OptimizedImage 
                  src={`/lovable-uploads/${missionImages[index]}`} 
                  alt={`Missão ${index + 1}`}
                  className="h-16 w-16 object-contain"
                />
              </div>
              <div className="text-center mt-2 flex-grow">
                <h4 className="text-white text-sm font-orbitron">
                  {["Troque 3 cards", "Complete 1 álbum", "Compre 2 pacotes", "Visite 5 dias", "Abra 10 pacotes"][index]}
                </h4>
                <div className="mt-3 flex flex-row justify-center gap-1">
                  <CyberpunkButton 
                    size="sm" 
                    variant={completedMissions.includes(`mission${index + 1}`) ? "accent" : "accent"}
                    className="text-xs px-2 py-1 h-auto"
                    onClick={() => handleCompleteMission(`mission${index + 1}`)}
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
}
