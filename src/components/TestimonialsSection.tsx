import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, TechVentures",
    text: "Afaq delivered an outstanding web application that exceeded our expectations. His attention to detail and clean code practices made the entire project seamless.",
    rating: 5,
  },
  {
    name: "James Parker",
    role: "Product Manager, StartupHub",
    text: "Working with Afaq was a great experience. He understood our requirements quickly and built a responsive, high-performance platform on time.",
    rating: 5,
  },
  {
    name: "Ayesha Khan",
    role: "Founder, DesignCraft",
    text: "Afaq's expertise in React and modern UI frameworks brought our vision to life. The final product was polished, fast, and user-friendly.",
    rating: 5,
  },
  {
    name: "Michael Brown",
    role: "CTO, CloudScale",
    text: "Reliable, skilled, and easy to communicate with. Afaq handled complex features with confidence and delivered production-ready code.",
    rating: 4,
  },
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-[60px] bg-accent" />
            <span className="font-display text-sm text-accent font-semibold uppercase tracking-widest">
              Testimonials
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-14">
            What People <span className="text-gradient">Say</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.12 * i }}
              className="group relative rounded-2xl glass water-ripple hover:glow p-6 flex flex-col transition-all duration-500"
            >
              {/* Quote icon */}
              <Quote className="h-8 w-8 text-primary/15 mb-4 group-hover:text-primary/30 transition-colors duration-300" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    className={`h-4 w-4 ${s < t.rating ? "text-accent fill-accent" : "text-muted-foreground/30"}`}
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="border-t border-border/50 pt-4">
                <p className="font-display font-bold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
