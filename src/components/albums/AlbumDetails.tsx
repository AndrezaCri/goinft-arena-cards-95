
import { NFTCard } from "@/components/ui/nft-card";
import type { Album, AlbumCard } from "@/types/album";
import { useState, useCallback, useMemo } from "react";
import { cn } from "@/lib/utils";
import { OptimizedImage } from "@/components/rewards/OptimizedImage";

interface AlbumDetailsProps {
  album: Album;
  cards: AlbumCard[];
  onBack: () => void;
}

export function AlbumDetails({ album, cards, onBack }: AlbumDetailsProps) {
  const [albumImageLoaded, setAlbumImageLoaded] = useState(false);

  // Use useCallback para funções de evento
  const handleImageLoad = useCallback(() => {
    setAlbumImageLoaded(true);
  }, []);

  // Use useMemo para os placeholder cards
  const placeholderCards = useMemo(() => 
    Array.from({ length: 4 }).map((_, index) => (
      <div 
        key={`empty-${index}`} 
        className="aspect-[230/320] rounded-xl border-2 border-dashed border-neon-purple/30 bg-goinft-card/50 flex items-center justify-center group hover:border-neon-purple/50 transition-colors duration-300"
      >
        <span className="text-white/30 font-orbitron group-hover:text-white/50 transition-colors duration-300">
          Espaço Vazio
        </span>
      </div>
    )),
    []
  );

  return (
    <>
      <div className="bg-goinft-card rounded-xl p-6 mb-8 border border-neon-purple/30 relative overflow-hidden group">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 relative z-10">
          <div className="w-full sm:w-64 relative group">
            {!albumImageLoaded && (
              <div className="w-full h-full absolute inset-0 bg-goinft-darker animate-pulse rounded-lg" style={{ aspectRatio: '230/320' }}></div>
            )}
            <OptimizedImage 
              src={album.coverImage} 
              alt={album.name}
              className={cn(
                "w-full h-auto rounded-lg border border-neon-purple/30 transition-transform duration-300 group-hover:scale-[1.02]",
                !albumImageLoaded && "opacity-0"
              )}
              onLoad={handleImageLoad}
              width="230"
              height="320"
              priority={true}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-lg"></div>
          </div>
          
          <div className="flex-1">
            <h2 className="text-white font-orbitron text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-purple to-neon-blue">
              {album.name}
            </h2>
            
            <div className="grid grid-cols-2 gap-4 text-white/70 mb-6">
              <div className="cyberpunk-card p-4">
                <span className="block text-sm text-neon-purple/70">Total de Cards</span>
                <span className="block text-xl font-bold text-white">{album.totalCards}</span>
              </div>
              
              <div className="cyberpunk-card p-4">
                <span className="block text-sm text-neon-blue/70">Colecionados</span>
                <span className="block text-xl font-bold text-white">{album.collectedCards}</span>
              </div>
              
              <div className="cyberpunk-card p-4">
                <span className="block text-sm text-neon-pink/70">Progresso</span>
                <span className="block text-xl font-bold text-white">{Math.round(album.progress)}%</span>
              </div>
              
              <div className="cyberpunk-card p-4">
                <span className="block text-sm text-neon-green/70">Faltando</span>
                <span className="block text-xl font-bold text-white">
                  {album.totalCards - album.collectedCards}
                </span>
              </div>
            </div>
            
            <div className="w-full bg-goinft-darker rounded-full h-2.5 mb-6 relative overflow-hidden">
              <div 
                className="absolute inset-0 bg-gradient-to-r from-neon-purple via-neon-blue to-neon-pink h-2.5"
                style={{ width: `${album.progress}%` }}
              >
                <div className="absolute inset-0 animate-[pulse_2s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              </div>
            </div>
            
            <p className="text-white/70 mb-4">
              Complete este álbum para ganhar recompensas e conquistas exclusivas!
            </p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {cards.map((card, index) => (
          <NFTCard 
            key={card.id} 
            {...card} 
            priority={index < 4} // Priorizar apenas os primeiros 4 cards para melhorar o carregamento
          />
        ))}
        
        {placeholderCards}
      </div>
    </>
  );
}
