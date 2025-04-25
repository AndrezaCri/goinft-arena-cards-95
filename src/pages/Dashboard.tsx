
import React from "react";
import { CyberpunkHeading } from "@/components/ui/cyberpunk-heading";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Trophy, Zap, Gift } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <CyberpunkHeading 
        size="xl" 
        variant="gradient" 
        className="mb-8"
        withLinesDecoration
      >
        Dashboard
      </CyberpunkHeading>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-goinft-darker border-neon-purple/20 hover:border-neon-purple/50 transition-all duration-300 hover:scale-105">
          <CardHeader className="pb-0">
            <div className="flex items-center justify-between">
              <Trophy className="text-neon-purple" size={32} />
              <span className="text-2xl font-bold text-white">10</span>
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="text-white/70">Total de Recompensas</p>
          </CardContent>
        </Card>

        <Card className="bg-goinft-darker border-neon-blue/20 hover:border-neon-blue/50 transition-all duration-300 hover:scale-105">
          <CardHeader className="pb-0">
            <div className="flex items-center justify-between">
              <Zap className="text-neon-blue" size={32} />
              <span className="text-2xl font-bold text-white">25</span>
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="text-white/70">Cards Colecionados</p>
          </CardContent>
        </Card>

        <Card className="bg-goinft-darker border-neon-pink/20 hover:border-neon-pink/50 transition-all duration-300 hover:scale-105">
          <CardHeader className="pb-0">
            <div className="flex items-center justify-between">
              <Gift className="text-neon-pink" size={32} />
              <span className="text-2xl font-bold text-white">5</span>
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="text-white/70">Pacotes Abertos</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
