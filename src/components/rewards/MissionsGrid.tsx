
import { MissionCard } from "./MissionCard";

interface MissionsGridProps {
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

export function MissionsGrid({
  missions,
  completedMissions,
  onCompleteMission,
  visibleRewards
}: MissionsGridProps) {
  return (
    <div className="grid grid-cols-5 gap-6 mt-6">
      {missions.map((mission, index) => (
        <div 
          key={index} 
          className={`flex flex-col items-center transition-opacity duration-500 ${
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
  );
}
