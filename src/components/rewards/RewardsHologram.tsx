
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
  
  // Reset visible rewards when tab changes
  useEffect(() => {
    // Clear previous state
    setVisibleRewards([]);
    
    let isMounted = true;
    let timeoutId: NodeJS.Timeout;
    
    const showRewards = () => {
      const numRewards = {
        daily: 7,
        weekly: 5,
        albums: 4,
        rank: 3
      }[currentTab];
      
      // Create an array from 0 to numRewards-1
      const allIndexes = Array.from({ length: numRewards }, (_, i) => i);
      
      // Show all rewards at once initially to fix the Day 1 issue
      setVisibleRewards(allIndexes);
      
      // Optional: You can still animate them by adding a small delay between each
      // but ensure all are visible from the start
      /*
      let currentIndex = 0;
      
      const addNextReward = () => {
        if (!isMounted) return;
        
        if (currentIndex < numRewards) {
          setVisibleRewards(prev => [...prev, currentIndex]);
          currentIndex++;
          timeoutId = setTimeout(addNextReward, 200);
        }
      };
      
      // Start animation
      timeoutId = setTimeout(addNextReward, 100);
      */
    };
    
    // Start after a small delay
    timeoutId = setTimeout(showRewards, 100);
    
    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
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
        {renderRewards()}
      </div>
    </div>
  );
});
