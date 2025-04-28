
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { Lock } from "lucide-react";
import { useState } from "react";

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
}: AlbumCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  return (
    <Card
      className={cn(
        "relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 transform",
        "bg-goinft-card border-none hover:shadow-lg",
        !locked && "hover:scale-105",
        className
      )}
      onClick={onClick}
    >
      <div className="relative" style={{ aspectRatio: '230/320' }}>
        {!imageLoaded && (
          <div className="absolute inset-0 bg-goinft-darker animate-pulse"></div>
        )}
        
        <img 
          src={coverImage} 
          alt={name} 
          className={cn(
            "absolute inset-0 w-full h-full object-cover",
            !imageLoaded && "opacity-0"
          )}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
          width="230"
          height="320"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        
        {locked && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 z-10">
            <Lock className="w-12 h-12 text-white/70" />
            <p className="text-white font-orbitron mt-4 text-center px-4">
              Complete as recompensas para desbloquear
            </p>
          </div>
        )}
        
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-orbitron text-xl font-bold mb-1">{name}</h3>
          
          <div className="flex justify-between text-white/80 text-sm mb-2">
            <span>{collectedCards} / {totalCards} cards</span>
            <span>{Math.round(progress)}% complete</span>
          </div>
          
          <Progress value={progress} className="h-2 bg-white/20" />
        </div>
      </div>
    </Card>
  );
}
