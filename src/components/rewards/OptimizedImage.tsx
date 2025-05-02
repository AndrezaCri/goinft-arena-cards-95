
import React, { memo, useState, useEffect, useCallback } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: string;
  height?: string;
  priority?: boolean;
  onLoad?: () => void;
}

export const OptimizedImage = memo(function OptimizedImage({ 
  src, 
  alt, 
  className,
  width = "64",
  height = "64",
  priority = false,
  onLoad
}: OptimizedImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  
  // Simplifying the loading process
  const handleImageLoad = useCallback(() => {
    setLoaded(true);
    if (onLoad) onLoad();
  }, [onLoad]);
  
  const handleImageError = useCallback(() => {
    console.error(`Failed to load image: ${src}`);
    setError(true);
  }, [src]);

  // Reset states when src changes
  useEffect(() => {
    if (src) {
      setLoaded(false);
      setError(false);
    }
  }, [src]);
  
  return (
    <div className="relative w-full h-full">
      {!loaded && !error && (
        <Skeleton className="h-full w-full bg-goinft-darker/60 rounded-lg absolute inset-0" />
      )}
      {src && (
        <img 
          src={src} 
          alt={alt}
          className={`${className || 'w-full h-full object-cover'} ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
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
