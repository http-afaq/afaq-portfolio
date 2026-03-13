import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { value: 3, suffix: "+", label: "Companies\nWorked" },
  { value: 10, suffix: "+", label: "Projects\nCompleted" },
  { value: 1, suffix: "+", label: "Years\nExperience" },
  { value: 4.8, suffix: "", label: "Client\nRating", decimals: 1 },
];

const Counter = ({ target, decimals = 0, suffix = "" }: { target: number; decimals?: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const steps = 40;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="font-display text-5xl md:text-7xl font-bold">
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      <span className="text-accent">{suffix}</span>
    </span>
  );
};

export const StatsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-hero opacity-95" />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle, hsl(0, 0%, 100%) 1px, transparent 1px)`,
        backgroundSize: '24px 24px',
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center text-primary-foreground"
            >
              <Counter target={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
              <p className="text-sm text-primary-foreground/70 font-display mt-2 whitespace-pre-line leading-tight">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
