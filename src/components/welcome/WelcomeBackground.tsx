
import React from "react";

export const WelcomeBackground: React.FC = () => {
  return (
    <>
      <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-neon-purple/20 filter blur-3xl"></div>
      <div className="absolute top-1/3 -right-32 w-64 h-64 rounded-full bg-neon-blue/20 filter blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-neon-pink/20 filter blur-3xl"></div>
    </>
  );
};
