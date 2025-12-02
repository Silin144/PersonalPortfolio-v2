"use client";

import { cn } from "@/utils/cn";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import {
  SOCIAL_LINKS,
  EXPERIENCE,
  PROJECTS,
  SKILLS,
  PERSONAL_INFO,
} from "@/constants/projects";
import LogoLoop from "./LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPython,
  SiOpenai,
  SiDocker,
  SiVercel,
  SiGithub,
} from "react-icons/si";
import { FiExternalLink, FiSun, FiMoon } from "react-icons/fi";
import Spline from "@splinetool/react-spline";
import { useTheme } from "@/context/ThemeContext";

const Keyword = ({ children }: { children: React.ReactNode }) => (
  <span className="keyword">{children}</span>
);

const GlowLink = ({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={cn(
      "glow-underline hover:text-accent transition-colors",
      className
    )}
  >
    {children}
  </a>
);

// Image Gallery Component - shows all images in a row
const ImageGallery = ({
  images,
  title,
}: {
  images: string[];
  title: string;
}) => {
  return (
    <div className="relative">
      <div className="flex gap-3 justify-center items-end overflow-x-auto pb-2">
        {images.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            className="flex-shrink-0"
          >
            <img
              src={src}
              alt={`${title} - ${i + 1}`}
              className="h-[350px] w-auto rounded-xl border border-border/50 shadow-lg object-contain bg-bg-secondary"
            />
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-3 text-[10px] text-text-tertiary">
        {images.length} screenshots
      </div>
    </div>
  );
};

// Media Modal
const MediaModal = ({
  isOpen,
  onClose,
  project,
}: {
  isOpen: boolean;
  onClose: () => void;
  project: (typeof PROJECTS)[0];
}) => {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-bg-primary/95 backdrop-blur-md"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "relative w-full",
              project.images ? "max-w-6xl" : "max-w-3xl"
            )}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-medium text-text-primary">
                  {project.title}
                </h3>
                {project.badge && (
                  <span className="px-2 py-0.5 text-[9px] uppercase tracking-wider bg-accent/20 text-accent rounded">
                    {project.badge}
                  </span>
                )}
              </div>
              <div
                onClick={onClose}
                className="text-text-tertiary hover:text-text-primary transition-colors text-xl cursor-pointer p-2"
              >
                ✕
              </div>
            </div>
            {project.images ? (
              <ImageGallery images={project.images} title={project.title} />
            ) : project.gifSrc ? (
              <div className="rounded-xl overflow-hidden border border-border bg-bg-secondary">
                <img
                  src={project.gifSrc}
                  alt={project.title}
                  className="w-full h-auto"
                />
              </div>
            ) : null}
            <div className="flex items-center justify-between mt-4">
              <p className="text-sm text-text-secondary flex-1">{project.description}</p>
              <div className="flex items-center gap-3 ml-4">
                {(project as { github?: string }).github && (
                  <a
                    href={(project as { github?: string }).github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-text-primary transition-colors"
                    title="View source code"
                  >
                    <SiGithub className="w-4 h-4" />
                    <span className="hidden sm:inline">Source</span>
                  </a>
                )}
                {(project as { liveUrl?: string }).liveUrl && (
                  <a
                    href={(project as { liveUrl?: string }).liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-accent hover:text-accent/80 transition-colors"
                    title="View live demo"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    <span className="hidden sm:inline">Live</span>
                  </a>
                )}
                {!(project as { github?: string }).github && !(project as { liveUrl?: string }).liveUrl && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent hover:underline whitespace-nowrap"
                  >
                    View ↗
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// 3D Robot - pops out top/left/right, only bottom clipped
const SplineRobot = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Suppress Spline internal "Missing property" warnings
  useEffect(() => {
    const originalError = console.error;
    console.error = (...args) => {
      if (args[0]?.includes?.('Missing property') || String(args[0]).includes('Missing property')) {
        return; // Suppress Spline internal error
      }
      originalError.apply(console, args);
    };
    return () => {
      console.error = originalError;
    };
  }, []);
  
  return (
    <div 
      className="relative w-full h-full spline-container"
      style={{
        clipPath: 'polygon(-50% -50%, 150% -50%, 150% 100%, -50% 100%)', // Clip only at bottom edge of bento
      }}
    >
      {/* Loading spinner */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <motion.div
            className="w-4 h-4 border-2 border-accent border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>
      )}
      {/* Robot - shifted right to appear centered, pops out all sides except bottom */}
      <div 
        className="absolute z-20 pointer-events-auto"
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease',
          width: '250px',
          height: '250px',
          top: '50%',
          left: '50%',
          transform: 'translate(-40%, -50%)', // Shift right to center visually
        }}
      >
        <Spline
          scene="https://prod.spline.design/Yn0GomP2u22xKieZ/scene.splinecode"
          onLoad={() => setIsLoaded(true)}
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </div>
    </div>
  );
};

// Bento Card
const BentoCard = ({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay }}
    className={className}
    whileHover={{ scale: 1.02, zIndex: 10 }}
  >
    <div className="bento-card h-full">
      {children}
    </div>
  </motion.div>
);

// Project Card with 3D tilt effect
const ProjectCard = ({
  project,
  className,
  delay = 0,
}: {
  project: (typeof PROJECTS)[0];
  className?: string;
  delay?: number;
}) => {
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const hasMedia = project.images || project.gifSrc;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = (y - centerY) / 8;
    const tiltY = (centerX - x) / 8;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleClick = () => {
    if (hasMedia) {
      setShowModal(true);
    } else {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2500);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay }}
        className={cn("relative perspective-1000", className)}
      >
        <motion.div
          ref={cardRef}
          className={cn(
            "bento-card group cursor-pointer flex flex-col relative overflow-hidden cursor-target",
            "transition-shadow duration-300",
            hasMedia && isHovered && "shadow-[0_0_30px_rgba(249,115,22,0.15)]"
          )}
          style={{
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transformStyle: "preserve-3d",
            transition: "transform 0.1s ease-out",
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        >
          {/* Spotlight gradient that follows cursor */}
          {hasMedia && isHovered && (
            <div
              className="pointer-events-none absolute inset-0 z-0 opacity-40 transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle at ${50 + tilt.y * 3}% ${50 - tilt.x * 3}%, rgba(249,115,22,0.15) 0%, transparent 50%)`,
              }}
            />
          )}

          {/* Content */}
          <div className="relative z-10">
            {/* Title + Link */}
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-sm font-medium text-text-primary group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                {project.badge && (
                  <span className="inline-block mt-1 px-2 py-0.5 text-[8px] uppercase tracking-wider bg-accent/20 text-accent rounded">
                    {project.badge}
                  </span>
                )}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-text-tertiary hover:text-accent transition-colors text-xs"
              >
                ↗
              </a>
            </div>
            
            {/* Description */}
            <p className="text-[11px] text-text-tertiary mt-2 leading-relaxed">
              {project.description}
            </p>
            
            {/* Tech stack */}
            <div className="mt-3 flex flex-wrap gap-1">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-[8px] font-mono text-text-tertiary bg-bg-tertiary px-1 py-0.5 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
            
            {/* Preview indicator - only for cards with media */}
            {hasMedia && (
              <div className="mt-2 flex justify-end items-center gap-1.5">
                <motion.div
                  className="flex items-center gap-1"
                  initial={false}
                  animate={{ 
                    opacity: isHovered ? 1 : 0.5,
                    x: isHovered ? 0 : 5 
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-[9px] text-text-tertiary group-hover:text-accent transition-colors">
                    {project.images ? "view gallery" : "play demo"}
                  </span>
                  <motion.span
                    className="text-accent"
                    animate={{ x: isHovered ? [0, 3, 0] : 0 }}
                    transition={{ duration: 0.6, repeat: isHovered ? Infinity : 0 }}
                  >
                    →
                  </motion.span>
                </motion.div>
              </div>
            )}

            {/* Internal tool indicator */}
            {!hasMedia && (
              <div className="mt-2 flex justify-end">
                <span className="text-[9px] text-text-tertiary/50">
                  internal tool
                </span>
              </div>
            )}
          </div>
        </motion.div>

        {/* Toast message for internal tools */}
        <AnimatePresence>
          {showToast && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="fixed bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap z-[100]"
            >
              <span className="px-4 py-2.5 text-xs bg-bg-secondary/95 backdrop-blur-sm border border-accent/20 rounded-lg text-text-secondary shadow-xl">
                🔒 Internal company tool — demo not available
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <MediaModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        project={project}
      />
    </>
  );
};

export const BentoGrid = () => {
  // GitHub username for contribution graph
  const githubUsername = "Silin144";
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="max-w-6xl mx-auto space-y-4">
      {/* ========== HERO SECTION ========== */}
      <section className="grid grid-cols-12 gap-3">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="col-span-12 md:col-span-6"
          whileHover={{ scale: 1.01 }}
        >
          <div className="bento-card py-8 h-full">
            <h1 className="text-3xl md:text-4xl font-serif italic text-text-primary leading-none">
              {PERSONAL_INFO.name}
            </h1>
            <p className="mt-3 text-base text-text-primary flex items-center gap-2 flex-wrap">
              <span className="text-text-secondary">{PERSONAL_INFO.title}</span>
              <span className="text-text-tertiary">·</span>
              <span className="font-bold">CS</span>
              <span className="text-text-tertiary">@</span>
              <span className="font-medium">UWaterloo</span>
              <img
                src="/images/uwaterloo-logo.png"
                alt="University of Waterloo"
                className="w-5 h-5 object-contain"
              />
            </p>
          </div>
        </motion.div>

        <BentoCard className="col-span-7 md:col-span-4" delay={0.1}>
          <div className="flex flex-col justify-center h-full">
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
              <GlowLink href={SOCIAL_LINKS.github}>github</GlowLink>
              <GlowLink href={SOCIAL_LINKS.linkedin}>linkedin</GlowLink>
              <GlowLink href={`mailto:${SOCIAL_LINKS.email}`}>email</GlowLink>
              <GlowLink href={SOCIAL_LINKS.resume}>resume ↓</GlowLink>
            </div>
          </div>
        </BentoCard>

        {/* Robot bento - pops out everywhere, only bottom of robot container clipped */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="col-span-5 md:col-span-2"
          whileHover={{ scale: 1.02, zIndex: 10 }}
        >
          <div className="bento-card h-full !overflow-visible !p-0">
            <SplineRobot />
          </div>
        </motion.div>
      </section>

      {/* ========== MAIN CONTENT: Experience (Left) | Projects (Right) ========== */}
      <section className="grid grid-cols-12 gap-3">
        {/* LEFT COLUMN - Experience */}
        <div className="col-span-12 md:col-span-5 space-y-3">
          <h2 className="text-[10px] uppercase tracking-wider text-text-tertiary px-1">
            Experience
          </h2>
          <div className="space-y-3">
            {EXPERIENCE.map((exp, i) => (
              <BentoCard key={exp.company} delay={0.1 + i * 0.05}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-sm text-text-primary font-bold">{exp.role}</span>
                    <span className="text-text-tertiary text-sm">@</span>
                    <span className="text-sm text-text-primary">
                      {exp.link ? (
                        <GlowLink href={exp.link}>{exp.company}</GlowLink>
                      ) : (
                        exp.company
                      )}
                    </span>
                    {exp.logo && (
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-[18px] h-[18px] object-contain"
                      />
                    )}
                  </div>
                  <span className="text-[10px] text-text-tertiary whitespace-nowrap ml-2">
                    {exp.period}
                  </span>
                </div>
                {exp.oneLiner && (
                  <p className="text-[10px] text-text-tertiary mt-1.5 leading-relaxed">
                    {exp.oneLiner}
                  </p>
                )}
              </BentoCard>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN - Projects (Same Size Grid) */}
        <div className="col-span-12 md:col-span-7">
          <h2 className="text-[10px] uppercase tracking-wider text-text-tertiary mb-3 px-1">
            Projects
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {PROJECTS.map((project, i) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                delay={0.15 + i * 0.05}
                className={i % 2 === 1 ? "md:mt-6" : ""}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========== BOTTOM SECTION (Staggered, Same Height) ========== */}
      <section className="grid grid-cols-12 gap-3 md:grid-rows-[auto_1fr]">
        {/* Terminal-style output */}
        <div className="col-span-6 md:col-span-2 md:row-span-2">
          <BentoCard className="h-full" delay={0.4}>
            <div className="h-full flex flex-col font-mono text-[10px]">
              <div className="flex items-center gap-1.5 mb-2">
                <span className="w-2 h-2 rounded-full bg-red-500/80" />
                <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                <span className="w-2 h-2 rounded-full bg-green-500/80" />
                <span className="text-text-tertiary ml-2 text-[8px]">output</span>
              </div>
              <div className="space-y-1.5 flex-1">
                <p className="text-text-tertiary text-[9px]">
                  <span className="text-green-400">✓</span> shipped
                </p>
                <p className="text-accent pl-2">
                  ai agents
                </p>
                <p className="text-text-secondary pl-2">
                  saas products
                </p>
                <p className="text-text-secondary pl-2">
                  dev tools
                </p>
                <div className="mt-2 pt-2 border-t border-border/50">
                  <p className="text-text-tertiary text-[8px] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    ready for next build
                  </p>
                </div>
              </div>
            </div>
          </BentoCard>
        </div>

        {/* Stack - offset */}
        <div className="col-span-6 md:col-span-2 md:row-start-2">
          <BentoCard className="h-full" delay={0.45}>
            <div className="h-full flex flex-col">
              <span className="text-sm uppercase tracking-wider text-text-tertiary mb-2">
                Stack
              </span>
              <div className="flex-1 flex items-center overflow-hidden">
                <LogoLoop
                  logos={[
                    { node: <SiReact className="text-text-secondary" />, title: "React" },
                    { node: <SiNextdotjs className="text-text-secondary" />, title: "Next.js" },
                    { node: <SiTypescript className="text-text-secondary" />, title: "TypeScript" },
                    { node: <SiPython className="text-text-secondary" />, title: "Python" },
                    { node: <SiTailwindcss className="text-text-secondary" />, title: "Tailwind" },
                    { node: <SiOpenai className="text-text-secondary" />, title: "OpenAI" },
                    { node: <SiDocker className="text-text-secondary" />, title: "Docker" },
                    { node: <SiVercel className="text-text-secondary" />, title: "Vercel" },
                  ]}
                  speed={25}
                  direction="left"
                  logoHeight={28}
                  gap={24}
                  hoverSpeed={0}
                  fadeOut
                  fadeOutColor={theme === "dark" ? "#0f0f11" : "#f4f4f5"}
                />
              </div>
            </div>
          </BentoCard>
        </div>

        {/* GitHub - compact */}
        <div className="col-span-12 md:col-span-6 md:row-span-2">
          <BentoCard className="h-full" delay={0.5}>
            <div className="h-full flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase tracking-wider text-text-tertiary">
                  GitHub
                </span>
                <GlowLink href={`https://github.com/${githubUsername}`} className="text-xs">
                  @{githubUsername} ↗
                </GlowLink>
              </div>
              <div className="w-full overflow-hidden rounded flex-1 flex items-center">
                <img
                  src={`https://ghchart.rshah.org/f97316/${githubUsername}`}
                  alt="GitHub Contribution Graph"
                  className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </BentoCard>
        </div>

        {/* CS Webring + Theme Toggle */}
        <div className="col-span-12 md:col-span-2 md:row-start-2">
          <BentoCard className="h-full" delay={0.55}>
            <div className="h-full flex flex-col items-center justify-center gap-3">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-bg-tertiary hover:bg-accent/20 transition-colors group"
                aria-label="Toggle theme"
              >
                <FiSun className={cn(
                  "w-3.5 h-3.5 transition-colors",
                  theme === "light" ? "text-accent" : "text-text-tertiary"
                )} />
                <div className="relative w-8 h-4 rounded-full bg-bg-primary">
                  <motion.div
                    className="absolute top-0.5 w-3 h-3 rounded-full bg-accent"
                    animate={{ left: theme === "dark" ? "2px" : "18px" }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                </div>
                <FiMoon className={cn(
                  "w-3.5 h-3.5 transition-colors",
                  theme === "dark" ? "text-accent" : "text-text-tertiary"
                )} />
              </button>

              {/* CS Webring */}
              <div className="flex items-center gap-3">
                <a 
                  href="https://cs.uwatering.com/#silin.ca?nav=prev"
                  className="text-text-tertiary hover:text-accent transition-colors text-sm"
                >
                  ←
                </a>
                <a 
                  href="https://cs.uwatering.com/#silin.ca" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-100 opacity-80 transition-opacity"
                >
                  <img
                    src="https://cs.uwatering.com/icon.black.svg"
                    alt="CS Webring"
                    className="w-5 h-auto"
                    style={{ filter: theme === "dark" ? "invert(1)" : "invert(0)" }}
                  />
                </a>
                <a 
                  href="https://cs.uwatering.com/#silin.ca?nav=next"
                  className="text-text-tertiary hover:text-accent transition-colors text-sm"
                >
                  →
                </a>
              </div>
            </div>
          </BentoCard>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.65 }}
        className="flex items-center justify-between text-sm text-text-tertiary px-1 pt-2"
      >
        <span>© 2025 Silin Raj Gupta</span>
        <div className="flex items-center gap-3">
          <GlowLink href={SOCIAL_LINKS.resume} className="text-sm">
            resume.pdf
          </GlowLink>
          <span>·</span>
          <span>Built with Next.js</span>
        </div>
      </motion.footer>
    </div>
  );
};
