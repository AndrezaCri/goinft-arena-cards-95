
import { PageHeader } from "@/components/ui/page-header";
import { NFTCard } from "@/components/ui/nft-card";

const Marketplace = () => {
  return (
    <div className="space-y-6">
      <PageHeader 
        title="Mercado" 
        subtitle="Compre e venda cards NFT com outros colecionadores"
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <NFTCard
          name="Arsenal"
          image="/lovable-uploads/1cb631c9-795d-4a11-8750-3e34509f594d.png"
          rarity="rare"
          price="0.1 CHZ"
        />
        
        <NFTCard
          name="Barcelona"
          image="/lovable-uploads/8fa39490-b282-4507-beb3-bf4813082d17.png"
          rarity="legendary"
          price="0.5 CHZ"
        />
        
        <NFTCard
          name="Atlético Madrid"
          image="/lovable-uploads/784d0ec2-86ff-4108-b22f-d1e611e0c4cc.png"
          rarity="epic"
          price="0.25 CHZ"
        />
      </div>
    </div>
  );
}

export default Marketplace;
