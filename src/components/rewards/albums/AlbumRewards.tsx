
import { RewardCard } from "@/components/rewards/shared/RewardCard";
import { RewardActionButton } from "@/components/rewards/shared/RewardActionButton";

interface AlbumRewardsProps {
  visibleRewards: number[];
  completedAlbums: string[];
  onAlbumAction: (type: string, id: string) => void;
}

export function AlbumRewards({ visibleRewards, completedAlbums, onAlbumAction }: AlbumRewardsProps) {
  // Define albums data
  const albums = [
    {
      id: "album1",
      title: "Álbum Copa SP",
      imageSrc: "/lovable-uploads/f71a92ea-61b6-45ba-9ec3-f8dcddc3e308.png",
      rewards: ["10 CHZ", "NFT Exclusivo"],
      glowColor: "rgba(155, 135, 245, 0.6)"
    },
    {
      id: "album2",
      title: "Álbum Brasileirão",
      imageSrc: "/lovable-uploads/9832dfdf-6d17-4325-8a48-c213e974b590.png",
      rewards: ["10 CHZ", "NFT Exclusivo"],
      glowColor: "rgba(155, 135, 245, 0.6)"
    },
    {
      id: "album3",
      title: "Álbum Libertadores",
      imageSrc: "/lovable-uploads/d9140fa2-0a1d-43c3-b0a7-58d2465593b5.png",
      rewards: ["10 CHZ", "NFT Exclusivo"],
      glowColor: "rgba(155, 135, 245, 0.6)"
    },
    {
      id: "album4",
      title: "Álbum Legends",
      imageSrc: "/lovable-uploads/fa413546-ff6e-44d1-a74a-edfe85745477.png",
      rewards: ["50 CHZ", "NFT Exclusivo"],
      glowColor: "rgba(255, 113, 225, 0.8)"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
      {albums.map((album, index) => (
        <RewardCard
          key={index}
          title={album.title}
          imageSrc={album.imageSrc}
          rewards={album.rewards}
          glowColor={album.glowColor}
          isActive={visibleRewards.includes(index)}
        >
          <RewardActionButton
            onClick={() => onAlbumAction("album", album.id)}
            isCompleted={completedAlbums.includes(album.id)}
            completedLabel="Coletado"
            actionLabel="Coletar Recompensa"
          />
        </RewardCard>
      ))}
    </div>
  );
}
