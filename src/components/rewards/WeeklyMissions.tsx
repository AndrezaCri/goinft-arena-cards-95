
import { useRewards } from "@/contexts/RewardsContext";
import { useState, useEffect } from "react";
import { MissionsGrid } from "./MissionsGrid";
import { MissionsHorizontalScroll } from "./MissionsHorizontalScroll";
import { MissionsVerticalStack } from "./MissionsVerticalStack";

export function WeeklyMissions({ visibleRewards }: { visibleRewards: number[] }) {
  const { completedMissions, handleCompleteMission } = useRewards();
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  
  // Check if screen width is less than or equal to 920px
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 920);
    };
    
    // Initial check
    checkScreenSize();
    
    // Add event listener
    window.addEventListener('resize', checkScreenSize);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Mission data
  const missions = [
    {
      id: "mission1",
      title: "Troque 3 cards",
      xpReward: 30,
      imageSrc: "41cc2534-5691-4017-9139-eabc6252d7b4.png"
    },
    {
      id: "mission2",
      title: "Complete 1 álbum",
      xpReward: 50,
      imageSrc: "e6ee08c7-701b-443a-aef5-c1564bcc3bf0.png"
    },
    {
      id: "mission3",
      title: "Compre 2 pacotes",
      xpReward: 75,
      imageSrc: "bfb57833-c13a-46bf-9b77-d240a70a9fe1.png"
    },
    {
      id: "mission4",
      title: "Visite 5 dias",
      xpReward: 100,
      imageSrc: "73671899-97eb-4960-9263-1b9fc542ff21.png"
    },
    {
      id: "mission5",
      title: "Abra 10 pacotes",
      xpReward: 150,
      imageSrc: "5f5cedfc-bae7-41ab-aed0-e44cde3853d1.png"
    }
  ];

  if (isSmallScreen) {
    return (
      <div className="flex flex-col gap-6 mt-6">
        {/* Horizontal scrollable container for first 4 cards */}
        <MissionsHorizontalScroll 
          missions={missions}
          completedMissions={completedMissions}
          onCompleteMission={handleCompleteMission}
          visibleRewards={visibleRewards}
        />
        
        {/* Vertical stacking for remaining cards */}
        <MissionsVerticalStack 
          missions={missions}
          completedMissions={completedMissions}
          onCompleteMission={handleCompleteMission}
          visibleRewards={visibleRewards}
          startIndex={4}
        />
      </div>
    );
  }
  
  // Grid layout for screens larger than 920px
  return (
    <MissionsGrid 
      missions={missions}
      completedMissions={completedMissions}
      onCompleteMission={handleCompleteMission}
      visibleRewards={visibleRewards}
    />
  );
}
