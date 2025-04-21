
import React from "react";

// Fundo cyberpunk com prédios em neon roxo e verde + outdoors digitais
export function CyberpunkBg() {
  return (
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
      {/* Céu gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#24284a] via-[#161825]/90 to-[#0e121a]"></div>

      {/* Arranha-céus e prédios */}
      <svg width="100%" height="100%" viewBox="0 0 1440 600" className="absolute bottom-0 left-0 w-full h-96 md:h-[470px]">
        <g>
          {/* Prédios em roxo */}
          <rect x="70" y="360" width="55" height="170" fill="#9b87f566"/>
          <rect x="120" y="310" width="26" height="200" fill="#9b87f588"/>
          <rect x="205" y="410" width="30" height="100" fill="#8e6df5cc"/>
          <rect x="400" y="340" width="80" height="210" fill="#9b87f5cc"/>
          <rect x="470" y="450" width="30" height="90" fill="#8e6df555"/>
          <rect x="660" y="354" width="60" height="170" fill="#00ff9466"/>
          <rect x="740" y="400" width="40" height="125" fill="#00ff9460"/>

          {/* Prédios verdes */}
          <rect x="263" y="380" width="35" height="145" fill="#50fa7bcc"/>
          <rect x="870" y="325" width="90" height="230" fill="#43ebc988"/>
          <rect x="990" y="395" width="28" height="110" fill="#64fbdfa0"/>
          <rect x="1310" y="410" width="70" height="120" fill="#7ffeef88"/>
          {/* Outdoors e luzes verticais */}
          <rect x="800" y="410" width="7" height="60" fill="#50fa7b" rx="3"/>
          <rect x="820" y="420" width="9" height="50" fill="#9b87f5" rx="2"/>
          <rect x="1200" y="420" width="6" height="88" fill="#75aaff" rx="1"/>
          <rect x="950" y="430" width="8" height="60" fill="#28fff7" rx="3"/>
        </g>
        {/* Efeito de néon */}
        <g>
          <rect x="360" y="500" width="140" height="10" fill="#9b87f5" opacity=".25"/>
          <rect x="1190" y="490" width="55" height="8" fill="#00ff94" opacity=".28"/>
        </g>
      </svg>

      {/* Reflexos e manchas de luz */}
      <div className="absolute left-1/3 -bottom-10 w-1/2 h-32 rounded-full blur-2xl bg-neon-purple/20 opacity-60" />
      <div className="absolute right-1/3 -bottom-6 w-1/3 h-20 rounded-full blur-2xl bg-neon-green/30 opacity-40" />
      <div className="absolute left-10 bottom-0 w-44 h-24 bg-neon-purple/40 rotate-6 blur-3xl opacity-30" />
      <div className="absolute right-0 bottom-0 w-44 h-24 bg-neon-green/40 -rotate-3 blur-2xl opacity-30" />
    </div>
  );
}
