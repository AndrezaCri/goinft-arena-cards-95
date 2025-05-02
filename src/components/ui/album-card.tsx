
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { Lock } from "lucide-react";
import { OptimizedImage } from "@/components/rewards/OptimizedImage";

interface AlbumCardProps {
  id: string;
  name: string;
  coverImage: string;
  progress: number;
  totalCards: number;
  collectedCards: number;
  onClick?: () => void;
  className?: string;
  locked?: boolean;
  priority?: boolean;
}

export function AlbumCard({
  id,
  name,
  coverImage,
  progress,
  totalCards,
  collectedCards,
  onClick,
  className,
  locked = false,
  priority = false,
}: AlbumCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  return (
    <Card
      className={cn(
        "relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 transform w-[190px] mx-auto",
        "bg-goinft-card border-none hover:shadow-lg",
        !locked && "hover:scale-105",
        className
      )}
      onClick={onClick}
    >
      <div className="relative" style={{ aspectRatio: '190/210' }}>
        {!imageLoaded && (
          <div className="absolute inset-0 bg-goinft-darker animate-pulse"></div>
        )}
        
        <OptimizedImage 
          src={coverImage} 
          alt={name} 
          className="absolute inset-0 w-full h-full object-cover"
          onLoad={() => setImageLoaded(true)}
          width="190"
          height="210"
          priority={true} // Sempre usar prioridade para todas as imagens para garantir carregamento
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        
        {locked && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 z-10">
            <Lock className="w-8 h-8 text-white/70" />
            <p className="text-white font-orbitron mt-2 text-center px-4 text-sm">
              Complete as recompensas para desbloquear
            </p>
          </div>
        )}
        
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <h3 className="text-white font-orbitron text-sm font-bold mb-1">{name}</h3>
          
          <div className="flex justify-between text-white/80 text-xs mb-1">
            <span>{collectedCards} / {totalCards}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          
          <Progress value={progress} className="h-1.5 bg-white/20" />
        </div>
      </div>
    </Card>
  );
}
