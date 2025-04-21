import { cn } from "@/lib/utils";
import { useCardAnimation } from "@/hooks/use-card-animation";
import { getRarityColor, getRarityGlow, type CardRarity } from "@/utils/rarity-utils";
import { FootballCardContent } from "./football-card-content";

interface FootballNFTCardProps {
  id: string;
  name: string;
  club?: string;
  clubLogo?: string;
  playerImage?: string;
  rarity: CardRarity;
  position?: string;
  isNew?: boolean;
  isOwned?: boolean;
  isHolographic?: boolean;
  className?: string;
  onClick?: () => void;
}

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
}: FootballNFTCardProps) {
  const {
    rotateX,
    rotateY,
    isHovered,
    handleMouseMove,
    handleMouseLeave,
    handleMouseEnter
  } = useCardAnimation(isHolographic);
  
  return (
    <div
      className={cn(
        "relative aspect-[3/4] w-full max-w-[280px] transition-all duration-300 cursor-pointer",
        isHovered && "scale-105 z-10",
        isHolographic && "transition-all duration-200",
        getRarityGlow(isHovered, isHolographic),
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Card background */}
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
      
      <FootballCardContent
        name={name}
        club={club}
        position={position}
        playerImage={playerImage}
        isNew={isNew}
        isOwned={isOwned}
        isHolographic={isHolographic}
      />
      
      {/* Card overlay effect when hovered */}
      <div 
        className={cn(
          "absolute inset-0 rounded-xl transition-opacity duration-300 pointer-events-none",
          isHovered ? "opacity-100" : "opacity-0"
        )}
        style={{
          background: 'linear-gradient(135deg, transparent, rgba(255, 255, 255, 0.1))',
        }}
      />
    </div>
  );
}
