import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface AnimateInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
}

export default function AnimateIn({ children, delay = 0, className, direction = "up" }: AnimateInProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const initial =
    direction === "up" ? { opacity: 0, y: 32 }
    : direction === "left" ? { opacity: 0, x: -48 }
    : direction === "right" ? { opacity: 0, x: 48 }
    : { opacity: 0 };

  const animate = direction === "up" ? { opacity: 1, y: 0 }
    : direction === "left" ? { opacity: 1, x: 0 }
    : direction === "right" ? { opacity: 1, x: 0 }
    : { opacity: 1 };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
