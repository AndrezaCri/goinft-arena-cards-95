
import { Link, useLocation } from "react-router-dom";
import { Home, Book, Coins } from "lucide-react";
import { cn } from "@/lib/utils";

const MENUS = [
  { label: "Home", to: "/", icon: Home },
  { label: "Sobre o Projeto", to: "/about", icon: Book },
  { label: "NFTs Disponíveis", to: "/nfts", icon: Coins },
];

export function NavbarMain() {
  const location = useLocation();
  return (
    <nav className="flex justify-center gap-6 py-4">
      {MENUS.map((item) => {
        const isActive = item.to === location.pathname;
        const Icon = item.icon;
        return (
          <Link
            key={item.to}
            to={item.to}
            className={cn(
              "flex items-center gap-2 font-orbitron px-4 py-2 rounded-lg transition-colors hover:text-neon-purple hover:bg-neon-purple/10",
              isActive
                ? "bg-neon-purple/10 text-neon-purple font-bold"
                : "text-white/80"
            )}
          >
            <Icon size={20} className="mr-1" />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
