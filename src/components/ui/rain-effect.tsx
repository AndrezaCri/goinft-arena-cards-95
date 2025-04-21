
import React, { useEffect, useRef } from "react";

// Componente de chuva animada com gotas caindo e brilhos pontuais
export function RainEffect({ dropColor = "#a5baff", rainCount = 80, className = "" }: { dropColor?: string; rainCount?: number; className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animação das gotas (apenas para resetar no final do ciclo, visual)
    if (!containerRef.current) return;
    const drops = Array.from(containerRef.current.children) as HTMLDivElement[];
    drops.forEach((drop, idx) => {
      drop.style.animationDelay = `${Math.random() * 3}s`;
      drop.style.left = `${Math.random() * 100}%`;
      drop.style.width = idx % 9 === 0 ? "3px" : "2px";
      drop.style.height = `${10 + Math.random() * 24}px`;
      drop.style.opacity = `${0.58 + Math.random() * 0.38}`;
    });
  }, [rainCount]);

  return (
    <div ref={containerRef} className={`pointer-events-none absolute inset-0 z-30 ${className}`}>
      {[...Array(rainCount)].map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: "2px",
            height: "18px",
            background: `linear-gradient(180deg, ${dropColor} 40%, transparent 95%)`,
            borderRadius: "2px",
            filter: "blur(0.2px)",
            opacity: `${0.68 + Math.random() * 0.3}`,
            animation: "rain-drop 1.6s linear infinite",
            animationDelay: `${Math.random() * 2.2}s`
          }}
        ></div>
      ))}

      <style>{`
        @keyframes rain-drop {
          0% { transform: translateY(-40px) scaleY(0.9);}
          60% { opacity: 1; }
          100% { transform: translateY(90vh) scaleY(1.1); opacity: 0.2; }
        }
      `}</style>
    </div>
  );
}
