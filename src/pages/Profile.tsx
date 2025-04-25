import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NFTCard } from "@/components/ui/nft-card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { User } from "lucide-react";
import { CyberpunkHeading } from "@/components/ui/cyberpunk-heading";
import { Link } from "react-router-dom";

const collections = [{
  id: "c1",
  name: "Rare Cards",
  count: 14,
  total: 50,
  progress: 28
}, {
  id: "c2",
  name: "Epic Cards",
  count: 5,
  total: 25,
  progress: 20
}, {
  id: "c3",
  name: "Legendary Cards",
  count: 2,
  total: 10,
  progress: 20
}, {
  id: "c4",
  name: "World Cup 2026",
  count: 11,
  total: 32,
  progress: 34
}, {
  id: "c5",
  name: "Champions League",
  count: 8,
  total: 40,
  progress: 20
}];

const ownedCards = [{
  id: "o1",
  name: "Lionel Messi",
  image: "https://placehold.co/600x800/1a1f2c/ffffff?text=Messi",
  rarity: "legendary" as const,
  team: "Argentina",
  position: "Forward",
  isOwned: true
}, {
  id: "o2",
  name: "Cristiano Ronaldo",
  image: "https://placehold.co/600x800/1a1f2c/ffffff?text=Ronaldo",
  rarity: "epic" as const,
  team: "Portugal",
  position: "Forward",
  isOwned: true
}, {
  id: "o3",
  name: "Kylian Mbappé",
  image: "https://placehold.co/600x800/1a1f2c/ffffff?text=Mbappe",
  rarity: "rare" as const,
  team: "France",
  position: "Forward",
  isOwned: true
}, {
  id: "o4",
  name: "Neymar Jr",
  image: "https://placehold.co/600x800/1a1f2c/ffffff?text=Neymar",
  rarity: "epic" as const,
  team: "Brazil",
  position: "Forward",
  isOwned: true
}, {
  id: "o5",
  name: "Erling Haaland",
  image: "https://placehold.co/600x800/1a1f2c/ffffff?text=Haaland",
  rarity: "rare" as const,
  team: "Norway",
  position: "Forward",
  isOwned: true
}, {
  id: "o6",
  name: "Kevin De Bruyne",
  image: "https://placehold.co/600x800/1a1f2c/ffffff?text=DeBruyne",
  rarity: "rare" as const,
  team: "Belgium",
  position: "Midfielder",
  isOwned: true
}];

const achievements = [{
  id: "a1",
  name: "Experiências Exclusivas",
  description: "Desbloqueie experiências únicas com seus NFTs",
  progress: 100,
  completed: true,
  reward: "Ver todas",
  icon: <Trophy className="h-6 w-6 text-yellow-400" />,
  link: "/experiences"
}, {
  id: "a2",
  name: "Trading Expert",
  description: "Complete 5 successful trades",
  progress: 60,
  completed: false,
  reward: "10 CHZ",
  icon: <Award className="h-6 w-6 text-blue-400" />
}, {
  id: "a3",
  name: "Album Master",
  description: "Complete your first album",
  progress: 35,
  completed: false,
  reward: "Exclusive NFT",
  icon: <Star className="h-6 w-6 text-purple-400" />
}];

const transactions = [{
  id: "t1",
  type: "Purchase",
  item: "Premium Pack",
  amount: -25,
  date: "2023-05-15"
}, {
  id: "t2",
  type: "Sale",
  item: "Rare Player Card",
  amount: 15,
  date: "2023-05-14"
}, {
  id: "t3",
  type: "Trade",
  item: "Epic Player Card",
  amount: 0,
  date: "2023-05-12"
}, {
  id: "t4",
  type: "Reward",
  item: "Achievement Completion",
  amount: 5,
  date: "2023-05-10"
}];

const Profile = () => {
  const [isConnected] = useState(true);
  const [walletAddress] = useState("0x1234...5678");

  return <div className="min-h-screen bg-goinft-dark pb-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
          <div className="flex-1">
            <CyberpunkHeading variant="gradient" size="xl" className="mb-2">
              Meu Perfil
            </CyberpunkHeading>
            <p className="text-white/70">
              Gerencie sua coleção, veja estatísticas e conquistas
            </p>
          </div>
          
          <div className="cyberpunk-card p-4 flex flex-col sm:flex-row items-center gap-4">
            <div className="bg-goinft-darker rounded-full p-4">
              <User className="h-8 w-8 text-neon-purple" />
            </div>
            
            <div className="text-center sm:text-left">
              <p className="text-white/70 text-sm">Carteira Conectada</p>
              <p className="text-white font-orbitron font-medium">
                {walletAddress}
              </p>
              <p className="text-neon-purple font-medium mt-1">
                Saldo: 85 CHZ
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="cyberpunk-card p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
            <span className="text-4xl font-bold bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent mb-2">
              {ownedCards.length}
            </span>
            <span className="text-white/70 text-sm font-medium">Total de Cards</span>
          </div>
          
          <div className="cyberpunk-card p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
            <span className="text-4xl font-bold bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent mb-2">
              2
            </span>
            <span className="text-white/70 text-sm font-medium">Álbuns em Progresso</span>
          </div>
          
          <div className="cyberpunk-card p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
            <span className="text-4xl font-bold bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent mb-2">
              5
            </span>
            <span className="text-white/70 text-sm font-medium">Trocas Completadas</span>
          </div>
          
          <Link to="/experiences" className="cyberpunk-card p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
            <span className="text-4xl font-bold bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent mb-2">
              3
            </span>
            <span className="text-white/70 text-sm font-medium">Experiências</span>
          </Link>
        </div>
        
        <Tabs defaultValue="collection" className="cyberpunk-card p-6">
          <TabsList className="bg-goinft-darker mb-6 p-1 gap-1">
            <TabsTrigger value="collection" className="data-[state=active]:bg-neon-purple data-[state=active]:text-white">
              Coleção
            </TabsTrigger>
            <TabsTrigger value="achievements" className="data-[state=active]:bg-neon-purple data-[state=active]:text-white">
              Conquistas
            </TabsTrigger>
            <TabsTrigger value="history" className="data-[state=active]:bg-neon-purple data-[state=active]:text-white">
              Histórico
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-neon-purple data-[state=active]:text-white">
              Configurações
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="collection" className="mt-0">
            <div className="space-y-6">
              <div>
                <h2 className="text-white font-orbitron text-xl font-bold mb-4">
                  Progresso da Coleção
                </h2>
                
                <div className="bg-goinft-darker rounded-xl p-6 space-y-4">
                  {collections.map(collection => <div key={collection.id}>
                      <div className="flex justify-between mb-1">
                        <span className="text-white font-medium">{collection.name}</span>
                        <span className="text-white/70">
                          {collection.count}/{collection.total}
                        </span>
                      </div>
                      <Progress value={collection.progress} className="h-2 bg-goinft-card [&>[role=progressbar]]:bg-gradient-to-r [&>[role=progressbar]]:from-neon-purple [&>[role=progressbar]]:to-neon-blue" />
                    </div>)}
                </div>
              </div>
              
              <div>
                <h2 className="text-white font-orbitron text-xl font-bold mb-4">
                  Meus Cards
                </h2>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {ownedCards.map(card => <NFTCard key={card.id} {...card} />)}
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="achievements" className="mt-0">
            <h2 className="text-white font-orbitron text-xl font-bold mb-4">
              Conquistas
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {achievements.map(achievement => <div key={achievement.id} className={`cyberpunk-card p-4 relative overflow-hidden ${achievement.completed ? "border-2 border-neon-purple/50" : "border border-neon-purple/20"}`}>
                  <div className="flex items-center mb-3">
                    <div className="bg-goinft-darker p-2 rounded-lg mr-3">
                      {achievement.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-orbitron font-bold">
                        {achievement.name}
                      </h3>
                      <p className="text-white/70 text-sm">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-white/70">Progresso</span>
                      <span className="text-white/70">{achievement.progress}%</span>
                    </div>
                    <Progress value={achievement.progress} className="h-1.5 bg-goinft-darker [&>[role=progressbar]]:bg-gradient-to-r [&>[role=progressbar]]:from-neon-purple [&>[role=progressbar]]:to-neon-blue" />
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-white/70 text-sm">
                      Recompensa: <span className="text-neon-purple">{achievement.reward}</span>
                    </span>
                    
                    {achievement.link ? <Link to={achievement.link} className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs font-medium hover:bg-green-500/30 transition-colors">
                        Ver Experiências
                      </Link> : achievement.completed ? <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs font-medium">
                          Completado
                        </span> : <span className="bg-goinft-light text-white/70 px-2 py-1 rounded text-xs font-medium">
                          Em Progresso
                        </span>}
                  </div>
                </div>)}
            </div>
          </TabsContent>
          
          <TabsContent value="history" className="mt-0">
            <h2 className="text-white font-orbitron text-xl font-bold mb-4">
              Histórico de Transações
            </h2>
            
            <div className="bg-goinft-darker rounded-xl overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="border-goinft-light hover:bg-transparent">
                    <TableHead className="text-white">Data</TableHead>
                    <TableHead className="text-white">Tipo</TableHead>
                    <TableHead className="text-white">Item</TableHead>
                    <TableHead className="text-white text-right">Valor (CHZ)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map(transaction => <TableRow key={transaction.id} className="border-goinft-light hover:bg-goinft-card/50">
                      <TableCell className="text-white/70">
                        {transaction.date}
                      </TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${transaction.type === "Purchase" ? "bg-blue-500/20 text-blue-400" : transaction.type === "Sale" ? "bg-green-500/20 text-green-400" : transaction.type === "Trade" ? "bg-purple-500/20 text-purple-400" : "bg-yellow-500/20 text-yellow-400"}`}>
                          {transaction.type}
                        </span>
                      </TableCell>
                      <TableCell className="text-white">
                        {transaction.item}
                      </TableCell>
                      <TableCell className={`text-right font-medium ${transaction.amount > 0 ? "text-green-400" : transaction.amount < 0 ? "text-red-400" : "text-white/70"}`}>
                        {transaction.amount > 0 && "+"}
                        {transaction.amount} CHZ
                      </TableCell>
                    </TableRow>)}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          
          <TabsContent value="settings" className="mt-0 space-y-6">
            <div className="bg-goinft-darker rounded-xl p-6">
              <h3 className="text-white font-orbitron text-lg font-bold mb-4">
                Conexão da Carteira
              </h3>
              
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-4 bg-goinft-card rounded-lg border border-neon-purple/20">
                <div>
                  <p className="text-white font-orbitron">
                    {walletAddress}
                  </p>
                  <p className="text-white/70 text-sm">
                    Conectado à Chiliz Chain Mainnet (Chain ID: 88888)
                  </p>
                </div>
                
                <WalletButton variant="disconnect">
                  Desconectar
                </WalletButton>
              </div>
            </div>
            
            <div className="bg-goinft-darker rounded-xl p-6">
              <h3 className="text-white font-orbitron text-lg font-bold mb-4">
                Notificações
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-goinft-card rounded-lg border border-neon-purple/20">
                  <label className="text-white" htmlFor="trade-offers">
                    Ofertas de Troca
                  </label>
                  <input type="checkbox" id="trade-offers" defaultChecked className="toggle" />
                </div>
                
                <div className="flex items-center justify-between p-4 bg-goinft-card rounded-lg border border-neon-purple/20">
                  <label className="text-white" htmlFor="new-releases">
                    Novos Pacotes
                  </label>
                  <input type="checkbox" id="new-releases" defaultChecked className="toggle" />
                </div>
                
                <div className="flex items-center justify-between p-4 bg-goinft-card rounded-lg border border-neon-purple/20">
                  <label className="text-white" htmlFor="price-alerts">
                    Alertas de Preço
                  </label>
                  <input type="checkbox" id="price-alerts" className="toggle" />
                </div>
              </div>
            </div>
            
            <div className="bg-goinft-darker rounded-xl p-6">
              <h3 className="text-white font-orbitron text-lg font-bold mb-4">
                Configurações de Exibição
              </h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-goinft-card rounded-lg border border-neon-purple/20">
                  <label className="text-white block mb-2" htmlFor="card-view">
                    Visualização Padrão de Cards
                  </label>
                  <select id="card-view" className="w-full bg-goinft-darker border-none rounded-lg p-2 text-white focus:ring-neon-purple">
                    <option value="grid">Grid</option>
                    <option value="list">Lista</option>
                    <option value="compact">Compacta</option>
                  </select>
                </div>
                
                <div className="p-4 bg-goinft-card rounded-lg border border-neon-purple/20">
                  <label className="text-white block mb-2" htmlFor="animation">
                    Nível de Animação
                  </label>
                  <select id="animation" className="w-full bg-goinft-darker border-none rounded-lg p-2 text-white focus:ring-neon-purple">
                    <option value="high">Alto</option>
                    <option value="medium">Médio</option>
                    <option value="low">Baixo</option>
                    <option value="off">Desligado</option>
                  </select>
                </div>
              </div>
              
              <div className="mt-6">
                <Button className="w-full bg-gradient-to-r from-neon-purple to-neon-blue text-white hover:from-neon-blue hover:to-neon-purple transition-all duration-300">
                  Salvar Configurações
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>;
};

export default Profile;
