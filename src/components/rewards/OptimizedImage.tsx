
import { memo, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const OptimizedImage = memo(function OptimizedImage({ 
  src, 
  alt, 
  className 
}: OptimizedImageProps) {
  const [loaded, setLoaded] = useState(false);
  
  return (
    <div className="relative w-full h-full">
      {!loaded && <Skeleton className="h-16 w-16 bg-goinft-darker/60 rounded-lg" />}
      <img 
        src={src} 
        alt={alt}
        className={`${className} ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        onLoad={() => setLoaded(true)}
        loading="lazy"
        width="64"
        height="64"
      />
    </div>
  );
});
