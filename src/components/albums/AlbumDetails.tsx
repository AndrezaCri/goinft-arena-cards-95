import { NFTCard } from "@/components/ui/nft-card";
import type { Album, AlbumCard } from "@/types/album";
import React, { useState, useCallback, useMemo, memo, useRef, useEffect } from "react";
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
  return isVisible || isPriority ? (
    <NFTCard {...card} priority={isPriority} />
  ) : (
    <div className="aspect-[230/320] bg-goinft-darker/30 rounded-lg animate-pulse"></div>
  );
});

export function AlbumDetails({ album, cards, onBack }: AlbumDetailsProps) {
  const [albumImageLoaded, setAlbumImageLoaded] = useState(false);
  const [visibleCardIndexes, setVisibleCardIndexes] = useState<Set<number>>(new Set([0, 1])); // Primeiros 2 cards visíveis por padrão
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  // Use useCallback for event handlers
  const handleImageLoad = useCallback(() => {
    setAlbumImageLoaded(true);
  }, []);

  // Use useCallback for event handlers
  const handleBackClick = useCallback(() => {
    onBack();
  }, [onBack]);
  
  // Implementar observador de interseção para virtualizar os cards
  useEffect(() => {
    if (!cardsContainerRef.current) return;
    
    const cardElements = cardsContainerRef.current.querySelectorAll('.nft-card-container');
    const observer = new IntersectionObserver(
      (entries) => {
        const newVisibleIndexes = new Set(visibleCardIndexes);
        
        entries.forEach(entry => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0', 10);
          
          if (entry.isIntersecting) {
            newVisibleIndexes.add(index);
            
            // Pre-load next two cards
            if (index + 1 < cards.length) newVisibleIndexes.add(index + 1);
            if (index + 2 < cards.length) newVisibleIndexes.add(index + 2);
          }
        });
        
        setVisibleCardIndexes(newVisibleIndexes);
      },
      {
        rootMargin: '100px 0px 100px 0px',
        threshold: 0.1
      }
    );
    
    cardElements.forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      observer.disconnect();
    };
  }, [cards.length]);

  // Use useMemo for derived values that don't need to be recalculated on every render
  const placeholderCards = useMemo(() => 
    Array.from({ length: 4 }).map((_, index) => (
      <PlaceholderCard key={index} index={index} />
    )),
    []
  );
  
  // Memoize album stats to prevent recalculations
  const albumStats = useMemo(() => [
    { label: "Total de Cards", value: album.totalCards, colorClass: "text-neon-purple/70" },
    { label: "Colecionados", value: album.collectedCards, colorClass: "text-neon-blue/70" },
    { label: "Progresso", value: `${Math.round(album.progress)}%`, colorClass: "text-neon-pink/70" },
    { label: "Faltando", value: album.totalCards - album.collectedCards, colorClass: "text-neon-green/70" },
  ], [album.totalCards, album.collectedCards, album.progress]);
  
  // Memoize prepared cards to prevent recalculations on every render
  const preparedCards = useMemo(() => 
    cards.map((card, index) => ({
      ...card,
      isPriority: index < 2 // Apenas os primeiros 2 cards são prioritários
    })),
    [cards]
  );

  return (
    <>
      <div className="bg-goinft-card rounded-xl p-6 mb-8 border border-neon-purple/30 relative overflow-hidden group">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 relative z-10">
          <div className="w-full sm:w-44 relative group">
            {!albumImageLoaded && (
              <div className="w-full h-full absolute inset-0 bg-goinft-darker animate-pulse rounded-lg" style={{ aspectRatio: '3/4' }}></div>
            )}
            <OptimizedImage 
              src={album.coverImage} 
              alt={album.name}
              className={cn(
                "w-full h-auto rounded-lg border border-neon-purple/30 transition-transform duration-300 group-hover:scale-[1.02]",
                !albumImageLoaded && "opacity-0"
              )}
              onLoad={handleImageLoad}
              width="175"
              height="175"
              priority={true}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-lg"></div>
          </div>
          
          <div className="flex-1">
            <h2 className="text-white font-orbitron text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-purple to-neon-blue">
              {album.name}
            </h2>
            
            <div className="grid grid-cols-2 gap-4 text-white/70 mb-6">
              {albumStats.map((stat, index) => (
                <StatCard 
                  key={index}
                  label={stat.label}
                  value={stat.value}
                  colorClass={stat.colorClass}
                />
              ))}
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
      
      <div ref={cardsContainerRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
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
