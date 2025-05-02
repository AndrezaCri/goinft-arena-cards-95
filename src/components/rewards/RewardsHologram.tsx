
import { useState, useEffect, useCallback, useMemo } from "react";
import { DailyRewards } from "./DailyRewards";
import { WeeklyMissions } from "./WeeklyMissions";
import { AlbumRewards } from "./AlbumRewards";
import { RankRewards } from "./RankRewards";
import { memo } from "react";

interface RewardsHologramProps {
  currentTab: "daily" | "weekly" | "albums" | "rank";
}

export const RewardsHologram = memo(function RewardsHologram({ currentTab }: RewardsHologramProps) {
  // Memoize the number of rewards for each tab to prevent recalculation
  const numRewardsMap = useMemo(() => ({
    daily: 7,
    weekly: 5,
    albums: 4,
    rank: 3
  }), []);
  
  // Show all rewards immediately for better performance
  const [visibleRewards, setVisibleRewards] = useState<number[]>([]);
  
  // Update visible rewards when tab changes
  useEffect(() => {
    const numRewards = numRewardsMap[currentTab];
    // Create an array with all indices visible
    const allRewards = Array.from({ length: numRewards }, (_, i) => i);
    // Show all rewards immediately
    setVisibleRewards(allRewards);
  }, [currentTab, numRewardsMap]);
  
  // Memoize title to prevent re-rendering
  const title = useMemo(() => (
    <h3 className="font-orbitron text-lg text-white">Recompensas</h3>
  ), []);
  
  // Use useCallback for current tab rendering to prevent function recreation
  const renderRewards = useCallback(() => {
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
  }, [currentTab, visibleRewards]);
  
  return (
    <div className="min-h-[400px]">
      {title}
      <div className="relative mt-2">
        <div className="absolute inset-0 bg-circuit-pattern opacity-10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-neon-purple/5 to-transparent pointer-events-none"></div>
        {renderRewards()}
      </div>
    </div>
  );
});
