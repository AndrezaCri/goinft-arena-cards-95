
import { CyberpunkHeading } from "@/components/ui/cyberpunk-heading";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Trophy, Ticket, MapPin } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Camisa Oficial do Time",
    description: "Ganhou uma camisa oficial autografada pelo time campeão",
    image: "https://placehold.co/600x400/1a1f2c/ffffff?text=Jersey",
    icon: Trophy,
    date: "2024-03-15"
  },
  {
    id: 2,
    title: "Visita ao Estádio",
    description: "Tour exclusivo pelos bastidores do estádio com os jogadores",
    image: "https://placehold.co/600x400/1a1f2c/ffffff?text=Stadium",
    icon: MapPin,
    date: "2024-02-28"
  },
  {
    id: 3,
    title: "Ingressos VIP",
    description: "Desconto especial em ingressos para a final do campeonato",
    image: "https://placehold.co/600x400/1a1f2c/ffffff?text=Tickets",
    icon: Ticket,
    date: "2024-02-10"
  }
];

const Experiences = () => {
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiences.map((experience) => (
          <Card key={experience.id} className="group bg-goinft-darker border-neon-purple/20 hover:border-neon-purple/50 transition-all duration-300">
            <CardHeader className="p-0">
              <AspectRatio ratio={16 / 9}>
                <div className="relative w-full h-full overflow-hidden rounded-t-lg">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-goinft-darker to-transparent opacity-60" />
                </div>
              </AspectRatio>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <experience.icon className="w-5 h-5 text-neon-purple" />
                <p className="text-white/50 text-sm">{experience.date}</p>
              </div>
              <h3 className="text-xl font-orbitron text-white mb-2 bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
                {experience.title}
              </h3>
              <p className="text-white/70">
                {experience.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
