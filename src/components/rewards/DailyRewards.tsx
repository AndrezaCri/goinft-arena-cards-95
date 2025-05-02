
import { NFTFloatingCard } from "@/components/ui/nft-floating-card";
import { CyberpunkButton } from "@/components/ui/cyberpunk-button";
import { useRewards } from "@/contexts/RewardsContext";
import { useState, memo, useMemo, useEffect } from "react";
import { OptimizedImage } from "./OptimizedImage";
import { TouchpadIcon } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export const DailyRewards = memo(function DailyRewards({ visibleRewards }: { visibleRewards: number[] }) {
  const { loginStreak, handleDailyLogin } = useRewards();
  const [preloadedImages, setPreloadedImages] = useState<string[]>([]);
  const isMobile = useIsMobile();

  // Predefine image sources to prevent recalculation on render
  const rewardImages = useMemo(() => [
    "/lovable-uploads/fec225a0-7769-4430-9324-ff998d02cff7.png", // Updated with Corinthians NFT image
    "/lovable-uploads/d7073944-876d-4bf4-a27f-37856e26104f.png", // Updated with Palmeiras NFT image
    "/lovable-uploads/7a2ce23a-6caa-4056-9830-219bcbc3a2e3.png", // Updated with new Corinthians NFT image
    "/lovable-uploads/f5ca40fa-5902-446b-803a-01f463e6e203.png", // Updated with São Paulo NFT image
    "/lovable-uploads/c7c901dd-d2db-46de-9129-42fb4c41c341.png",
    "/lovable-uploads/1cb631c9-795d-4a11-8750-3e34509f594d.png",
    "/lovable-uploads/506f8852-1303-4875-ae3d-6068e947cb1d.png"
  ], []);

  // Preload key images on component mount
  useEffect(() => {
    const preloadImages = async () => {
      // Only preload visible images with priority to the one for current streak
      const imagesToPreload = visibleRewards
        .filter(idx => idx <= loginStreak + 1) // Current day and next day
        .map(idx => rewardImages[idx % rewardImages.length]);
      
      // Only preload images we haven't loaded yet
      const newImagesToLoad = imagesToPreload.filter(img => !preloadedImages.includes(img));
      
      if (newImagesToLoad.length > 0) {
        await Promise.all(newImagesToLoad.map(src => {
          return new Promise<void>((resolve) => {
            const img = new Image();
            img.onload = () => resolve();
            img.src = src;
          });
        }));
        
        setPreloadedImages(prev => [...prev, ...newImagesToLoad]);
      }
    };
    
    preloadImages();
  }, [visibleRewards, loginStreak, rewardImages, preloadedImages]);

  // Define neon colors for each card
  const neonColors = [
    "rgba(0, 217, 255, 0.8)",    // Azul neon
    "rgba(155, 135, 245, 0.8)",  // Roxo neon
    "rgba(255, 71, 225, 0.8)",   // Rosa neon
    "rgba(255, 0, 76, 0.8)",     // Vermelho neon
    "rgba(113, 130, 255, 0.8)",  // Azul-roxo neon
  ];

  return (
    <div className={`grid ${isMobile ? 'grid-cols-3' : 'grid-cols-7'} gap-2 mt-4 items-end justify-items-center`}>
      {Array.from({ length: 7 }).map((_, index) => {
        // For mobile, we'll show all cards but arrange them in two rows
        const mobileRow = Math.floor(index / 3);
        
        return (
          <div 
            key={index} 
            className={`flex flex-col items-center transition-opacity duration-500 
              ${visibleRewards.includes(index) ? 'opacity-100' : 'opacity-0'}
              ${isMobile && index >= 3 ? 'mt-6' : ''}
            `}
          >
            <div className="text-center mb-2">
              <span className="font-orbitron text-sm text-white">Dia {index + 1}</span>
            </div>
            <div className="relative h-28 md:h-36 w-full">
              {index < 5 ? (
                <div 
                  className="absolute inset-0 flex items-center justify-center cursor-pointer transform transition-all duration-300 hover:scale-105 active:scale-95"
                  onClick={() => index <= loginStreak && handleDailyLogin()}
                >
                  <div 
                    className="bg-goinft-card rounded-lg h-20 w-20 md:h-24 md:w-24 flex items-center justify-center relative overflow-hidden"
                    style={{
                      boxShadow: `0 0 15px ${neonColors[index % 5]}`,
                      border: `1px solid ${neonColors[index % 5]}`
                    }}
                  >
                    <OptimizedImage 
                      src={rewardImages[index % 5]}
                      alt={`Reward ${index + 1}`}
                      className="w-full h-full p-1 object-contain"
                      priority={index <= loginStreak}
                    />
                    <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
                    {index <= loginStreak && (
                      <div className="absolute bottom-1 right-1">
                        <TouchpadIcon size={16} className="text-white/80 animate-pulse" />
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <NFTFloatingCard 
                  className="h-full w-full" 
                  size="sm" 
                  isHolographic
                  glowColor={index === 6 ? "rgba(255, 113, 225, 0.8)" : "rgba(155, 135, 245, 0.6)"}
                >
                  <OptimizedImage 
                    src={index === 5 ? rewardImages[5] : rewardImages[6]}
                    alt={`NFT Reward ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </NFTFloatingCard>
              )}
            </div>
            <div className="mt-2 text-center">
              <span className="text-xs text-white/70">
                {index < 5 ? `${[5, 10, 15, 20, 25][index % 5]} CHZ` : index === 5 ? "NFT Raro" : "NFT Lendário"}
              </span>
            </div>
            <div className="flex flex-row gap-1 mt-1">
              <CyberpunkButton
                size="sm"
                variant={index <= loginStreak ? "accent" : "outline"}
                className="text-xs px-2 py-1 h-auto"
                onClick={() => index <= loginStreak && handleDailyLogin()}
                disabled={index > loginStreak}
              >
                {index < loginStreak ? "Coletado" : index === loginStreak ? "Coletar" : "Bloqueado"}
              </CyberpunkButton>
            </div>
          </div>
        );
      })}
    </div>
  );
});
