
import { memo, useCallback, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { OptimizedImage } from "@/components/rewards/OptimizedImage";

interface NFTCardProps {
  id: string;
  name: string;
  image: string;
  rarity: "common" | "rare" | "epic" | "legendary";
  team: string;
  position: string;
  isOwned?: boolean;
  onClick?: () => void;
  className?: string;
  priority?: boolean;
}

// Dados estáticos definidos fora do componente
const rarityColors = {
  common: "bg-blue-500",
  rare: "bg-purple-500",
  epic: "bg-pink-500",
  legendary: "bg-amber-500",
};

// Usando memo para evitar re-renderizações desnecessárias
export const NFTCard = memo(function NFTCard({
  id,
  name,
  image,
  rarity,
  team,
  position,
  isOwned = false,
  onClick,
  className,
  priority = false,
}: NFTCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Usando useCallback para o handler de clique e carregamento
  const handleClick = useCallback(() => {
    if (onClick) onClick();
  }, [onClick]);
  
  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  return (
    <Card
      className={cn(
        "relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 transform h-full",
        "bg-goinft-card border-none hover:shadow-lg hover:scale-105",
        rarity === "legendary" && "border-t-2 border-amber-500",
        className
      )}
      onClick={handleClick}
    >
      <div className="relative" style={{ aspectRatio: '230/320' }}>
        <OptimizedImage 
          src={image} 
          alt={name}
          className={cn(
            "absolute inset-0 w-full h-full",
            imageLoaded ? "opacity-100" : "opacity-0"
          )}
          width="230"
          height="320"
          priority={priority}
          objectFit="cover"
          onLoad={handleImageLoad}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex justify-between items-center mb-2">
            <Badge className={cn("text-xs", rarityColors[rarity])}>{rarity}</Badge>
            {isOwned && <Badge variant="outline" className="bg-green-900/50 text-green-300 text-xs">Owned</Badge>}
          </div>
          
          <h3 className="text-white font-orbitron text-lg font-bold mb-1 truncate">{name}</h3>
          <div className="flex justify-between text-white/80 text-xs">
            <span>{team}</span>
            <span>{position}</span>
          </div>
        </div>
      </div>
    </Card>
  );
});
