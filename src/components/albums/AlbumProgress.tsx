
import React from 'react';
import { Trophy, Star, Gift } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

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
        <h4 className="text-white font-orbitron font-bold mb-4 flex items-center">
          <Trophy className="mr-2 text-neon-yellow" /> Recompensas do Álbum
        </h4>
        <ul className="space-y-3">
          <li className="flex items-center justify-between p-2 bg-goinft-card/50 rounded-lg">
            <div className="flex items-center space-x-3">
              <Star className="text-neon-purple" />
              <span className="text-white/70">50% Completo</span>
            </div>
            <Badge variant="secondary" className="bg-neon-purple/20 text-neon-purple">
              Card Especial
            </Badge>
          </li>
          <li className="flex items-center justify-between p-2 bg-goinft-card/50 rounded-lg">
            <div className="flex items-center space-x-3">
              <Gift className="text-neon-blue" />
              <span className="text-white/70">75% Completo</span>
            </div>
            <Badge variant="secondary" className="bg-neon-blue/20 text-neon-blue">
              10 CHZ Tokens
            </Badge>
          </li>
          <li className="flex items-center justify-between p-2 bg-goinft-card/50 rounded-lg">
            <div className="flex items-center space-x-3">
              <Trophy className="text-neon-pink" />
              <span className="text-white/70">100% Completo</span>
            </div>
            <Badge variant="secondary" className="bg-neon-pink/20 text-neon-pink">
              NFT Exclusivo
            </Badge>
          </li>
        </ul>
        
        <div className="mt-4 bg-goinft-darker/50 p-3 rounded-lg">
          <p className="text-white/70 text-sm">
            Complete este álbum para desbloquear recompensas especiais e mostrar 
            sua habilidade de colecionador!
          </p>
        </div>
      </div>
    </div>
  );
}
