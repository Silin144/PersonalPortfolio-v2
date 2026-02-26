"use client";

import { cn } from "@/utils/cn";
import { SOCIAL_LINKS } from "@/constants/projects";

const NAV_ITEMS = [
  { label: "about", href: "#" },
  { label: "projects", href: "#projects" },
];

export const Header: React.FC = () => {
  return (
    <header className="max-w-2xl mx-auto px-6 pt-8 md:pt-12">
      <nav className="flex items-center justify-between">
        {/* Name */}
        <a
          href="#"
          className={cn(
            "font-medium text-text-primary",
            "hover:text-accent transition-colors"
          )}
        >
          silin gupta
        </a>

        {/* Nav Links */}
        <div className="flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm text-text-secondary",
                "hover:text-text-primary transition-colors",
                "glow-underline"
              )}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};
