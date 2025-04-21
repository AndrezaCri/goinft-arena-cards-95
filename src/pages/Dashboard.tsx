
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <PageHeader 
        title="Dashboard" 
        subtitle="Acompanhe suas coleções e estatísticas"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Cards de Estatísticas */}
        <Card className="bg-goinft-card border-neon-purple/20">
          <CardHeader>
            <CardTitle className="text-lg font-orbitron bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
              Cards Coletados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold font-orbitron text-white">0</p>
            <p className="text-white/70 text-sm">de 100 cards disponíveis</p>
          </CardContent>
        </Card>

        <Card className="bg-goinft-card border-neon-blue/20">
          <CardHeader>
            <CardTitle className="text-lg font-orbitron bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              Álbuns Completos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold font-orbitron text-white">0</p>
            <p className="text-white/70 text-sm">de 3 álbuns disponíveis</p>
          </CardContent>
        </Card>

        <Card className="bg-goinft-card border-neon-green/20">
          <CardHeader>
            <CardTitle className="text-lg font-orbitron bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">
              Pacotes Abertos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold font-orbitron text-white">0</p>
            <p className="text-white/70 text-sm">pacotes abertos até agora</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;
