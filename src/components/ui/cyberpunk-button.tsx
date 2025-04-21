
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface CyberpunkButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "outline";
  size?: "default" | "sm" | "lg";
  glowIntensity?: "none" | "low" | "medium" | "high";
}

const CyberpunkButton = forwardRef<HTMLButtonElement, CyberpunkButtonProps>(
  ({ 
    className, 
    variant = "primary", 
    size = "default", 
    glowIntensity = "medium",
    children, 
    ...props 
  }, ref) => {
    // Variant styles
    const variantStyles = {
      primary: "bg-gradient-to-r from-neon-purple to-neon-blue text-white border-neon-purple/50",
      secondary: "bg-gradient-to-r from-goinft-dark to-goinft-light text-white border-neon-blue/30",
      accent: "bg-gradient-to-r from-neon-green to-neon-blue text-cyber-dark border-neon-green/50",
      outline: "bg-transparent text-white border-neon-purple"
    };
    
    // Size styles
    const sizeStyles = {
      sm: "text-sm px-4 py-2",
      default: "text-base px-6 py-3",
      lg: "text-lg px-8 py-4"
    };
    
    // Glow intensity
    const glowStyles = {
      none: "",
      low: "hover:shadow-[0_0_10px_rgba(155,135,245,0.3)]",
      medium: "hover:shadow-[0_0_15px_rgba(155,135,245,0.5)]",
      high: "hover:shadow-[0_0_25px_rgba(155,135,245,0.8)]"
    };
    
    return (
      <button
        className={cn(
          // Base styles
          "relative font-orbitron font-bold tracking-wider rounded-md transition-all duration-300",
          "overflow-hidden uppercase border",
          "before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-300",
          "hover:before:opacity-100 hover:scale-105",
          
          // Variant, size and glow styles
          variantStyles[variant],
          sizeStyles[size],
          glowStyles[glowIntensity],
          
          // Custom classes
          className
        )}
        ref={ref}
        {...props}
      >
        {/* Hover gradient */}
        <span className="absolute inset-0 opacity-0 bg-gradient-to-r from-neon-blue to-neon-purple transition-opacity duration-300 group-hover:opacity-100"></span>
        
        {/* Content */}
        <span className="relative z-10">{children}</span>
      </button>
    );
  }
);
CyberpunkButton.displayName = "CyberpunkButton";

export { CyberpunkButton };
