
import { Trophy, Calendar, Star, Award } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface RewardsStatsProps {
  currentTab: "daily" | "weekly" | "albums" | "rank";
}

// Define more specific types for each stat category
interface DailyStats {
  currentStreak: number;
  maxStreak: number;
  progress: number;
  label: string;
}

interface WeeklyStats {
  completed: number;
  total: number;
  progress: number;
  label: string;
}

interface AlbumsStats {
  completed: number;
  total: number;
  progress: number;
  label: string;
}

interface RankStats {
  position: number;
  total: number;
  percentile: number;
  progress: number;
  label: string;
}

// Combined type for all possible stats
type StatsData = {
  daily: DailyStats;
  weekly: WeeklyStats;
  albums: AlbumsStats;
  rank: RankStats;
}

export function RewardsStats({ currentTab }: RewardsStatsProps) {
  // Sample stats data - in a real app, this would come from API/context
  const stats: StatsData = {
    daily: {
      currentStreak: 4,
      maxStreak: 7,
      progress: 57,
      label: "Sequência Atual"
    },
    weekly: {
      completed: 3,
      total: 5,
      progress: 60,
      label: "Missões Completadas"
    },
    albums: {
      completed: 2,
      total: 4,
      progress: 50,
      label: "Álbuns Completados"
    },
    rank: {
      position: 37,
      total: 1000,
      percentile: 96,
      progress: 96,
      label: "Ranking Atual"
    }
  };
  
  const currentStats = stats[currentTab];
  
  // Get the appropriate icon based on the tab
  const getIcon = () => {
    switch (currentTab) {
      case "daily":
        return <Calendar className="h-6 w-6 text-neon-blue" />;
      case "weekly":
        return <Trophy className="h-6 w-6 text-neon-purple" />;
      case "albums":
        return <Award className="h-6 w-6 text-neon-green" />;
      case "rank":
        return <Star className="h-6 w-6 text-neon-pink" />;
      default:
        return null;
    }
  };
  
  return (
    <div className="cyberpunk-card p-5">
      <div className="flex items-center gap-3 mb-4">
        {getIcon()}
        <h3 className="font-orbitron text-white text-lg">{currentStats.label}</h3>
      </div>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          {currentTab === "daily" && (
            <>
              <span className="text-white/70">Sequência atual</span>
              <span className="font-orbitron text-white">{stats.daily.currentStreak} dias</span>
            </>
          )}
          
          {currentTab === "weekly" && (
            <>
              <span className="text-white/70">Missões completadas</span>
              <span className="font-orbitron text-white">{stats.weekly.completed}/{stats.weekly.total}</span>
            </>
          )}
          
          {currentTab === "albums" && (
            <>
              <span className="text-white/70">Álbuns completados</span>
              <span className="font-orbitron text-white">{stats.albums.completed}/{stats.albums.total}</span>
            </>
          )}
          
          {currentTab === "rank" && (
            <>
              <span className="text-white/70">Sua posição</span>
              <span className="font-orbitron text-white">#{stats.rank.position}</span>
            </>
          )}
        </div>
        
        <Progress value={currentStats.progress} className="h-2 bg-goinft-light/30">
          <div 
            className={`absolute inset-0 ${
              currentTab === "daily" ? "bg-neon-blue" : 
              currentTab === "weekly" ? "bg-neon-purple" : 
              currentTab === "albums" ? "bg-neon-green" : 
              "bg-neon-pink"
            } rounded-full`} 
            style={{ width: `${currentStats.progress}%` }} 
          />
        </Progress>
        
        <div className="flex justify-between items-center text-xs text-white/60">
          {currentTab === "daily" && (
            <>
              <span>0 dias</span>
              <span>Meta: 7 dias</span>
            </>
          )}
          
          {currentTab === "weekly" && (
            <>
              <span>0 missões</span>
              <span>Meta: 5 missões</span>
            </>
          )}
          
          {currentTab === "albums" && (
            <>
              <span>0 álbuns</span>
              <span>Meta: 4 álbuns</span>
            </>
          )}
          
          {currentTab === "rank" && (
            <>
              <span>Top {stats.rank.percentile}%</span>
              <span>Meta: Top 1%</span>
            </>
          )}
        </div>
        
        {currentTab === "daily" && (
          <div className="flex justify-between items-center pt-2 border-t border-white/10">
            <span className="text-white/70">Sequência máxima</span>
            <span className="font-orbitron text-neon-blue">{stats.daily.maxStreak} dias</span>
          </div>
        )}
        
        {currentTab === "rank" && (
          <div className="flex justify-between items-center pt-2 border-t border-white/10">
            <span className="text-white/70">Total de colecionadores</span>
            <span className="font-orbitron text-white">{stats.rank.total}</span>
          </div>
        )}
      </div>
    </div>
  );
}
