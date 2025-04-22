import { ReactNode } from "react";
import { NFTFloatingCard } from "@/components/ui/nft-floating-card";
import { cn } from "@/lib/utils";

export interface RewardCardProps {
  title: string;
  imageSrc: string;
  rewards?: string[];
  glowColor?: string;
  isActive: boolean;
  isFloating?: boolean;
  className?: string;
  imageClassName?: string;
  backgroundClassName?: string;
  children?: ReactNode;
}

export function RewardCard({
  title,
  imageSrc,
  rewards = [],
  glowColor = "rgba(155, 135, 245, 0.6)",
  isActive = true,
  isFloating = true,
  className,
  backgroundClassName,
  imageClassName,
  children
}: RewardCardProps) {
  return (
    <div className={cn(
      "flex flex-col items-center transition-opacity duration-500",
      isActive ? "opacity-100" : "opacity-0",
      className
    )}>
      <div className="text-center mb-2">
        <span className="font-orbitron text-sm text-white">{title}</span>
      </div>
      
      {isFloating ? (
        <NFTFloatingCard 
          className={cn(
            "w-full", 
            backgroundClassName
          )} 
          isHolographic
          glowColor={glowColor}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src={imageSrc}
              alt={title}
              className={cn(
                "h-16 w-16 md:h-20 md:w-20 object-contain", 
                imageClassName
              )}
            />
          </div>
        </NFTFloatingCard>
      ) : (
        <div className={cn(
          "bg-goinft-card rounded-lg border border-neon-blue/30 flex items-center justify-center p-4",
          backgroundClassName
        )}>
          <img 
            src={imageSrc}
            alt={title}
            className={cn(
              "h-16 w-16 md:h-20 md:w-20 object-contain", 
              imageClassName
            )}
          />
        </div>
      )}
      
      {rewards.length > 0 && (
        <div className="mt-3 text-center">
          <h4 className="text-white text-sm font-orbitron mb-1">Recompensa</h4>
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {rewards.map((reward, index) => (
              <span key={index} className="bg-goinft-dark px-2 py-1 rounded text-xs text-neon-blue">
                {reward}
              </span>
            ))}
          </div>
        </div>
      )}
      
      {children}
    </div>
  );
}
