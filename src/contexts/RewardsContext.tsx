
import React, { createContext, useContext, useState } from 'react';
import { toast } from "sonner";

interface RewardsContextType {
  loginStreak: number;
  completedMissions: string[];
  completedAlbums: string[];
  handleDailyLogin: () => void;
  handleCompleteMission: (missionId: string) => void;
  handleCompleteAlbum: (albumId: string) => void;
}

const RewardsContext = createContext<RewardsContextType | null>(null);

export function RewardsProvider({ children }: { children: React.ReactNode }) {
  const [loginStreak, setLoginStreak] = useState(4); // Current streak of 4 days
  const [completedMissions, setCompletedMissions] = useState<string[]>(['mission1', 'mission2', 'mission3']);
  const [completedAlbums, setCompletedAlbums] = useState<string[]>(['album1', 'album2']);

  const handleDailyLogin = () => {
    setLoginStreak(prev => {
      const newStreak = prev + 1;
      if (newStreak === 5) {
        toast.success("Parabéns! Você ganhou um NFT raro por fazer login 5 dias seguidos!");
      } else if (newStreak === 7) {
        toast.success("Incrível! Você ganhou um NFT lendário por completar 7 dias de login!");
      } else {
        toast.success(`Você ganhou ${[5, 10, 15, 20, 25][newStreak % 5]} CHZ por fazer login hoje!`);
      }
      return newStreak;
    });
  };

  const handleCompleteMission = (missionId: string) => {
    if (!completedMissions.includes(missionId)) {
      setCompletedMissions(prev => [...prev, missionId]);
      const missionRewards = {
        mission1: '30 XP',
        mission2: '50 XP',
        mission3: 'Pacote Premium',
        mission4: '100 XP',
        mission5: 'Card Lendário'
      };
      toast.success(`Missão concluída! Você ganhou ${missionRewards[missionId as keyof typeof missionRewards]}`);
    }
  };

  const handleCompleteAlbum = (albumId: string) => {
    if (!completedAlbums.includes(albumId)) {
      setCompletedAlbums(prev => [...prev, albumId]);
      const albumRewards = {
        album1: '10 CHZ + NFT Copa SP',
        album2: '10 CHZ + NFT Brasileirão',
        album3: '10 CHZ + NFT Libertadores',
        album4: '50 CHZ + NFT Legends'
      };
      toast.success(`Álbum completo! Você ganhou ${albumRewards[albumId as keyof typeof albumRewards]}`);
    }
  };

  return (
    <RewardsContext.Provider value={{
      loginStreak,
      completedMissions,
      completedAlbums,
      handleDailyLogin,
      handleCompleteMission,
      handleCompleteAlbum
    }}>
      {children}
    </RewardsContext.Provider>
  );
}

export function useRewards() {
  const context = useContext(RewardsContext);
  if (!context) {
    throw new Error('useRewards must be used within a RewardsProvider');
  }
  return context;
}
