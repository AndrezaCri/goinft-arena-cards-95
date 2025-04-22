
import { useState } from "react";
import { CyberpunkHeading } from "@/components/ui/cyberpunk-heading";
import { RewardsHologram } from "@/components/rewards/RewardsHologram";
import { RewardsTiers } from "@/components/rewards/RewardsTiers";
import { RewardsProgress } from "@/components/rewards/RewardsProgress";
import { UserCollectorRank } from "@/components/rewards/UserCollectorRank";
import { RewardsStats } from "@/components/rewards/RewardsStats";

export default function Rewards() {
  const [currentTab, setCurrentTab] = useState<"daily" | "weekly" | "albums" | "rank">("daily");
  
  return (
    <div className="container max-w-7xl mx-auto px-4 py-6">
      <div className="mb-8">
        <CyberpunkHeading 
          size="xl" 
          variant="gradient" 
          withLinesDecoration
          className="mb-2"
        >
          Sistema de Recompensas
        </CyberpunkHeading>
        <p className="text-white/70 text-center max-w-2xl mx-auto">
          Complete missões, construa sua sequência de logins e suba no ranking para ganhar recompensas exclusivas no mundo digital e real
        </p>
      </div>
      
      {/* User Rank Section */}
      <UserCollectorRank />
      
      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {/* Left Column - Rewards Hologram */}
        <div className="md:col-span-2">
          <div className="cyberpunk-card p-6 h-full">
            <div className="flex space-x-4 mb-6 overflow-x-auto pb-2 scrollbar-none">
              <button 
                onClick={() => setCurrentTab("daily")}
                className={`px-4 py-2 rounded-md whitespace-nowrap font-orbitron text-sm ${currentTab === "daily" 
                  ? "bg-gradient-to-r from-neon-purple to-neon-blue text-white" 
                  : "bg-goinft-light/50 text-white/70 hover:text-white/90"}`}
              >
                Sequência de Logins
              </button>
              <button 
                onClick={() => setCurrentTab("weekly")}
                className={`px-4 py-2 rounded-md whitespace-nowrap font-orbitron text-sm ${currentTab === "weekly" 
                  ? "bg-gradient-to-r from-neon-purple to-neon-blue text-white" 
                  : "bg-goinft-light/50 text-white/70 hover:text-white/90"}`}
              >
                Missões Semanais
              </button>
              <button 
                onClick={() => setCurrentTab("albums")}
                className={`px-4 py-2 rounded-md whitespace-nowrap font-orbitron text-sm ${currentTab === "albums" 
                  ? "bg-gradient-to-r from-neon-purple to-neon-blue text-white" 
                  : "bg-goinft-light/50 text-white/70 hover:text-white/90"}`}
              >
                Álbuns Concluídos
              </button>
              <button 
                onClick={() => setCurrentTab("rank")}
                className={`px-4 py-2 rounded-md whitespace-nowrap font-orbitron text-sm ${currentTab === "rank" 
                  ? "bg-gradient-to-r from-neon-purple to-neon-blue text-white" 
                  : "bg-goinft-light/50 text-white/70 hover:text-white/90"}`}
              >
                Classificação de Colecionador
              </button>
            </div>
            
            <RewardsHologram currentTab={currentTab} />
          </div>
        </div>
        
        {/* Right Column - Rewards Stats and Tiers */}
        <div className="flex flex-col gap-6">
          <RewardsStats currentTab={currentTab} />
          <RewardsTiers currentTab={currentTab} />
        </div>
      </div>
      
      {/* Progress Section */}
      <div className="mt-8">
        <RewardsProgress currentTab={currentTab} />
      </div>
    </div>
  );
}
