
import { useState } from "react";

interface CardAnimation {
  rotateX: number;
  rotateY: number;
  isHovered: boolean;
  handleMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  handleMouseLeave: () => void;
  handleMouseEnter: () => void;
}

export function useCardAnimation(isHolographic: boolean = false): CardAnimation {
  const [isHovered, setIsHovered] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHolographic) return;
    
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    setRotateX(rotateX);
    setRotateY(rotateY);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const handleMouseEnter = () => setIsHovered(true);
  
  return {
    rotateX,
    rotateY,
    isHovered,
    handleMouseMove,
    handleMouseLeave,
    handleMouseEnter
  };
}
