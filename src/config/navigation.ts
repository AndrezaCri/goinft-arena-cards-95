
import { Home, Briefcase, FileText, Gift, User } from "lucide-react";
import type { NavItem } from "@/components/ui/tubelight-navbar";

export const navigationItems: NavItem[] = [
  { name: "Dashboard", url: "/dashboard", icon: Home },
  { name: "Álbuns", url: "/albums", icon: FileText },
  { name: "Mercado", url: "/marketplace", icon: Briefcase },
  { name: "Recompensas", url: "/rewards", icon: Gift },
  { name: "Perfil", url: "/profile", icon: User },
];
