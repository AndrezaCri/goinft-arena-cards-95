
import React, { useState, useCallback, useMemo, Suspense, memo, useEffect } from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { AlbumGrid } from "@/components/albums/AlbumGrid";
import { AlbumDetails } from "@/components/albums/AlbumDetails";
import { AlbumProgress } from "@/components/albums/AlbumProgress";
import { AlbumHeader } from "@/components/albums/AlbumHeader";
import { albums, worldCupCards } from "@/data/albums-mock-data";
import type { Album } from "@/types/album";
import { useRewards } from "@/contexts/RewardsContext";
import { Skeleton } from "@/components/ui/skeleton";

// Componente de fallback para carregamento
const LoadingSkeleton = memo(function LoadingSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-64 w-full rounded-xl" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <Skeleton key={i} className="h-64 w-full rounded-xl" />
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

  // Habilitar renderização apenas do lado do cliente para evitar problemas de hidratação
  useEffect(() => {
    setIsClientSide(true);
  }, []);

  // Otimizando handlers com useCallback
  const handleAlbumClick = useCallback((albumId: string) => {
    setSelectedAlbum(albumId);
    setActiveTab("album-view");
  }, []);

  const handleBackToAlbums = useCallback(() => {
    setSelectedAlbum(null);
    setActiveTab("all-albums");
  }, []);

  // Calculando currentAlbum com useMemo
  const currentAlbum = useMemo(() => 
    albums.find(a => a.id === selectedAlbum), 
    [selectedAlbum]
  );

  // Renderizando condicionalmente os componentes pesados apenas quando necessário
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
          <AlbumDetails 
            album={currentAlbum}
            cards={worldCupCards}
            onBack={handleBackToAlbums}
          />
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
  }, [activeTab, selectedAlbum, currentAlbum, handleAlbumClick, handleBackToAlbums, completedAlbums, isClientSide]);

  return (
    <div className="min-h-screen bg-goinft-dark pb-16">
      <div className="container mx-auto px-4 py-8">
        <div className="relative">
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-neon-purple/10 filter blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-neon-blue/10 filter blur-[100px] animate-pulse"></div>
          </div>
          
          <div className="absolute inset-0 bg-circuit-bg opacity-5 z-0"></div>

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
