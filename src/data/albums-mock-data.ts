
import { Album, AlbumCard } from "@/types/album";

export const albums: Album[] = [
  {
    id: "1",
    name: "Paulista Feminino 2025",
    coverImage: "/lovable-uploads/a92218ae-3952-4fd1-83c0-443361b2838d.png", // Palmeiras
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
  {
    id: "6",
    name: "Campeonato Brasileiro 2025",
    coverImage: "/lovable-uploads/f9929074-04ed-4bb7-8be6-8ede5133f460.png", // Corinthians Azul
    progress: 85,
    totalCards: 20,
    collectedCards: 17,
  },
  {
    id: "7",
    name: "Champions League 2025",
    coverImage: "/lovable-uploads/cdeb02f9-00e3-439a-b98d-22b8f5b19b96.png", // Corinthians atleta
    progress: 65,
    totalCards: 18,
    collectedCards: 12,
  },
  {
    id: "8",
    name: "Copa Feminina 2025",
    coverImage: "/lovable-uploads/675d76af-fadf-439d-b9ad-748450ddc027.png", // Corinthians Roxo
    progress: 45,
    totalCards: 22,
    collectedCards: 10,
  },
  {
    id: "9",
    name: "Mundial de Clubes 2025",
    coverImage: "/lovable-uploads/e705d9ff-bc2e-4ace-a4e6-ef2511d34a56.png", // Corinthians novamente
    progress: 30,
    totalCards: 15,
    collectedCards: 5,
  },
];

export const worldCupCards: AlbumCard[] = [
  {
    id: "wc1",
    name: "Palmeiras Fem",
    image: "/lovable-uploads/a92218ae-3952-4fd1-83c0-443361b2838d.png",
    rarity: "legendary",
    team: "Palmeiras",
    position: "Forward",
    isOwned: true,
  },
  {
    id: "wc2",
    name: "Portuguesa Fem",
    image: "/lovable-uploads/6e6b2306-aa13-40ce-9639-95c59c83ea9c.png",
    rarity: "epic",
    team: "Portuguesa",
    position: "Forward",
    isOwned: true,
  },
  {
    id: "wc3",
    name: "Santos Fem",
    image: "/lovable-uploads/fd7ded3b-b6d9-4e5c-bff7-a86da3f01956.png",
    rarity: "legendary",
    team: "Santos",
    position: "Forward",
    isOwned: false,
  },
  {
    id: "wc4",
    name: "São Paulo Fem",
    image: "/lovable-uploads/5dbf01f7-195f-419e-ae8f-6cbaf4da5276.png",
    rarity: "epic",
    team: "São Paulo",
    position: "Forward",
    isOwned: false,
  },
  {
    id: "wc5",
    name: "Ferroviária Fem",
    image: "/lovable-uploads/a4e016f1-6575-4096-9a6b-15d27a988dd8.png",
    rarity: "rare",
    team: "Ferroviária",
    position: "Forward",
    isOwned: false,
  },
  {
    id: "wc6",
    name: "Corinthians Fem - Azul",
    image: "/lovable-uploads/f9929074-04ed-4bb7-8be6-8ede5133f460.png",
    rarity: "rare",
    team: "Corinthians",
    position: "Forward",
    isOwned: false,
  },
  {
    id: "wc7",
    name: "Corinthians Fem - Roxo",
    image: "/lovable-uploads/675d76af-fadf-439d-b9ad-748450ddc027.png",
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
    image: "/lovable-uploads/e705d9ff-bc2e-4ace-a4e6-ef2511d34a56.png",
    rarity: "legendary",
    team: "Corinthians",
    position: "Forward",
    isOwned: false,
  },
];
