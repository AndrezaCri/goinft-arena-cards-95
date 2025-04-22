
interface MarketplaceNFT {
  id: string;
  name: string;
  image: string;
  playerImage: string;
  rarity: "legendary" | "epic" | "rare" | "common";
  team: string;
  position: string;
  isOwned: boolean;
  price: number;
}

export const marketplaceCards: MarketplaceNFT[] = [
  {
    id: "mk1",
    name: "Neymar Jr",
    image: "https://placehold.co/600x800/1a1f2c/ffffff?text=Neymar",
    playerImage: "https://placehold.co/600x800/1a1f2c/ffffff?text=Neymar",
    rarity: "legendary",
    team: "Al Hilal",
    position: "Forward",
    isOwned: false,
    price: 1000
  },
  {
    id: "mk2",
    name: "Vinicius Jr",
    image: "https://placehold.co/600x800/1a1f2c/ffffff?text=Vini",
    playerImage: "https://placehold.co/600x800/1a1f2c/ffffff?text=Vini",
    rarity: "epic",
    team: "Real Madrid",
    position: "Forward",
    isOwned: false,
    price: 750
  }
];
