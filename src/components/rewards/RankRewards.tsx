
import { NFTFloatingCard } from "@/components/ui/nft-floating-card";
import { useState, memo } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

// Optimized image component
const OptimizedImage = memo(function OptimizedImage({ src, alt, className }: { src: string, alt: string, className?: string }) {
  const [loaded, setLoaded] = useState(false);
  
  return (
    <div className="relative w-full h-full">
      {!loaded && <Skeleton className="absolute inset-0 h-40 w-40 bg-goinft-darker/60 rounded-lg" />}
      <img 
        src={src} 
        alt={alt}
        className={`${className} ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 w-full h-full object-contain`}
        onLoad={() => setLoaded(true)}
        loading="lazy"
        width="160"
        height="160"
      />
    </div>
  );
});

export function RankRewards({ visibleRewards }: { visibleRewards: number[] }) {
  // Image sources
  const rankImages = [
    "3ed65cb1-f49f-4076-be44-44a53cff5153.png", 
    "784d0ec2-86ff-4108-b22f-d1e611e0c4cc.png", 
    "83efb069-d2ec-496b-81f2-330f7015674f.png"
  ];

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
                <div className="h-40 w-40">
                  <OptimizedImage 
                    src={`/lovable-uploads/${rankImages[index]}`} 
                    alt={`Recompensa ${index + 1}`}
                    className="h-40 w-40 object-contain"
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
          <div className="mt-2 flex space-x-2 justify-center">
            <Button
              variant="outline"
              size="sm"
              className="text-[10px] px-2 py-0 h-6 min-h-0 border border-neon-purple/50 bg-goinft-dark/50 text-white hover:bg-neon-purple/20"
            >
              Ver Detalhes
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="text-[10px] px-2 py-0 h-6 min-h-0 border border-neon-blue/50 bg-goinft-dark/50 text-white hover:bg-neon-blue/20"
            >
              Compartilhar
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
