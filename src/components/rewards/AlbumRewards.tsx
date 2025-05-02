
import { useRewards } from "@/contexts/RewardsContext";
import { CyberpunkButton } from "@/components/ui/cyberpunk-button";
import { NFTFloatingCard } from "@/components/ui/nft-floating-card";
import { memo, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { OptimizedImage, preloadCriticalImages } from "./OptimizedImage";

// Define all album images in a module-level constant
const ALBUM_IMAGES = [
  "/lovable-uploads/f71a92ea-61b6-45ba-9ec3-f8dcddc3e308.png", 
  "/lovable-uploads/9832dfdf-6d17-4325-8a48-c213e974b590.png", 
  "/lovable-uploads/d9140fa2-0a1d-43c3-b0a7-58d2465593b5.png", 
  "/lovable-uploads/fa413546-ff6e-44d1-a74a-edfe85745477.png"
];

// Start preloading immediately when this module is imported
preloadCriticalImages(ALBUM_IMAGES.slice(0, 2));

export const AlbumRewards = memo(function AlbumRewards({ visibleRewards }: { visibleRewards: number[] }) {
  const { completedAlbums, handleCompleteAlbum } = useRewards();
  const isMobile = useIsMobile();

  // Preload the rest of the images when component mounts
  useEffect(() => {
    preloadCriticalImages(ALBUM_IMAGES.slice(2));
  }, []);

  return (
    <div className={`grid ${isMobile ? 'grid-cols-3' : 'grid-cols-2 md:grid-cols-4'} gap-4 mt-6 justify-items-center`}>
      {Array.from({ length: 4 }).map((_, index) => {
        // For mobile, determine which row this card should be in
        const mobileRow = Math.floor(index / 3);
        const isVisibleForCurrentRow = !isMobile || (mobileRow === 0 || visibleRewards.includes(index));
        
        return (
          <div 
            key={index} 
            className={`flex flex-col items-center transition-opacity duration-500 
              ${visibleRewards.includes(index) ? 'opacity-100' : 'opacity-0'}
              ${isMobile && index >= 3 ? 'mt-6' : ''}
              ${isVisibleForCurrentRow ? '' : 'hidden'}`}
          >
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
                <OptimizedImage 
                  src={`/lovable-uploads/${ALBUM_IMAGES[index].split('/').pop()}`}
                  alt={`Álbum ${index + 1}`}
                  className="h-32 w-32 object-contain"
                  width="128"
                  height="128"
                  priority={index < 2} // Prioritize first two albums
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
            <div className="flex flex-row gap-2 mt-2">
              <CyberpunkButton 
                size="sm" 
                variant={completedAlbums.includes(`album${index + 1}`) ? "accent" : "accent"}
                className="text-xs px-2 py-1 h-auto"
                onClick={() => handleCompleteAlbum(`album${index + 1}`)}
                disabled={completedAlbums.includes(`album${index + 1}`)}
              >
                {completedAlbums.includes(`album${index + 1}`) ? "Coletado" : "Coletar"}
              </CyberpunkButton>
            </div>
          </div>
        );
      })}
    </div>
  );
});
