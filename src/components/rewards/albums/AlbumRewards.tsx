
import { NFTFloatingCard } from "@/components/ui/nft-floating-card";
import { CyberpunkButton } from "@/components/ui/cyberpunk-button";

interface AlbumRewardsProps {
  visibleRewards: number[];
  completedAlbums: string[];
  onAlbumAction: (type: string, id: string) => void;
}

export function AlbumRewards({ visibleRewards, completedAlbums, onAlbumAction }: AlbumRewardsProps) {
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
            onClick={() => onAlbumAction("album", `album${index + 1}`)}
            disabled={completedAlbums.includes(`album${index + 1}`)}
          >
            {completedAlbums.includes(`album${index + 1}`) ? "Coletado" : "Coletar Recompensa"}
          </CyberpunkButton>
        </div>
      ))}
    </div>
  );
}
