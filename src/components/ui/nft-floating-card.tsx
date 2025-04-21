
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { getRandomPosition, getRandomRotation, CARD_SIZES } from "@/utils/animation-utils";

interface NFTFloatingCardProps {
  className?: string;
  children?: React.ReactNode;
  delay?: string;
  duration?: string;
  glowColor?: string;
  size?: keyof typeof CARD_SIZES;
  isHolographic?: boolean;
}

export function NFTFloatingCard({
  className,
  children,
  delay = "0s",
  duration = "5s",
  glowColor = "rgba(155, 135, 245, 0.6)",
  size = "md",
  isHolographic = false,
}: NFTFloatingCardProps) {
  const [position, setPosition] = useState(getRandomPosition());
  const [rotation, setRotation] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(getRandomPosition());
      setRotation(getRandomRotation());
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className={cn(
        "relative cyberpunk-card hologram-effect",
        CARD_SIZES[size],
        className
      )}
      style={{
        transform: `translate(${position.x}px, ${position.y}px) rotate(${rotation}deg)`,
        transition: `transform 5s ease-in-out`,
        animationDelay: delay,
        animationDuration: duration,
        boxShadow: `0 0 20px ${glowColor}`
      }}
    >
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-neon-purple/50 via-neon-blue/30 to-neon-purple/50 opacity-30 animate-pulse-glow" />
      
      <div className="relative w-full h-full rounded-lg overflow-hidden border border-neon-purple/50 flex items-center justify-center">
        {children}
      </div>
      
      <div className="absolute inset-0 bg-circuit-pattern opacity-10" />
      
      <div 
        className="absolute inset-0 opacity-20 bg-gradient-to-tr from-transparent via-white to-transparent"
        style={{
          backgroundSize: "200% 200%",
          animation: "card-shine 8s linear infinite",
          animationDelay: delay
        }}
      />
    </div>
  );
}

