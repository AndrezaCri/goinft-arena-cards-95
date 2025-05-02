
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
    // Limpar estado anterior
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
      
      let currentIndex = 0;
      
      const addNextReward = () => {
        if (!isMounted) return;
        
        if (currentIndex < numRewards) {
          setVisibleRewards(prev => [...prev, currentIndex]);
          currentIndex++;
          timeoutId = setTimeout(addNextReward, 200);
        }
      };
      
      // Inicie a animação
      timeoutId = setTimeout(addNextReward, 100);
    };
    
    // Inicie após um pequeno delay
    timeoutId = setTimeout(showRewards, 100);
    
    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, [currentTab]);
  
  // Use useMemo para elementos que não mudam frequentemente
  const title = useMemo(() => (
    <h3 className="font-orbitron text-lg text-white">Recompensas</h3>
  ), []);
  
  // Use useCallback para funções de renderização condicional
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
