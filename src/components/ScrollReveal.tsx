import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

const getInitial = (direction: Direction) => {
  const distance = 60;
  switch (direction) {
    case "up": return { opacity: 0, y: distance };
    case "down": return { opacity: 0, y: -distance };
    case "left": return { opacity: 0, x: distance };
    case "right": return { opacity: 0, x: -distance };
  }
};

export const ScrollReveal = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  className = "",
  once = true,
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={getInitial(direction)}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : getInitial(direction)}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
