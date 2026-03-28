import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Code2, Layout, Server, Settings, Plus } from "lucide-react";

const proficiencyLevels = [
  { name: "React.js / Next.js", level: 92, color: "bg-primary" },
  { name: "Angular", level: 85, color: "bg-destructive" },
  { name: "TypeScript / JavaScript", level: 88, color: "bg-accent" },
  { name: "Tailwind CSS / Material UI", level: 90, color: "bg-primary" },
  { name: "Node.js / Django", level: 72, color: "bg-accent" },
  { name: "Git / Docker / Vercel", level: 80, color: "bg-destructive" },
];

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Python", "JavaScript", "TypeScript", "HTML5", "CSS3", "SQL", "C/C++"],
    color: "primary" as const,
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["React.js", "Angular", "Next.js", "Tailwind CSS", "Material UI", "Daisy UI", "Shadcn"],
    color: "accent" as const,
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Django", "REST APIs"],
    color: "primary" as const,
  },
  {
    title: "Tools & DevOps",
    icon: Settings,
    skills: ["Git", "Docker", "Vercel", "Firebase", "Postman", "Power BI", "N8N", "VS Code"],
    color: "accent" as const,
  },
  {
    title: "CMS",
    icon: Plus,
    skills: ["WordPress", "Hygraph"],
    color: "primary" as const,
  },
];

const AnimatedBar = ({ level, color, inView, delay }: { level: number; color: string; inView: boolean; delay: number }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setWidth(level), delay);
      return () => clearTimeout(timer);
    }
  }, [inView, level, delay]);

  return (
    <div className="w-full h-2.5 rounded-full bg-muted border border-border/50 overflow-hidden">
      <div
        className={`h-full rounded-full ${color} transition-all duration-1000 ease-out`}
        style={{ width: `${width}%` }}
      />
    </div>
  );
};

export const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-28" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-[60px] bg-accent" />
            <span className="font-display text-sm text-accent font-semibold uppercase tracking-widest">Skills</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">
            My <span className="text-gradient">Tech Stack</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Left - Proficiency Levels */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 rounded-2xl glass water-ripple border border-border shadow-sm"
          >
            <div className="flex items-center gap-2 mb-8">
              <div className="w-2.5 h-2.5 rounded-full bg-primary" />
              <h3 className="font-display text-lg font-bold">Proficiency Levels</h3>
            </div>

            <div className="space-y-6">
              {proficiencyLevels.map((skill, i) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm font-bold text-muted-foreground">{skill.level}%</span>
                  </div>
                  <AnimatedBar
                    level={skill.level}
                    color={skill.color}
                    inView={inView}
                    delay={200 + i * 150}
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Skill Categories */}
          <div className="space-y-4">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                className="p-5 rounded-2xl glass water-ripple group hover:glow transition-all duration-500 border border-border shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${cat.color === "accent" ? "bg-accent/20 text-accent" : "bg-primary/20 text-primary"}`}>
                    <cat.icon className="h-4 w-4" />
                  </div>
                  <h3 className="font-display text-sm font-bold uppercase tracking-wider text-foreground">
                    {cat.title}
                  </h3>
                  <div className="flex-1 h-px bg-border/50" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-lg border border-border bg-muted text-foreground font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary/50 transition-colors duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
