import { RewardCard } from "@/components/rewards/shared/RewardCard";
import { RewardActionButton } from "@/components/rewards/shared/RewardActionButton";

interface DailyRewardsProps {
  visibleRewards: number[];
  loginStreak: number;
  onDailyAction: (type: string, id: string) => void;
}

export function DailyRewards({ visibleRewards, loginStreak, onDailyAction }: DailyRewardsProps) {
  const dailyRewards = [
    { 
      day: 1, 
      imageSrc: "/lovable-uploads/4263efde-699d-4758-a229-b5e15b0b60dd.png",
      reward: "5 CHZ",
      isFloating: false,
      backgroundClassName: "bg-gradient-to-r from-neon-purple/20 to-neon-blue/20"
    },
    { 
      day: 2, 
      imageSrc: "/lovable-uploads/8959e228-6687-4e32-bf1e-849b2c9ea30c.png",
      reward: "10 CHZ",
      isFloating: false,
      backgroundClassName: "bg-gradient-to-r from-neon-blue/20 to-neon-purple/20"
    },
    { 
      day: 3, 
      imageSrc: "/lovable-uploads/8b42a4aa-6e29-46c0-a04e-60ebfa0b064c.png",
      reward: "15 CHZ",
      isFloating: false,
      backgroundClassName: "bg-gradient-to-r from-neon-purple/30 to-neon-blue/30"
    },
    { 
      day: 4, 
      imageSrc: "/lovable-uploads/e8cc150f-670e-4639-8235-bfd8df7e7551.png",
      reward: "20 CHZ",
      isFloating: false,
      backgroundClassName: "bg-gradient-to-r from-neon-blue/30 to-neon-purple/30"
    },
    { 
      day: 5, 
      imageSrc: "/lovable-uploads/c7c901dd-d2db-46de-9129-42fb4c41c341.png",
      reward: "25 CHZ",
      isFloating: false,
      backgroundClassName: "bg-gradient-to-r from-neon-purple/40 to-neon-blue/40"
    },
    { 
      day: 6, 
      imageSrc: "/lovable-uploads/1cb631c9-795d-4a11-8750-3e34509f594d.png",
      reward: "NFT Raro",
      isFloating: true,
      glowColor: "rgba(155, 135, 245, 0.6)",
      backgroundClassName: "from-neon-purple/50 to-neon-blue/50"
    },
    { 
      day: 7, 
      imageSrc: "/lovable-uploads/506f8852-1303-4875-ae3d-6068e947cb1d.png",
      reward: "NFT Lendário",
      isFloating: true,
      glowColor: "rgba(255, 113, 225, 0.8)",
      backgroundClassName: "from-neon-pink/50 to-neon-purple/50"
    }
  ];

  return (
    <div className="grid grid-cols-7 gap-2 mt-4 items-end">
      {dailyRewards.map((reward, index) => (
        <RewardCard
          key={index}
          title={`Dia ${reward.day}`}
          imageSrc={reward.imageSrc}
          isActive={visibleRewards.includes(index)}
          isFloating={reward.isFloating}
          glowColor={reward.glowColor}
          backgroundClassName={reward.backgroundClassName}
        >
          <div className="mt-2 text-center">
            <span className="text-xs text-white/70">{reward.reward}</span>
          </div>
          
          <RewardActionButton
            onClick={() => index === loginStreak && onDailyAction("daily", `day${index + 1}`)}
            disabled={index !== loginStreak}
            isCompleted={index < loginStreak}
            completedLabel="Coletado"
            actionLabel="Coletar"
            lockedLabel="Bloqueado"
          />
        </RewardCard>
      ))}
    </div>
  );
}
