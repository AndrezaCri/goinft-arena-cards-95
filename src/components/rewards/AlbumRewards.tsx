
import { NFTFloatingCard } from "@/components/ui/nft-floating-card";
import { memo } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { OptimizedImage } from "./OptimizedImage";

export function AlbumRewards({ visibleRewards }: { visibleRewards: number[] }) {
  const isMobile = useIsMobile();

  // Image sources
  const albumImages = [
    "f71a92ea-61b6-45ba-9ec3-f8dcddc3e308.png", 
    "9832dfdf-6d17-4325-8a48-c213e974b590.png", 
    "d9140fa2-0a1d-43c3-b0a7-58d2465593b5.png", 
    "fa413546-ff6e-44d1-a74a-edfe85745477.png"
  ];

  return (
    <div className={`grid ${isMobile ? 'grid-cols-3' : 'grid-cols-2 md:grid-cols-4'} gap-6 mt-6 justify-items-center`}>
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
            <NFTFloatingCard 
              className="h-48 w-full" 
              isHolographic
              glowColor={index === 3 ? "rgba(255, 113, 225, 0.8)" : "rgba(155, 135, 245, 0.6)"}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <OptimizedImage 
                  src={`/lovable-uploads/${albumImages[index]}`}
                  alt={`Álbum ${index + 1}`}
                  className="h-40 w-40 object-contain"
                  width="160"
                  height="160"
                  priority={index === 0} // Priorizar o primeiro álbum
                />
              </div>
            </NFTFloatingCard>
          </div>
        );
      })}
    </div>
  );
}
