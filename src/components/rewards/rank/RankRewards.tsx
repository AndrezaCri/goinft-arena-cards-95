
import { RewardCard } from "@/components/rewards/shared/RewardCard";
import { cn } from "@/lib/utils";

interface RankRewardsProps {
  visibleRewards: number[];
}

export function RankRewards({ visibleRewards }: RankRewardsProps) {
  // Define ranks data
  const ranks = [
    {
      title: "Elite",
      imageSrc: "/lovable-uploads/3ed65cb1-f49f-4076-be44-44a53cff5153.png",
      badge: "TOP 100",
      textColor: "text-neon-blue",
      glowColor: "rgba(0, 217, 255, 0.8)",
      physicalReward: "Camisa Oficial Autografada"
    },
    {
      title: "Lenda",
      imageSrc: "/lovable-uploads/784d0ec2-86ff-4108-b22f-d1e611e0c4cc.png",
      badge: "TOP 10",
      textColor: "text-neon-purple",
      glowColor: "rgba(155, 135, 245, 0.8)",
      physicalReward: "Ingresso VIP + Meet & Greet"
    },
    {
      title: "Hall da Fama",
      imageSrc: "/lovable-uploads/83efb069-d2ec-496b-81f2-330f7015674f.png",
      badge: "TOP 3",
      textColor: "text-neon-pink",
      glowColor: "rgba(255, 113, 225, 0.8)",
      physicalReward: "Bola Autografada + Experiência Exclusiva"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
      {ranks.map((rank, index) => (
        <div key={index} className={cn(
          "flex flex-col items-center transition-opacity duration-500",
          visibleRewards.includes(index) ? 'opacity-100' : 'opacity-0'
        )}>
          <div className="text-center mb-2">
            <span className={`font-orbitron text-lg ${rank.textColor}`}>
              {rank.title}
            </span>
          </div>
          <div className="relative">
            <RewardCard
              title=""
              imageSrc={rank.imageSrc}
              glowColor={rank.glowColor}
              isActive={true}
              className="h-48"
            >
              <></>
            </RewardCard>
            <div className="absolute -top-4 -right-4 bg-goinft-dark border-2 border-neon-purple px-3 py-1 rounded-full font-orbitron text-white text-sm">
              {rank.badge}
            </div>
          </div>
          <div className="mt-4 text-center">
            <h4 className="text-white text-sm font-orbitron mb-2">Recompensa do Mundo Real</h4>
            <span className="bg-gradient-to-r from-neon-purple to-neon-pink text-white text-xs px-3 py-1 rounded-full">
              {rank.physicalReward}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
