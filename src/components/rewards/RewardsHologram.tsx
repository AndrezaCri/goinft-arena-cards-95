
import { useState, useEffect, useCallback, useMemo } from "react";
import { DailyRewards } from "./DailyRewards";
import { WeeklyMissions } from "./WeeklyMissions";
import { AlbumRewards } from "./AlbumRewards";
import { RankRewards } from "./RankRewards";
import { memo } from "react";

interface RewardsHologramProps {
  currentTab: "daily" | "weekly" | "albums" | "rank";
}

// Define number of rewards per tab at module level for better optimizations
const NUM_REWARDS_MAP = {
  daily: 7,
  weekly: 5,
  albums: 4,
  rank: 3
};

export const RewardsHologram = memo(function RewardsHologram({ currentTab }: RewardsHologramProps) {
  // Use module-level constant instead of recreating it on each render
  const numRewardsMap = useMemo(() => NUM_REWARDS_MAP, []);
  
  // Create all visible rewards arrays upfront to prevent recreations
  const allVisibleRewardsMap = useMemo(() => ({
    daily: Array.from({ length: numRewardsMap.daily }, (_, i) => i),
    weekly: Array.from({ length: numRewardsMap.weekly }, (_, i) => i),
    albums: Array.from({ length: numRewardsMap.albums }, (_, i) => i),
    rank: Array.from({ length: numRewardsMap.rank }, (_, i) => i),
  }), [numRewardsMap]);
  
  // Use the pre-calculated visible rewards based on current tab
  const visibleRewards = useMemo(() => 
    allVisibleRewardsMap[currentTab], 
    [currentTab, allVisibleRewardsMap]
  );
  
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
