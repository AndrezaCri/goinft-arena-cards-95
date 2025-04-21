
"use client";

import { cn } from "@/lib/utils";

interface AnimatedGradientBackgroundProps {
  className?: string;
  children?: React.ReactNode;
  intensity?: "subtle" | "medium" | "strong";
}

/**
 * This component displays a full screen static stadium image as a background.
 * Children are rendered on top, with a dark overlay for contrast.
 */
export function BackgroundGradientAnimation({
  className,
  children,
}: AnimatedGradientBackgroundProps) {
  return (
    <div
      className={cn(
        "relative min-h-screen w-full overflow-hidden bg-black",
        className
      )}
    >
      {/* Stadium background image */}
      <img
        src="/public/lovable-uploads/952c13c2-b282-4ace-9f4b-e62b51852e54.png"
        alt="Futuristic Soccer Stadium"
        className="absolute inset-0 w-full h-full object-cover z-0"
        draggable={false}
        style={{ pointerEvents: "none", userSelect: "none" }}
      />
      {/* Optional dark overlay for readability */}
      <div className="absolute inset-0 bg-black/70 z-10" />
      {/* Foreground content */}
      <div className="relative z-20 h-screen w-full">{children}</div>
    </div>
  );
}
