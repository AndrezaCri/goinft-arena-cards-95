
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {albums.map((album) => {
        const isUnlocked = album.id === "1" || unlockedAlbums.includes(album.id);
        
        return (
          <div 
            key={album.id}
            className={`${!isUnlocked ? "" : "cursor-pointer"}`}
            onClick={() => isUnlocked ? onAlbumClick(album.id) : undefined}
          >
            <AlbumCard 
              {...album}
              className={`${!isUnlocked ? "opacity-60 grayscale" : ""}`}
              locked={!isUnlocked}
            />
          </div>
        );
      })}
    </div>
  );
});
