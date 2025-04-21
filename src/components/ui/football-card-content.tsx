
import { cn } from "@/lib/utils";
import { CardRarity } from "@/utils/rarity-utils";

interface FootballCardContentProps {
  name: string;
  club?: string;
  position?: string;
  playerImage: string;
  isNew?: boolean;
  isOwned?: boolean;
  isHolographic?: boolean;
}

export function FootballCardContent({
  name,
  club,
  position,
  playerImage,
  isNew,
  isOwned,
  isHolographic
}: FootballCardContentProps) {
  const defaultPlayerImage = "https://placehold.co/600x800/1a1f2c/ffffff?text=Player";

  return (
    <div className="relative z-10 h-full w-full p-3 flex flex-col">
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
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-40 animate-pulse-glow" />
        )}
      </div>
      
      {/* Card footer with player info */}
      <div className="bg-cyber-darkBlue/80 rounded-lg p-2 backdrop-blur-sm border border-neon-purple/20">
        <h3 className="text-white font-orbitron text-lg font-semibold truncate">{name}</h3>
        
        <div className="flex justify-between items-center mt-1">
          {club && <span className="text-white/70 text-sm truncate">{club}</span>}
          {position && (
            <span className="bg-neon-purple/20 text-neon-purple px-2 py-0.5 rounded text-xs font-orbitron">
              {position}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
