import { PageHeader } from "@/components/ui/page-header";
import { FootballNFTCard } from "@/components/ui/football-card/football-nft-card";

const Marketplace = () => {
  return (
    <div className="space-y-6">
      <PageHeader 
        title="Mercado" 
        subtitle="Compre e venda cards NFT com outros colecionadores"
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <FootballNFTCard
          id="arsenal-martinelli"
          name="Gabriel Martinelli"
          club="Arsenal"
          clubLogo="/lovable-uploads/1cb631c9-795d-4a11-8750-3e34509f594d.png"
          playerImage="/lovable-uploads/952c13c2-b282-4ace-9f4b-e62b51852e54.png"
          position="Atacante"
          rarity="rare"
          isHolographic={true}
        />
        
        <FootballNFTCard
          id="barcelona-lewandowski"
          name="Robert Lewandowski"
          club="Barcelona"
          clubLogo="/lovable-uploads/8fa39490-b282-4507-beb3-bf4813082d17.png"
          playerImage="/lovable-uploads/8b42a4aa-6e29-46c0-a04e-60ebfa0b064c.png"
          position="Atacante"
          rarity="legendary"
          isHolographic={true}
        />
        
        <FootballNFTCard
          id="atletico-madrid-griezmann"
          name="Antoine Griezmann"
          club="Atlético Madrid"
          clubLogo="/lovable-uploads/784d0ec2-86ff-4108-b22f-d1e611e0c4cc.png"
          playerImage="/lovable-uploads/62f4d74d-4c24-48dc-adde-79bd62afb676.png"
          position="Atacante"
          rarity="epic"
          isHolographic={true}
        />
      </div>
    </div>
  );
}

export default Marketplace;
