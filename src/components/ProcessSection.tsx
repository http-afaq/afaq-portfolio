import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Compass, Palette, Code2, ShieldCheck, Rocket, TrendingUp } from "lucide-react";

const steps = [
  { num: "01", icon: Compass, title: "Strategize", desc: "Understand your vision and craft a roadmap" },
  { num: "02", icon: Palette, title: "Design", desc: "Architect intuitive systems and experiences" },
  { num: "03", icon: Code2, title: "Develop", desc: "Build robust solutions with modern tech" },
  { num: "04", icon: ShieldCheck, title: "Test", desc: "Ensure quality and reliability at every level" },
  { num: "05", icon: Rocket, title: "Launch", desc: "Deploy and optimize for peak performance" },
  { num: "06", icon: TrendingUp, title: "Scale", desc: "Iterate, improve, and expand with confidence" },
];

export const ProcessSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background accents */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-display font-semibold uppercase tracking-wider mb-6">
            Process
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
            How I <span className="text-gradient">Deliver</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            A proven six-step framework that turns ideas into polished, production-ready products.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group relative rounded-2xl glass water-ripple hover:glow p-7 transition-all duration-500 overflow-hidden"
            >
              {/* Big watermark number */}
              <span className="font-display text-[8rem] leading-none font-black text-primary/5 group-hover:text-primary/10 transition-colors duration-500 absolute -top-6 -right-2 select-none pointer-events-none">
                {step.num}
              </span>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shrink-0">
                    <step.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <span className="font-display text-sm font-semibold text-accent tracking-widest">
                    STEP {step.num}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold mb-2 group-hover:text-gradient transition-all">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>

                {/* Connecting bar */}
                <div className="mt-5 h-1 w-12 rounded-full bg-gradient-to-r from-primary to-accent group-hover:w-20 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
