
import { memo, useState, useEffect, useCallback, useRef } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: string;
  height?: string;
  priority?: boolean;
  onLoad?: () => void;
  quality?: number;
}

export const OptimizedImage = memo(function OptimizedImage({ 
  src, 
  alt, 
  className,
  width = "64",
  height = "64",
  priority = false,
  onLoad,
  quality = 40 // Reduced quality from 75 to 40
}: OptimizedImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState<string | null>(priority ? src : null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const imageWrapperRef = useRef<HTMLDivElement | null>(null);
  const isMounted = useRef(true);
  
  // Optimize image source - reduce size aggressively
  const getOptimizedSrc = useCallback((originalSrc: string): string => {
    if (!originalSrc) return originalSrc;
    
    // For external images, use a tiny placeholder
    if (originalSrc.includes('unsplash.com')) {
      return originalSrc.replace(/w=\d+/, 'w=100').replace(/q=\d+/, 'q=30');
    }
    
    if (originalSrc.includes('placeholder.com')) {
      return originalSrc;
    }
    
    // For other URLs, add quality params
    if (originalSrc.startsWith('http')) {
      const separator = originalSrc.includes('?') ? '&' : '?';
      // Reduce requested width dramatically to improve load times
      const requestedWidth = Math.min(parseInt(width), 150); // Cap at 150px
      return `${originalSrc}${separator}q=${quality}&w=${requestedWidth}`;
    }
    
    return originalSrc;
  }, [width, quality]);
  
  // Cleanup function
  useEffect(() => {
    return () => {
      isMounted.current = false;
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
  
  // Use Intersection Observer for extreme lazy loading
  useEffect(() => {
    // Load priority images immediately but with optimized source
    if (priority && !imgSrc && src) {
      setImgSrc(getOptimizedSrc(src));
      return;
    }
    
    // For non-priority images, use more aggressive Intersection Observer
    if (!priority && !imgSrc && imageWrapperRef.current) {
      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && isMounted.current) {
          setImgSrc(getOptimizedSrc(src));
          observerRef.current?.disconnect();
        }
      }, {
        rootMargin: '100px', // Reduced from 200px to 100px for more just-in-time loading
        threshold: 0.1 // Increased threshold so image loads when more visible
      });
      
      observerRef.current.observe(imageWrapperRef.current);
    }
    
    // Cleanup
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [priority, src, imgSrc, getOptimizedSrc]);
  
  // Handle image load
  const handleImageLoad = useCallback(() => {
    if (isMounted.current) {
      setLoaded(true);
      if (onLoad) onLoad();
    }
  }, [onLoad]);
  
  // Force skeleton to disappear after a very short time
  useEffect(() => {
    if (!loaded && imgSrc) {
      const timeout = setTimeout(() => {
        if (isMounted.current) {
          setLoaded(true);
        }
      }, 800); // Further reduced from 1500ms to 800ms
      
      return () => clearTimeout(timeout);
    }
  }, [loaded, imgSrc]);
  
  return (
    <div ref={imageWrapperRef} className="relative w-full h-full">
      {!loaded && imgSrc && <Skeleton className="h-full w-full bg-goinft-darker/60 rounded-lg absolute inset-0" />}
      {imgSrc && (
        <img 
          ref={imageRef}
          src={imgSrc} 
          alt={alt}
          className={`${className || 'w-full h-full object-cover'} ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          onLoad={handleImageLoad}
          loading={priority ? "eager" : "lazy"}
          width={width}
          height={height}
          decoding={priority ? "sync" : "async"}
        />
      )}
    </div>
  );
});
