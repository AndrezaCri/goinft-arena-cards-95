
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
            CONNECT WALLET
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col items-center gap-6">
          <div className="w-full p-6 space-y-4">
            {/* MetaMask Option */}
            <button
              onClick={handleConnect}
              className="w-full flex items-center gap-4 p-4 bg-white hover:bg-gray-50 rounded-lg transition-colors"
            >
              <img
                src="/lovable-uploads/970f6dd1-5724-46dd-afc0-02347c445e5d.png"
                alt="Wallet options"
                className="w-full object-contain"
              />
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
