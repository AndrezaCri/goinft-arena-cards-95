
import { AlbumCard } from "@/components/ui/album-card";
import type { Album as AlbumType } from "@/types/album";
import { memo, useMemo, useCallback, useRef, useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface AlbumGridProps {
  albums: AlbumType[];
  onAlbumClick: (albumId: string) => void;
  unlockedAlbums: string[];
}

// Componente de grid de álbuns com carregamento otimizado
export const AlbumGrid = memo(function AlbumGrid({ albums, onAlbumClick, unlockedAlbums }: AlbumGridProps) {
  const isMobile = useIsMobile();
  const gridRef = useRef<HTMLDivElement>(null);
  const [visibleIndexes, setVisibleIndexes] = useState<Set<number>>(new Set([0, 1, 2])); // Mostrar os 3 primeiros por padrão
  
  // Processar álbuns uma vez
  const processedAlbums = useMemo(() => 
    albums.map((album, index) => {
      const isUnlocked = album.id === "1" || unlockedAlbums.includes(album.id);
      return {
        ...album,
        isUnlocked,
        isPriority: index < 3 // Os 3 primeiros álbuns são prioridade
      };
    }),
    [albums, unlockedAlbums]
  );
  
  // Lidar com clique no álbum com useCallback
  const handleAlbumClick = useCallback((albumId: string, isUnlocked: boolean) => {
    if (isUnlocked) {
      onAlbumClick(albumId);
    }
  }, [onAlbumClick]);
  
  // IntersectionObserver mais eficiente para renderização virtualizada
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
            
            // Pré-carregar o próximo álbum
            if (index + 1 < processedAlbums.length) newVisibleIndexes.add(index + 1);
            if (index + 2 < processedAlbums.length) newVisibleIndexes.add(index + 2);
          }
        });
        
        setVisibleIndexes(newVisibleIndexes);
      },
      {
        rootMargin: '100px',
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
    <div className="flex flex-wrap justify-center gap-4" ref={gridRef}>
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
          {/* Placeholder mais leve para álbuns não visíveis */}
          {!visibleIndexes.has(index) && (
            <div className="bg-goinft-darker/30 rounded-xl w-[220px] mx-auto" style={{ height: '350px' }}></div>
          )}
        </div>
      ))}
    </div>
  );
});
