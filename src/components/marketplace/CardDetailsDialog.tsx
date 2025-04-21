
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { NFTCard } from "@/components/ui/nft-card";

interface CardDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedCard: any;
  onTradeClick: () => void;
}

export function CardDetailsDialog({ 
  open, 
  onOpenChange, 
  selectedCard, 
  onTradeClick 
}: CardDetailsDialogProps) {
  if (!selectedCard) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-goinft-dark border-goinft-light sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-orbitron text-white">
            Detalhes do Card
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-64">
            <NFTCard 
              {...selectedCard} 
              onClick={() => {}} 
              className="w-full md:w-64"
            />
          </div>
          
          <div className="flex-1">
            <h2 className="text-white font-orbitron text-2xl font-bold mb-2">
              {selectedCard.name}
            </h2>
            
            <div className="grid grid-cols-2 gap-4 text-white/70 mb-6">
              <div>
                <span className="block text-sm">Time</span>
                <span className="block text-white">{selectedCard.team}</span>
              </div>
              
              <div>
                <span className="block text-sm">Posição</span>
                <span className="block text-white">{selectedCard.position}</span>
              </div>
              
              <div>
                <span className="block text-sm">Raridade</span>
                <span className="block text-white capitalize">{selectedCard.rarity}</span>
              </div>
              
              <div>
                <span className="block text-sm">ID do Card</span>
                <span className="block text-white">{selectedCard.id}</span>
              </div>
            </div>
            
            <div className="border-t border-goinft-light pt-4 mb-4">
              <div className="text-white/70 text-sm mb-2">Estatísticas do Card</div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex justify-between">
                    <span className="text-white">Velocidade</span>
                    <span className="text-white">92</span>
                  </div>
                  <div className="w-full bg-goinft-darker rounded-full h-1.5 mt-1">
                    <div className="bg-neon-purple h-1.5 rounded-full" style={{ width: "92%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between">
                    <span className="text-white">Finalização</span>
                    <span className="text-white">95</span>
                  </div>
                  <div className="w-full bg-goinft-darker rounded-full h-1.5 mt-1">
                    <div className="bg-neon-purple h-1.5 rounded-full" style={{ width: "95%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between">
                    <span className="text-white">Passe</span>
                    <span className="text-white">88</span>
                  </div>
                  <div className="w-full bg-goinft-darker rounded-full h-1.5 mt-1">
                    <div className="bg-neon-purple h-1.5 rounded-full" style={{ width: "88%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between">
                    <span className="text-white">Drible</span>
                    <span className="text-white">97</span>
                  </div>
                  <div className="w-full bg-goinft-darker rounded-full h-1.5 mt-1">
                    <div className="bg-neon-purple h-1.5 rounded-full" style={{ width: "97%" }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {'price' in selectedCard ? (
              <div className="mt-6">
                <div className="flex items-center mb-4">
                  <span className="text-white/70 mr-2">Preço:</span>
                  <span className="text-white text-xl font-bold font-orbitron">
                    {selectedCard.price} CHZ
                  </span>
                </div>
                
                <Button 
                  className="w-full py-6 bg-gradient-to-r from-neon-purple to-neon-pink text-white font-orbitron"
                >
                  Comprar Agora
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full mt-3 border-neon-purple text-white"
                  onClick={onTradeClick}
                >
                  Oferecer Troca
                </Button>
              </div>
            ) : (
              <div className="mt-6">
                <Button 
                  className="w-full py-6 bg-gradient-to-r from-neon-purple to-neon-pink text-white font-orbitron"
                >
                  Vender Card
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full mt-3 border-neon-purple text-white"
                >
                  Usar no Álbum
                </Button>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
