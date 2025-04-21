
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { NFTCard } from "@/components/ui/nft-card";
import { MarketplaceCard } from "@/types/marketplace";

interface MarketplaceTradeDialogProps {
  card: MarketplaceCard | null;
  ownedCards: MarketplaceCard[];
  isOpen: boolean;
  onClose: () => void;
}

export function MarketplaceTradeDialog({
  card,
  ownedCards,
  isOpen,
  onClose,
}: MarketplaceTradeDialogProps) {
  if (!card) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-goinft-dark border-goinft-light sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-orbitron text-white">
            Propor Troca
          </DialogTitle>
        </DialogHeader>
        
        <div>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-6">
            <div>
              <h3 className="text-center text-white/70 mb-2">Você Recebe</h3>
              <NFTCard 
                {...card} 
                onClick={() => {}} 
                className="w-full sm:w-48"
              />
            </div>
            
            <div className="text-3xl font-bold text-white/50 px-4">
              ↔️
            </div>
            
            <div>
              <h3 className="text-center text-white/70 mb-2">Você Oferece</h3>
              <div className="w-full sm:w-48 aspect-[3/4] rounded-xl border-2 border-dashed border-goinft-light/40 bg-goinft-card/30 flex items-center justify-center">
                <span className="text-white/50 text-center p-4">
                  Selecione um card para oferecer
                </span>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-white font-orbitron mb-3">Seus Cards</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {ownedCards.map((card) => (
                <NFTCard 
                  key={card.id} 
                  {...card} 
                  onClick={() => {}} 
                />
              ))}
            </div>
          </div>
          
          <div className="flex justify-end space-x-3">
            <Button 
              variant="outline" 
              className="text-white"
              onClick={onClose}
            >
              Cancelar
            </Button>
            <Button className="bg-gradient-to-r from-neon-purple to-neon-pink text-white">
              Propor Troca
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
