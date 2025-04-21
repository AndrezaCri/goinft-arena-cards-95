
"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Home, User, Briefcase, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

export interface NavItem {
  name: string;
  url: string;
  icon: React.ElementType;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

export function NavBar({ items, className }: NavBarProps) {
  const location = useLocation();
  const findActive = () => {
    const match = items.find(item => location.pathname === item.url);
    return match ? match.name : items[0].name;
  };
  const [activeTab, setActiveTab] = useState(findActive());
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setActiveTab(findActive());
    // Keep tab in sync as location changes
    // eslint-disable-next-line
  }, [location.pathname]);

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6",
        className,
      )}
    >
      <div className="flex items-center gap-3 bg-goinft-dark/30 backdrop-blur-lg border border-neon-purple/20 py-1 px-1 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <Link
              key={item.name}
              to={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                "text-white/80 hover:text-neon-purple",
                isActive && "bg-neon-purple/15 text-neon-purple",
              )}
              style={{outline: "none"}}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden flex items-center justify-center">
                <Icon size={20} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-neon-purple/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-neon-purple rounded-t-full">
                    <div className="absolute w-12 h-6 bg-neon-blue/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-neon-pink/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-neon-purple/30 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

// Optional demo usage:
export function NavBarDemo() {
  const navItems: NavItem[] = [
    { name: "Home", url: "/", icon: Home },
    { name: "Perfil", url: "/profile", icon: User },
    { name: "Mercado", url: "/marketplace", icon: Briefcase },
    { name: "Álbuns", url: "/albums", icon: FileText },
  ];
  return <NavBar items={navItems} />;
}
