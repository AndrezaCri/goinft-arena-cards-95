
import { AlbumCard } from "@/components/ui/album-card";
import type { Album as AlbumType } from "@/types/album";
import { memo } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface AlbumGridProps {
  albums: AlbumType[];
  onAlbumClick: (albumId: string) => void;
  unlockedAlbums: string[];
}

// Using memo to prevent unnecessary rerenders
export const AlbumGrid = memo(function AlbumGrid({ albums, onAlbumClick, unlockedAlbums }: AlbumGridProps) {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {albums.map((album) => {
        const isUnlocked = album.id === "1" || unlockedAlbums.includes(album.id);
        
        return (
          <AlbumCard 
            key={album.id} 
            {...album} 
            onClick={() => isUnlocked ? onAlbumClick(album.id) : undefined}
            className={`${!isUnlocked ? "opacity-60 grayscale" : ""} ${isMobile ? "w-[30%]" : ""}`}
            locked={!isUnlocked}
          />
        );
      })}
    </div>
  );
});
