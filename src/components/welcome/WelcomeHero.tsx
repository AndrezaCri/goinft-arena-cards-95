
import React from "react";

export const WelcomeHero: React.FC = () => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-4xl md:text-6xl font-bold font-orbitron bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent mb-4 animate-float">
        GoINFT
      </h1>
      <p className="text-white/70 text-lg md:text-xl max-w-md mx-auto">
        Colecione, troque e jogue com cards digitais de futebol na blockchain
      </p>
    </div>
  );
};
