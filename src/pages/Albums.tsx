
import { PageHeader } from "@/components/ui/page-header";
import { AlbumCard } from "@/components/ui/album-card";

const Albums = () => {
  return (
    <div className="space-y-6">
      <PageHeader 
        title="Álbuns" 
        subtitle="Complete suas coleções de cards NFT"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AlbumCard
          id="premier-league"
          name="Premier League"
          coverImage="/lovable-uploads/1cb631c9-795d-4a11-8750-3e34509f594d.png"
          progress={0}
          totalCards={20}
          collectedCards={0}
        />
        
        <AlbumCard
          id="la-liga"
          name="La Liga"
          coverImage="/lovable-uploads/8fa39490-b282-4507-beb3-bf4813082d17.png"
          progress={0}
          totalCards={20}
          collectedCards={0}
        />
        
        <AlbumCard
          id="champions-league"
          name="Champions League"
          coverImage="/lovable-uploads/784d0ec2-86ff-4108-b22f-d1e611e0c4cc.png"
          progress={0}
          totalCards={20}
          collectedCards={0}
        />
      </div>
    </div>
  );
}

export default Albums;
