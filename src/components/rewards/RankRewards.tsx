
import { NFTFloatingCard } from "@/components/ui/nft-floating-card";
import { memo } from "react";

export const RankRewards = memo(function RankRewards({ visibleRewards }: { visibleRewards: number[] }) {
  // Image sources
  const rankImages = [
    "3ed65cb1-f49f-4076-be44-44a53cff5153.png", 
    "784d0ec2-86ff-4108-b22f-d1e611e0c4cc.png", 
    "83efb069-d2ec-496b-81f2-330f7015674f.png"
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 w-full">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className={`flex flex-col items-center transition-opacity duration-500 ${visibleRewards.includes(index) ? 'opacity-100' : 'opacity-0'}`}>
          <NFTFloatingCard 
            className="h-60 w-full flex items-center justify-center" 
            isHolographic
            glowColor={
              index === 0 ? "rgba(0, 217, 255, 0.8)" : 
              index === 1 ? "rgba(155, 135, 245, 0.8)" : 
              "rgba(255, 113, 225, 0.8)"
            }
          >
            <div className="flex items-center justify-center w-full h-full">
              <img 
                src={`/lovable-uploads/${rankImages[index]}`} 
                alt={`Recompensa ${index + 1}`}
                className="h-48 w-48 object-contain"
                width="192"
                height="192"
              />
            </div>
          </NFTFloatingCard>
        </div>
      ))}
    </div>
  );
});
