
import { Trophy, Award, Medal, Star } from "lucide-react";

interface RewardsTiersProps {
  currentTab: "daily" | "weekly" | "albums" | "rank";
}

export function RewardsTiers({ currentTab }: RewardsTiersProps) {
  // Determine what tiers to show based on the selected tab
  const renderTiers = () => {
    switch (currentTab) {
      case "daily":
        return (
          <>
            <div className="bg-goinft-light/20 p-4 rounded-lg border-l-4 border-neon-blue">
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-neon-blue" />
                <h4 className="font-orbitron text-white text-sm">3 Dias Consecutivos</h4>
              </div>
              <p className="text-white/70 text-xs mt-2">
                Desbloqueie um pacote básico com 3 cards para sua coleção
              </p>
            </div>
            
            <div className="bg-goinft-light/20 p-4 rounded-lg border-l-4 border-neon-purple">
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-neon-purple" />
                <h4 className="font-orbitron text-white text-sm">5 Dias Consecutivos</h4>
              </div>
              <p className="text-white/70 text-xs mt-2">
                Ganhe um NFT raro exclusivo e 15 tokens CHZ
              </p>
            </div>
            
            <div className="bg-goinft-light/20 p-4 rounded-lg border-l-4 border-neon-pink">
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-neon-pink" />
                <h4 className="font-orbitron text-white text-sm">7 Dias Consecutivos</h4>
              </div>
              <p className="text-white/70 text-xs mt-2">
                NFT lendário exclusivo + 50 tokens CHZ + incremento de XP
              </p>
            </div>
          </>
        );
      
      case "weekly":
        return (
          <>
            <div className="bg-goinft-light/20 p-4 rounded-lg border-l-4 border-neon-blue">
              <div className="flex items-center gap-2">
                <Medal className="h-5 w-5 text-neon-blue" />
                <h4 className="font-orbitron text-white text-sm">1 Missão Completa</h4>
              </div>
              <p className="text-white/70 text-xs mt-2">
                Ganhe 30-50 XP e aumente seu nível de colecionador
              </p>
            </div>
            
            <div className="bg-goinft-light/20 p-4 rounded-lg border-l-4 border-neon-purple">
              <div className="flex items-center gap-2">
                <Medal className="h-5 w-5 text-neon-purple" />
                <h4 className="font-orbitron text-white text-sm">3 Missões Completas</h4>
              </div>
              <p className="text-white/70 text-xs mt-2">
                Pacote premium com 5 cards + chance de raro ou épico
              </p>
            </div>
            
            <div className="bg-goinft-light/20 p-4 rounded-lg border-l-4 border-neon-pink">
              <div className="flex items-center gap-2">
                <Medal className="h-5 w-5 text-neon-pink" />
                <h4 className="font-orbitron text-white text-sm">5 Missões Completas</h4>
              </div>
              <p className="text-white/70 text-xs mt-2">
                Card lendário garantido + 100 tokens CHZ + adesivo digital exclusivo
              </p>
            </div>
          </>
        );
        
      case "albums":
        return (
          <>
            <div className="bg-goinft-light/20 p-4 rounded-lg border-l-4 border-neon-blue">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-neon-blue" />
                <h4 className="font-orbitron text-white text-sm">1 Álbum Completo</h4>
              </div>
              <p className="text-white/70 text-xs mt-2">
                NFT comemorativo exclusivo + 10 tokens CHZ
              </p>
            </div>
            
            <div className="bg-goinft-light/20 p-4 rounded-lg border-l-4 border-neon-purple">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-neon-purple" />
                <h4 className="font-orbitron text-white text-sm">3 Álbuns Completos</h4>
              </div>
              <p className="text-white/70 text-xs mt-2">
                Acesso a coleções temáticas especiais + 50 tokens CHZ
              </p>
            </div>
            
            <div className="bg-goinft-light/20 p-4 rounded-lg border-l-4 border-neon-pink">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-neon-pink" />
                <h4 className="font-orbitron text-white text-sm">Todos os Álbuns</h4>
              </div>
              <p className="text-white/70 text-xs mt-2">
                Status "Mestre Colecionador" + emblema exclusivo + prêmio físico
              </p>
            </div>
          </>
        );
        
      case "rank":
        return (
          <>
            <div className="bg-goinft-light/20 p-4 rounded-lg border-l-4 border-neon-blue">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-neon-blue" />
                <h4 className="font-orbitron text-white text-sm">Colecionador Elite</h4>
              </div>
              <p className="text-white/70 text-xs mt-2">
                Acesso a mercado exclusivo + camisa oficial autografada
              </p>
            </div>
            
            <div className="bg-goinft-light/20 p-4 rounded-lg border-l-4 border-neon-purple">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-neon-purple" />
                <h4 className="font-orbitron text-white text-sm">Colecionador Lenda</h4>
              </div>
              <p className="text-white/70 text-xs mt-2">
                Ingresso VIP para jogos + meet & greet com jogadores
              </p>
            </div>
            
            <div className="bg-goinft-light/20 p-4 rounded-lg border-l-4 border-neon-pink">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-neon-pink" />
                <h4 className="font-orbitron text-white text-sm">Hall da Fama</h4>
              </div>
              <p className="text-white/70 text-xs mt-2">
                Bola autografada + experiência exclusiva no estádio + NFTs únicos
              </p>
            </div>
          </>
        );
      
      default:
        return null;
    }
  };
  
  return (
    <div className="cyberpunk-card p-5">
      <h3 className="font-orbitron text-white text-lg mb-4">Níveis de Recompensa</h3>
      <div className="space-y-3">
        {renderTiers()}
      </div>
    </div>
  );
}
