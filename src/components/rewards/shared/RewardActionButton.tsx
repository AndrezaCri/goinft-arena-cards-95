
import { ReactNode } from "react";
import { CyberpunkButton } from "@/components/ui/cyberpunk-button";

export interface RewardActionButtonProps {
  onClick: () => void;
  disabled?: boolean;
  isCompleted?: boolean;
  completedLabel?: string;
  actionLabel?: string;
  lockedLabel?: string;
  size?: "sm" | "default" | "lg";
  variant?: "primary" | "secondary" | "accent" | "outline" | "success";
  className?: string;
  children?: ReactNode;
}

export function RewardActionButton({
  onClick,
  disabled = false,
  isCompleted = false,
  completedLabel = "Coletado",
  actionLabel = "Coletar",
  lockedLabel = "Bloqueado",
  size = "sm",
  variant = "accent",
  className,
  children
}: RewardActionButtonProps) {
  const getButtonLabel = () => {
    if (children) return children;
    if (isCompleted) return completedLabel;
    if (disabled && !isCompleted) return lockedLabel;
    return actionLabel;
  };

  return (
    <CyberpunkButton
      size={size}
      variant={isCompleted ? "accent" : variant}
      className={`text-xs mt-2 ${className || ""}`}
      onClick={onClick}
      disabled={disabled || isCompleted}
    >
      {getButtonLabel()}
    </CyberpunkButton>
  );
}
