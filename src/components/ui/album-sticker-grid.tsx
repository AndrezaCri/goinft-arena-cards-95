import { useState } from "react";
import { cn } from "@/lib/utils";
import { Trophy } from "lucide-react";

interface AlbumStickerGridProps {
  className?: string;
  rows?: number;
  cols?: number;
  emptySlots?: number[];
  filledSlots?: number[];
  onSlotClick?: (index: number) => void;
}

export function AlbumStickerGrid({
  className,
  rows = 3,
  cols = 4,
  emptySlots = [],
  filledSlots = [],
  onSlotClick
}: AlbumStickerGridProps) {
  const [hoverSlot, setHoverSlot] = useState<number | null>(null);
  
  const totalSlots = rows * cols;
  const slots = Array.from({ length: totalSlots }, (_, i) => i);
  
  const isSlotEmpty = (index: number) => emptySlots.includes(index);
  const isSlotFilled = (index: number) => filledSlots.includes(index);
  
  return (
    <div 
      className={cn(
        "w-full max-w-2xl grid gap-1 p-3 bg-cyber-dark/80 rounded-xl border border-neon-purple/20",
        className
      )}
      style={{ 
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`
      }}
    >
      {slots.map(index => {
        const isEmpty = !filledSlots.includes(index);
        const isHovered = hoverSlot === index;
        
        return (
          <div
            key={index}
            className={cn(
              "relative aspect-[3/4] rounded-lg transition-all duration-300 overflow-hidden",
              isEmpty ? "cursor-pointer" : "cursor-default",
              isEmpty ? "border border-dashed border-neon-purple/30" : "border border-neon-purple/50",
              isEmpty ? "bg-goinft-card/30" : "bg-goinft-card",
              isHovered && isEmpty && "border-neon-purple/70 bg-goinft-card/50 scale-105"
            )}
            onMouseEnter={() => setHoverSlot(index)}
            onMouseLeave={() => setHoverSlot(null)}
            onClick={() => onSlotClick && onSlotClick(index)}
          >
            {isEmpty ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-1">
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center mb-1",
                  "bg-neon-purple/10 border border-neon-purple/30",
                  isHovered && "bg-neon-purple/20 border-neon-purple/50 animate-pulse-glow"
                )}>
                  <Trophy className={cn(
                    "w-4 h-4",
                    isHovered ? "text-neon-purple" : "text-neon-purple/50"
                  )} />
                </div>
                <span className={cn(
                  "text-center text-[10px] font-orbitron",
                  isHovered ? "text-white" : "text-white/50"
                )}>
                  Slot {index + 1}
                </span>
              </div>
            ) : (
              <div className="w-full h-full">
                <div className="absolute inset-0 opacity-10 bg-circuit-pattern"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyber-dark/80"></div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-neon-purple/20 flex items-center justify-center border border-neon-purple/50 animate-pulse-glow">
                    <Trophy className="w-4 h-4 text-neon-purple" />
                  </div>
                </div>
                
                <div className="absolute bottom-1 right-1 bg-cyber-darkBlue/80 text-neon-purple text-[10px] font-bold px-1.5 py-0.5 rounded font-orbitron">
                  #{index + 1}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
