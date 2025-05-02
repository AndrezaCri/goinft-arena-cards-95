
import React, { memo, useState, useEffect, useCallback } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: string;
  height?: string;
  priority?: boolean;
  onLoad?: () => void;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  containerClassName?: string;
}

export const OptimizedImage = memo(function OptimizedImage({ 
  src, 
  alt, 
  className,
  width = "64",
  height = "64",
  priority = false,
  onLoad,
  objectFit = "cover",
  containerClassName
}: OptimizedImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  
  // Use effect to handle src changes and preloading
  useEffect(() => {
    if (!src) return;
    
    setLoaded(false);
    setError(false);
    
    // Create a new Image to preload
    const img = new Image();
    img.src = src;
    setImgSrc(src);
    
    // If priority is true, we'll set loaded to true when the image loads
    if (priority) {
      img.onload = () => {
        setLoaded(true);
        if (onLoad) onLoad();
      };
      
      img.onerror = () => {
        console.error(`Failed to load image: ${src}`);
        setError(true);
      };
    }
    
    // Clean up on unmount or src change
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, priority, onLoad]);
  
  // Optimized handlers with useCallback to prevent recreations
  const handleImageLoad = useCallback(() => {
    setLoaded(true);
    if (onLoad) onLoad();
  }, [onLoad]);
  
  const handleImageError = useCallback(() => {
    console.error(`Failed to load image: ${src}`);
    setError(true);
  }, [src]);

  const objectFitClass = {
    cover: "object-cover",
    contain: "object-contain",
    fill: "object-fill",
    none: "object-none",
    "scale-down": "object-scale-down"
  }[objectFit];
  
  return (
    <div className={cn("relative w-full h-full flex items-center justify-center", containerClassName)}>
      {!loaded && !error && (
        <Skeleton className="h-full w-full bg-goinft-darker/60 rounded-lg absolute inset-0" />
      )}
      {imgSrc && (
        <img 
          src={imgSrc} 
          alt={alt}
          className={cn(
            className || 'w-full h-full',
            objectFitClass,
            loaded ? 'opacity-100' : 'opacity-0',
            'transition-opacity duration-300'
          )}
          onLoad={handleImageLoad}
          onError={handleImageError}
          loading={priority ? "eager" : "lazy"}
          width={width}
          height={height}
          decoding="async"
        />
      )}
    </div>
  );
});
