
import { NFTCard } from "@/components/ui/nft-card";
import { MarketplaceCard } from "@/types/marketplace";

interface MarketplaceCardListProps {
  cards: MarketplaceCard[];
  onCardClick: (card: MarketplaceCard) => void;
}

export function MarketplaceCardList({ cards, onCardClick }: MarketplaceCardListProps) {
  if (cards.length === 0) {
    return (
      <div className="text-center py-12 bg-goinft-card/30 rounded-xl backdrop-blur-sm border border-neon-purple/20">
        <p className="text-white/70 text-lg mb-4">Nenhum card encontrado com os filtros selecionados.</p>
        <button 
          className="bg-gradient-to-r from-neon-purple to-neon-pink text-white hover:opacity-90 px-4 py-2 rounded"
          onClick={() => window.location.reload()}
        >
          Limpar Filtros
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {cards.map((card) => (
        <NFTCard 
          key={card.id} 
          {...card} 
          onClick={() => onCardClick(card)}
          className="transform hover:scale-105 transition-transform duration-300" 
        />
      ))}
    </div>
  );
}
