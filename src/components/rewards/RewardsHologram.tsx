
import { useState, useEffect } from "react";
import { DailyRewards } from "./DailyRewards";
import { WeeklyMissions } from "./WeeklyMissions";
import { AlbumRewards } from "./AlbumRewards";
import { RankRewards } from "./RankRewards";
import { memo } from "react";

interface RewardsHologramProps {
  currentTab: "daily" | "weekly" | "albums" | "rank";
}

export const RewardsHologram = memo(function RewardsHologram({ currentTab }: RewardsHologramProps) {
  const [visibleRewards, setVisibleRewards] = useState<number[]>([]);
  
  useEffect(() => {
    setVisibleRewards([]);
    const showRewards = () => {
      const numRewards = {
        daily: 7,
        weekly: 5,
        albums: 4,
        rank: 3
      }[currentTab];
      
      const interval = setInterval(() => {
        setVisibleRewards(prev => {
          if (prev.length >= numRewards) {
            clearInterval(interval);
            return prev;
          }
          return [...prev, prev.length];
        });
      }, 200);
      
      return () => clearInterval(interval);
    };
    
    const timeout = setTimeout(showRewards, 100);
    return () => clearTimeout(timeout);
  }, [currentTab]);
  
  const renderRewards = () => {
    switch (currentTab) {
      case "daily":
        return <DailyRewards visibleRewards={visibleRewards} />;
      case "weekly":
        return <WeeklyMissions visibleRewards={visibleRewards} />;
      case "albums":
        return <AlbumRewards visibleRewards={visibleRewards} />;
      case "rank":
        return <RankRewards visibleRewards={visibleRewards} />;
      default:
        return null;
    }
  };
  
  return (
    <div className="min-h-[400px]">
      <h3 className="font-orbitron text-lg text-white">Recompensas</h3>
      <div className="relative mt-2">
        <div className="absolute inset-0 bg-circuit-pattern opacity-10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-neon-purple/5 to-transparent pointer-events-none"></div>
        {renderRewards()}
      </div>
    </div>
  );
});
