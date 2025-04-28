
import { Share, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export function ShareProgressButton() {
  const shareText = "🎮 Venha colecionar cards de futebol comigo no GoINft! Já tenho mais de 100 cards na minha coleção. Baixe agora e ganhe recompensas exclusivas! 🏆";
  const appUrl = "https://goinft.com/download";

  const handleShare = (platform: string) => {
    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(appUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(appUrl)}&quote=${encodeURIComponent(shareText)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(appUrl)}`,
      instagram: () => {
        toast.success("Link copiado! Cole nos stories do Instagram para compartilhar");
        navigator.clipboard.writeText(`${shareText}\n\n${appUrl}`);
      }
    };

    if (platform === "instagram") {
      urls.instagram();
    } else {
      window.open(urls[platform], "_blank", "width=600,height=400");
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="bg-gradient-to-r from-neon-purple to-neon-blue text-white border-none hover:from-neon-blue hover:to-neon-purple transition-all duration-300"
        >
          <Share className="mr-2 h-4 w-4" />
          Compartilhar Progresso
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-goinft-dark border border-neon-purple/20">
        <DropdownMenuItem 
          className="flex items-center gap-2 text-white hover:bg-neon-purple/20 cursor-pointer"
          onClick={() => handleShare("twitter")}
        >
          <Twitter className="h-4 w-4" />
          Twitter
        </DropdownMenuItem>
        <DropdownMenuItem 
          className="flex items-center gap-2 text-white hover:bg-neon-purple/20 cursor-pointer"
          onClick={() => handleShare("facebook")}
        >
          <Facebook className="h-4 w-4" />
          Facebook
        </DropdownMenuItem>
        <DropdownMenuItem 
          className="flex items-center gap-2 text-white hover:bg-neon-purple/20 cursor-pointer"
          onClick={() => handleShare("instagram")}
        >
          <Instagram className="h-4 w-4" />
          Instagram
        </DropdownMenuItem>
        <DropdownMenuItem 
          className="flex items-center gap-2 text-white hover:bg-neon-purple/20 cursor-pointer"
          onClick={() => handleShare("linkedin")}
        >
          <Linkedin className="h-4 w-4" />
          LinkedIn
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
