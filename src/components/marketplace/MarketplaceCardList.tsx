
import { NFTCard } from "@/components/ui/nft-card";
import { MarketplaceCard } from "@/types/marketplace";
import { memo, useMemo } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface MarketplaceCardListProps {
  cards: MarketplaceCard[];
  onCardClick: (card: MarketplaceCard) => void;
}

// Usando memo para evitar re-renderizações desnecessárias
export const MarketplaceCardList = memo(function MarketplaceCardList({ cards, onCardClick }: MarketplaceCardListProps) {
  const isMobile = useIsMobile();

  // Use useMemo para a mensagem de "nenhum card encontrado"
  const emptyListMessage = useMemo(() => (
    <div className="text-center py-12 bg-goinft-card/30 rounded-xl backdrop-blur-sm border border-neon-purple/20">
      <p className="text-white/70 text-lg mb-4">Nenhum card encontrado com os filtros selecionados.</p>
      <button 
        className="bg-gradient-to-r from-neon-purple to-neon-pink text-white hover:opacity-90 px-4 py-2 rounded"
        onClick={() => window.location.reload()}
      >
        Limpar Filtros
      </button>
    </div>
  ), []);

  // Compute the grid class once
  const gridClass = useMemo(() => 
    `grid ${isMobile ? 'grid-cols-2 gap-2' : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'} justify-items-center`,
    [isMobile]
  );

  if (cards.length === 0) {
    return emptyListMessage;
  }

  return (
    <div className={gridClass}>
      {cards.map((card) => (
        <div 
          key={card.id} 
          className="w-full cursor-pointer"
          onClick={() => onCardClick(card)}
        >
          <NFTCard 
            {...card}
            className="w-full"
            // Apenas prioritize os primeiros cards para melhorar o tempo de carregamento
            priority={cards.indexOf(card) < 6}
          />
        </div>
      ))}
    </div>
  );
});
