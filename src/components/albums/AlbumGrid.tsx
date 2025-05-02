
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
  // Aumentamos os álbuns inicialmente carregados para 8
  const [visibleIndexes, setVisibleIndexes] = useState<Set<number>>(
    new Set(Array.from({ length: 8 }, (_, i) => i))
  ); 
  
  // Pré-processando os álbuns para evitar cálculos repetidos durante a renderização
  const processedAlbums = useMemo(() => 
    albums.map((album, index) => {
      const isUnlocked = album.id === "1" || unlockedAlbums.includes(album.id);
      return {
        ...album,
        isUnlocked,
        isPriority: index < 8 // Oito primeiros álbuns são prioritários
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
            
            // Aumentamos o número de pré-carregamento para 5 álbuns futuros
            for (let i = 1; i <= 5; i++) {
              if (index + i < processedAlbums.length) {
                newVisibleIndexes.add(index + i);
              }
            }
          } else {
            // Importante: NÃO removemos itens ao sair da viewport
            // Isso impede que as imagens desapareçam ao rolar
          }
        });
        
        setVisibleIndexes(newVisibleIndexes);
      },
      {
        rootMargin: '300px 0px 300px 0px', // Aumentamos a margem de observação
        threshold: 0.01 // Diminuímos o threshold para disparar mais cedo
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
          {/* Sempre renderizamos o componente, não importa se está visível ou não */}
          <AlbumCard 
            {...album}
            className={`${!album.isUnlocked ? "opacity-60 grayscale" : ""}`}
            locked={!album.isUnlocked}
            priority={album.isPriority}
          />
        </div>
      ))}
    </div>
  );
});
