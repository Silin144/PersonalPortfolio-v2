"use client";

import { ProjectCardProps } from "@/types";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  links,
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <a
        href={links?.live || links?.github || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "block p-6",
          "border border-brown-light/10 rounded-lg",
          "bg-transparent hover:bg-warm-bg-alt",
          "transition-all duration-300",
          "hover:border-brown-light/20"
        )}
      >
        {/* Title */}
        <h3
          className={cn(
            "text-xl md:text-2xl font-heading italic",
            "text-deep-brown mb-2",
            "group-hover:text-terracotta transition-colors duration-200"
          )}
        >
          {title}
        </h3>

        {/* Description */}
        <p className={cn("text-sm text-brown-muted leading-relaxed mb-4")}>
          {description}
        </p>

        {/* Tech stack - minimal inline */}
        <div className="flex items-center gap-2 text-xs text-brown-light">
          {techStack.slice(0, 3).map((tech, i) => (
            <span key={tech} className="font-mono">
              {tech}
              {i < Math.min(techStack.length, 3) - 1 && (
                <span className="ml-2">·</span>
              )}
            </span>
          ))}
        </div>
      </a>
    </motion.article>
  );
};
