
export interface MarketplaceCard {
  id: string;
  name: string;
  image: string;
  playerImage: string;
  rarity: "common" | "rare" | "epic" | "legendary";
  team: string;
  position: string;
  price?: number;
  isOwned?: boolean;
}
