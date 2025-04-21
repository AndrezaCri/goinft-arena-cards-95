import { cn } from "@/lib/utils";
import { Trophy, Award } from "lucide-react";
import { useState } from "react";

interface FootballNFTCardProps {
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
  const [isHovered, setIsHovered] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  
  const getRarityColor = () => {
    switch (rarity) {
      case "common":
        return "from-neon-purple to-neon-blue";
      case "rare":
        return "from-neon-blue to-neon-purple";
      case "epic":
        return "from-neon-purple to-neon-pink";
      case "legendary":
        return "from-neon-orange to-neon-yellow";
    }
  };
  
  const getRarityGlow = () => {
    switch (rarity) {
      case "common":
        return "shadow-[0_0_20px_rgba(155,135,245,0.7)]";
      case "rare":
        return "shadow-[0_0_30px_rgba(14,165,233,0.9)]";
      case "epic":
        return "shadow-[0_0_40px_rgba(168,85,247,1)]";
      case "legendary":
        return "shadow-[0_0_50px_rgba(255,165,0,1)]";
    }
  };

  // Handle mouse movement for 3D effect
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
  
  // Default images if not provided
  const defaultPlayerImage = "https://placehold.co/600x800/1a1f2c/ffffff?text=Player";
  const defaultClubLogo = "https://placehold.co/300x300/1a1f2c/ffffff?text=Club";
  
  return (
    <div
      className={cn(
        "relative aspect-[3/4] w-full max-w-[280px] transition-all duration-300 cursor-pointer",
        isHovered && "scale-105 z-10",
        getRarityGlow(),
        `neon-border after:opacity-70 hover:after:opacity-100`,
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
      {/* Card border glow */}
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
      ></div>
      
      {/* Card background with club colors */}
      <div className="absolute inset-0 rounded-xl overflow-hidden bg-goinft-card">
        {/* Circuit pattern background */}
        <div className="absolute inset-0 opacity-20 bg-circuit-pattern"></div>
        
        {/* Gradient overlay */}
        <div className={cn(
          "absolute inset-0 bg-gradient-to-b from-transparent to-cyber-dark",
          isHolographic && "opacity-70"
        )}></div>
        
        {/* Holographic pattern for special cards */}
        {isHolographic && (
          <div className="absolute inset-0 opacity-20 bg-gradient-to-tr from-transparent via-white to-transparent animate-card-shine"></div>
        )}
      </div>
      
      {/* Card Content Container */}
      <div className="relative z-10 h-full w-full p-3 flex flex-col">
        {/* Card header with rarity indicator */}
        <div className="flex justify-between items-start mb-2">
          {/* Club badge */}
          <div className="w-10 h-10 rounded-full bg-cyber-darkBlue p-1 flex items-center justify-center border border-neon-purple/30">
            <img 
              src={clubLogo || defaultClubLogo} 
              alt={club || name}
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* Rarity tag */}
          <div className={cn(
            "px-2 py-1 rounded text-xs font-bold font-orbitron uppercase bg-gradient-to-r",
            getRarityColor()
          )}>
            {rarity}
          </div>
        </div>
        
        {/* Player image area */}
        <div className="flex-1 relative rounded-lg overflow-hidden mb-3 bg-gradient-to-b from-cyber-darkBlue/50 to-cyber-dark">
          <img
            src={playerImage || defaultPlayerImage}
            alt={name}
            className={cn(
              "w-full h-full object-cover",
              isHolographic && "animate-pulse-glow"
            )}
          />
          
          {/* Status indicators */}
          {isNew && (
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full font-orbitron z-10">
              NEW
            </div>
          )}
          
          {isOwned && (
            <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full font-orbitron z-10">
              OWNED
            </div>
          )}
          
          {/* Holographic shimmer overlay */}
          {isHolographic && (
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-40 animate-pulse-glow"></div>
          )}
        </div>
        
        {/* Card footer with player info */}
        <div className="bg-cyber-darkBlue/80 rounded-lg p-2 backdrop-blur-sm border border-neon-purple/20">
          {/* Player name */}
          <h3 className="text-white font-orbitron text-lg font-semibold truncate">{name}</h3>
          
          {/* Club and position */}
          <div className="flex justify-between items-center mt-1">
            {club && <span className="text-white/70 text-sm truncate">{club}</span>}
            {position && (
              <span className="bg-neon-purple/20 text-neon-purple px-2 py-0.5 rounded text-xs font-orbitron">
                {position}
              </span>
            )}
          </div>
        </div>
        
        {/* Card overlay effect when hovered */}
        <div 
          className={cn(
            "absolute inset-0 rounded-xl transition-opacity duration-300 pointer-events-none",
            isHovered ? "opacity-100" : "opacity-0"
          )}
          style={{
            background: 'linear-gradient(135deg, transparent, rgba(255, 255, 255, 0.1))',
          }}
        ></div>
      </div>
    </div>
  );
}
