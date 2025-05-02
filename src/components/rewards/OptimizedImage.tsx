
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
  quality = 80 // Aumentado de 20 para 80 para garantir qualidade suficiente
}: OptimizedImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState<string | null>(priority ? src : null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const imageWrapperRef = useRef<HTMLDivElement | null>(null);
  const isMounted = useRef(true);
  const [error, setError] = useState(false);
  
  // Função simplificada para otimizar a fonte da imagem
  const getOptimizedSrc = useCallback((originalSrc: string): string => {
    if (!originalSrc) return originalSrc;
    
    // Retornar a fonte original para garantir que a imagem carregue corretamente
    return originalSrc;
  }, []);
  
  // Cleanup
  useEffect(() => {
    return () => {
      isMounted.current = false;
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
  
  // Carregamento lazy com Intersection Observer
  useEffect(() => {
    // Carregar imagens priority imediatamente
    if (priority && !imgSrc && src) {
      setImgSrc(src);
      return;
    }
    
    // Para imagens não-priority, usar Intersection Observer
    if (!priority && !imgSrc && imageWrapperRef.current) {
      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && isMounted.current) {
          setImgSrc(src);
          observerRef.current?.disconnect();
        }
      }, {
        rootMargin: '100px',
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
  
  // Lidar com erro de carregamento
  const handleImageError = useCallback(() => {
    if (isMounted.current) {
      setError(true);
      console.error(`Failed to load image: ${src}`);
    }
  }, [src]);
  
  // Forçar skeleton a desaparecer após um tempo
  useEffect(() => {
    if (!loaded && imgSrc) {
      const timeout = setTimeout(() => {
        if (isMounted.current) {
          setLoaded(true);
        }
      }, 800);
      
      return () => clearTimeout(timeout);
    }
  }, [loaded, imgSrc]);
  
  return (
    <div ref={imageWrapperRef} className="relative w-full h-full">
      {!loaded && imgSrc && <Skeleton className="h-full w-full bg-goinft-darker/60 rounded-lg absolute inset-0" />}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-goinft-darker/80 text-white text-xs text-center p-2">
          Erro ao carregar imagem
        </div>
      )}
      {imgSrc && (
        <img 
          ref={imageRef}
          src={imgSrc} 
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
