import React, { useState, useRef, useEffect, memo, useMemo, useCallback } from 'react';
import { CyberpunkHeading } from "@/components/ui/cyberpunk-heading";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Trophy, Ticket, MapPin } from "lucide-react";
import { OptimizedImage } from "@/components/rewards/OptimizedImage";

const experiences = [
  {
    id: 1,
    title: "Camisa Oficial do Time",
    description: "Ganhou uma camisa oficial autografada pelo time campeão",
    image: "/lovable-uploads/e8f16d84-3c1d-47c8-8448-9c4979f17b2e.png",
    thumbnailImage: "/lovable-uploads/e8f16d84-3c1d-47c8-8448-9c4979f17b2e.png",
    icon: Trophy,
    date: "2024-03-15"
  },
  {
    id: 2,
    title: "Visita ao Estádio",
    description: "Tour exclusivo pelos bastidores do estádio com os jogadores",
    image: "/lovable-uploads/01c12234-3e5e-44b6-9ce4-c79e8dbd242f.png",
    thumbnailImage: "/lovable-uploads/01c12234-3e5e-44b6-9ce4-c79e8dbd242f.png",
    icon: MapPin,
    date: "2024-02-28"
  },
  {
    id: 3,
    title: "Ingressos VIP",
    description: "Desconto especial em ingressos para a final do campeonato",
    image: "/lovable-uploads/a2fab7d0-7400-45db-9400-0c302e08a2a9.png",
    thumbnailImage: "/lovable-uploads/a2fab7d0-7400-45db-9400-0c302e08a2a9.png",
    icon: Ticket,
    date: "2024-02-10"
  }
];

// Define proper interface for ExperienceCard props
interface ExperienceCardProps {
  experience: {
    id: number;
    title: string;
    description: string;
    image: string;
    thumbnailImage: string;
    icon: React.ForwardRefExoticComponent<any>;
    date: string;
  };
  isPriority: boolean;
  onVisible?: () => void;
}

// Componente de Card de Experiência memoizado
const ExperienceCard = memo(function ExperienceCard({ experience, isPriority, onVisible }: ExperienceCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Use intersection observer to detect when card is visible
  useEffect(() => {
    if (!cardRef.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          if (onVisible) onVisible();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '100px'
      }
    );
    
    observer.observe(cardRef.current);
    
    return () => {
      observer.disconnect();
    };
  }, [isVisible, onVisible]);

  return (
    <Card 
      ref={cardRef}
      key={experience.id} 
      className="group bg-goinft-darker border-neon-purple/20 hover:border-neon-purple/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-neon-purple/20"
      style={{ width: '200px', height: '230px' }}
    >
      <CardHeader className="p-0">
        <AspectRatio ratio={16 / 9}>
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-t-lg">
            {(isPriority || isVisible) && (
              <OptimizedImage
                src={experience.thumbnailImage}
                alt={experience.title}
                className="object-contain w-full h-full max-h-32 group-hover:scale-105 transition-transform duration-300"
                width="150"
                height="111"
                priority={isPriority}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-goinft-darker to-transparent opacity-60" />
          </div>
        </AspectRatio>
      </CardHeader>
      <CardContent className="p-3">
        <div className="flex items-center gap-2 mb-1">
          <experience.icon className="w-4 h-4 text-neon-purple" />
          <p className="text-white/50 text-xs">{experience.date}</p>
        </div>
        <h3 className="text-sm font-orbitron text-white mb-1 bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent truncate">
          {experience.title}
        </h3>
        <p className="text-white/70 text-xs line-clamp-2">
          {experience.description}
        </p>
      </CardContent>
    </Card>
  );
});

const Experiences = () => {
  const [visibleExperienceIds, setVisibleExperienceIds] = useState<Set<number>>(new Set());

  // Using useMemo for derived state to prevent re-calculations
  const preparedExperiences = useMemo(() => {
    return experiences.map((exp, index) => ({
      ...exp,
      isPriority: index === 0 // Apenas o primeiro item é prioritário
    }));
  }, []); // Empty dependency array since experiences is static
  
  // Using useCallback for any event handlers
  const handleExperienceVisible = useCallback((id: number) => {
    setVisibleExperienceIds(prev => new Set(prev).add(id));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <CyberpunkHeading 
        size="xl" 
        variant="gradient" 
        className="mb-8"
        withLinesDecoration
      >
        Minhas Experiências
      </CyberpunkHeading>

      <div className="flex justify-center">
        <div className="flex gap-6">
          {preparedExperiences.map((experience) => (
            <ExperienceCard 
              key={experience.id} 
              experience={experience} 
              isPriority={experience.isPriority}
              onVisible={() => handleExperienceVisible(experience.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
