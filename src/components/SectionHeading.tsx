import { motion, useReducedMotion } from "framer-motion";
import { fadeUpTransition, motionViewport } from "@/lib/motion";

interface Props {
  title: string;
  subtitle: string;
}

const SectionHeading = ({ title, subtitle }: Props) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={motionViewport}
      transition={shouldReduceMotion ? { duration: 0 } : fadeUpTransition}
      className="text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
      <p className="text-muted-foreground mt-2 text-base md:text-lg">{subtitle}</p>
      <div className="w-12 h-1 gradient-bg rounded-full mx-auto mt-4" />
    </motion.div>
  );
};

export default SectionHeading;
