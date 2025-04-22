import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Trophy } from "lucide-react";
import { CyberpunkHeading } from "@/components/ui/cyberpunk-heading";
import { AlbumGrid } from "@/components/albums/AlbumGrid";
import { AlbumDetails } from "@/components/albums/AlbumDetails";
import { AlbumProgress } from "@/components/albums/AlbumProgress";

// Mock data for albums
const albums = [
  {
    id: "1",
    name: "Paulista Feminino 2025",
    coverImage: "/lovable-uploads/3ed65cb1-f49f-4076-be44-44a53cff5153.png",
    progress: 35,
    totalCards: 32,
    collectedCards: 11,
  },
  {
    id: "2",
    name: "Copa do Brasil 2000",
    coverImage: "/lovable-uploads/c7c901dd-d2db-46de-9129-42fb4c41c341.png",
    progress: 20,
    totalCards: 40,
    collectedCards: 8,
  },
  {
    id: "3",
    name: "Sulamericana 2025",
    coverImage: "/lovable-uploads/8959e228-6687-4e32-bf1e-849b2c9ea30c.png",
    progress: 45,
    totalCards: 30,
    collectedCards: 13,
  },
  {
    id: "4",
    name: "Lendas do Futebol Feminino",
    coverImage: "https://placehold.co/800x600/1a1f2c/ffffff?text=LendasFeminino",
    progress: 10,
    totalCards: 25,
    collectedCards: 2,
  },
  {
    id: "5",
    name: "Copa São Paulo 2025",
    coverImage: "https://placehold.co/800x600/1a1f2c/ffffff?text=CopaSaoPaulo",
    progress: 0,
    totalCards: 28,
    collectedCards: 0,
  },
];

// Updated World Cup cards with Brazilian male football players
const worldCupCards = [
  {
    id: "wc1",
    name: "Neymar Jr",
    image: "https://placehold.co/600x800/1a1f2c/ffffff?text=Neymar",
    rarity: "legendary" as const,
    team: "Al Hilal",
    position: "Forward",
    isOwned: true,
  },
  {
    id: "wc2",
    name: "Vinicius Jr",
    image: "https://placehold.co/600x800/1a1f2c/ffffff?text=Vini",
    rarity: "epic" as const,
    team: "Real Madrid",
    position: "Forward",
    isOwned: true,
  },
  {
    id: "wc3",
    name: "Rodrygo",
    image: "https://placehold.co/600x800/1a1f2c/ffffff?text=Rodrygo",
    rarity: "rare" as const,
    team: "Real Madrid",
    position: "Forward",
    isOwned: true,
  },
  {
    id: "wc4",
    name: "Raphinha",
    image: "https://placehold.co/600x800/1a1f2c/ffffff?text=Raphinha",
    rarity: "epic" as const,
    team: "Barcelona",
    position: "Forward",
    isOwned: true,
  },
  {
    id: "wc5",
    name: "Casemiro",
    image: "https://placehold.co/600x800/1a1f2c/ffffff?text=Casemiro",
    rarity: "rare" as const,
    team: "Manchester United",
    position: "Midfielder",
    isOwned: false,
  },
  {
    id: "wc6",
    name: "Bruno Guimarães",
    image: "https://placehold.co/600x800/1a1f2c/ffffff?text=Bruno",
    rarity: "rare" as const,
    team: "Newcastle",
    position: "Midfielder",
    isOwned: true,
  },
  {
    id: "wc7",
    name: "Marquinhos",
    image: "https://placehold.co/600x800/1a1f2c/ffffff?text=Marquinhos",
    rarity: "rare" as const,
    team: "PSG",
    position: "Defender",
    isOwned: false,
  },
  {
    id: "wc8",
    name: "Gabriel Jesus",
    image: "https://placehold.co/600x800/1a1f2c/ffffff?text=Jesus",
    rarity: "epic" as const,
    team: "Arsenal",
    position: "Forward",
    isOwned: true,
  },
];

const Albums = () => {
  const [selectedAlbum, setSelectedAlbum] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("all-albums");

  const handleAlbumClick = (albumId: string) => {
    setSelectedAlbum(albumId);
    setActiveTab("album-view");
  };

  const handleBackToAlbums = () => {
    setSelectedAlbum(null);
    setActiveTab("all-albums");
  };

  const currentAlbum = albums.find(a => a.id === selectedAlbum);

  return (
    <div className="min-h-screen bg-goinft-dark pb-16">
      <div className="container mx-auto px-4 py-8">
        <div className="relative">
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-neon-purple/10 filter blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-neon-blue/10 filter blur-[100px] animate-pulse"></div>
          </div>
          
          <div className="absolute inset-0 bg-circuit-bg opacity-5 z-0"></div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="relative z-10">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div className="flex items-center gap-4">
                {selectedAlbum && (
                  <Button
                    variant="ghost"
                    className="text-white hover:text-neon-purple transition-colors"
                    onClick={handleBackToAlbums}
                  >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Voltar
                  </Button>
                )}
                <CyberpunkHeading 
                  size="xl"
                  variant="gradient"
                >
                  {selectedAlbum ? "Visualizar Álbum" : "Meus Álbuns"}
                </CyberpunkHeading>
              </div>
              
              <TabsList className="bg-goinft-card border border-neon-purple/20">
                {selectedAlbum && (
                  <TabsTrigger value="all-albums" onClick={handleBackToAlbums}>
                    Todos os Álbuns
                  </TabsTrigger>
                )}
                <TabsTrigger value="album-view">
                  {selectedAlbum ? "Ver Cards" : "Álbuns"}
                </TabsTrigger>
                {selectedAlbum && (
                  <TabsTrigger value="album-progress">
                    Progresso
                  </TabsTrigger>
                )}
              </TabsList>
            </div>
            
            <TabsContent value="all-albums" className="mt-0">
              <AlbumGrid albums={albums} onAlbumClick={handleAlbumClick} />
            </TabsContent>
            
            <TabsContent value="album-view" className="mt-0">
              {selectedAlbum && currentAlbum ? (
                <AlbumDetails 
                  album={currentAlbum}
                  cards={worldCupCards}
                  onBack={handleBackToAlbums}
                />
              ) : (
                <AlbumGrid albums={albums} onAlbumClick={handleAlbumClick} />
              )}
            </TabsContent>
            
            <TabsContent value="album-progress" className="mt-0">
              {selectedAlbum && currentAlbum && (
                <AlbumProgress album={currentAlbum} />
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Albums;
