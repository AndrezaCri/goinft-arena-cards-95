
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
  
  // Implementando carregamento progressivo baseado no Intersection Observer
  useEffect(() => {
    let isMounted = true;
    
    // Para imagens prioritárias, carregue imediatamente
    if (priority && !imgSrc && src) {
      setImgSrc(src);
      return;
    }
    
    // Para imagens não prioritárias, use Intersection Observer
    if (!priority && !imgSrc) {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && isMounted) {
          setImgSrc(src);
          observer.disconnect();
        }
      }, {
        rootMargin: '200px', // Pré-carrega quando estiver a 200px de distância
        threshold: 0.01
      });
      
      // Elemento temporário para observação
      const element = document.createElement('div');
      observer.observe(element);
      
      // Limpeza
      return () => {
        observer.disconnect();
        isMounted = false;
      };
    }
    
    return () => {
      isMounted = false;
    };
  }, [priority, src, imgSrc]);
  
  // Otimizando função de callback com useCallback
  const handleImageLoad = useCallback(() => {
    setLoaded(true);
    if (onLoad) onLoad();
  }, [onLoad]);
  
  // Removendo o skeleton após um tempo máximo, mesmo se a imagem não carregar
  useEffect(() => {
    if (!loaded && imgSrc) {
      const timeout = setTimeout(() => {
        setLoaded(true);
      }, 5000); // 5 segundos máximo de espera
      
      return () => clearTimeout(timeout);
    }
  }, [loaded, imgSrc]);
  
  return (
    <div className="relative w-full h-full">
      {!loaded && imgSrc && <Skeleton className="h-full w-full bg-goinft-darker/60 rounded-lg absolute inset-0" />}
      {imgSrc && (
        <img 
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
