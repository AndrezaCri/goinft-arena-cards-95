
"use client";

import { cn } from "@/lib/utils";

interface AnimatedGradientBackgroundProps {
  className?: string;
  children?: React.ReactNode;
  intensity?: "subtle" | "medium" | "strong";
}

export function BackgroundGradientAnimation({
  className,
  children,
}: AnimatedGradientBackgroundProps) {
  return (
    <div
      className={cn(
        "relative min-h-screen w-full overflow-hidden bg-black",
        className
      )}
    >
      {/* Skyline de cidade com arranha-céus e luzes de neon */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div 
          className="absolute inset-0 w-full h-full bg-gradient-to-t from-black via-goinft-darker to-[#1a0936]" 
          style={{ backgroundImage: "url('/lovable-uploads/952c13c2-b282-4ace-9f4b-e62b51852e54.png')" }}
        ></div>
        
        {/* Overlay de iluminação neon */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
        
        {/* Luzes neon nos prédios */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/5 w-1 h-10 bg-neon-purple animate-pulse-glow opacity-70"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-16 bg-neon-blue animate-pulse-glow opacity-60"></div>
          <div className="absolute top-2/5 left-1/3 w-1 h-12 bg-neon-pink animate-pulse-glow opacity-50"></div>
          <div className="absolute top-1/6 right-1/3 w-1 h-14 bg-neon-purple animate-pulse-glow opacity-80"></div>
        </div>
        
        {/* Reflexo no chão molhado */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black via-black/80 to-transparent backdrop-blur-sm opacity-70"></div>
      </div>
      
      {/* Dark overlay para legibilidade */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      
      {/* Conteúdo em primeiro plano */}
      <div className="relative z-20 min-h-screen w-full">{children}</div>
    </div>
  );
}

