"use client";

import { PERSONAL_INFO } from "@/constants/projects";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import { useScrollSmooth } from "@/utils/hooks/useScrollSmooth";

export const HeroSection: React.FC = () => {
  const { scrollTo } = useScrollSmooth();

  return (
    <section
      id="hero"
      className={cn(
        "min-h-[85vh] flex flex-col justify-center",
        "px-6 md:px-12 lg:px-24",
        "py-24 md:py-32",
        "max-w-5xl mx-auto"
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-6"
      >
        {/* Name */}
        <h1
          className={cn(
            "text-4xl md:text-5xl lg:text-6xl",
            "font-heading italic",
            "text-deep-brown"
          )}
        >
          {PERSONAL_INFO.name}
        </h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className={cn("text-lg md:text-xl text-brown-muted")}
        >
          {PERSONAL_INFO.title}
        </motion.p>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className={cn(
            "text-base text-brown-light leading-relaxed",
            "max-w-lg"
          )}
        >
          {PERSONAL_INFO.bio}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="pt-2"
        >
          <button
            onClick={() => scrollTo("projects")}
            className={cn(
              "text-sm text-brown-muted hover:text-terracotta",
              "transition-colors duration-200"
            )}
          >
            See my work ↓
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};
