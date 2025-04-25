
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

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
            Conectar Carteira
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col items-center gap-6">
          <div className="w-full h-64 relative overflow-hidden rounded-lg">
            <img
              src="/lovable-uploads/3ce718df-0800-4c07-b401-398059dd6c51.png"
              alt="Wallet Connect"
              className="w-full h-full object-cover"
            />
          </div>
          
          <Button
            onClick={handleConnect}
            className="w-full bg-gradient-to-r from-neon-purple to-neon-pink hover:from-neon-pink hover:to-neon-purple text-white font-orbitron"
          >
            Conectar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
