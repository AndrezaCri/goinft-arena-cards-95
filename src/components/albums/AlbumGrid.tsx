
import { AlbumCard } from "@/components/ui/album-card";
import type { Album as AlbumType } from "@/types/album";

interface AlbumGridProps {
  albums: AlbumType[];
  onAlbumClick: (albumId: string) => void;
  unlockedAlbums: string[];
}

export function AlbumGrid({ albums, onAlbumClick, unlockedAlbums }: AlbumGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {albums.map((album, index) => {
        const isUnlocked = index === 0 || unlockedAlbums.includes(album.id);
        
        return (
          <AlbumCard 
            key={album.id} 
            {...album} 
            onClick={() => isUnlocked ? onAlbumClick(album.id) : undefined}
            className={!isUnlocked ? "opacity-60 grayscale" : ""}
            locked={!isUnlocked}
          />
        );
      })}
    </div>
  );
}
