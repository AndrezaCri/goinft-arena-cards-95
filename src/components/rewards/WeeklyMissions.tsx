
import { useRewards } from "@/contexts/RewardsContext";
import { CyberpunkButton } from "@/components/ui/cyberpunk-button";
import { useState, memo } from "react";
import { Skeleton } from "@/components/ui/skeleton";

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

  // Image sources
  const missionImages = [
    "880aa3ab-ecec-4848-808a-018afa7bb652.png", 
    "920baa56-b00d-43ea-8372-f544a6ca420e.png", 
    "e7bd521b-75c6-4c78-817b-74fff9947c90.png", 
    "687d40f8-9816-4f77-989c-1129fd953a1e.png", 
    "c0d8c9e1-73d1-408e-8931-a00e77136d8d.png"
  ];

  return (
    <div className="grid grid-cols-3 md:grid-cols-5 gap-6 mt-6">
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className={`flex flex-col items-center transition-opacity duration-500 ${visibleRewards.includes(index) ? 'opacity-100' : 'opacity-0'}`}>
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
                <div className="mt-3 flex justify-center">
                  <CyberpunkButton 
                    size="sm" 
                    variant={completedMissions.includes(`mission${index + 1}`) ? "accent" : "accent"}
                    className="text-[10px] px-2 py-0.5 h-6 min-h-0 min-w-0"
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
