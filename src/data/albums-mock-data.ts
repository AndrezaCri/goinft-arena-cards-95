import { Album, AlbumCard } from "@/types/album";

export const albums: Album[] = [
  {
    id: "1",
    name: "Paulista Feminino 2025",
    coverImage: "/lovable-uploads/efdeb2b4-d53b-4f15-b23e-1a83805170f2.png", // Updated to new cyberpunk cover
    progress: 70,
    totalCards: 12,
    collectedCards: 8,
  },
  {
    id: "2",
    name: "Copa do Brasil 2000",
    coverImage: "/lovable-uploads/6e6b2306-aa13-40ce-9639-95c59c83ea9c.png", // Portuguesa
    progress: 100,
    totalCards: 40,
    collectedCards: 40,
  },
  {
    id: "3",
    name: "Sulamericana 2025",
    coverImage: "/lovable-uploads/fd7ded3b-b6d9-4e5c-bff7-a86da3f01956.png", // Santos
    progress: 100,
    totalCards: 30,
    collectedCards: 30,
  },
  {
    id: "4",
    name: "Lendas do Futebol Feminino",
    coverImage: "/lovable-uploads/5dbf01f7-195f-419e-ae8f-6cbaf4da5276.png", // São Paulo
    progress: 100,
    totalCards: 25,
    collectedCards: 25,
  },
  {
    id: "5",
    name: "Copa São Paulo 2025",
    coverImage: "/lovable-uploads/a4e016f1-6575-4096-9a6b-15d27a988dd8.png", // Ferroviária
    progress: 100,
    totalCards: 28,
    collectedCards: 28,
  },
];

export const worldCupCards: AlbumCard[] = [
  {
    id: "wc1",
    name: "Palmeiras Fem",
    image: "/lovable-uploads/0080bc04-5bbb-43d3-8bba-667ebdf80693.png", // Atualizado com a nova imagem Palmeiras neon verde
    rarity: "legendary",
    team: "Palmeiras",
    position: "Forward",
    isOwned: true,
  },
  {
    id: "wc2",
    name: "Portuguesa Fem",
    image: "/lovable-uploads/fc885b14-8717-4a8c-86aa-4a29e60b4828.png", // Atualizado com a nova imagem Portuguesa neon vermelha
    rarity: "epic",
    team: "Portuguesa",
    position: "Forward",
    isOwned: true,
  },
  {
    id: "wc3",
    name: "Santos Fem",
    image: "/lovable-uploads/229eaccc-a2ef-44cf-a6e8-c71f2e8f05dc.png", // Atualizado com a nova imagem Santos neon azul claro
    rarity: "legendary",
    team: "Santos",
    position: "Forward",
    isOwned: false,
  },
  {
    id: "wc4",
    name: "São Paulo Fem",
    image: "/lovable-uploads/720352ca-7fba-4892-9bf5-bc3aff74f0b5.png", // Atualizado com a nova imagem São Paulo neon vermelha
    rarity: "epic",
    team: "São Paulo",
    position: "Forward",
    isOwned: false,
  },
  {
    id: "wc5",
    name: "Ferroviária Fem",
    image: "/lovable-uploads/7271f199-6e1c-4d6f-8b6d-43c50a6081f1.png", // Atualizado com a nova imagem Ferroviária neon vermelha
    rarity: "rare",
    team: "Ferroviária",
    position: "Forward",
    isOwned: false,
  },
  {
    id: "wc6",
    name: "Corinthians Fem - Azul",
    image: "/lovable-uploads/9c6d96f4-1b53-403b-baa5-d6b8812d10ed.png", // Atualizado com a nova imagem Corinthians jogadora
    rarity: "rare",
    team: "Corinthians",
    position: "Forward",
    isOwned: false,
  },
  {
    id: "wc7",
    name: "Corinthians Fem - Roxo",
    image: "/lovable-uploads/17844654-5998-4c64-9dad-1cba342cba3e.png", // Atualizado com a nova imagem Corinthians neon roxo
    rarity: "rare",
    team: "Corinthians",
    position: "Forward",
    isOwned: false,
  },
  {
    id: "wc8",
    name: "Corinthians Fem - Atleta",
    image: "/lovable-uploads/cdeb02f9-00e3-439a-b98d-22b8f5b19b96.png",
    rarity: "epic",
    team: "Corinthians",
    position: "Forward",
    isOwned: false,
  },
  {
    id: "wc9",
    name: "Corinthians Fem - Mundial",
    image: "/lovable-uploads/0fa8db7a-a961-4216-a60b-36b363c4e570.png", // Atualizado com a nova imagem Corinthians neon azul
    rarity: "legendary",
    team: "Corinthians",
    position: "Forward",
    isOwned: false,
  },
];
