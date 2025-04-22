
export interface Album {
  id: string;
  name: string;
  coverImage: string;
  progress: number;
  totalCards: number;
  collectedCards: number;
}

export interface AlbumCard {
  id: string;
  name: string;
  image: string;
  rarity: "common" | "rare" | "epic" | "legendary";
  team: string;
  position: string;
  isOwned: boolean;
}
