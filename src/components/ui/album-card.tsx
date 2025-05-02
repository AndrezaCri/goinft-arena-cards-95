
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { Lock } from "lucide-react";
import { useState } from "react";
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
        "relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 transform w-[220px] mx-auto",
        "bg-goinft-card border-none hover:shadow-lg",
        !locked && "hover:scale-105",
        className
      )}
      onClick={onClick}
    >
      <div className="relative" style={{ aspectRatio: '230/320' }}>
        {!imageLoaded && (
          <div className="absolute inset-0 bg-goinft-darker"></div>
        )}
        
        <OptimizedImage 
          src={coverImage} 
          alt={name} 
          className={cn(
            "absolute inset-0 w-full h-full object-cover",
            !imageLoaded && "opacity-0"
          )}
          onLoad={() => setImageLoaded(true)}
          width="230" // Aumentado de 80 para 230 para melhor visualização
          height="320" // Aumentado proporcionalmente
          priority={priority}
          quality={80} // Aumentado de 15 para 80 para garantir qualidade suficiente
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        
        {locked && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 z-10">
            <Lock className="w-8 h-8 text-white/70" />
            <p className="text-white font-orbitron mt-2 text-center text-sm px-2">
              Complete as recompensas
            </p>
          </div>
        )}
        
        <div className="absolute bottom-0 left-0 right-0 p-2">
          <h3 className="text-white font-orbitron text-sm font-bold mb-1 truncate">{name}</h3>
          
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
