
import { useState } from "react";
import { cn } from "@/lib/utils";
import { FootballCardProps } from "./types";
import { getCardStyles } from "./styles";
import { CardContent } from "./card-content";

export function FootballNFTCard({
  id,
  name,
  club,
  clubLogo,
  playerImage,
  rarity,
  position,
  isNew = false,
  isOwned = false,
  isHolographic = false,
  className,
  onClick,
}: FootballCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHolographic) return;
    
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    setRotateX(rotateX);
    setRotateY(rotateY);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const { rarityColor, rarityGlow } = getCardStyles(rarity, isHovered, isHolographic);
  
  return (
    <div
      className={cn(
        "relative aspect-[3/4] w-full max-w-[280px] transition-all duration-300 cursor-pointer",
        isHovered && "scale-105 z-10",
        isHolographic && "transition-all duration-200",
        rarityGlow,
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transformStyle: 'preserve-3d'
      }}
    >
      <div 
        className={cn(
          "absolute inset-0 rounded-xl",
          isHolographic && "animate-pulse-glow"
        )}
        style={{
          background: `linear-gradient(135deg, transparent, ${isHovered ? 'rgba(155, 135, 245, 0.5)' : 'rgba(155, 135, 245, 0.2)'})`,
          border: isHovered ? '1px solid rgba(155, 135, 245, 0.8)' : '1px solid rgba(155, 135, 245, 0.3)',
          boxShadow: isHovered ? '0 0 15px rgba(155, 135, 245, 0.5)' : 'none',
          zIndex: -1
        }}
      />
      
      <div className="absolute inset-0 rounded-xl overflow-hidden bg-goinft-card">
        <div className="absolute inset-0 opacity-20 bg-circuit-pattern" />
        <div className={cn(
          "absolute inset-0 bg-gradient-to-b from-transparent to-cyber-dark",
          isHolographic && "opacity-70"
        )} />
        {isHolographic && (
          <div className="absolute inset-0 opacity-20 bg-gradient-to-tr from-transparent via-white to-transparent animate-card-shine" />
        )}
      </div>
      
      <CardContent
        name={name}
        club={club}
        position={position}
        rarity={rarity}
        clubLogo={clubLogo}
        playerImage={playerImage}
        isHolographic={isHolographic}
        isNew={isNew}
        isOwned={isOwned}
      />
    </div>
  );
}
