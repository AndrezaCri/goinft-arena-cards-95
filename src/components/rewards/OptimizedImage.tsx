
import { memo, useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: string;
  height?: string;
  priority?: boolean;
}

export const OptimizedImage = memo(function OptimizedImage({ 
  src, 
  alt, 
  className,
  width = "64",
  height = "64",
  priority = false
}: OptimizedImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState<string | null>(priority ? src : null);
  
  useEffect(() => {
    if (!priority && !imgSrc) {
      // Small delay to stagger loading and prevent all images loading at once
      const timer = setTimeout(() => {
        setImgSrc(src);
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [priority, src, imgSrc]);
  
  return (
    <div className="relative w-full h-full">
      {!loaded && <Skeleton className="h-full w-full bg-goinft-darker/60 rounded-lg" />}
      {imgSrc && (
        <img 
          src={imgSrc} 
          alt={alt}
          className={`${className || 'w-full h-full object-cover'} ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          onLoad={() => setLoaded(true)}
          loading={priority ? "eager" : "lazy"}
          width={width}
          height={height}
          decoding="async"
        />
      )}
    </div>
  );
});
