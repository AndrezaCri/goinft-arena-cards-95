
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NFTCard } from "@/components/ui/nft-card";
import { AlbumCard } from "@/components/ui/album-card";
import { PackCard } from "@/components/ui/pack-card";

// Mock data for dashboard
const recentNFTs = [
  {
    id: "1",
    name: "Ana Silva",
    image: "https://placehold.co/600x800/1a1f2c/ffffff?text=Ana",
    rarity: "legendary" as const,
    team: "Corinthians",
    position: "Atacante",
    isNew: true,
  },
  {
    id: "2",
    name: "Pedro Santos",
    image: "https://placehold.co/600x800/1a1f2c/ffffff?text=Pedro",
    rarity: "epic" as const,
    team: "São Paulo",
    position: "Atacante",
    isNew: true,
  },
  {
    id: "3",
    name: "Mariana Costa",
    image: "https://placehold.co/600x800/1a1f2c/ffffff?text=Mariana",
    rarity: "rare" as const,
    team: "Palmeiras",
    position: "Meia",
    isNew: false,
  },
];

const featuredAlbums = [
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
    name: "Copa São Paulo",
    coverImage: "/lovable-uploads/fa413546-ff6e-44d1-a74a-edfe85745477.png",
    progress: 20,
    totalCards: 40,
    collectedCards: 8,
  },
];

const featuredPacks = [
  {
    id: "1",
    name: "Standard Pack",
    image: "https://placehold.co/800x600/1a1f2c/ffffff?text=StandardPack",
    description: "Contains 5 random player cards",
    price: 10,
    cardsCount: 5,
    type: "common" as const,
  },
  {
    id: "2",
    name: "Premium Pack",
    image: "https://placehold.co/800x600/1a1f2c/ffffff?text=PremiumPack",
    description: "Higher chance of rare players",
    price: 25,
    cardsCount: 5,
    type: "rare" as const,
  },
];

const Dashboard = () => {
  const [walletBalance] = useState(100);

  return (
    <div className="min-h-screen bg-goinft-dark pb-16">
      {/* Hero Banner */}
      <div className="relative h-[420px] bg-gradient-to-r from-goinft-darker to-goinft-dark overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-neon-purple/30 filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-neon-pink/30 filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 h-full flex flex-col md:flex-row items-center justify-between gap-8 py-12">
          <div className="flex-1 text-left">
            <h1 className="text-white font-orbitron text-5xl font-bold mb-4 bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
              Bem-vindo ao GoINFT
            </h1>
            <p className="text-white/70 text-lg max-w-xl mb-8 leading-relaxed">
              Colecione cartões únicos dos seus jogadores favoritos e complete álbuns digitais exclusivos!
            </p>
            
            <div className="inline-flex items-center gap-4 bg-goinft-card/50 backdrop-blur-sm rounded-lg py-3 px-6 border border-neon-purple/20">
              <span className="font-orbitron text-white/90">Saldo da Carteira:</span>
              <span className="font-bold text-neon-purple">{walletBalance} CHZ</span>
            </div>
          </div>

          <div className="relative w-full md:w-[500px] h-[300px]">
            <img
              src="/lovable-uploads/e7bd521b-75c6-4c78-817b-74fff9947c90.png"
              alt="Soccer Player NFT Card"
              className="w-full h-full object-contain animate-float"
            />
          </div>
        </div>
      </div>
      
      {/* Dashboard Content */}
      <div className="container mx-auto px-4 -mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Link to="/albums" className="cyberpunk-card p-6 text-center hover:scale-105 transition-all duration-300">
            <h3 className="text-white font-orbitron text-lg font-bold mb-2">Meus Álbuns</h3>
            <p className="text-white/70 text-sm mb-4">
              Visualize e complete suas coleções de álbuns
            </p>
            <Button variant="outline" className="border-neon-purple text-white hover:bg-neon-purple/20">
              Ver Álbuns
            </Button>
          </Link>
          
          <Link to="/marketplace" className="cyberpunk-card p-6 text-center hover:scale-105 transition-all duration-300">
            <h3 className="text-white font-orbitron text-lg font-bold mb-2">Mercado</h3>
            <p className="text-white/70 text-sm mb-4">
              Compre, venda e troque cartas com outros
            </p>
            <Button variant="outline" className="border-neon-purple text-white hover:bg-neon-purple/20">
              Ir para o Mercado
            </Button>
          </Link>
          
          <Link to="/packs" className="cyberpunk-card p-6 text-center hover:scale-105 transition-all duration-300">
            <h3 className="text-white font-orbitron text-lg font-bold mb-2">Comprar Pacotes</h3>
            <p className="text-white/70 text-sm mb-4">
              Obtenha novas cartas para expandir sua coleção
            </p>
            <Button variant="outline" className="border-neon-purple text-white hover:bg-neon-purple/20">
              Comprar Pacotes
            </Button>
          </Link>
          
          <Link to="/profile" className="cyberpunk-card p-6 text-center hover:scale-105 transition-all duration-300">
            <h3 className="text-white font-orbitron text-lg font-bold mb-2">Meu Perfil</h3>
            <p className="text-white/70 text-sm mb-4">
              Visualize suas estatísticas e progresso da coleção
            </p>
            <Button variant="outline" className="border-neon-purple text-white hover:bg-neon-purple/20">
              Ver Perfil
            </Button>
          </Link>
        </div>
        
        {/* Recent NFTs */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-white font-orbitron text-2xl font-bold">Adições Recentes</h2>
            <Link to="/collection" className="text-neon-purple flex items-center font-orbitron text-sm hover:text-neon-pink transition-colors">
              Ver Todos <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {recentNFTs.map((nft) => (
              <NFTCard key={nft.id} {...nft} />
            ))}
          </div>
        </section>
        
        {/* Featured Albums */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-white font-orbitron text-2xl font-bold">Álbuns em Destaque</h2>
            <Link to="/albums" className="text-neon-purple flex items-center font-orbitron text-sm hover:text-neon-pink transition-colors">
              Ver Todos <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredAlbums.map((album) => (
              <AlbumCard key={album.id} {...album} />
            ))}
          </div>
        </section>
        
        {/* Featured Packs */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-white font-orbitron text-2xl font-bold">Pacotes em Destaque</h2>
            <Link to="/packs" className="text-neon-purple flex items-center font-orbitron text-sm hover:text-neon-pink transition-colors">
              Ver Todos <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {featuredPacks.map((pack) => (
              <PackCard key={pack.id} {...pack} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
