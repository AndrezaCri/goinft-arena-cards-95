
import { Card } from "@/components/ui/card";
import { OptimizedImage } from "@/components/rewards/OptimizedImage";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface NFTCardProps {
  id: string;
  name: string;
  image: string;
  rarity: "common" | "rare" | "epic" | "legendary";
  team?: string;
  position?: string;
  isOwned?: boolean;
  onClick?: () => void;
  priority?: boolean;
  className?: string; // Added className prop to fix the TypeScript errors
}

const rarityColors = {
  common: "border-gray-400",
  rare: "border-neon-blue",
  epic: "border-neon-purple",
  legendary: "border-neon-gold",
};

const rarityBgs = {
  common: "bg-gradient-to-b from-gray-700 to-gray-900",
  rare: "bg-gradient-to-b from-blue-700 to-blue-900",
  epic: "bg-gradient-to-b from-purple-700 to-purple-900",
  legendary: "bg-gradient-to-b from-amber-500 to-amber-800",
};

export function NFTCard({
  id,
  name,
  image,
  rarity,
  team,
  position,
  isOwned = false,
  onClick,
  priority = false,
  className, // Added className to the destructured props
}: NFTCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Card
      className={cn(
        "relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 transform",
        "bg-goinft-card border-2",
        rarityColors[rarity],
        !isOwned && "opacity-60 grayscale",
        isOwned && "hover:scale-105",
        className // Added className to the cn function
      )}
      onClick={onClick}
    >
      <div className="relative" style={{ aspectRatio: '230/320' }}>
        {!imageLoaded && (
          <div className="absolute inset-0 bg-goinft-darker"></div>
        )}
        
        <OptimizedImage
          src={image}
          alt={name}
          className={cn(
            "absolute inset-0 w-full h-full object-cover",
            !imageLoaded && "opacity-0"
          )}
          onLoad={() => setImageLoaded(true)}
          width="80"
          height="112"
          quality={20}
          priority={priority}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        
        {!isOwned && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-10">
            <span className="text-white font-orbitron">Não coletada</span>
          </div>
        )}
        
        <div className="absolute bottom-0 left-0 right-0 p-2">
          <div className={`${rarityBgs[rarity]} rounded-md p-1.5`}>
            <h3 className="text-white font-orbitron text-sm font-bold truncate">{name}</h3>
            
            {team && (
              <p className="text-white/80 text-xs truncate">{team}</p>
            )}
            
            {position && (
              <div className="flex justify-between items-center mt-1">
                <span className="bg-black/30 text-white/90 text-xs px-2 py-0.5 rounded">
                  {position}
                </span>
                <span className="text-white/90 text-xs capitalize">
                  {rarity}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
