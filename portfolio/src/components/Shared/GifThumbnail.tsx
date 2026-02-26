"use client";

import { GifThumbnailProps } from "@/types";
import { useIntersectionObserver } from "@/utils/hooks/useIntersectionObserver";
import { cn } from "@/utils/cn";
import { useState } from "react";

export const GifThumbnail: React.FC<GifThumbnailProps> = ({
  src,
  alt,
  fallback,
}) => {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: "100px",
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div
      ref={ref}
      className={cn(
        "relative w-full aspect-video",
        "rounded-xl overflow-hidden",
        "bg-warm-bg-alt",
        "ring-1 ring-brown-light/10",
        "transition-all duration-500",
        "group-hover:ring-terracotta/30 group-hover:shadow-lg"
      )}
    >
      {/* Animated placeholder */}
      {!isLoaded && (
        <div
          className={cn(
            "absolute inset-0",
            "bg-gradient-to-br from-terracotta/10 via-gold/10 to-terracotta/5",
            "animate-pulse"
          )}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full border-2 border-terracotta/30 border-t-terracotta animate-spin" />
          </div>
        </div>
      )}

      {/* Load GIF only when visible */}
      {isVisible && !hasError && (
        <img
          src={src}
          alt={alt}
          className={cn(
            "w-full h-full object-cover",
            "transition-opacity duration-500",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            setHasError(true);
            if (fallback) {
              setIsLoaded(false);
            }
          }}
        />
      )}

      {/* Fallback image */}
      {hasError && fallback && (
        <img
          src={fallback}
          alt={alt}
          className="w-full h-full object-cover"
          onLoad={() => setIsLoaded(true)}
        />
      )}

      {/* Error state */}
      {hasError && !fallback && (
        <div className="absolute inset-0 flex items-center justify-center text-brown-muted">
          <span className="text-sm">Preview unavailable</span>
        </div>
      )}

      {/* Hover overlay */}
      <div
        className={cn(
          "absolute inset-0",
          "bg-gradient-to-t from-deep-brown/20 to-transparent",
          "opacity-0 transition-opacity duration-300",
          "group-hover:opacity-100"
        )}
      />
    </div>
  );
};

