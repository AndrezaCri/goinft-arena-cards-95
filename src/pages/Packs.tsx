import { useState } from "react";
import { PackCard } from "@/components/ui/pack-card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { NFTCard } from "@/components/ui/nft-card";
import { CyberpunkHeading } from "@/components/ui/cyberpunk-heading";

const packData = [
  {
    id: "1",
    name: "Pacote Padrão",
    image: "https://placehold.co/800x600/1a1f2c/ffffff?text=PacotePadr%C3%A3o",
    description: "Contém 5 cartas de jogadores aleatórias",
    price: 10,
    cardsCount: 5,
    type: "common" as const,
  },
  {
    id: "2",
    name: "Pacote Premium",
    image: "https://placehold.co/800x600/1a1f2c/ffffff?text=PacotePremium",
    description: "Maior chance de jogadores raros",
    price: 25,
    cardsCount: 5,
    type: "rare" as const,
  },
  {
    id: "3",
    name: "Pacote América do Sul",
    image: "https://placehold.co/800x600/1a1f2c/ffffff?text=PacoteAmericaSul",
    description: "Cartas temáticas da América do Sul",
    price: 30,
    cardsCount: 5,
    type: "themed" as const,
  },
  {
    id: "4",
    name: "Pacote Lendas",
    image: "https://placehold.co/800x600/1a1f2c/ffffff?text=PacoteLendas",
    description: "Contém cartas de lendas do futebol",
    price: 50,
    cardsCount: 5,
    type: "themed" as const,
  }
];

const packCards = [
  {
    id: "wc1",
    name: "Lionel Messi",
    image: "https://placehold.co/600x800/1a1f2c/ffffff?text=Messi",
    rarity: "legendary" as const,
    team: "Argentina",
    position: "Forward",
    isNew: true,
  },
  {
    id: "wc2",
    name: "Cristiano Ronaldo",
    image: "https://placehold.co/600x800/1a1f2c/ffffff?text=Ronaldo",
    rarity: "epic" as const,
    team: "Portugal",
    position: "Forward",
    isNew: true,
  },
  {
    id: "wc3",
    name: "Neymar Jr",
    image: "https://placehold.co/600x800/1a1f2c/ffffff?text=Neymar",
    rarity: "rare" as const,
    team: "Brazil",
    position: "Forward",
    isNew: true,
  },
  {
    id: "wc4",
    name: "Kevin De Bruyne",
    image: "https://placehold.co/600x800/1a1f2c/ffffff?text=DeBruyne",
    rarity: "rare" as const,
    team: "Belgium",
    position: "Midfielder",
    isNew: true,
  },
  {
    id: "wc5",
    name: "Erling Haaland",
    image: "https://placehold.co/600x800/1a1f2c/ffffff?text=Haaland",
    rarity: "common" as const,
    team: "Norway",
    position: "Forward",
    isNew: true,
  },
];

const Packs = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [openingPack, setOpeningPack] = useState(false);
  const [revealedCards, setRevealedCards] = useState<number[]>([]);
  const [selectedPack, setSelectedPack] = useState<typeof packData[0] | null>(null);

  const handleOpenPack = (pack: typeof packData[0]) => {
    setSelectedPack(pack);
    setDialogOpen(true);
    setOpeningPack(true);
    setRevealedCards([]);
    
    setTimeout(() => {
      setOpeningPack(false);
    }, 2000);
  };

  const handleRevealCard = (index: number) => {
    setRevealedCards((prev) => [...prev, index]);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setRevealedCards([]);
    setSelectedPack(null);
  };

  return (
    <div className="min-h-screen bg-goinft-dark pb-16">
      <div className="container mx-auto px-4 py-12">
        <div className="space-y-6 mb-12">
          <CyberpunkHeading 
            size="xl" 
            variant="gradient" 
            className="text-center"
            withLinesDecoration
          >
            Pacotes de Cartas
          </CyberpunkHeading>
          
          <div className="flex justify-center">
            <div className="bg-goinft-card px-6 py-3 rounded-xl border border-neon-purple/30 shadow-lg backdrop-blur-sm">
              <span className="font-orbitron text-white/80">Saldo:</span>
              <span className="font-orbitron text-neon-purple font-bold ml-3">100 CHZ</span>
            </div>
          </div>
          
          <p className="text-white/70 max-w-3xl mx-auto text-center text-lg">
            Compre pacotes para expandir sua coleção. Cada pacote contém uma seleção aleatória 
            de cartas de jogadores com raridades variadas. Abra pacotes para revelar suas novas 
            cartas e adicioná-las à sua coleção.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {packData.map((pack) => (
            <PackCard 
              key={pack.id} 
              {...pack} 
              onClick={() => handleOpenPack(pack)} 
            />
          ))}
        </div>
      </div>
      
      <Dialog open={dialogOpen} onOpenChange={handleCloseDialog}>
        <DialogContent className="bg-goinft-dark border-neon-purple/50 sm:max-w-4xl">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-orbitron bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
              {openingPack ? "Abrindo Pacote..." : "Suas Novas Cartas!"}
            </DialogTitle>
          </DialogHeader>
          
          <div className="py-6">
            {openingPack ? (
              <div className="flex flex-col items-center justify-center py-16">
                <div className="w-48 h-64 bg-gradient-to-r from-neon-purple to-neon-pink rounded-xl animate-pulse-glow flex items-center justify-center">
                  <img 
                    src={selectedPack?.image} 
                    alt="Pack" 
                    className="w-32 h-32 animate-float"
                  />
                </div>
                <p className="mt-8 text-white font-orbitron animate-pulse">
                  Revelando suas cartas...
                </p>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4">
                  {packCards.map((card, index) => (
                    <div key={card.id} className="relative">
                      {revealedCards.includes(index) ? (
                        <NFTCard {...card} className="animate-card-reveal" />
                      ) : (
                        <div 
                          onClick={() => handleRevealCard(index)}
                          className="aspect-[3/4] rounded-xl bg-gradient-to-r from-neon-purple to-neon-pink cursor-pointer transform hover:scale-105 transition-all duration-300"
                        >
                          <div className="w-full h-full bg-goinft-card m-0.5 rounded-lg flex items-center justify-center p-4">
                            <span className="text-white/90 font-orbitron text-center">
                              Clique para Revelar
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-center">
                  <Button 
                    className="bg-gradient-to-r from-neon-purple to-neon-pink hover:opacity-90 font-orbitron px-8 py-6"
                    onClick={handleCloseDialog}
                  >
                    Concluído
                  </Button>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Packs;
