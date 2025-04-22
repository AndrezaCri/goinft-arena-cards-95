
import { RewardCard } from "@/components/rewards/shared/RewardCard";
import { RewardActionButton } from "@/components/rewards/shared/RewardActionButton";

interface WeeklyMissionsProps {
  visibleRewards: number[];
  completedMissions: string[];
  onMissionAction: (type: string, id: string) => void;
}

export function WeeklyMissions({ visibleRewards, completedMissions, onMissionAction }: WeeklyMissionsProps) {
  // Define weekly missions data
  const weeklyMissions = [
    {
      id: "mission1",
      title: "Missão 1",
      description: "Troque 3 cards",
      xp: 30,
      imageSrc: "/lovable-uploads/880aa3ab-ecec-4848-808a-018afa7bb652.png"
    },
    {
      id: "mission2",
      title: "Missão 2",
      description: "Complete 1 álbum",
      xp: 50,
      imageSrc: "/lovable-uploads/920baa56-b00d-43ea-8372-f544a6ca420e.png"
    },
    {
      id: "mission3",
      title: "Missão 3",
      description: "Compre 2 pacotes",
      xp: 75,
      imageSrc: "/lovable-uploads/e7bd521b-75c6-4c78-817b-74fff9947c90.png"
    },
    {
      id: "mission4",
      title: "Missão 4",
      description: "Visite 5 dias",
      xp: 100,
      imageSrc: "/lovable-uploads/687d40f8-9816-4f77-989c-1129fd953a1e.png"
    },
    {
      id: "mission5",
      title: "Missão 5",
      description: "Abra 10 pacotes",
      xp: 150,
      imageSrc: "/lovable-uploads/c0d8c9e1-73d1-408e-8931-a00e77136d8d.png"
    }
  ];

  return (
    <div className="grid grid-cols-3 md:grid-cols-5 gap-6 mt-6">
      {weeklyMissions.map((mission, index) => (
        <div key={index} className={`flex flex-col items-center transition-opacity duration-500 ${visibleRewards.includes(index) ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-center mb-2">
            <span className="font-orbitron text-sm text-white">{mission.title}</span>
          </div>
          <div className="bg-goinft-light/40 p-4 rounded-lg border border-neon-blue/20 relative">
            <div className="absolute -top-3 -right-3 bg-neon-purple text-white text-xs px-2 py-1 rounded-full font-orbitron animate-pulse">
              {mission.xp} XP
            </div>
            <div className="flex flex-col items-center">
              <img 
                src={mission.imageSrc}
                alt={mission.title}
                className="h-16 w-16 object-contain mb-2"
              />
              <div className="text-center mt-2">
                <h4 className="text-white text-sm font-orbitron">
                  {mission.description}
                </h4>
                <div className="mt-3">
                  <RewardActionButton
                    onClick={() => onMissionAction("mission", mission.id)}
                    isCompleted={completedMissions.includes(mission.id)}
                    completedLabel="Completo"
                    actionLabel="Iniciar"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
