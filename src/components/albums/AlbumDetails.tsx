
import { NFTCard } from "@/components/ui/nft-card";
import type { Album, AlbumCard } from "@/types/album";
import { useState, useCallback, useMemo, memo, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { OptimizedImage } from "@/components/rewards/OptimizedImage";

interface AlbumDetailsProps {
  album: Album;
  cards: AlbumCard[];
  onBack: () => void;
}

// Define proper interfaces for the memo components
interface StatCardProps {
  label: string;
  value: string | number;
  colorClass: string;
}

// Componente isolado para os cards de estatísticas do álbum
const StatCard = memo(function StatCard({ label, value, colorClass }: StatCardProps) {
  return (
    <div className="cyberpunk-card p-4">
      <span className={`block text-sm ${colorClass}`}>{label}</span>
      <span className="block text-xl font-bold text-white">{value}</span>
    </div>
  );
});

interface PlaceholderCardProps {
  index: number;
}

// Componente isolado para o placeholder card
const PlaceholderCard = memo(function PlaceholderCard({ index }: PlaceholderCardProps) {
  return (
    <div 
      key={`empty-${index}`} 
      className="aspect-[230/320] rounded-xl border-2 border-dashed border-neon-purple/30 bg-goinft-card/50 flex items-center justify-center group hover:border-neon-purple/50 transition-colors duration-300"
    >
      <span className="text-white/30 font-orbitron group-hover:text-white/50 transition-colors duration-300">
        Espaço Vazio
      </span>
    </div>
  );
});

interface NFTCardWithVirtualizationProps extends AlbumCard {
  isPriority: boolean;
  isVisible: boolean;
}

// Componente memoizado para renderizar NFT Cards com virtualização
const NFTCardWithVirtualization = memo(function NFTCardWithVirtualization({ 
  isPriority, 
  isVisible,
  ...card 
}: NFTCardWithVirtualizationProps) {
  // Simplified component - direct rendering for better performance
  if (!isVisible && !isPriority) {
    return <div className="aspect-[230/320] bg-goinft-darker/30 rounded-lg"></div>;
  }
  
  return <NFTCard {...card} priority={isPriority} />;
});

export function AlbumDetails({ album, cards, onBack }: AlbumDetailsProps) {
  const [albumImageLoaded, setAlbumImageLoaded] = useState(false);
  const [visibleCardIndexes, setVisibleCardIndexes] = useState<Set<number>>(new Set([0, 1]));
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  // Use useCallback for event handlers
  const handleImageLoad = useCallback(() => {
    setAlbumImageLoaded(true);
  }, []);

  // Implement simplified intersection observer for virtualization
  useEffect(() => {
    if (!cardsContainerRef.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        const newVisibleIndexes = new Set(visibleCardIndexes);
        
        entries.forEach(entry => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0', 10);
          
          if (entry.isIntersecting) {
            newVisibleIndexes.add(index);
            // Only preload the very next card for minimal loading
            if (index + 1 < cards.length) newVisibleIndexes.add(index + 1);
          }
        });
        
        setVisibleCardIndexes(newVisibleIndexes);
      },
      {
        rootMargin: '50px', // Reduced margin for more immediate loading
        threshold: 0.1
      }
    );
    
    // Find and observe all card containers
    cardsContainerRef.current.querySelectorAll('.nft-card-container').forEach(element => {
      observer.observe(element);
    });
    
    return () => observer.disconnect();
  }, [cards.length, visibleCardIndexes]);

  // Simplified placeholder cards
  const placeholderCards = useMemo(() => 
    Array.from({ length: 4 }).map((_, index) => (
      <PlaceholderCard key={index} index={index} />
    )),
    []
  );
  
  // Album stats calculation
  const albumStats = useMemo(() => [
    { label: "Total de Cards", value: album.totalCards, colorClass: "text-neon-purple/70" },
    { label: "Colecionados", value: album.collectedCards, colorClass: "text-neon-blue/70" },
    { label: "Progresso", value: `${Math.round(album.progress)}%`, colorClass: "text-neon-pink/70" },
    { label: "Faltando", value: album.totalCards - album.collectedCards, colorClass: "text-neon-green/70" },
  ], [album.totalCards, album.collectedCards, album.progress]);
  
  // Prepared cards with priority flag
  const preparedCards = useMemo(() => 
    cards.map((card, index) => ({
      ...card,
      isPriority: index < 1 // Only the first card is priority to reduce initial load
    })),
    [cards]
  );

  return (
    <>
      <div className="bg-goinft-card rounded-xl p-4 mb-6 border border-neon-purple/30 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row gap-4 relative z-10">
          <div className="w-full sm:w-48 relative">
            {!albumImageLoaded && (
              <div className="w-full h-full absolute inset-0 bg-goinft-darker rounded-lg" style={{ aspectRatio: '230/320' }}></div>
            )}
            <OptimizedImage 
              src={album.coverImage} 
              alt={album.name}
              className={cn(
                "w-full h-auto rounded-lg border border-neon-purple/30",
                !albumImageLoaded && "opacity-0"
              )}
              onLoad={handleImageLoad}
              width="100"
              height="140"
              priority={true}
              quality={20}
            />
          </div>
          
          <div className="flex-1">
            <h2 className="text-white font-orbitron text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-neon-purple to-neon-blue">
              {album.name}
            </h2>
            
            <div className="grid grid-cols-2 gap-3 text-white/70 mb-4">
              {albumStats.map((stat, index) => (
                <StatCard 
                  key={index}
                  label={stat.label}
                  value={stat.value}
                  colorClass={stat.colorClass}
                />
              ))}
            </div>
            
            <div className="w-full bg-goinft-darker rounded-full h-2 mb-4 relative overflow-hidden">
              <div 
                className="absolute inset-0 bg-gradient-to-r from-neon-purple via-neon-blue to-neon-pink h-2"
                style={{ width: `${album.progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      
      <div ref={cardsContainerRef} className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {preparedCards.map((card, index) => (
          <div key={card.id} className="nft-card-container" data-index={index}>
            <NFTCardWithVirtualization 
              {...card} 
              isPriority={card.isPriority}
              isVisible={visibleCardIndexes.has(index)}
            />
          </div>
        ))}
        
        {placeholderCards}
      </div>
    </>
  );
}
