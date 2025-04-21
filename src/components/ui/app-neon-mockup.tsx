
import React from "react";
import { CircuitOverlay } from "@/components/ui/circuit-overlay";
import { RainEffect } from "@/components/ui/rain-effect";
import { cn } from "@/lib/utils";

// Imagens das figurinhas/nfts baseadas no visual das artes
const stickers = [
  {
    club: "BARCELON",
    img: "/lovable-uploads/4bc79dc8-db3d-44a1-86ce-a007db471702.png",
    neon: "shadow-[0_0_20px_6px_#00fff7aa] border-[3px] border-neon-green/90",
  },
  {
    club: "ATLETICO",
    img: "/lovable-uploads/725ebcdd-f459-45fc-a839-0fbc08a8e59d.png",
    neon: "shadow-[0_0_30px_10px_#00d9ffaa] border-[3px] border-neon-blue/80",
  },
  {
    club: "ARSENAL",
    img: "https://placehold.co/120x170/dc143c/fff?text=Arsenal+NFT", // Imagem fictícia
    neon: "shadow-[0_0_18px_8px_#ff71e1aa] border-[3px] border-neon-pink/90",
  }
];

export function AppNeonMockup({ className = "" }: { className?: string }) {
  return (
    <div className={cn(
      "relative z-30 mx-auto flex items-center justify-center select-none animate-float",
      className
    )}>
      {/* Phone+App mockup central */}
      <div className="relative rounded-[2.5rem] pb-10 pt-2 px-2 bg-gradient-to-br from-cyber-dark/90 to-goinft-dark/90 border-4 border-neon-purple/60 " 
        style={{
          boxShadow: "0 0 68px 28px #9b87f599, 0 0 0 10px #00d9ff22 inset"
        }}>
        
        {/* Overlay circuitos brilhante */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <CircuitOverlay className="opacity-95"/>
        </div>
        {/* Gotas de chuva sobre tela */}
        <RainEffect dropColor="#9b87f5" rainCount={48} className="opacity-70 mix-blend-lighten z-30" />

        {/* App (tela) */}
        <div className="relative min-w-[340px] max-w-[368px] w-[92vw] aspect-[9/19] flex flex-col items-center justify-between px-6 py-7 gap-2 z-10">
          {/* Título GoINft */}
          <div className="w-full text-center mb-2">
            <div className="font-orbitron text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue drop-shadow-[0_0_36px_#9b87f5cc]">
              GoINft
            </div>
            <div className="text-white/80 text-base mt-1 font-montserrat">
              Collect football NFTs and<br />
              complete digital sticker albums!
            </div>
          </div>

          {/* Área das figurinhas flutuando */}
          <div className="relative flex items-end justify-center w-full min-h-[110px] mb-3 z-10">
            {stickers.map((sticker, i) => (
              <div key={sticker.club}
                className={cn(
                  "relative flex flex-col items-center justify-center bg-cyber-dark/80 px-2 pt-2 pb-1 rounded-xl",
                  "transition-all duration-300 hover:scale-105",
                  sticker.neon,
                  i === 1 ? "z-30 scale-110 mx-[-10px]" : "z-20"
                )}
                style={{
                  marginLeft: i === 1 ? "-14px" : "0",
                  marginRight: i === 1 ? "-14px" : "0",
                  boxShadow: i === 1 
                    ? "0 0 48px 12px #00d9ffbb, 0 6px 24px -6px #000a"
                    : i === 0
                      ? "0 0 32px 8px #22ffd5a0"
                      : "0 0 22px 6px #ff71e1aa"
                }}>
                <img 
                  src={sticker.img}
                  alt={sticker.club}
                  className="w-24 h-32 object-cover rounded-lg border-[2.5px] border-white/20"
                />
                <span className={cn("font-orbitron mt-1 text-[13px] uppercase", i === 0 ? "text-neon-green" : i === 1 ? "text-neon-blue" : "text-neon-pink")}>
                  {sticker.club}
                </span>
              </div>
            ))}
          </div>
          
          {/* Slots do álbum digital */}
          <div className="relative w-full flex-1 flex flex-col items-center justify-center">
            <div className="grid grid-cols-4 grid-rows-3 gap-2 w-full px-2 py-1">
              {Array.from({ length: 12 }).map((_, slotIdx) => (
                <div
                  key={slotIdx}
                  className={cn(
                    "aspect-[3/4] rounded-lg border-2 transition-all duration-200 flex items-center justify-center",
                    slotIdx < 3
                      ? "border-neon-blue/60 bg-black/30 animate-glow"
                      : "border-neon-purple/20 bg-goinft-card/10"
                  )}
                  style={{
                    boxShadow: slotIdx < 3
                      ? "0 0 10px 2px #00d9ff66"
                      : "none"
                  }}
                >
                  {/* Só os três primeiros slots ocupados pelas figurinhas */}
                  {slotIdx < 3 ? (
                    <img src={stickers[slotIdx].img} alt={stickers[slotIdx].club} className="w-9 h-12 object-cover rounded border border-white/20" />
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          {/* Botão Collect neon */}
          <button
            type="button"
            className="mt-4 mb-1 w-full py-3 rounded-md bg-gradient-to-r from-neon-green to-neon-blue/90 text-cyber-dark font-orbitron font-bold text-lg uppercase shadow-[0_0_26px_6px_#00d9ff77] border-2 border-neon-green/80 active:scale-95 transition-all duration-200 animate-glow"
            style={{
              textShadow: "0 0 8px #00ffed99, 0 0 3px #fff",
              letterSpacing: "2px"
            }}
          >
            COLLECT
          </button>
        </div>
      </div>
    </div>
  );
}
