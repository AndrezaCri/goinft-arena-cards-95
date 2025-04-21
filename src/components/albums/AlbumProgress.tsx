
interface AlbumProgressProps {
  album: {
    id: string;
    name: string;
  };
}

export function AlbumProgress({ album }: AlbumProgressProps) {
  return (
    <div className="bg-goinft-card rounded-xl p-6 border border-neon-purple/30">
      <h3 className="text-white font-orbitron text-xl font-bold mb-6">
        Progresso de Conclusão do Álbum
      </h3>
      
      <div className="space-y-6">
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-white font-medium">Cards Comuns</span>
            <span className="text-white/70">8/12</span>
          </div>
          <div className="w-full bg-goinft-darker rounded-full h-2.5 overflow-hidden">
            <div className="bg-gray-400 h-2.5 animate-pulse" style={{ width: "66.6%" }}></div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-white font-medium">Cards Raros</span>
            <span className="text-white/70">3/10</span>
          </div>
          <div className="w-full bg-goinft-darker rounded-full h-2.5 overflow-hidden">
            <div className="bg-neon-blue h-2.5 animate-pulse" style={{ width: "30%" }}></div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-white font-medium">Cards Épicos</span>
            <span className="text-white/70">2/7</span>
          </div>
          <div className="w-full bg-goinft-darker rounded-full h-2.5 overflow-hidden">
            <div className="bg-neon-purple h-2.5 animate-pulse" style={{ width: "28.5%" }}></div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-white font-medium">Cards Lendários</span>
            <span className="text-white/70">1/3</span>
          </div>
          <div className="w-full bg-goinft-darker rounded-full h-2.5 overflow-hidden">
            <div className="bg-neon-pink h-2.5 animate-pulse" style={{ width: "33.3%" }}></div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-goinft-light/20 rounded-lg border border-neon-purple/30">
        <h4 className="text-white font-orbitron font-bold mb-4">Recompensas do Álbum</h4>
        <ul className="space-y-3">
          <li className="flex items-center justify-between p-2 bg-goinft-card/50 rounded-lg">
            <span className="text-white/70">50% Completo</span>
            <span className="px-3 py-1 rounded-full bg-neon-purple/20 text-neon-purple text-xs font-medium">
              Card Especial
            </span>
          </li>
          <li className="flex items-center justify-between p-2 bg-goinft-card/50 rounded-lg">
            <span className="text-white/70">75% Completo</span>
            <span className="px-3 py-1 rounded-full bg-neon-blue/20 text-neon-blue text-xs font-medium">
              10 CHZ Tokens
            </span>
          </li>
          <li className="flex items-center justify-between p-2 bg-goinft-card/50 rounded-lg">
            <span className="text-white/70">100% Completo</span>
            <span className="px-3 py-1 rounded-full bg-neon-pink/20 text-neon-pink text-xs font-medium">
              NFT Exclusivo
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
