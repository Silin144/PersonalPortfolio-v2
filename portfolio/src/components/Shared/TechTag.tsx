import { TechTagProps } from "@/types";
import { cn } from "@/utils/cn";

export const TechTag: React.FC<TechTagProps> = ({ label }) => {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1.5",
        "text-xs font-medium font-mono",
        "bg-warm-bg-alt text-brown-muted",
        "rounded-md border border-brown-light/10",
        "transition-all duration-200",
        "hover:bg-terracotta/10 hover:text-terracotta hover:border-terracotta/20"
      )}
    >
      {label}
    </span>
  );
};

