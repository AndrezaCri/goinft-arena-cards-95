
import { CyberpunkButton } from "@/components/ui/cyberpunk-button";
import { OptimizedImage } from "./OptimizedImage";

interface MissionCardProps {
  index: number;
  missionId: string;
  title: string;
  xpReward: number;
  imageSrc: string;
  isCompleted: boolean;
  onComplete: (missionId: string) => void;
}

export function MissionCard({ 
  index, 
  missionId, 
  title, 
  xpReward, 
  imageSrc, 
  isCompleted, 
  onComplete 
}: MissionCardProps) {
  return (
    <div className="bg-goinft-light/40 p-4 rounded-lg border border-neon-blue/20 relative h-[180px]">
      <div className="absolute -top-3 -right-3 bg-neon-purple text-white text-xs px-2 py-1 rounded-full font-orbitron animate-pulse">
        {xpReward} XP
      </div>
      <div className="flex flex-col items-center h-full">
        <div className="h-16 w-16 mb-2">
          <OptimizedImage 
            src={`/lovable-uploads/${imageSrc}`} 
            alt={`Missão ${index + 1}`}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="text-center mt-2 flex-grow">
          <h4 className="text-white text-sm font-orbitron">
            {title}
          </h4>
          <div className="mt-3 flex flex-row justify-center gap-1">
            <CyberpunkButton 
              size="sm" 
              variant={isCompleted ? "accent" : "accent"}
              className="text-xs px-2 py-1 h-auto"
              onClick={() => onComplete(missionId)}
              disabled={isCompleted}
            >
              {isCompleted ? "Completo" : "Iniciar"}
            </CyberpunkButton>
          </div>
        </div>
      </div>
    </div>
  );
}
