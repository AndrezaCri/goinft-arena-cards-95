
import React, { memo, useState, useEffect, useCallback, useRef } from "react";
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
  // Sempre definir imgSrc com o valor de src - não usar lazy loading condicional
  const [imgSrc, setImgSrc] = useState<string>(src);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const imageWrapperRef = useRef<HTMLDivElement | null>(null);
  const isMounted = useRef(true);
  const retryCount = useRef(0);
  
  // Cleanup function to prevent memory leaks
  useEffect(() => {
    return () => {
      isMounted.current = false;
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
  
  // Se o src mudar, atualizar imgSrc
  useEffect(() => {
    if (src && src !== imgSrc) {
      setImgSrc(src);
    }
  }, [src, imgSrc]);
  
  // Função de retry para garantir que a imagem seja carregada
  useEffect(() => {
    if (!loaded && imgSrc) {
      const timeout = setTimeout(() => {
        if (isMounted.current && retryCount.current < 3) {
          retryCount.current += 1;
          // Forçar recarga da imagem se não carregou
          setImgSrc('');
          setTimeout(() => {
            if (isMounted.current) {
              setImgSrc(src);
            }
          }, 50);
        } else if (isMounted.current) {
          // Se não conseguimos carregar após 3 tentativas, setamos como carregado
          setLoaded(true);
        }
      }, 2000); // 2 segundos de espera
      
      return () => clearTimeout(timeout);
    }
  }, [loaded, imgSrc, src]);
  
  // Optimizing callback function
  const handleImageLoad = useCallback(() => {
    if (isMounted.current) {
      setLoaded(true);
      if (onLoad) onLoad();
    }
  }, [onLoad]);
  
  const handleImageError = useCallback(() => {
    if (isMounted.current && retryCount.current < 3) {
      retryCount.current += 1;
      // Recarregar imagem em caso de erro
      setImgSrc('');
      setTimeout(() => {
        if (isMounted.current) {
          setImgSrc(src);
        }
      }, 300);
    } else if (isMounted.current) {
      // Se várias tentativas falharem, considerar como carregado para não travar a UI
      setLoaded(true);
    }
  }, [src]);
  
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
          onError={handleImageError}
          loading="eager" // Sempre carregamento eager para evitar problemas
          width={width}
          height={height}
          decoding="async"
        />
      )}
    </div>
  );
});
