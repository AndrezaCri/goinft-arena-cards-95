
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search, Filter } from "lucide-react";

const positions = ["Atacante", "Meio-Campo", "Defensor", "Goleiro"];
const rarities = ["comum", "raro", "épico", "lendário"];

interface MarketplaceFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedPositions: string[];
  setSelectedPositions: (positions: string[]) => void;
  selectedRarities: string[];
  setSelectedRarities: (rarities: string[]) => void;
  priceRange: { min: number; max: number };
  setPriceRange: (range: { min: number; max: number }) => void;
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
}

export function MarketplaceFilters({
  searchQuery,
  setSearchQuery,
  selectedPositions,
  setSelectedPositions,
  selectedRarities,
  setSelectedRarities,
  priceRange,
  setPriceRange,
  showFilters,
  setShowFilters
}: MarketplaceFiltersProps) {
  const togglePosition = (position: string) => {
    if (selectedPositions.includes(position)) {
      setSelectedPositions(selectedPositions.filter(p => p !== position));
    } else {
      setSelectedPositions([...selectedPositions, position]);
    }
  };

  const toggleRarity = (rarity: string) => {
    if (selectedRarities.includes(rarity)) {
      setSelectedRarities(selectedRarities.filter(r => r !== rarity));
    } else {
      setSelectedRarities([...selectedRarities, rarity]);
    }
  };

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedPositions([]);
    setSelectedRarities([]);
    setPriceRange({ min: 0, max: 100 });
  };

  return (
    <div className="mb-6 space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
          <Input 
            placeholder="Buscar cards..." 
            className="bg-goinft-card/50 border-neon-purple/30 pl-10 text-white backdrop-blur-sm" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <Button
          variant="outline"
          className="bg-goinft-card/50 border-neon-purple/30 text-white backdrop-blur-sm hover:bg-neon-purple/20"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter className="mr-2 h-4 w-4" />
          Filtros
        </Button>
      </div>
      
      {showFilters && (
        <div className="p-6 bg-goinft-card/30 rounded-xl backdrop-blur-sm border border-neon-purple/20 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <Label className="text-white mb-2 block">Posição</Label>
              <div className="space-y-2">
                {positions.map((position) => (
                  <div key={position} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`position-${position}`}
                      checked={selectedPositions.includes(position)}
                      onChange={() => togglePosition(position)}
                      className="mr-2 accent-neon-purple"
                    />
                    <label htmlFor={`position-${position}`} className="text-white/70 hover:text-white transition-colors">
                      {position}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <Label className="text-white mb-2 block">Raridade</Label>
              <div className="space-y-2">
                {rarities.map((rarity) => (
                  <div key={rarity} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`rarity-${rarity}`}
                      checked={selectedRarities.includes(rarity)}
                      onChange={() => toggleRarity(rarity)}
                      className="mr-2 accent-neon-purple"
                    />
                    <label htmlFor={`rarity-${rarity}`} className="text-white/70 hover:text-white transition-colors capitalize">
                      {rarity}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <Label className="text-white mb-2 block">Faixa de Preço (CHZ)</Label>
              <div className="flex items-center gap-2">
                <Input
                  type="number"
                  placeholder="Mín"
                  className="bg-goinft-card/50 border-neon-purple/30 text-white"
                  value={priceRange.min}
                  onChange={(e) => setPriceRange({ ...priceRange, min: Number(e.target.value) })}
                />
                <span className="text-white">até</span>
                <Input
                  type="number"
                  placeholder="Máx"
                  className="bg-goinft-card/50 border-neon-purple/30 text-white"
                  value={priceRange.max}
                  onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
                />
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex justify-end gap-3">
            <Button 
              variant="outline" 
              className="border-neon-purple text-white hover:bg-neon-purple/20"
              onClick={resetFilters}
            >
              Limpar
            </Button>
            <Button 
              className="bg-gradient-to-r from-neon-purple to-neon-pink text-white hover:opacity-90"
              onClick={() => setShowFilters(false)}
            >
              Aplicar Filtros
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
