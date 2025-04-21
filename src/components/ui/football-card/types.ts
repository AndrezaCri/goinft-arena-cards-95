
export interface FootballCardProps {
  id: string;
  name: string;
  club?: string;
  clubLogo?: string;
  playerImage?: string;
  rarity: "common" | "rare" | "epic" | "legendary";
  position?: string;
  isNew?: boolean;
  isOwned?: boolean;
  isHolographic?: boolean;
  className?: string;
  onClick?: () => void;
}

export interface CardStylesResult {
  rarityColor: string;
  rarityGlow: string;
}
