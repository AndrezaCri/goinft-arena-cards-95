import { AlbumCard } from "@/components/ui/album-card";
import type { Album } from "@/types/album";

interface Album {
  id: string;
  name: string;
  coverImage: string;
  progress: number;
  totalCards: number;
  collectedCards: number;
}

interface AlbumGridProps {
  albums: Album[];
  onAlbumClick: (albumId: string) => void;
}

export function AlbumGrid({ albums, onAlbumClick }: AlbumGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {albums.map((album) => (
        <AlbumCard 
          key={album.id} 
          {...album} 
          onClick={() => onAlbumClick(album.id)} 
        />
      ))}
    </div>
  );
}
