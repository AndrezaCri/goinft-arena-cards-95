
import { useState, useCallback, useMemo, Suspense, memo, useEffect } from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { AlbumGrid } from "@/components/albums/AlbumGrid";
import { AlbumDetails } from "@/components/albums/AlbumDetails";
import { AlbumProgress } from "@/components/albums/AlbumProgress";
import { AlbumHeader } from "@/components/albums/AlbumHeader";
import { albums, worldCupCards } from "@/data/albums-mock-data";
import type { Album } from "@/types/album";
import { useRewards } from "@/contexts/RewardsContext";
import { Skeleton } from "@/components/ui/skeleton";

// Lightweight loading skeleton
const LoadingSkeleton = memo(function LoadingSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-40 w-full rounded-xl" /> {/* Reduced height from h-64 to h-40 */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4"> {/* Reduced from md:grid-cols-4 lg:grid-cols-5 to keep it simpler */}
        {Array.from({ length: 2 }).map((_, i) => ( // Reduced from 4 to 2 skeletons
          <Skeleton key={i} className="h-40 w-full rounded-xl" /> // Reduced height from h-64 to h-40
        ))}
      </div>
    </div>
  );
});

const Albums = () => {
  const [selectedAlbum, setSelectedAlbum] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("all-albums");
  const { completedAlbums } = useRewards();
  const [isClientSide, setIsClientSide] = useState(false);
  const [isAlbumDetailsLoaded, setIsAlbumDetailsLoaded] = useState(false);

  // Only render on client-side to avoid hydration issues
  useEffect(() => {
    setIsClientSide(true);
  }, []);

  // Optimized handlers
  const handleAlbumClick = useCallback((albumId: string) => {
    setSelectedAlbum(albumId);
    setActiveTab("album-view");
    setIsAlbumDetailsLoaded(false);
  }, []);

  const handleBackToAlbums = useCallback(() => {
    setSelectedAlbum(null);
    setActiveTab("all-albums");
  }, []);

  // Memoized current album
  const currentAlbum = useMemo(() => 
    albums.find(a => a.id === selectedAlbum), 
    [selectedAlbum]
  );

  // Simpler background loading for album details
  useEffect(() => {
    if (currentAlbum && !isAlbumDetailsLoaded) {
      // Shorter timeout for quicker perceived loading
      const timer = setTimeout(() => {
        setIsAlbumDetailsLoaded(true);
      }, 50);
      
      return () => clearTimeout(timer);
    }
  }, [currentAlbum, isAlbumDetailsLoaded]);

  // Simplified content rendering
  const renderActiveContent = useCallback(() => {
    if (!isClientSide) return <LoadingSkeleton />;

    if (activeTab === "all-albums") {
      return (
        <AlbumGrid 
          albums={albums} 
          onAlbumClick={handleAlbumClick}
          unlockedAlbums={completedAlbums} 
        />
      );
    }
    
    if (activeTab === "album-view" && selectedAlbum && currentAlbum) {
      return (
        <Suspense fallback={<LoadingSkeleton />}>
          {isAlbumDetailsLoaded ? (
            <AlbumDetails 
              album={currentAlbum}
              cards={worldCupCards}
              onBack={handleBackToAlbums}
            />
          ) : (
            <LoadingSkeleton />
          )}
        </Suspense>
      );
    }
    
    if (activeTab === "album-progress" && selectedAlbum && currentAlbum) {
      return (
        <Suspense fallback={<LoadingSkeleton />}>
          <AlbumProgress album={currentAlbum} />
        </Suspense>
      );
    }
    
    // Fallback
    return (
      <AlbumGrid 
        albums={albums} 
        onAlbumClick={handleAlbumClick}
        unlockedAlbums={completedAlbums} 
      />
    );
  }, [activeTab, selectedAlbum, currentAlbum, handleAlbumClick, handleBackToAlbums, completedAlbums, isClientSide, isAlbumDetailsLoaded]);

  // Very simplified backdrop 
  return (
    <div className="min-h-screen bg-goinft-dark pb-16">
      <div className="container mx-auto px-4 py-6"> {/* Reduced padding from py-8 to py-6 */}
        <div className="relative">
          {/* Removed background elements entirely for performance */}

          <Tabs value={activeTab} onValueChange={setActiveTab} className="relative z-10">
            <AlbumHeader 
              selectedAlbum={selectedAlbum} 
              onBackClick={handleBackToAlbums} 
            />
            
            <TabsContent value={activeTab} className="mt-0">
              {renderActiveContent()}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default Albums;
