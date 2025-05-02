
import { AlbumCard } from "@/components/ui/album-card";
import type { Album as AlbumType } from "@/types/album";
import { memo, useMemo, useCallback } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface AlbumGridProps {
  albums: AlbumType[];
  onAlbumClick: (albumId: string) => void;
  unlockedAlbums: string[];
}

// Memoizando o componente para evitar re-renderizações desnecessárias
export const AlbumGrid = memo(function AlbumGrid({ albums, onAlbumClick, unlockedAlbums }: AlbumGridProps) {
  const isMobile = useIsMobile();
  
  // Pré-processando os álbuns para evitar cálculos repetidos durante a renderização
  const processedAlbums = useMemo(() => 
    albums.map((album) => {
      const isUnlocked = album.id === "1" || unlockedAlbums.includes(album.id);
      return {
        ...album,
        isUnlocked,
        isPriority: album.id === "1" // Apenas o primeiro álbum é prioritário
      };
    }),
    [albums, unlockedAlbums]
  );
  
  // Usando useCallback para evitar recriação da função a cada renderização
  const handleAlbumClick = useCallback((albumId: string, isUnlocked: boolean) => {
    if (isUnlocked) {
      onAlbumClick(albumId);
    }
  }, [onAlbumClick]);
  
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {processedAlbums.map((album) => (
        <div 
          key={album.id}
          className={`${!album.isUnlocked ? "" : "cursor-pointer"}`}
          onClick={() => handleAlbumClick(album.id, album.isUnlocked)}
        >
          <AlbumCard 
            {...album}
            className={`${!album.isUnlocked ? "opacity-60 grayscale" : ""}`}
            locked={!album.isUnlocked}
            priority={album.isPriority}  // This now matches the interface
          />
        </div>
      ))}
    </div>
  );
});
