
import { AlbumCard } from "@/components/ui/album-card";
import type { Album as AlbumType } from "@/types/album";
import React, { memo, useMemo, useCallback } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface AlbumGridProps {
  albums: AlbumType[];
  onAlbumClick: (albumId: string) => void;
  unlockedAlbums: string[];
}

// Componente simplificado para mostrar todos os álbuns sem virtualização
export const AlbumGrid = memo(function AlbumGrid({ albums, onAlbumClick, unlockedAlbums }: AlbumGridProps) {
  const isMobile = useIsMobile();
  
  // Pré-processando os álbuns para evitar cálculos repetidos durante a renderização
  const processedAlbums = useMemo(() => 
    albums.map((album) => {
      const isUnlocked = album.id === "1" || unlockedAlbums.includes(album.id);
      return {
        ...album,
        isUnlocked,
        isPriority: true // Todas as imagens são prioritárias
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
    <div className="flex flex-wrap justify-center gap-6 pt-4">
      {processedAlbums.map((album) => (
        <div 
          key={album.id}
          className="album-card-container relative"
          onClick={() => handleAlbumClick(album.id, album.isUnlocked)}
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl blur-sm opacity-50"></div>
          <AlbumCard 
            {...album}
            className={`${!album.isUnlocked ? "opacity-60 grayscale" : ""} relative`}
            locked={!album.isUnlocked}
            priority={true}
          />
        </div>
      ))}
    </div>
  );
});
