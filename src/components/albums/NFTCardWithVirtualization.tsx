
import React, { memo, useState } from "react";
import { NFTCard } from "@/components/ui/nft-card";
import type { AlbumCard } from "@/types/album";

interface NFTCardWithVirtualizationProps extends AlbumCard {
  isPriority: boolean;
  isVisible: boolean;
}

// Componente memoizado para renderizar NFT Cards com virtualização
export const NFTCardWithVirtualization = memo(function NFTCardWithVirtualization({ 
  isPriority, 
  isVisible,
  ...card 
}: NFTCardWithVirtualizationProps) {
  const [wasVisible, setWasVisible] = useState(isVisible);
  
  // Uma vez que o card se torna visível, nós mantemos ele renderizado
  // para evitar problemas de desaparecimento de imagens
  if (isVisible && !wasVisible) {
    setWasVisible(true);
  }
  
  // Se o card nunca foi visível e não está visível agora, mostramos um placeholder
  if (!wasVisible && !isPriority) {
    return (
      <div className="aspect-[230/320] bg-goinft-darker/30 rounded-lg animate-pulse"></div>
    );
  }
  
  // Uma vez que o card é visível, permanece renderizado para garantir
  // que a imagem não desapareça
  return <NFTCard {...card} priority={isPriority} />;
});
