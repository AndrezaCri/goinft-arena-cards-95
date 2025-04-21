
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface NFTFloatingCardProps {
  className?: string;
  children?: React.ReactNode;
  delay?: string;
  duration?: string;
  glowColor?: string;
  size?: "sm" | "md" | "lg";
  isHolographic?: boolean; // Added the missing property
}

export function NFTFloatingCard({
  className,
  children,
  delay = "0s",
  duration = "5s",
  glowColor = "rgba(155, 135, 245, 0.6)",
  size = "md",
  isHolographic = false, // Added default value
}: NFTFloatingCardProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  
  // Randomly change position and rotation for floating effect
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition({
        x: Math.random() * 10 - 5,
        y: Math.random() * 10 - 5
      });
      setRotation(Math.random() * 6 - 3);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const sizeClasses = {
    sm: "w-24 h-32",
    md: "w-32 h-44",
    lg: "w-40 h-56"
  };
  
  return (
    <div 
      className={cn(
        "relative cyberpunk-card hologram-effect",
        sizeClasses[size],
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
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-neon-purple/50 via-neon-blue/30 to-neon-purple/50 opacity-30 animate-pulse-glow"></div>
      
      <div className="relative w-full h-full rounded-lg overflow-hidden border border-neon-purple/50 flex items-center justify-center">
        {children}
      </div>
      
      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
      
      {/* Shine effect */}
      <div 
        className="absolute inset-0 opacity-20 bg-gradient-to-tr from-transparent via-white to-transparent"
        style={{
          backgroundSize: "200% 200%",
          animation: "card-shine 8s linear infinite",
          animationDelay: delay
        }}
      ></div>
    </div>
  );
}
