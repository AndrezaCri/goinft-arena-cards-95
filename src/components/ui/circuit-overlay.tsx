
import React from "react";

// Overlay com traços de circuito brilhando nas bordas da interface/app
export function CircuitOverlay({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 z-20 ${className}`}>
      <svg width="100%" height="100%" viewBox="0 0 320 670" fill="none" className="w-full h-full">
        {/* Circuit lines borda topo */}
        <polyline points="25,20 55,12 100,15 200,7 240,18 295,15"
          stroke="#9b87f5" strokeWidth="3" opacity="0.25" fill="none" />
        <polyline points="15,30 80,35 190,22 320,40"
          stroke="#00ff94" strokeWidth="2" opacity="0.12" fill="none" />

        {/* Circuit lines borda lateral */}
        <polyline points="14,65 17,110 8,220 14,500 20,660" 
          stroke="#00ff94" strokeWidth="2.8" fill="none" filter="url(#glowLt)" />
        <polyline points="304,55 310,120 319,500 308,670" 
          stroke="#9b87f5" strokeWidth="2.4" opacity="0.18" fill="none" />

        {/* Traços/circuitos horizontais */}
        <polyline points="30,260 90,255 225,265 270,259"
          stroke="#9b87f5" strokeWidth="2.2" opacity="0.11" fill="none" />
        <polyline points="40,520 155,516 310,530"
          stroke="#00ff94" strokeWidth="2" opacity="0.08" fill="none" />

        {/* Pontos/bits extras */}
        <circle cx="60" cy="42" r="3.5" fill="#00ff94" opacity="0.11" />
        <circle cx="260" cy="44" r="4" fill="#9b87f5" opacity="0.13" />
        <circle cx="14" cy="585" r="3" fill="#00ff94" opacity="0.16" />
        <circle cx="304" cy="605" r="3" fill="#9b87f5" opacity="0.14" />
        <defs>
          <filter id="glowLt" x="-10" y="-10" width="40" height="680">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  );
}
