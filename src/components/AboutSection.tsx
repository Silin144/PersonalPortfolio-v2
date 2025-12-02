"use client";

import { PERSONAL_INFO, SOCIAL_LINKS } from "@/constants/projects";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className={cn(
        "py-16 md:py-20",
        "px-6 md:px-12 lg:px-24",
        "max-w-5xl mx-auto"
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2
          className={cn(
            "text-3xl md:text-4xl font-heading italic",
            "text-deep-brown",
            "mb-6"
          )}
        >
          About
        </h2>

        <div className="space-y-4 max-w-xl">
          <p className="text-sm text-brown-muted leading-relaxed">
            I&apos;m a CS student at the University of Waterloo, focused on
            building software that solves real problems. My interests lie at the
            intersection of AI and full-stack development.
          </p>
          <p className="text-sm text-brown-muted leading-relaxed">
            When I&apos;m not coding, I&apos;m usually boxing, reading, or
            diving into AI research papers.
          </p>
          <p className="text-sm text-brown-light">
            Based in {PERSONAL_INFO.location}
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className={cn(
        "py-16 md:py-20",
        "px-6 md:px-12 lg:px-24",
        "max-w-5xl mx-auto"
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2
          className={cn(
            "text-3xl md:text-4xl font-heading italic",
            "text-deep-brown",
            "mb-6"
          )}
        >
          Get in touch
        </h2>

        <div className="flex flex-wrap gap-4 text-sm">
          <a
            href={`mailto:${SOCIAL_LINKS.email}`}
            className={cn(
              "text-brown-muted hover:text-terracotta",
              "transition-colors duration-200"
            )}
          >
            Email
          </a>
          <span className="text-brown-light">·</span>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "text-brown-muted hover:text-terracotta",
              "transition-colors duration-200"
            )}
          >
            LinkedIn
          </a>
          <span className="text-brown-light">·</span>
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "text-brown-muted hover:text-terracotta",
              "transition-colors duration-200"
            )}
          >
            GitHub
          </a>
          <span className="text-brown-light">·</span>
          <a
            href={SOCIAL_LINKS.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "text-brown-muted hover:text-terracotta",
              "transition-colors duration-200"
            )}
          >
            Twitter
          </a>
        </div>
      </motion.div>
    </section>
  );
};
