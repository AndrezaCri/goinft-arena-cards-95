
import { useState, useEffect } from "react";
import { useRewards } from "@/contexts/RewardsContext";
import { DailyRewards } from "./daily/DailyRewards";
import { WeeklyMissions } from "./weekly/WeeklyMissions";
import { AlbumRewards } from "./albums/AlbumRewards";
import { RankRewards } from "./rank/RankRewards";

interface RewardsHologramProps {
  currentTab: "daily" | "weekly" | "albums" | "rank";
}

export function RewardsHologram({ currentTab }: RewardsHologramProps) {
  const [visibleRewards, setVisibleRewards] = useState<number[]>([]);
  const {
    loginStreak,
    completedMissions,
    completedAlbums,
    handleDailyLogin,
    handleCompleteMission,
    handleCompleteAlbum
  } = useRewards();
  
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
  
  const handleAction = (type: string, id: string) => {
    switch (type) {
      case "daily":
        handleDailyLogin();
        break;
      case "mission":
        handleCompleteMission(id);
        break;
      case "album":
        handleCompleteAlbum(id);
        break;
    }
  };

  const renderRewards = () => {
    switch (currentTab) {
      case "daily":
        return (
          <DailyRewards 
            visibleRewards={visibleRewards}
            loginStreak={loginStreak}
            onDailyAction={handleAction}
          />
        );
      case "weekly":
        return (
          <WeeklyMissions 
            visibleRewards={visibleRewards}
            completedMissions={completedMissions}
            onMissionAction={handleAction}
          />
        );
      case "albums":
        return (
          <AlbumRewards 
            visibleRewards={visibleRewards}
            completedAlbums={completedAlbums}
            onAlbumAction={handleAction}
          />
        );
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
}
