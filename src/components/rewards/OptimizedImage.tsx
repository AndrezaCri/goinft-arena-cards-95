
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
  quality = 20 // Further reduced quality from 40 to 20
}: OptimizedImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState<string | null>(priority ? src : null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const imageWrapperRef = useRef<HTMLDivElement | null>(null);
  const isMounted = useRef(true);
  
  // Ultra-optimized image source
  const getOptimizedSrc = useCallback((originalSrc: string): string => {
    if (!originalSrc) return originalSrc;
    
    // For external images, use tiny placeholders
    if (originalSrc.includes('unsplash.com')) {
      return originalSrc.replace(/w=\d+/, 'w=50').replace(/q=\d+/, 'q=10');
    }
    
    if (originalSrc.includes('placeholder.com')) {
      return originalSrc;
    }
    
    // For other URLs, add quality params
    if (originalSrc.startsWith('http') || originalSrc.startsWith('/')) {
      const separator = originalSrc.includes('?') ? '&' : '?';
      // Drastically reduce requested width to improve load times
      const requestedWidth = Math.min(parseInt(width), 100); // Cap at 100px width
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
  
  // Ultra lazy loading with minimal Intersection Observer
  useEffect(() => {
    // Load priority images immediately but with optimized source
    if (priority && !imgSrc && src) {
      setImgSrc(getOptimizedSrc(src));
      return;
    }
    
    // For non-priority images, use minimal Intersection Observer
    if (!priority && !imgSrc && imageWrapperRef.current) {
      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && isMounted.current) {
          setImgSrc(getOptimizedSrc(src));
          observerRef.current?.disconnect();
        }
      }, {
        rootMargin: '50px', // Further reduced from 100px to 50px
        threshold: 0.1
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
      }, 500); // Further reduced from 800ms to 500ms
      
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
          decoding="async"
        />
      )}
    </div>
  );
});
