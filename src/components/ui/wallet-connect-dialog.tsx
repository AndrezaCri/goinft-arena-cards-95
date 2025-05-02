
import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { OptimizedImage } from "@/components/rewards/OptimizedImage";

interface WalletConnectDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConnect: () => void;
}

export function WalletConnectDialog({
  isOpen,
  onClose,
  onConnect
}: WalletConnectDialogProps) {
  // Preload wallet image imediatamente quando o componente for montado
  useEffect(() => {
    const preloadImage = new Image();
    preloadImage.src = "/lovable-uploads/d3221d18-063e-4407-a1f1-7e24eb8580ae.png";
  }, []);
  
  const handleConnect = () => {
    onConnect();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-goinft-darker border-neon-purple/50">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-orbitron bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">CONECTE SUA CARTEIRA</DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col items-center gap-6">
          <div className="w-full">
            <button 
              onClick={handleConnect} 
              className="w-full flex items-center justify-center p-2 bg-transparent"
            >
              <OptimizedImage 
                src="/lovable-uploads/d3221d18-063e-4407-a1f1-7e24eb8580ae.png" 
                alt="MetaMask and Phantom wallet options" 
                className="w-full max-w-[320px] object-contain"
                width="320"
                height="160"
                priority={true} // Usar prioridade alta para carregar imediatamente
              />
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
