"use client";

import { motion } from "framer-motion";
import { aboutMe, aboutSection, education } from "@/data/portfolio";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useIsMobile } from "@/hooks/use-mobile";

// ─── Tech Pill ────────────────────────────────────────────────────────────────
function TechPill({
  name,
  icon,
  isMobile,
}: {
  name: string;
  icon: string;
  isMobile: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-2 rounded-full border border-border/60 bg-card/40 whitespace-nowrap select-none
      ${isMobile ? "px-3 py-1.5 text-sm" : "px-4 py-2 text-base"}`}
    >
      <img
        src={icon}
        alt={name}
        width={isMobile ? 14 : 18}
        height={isMobile ? 14 : 18}
        className="object-contain opacity-85"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />

      <span className="font-medium text-foreground/70">{name}</span>
    </div>
  );
}

// ─── Infinite Marquee ─────────────────────────────────────────────────────────
function InfiniteMarquee({ isMobile }: { isMobile: boolean }) {
  const items = Array.from({ length: aboutSection.marqueeCopies }).flatMap(
    () => aboutSection.techPills
  );

  return (
    <div className="relative overflow-hidden">
      {/* fade edges */}
      <div className="absolute inset-y-0 left-0 w-6 md:w-10 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-6 md:w-10 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-2 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: isMobile
            ? aboutSection.marqueeDuration * 1.5
            : aboutSection.marqueeDuration,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {items.map((tech, i) => (
          <TechPill key={`${tech.name}-${i}`} {...tech} isMobile={isMobile} />
        ))}
      </motion.div>
    </div>
  );
}

// ─── About Section ────────────────────────────────────────────────────────────
const About = () => {
  const isMobile = useIsMobile();

  return (
    <section id="about" className="section-padding">
      <div className="mx-auto w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <SectionHeading
          title={aboutSection.title}
          subtitle={aboutSection.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 mt-8 md:mt-10">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-3 space-y-6"
          >
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {aboutMe.summary}
            </p>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {aboutMe.differentiators}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {aboutMe.strengths.map((s) => (
                <span
                  key={s}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-full bg-primary/10 text-primary"
                >
                  <Sparkles size={12} />
                  {s}
                </span>
              ))}
            </div>

            {/* Marquee */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="pt-1 space-y-3"
            >
              <div className="h-px bg-gradient-to-r from-border/35 via-border/55 to-transparent" />

              <InfiniteMarquee isMobile={isMobile} />
            </motion.div>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 space-y-4"
          >
            <h3 className="text-base font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <GraduationCap size={16} />
              {aboutSection.educationHeading}
            </h3>

            {education.map((edu) => (
              <Card key={edu.degree} className="bg-card/50">
                <CardContent className="p-4">
                  <p className="font-semibold text-base text-foreground">
                    {edu.degree}
                  </p>

                  <p className="text-sm text-muted-foreground">
                    {edu.school}
                  </p>

                  <p className="text-sm text-primary font-mono mt-1">
                    {edu.year}
                  </p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
