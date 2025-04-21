
export const getCardStyles = (rarity: string, isHovered: boolean, isHolographic: boolean): { rarityColor: string; rarityGlow: string } => {
  const getRarityColor = () => {
    switch (rarity) {
      case "common":
        return "from-gray-400 to-gray-300";
      case "rare":
        return "from-neon-blue to-blue-400";
      case "epic":
        return "from-neon-purple to-purple-500";
      case "legendary":
        return "from-yellow-400 to-neon-orange";
      default:
        return "from-gray-400 to-gray-300";
    }
  };
  
  const getRarityGlow = () => {
    if (!isHovered && !isHolographic) return "";
    
    switch (rarity) {
      case "common":
        return "shadow-[0_0_10px_rgba(148,163,184,0.5)]";
      case "rare":
        return "shadow-[0_0_15px_rgba(14,165,233,0.6)]";
      case "epic":
        return "shadow-[0_0_20px_rgba(155,135,245,0.7)]";
      case "legendary":
        return "shadow-[0_0_25px_rgba(249,115,22,0.8)]";
      default:
        return "";
    }
  };

  return {
    rarityColor: getRarityColor(),
    rarityGlow: getRarityGlow()
  };
};
