
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

  // New image sources (using the uploaded football card images)
  const albumImages = [
    "483bb85d-188b-4c59-b6dc-5e106d3762c1.png", // Palmeiras
    "65007311-0241-4a63-8f02-9786481b17f9.png", // Portuguesa
    "a8f39cfe-b28c-49cb-ac3b-50f4593dcefe.png", // São Paulo
    "9f7cc95c-8f90-4672-ac10-8968c65ae5d7.png", // Corinthians
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className={`flex flex-col items-center transition-opacity duration-500 ${visibleRewards.includes(index) ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-center mb-2">
            <span className="font-orbitron text-sm text-white">
              {["Álbum Palmeiras", "Álbum Portuguesa", "Álbum São Paulo", "Álbum Corinthians"][index]}
            </span>
          </div>
          <NFTFloatingCard 
            className="h-40 w-full" 
            isHolographic
            glowColor={
              index === 0 ? "rgba(0, 255, 0, 0.8)" : 
              index === 1 ? "rgba(255, 0, 0, 0.8)" : 
              index === 2 ? "rgba(255, 0, 0, 0.8)" : 
              "rgba(0, 0, 255, 0.8)"
            }
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <OptimizedImage 
                src={`/lovable-uploads/${albumImages[index]}`}
                alt={`Álbum ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          </NFTFloatingCard>
          <div className="mt-3 text-center">
            <h4 className="text-white text-sm font-orbitron mb-1">Recompensa</h4>
            <div className="flex items-center justify-center gap-1">
              <span className="bg-goinft-dark px-1.5 py-0.5 rounded text-xs text-neon-blue">
                {index !== 3 ? "10 CHZ" : "50 CHZ"}
              </span>
              <span className="bg-goinft-dark px-1.5 py-0.5 rounded text-xs text-neon-green">
                NFT Exclusivo
              </span>
            </div>
          </div>
          <div className="mt-1 flex space-x-1 justify-center">
            <CyberpunkButton 
              size="xs" 
              variant={completedAlbums.includes(`album${index + 1}`) ? "accent" : "accent"}
              className="px-2 py-0 h-5 min-h-0 min-w-0"
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
