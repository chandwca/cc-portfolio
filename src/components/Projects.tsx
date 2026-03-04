import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { projects, type Project } from "@/data/portfolio";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, TrendingUp } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useIsMobile } from "@/hooks/use-mobile";

const Projects = () => {
  const isMobile = useIsMobile();
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  if (isMobile) {
    return (
      <section id="projects" className="section-padding bg-background">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading title="Projects" subtitle="Production applications I've built and shipped" />

          <div className="mt-8 space-y-4 md:mt-10">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} mobile />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={targetRef} id="projects" className="relative h-[220vh] md:h-[240vh] bg-background">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8 md:mb-10">
            <SectionHeading
              title="Projects"
              subtitle="Production applications I've built and shipped (Scroll down to explore)"
            />
          </div>

          <motion.div style={{ x }} className="flex gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, mobile = false }: { project: Project; mobile?: boolean }) => {
  return (
    <div className={`group relative shrink-0 ${mobile ? "w-full" : "h-[450px] w-[350px] md:w-[450px]"}`}>
      <Card className={`border-primary/10 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 ${mobile ? "" : "h-full"}`}>
        <CardContent className={`flex flex-col ${mobile ? "p-5 sm:p-6" : "h-full p-8"}`}>
          <div className="mb-4 flex items-start justify-between gap-3">
            <h3 className={`${mobile ? "text-xl sm:text-2xl" : "text-2xl"} font-bold text-foreground transition-colors group-hover:text-primary`}>
              {project.name}
            </h3>
            <div className="flex gap-3">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                  <Github size={mobile ? 18 : 20} />
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                  <ExternalLink size={mobile ? 18 : 20} />
                </a>
              )}
            </div>
          </div>

          <p className={`${mobile ? "mb-5 text-sm" : "mb-6"} text-muted-foreground leading-relaxed`}>
            {project.description}
          </p>

          <div className={`${mobile ? "mb-5" : "mb-6"} flex flex-wrap gap-2`}>
            {project.techStack.map((t: string) => (
              <Badge key={t} variant="secondary" className="px-2 py-0.5 font-mono text-xs">
                {t}
              </Badge>
            ))}
          </div>

          <div className="mt-auto space-y-3">
            {project.achievements.map((a: string, i: number) => (
              <div key={i} className={`${mobile ? "text-xs sm:text-sm" : "text-sm"} flex items-start gap-3 text-muted-foreground`}>
                <TrendingUp size={mobile ? 14 : 16} className="mt-0.5 shrink-0 text-primary" />
                <span>{a}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Projects;
