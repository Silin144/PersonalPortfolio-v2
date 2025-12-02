"use client";

import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "@/constants/projects";

const GlowLink = ({
  href,
  children,
  external = true,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) => (
  <a
    href={href}
    target={external ? "_blank" : undefined}
    rel={external ? "noopener noreferrer" : undefined}
    className="glow-underline text-text-primary hover:text-accent transition-colors"
  >
    {children}
  </a>
);

const Keyword = ({ children }: { children: React.ReactNode }) => (
  <span className="keyword">{children}</span>
);

const BulletItem = ({
  children,
  indent = false,
}: {
  children: React.ReactNode;
  indent?: boolean;
}) => (
  <div className={cn("flex items-start gap-3", indent && "ml-6")}>
    <span className="text-text-tertiary mt-0.5">{indent ? "↳" : "◆"}</span>
    <span className="text-text-secondary">{children}</span>
  </div>
);

export const MainContent: React.FC = () => {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        {/* Current */}
        <div className="space-y-3">
          <BulletItem>
            Engineering @{" "}
            <GlowLink href="https://policyadvisor.com">Policy Advisor</GlowLink>
          </BulletItem>
          <BulletItem>
            CS @{" "}
            <GlowLink href="https://uwaterloo.ca">UWaterloo</GlowLink>
          </BulletItem>
        </div>

        {/* What I've built */}
        <div className="space-y-3">
          <BulletItem>
            <Keyword>what i&apos;ve been building:</Keyword>
          </BulletItem>
          <BulletItem indent>
            created <GlowLink href="#">SpeakSummarize</GlowLink> — an{" "}
            <Keyword>AI voice analyzer</Keyword> with 1,200+ users
          </BulletItem>
          <BulletItem indent>
            shipped a <Keyword>lead generation platform</Keyword> that increased
            qualified leads by 40%
          </BulletItem>
          <BulletItem indent>
            built an <Keyword>AI agent system</Keyword> for automating business
            workflows
          </BulletItem>
          <BulletItem indent>
            exploring <Keyword>LLM applications</Keyword> and{" "}
            <Keyword>full-stack development</Keyword>
          </BulletItem>
        </div>

        {/* Previously */}
        <div className="space-y-3">
          <BulletItem>
            <Keyword>previously:</Keyword>
          </BulletItem>
          <BulletItem indent>
            Research @{" "}
            <GlowLink href="https://uwaterloo.ca">UWaterloo</GlowLink> — worked
            on ML systems
          </BulletItem>
          <BulletItem indent>
            Built side projects in <Keyword>React</Keyword>,{" "}
            <Keyword>Python</Keyword>, <Keyword>TypeScript</Keyword>
          </BulletItem>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="pt-6"
        >
          <a
            href="#projects"
            className={cn(
              "inline-flex items-center gap-2",
              "px-5 py-2.5 rounded-full",
              "border border-border",
              "text-sm text-text-secondary",
              "hover:border-text-tertiary hover:text-text-primary",
              "transition-all duration-300"
            )}
          >
            see what i&apos;ve built
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </motion.div>

        {/* Projects Section */}
        <section id="projects" className="pt-12 space-y-4">
          <h2 className="text-sm text-text-tertiary uppercase tracking-wider">
            Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <ProjectCard
              title="SpeakSummarize"
              description="AI voice conversation analyzer"
              tech={["Next.js", "Python", "LangChain"]}
              href="#"
            />
            <ProjectCard
              title="Lead Gen Platform"
              description="B2B automation for insurance"
              tech={["Next.js", "PostgreSQL", "Node"]}
              href="#"
            />
            <ProjectCard
              title="AI Agent System"
              description="Multi-agent workflow automation"
              tech={["Python", "LangGraph", "FastAPI"]}
              href="#"
            />
            <ProjectCard
              title="Analytics Dashboard"
              description="Real-time business metrics"
              tech={["React", "TypeScript", "D3.js"]}
              href="#"
            />
          </div>
        </section>

        {/* Contact */}
        <section className="pt-12 space-y-4">
          <h2 className="text-sm text-text-tertiary uppercase tracking-wider">
            Get in touch
          </h2>
          <div className="flex flex-wrap gap-4 text-sm">
            <GlowLink href={`mailto:${SOCIAL_LINKS.email}`}>email</GlowLink>
            <GlowLink href={SOCIAL_LINKS.linkedin}>linkedin</GlowLink>
            <GlowLink href={SOCIAL_LINKS.github}>github</GlowLink>
            <GlowLink href={SOCIAL_LINKS.twitter}>twitter</GlowLink>
          </div>
        </section>
      </motion.div>
    </main>
  );
};

const ProjectCard = ({
  title,
  description,
  tech,
  href,
}: {
  title: string;
  description: string;
  tech: string[];
  href: string;
}) => (
  <a
    href={href}
    className={cn(
      "group block p-4",
      "border border-border rounded-lg",
      "hover:border-text-tertiary hover:bg-bg-secondary/50",
      "transition-all duration-300"
    )}
  >
    <h3 className="text-text-primary font-medium group-hover:text-accent transition-colors">
      {title}
    </h3>
    <p className="text-sm text-text-tertiary mt-1">{description}</p>
    <div className="flex gap-2 mt-3 text-xs text-text-tertiary font-mono">
      {tech.map((t, i) => (
        <span key={t}>
          {t}
          {i < tech.length - 1 && <span className="ml-2">·</span>}
        </span>
      ))}
    </div>
  </a>
);

