import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MarketplaceCardList } from "@/components/marketplace/MarketplaceCardList";
import { MarketplaceFilters } from "@/components/marketplace/MarketplaceFilters";
import { MarketplaceCardDetailsDialog } from "@/components/marketplace/MarketplaceCardDetailsDialog";
import { MarketplaceTradeDialog } from "@/components/marketplace/MarketplaceTradeDialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MarketplaceCard } from "@/types/marketplace";

const marketplaceCards = [
  {
    id: "m1",
    name: "Barcelona Star",
    image: "/lovable-uploads/326d120a-eaaa-4ae7-b92f-5881811345ab.png",
    playerImage: "/lovable-uploads/326d120a-eaaa-4ae7-b92f-5881811345ab.png",
    rarity: "legendary" as const,
    team: "Barcelona",
    position: "Atacante",
    price: 100,
  },
  {
    id: "m2",
    name: "Barcelona Forward",
    image: "/lovable-uploads/d9140fa2-0a1d-43c3-b0a7-58d2465593b5.png",
    playerImage: "/lovable-uploads/d9140fa2-0a1d-43c3-b0a7-58d2465593b5.png",
    rarity: "epic" as const,
    team: "Barcelona",
    position: "Atacante",
    price: 75,
  },
  {
    id: "m3",
    name: "Barcelona Midfielder",
    image: "/lovable-uploads/506f8852-1303-4875-ae3d-6068e947cb1d.png",
    playerImage: "/lovable-uploads/506f8852-1303-4875-ae3d-6068e947cb1d.png",
    rarity: "rare" as const,
    team: "Barcelona",
    position: "Meio-Campo",
    price: 50,
  },
  {
    id: "m4",
    name: "Barsena",
    image: "/lovable-uploads/4263efde-699d-4758-a229-b5e15b0b60dd.png",
    playerImage: "/lovable-uploads/4263efde-699d-4758-a229-b5e15b0b60dd.png",
    rarity: "epic" as const,
    team: "Barcelona",
    position: "Meio-Campo",
    price: 60,
  },
  {
    id: "m5",
    name: "Ioota BB Lorio",
    image: "/lovable-uploads/9832dfdf-6d17-4325-8a48-c213e974b590.png",
    playerImage: "/lovable-uploads/9832dfdf-6d17-4325-8a48-c213e974b590.png",
    rarity: "epic" as const,
    team: "Barcelona",
    position: "Meio-Campo",
    price: 70,
  },
  {
    id: "m6",
    name: "Catibal",
    image: "/lovable-uploads/e29f7503-47fa-4f39-a6e6-d80e60975d62.png",
    playerImage: "/lovable-uploads/e29f7503-47fa-4f39-a6e6-d80e60975d62.png",
    rarity: "rare" as const,
    team: "Barcelona",
    position: "Atacante",
    price: 45,
  },
  {
    id: "m7",
    name: "Fiatu",
    image: "/lovable-uploads/83efb069-d2ec-496b-81f2-330f7015674f.png",
    playerImage: "/lovable-uploads/83efb069-d2ec-496b-81f2-330f7015674f.png",
    rarity: "epic" as const,
    team: "Barcelona",
    position: "Atacante",
    price: 65,
  },
  {
    id: "m8",
    name: "Rotte",
    image: "/lovable-uploads/c0d8c9e1-73d1-408e-8931-a00e77136d8d.png",
    playerImage: "/lovable-uploads/c0d8c9e1-73d1-408e-8931-a00e77136d8d.png",
    rarity: "rare" as const,
    team: "Barcelona",
    position: "Meio-Campo",
    price: 40,
  },
  {
    id: "m9",
    name: "Barcelona Goalkeeper",
    image: "/lovable-uploads/920baa56-b00d-43ea-8372-f544a6ca420e.png",
    playerImage: "/lovable-uploads/920baa56-b00d-43ea-8372-f544a6ca420e.png",
    rarity: "legendary" as const,
    team: "Barcelona",
    position: "Goleiro",
    price: 85,
  },
  {
    id: "m10",
    name: "Barador",
    image: "/lovable-uploads/e8cc150f-670e-4639-8235-bfd8df7e7551.png",
    playerImage: "/lovable-uploads/e8cc150f-670e-4639-8235-bfd8df7e7551.png",
    rarity: "legendary" as const,
    team: "Barcelona",
    position: "Meio-Campo",
    price: 130,
  },
  {
    id: "m11",
    name: "Barcelona Star",
    image: "/lovable-uploads/326d120a-eaaa-4ae7-b92f-5881811345ab.png",
    playerImage: "/lovable-uploads/326d120a-eaaa-4ae7-b92f-5881811345ab.png",
    rarity: "legendary" as const,
    team: "Barcelona",
    position: "Atacante",
    price: 100,
  },
  {
    id: "m12",
    name: "Barcelona Forward",
    image: "/lovable-uploads/d9140fa2-0a1d-43c3-b0a7-58d2465593b5.png",
    playerImage: "/lovable-uploads/d9140fa2-0a1d-43c3-b0a7-58d2465593b5.png",
    rarity: "epic" as const,
    team: "Barcelona",
    position: "Atacante",
    price: 75,
  }
];

const ownedCards = [
  {
    id: "o1",
    name: "Barcelona Legend",
    image: "/lovable-uploads/f71a92ea-61b6-45ba-9ec3-f8dcddc3e308.png",
    playerImage: "/lovable-uploads/f71a92ea-61b6-45ba-9ec3-f8dcddc3e308.png",
    rarity: "legendary" as const,
    team: "Barcelona",
    position: "Atacante",
    isOwned: true,
  },
  {
    id: "o2",
    name: "Barcelona Striker",
    image: "/lovable-uploads/b709815b-18b5-4688-aaaf-2fbfba8a575c.png",
    playerImage: "/lovable-uploads/b709815b-18b5-4688-aaaf-2fbfba8a575c.png",
    rarity: "epic" as const,
    team: "Barcelona",
    position: "Atacante",
    isOwned: true,
  }
];

const positions = ["Atacante", "Meio-Campo", "Defensor", "Goleiro"];
const rarities = ["comum", "raro", "épico", "lendário"];

const Marketplace = () => {
  const [detailsDialogOpen, setDetailsDialogOpen] = useState(false);
  const [tradeDialogOpen, setTradeDialogOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<MarketplaceCard | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPositions, setSelectedPositions] = useState<string[]>([]);
  const [selectedRarities, setSelectedRarities] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });
  const [showFilters, setShowFilters] = useState(false);

  const handleOpenCardDetails = (card: MarketplaceCard) => {
    setSelectedCard(card);
    setDetailsDialogOpen(true);
  };

  const handleOpenTradeDialog = () => {
    setDetailsDialogOpen(false);
    setTradeDialogOpen(true);
  };

  const filteredCards = marketplaceCards.filter(card => {
    if (searchQuery && !card.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    if (selectedPositions.length > 0 && !selectedPositions.includes(card.position)) {
      return false;
    }
    
    if (selectedRarities.length > 0 && !selectedRarities.includes(card.rarity)) {
      return false;
    }
    
    if (card.price && (card.price < priceRange.min || card.price > priceRange.max)) {
      return false;
    }
    
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-goinft-darker to-goinft-dark pb-16">
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="buy" className="space-y-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-goinft-card/30 p-6 rounded-xl backdrop-blur-sm border border-neon-purple/20">
            <div>
              <h1 className="text-white font-orbitron text-3xl font-bold bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
                Mercado NFT
              </h1>
              <p className="text-white/70 mt-1">
                Compre, venda e troque cards com outros colecionadores
              </p>
            </div>
            
            <TabsList className="bg-goinft-card border border-neon-purple/30">
              <TabsTrigger value="buy" className="data-[state=active]:bg-gradient-to-r from-neon-purple to-neon-pink data-[state=active]:text-white">
                Comprar
              </TabsTrigger>
              <TabsTrigger value="sell" className="data-[state=active]:bg-gradient-to-r from-neon-purple to-neon-pink data-[state=active]:text-white">
                Vender
              </TabsTrigger>
              <TabsTrigger value="trade" className="data-[state=active]:bg-gradient-to-r from-neon-purple to-neon-pink data-[state=active]:text-white">
                Trocar
              </TabsTrigger>
            </TabsList>
          </div>
          
          <MarketplaceFilters 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedPositions={selectedPositions}
            setSelectedPositions={setSelectedPositions}
            selectedRarities={selectedRarities}
            setSelectedRarities={setSelectedRarities}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            showFilters={showFilters}
            setShowFilters={setShowFilters}
          />
          
          <TabsContent value="buy" className="mt-0">
            <MarketplaceCardList 
              cards={filteredCards}
              onCardClick={handleOpenCardDetails}
            />
          </TabsContent>
          
          <TabsContent value="sell" className="mt-0">
            <MarketplaceCardList 
              cards={ownedCards}
              onCardClick={handleOpenCardDetails}
            />
          </TabsContent>
          
          <TabsContent value="trade" className="mt-0">
            <div className="bg-goinft-card rounded-xl p-6 mb-6">
              <h2 className="text-white font-orbitron text-xl font-bold mb-4">
                Sistema de Trocas
              </h2>
              
              <p className="text-white/70 mb-4">
                Troque seus cards com outros colecionadores. Encontre alguém que tenha o card que você precisa 
                e ofereça um dos seus cards em troca.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-white font-medium mb-2">Seus Cards</h3>
                  <div className="bg-goinft-dark/50 p-4 rounded-lg">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {ownedCards.slice(0, 3).map((card) => (
                        <NFTCard 
                          key={card.id} 
                          {...card} 
                          onClick={() => {}} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-white font-medium mb-2">Cards Desejados</h3>
                  <div className="bg-goinft-dark/50 p-4 rounded-lg">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {marketplaceCards.slice(0, 3).map((card) => (
                        <NFTCard 
                          key={card.id} 
                          {...card} 
                          onClick={() => {}} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <Button className="bg-gradient-to-r from-neon-purple to-neon-pink text-white">
                  Propor Troca
                </Button>
              </div>
            </div>
            
            <h2 className="text-white font-orbitron text-xl font-bold mb-4">
              Ofertas de Troca Abertas
            </h2>
            
            <div className="space-y-4">
              <div className="bg-goinft-card rounded-xl p-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white/70 mr-2">Troca #28754</span>
                  <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs font-medium">
                    Aberta
                  </span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <span className="text-white/70 block mb-2">Eles oferecem:</span>
                    <div className="flex items-center space-x-2">
                      <img 
                        src="https://placehold.co/600x800/1a1f2c/ffffff?text=AnaSilva" 
                        alt="Card" 
                        className="w-12 h-16 rounded"
                      />
                      <div>
                        <span className="text-white block">Ana Silva</span>
                        <span className="text-white/50 text-xs">Lendário</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <span className="text-white/70 block mb-2">Pelo seu:</span>
                    <div className="flex items-center space-x-2">
                      <img 
                        src="https://placehold.co/600x800/1a1f2c/ffffff?text=JuliaSantos" 
                        alt="Card" 
                        className="w-12 h-16 rounded"
                      />
                      <div>
                        <span className="text-white block">Julia Santos</span>
                        <span className="text-white/50 text-xs">Raro</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-end space-x-3">
                  <Button variant="outline" className="text-white">
                    Recusar
                  </Button>
                  <Button className="bg-gradient-to-r from-neon-purple to-neon-pink text-white">
                    Aceitar
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <MarketplaceCardDetailsDialog
        card={selectedCard}
        isOpen={detailsDialogOpen}
        onClose={() => setDetailsDialogOpen(false)}
        onTradeClick={handleOpenTradeDialog}
      />
      
      <MarketplaceTradeDialog
        card={selectedCard}
        ownedCards={ownedCards}
        isOpen={tradeDialogOpen}
        onClose={() => setTradeDialogOpen(false)}
      />
    </div>
  );
};

export default Marketplace;
