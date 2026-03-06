import { motion, useReducedMotion } from "framer-motion";
import { projects, type Project } from "@/data/portfolio";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Sparkles, TrendingUp } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { motionEase, motionViewport } from "@/lib/motion";

const Projects = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="projects" className="relative overflow-hidden py-20 md:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_65%_at_50%_0%,hsl(var(--primary)/0.08),transparent_72%)]" />
      </div>

      <div className="mx-auto w-full max-w-[1700px] px-4 sm:px-8 lg:px-12 xl:px-16">
        <SectionHeading title="Projects" subtitle="Selected case studies with measurable outcomes" />

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2 xl:gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={index}
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
  shouldReduceMotion,
}: {
  project: Project;
  index: number;
  shouldReduceMotion: boolean;
}) => {
  const isEven = index % 2 === 0;
  const impactItems = project.achievements;
  const stackItems = project.techStack;

  return (
    <motion.article
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20, x: shouldReduceMotion ? 0 : isEven ? -24 : 24 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={motionViewport}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.62, ease: motionEase }}
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      className="relative"
    >
      <Card
        className="group relative h-full overflow-hidden border-border/60 bg-card/90 shadow-[0_18px_55px_-35px_hsl(var(--foreground)/0.55)] backdrop-blur-xl transition-all duration-300 hover:border-primary/35"
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(130deg,hsl(var(--foreground)/0.06),hsl(var(--foreground)/0.02)_45%,transparent)]" />
        <div
          style={{
            backgroundImage: isEven
              ? "radial-gradient(circle at 0% 0%, hsl(var(--primary)/0.25), transparent 45%)"
              : "radial-gradient(circle at 100% 0%, hsl(var(--primary)/0.25), transparent 45%)",
          }}
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        <CardContent className="relative flex h-full flex-col p-5 sm:p-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {project.github ? (
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
              ) : null}
              {project.live ? (
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
              ) : null}
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-2xl font-bold leading-tight tracking-tight text-foreground md:text-[1.9rem]">
              {project.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {stackItems.map((stack) => (
                <Badge
                  key={stack}
                  variant="secondary"
                  className="border border-border/60 bg-secondary/55 px-2.5 py-0.5 text-xs font-medium text-foreground"
                >
                  {stack}
                </Badge>
              ))}
            </div>
          </div>

          <div className="mt-5 rounded-xl border border-border/55 bg-background/35 p-3.5 sm:p-4">
            <p className="mb-2.5 text-xs font-bold uppercase tracking-[0.16em] text-primary/90">Impact Highlights</p>
            <ul className="space-y-2">
              {impactItems.map((achievement) => (
                <li key={achievement} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <TrendingUp className="h-2.5 w-2.5 text-primary" />
                  </span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </motion.article>
  );
};

export default Projects;
