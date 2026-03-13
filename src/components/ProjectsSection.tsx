import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, ArrowUpRight, Layers, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Online Food Ordering Web App",
    subtitle: "SaaS Platform — Final Year Project",
    description:
      "SaaS-based platform to simplify restaurant management and enhance customer experience with real-time order tracking and secure payments.",
    tech: ["Next.js", "React.js", "Tailwind CSS", "Material UI", "Shadcn", "Clerk Auth", "Hygraph CMS"],
    link: "https://foodie-cart.vercel.app",
    features: ["Menu Management", "Order Processing", "Real-Time Tracking", "Secure Payments"],
    icon: Layers,
    accent: true,
  },
  {
    title: "Handwritten Digit Recognition",
    subtitle: "Machine Learning — AI Project",
    description:
      "AI-powered application that recognizes handwritten digits from images using neural networks and deep learning techniques.",
    tech: ["Python", "TensorFlow", "Keras", "NumPy", "Tkinter", "Pillow"],
    features: ["Image Recognition", "Neural Network", "Real-time Prediction"],
    icon: Brain,
    accent: false,
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-28 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl animate-blob" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-[60px] bg-accent" />
            <span className="font-display text-sm text-accent font-semibold uppercase tracking-widest">Projects</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">
            Recent <span className="text-gradient">Works</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`rounded-2xl p-8 flex flex-col group water-ripple transition-all duration-500 ${
                project.accent
                  ? 'bg-gradient-hero text-primary-foreground hover:shadow-[0_0_80px_-10px_hsl(235_80%_60%/0.3)]'
                  : 'glass hover:glow'
              }`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${
                  project.accent ? 'bg-accent' : 'bg-gradient-primary'
                }`}>
                  <project.icon className={`h-6 w-6 ${project.accent ? 'text-accent-foreground' : 'text-primary-foreground'}`} />
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full border flex items-center justify-center group-hover:scale-110 transition-transform ${
                      project.accent ? 'border-primary-foreground/30 text-primary-foreground' : 'border-border text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>

              <h3 className="font-display text-xl font-bold mb-1">{project.title}</h3>
              <p className={`text-xs font-display font-semibold mb-4 ${project.accent ? 'text-accent' : 'text-accent'}`}>
                {project.subtitle}
              </p>

              <p className={`text-sm mb-6 leading-relaxed flex-1 ${project.accent ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.features.map((f) => (
                  <span key={f} className={`px-3 py-1 text-xs rounded-full font-display font-medium ${
                    project.accent ? 'bg-primary-foreground/15 text-primary-foreground' : 'bg-secondary text-secondary-foreground'
                  }`}>
                    {f}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span key={t} className={`px-2 py-1 text-xs rounded-lg font-medium ${
                    project.accent ? 'bg-primary-foreground/10 text-primary-foreground/70' : 'bg-muted text-muted-foreground'
                  }`}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
