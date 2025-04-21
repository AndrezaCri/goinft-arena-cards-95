
import { cn } from "@/lib/utils";

interface CyberpunkHeadingProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  variant?: "gradient" | "neon" | "simple";
  className?: string;
  withLinesDecoration?: boolean;
  animated?: boolean;
}

export function CyberpunkHeading({
  children,
  size = "lg",
  variant = "gradient",
  className,
  withLinesDecoration = false,
  animated = false,
}: CyberpunkHeadingProps) {
  const sizeClasses = {
    sm: "text-lg sm:text-xl",
    md: "text-xl sm:text-2xl",
    lg: "text-2xl sm:text-3xl",
    xl: "text-3xl sm:text-4xl md:text-5xl",
    "2xl": "text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
  };
  
  const variantClasses = {
    gradient: "text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue",
    neon: "text-neon-purple drop-shadow-[0_0_5px_rgba(155,135,245,0.8)]",
    simple: "text-white"
  };
  
  const animationClasses = animated ? "animate-float" : "";
  
  return (
    <div className={cn("flex items-center gap-4", withLinesDecoration && "my-6")}>
      {withLinesDecoration && (
        <div className="hidden sm:block h-px flex-grow max-w-24 bg-gradient-to-r from-transparent to-neon-purple/70"></div>
      )}
      
      <h2 
        className={cn(
          "font-orbitron font-bold",
          sizeClasses[size],
          variantClasses[variant],
          animationClasses,
          className
        )}
      >
        {children}
      </h2>
      
      {withLinesDecoration && (
        <div className="hidden sm:block h-px flex-grow max-w-24 bg-gradient-to-l from-transparent to-neon-purple/70"></div>
      )}
    </div>
  );
}
