
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
  const [imgSrc, setImgSrc] = useState<string | null>(priority ? src : null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const imageWrapperRef = useRef<HTMLDivElement | null>(null);
  const isMounted = useRef(true);
  
  // Cleanup function to prevent memory leaks
  useEffect(() => {
    return () => {
      isMounted.current = false;
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
  
  // Implementing lazy loading with Intersection Observer
  useEffect(() => {
    // For priority images, load immediately
    if (priority && !imgSrc && src) {
      setImgSrc(src);
      return;
    }
    
    // For non-priority images, use Intersection Observer
    if (!priority && !imgSrc && imageWrapperRef.current) {
      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && isMounted.current) {
          setImgSrc(src);
          observerRef.current?.disconnect();
        }
      }, {
        rootMargin: '200px', // Preload when within 200px distance
        threshold: 0.01
      });
      
      observerRef.current.observe(imageWrapperRef.current);
    }
    
    // Cleanup when component unmounts or src changes
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [priority, src, imgSrc]);
  
  // Optimizing callback function
  const handleImageLoad = useCallback(() => {
    if (isMounted.current) {
      setLoaded(true);
      if (onLoad) onLoad();
    }
  }, [onLoad]);
  
  // Remove skeleton after a maximum time
  useEffect(() => {
    if (!loaded && imgSrc) {
      const timeout = setTimeout(() => {
        if (isMounted.current) {
          setLoaded(true);
        }
      }, 2000); // 2 seconds max wait time (reduced from 3)
      
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
