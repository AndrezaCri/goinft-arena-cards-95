
"use client";

import { cn } from "@/lib/utils";

interface AnimatedGradientBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

export function BackgroundGradientAnimation({
  className,
  children,
}: AnimatedGradientBackgroundProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat",
        className
      )}
      style={{
        backgroundImage: "url('/lovable-uploads/952c13c2-b282-4ace-9f4b-e62b51852e54.png')"
      }}
    >
      {children}
    </div>
  );
}
