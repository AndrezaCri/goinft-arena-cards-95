import { useState } from "react";
import { AlbumCard } from "@/components/ui/album-card";
import { NFTCard } from "@/components/ui/nft-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Trophy } from "lucide-react";
import { CyberpunkHeading } from "@/components/ui/cyberpunk-heading";

// Mock data for albums
const albums = [
  {
    id: "1",
    name: "Paulista Feminino 2025",
    coverImage: "https://placehold.co/800x600/1a1f2c/ffffff?text=PaulistaFeminino",
    progress: 35,
    totalCards: 32,
    collectedCards: 11,
  },
  {
    id: "2",
    name: "Copa do Brasil 2000",
    coverImage: "https://placehold.co/800x600/1a1f2c/ffffff?text=CopaDoBrasil",
    progress: 20,
    totalCards: 40,
    collectedCards: 8,
  },
  {
    id: "3",
    name: "Sulamericana 2025",
    coverImage: "https://placehold.co/800x600/1a1f2c/ffffff?text=Sulamericana",
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

// Mock data for album cards (World Cup 2026)
const worldCupCards = [
  {
    id: "wc1",
    name: "Lionel Messi",
    image: "https://placehold.co/600x800/1a1f2c/ffffff?text=Messi",
    rarity: "legendary" as const,
    team: "Argentina",
    position: "Forward",
    isOwned: true,
  },
  {
    id: "wc2",
    name: "Cristiano Ronaldo",
    image: "https://placehold.co/600x800/1a1f2c/ffffff?text=Ronaldo",
    rarity: "epic" as const,
    team: "Portugal",
    position: "Forward",
    isOwned: true,
  },
  {
    id: "wc3",
    name: "Kylian Mbappé",
    image: "https://placehold.co/600x800/1a1f2c/ffffff?text=Mbappe",
    rarity: "rare" as const,
    team: "France",
    position: "Forward",
    isOwned: true,
  },
  {
    id: "wc4",
    name: "Neymar Jr",
    image: "https://placehold.co/600x800/1a1f2c/ffffff?text=Neymar",
    rarity: "epic" as const,
    team: "Brazil",
    position: "Forward",
    isOwned: true,
  },
  {
    id: "wc5",
    name: "Erling Haaland",
    image: "https://placehold.co/600x800/1a1f2c/ffffff?text=Haaland",
    rarity: "rare" as const,
    team: "Norway",
    position: "Forward",
    isOwned: false,
  },
  {
    id: "wc6",
    name: "Kevin De Bruyne",
    image: "https://placehold.co/600x800/1a1f2c/ffffff?text=DeBruyne",
    rarity: "rare" as const,
    team: "Belgium",
    position: "Midfielder",
    isOwned: true,
  },
  {
    id: "wc7",
    name: "Virgil van Dijk",
    image: "https://placehold.co/600x800/1a1f2c/ffffff?text=VanDijk",
    rarity: "rare" as const,
    team: "Netherlands",
    position: "Defender",
    isOwned: false,
  },
  {
    id: "wc8",
    name: "Luka Modric",
    image: "https://placehold.co/600x800/1a1f2c/ffffff?text=Modric",
    rarity: "epic" as const,
    team: "Croatia",
    position: "Midfielder",
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {albums.map((album) => (
                  <AlbumCard 
                    key={album.id} 
                    {...album} 
                    onClick={() => handleAlbumClick(album.id)} 
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="album-view" className="mt-0">
              {selectedAlbum ? (
                <>
                  <div className="bg-goinft-card rounded-xl p-6 mb-8 border border-neon-purple/30 relative overflow-hidden group">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 relative z-10">
                      <div className="w-full sm:w-64 relative group">
                        <img 
                          src={albums.find(a => a.id === selectedAlbum)?.coverImage} 
                          alt={albums.find(a => a.id === selectedAlbum)?.name}
                          className="w-full h-auto rounded-lg border border-neon-purple/30 transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-lg"></div>
                      </div>
                      
                      <div className="flex-1">
                        <h2 className="text-white font-orbitron text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-purple to-neon-blue">
                          {albums.find(a => a.id === selectedAlbum)?.name}
                        </h2>
                        
                        <div className="grid grid-cols-2 gap-4 text-white/70 mb-6">
                          <div className="cyberpunk-card p-4">
                            <span className="block text-sm text-neon-purple/70">Total de Cards</span>
                            <span className="block text-xl font-bold text-white">
                              {albums.find(a => a.id === selectedAlbum)?.totalCards}
                            </span>
                          </div>
                          
                          <div className="cyberpunk-card p-4">
                            <span className="block text-sm text-neon-blue/70">Colecionados</span>
                            <span className="block text-xl font-bold text-white">
                              {albums.find(a => a.id === selectedAlbum)?.collectedCards}
                            </span>
                          </div>
                          
                          <div className="cyberpunk-card p-4">
                            <span className="block text-sm text-neon-pink/70">Progresso</span>
                            <span className="block text-xl font-bold text-white">
                              {Math.round(albums.find(a => a.id === selectedAlbum)?.progress || 0)}%
                            </span>
                          </div>
                          
                          <div className="cyberpunk-card p-4">
                            <span className="block text-sm text-neon-green/70">Faltando</span>
                            <span className="block text-xl font-bold text-white">
                              {(albums.find(a => a.id === selectedAlbum)?.totalCards || 0) - 
                               (albums.find(a => a.id === selectedAlbum)?.collectedCards || 0)}
                            </span>
                          </div>
                        </div>
                        
                        <div className="w-full bg-goinft-darker rounded-full h-2.5 mb-6 relative overflow-hidden">
                          <div 
                            className="absolute inset-0 bg-gradient-to-r from-neon-purple via-neon-blue to-neon-pink h-2.5"
                            style={{ width: `${albums.find(a => a.id === selectedAlbum)?.progress}%` }}
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
                  
                  <h3 className="text-white font-orbitron text-xl font-bold mb-6 flex items-center gap-2">
                    <Trophy className="w-6 h-6 text-neon-purple" />
                    Cards do Álbum
                  </h3>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {worldCupCards.map((card) => (
                      <NFTCard key={card.id} {...card} />
                    ))}
                    
                    {Array.from({ length: 4 }).map((_, index) => (
                      <div 
                        key={`empty-${index}`} 
                        className="aspect-[3/4] rounded-xl border-2 border-dashed border-neon-purple/30 bg-goinft-card/50 flex items-center justify-center group hover:border-neon-purple/50 transition-colors duration-300"
                      >
                        <span className="text-white/30 font-orbitron group-hover:text-white/50 transition-colors duration-300">
                          Espaço Vazio
                        </span>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {albums.map((album) => (
                    <AlbumCard 
                      key={album.id} 
                      {...album} 
                      onClick={() => handleAlbumClick(album.id)} 
                    />
                  ))}
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="album-progress" className="mt-0">
              {selectedAlbum && (
                <div className="bg-goinft-card rounded-xl p-6 border border-neon-purple/30">
                  <h3 className="text-white font-orbitron text-xl font-bold mb-6">
                    Progresso de Conclusão do Álbum
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-white font-medium">Cards Comuns</span>
                        <span className="text-white/70">8/12</span>
                      </div>
                      <div className="w-full bg-goinft-darker rounded-full h-2.5 overflow-hidden">
                        <div className="bg-gray-400 h-2.5 animate-pulse" style={{ width: "66.6%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-white font-medium">Cards Raros</span>
                        <span className="text-white/70">3/10</span>
                      </div>
                      <div className="w-full bg-goinft-darker rounded-full h-2.5 overflow-hidden">
                        <div className="bg-neon-blue h-2.5 animate-pulse" style={{ width: "30%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-white font-medium">Cards Épicos</span>
                        <span className="text-white/70">2/7</span>
                      </div>
                      <div className="w-full bg-goinft-darker rounded-full h-2.5 overflow-hidden">
                        <div className="bg-neon-purple h-2.5 animate-pulse" style={{ width: "28.5%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-white font-medium">Cards Lendários</span>
                        <span className="text-white/70">1/3</span>
                      </div>
                      <div className="w-full bg-goinft-darker rounded-full h-2.5 overflow-hidden">
                        <div className="bg-neon-pink h-2.5 animate-pulse" style={{ width: "33.3%" }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-goinft-light/20 rounded-lg border border-neon-purple/30">
                    <h4 className="text-white font-orbitron font-bold mb-4">Recompensas do Álbum</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center justify-between p-2 bg-goinft-card/50 rounded-lg">
                        <span className="text-white/70">50% Completo</span>
                        <span className="px-3 py-1 rounded-full bg-neon-purple/20 text-neon-purple text-xs font-medium">
                          Card Especial
                        </span>
                      </li>
                      <li className="flex items-center justify-between p-2 bg-goinft-card/50 rounded-lg">
                        <span className="text-white/70">75% Completo</span>
                        <span className="px-3 py-1 rounded-full bg-neon-blue/20 text-neon-blue text-xs font-medium">
                          10 CHZ Tokens
                        </span>
                      </li>
                      <li className="flex items-center justify-between p-2 bg-goinft-card/50 rounded-lg">
                        <span className="text-white/70">100% Completo</span>
                        <span className="px-3 py-1 rounded-full bg-neon-pink/20 text-neon-pink text-xs font-medium">
                          NFT Exclusivo
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Albums;
