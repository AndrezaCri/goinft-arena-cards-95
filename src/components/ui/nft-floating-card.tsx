
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { getRandomPosition, getRandomRotation, CARD_SIZES } from "@/utils/animation-utils";
import { Skeleton } from "@/components/ui/skeleton";
import * as React from "react";

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
  const [isLoading, setIsLoading] = useState(true);
  const animationTimeoutRef = useRef<number | null>(null);
  
  // Reduce animation frequency to improve performance
  useEffect(() => {
    const updatePosition = () => {
      setPosition(getRandomPosition());
      setRotation(getRandomRotation());
      
      // Schedule next update with a longer interval
      animationTimeoutRef.current = window.setTimeout(updatePosition, 10000);
    };
    
    // Initial timeout with delay
    animationTimeoutRef.current = window.setTimeout(updatePosition, 6000);
    
    // Cleanup
    return () => {
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
    };
  }, []);

  // Handle child image loading
  const handleImageLoaded = () => {
    setIsLoading(false);
  };

  // Wrap children to detect when images are loaded
  const wrappedChildren = React.Children.map(children, child => {
    if (React.isValidElement(child) && child.type === 'img') {
      return React.cloneElement(child as React.ReactElement<any>, {
        onLoad: handleImageLoaded,
        loading: "lazy",
        fetchPriority: "low",
        style: { 
          ...(child.props.style || {}),
          display: isLoading ? 'none' : 'block'
        }
      });
    }
    return child;
  });

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
        boxShadow: `0 0 20px ${glowColor}`,
        willChange: 'transform'
      }}
    >
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-neon-purple/50 via-neon-blue/30 to-neon-purple/50 opacity-30" />
      
      <div className="relative w-full h-full rounded-lg overflow-hidden border border-neon-purple/50 flex items-center justify-center">
        {isLoading && (
          <Skeleton className="absolute inset-0 bg-goinft-darker/80" />
        )}
        {wrappedChildren}
      </div>
      
      <div className="absolute inset-0 bg-circuit-pattern opacity-10" />
      
      <div 
        className="absolute inset-0 opacity-20 bg-gradient-to-tr from-transparent via-white to-transparent"
        style={{
          backgroundSize: "200% 200%",
          animation: "card-shine 10s linear infinite",
          animationDelay: delay
        }}
      />
    </div>
  );
}
