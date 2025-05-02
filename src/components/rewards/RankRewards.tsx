
import { NFTFloatingCard } from "@/components/ui/nft-floating-card";
import { memo, useEffect } from "react";
import { OptimizedImage, preloadCriticalImages } from "./OptimizedImage";

// Define all rank images in a module-level constant
const RANK_IMAGES = [
  "/lovable-uploads/3ed65cb1-f49f-4076-be44-44a53cff5153.png", 
  "/lovable-uploads/784d0ec2-86ff-4108-b22f-d1e611e0c4cc.png", 
  "/lovable-uploads/83efb069-d2ec-496b-81f2-330f7015674f.png"
];

// Start preloading immediately
preloadCriticalImages(RANK_IMAGES);

export const RankRewards = memo(function RankRewards({ visibleRewards }: { visibleRewards: number[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className={`flex flex-col items-center transition-opacity duration-500 ${visibleRewards.includes(index) ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-center mb-2">
            <span className={`font-orbitron text-lg ${index === 0 ? "text-neon-blue" : index === 1 ? "text-neon-purple" : "text-neon-pink"}`}>
              {["Elite", "Lenda", "Hall da Fama"][index]}
            </span>
          </div>
          <div className="relative">
            <NFTFloatingCard 
              className="h-48 w-full" 
              isHolographic
              glowColor={
                index === 0 ? "rgba(0, 217, 255, 0.8)" : 
                index === 1 ? "rgba(155, 135, 245, 0.8)" : 
                "rgba(255, 113, 225, 0.8)"
              }
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-40 w-40 flex items-center justify-center">
                  <OptimizedImage 
                    src={`/lovable-uploads/${RANK_IMAGES[index].split('/').pop()}`} 
                    alt={`Recompensa ${index + 1}`}
                    className="h-40 w-40"
                    objectFit="contain"
                    width="160"
                    height="160"
                    priority={true}
                    containerClassName="flex items-center justify-center"
                  />
                </div>
              </div>
            </NFTFloatingCard>
            <div className="absolute -top-4 -right-4 bg-goinft-dark border-2 border-neon-purple px-3 py-1 rounded-full font-orbitron text-white text-sm">
              {["TOP 100", "TOP 10", "TOP 3"][index]}
            </div>
          </div>
          <div className="mt-4 text-center">
            <h4 className="text-white text-sm font-orbitron mb-2">Recompensa do Mundo Real</h4>
            <span className="bg-gradient-to-r from-neon-purple to-neon-pink text-white text-xs px-3 py-1 rounded-full">
              {[
                "Camisa Oficial Autografada", 
                "Ingresso VIP + Meet & Greet", 
                "Bola Autografada + Experiência Exclusiva"
              ][index]}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
});
