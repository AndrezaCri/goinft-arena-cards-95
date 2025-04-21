
import React from "react";
import { FeatureCard } from "./FeatureCard";

export const FeaturesGrid: React.FC = () => {
  const features = [
    {
      number: 1,
      title: "Colecionar",
      description: "Compre pacotes e colecione cards NFT raros dos seus jogadores favoritos"
    },
    {
      number: 2,
      title: "Trocar",
      description: "Troque cards com outros colecionadores para completar seu álbum"
    },
    {
      number: 3,
      title: "Recompensas",
      description: "Ganhe recompensas exclusivas completando álbuns e coleções"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl w-full mb-10">
      {features.map((feature, index) => (
        <FeatureCard 
          key={index}
          number={feature.number}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
};
