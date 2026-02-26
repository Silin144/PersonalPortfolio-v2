"use client";

import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

interface Experience {
  company: string;
  role: string;
  period: string;
  oneLiner: string;
}

const EXPERIENCES: Experience[] = [
  {
    company: "Policy Advisor",
    role: "Software Engineer Intern",
    period: "2024",
    oneLiner: "Built lead generation tools that increased qualified leads by 40%",
  },
  {
    company: "Startup Project",
    role: "Founder",
    period: "2024",
    oneLiner: "Shipped an AI voice analyzer to 1,200+ users",
  },
  {
    company: "University of Waterloo",
    role: "CS Student",
    period: "2023–",
    oneLiner: "Learning to build things that matter",
  },
];

export const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
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
        className="mb-8"
      >
        <h2
          className={cn(
            "text-3xl md:text-4xl font-heading italic",
            "text-deep-brown",
            "mb-2"
          )}
        >
          Experience
        </h2>
      </motion.div>

      <div className="space-y-6">
        {EXPERIENCES.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={cn(
              "flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4",
              "pb-6 border-b border-brown-light/10 last:border-b-0"
            )}
          >
            {/* Company & Period */}
            <div className="flex items-baseline gap-2 sm:w-48 shrink-0">
              <span className="text-sm font-medium text-deep-brown">
                {exp.company}
              </span>
              <span className="text-xs text-brown-light">{exp.period}</span>
            </div>

            {/* One-liner */}
            <p className="text-sm text-brown-muted">{exp.oneLiner}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

