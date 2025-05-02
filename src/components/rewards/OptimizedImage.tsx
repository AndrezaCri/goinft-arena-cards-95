
import React, { memo, useState, useEffect, useCallback, useMemo } from "react";
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

// Global image cache to prevent reloading the same images
const imageCache = new Map<string, boolean>();

// Initialize a preloader for critical images
const preloadCriticalImages = (sources: string[]) => {
  sources.forEach(src => {
    if (!imageCache.has(src)) {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        imageCache.set(src, true);
      };
    }
  });
};

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
  const [loaded, setLoaded] = useState(imageCache.has(src) || false);
  const [error, setError] = useState(false);
  
  // Use memoized object fit class to prevent recreation
  const objectFitClass = useMemo(() => {
    return {
      cover: "object-cover",
      contain: "object-contain",
      fill: "object-fill",
      none: "object-none",
      "scale-down": "object-scale-down"
    }[objectFit];
  }, [objectFit]);
  
  // Optimized image loading effect with eager loading for priority images
  useEffect(() => {
    if (!src) return;
    
    // If image is already in cache, set loaded to true immediately
    if (imageCache.has(src)) {
      setLoaded(true);
      if (onLoad) onLoad();
      return;
    }
    
    setLoaded(false);
    setError(false);
    
    // Create a new image element to preload
    const img = new Image();
    
    // If priority is true, use fetchpriority attribute
    if (priority) {
      img.fetchPriority = "high";
    }
    
    const handleLoad = () => {
      setLoaded(true);
      imageCache.set(src, true);
      if (onLoad) onLoad();
    };
    
    const handleError = () => {
      console.error(`Failed to load image: ${src}`);
      setError(true);
    };
    
    // Add event listeners
    img.onload = handleLoad;
    img.onerror = handleError;
    img.src = src;
    
    // Clean up on unmount or src change
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, priority, onLoad]);
  
  // Optimized handlers with useCallback to prevent recreations
  const handleImageLoad = useCallback(() => {
    setLoaded(true);
    imageCache.set(src, true);
    if (onLoad) onLoad();
  }, [onLoad, src]);
  
  const handleImageError = useCallback(() => {
    console.error(`Failed to load image: ${src}`);
    setError(true);
  }, [src]);
  
  return (
    <div className={cn("relative w-full h-full flex items-center justify-center", containerClassName)}>
      {!loaded && !error && (
        <Skeleton className="h-full w-full bg-goinft-darker/60 rounded-lg absolute inset-0" />
      )}
      {src && (
        <img 
          src={src} 
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
          fetchPriority={priority ? "high" : "auto"}
          width={width}
          height={height}
          decoding={priority ? "sync" : "async"}
        />
      )}
    </div>
  );
});

// Export the preload function for direct use in other components
export { preloadCriticalImages };
