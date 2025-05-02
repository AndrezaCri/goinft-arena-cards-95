
import { ScrollArea } from "@/components/ui/scroll-area";
import { MissionCard } from "./MissionCard";

interface MissionsHorizontalScrollProps {
  missions: Array<{
    id: string;
    title: string;
    xpReward: number;
    imageSrc: string;
  }>;
  completedMissions: string[];
  onCompleteMission: (missionId: string) => void;
  visibleRewards: number[];
}

export function MissionsHorizontalScroll({
  missions,
  completedMissions,
  onCompleteMission,
  visibleRewards
}: MissionsHorizontalScrollProps) {
  return (
    <ScrollArea className="w-full pb-4">
      <div className="flex space-x-4 min-w-max">
        {missions.slice(0, 4).map((mission, index) => (
          <div 
            key={index} 
            className={`flex-shrink-0 w-[220px] transition-opacity duration-500 ${
              visibleRewards.includes(index) ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="text-center mb-2">
              <span className="font-orbitron text-sm text-white">Missão {index + 1}</span>
            </div>
            <MissionCard
              index={index}
              missionId={`mission${index + 1}`}
              title={mission.title}
              xpReward={mission.xpReward}
              imageSrc={mission.imageSrc}
              isCompleted={completedMissions.includes(`mission${index + 1}`)}
              onComplete={onCompleteMission}
            />
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
