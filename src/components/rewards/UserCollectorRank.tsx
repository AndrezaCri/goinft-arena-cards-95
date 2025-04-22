
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Trophy, Star, Crown } from "lucide-react";
import { NFTFloatingCard } from "@/components/ui/nft-floating-card";

export function UserCollectorRank() {
  // Sample user data - in a real app, this would come from API/context
  const user = {
    name: "Lucas Silva",
    avatar: "/lovable-uploads/4a6557ee-f96a-4b74-9c95-826470fd2d47.png",
    xp: 2850,
    nextLevelXp: 3000,
    level: 16,
    rank: "Colecionador Lenda",
    badges: ["Copa SP", "Sul-Americana", "Paulista Feminino"],
    totalCards: 112,
    legendaryCards: 5
  };
  
  const xpProgress = Math.round((user.xp / user.nextLevelXp) * 100);
  
  return (
    <div className="cyberpunk-card p-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -right-10 top-1/2 -translate-y-1/2 opacity-20">
        <Trophy size={120} className="text-neon-purple" />
      </div>
      <div className="absolute -left-10 top-1/2 -translate-y-1/2 opacity-20">
        <Crown size={120} className="text-neon-blue" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center relative z-10">
        {/* User Avatar and Basic Info */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <Avatar className="w-20 h-20 border-2 border-neon-purple ring-2 ring-neon-blue/50 ring-offset-2 ring-offset-background">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="bg-neon-purple/20 text-white font-orbitron">
                {user.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-neon-purple to-neon-blue text-white text-xs px-2 py-1 rounded-full font-orbitron">
              LV {user.level}
            </div>
          </div>
          
          <div>
            <h3 className="font-orbitron text-white text-xl">{user.name}</h3>
            <div className="flex items-center gap-1 mt-1">
              <Star className="w-4 h-4 text-neon-pink fill-neon-pink" />
              <span className="text-neon-pink font-orbitron text-sm">{user.rank}</span>
            </div>
            <div className="flex flex-wrap gap-1 mt-2">
              {user.badges.map((badge, index) => (
                <span 
                  key={index}
                  className="text-xs bg-goinft-light/50 text-white/80 px-2 py-0.5 rounded"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* XP Progress */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-white/70 text-sm">XP para o próximo nível</span>
            <span className="text-neon-blue font-orbitron">{user.xp}/{user.nextLevelXp}</span>
          </div>
          <Progress value={xpProgress} className="h-3 bg-goinft-light/50">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full" style={{ width: `${xpProgress}%` }} />
          </Progress>
          <div className="flex justify-between mt-2">
            <span className="text-white/50 text-xs">Nível {user.level}</span>
            <span className="text-white/50 text-xs">Nível {user.level + 1}</span>
          </div>
        </div>
        
        {/* Collection Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-goinft-light/30 p-3 rounded-lg text-center">
            <div className="text-3xl font-orbitron text-white">{user.totalCards}</div>
            <div className="text-xs text-white/70 mt-1">Cards Coletados</div>
          </div>
          <div className="bg-goinft-light/30 p-3 rounded-lg text-center">
            <div className="text-3xl font-orbitron text-neon-pink">{user.legendaryCards}</div>
            <div className="text-xs text-white/70 mt-1">Cards Lendários</div>
          </div>
        </div>
      </div>
    </div>
  );
}
