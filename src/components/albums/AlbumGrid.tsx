
import { AlbumCard } from "@/components/ui/album-card";
import type { Album as AlbumType } from "@/types/album";
import React, { memo, useMemo, useCallback, useRef, useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface AlbumGridProps {
  albums: AlbumType[];
  onAlbumClick: (albumId: string) => void;
  unlockedAlbums: string[];
}

// Componente virtualizado para mostrar apenas álbuns visíveis
export const AlbumGrid = memo(function AlbumGrid({ albums, onAlbumClick, unlockedAlbums }: AlbumGridProps) {
  const isMobile = useIsMobile();
  const gridRef = useRef<HTMLDivElement>(null);
  const [visibleIndexes, setVisibleIndexes] = useState<Set<number>>(new Set([0, 1, 2, 3, 4])); // Mostrar primeiros 5 álbuns por padrão
  
  // Pré-processando os álbuns para evitar cálculos repetidos durante a renderização
  const processedAlbums = useMemo(() => 
    albums.map((album, index) => {
      const isUnlocked = album.id === "1" || unlockedAlbums.includes(album.id);
      return {
        ...album,
        isUnlocked,
        isPriority: index < 5 // Cinco primeiros álbuns são prioritários
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
  
  // Implement intersection observer for virtualized rendering
  useEffect(() => {
    if (!gridRef.current) return;
    
    const albumElements = gridRef.current.querySelectorAll('.album-card-container');
    const observer = new IntersectionObserver(
      (entries) => {
        const newVisibleIndexes = new Set(visibleIndexes);
        
        entries.forEach(entry => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0', 10);
          
          if (entry.isIntersecting) {
            newVisibleIndexes.add(index);
            
            // Pre-load next three albums
            if (index + 1 < processedAlbums.length) newVisibleIndexes.add(index + 1);
            if (index + 2 < processedAlbums.length) newVisibleIndexes.add(index + 2);
            if (index + 3 < processedAlbums.length) newVisibleIndexes.add(index + 3);
          }
        });
        
        setVisibleIndexes(newVisibleIndexes);
      },
      {
        rootMargin: '150px 0px 150px 0px',
        threshold: 0.1
      }
    );
    
    albumElements.forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      observer.disconnect();
    };
  }, [processedAlbums.length]);

  return (
    <div className="flex flex-wrap justify-center gap-6" ref={gridRef}>
      {processedAlbums.map((album, index) => (
        <div 
          key={album.id}
          className="album-card-container"
          data-index={index}
          onClick={() => handleAlbumClick(album.id, album.isUnlocked)}
        >
          {visibleIndexes.has(index) && (
            <AlbumCard 
              {...album}
              className={`${!album.isUnlocked ? "opacity-60 grayscale" : ""}`}
              locked={!album.isUnlocked}
              priority={album.isPriority}
            />
          )}
          {/* Placeholder de tamanho fixo para álbuns não visíveis */}
          {!visibleIndexes.has(index) && (
            <div className="bg-goinft-darker/30 rounded-xl w-[280px] mx-auto" style={{ aspectRatio: '230/320' }}></div>
          )}
        </div>
      ))}
    </div>
  );
});
