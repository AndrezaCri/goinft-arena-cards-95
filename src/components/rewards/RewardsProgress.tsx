
import { BadgeDollarSign, Calendar, Award, Star } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface RewardsProgressProps {
  currentTab: "daily" | "weekly" | "albums" | "rank";
}

export function RewardsProgress({ currentTab }: RewardsProgressProps) {
  // Sample timeline data - in a real app, this would come from API/context
  const getProgressData = () => {
    switch (currentTab) {
      case "daily":
        return [
          { label: "Dia 1", completed: true, reward: "5 CHZ" },
          { label: "Dia 2", completed: true, reward: "10 CHZ" },
          { label: "Dia 3", completed: true, reward: "Pacote Básico" },
          { label: "Dia 4", completed: true, reward: "15 CHZ" },
          { label: "Dia 5", completed: false, reward: "NFT Raro" },
          { label: "Dia 6", completed: false, reward: "25 CHZ" },
          { label: "Dia 7", completed: false, reward: "NFT Lendário" }
        ];
      
      case "weekly":
        return [
          { label: "Missão 1", completed: true, reward: "30 XP" },
          { label: "Missão 2", completed: true, reward: "50 XP" },
          { label: "Missão 3", completed: true, reward: "Pacote Premium" },
          { label: "Missão 4", completed: false, reward: "100 XP" },
          { label: "Missão 5", completed: false, reward: "Card Lendário" }
        ];
        
      case "albums":
        return [
          { label: "Copa SP", completed: true, reward: "10 CHZ + NFT" },
          { label: "Brasileirão", completed: true, reward: "10 CHZ + NFT" },
          { label: "Libertadores", completed: false, reward: "10 CHZ + NFT" },
          { label: "Legends", completed: false, reward: "50 CHZ + NFT" }
        ];
        
      case "rank":
        return [
          { label: "Iniciante", completed: true, reward: "Badge Digital" },
          { label: "Colecionador", completed: true, reward: "Acesso Especial" },
          { label: "Elite", completed: true, reward: "Camisa Oficial" },
          { label: "Lenda", completed: false, reward: "Ingresso VIP" },
          { label: "Hall da Fama", completed: false, reward: "Experiência Exclusiva" }
        ];
      
      default:
        return [];
    }
  };
  
  const progressData = getProgressData();
  const completedCount = progressData.filter(item => item.completed).length;
  const progressPercentage = Math.round((completedCount / progressData.length) * 100);
  
  const getIcon = (item: { label: string; completed: boolean; reward: string }) => {
    if (currentTab === "daily") return <Calendar className={`h-5 w-5 ${item.completed ? "text-neon-blue" : "text-white/50"}`} />;
    if (currentTab === "weekly") return <BadgeDollarSign className={`h-5 w-5 ${item.completed ? "text-neon-purple" : "text-white/50"}`} />;
    if (currentTab === "albums") return <Award className={`h-5 w-5 ${item.completed ? "text-neon-green" : "text-white/50"}`} />;
    return <Star className={`h-5 w-5 ${item.completed ? "text-neon-pink" : "text-white/50"}`} />;
  };
  
  return (
    <div className="cyberpunk-card p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-orbitron text-white text-lg">Seu Progresso</h3>
        <div className="bg-goinft-light/30 px-3 py-1 rounded-full">
          <span className="text-white text-sm font-orbitron">{completedCount}/{progressData.length} Completados</span>
        </div>
      </div>
      
      <div className="mb-6">
        <Progress value={progressPercentage} className="h-3 bg-goinft-light/30">
          <div 
            className={`absolute inset-0 ${
              currentTab === "daily" ? "bg-gradient-to-r from-neon-purple to-neon-blue" : 
              currentTab === "weekly" ? "bg-gradient-to-r from-neon-blue to-neon-purple" : 
              currentTab === "albums" ? "bg-gradient-to-r from-neon-green to-neon-blue" : 
              "bg-gradient-to-r from-neon-pink to-neon-purple"
            } rounded-full`} 
            style={{ width: `${progressPercentage}%` }} 
          />
        </Progress>
      </div>
      
      <div className="relative">
        {/* Progress line */}
        <div className="absolute top-0 bottom-0 left-6 w-px bg-white/10 z-0"></div>
        
        <div className="space-y-6 relative z-10">
          {progressData.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className={`mt-0.5 rounded-full p-1 ${item.completed ? "bg-gradient-to-r from-neon-purple to-neon-blue" : "bg-goinft-light/30"}`}>
                {getIcon(item)}
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <h4 className={`font-orbitron text-base ${item.completed ? "text-white" : "text-white/70"}`}>
                    {item.label}
                  </h4>
                  <div className={`flex items-center mt-1 sm:mt-0 px-3 py-1 rounded-full ${
                    item.completed 
                      ? "bg-goinft-light/30 text-white" 
                      : "bg-goinft-dark/50 text-white/50"
                  }`}>
                    <span className="text-xs font-medium">{item.reward}</span>
                  </div>
                </div>
                
                {item.completed && (
                  <span className="text-neon-green text-xs mt-1 flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                    Completo
                  </span>
                )}
                
                {!item.completed && (
                  <span className="text-white/50 text-xs mt-1">Pendente</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
