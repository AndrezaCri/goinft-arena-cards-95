
import { Button } from "@/components/ui/button";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft } from "lucide-react";
import { CyberpunkHeading } from "@/components/ui/cyberpunk-heading";

interface AlbumHeaderProps {
  selectedAlbum: string | null;
  onBackClick: () => void;
}

export function AlbumHeader({ selectedAlbum, onBackClick }: AlbumHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
      <div className="flex items-center gap-4">
        {selectedAlbum && (
          <Button
            variant="ghost"
            className="text-white hover:text-neon-purple transition-colors"
            onClick={onBackClick}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar
          </Button>
        )}
        <CyberpunkHeading size="xl" variant="gradient">
          {selectedAlbum ? "Visualizar Álbum" : "Meus Álbuns"}
        </CyberpunkHeading>
      </div>
      
      <TabsList className="bg-goinft-card border border-neon-purple/20">
        {selectedAlbum && (
          <TabsTrigger value="all-albums">
            Todos os Álbuns
          </TabsTrigger>
        )}
        <TabsTrigger value="album-view">
          {selectedAlbum ? "Ver Cards" : "Álbuns"}
        </TabsTrigger>
        {selectedAlbum && (
          <TabsTrigger value="album-progress">
            Progresso
          </TabsTrigger>
        )}
      </TabsList>
    </div>
  );
}
