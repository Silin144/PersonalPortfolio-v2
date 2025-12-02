export interface Project {
  id: string;
  title: string;
  description: string;
  gifSrc: string;
  fallbackImage?: string;
  company?: {
    name: string;
    domain?: string;
    logo?: string;
  };
  techStack: string[];
  links?: {
    live?: string;
    github?: string;
  };
  date?: string;
  metrics?: {
    users?: string;
    mau?: string;
  };
}

export interface CompanyLogoProps {
  name: string;
  domain?: string;
  logo?: string;
  size?: number;
}

export interface GifThumbnailProps {
  src: string;
  alt: string;
  fallback?: string;
}

export interface TechTagProps {
  label: string;
}

export interface ProjectCardProps extends Project {}

export interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

