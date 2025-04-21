
interface Position {
  x: number;
  y: number;
}

export const getRandomPosition = (): Position => ({
  x: Math.random() * 10 - 5,
  y: Math.random() * 10 - 5
});

export const getRandomRotation = (): number => Math.random() * 6 - 3;

export const CARD_SIZES = {
  sm: "w-32 h-44", // Smaller card
  md: "w-40 h-56", // Medium card
  lg: "w-48 h-64"  // Larger card
} as const;

