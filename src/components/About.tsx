"use client";

import { motion } from "framer-motion";
import { aboutMe, aboutSection, education } from "@/data/portfolio";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";

// ─── Pill ─────────────────────────────────────────────────────────────────────
function TechPill({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/[0.07] bg-white/[0.03] whitespace-nowrap select-none">
      <img
        src={icon}
        alt={name}
        width={18}
        height={18}
        className="w-[18px] h-[18px] object-contain opacity-85"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
      <span className="text-sm font-medium text-foreground/70">{name}</span>
    </div>
  );
}

// ─── Infinite Marquee ─────────────────────────────────────────────────────────
function InfiniteMarquee() {
  const items = Array.from({ length: aboutSection.marqueeCopies }).flatMap(() => aboutSection.techPills);

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-2 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: aboutSection.marqueeDuration,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {items.map((tech, i) => (
          <TechPill key={`${tech.name}-${i}`} {...tech} />
        ))}
      </motion.div>
    </div>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────
const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={aboutSection.title} subtitle={aboutSection.subtitle} />

        <div className="grid md:grid-cols-5 gap-8 mt-8 md:mt-10">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-3 space-y-6"
          >
            <p className="text-base text-muted-foreground leading-relaxed">{aboutMe.summary}</p>
            <p className="text-base text-muted-foreground leading-relaxed">{aboutMe.differentiators}</p>

            <div className="flex flex-wrap gap-2 pt-2">
              {aboutMe.strengths.map((s) => (
                <span
                  key={s}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary"
                >
                  <Sparkles size={12} />
                  {s}
                </span>
              ))}
            </div>

            {/* Marquee — no label, just a thin rule then the strip */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="pt-1 space-y-3"
            >
              <div className="h-px bg-gradient-to-r from-white/5 via-white/[0.08] to-transparent" />
              <InfiniteMarquee />
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
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <GraduationCap size={16} />
              {aboutSection.educationHeading}
            </h3>
            {education.map((edu) => (
              <Card key={edu.degree} className="bg-card/50">
                <CardContent className="p-4">
                  <p className="font-semibold text-sm text-foreground">{edu.degree}</p>
                  <p className="text-xs text-muted-foreground">{edu.school}</p>
                  <p className="text-xs text-primary font-mono mt-1">{edu.year}</p>
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
