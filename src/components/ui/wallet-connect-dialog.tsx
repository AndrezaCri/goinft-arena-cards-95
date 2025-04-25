
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface WalletConnectDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConnect: () => void;
}

export function WalletConnectDialog({
  isOpen,
  onClose,
  onConnect,
}: WalletConnectDialogProps) {
  const handleConnect = () => {
    onConnect();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-goinft-darker border-neon-purple/50">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-orbitron bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
            CONECTE SUA CARTEIRA
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col items-center gap-6">
          <p className="text-gray-400 text-center">
            Conecte-se com um dos nossos provedores de carteira disponíveis para continuar
          </p>
          
          <div className="w-full space-y-4">
            {/* MetaMask Option */}
            <button
              onClick={handleConnect}
              className="w-full flex items-center gap-4 p-4 bg-goinft-dark hover:bg-goinft-dark/80 rounded-lg transition-colors border border-neon-purple/20 hover:border-neon-purple/40"
            >
              <img
                src="/lovable-uploads/5494d7e8-f6e3-4084-8ece-88815237d767.png"
                alt="MetaMask and Phantom wallet options"
                className="w-full object-contain"
              />
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
