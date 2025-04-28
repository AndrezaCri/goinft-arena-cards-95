
import { useRewards } from "@/contexts/RewardsContext";
import { CyberpunkButton } from "@/components/ui/cyberpunk-button";
import { NFTFloatingCard } from "@/components/ui/nft-floating-card";
import { useState, memo } from "react";
import { Skeleton } from "@/components/ui/skeleton";

// Optimized image component
const OptimizedImage = memo(function OptimizedImage({ src, alt, className }: { src: string, alt: string, className?: string }) {
  const [loaded, setLoaded] = useState(false);
  
  return (
    <div className="relative w-full h-full">
      {!loaded && <Skeleton className="absolute inset-0 h-full w-full bg-goinft-darker/60 rounded-lg" />}
      <img 
        src={src} 
        alt={alt}
        className={`${className} ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 w-full h-full object-contain`}
        onLoad={() => setLoaded(true)}
        loading="lazy"
        width="128"
        height="128"
      />
    </div>
  );
});

export function AlbumRewards({ visibleRewards }: { visibleRewards: number[] }) {
  const { completedAlbums, handleCompleteAlbum } = useRewards();

  // Image sources
  const albumImages = [
    "f71a92ea-61b6-45ba-9ec3-f8dcddc3e308.png", 
    "9832dfdf-6d17-4325-8a48-c213e974b590.png", 
    "d9140fa2-0a1d-43c3-b0a7-58d2465593b5.png", 
    "fa413546-ff6e-44d1-a74a-edfe85745477.png"
  ];

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
              <OptimizedImage 
                src={`/lovable-uploads/${albumImages[index]}`}
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
          <div className="mt-2 flex justify-center">
            <CyberpunkButton 
              size="sm" 
              variant={completedAlbums.includes(`album${index + 1}`) ? "accent" : "accent"}
              className="text-[10px] px-2 py-0.5 h-6 min-h-0 min-w-0"
              onClick={() => handleCompleteAlbum(`album${index + 1}`)}
              disabled={completedAlbums.includes(`album${index + 1}`)}
            >
              {completedAlbums.includes(`album${index + 1}`) ? "Coletado" : "Coletar"}
            </CyberpunkButton>
          </div>
        </div>
      ))}
    </div>
  );
}
