
import { useRewards } from "@/contexts/RewardsContext";
import { CyberpunkButton } from "@/components/ui/cyberpunk-button";
import { useState, memo, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { useIsMobile } from "@/hooks/use-mobile";

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
      setIsSmallScreen(window.innerWidth < 920);
    };
    
    // Initial check
    checkScreenSize();
    
    // Add event listener
    window.addEventListener('resize', checkScreenSize);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Updated image sources - using the new football player card images
  const missionImages = [
    "9b9a32b3-ddb4-4e4f-8339-109e0d619734.png", 
    "6a1095cc-dfc7-45f2-8fe8-14a4e4f84d13.png", 
    "41748649-ead6-431c-9020-d53c932e9d0c.png", 
    "4f41d46d-a825-4c09-ae75-3b8e7a75a998.png", 
    "6d059f5e-11b1-459c-95bf-bd77dc3c1153.png"
  ];

  return (
    <div className={`grid gap-6 mt-6 ${
      isSmallScreen 
        ? 'grid-cols-2 md:grid-cols-3' 
        : 'grid-cols-4 md:grid-cols-5'
    }`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} 
          className={`flex flex-col items-center transition-opacity duration-500 ${
            visibleRewards.includes(index) ? 'opacity-100' : 'opacity-0'
          } ${
            isSmallScreen && index >= 4 ? 'col-span-2 md:col-span-1' : ''
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
