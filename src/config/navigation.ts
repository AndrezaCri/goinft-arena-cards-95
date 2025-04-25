
import { Home, FileText, Briefcase, Gift } from "lucide-react";
import type { NavItem } from "@/components/ui/tubelight-navbar";

export const navigationItems: NavItem[] = [
  { name: "Home", url: "/", icon: Home },
  { name: "Álbuns", url: "/albums", icon: FileText },
  { name: "Mercado", url: "/marketplace", icon: Briefcase },
  { name: "Recompensas", url: "/rewards", icon: Gift },
];
