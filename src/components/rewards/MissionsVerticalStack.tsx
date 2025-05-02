
import { MissionCard } from "./MissionCard";
import { memo } from "react";

interface MissionsVerticalStackProps {
  missions: Array<{
    id: string;
    title: string;
    xpReward: number;
    imageSrc: string;
  }>;
  completedMissions: string[];
  onCompleteMission: (missionId: string) => void;
  visibleRewards: number[];
  startIndex: number;
}

export const MissionsVerticalStack = memo(function MissionsVerticalStack({
  missions,
  completedMissions,
  onCompleteMission,
  visibleRewards,
  startIndex
}: MissionsVerticalStackProps) {
  return (
    <>
      {missions.slice(startIndex).map((mission, idx) => {
        const index = idx + startIndex;
        return (
          <div 
            key={index} 
            className={`w-full transition-opacity duration-500 ${
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
        );
      })}
    </>
  );
});
