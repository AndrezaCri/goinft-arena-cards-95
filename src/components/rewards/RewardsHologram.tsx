
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
  const [visibleRewards, setVisibleRewards] = useState<number[]>([]);
  
  // Reset visible rewards when tab changes and show them immediately
  useEffect(() => {
    // Clear previous state
    setVisibleRewards([]);
    
    let isMounted = true;
    
    const showRewards = () => {
      if (!isMounted) return;
      
      const numRewards = {
        daily: 7,
        weekly: 5,
        albums: 4,
        rank: 3
      }[currentTab];
      
      // Create an array from 0 to numRewards-1
      const allIndexes = Array.from({ length: numRewards }, (_, i) => i);
      
      // Show all rewards immediately
      setVisibleRewards(allIndexes);
    };
    
    // Start immediately
    showRewards();
    
    return () => {
      isMounted = false;
    };
  }, [currentTab]);
  
  // Use useMemo for elements that don't change frequently
  const title = useMemo(() => (
    <h3 className="font-orbitron text-lg text-white">Recompensas</h3>
  ), []);
  
  // Use useCallback for conditional rendering functions
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
        <div className="flex items-center justify-center w-full">
          {renderRewards()}
        </div>
      </div>
    </div>
  );
});
