
import React from "react";

interface FeatureCardProps {
  number: number;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ number, title, description }) => {
  return (
    <div className="bg-goinft-card rounded-xl p-4 text-center">
      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-neon-purple to-neon-pink flex items-center justify-center mx-auto mb-2">
        <span className="text-xl font-bold text-white">{number}</span>
      </div>
      <h3 className="text-white font-orbitron text-base font-bold mb-2">{title}</h3>
      <p className="text-white/70 text-xs">
        {description}
      </p>
    </div>
  );
};
