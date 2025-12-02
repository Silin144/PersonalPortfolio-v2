"use client";

import { CompanyLogoProps } from "@/types";
import { cn } from "@/utils/cn";
import { useState } from "react";

export const CompanyLogo: React.FC<CompanyLogoProps> = ({
  name,
  domain,
  logo,
  size = 48,
}) => {
  const [hasError, setHasError] = useState(false);

  // Priority: manual logo > Clearbit auto-fetch > initials fallback
  const logoUrl = logo || (domain ? `https://logo.clearbit.com/${domain}` : null);

  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const showFallback = !logoUrl || hasError;

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        "rounded-lg border-2 border-terracotta/20",
        "bg-warm-bg-alt",
        "flex items-center justify-center",
        "transition-all duration-200",
        "hover:border-terracotta/40 hover:shadow-sm"
      )}
      style={{ width: size, height: size }}
      title={name}
    >
      {!showFallback && logoUrl && (
        <img
          src={logoUrl}
          alt={name}
          className="w-full h-full object-cover"
          onError={() => setHasError(true)}
        />
      )}
      {showFallback && (
        <span
          className="font-bold text-terracotta"
          style={{ fontSize: size * 0.3 }}
        >
          {initials}
        </span>
      )}
    </div>
  );
};

