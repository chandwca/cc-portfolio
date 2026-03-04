import type { Transition, Variants } from "framer-motion";

export const motionEase = [0.22, 1, 0.36, 1] as const;

export const motionViewport = {
  once: true,
  amount: 0.22,
} as const;

export const fadeUpTransition: Transition = {
  duration: 0.55,
  ease: motionEase,
};

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: fadeUpTransition },
};
