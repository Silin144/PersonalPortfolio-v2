"use client";

import { PROJECTS } from "@/constants/projects";
import { ProjectCard } from "./ProjectCard";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

export const ProjectsSection: React.FC = () => {
  // Show only first 4 projects for 2x2 grid
  const displayProjects = PROJECTS.slice(0, 4);

  return (
    <section
      id="projects"
      className={cn(
        "py-16 md:py-24",
        "px-6 md:px-12 lg:px-24",
        "max-w-5xl mx-auto"
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h2
          className={cn(
            "text-3xl md:text-4xl font-heading italic",
            "text-deep-brown",
            "mb-2"
          )}
        >
          Selected Work
        </h2>
        <p className="text-sm text-brown-light">
          Things I&apos;ve built recently
        </p>
      </motion.div>

      {/* 2x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {displayProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>

      {/* View all link */}
      {PROJECTS.length > 4 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <a
            href="https://github.com/Silin144"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "text-sm text-brown-muted hover:text-terracotta",
              "transition-colors duration-200"
            )}
          >
            View more on GitHub →
          </a>
        </motion.div>
      )}
    </section>
  );
};
