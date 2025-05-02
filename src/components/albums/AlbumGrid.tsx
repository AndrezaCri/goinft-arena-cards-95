
import { AlbumCard } from "@/components/ui/album-card";
import type { Album as AlbumType } from "@/types/album";
import { memo, useMemo, useCallback, useRef, useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface AlbumGridProps {
  albums: AlbumType[];
  onAlbumClick: (albumId: string) => void;
  unlockedAlbums: string[];
}

// Virtualized component to only show visible albums
export const AlbumGrid = memo(function AlbumGrid({ albums, onAlbumClick, unlockedAlbums }: AlbumGridProps) {
  const isMobile = useIsMobile();
  const gridRef = useRef<HTMLDivElement>(null);
  const [visibleIndexes, setVisibleIndexes] = useState<Set<number>>(new Set([0])); // Show only the first by default (reduced)
  
  // Pre-process albums once
  const processedAlbums = useMemo(() => 
    albums.map((album, index) => {
      const isUnlocked = album.id === "1" || unlockedAlbums.includes(album.id);
      return {
        ...album,
        isUnlocked,
        isPriority: index === 0 // Only the first album is priority
      };
    }),
    [albums, unlockedAlbums]
  );
  
  // Handle album click with useCallback
  const handleAlbumClick = useCallback((albumId: string, isUnlocked: boolean) => {
    if (isUnlocked) {
      onAlbumClick(albumId);
    }
  }, [onAlbumClick]);
  
  // More aggressive intersection observer for virtualized rendering
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
            
            // Only preload the next album
            if (index + 1 < processedAlbums.length) newVisibleIndexes.add(index + 1);
          } else {
            // Be more aggressive about removing non-visible albums
            if (index !== 0 && !entry.isIntersecting && Math.abs(index - Array.from(newVisibleIndexes)[0]) > 2) {
              newVisibleIndexes.delete(index);
            }
          }
        });
        
        setVisibleIndexes(newVisibleIndexes);
      },
      {
        rootMargin: '20px 0px', // Much reduced from 50px to 20px
        threshold: 0.2 // Increased threshold for more just-in-time loading
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
    <div className="flex flex-wrap justify-center gap-4" ref={gridRef}> {/* Reduced gap from 6 to 4 */}
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
          {/* Smaller, lighter placeholder for non-visible albums */}
          {!visibleIndexes.has(index) && (
            <div className="bg-goinft-darker/30 rounded-xl w-[260px] mx-auto" style={{ height: '350px' }}></div> // Reduced from 390px to 350px height
          )}
        </div>
      ))}
    </div>
  );
});
