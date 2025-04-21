
import { cn } from "@/lib/utils";
import { FootballCardProps } from "./types";

interface CardContentProps {
  name: string;
  club?: string;
  position?: string;
  rarity: FootballCardProps["rarity"];
  clubLogo?: string;
  playerImage?: string;
  isHolographic: boolean;
  isNew?: boolean;
  isOwned?: boolean;
}

export const CardContent = ({
  name,
  club,
  position,
  rarity,
  clubLogo,
  playerImage,
  isHolographic,
  isNew,
  isOwned
}: CardContentProps) => {
  const defaultPlayerImage = "https://placehold.co/600x800/1a1f2c/ffffff?text=Player";
  const defaultClubLogo = "https://placehold.co/300x300/1a1f2c/ffffff?text=Club";

  return (
    <div className="relative z-10 h-full w-full p-3 flex flex-col">
      <div className="flex justify-between items-start mb-2">
        <div className="w-10 h-10 rounded-full bg-cyber-darkBlue p-1 flex items-center justify-center border border-neon-purple/30">
          <img 
            src={clubLogo || defaultClubLogo} 
            alt={club || name}
            className="w-full h-full object-contain"
          />
        </div>
        
        <div className={cn(
          "px-2 py-1 rounded text-xs font-bold font-orbitron uppercase bg-gradient-to-r",
          `from-${rarity === 'common' ? 'gray' : rarity === 'rare' ? 'neon-blue' : rarity === 'epic' ? 'neon-purple' : 'yellow'}-${rarity === 'legendary' ? '400' : '500'}`
        )}>
          {rarity}
        </div>
      </div>
      
      <div className="flex-1 relative rounded-lg overflow-hidden mb-3 bg-gradient-to-b from-cyber-darkBlue/50 to-cyber-dark">
        <img
          src={playerImage || defaultPlayerImage}
          alt={name}
          className={cn(
            "w-full h-full object-cover",
            isHolographic && "animate-pulse-glow"
          )}
        />
        
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
        
        {isHolographic && (
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-40 animate-pulse-glow" />
        )}
      </div>
      
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
};
