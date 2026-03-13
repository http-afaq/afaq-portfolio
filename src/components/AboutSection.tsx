import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Code2, Palette, Zap } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Clean Code", desc: "Writing maintainable, scalable solutions" },
  { icon: Palette, title: "Modern UI", desc: "Pixel-perfect responsive interfaces" },
  { icon: Zap, title: "Performance", desc: "Optimized for speed & efficiency" },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-[60px] bg-accent" />
            <span className="font-display text-sm text-accent font-semibold uppercase tracking-widest">About Me</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
            Passionate about crafting<br />
            <span className="text-gradient">digital experiences</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                Highly motivated Computer Science graduate with a strong foundation in modern web development.
                Skilled in building responsive and efficient applications using React, Angular, and Python (Django).
                Adept at solving complex problems and writing clean, maintainable code.
              </p>

              <div className="flex flex-wrap gap-4 text-sm">
                {[
                  { icon: MapPin, text: "Lahore, Pakistan" },
                  { icon: Phone, text: "+92 318 0079356" },
                  { icon: Mail, text: "afaqahmed6862@gmail.com" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2 px-4 py-2 rounded-full glass-strong text-muted-foreground">
                    <item.icon className="h-4 w-4 text-primary" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-4 p-5 rounded-2xl glass water-ripple group hover:glow transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <h.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm">{h.title}</h3>
                    <p className="text-xs text-muted-foreground">{h.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
