
import { useState } from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { AlbumGrid } from "@/components/albums/AlbumGrid";
import { AlbumDetails } from "@/components/albums/AlbumDetails";
import { AlbumProgress } from "@/components/albums/AlbumProgress";
import { AlbumHeader } from "@/components/albums/AlbumHeader";
import { albums, worldCupCards } from "@/data/albums-mock-data";
import type { Album } from "@/types/album";
import { AlbumStickerGrid } from "@/components/ui/album-sticker-grid";
import { useRewards } from "@/contexts/RewardsContext";

const Albums = () => {
  const [selectedAlbum, setSelectedAlbum] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("all-albums");
  const { completedAlbums } = useRewards();

  const handleAlbumClick = (albumId: string) => {
    setSelectedAlbum(albumId);
    setActiveTab("album-view");
  };

  const handleBackToAlbums = () => {
    setSelectedAlbum(null);
    setActiveTab("all-albums");
  };

  const currentAlbum = albums.find(a => a.id === selectedAlbum);

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
            
            <TabsContent value="all-albums" className="mt-0">
              <AlbumGrid 
                albums={albums} 
                onAlbumClick={handleAlbumClick}
                unlockedAlbums={completedAlbums} 
              />
            </TabsContent>
            
            <TabsContent value="album-view" className="mt-0">
              {selectedAlbum && currentAlbum ? (
                <AlbumDetails 
                  album={currentAlbum}
                  cards={worldCupCards}
                  onBack={handleBackToAlbums}
                />
              ) : (
                <AlbumGrid 
                  albums={albums} 
                  onAlbumClick={handleAlbumClick}
                  unlockedAlbums={completedAlbums} 
                />
              )}
            </TabsContent>
            
            <TabsContent value="album-progress" className="mt-0">
              {selectedAlbum && currentAlbum && (
                <AlbumProgress album={currentAlbum} />
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Albums;
