
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";

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
  const [imageLoaded, setImageLoaded] = useState(false);
  
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
            {/* MetaMask and Phantom Options */}
            <button 
              onClick={handleConnect} 
              className="w-full flex items-center justify-center p-2 bg-transparent"
            >
              {!imageLoaded && (
                <Skeleton className="w-full h-[160px] bg-goinft-light/20" />
              )}
              <img 
                src="/lovable-uploads/d3221d18-063e-4407-a1f1-7e24eb8580ae.png" 
                alt="MetaMask and Phantom wallet options" 
                className={`w-full max-w-[320px] object-contain ${imageLoaded ? '' : 'hidden'}`}
                onLoad={() => setImageLoaded(true)}
                width="320"
                height="160"
                loading="eager" // Load this immediately as it's in a dialog
              />
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
