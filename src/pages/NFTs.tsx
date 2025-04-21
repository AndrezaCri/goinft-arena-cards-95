
import { CyberpunkHeading } from "@/components/ui/cyberpunk-heading";

const NFTS = [
  {
    name: "Lionel Messi",
    club: "Inter Miami",
    img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=facearea&w=256&q=80&facepad=3",
  },
  {
    name: "Cristiano Ronaldo",
    club: "Al Nassr",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=256&q=80&facepad=3",
  },
  {
    name: "Neymar Jr.",
    club: "Al Hilal",
    img: "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?auto=format&fit=facearea&w=256&q=80&facepad=3",
  },
];

export default function NFTs() {
  return (
    <div className="max-w-4xl mx-auto mt-10 px-4 py-8 cyberpunk-card">
      <CyberpunkHeading size="xl" animated>
        NFTs Disponíveis
      </CyberpunkHeading>
      <div className="mt-8 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {NFTS.map((nft, i) => (
          <div key={i} className="flex flex-col items-center p-4 hologram-effect border-2 border-neon-blue/40 shadow-lg rounded-xl bg-goinft-dark">
            <img src={nft.img} alt={nft.name} className="w-24 h-24 rounded-lg object-cover border-2 border-neon-blue/60 shadow" />
            <div className="mt-3 text-center">
              <span className="block font-orbitron text-lg text-neon-blue">
                {nft.name}
              </span>
              <span className="block text-sm text-white/70">
                {nft.club}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
