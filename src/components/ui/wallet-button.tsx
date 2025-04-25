
import React from "react";
import { Button } from "@/components/ui/button";
import { WalletMinimal } from "lucide-react";
import { cn } from "@/lib/utils";

interface WalletButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "metamask" | "walletconnect" | "disconnect";
  isConnected?: boolean;
  walletAddress?: string;
}

export function WalletButton({
  className,
  variant = "default",
  isConnected = false,
  walletAddress,
  children,
  ...props
}: WalletButtonProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case "metamask":
        return "bg-[#F6851B] hover:bg-[#E2761B] text-white";
      case "walletconnect":
        return "bg-[#3B99FC] hover:bg-[#2D7DD2] text-white";
      case "disconnect":
        return "bg-red-500 hover:bg-red-600 text-white";
      default:
        return "bg-gradient-to-r from-neon-purple to-neon-pink text-white";
    }
  };

  const formatAddress = (address: string) => {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  return (
    <Button
      size="sm"
      className={cn(
        "font-orbitron font-medium relative overflow-hidden",
        "before:absolute before:inset-0 before:bg-black/10 before:opacity-0 hover:before:opacity-100 before:transition",
        getVariantClasses(),
        className
      )}
      {...props}
    >
      <WalletMinimal className="mr-1 h-3 w-3" />
      {children || (isConnected && walletAddress ? formatAddress(walletAddress) : "Wallet")}
    </Button>
  );
}
