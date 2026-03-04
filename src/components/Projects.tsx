import { useState, type FocusEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { projects, type Project } from "@/data/portfolio";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Sparkles, TrendingUp } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { motionEase, motionViewport } from "@/lib/motion";

const Projects = () => {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="relative overflow-hidden py-24 md:py-32 lg:py-40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_65%_at_50%_0%,hsl(var(--primary)/0.08),transparent_72%)]" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Projects"
          subtitle=""
        />

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-4 md:mt-20 md:grid-cols-2 md:gap-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={index}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  project,
  index,
  hoveredIndex,
  setHoveredIndex,
  shouldReduceMotion,
}: {
  project: Project;
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
  shouldReduceMotion: boolean;
}) => {
  const isEven = index % 2 === 0;
  const isActive = hoveredIndex === index;
  const isDimmed = hoveredIndex !== null && hoveredIndex !== index;
  const handleBlurCapture = (event: FocusEvent<HTMLElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setHoveredIndex(null);
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20, x: shouldReduceMotion ? 0 : isEven ? -24 : 24 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={motionViewport}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.62, ease: motionEase }}
      animate={
        shouldReduceMotion
          ? undefined
          : {
              opacity: isDimmed ? 0.26 : 1,
              scale: isActive ? 1.03 : 1,
              y: isActive ? -8 : 0,
              filter: isDimmed ? "brightness(0.46) saturate(0.6)" : "brightness(1) saturate(1)",
            }
      }
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      onFocusCapture={() => setHoveredIndex(index)}
      onBlurCapture={handleBlurCapture}
      className="relative origin-center"
    >
      <Card className="group relative h-full overflow-hidden border-border/60 bg-card/85 shadow-[0_24px_60px_-30px_hsl(var(--foreground)/0.5)] backdrop-blur-xl transition-all duration-300 hover:border-primary/35">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(130deg,hsl(var(--foreground)/0.08),hsl(var(--foreground)/0.02)_45%,transparent)]" />
        <div
          style={{
            backgroundImage: isEven
              ? "radial-gradient(circle at 0% 0%, hsl(var(--primary)/0.25), transparent 45%)"
              : "radial-gradient(circle at 100% 0%, hsl(var(--primary)/0.25), transparent 45%)",
          }}
          className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ${
            isActive ? "opacity-100" : "group-hover:opacity-100"
          }`}
        />

        <CardContent className="relative flex h-full flex-col p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
              <Sparkles className="h-3 w-3" />
              Case Study
            </div>

            <div className="flex flex-wrap items-center justify-end gap-2">
              {project.techStack.slice(0, 2).map((stack) => (
                <span
                  key={stack}
                  className="inline-flex items-center rounded-lg border border-border/70 bg-background/50 px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                >
                  {stack}
                </span>
              ))}
            </div>
          </div>

          <h3 className="mt-6 max-w-[16ch] text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
            {project.name}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <div className="mt-7 rounded-2xl border border-border/55 bg-background/35 p-4">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-primary/90">Project Impact</p>
            <ul className="space-y-2.5">
              {project.achievements.slice(0, 2).map((achievement) => (
                <li key={achievement} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <TrendingUp className="h-3 w-3 text-primary" />
                  </span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 border-t border-border/45 pt-5">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-primary/90">Engineered With</p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="border border-border/60 bg-secondary/55 px-3 py-1 text-xs font-medium text-foreground"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="mt-auto flex items-center justify-end gap-2.5 pt-7">
            {project.github && (
              <motion.a
                whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.06 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-background/65 text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                aria-label={`${project.name} GitHub repository`}
              >
                <Github className="h-5 w-5" />
              </motion.a>
            )}
            {project.live && (
              <motion.a
                whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.06 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-background/65 text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                aria-label={`${project.name} live demo`}
              >
                <ExternalLink className="h-5 w-5" />
              </motion.a>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.article>
  );
};

export default Projects;
