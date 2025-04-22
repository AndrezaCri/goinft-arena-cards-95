
import { NFTFloatingCard } from "@/components/ui/nft-floating-card";
import { CyberpunkButton } from "@/components/ui/cyberpunk-button";
import { useRewards } from "@/contexts/RewardsContext";

export function DailyRewards({ visibleRewards }: { visibleRewards: number[] }) {
  const { loginStreak, handleDailyLogin } = useRewards();

  return (
    <div className="grid grid-cols-7 gap-2 mt-4 items-end">
      {Array.from({ length: 7 }).map((_, index) => (
        <div key={index} className={`flex flex-col items-center transition-opacity duration-500 ${visibleRewards.includes(index) ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-center mb-2">
            <span className="font-orbitron text-sm text-white">Dia {index + 1}</span>
          </div>
          <div className="relative h-28 md:h-36 w-full">
            {index < 5 ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-goinft-card rounded-lg h-20 w-20 md:h-24 md:w-24 flex items-center justify-center border border-neon-blue/30">
                  <img 
                    src={`/lovable-uploads/${["4263efde-699d-4758-a229-b5e15b0b60dd.png", "8959e228-6687-4e32-bf1e-849b2c9ea30c.png", "8b42a4aa-6e29-46c0-a04e-60ebfa0b064c.png", "e8cc150f-670e-4639-8235-bfd8df7e7551.png", "c7c901dd-d2db-46de-9129-42fb4c41c341.png"][index % 5]}`} 
                    alt={`Reward ${index + 1}`}
                    className="h-16 w-16 md:h-20 md:w-20 object-contain"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded-full font-orbitron">
                    {[5, 10, 15, 20, 25][index % 5]} CHZ
                  </div>
                </div>
              </div>
            ) : (
              <NFTFloatingCard 
                className="h-full w-full" 
                size="sm" 
                isHolographic
                glowColor={index === 6 ? "rgba(255, 113, 225, 0.8)" : "rgba(155, 135, 245, 0.6)"}
              >
                <img 
                  src={`/lovable-uploads/${index === 5 ? "1cb631c9-795d-4a11-8750-3e34509f594d.png" : "506f8852-1303-4875-ae3d-6068e947cb1d.png"}`} 
                  alt={`NFT Reward ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </NFTFloatingCard>
            )}
          </div>
          <div className="mt-2 text-center">
            <span className="text-xs text-white/70">
              {index < 5 ? `${[5, 10, 15, 20, 25][index % 5]} CHZ` : index === 5 ? "NFT Raro" : "NFT Lendário"}
            </span>
          </div>
          <CyberpunkButton
            size="sm"
            variant={index <= loginStreak ? "accent" : "outline"}
            className="text-xs"
            onClick={() => index === loginStreak && handleDailyLogin()}
            disabled={index !== loginStreak}
          >
            {index < loginStreak ? "Coletado" : index === loginStreak ? "Coletar" : "Bloqueado"}
          </CyberpunkButton>
        </div>
      ))}
    </div>
  );
}
