
import { memo, useState, useEffect, useCallback } from "react";
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
  
  // Use useEffect com dependências corretas
  useEffect(() => {
    let isMounted = true;
    
    if (!priority && !imgSrc) {
      // Definir um timeout para carregar imagens não prioritárias de forma escalonada
      const timeoutId = setTimeout(() => {
        if (isMounted) {
          setImgSrc(src);
        }
      }, 100); // Pequeno delay para escalonar carregamentos
      
      return () => {
        clearTimeout(timeoutId);
        isMounted = false;
      };
    }
    
    return () => {
      isMounted = false;
    };
  }, [priority, src, imgSrc]);
  
  // Use useCallback para funções de evento
  const handleImageLoad = useCallback(() => {
    setLoaded(true);
    if (onLoad) onLoad();
  }, [onLoad]);
  
  return (
    <div className="relative w-full h-full">
      {!loaded && <Skeleton className="h-full w-full bg-goinft-darker/60 rounded-lg absolute inset-0" />}
      {imgSrc && (
        <img 
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
