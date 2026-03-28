import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Frontend Developer",
    company: "TRB AI",
    location: "Remote (US Base Company)",
    period: "10/2024 – Present",
    points: [
      "Developed and maintained responsive web applications using React and Angular.",
      "Built admin panels and dashboards for internal tools and external platforms.",
      "Integrated real-time notifications and interactive UI components.",
      "Developed the official TRB company website using modern frontend technologies.",
      "Handled frontend deployments via Vercel, FTP, Remote Desktop, and Dockerized builds.",
      "Focused on clean code, reusable components, and performance optimization.",
    ],
    link: "https://trbai.com",
    current: true,
  },
  {
    title: "Frontend Developer (React & Angular)",
    company: "ENCODAL",
    location: "Remote",
    period: "05/2025 – 10/2025",
    points: [
      "Developed responsive and user-friendly web interfaces using React and Angular.",
      "Integrated complex forms, validations, and seamless data flow between UI and backend.",
      "Collaborated with cross-functional teams for scalable frontend solutions.",
      "Optimized UI components for performance, maintainability, and code quality.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company: "ITSOLERA",
    location: "Islamabad, PK",
    period: "08/2024 – 10/2024",
    points: [
      "Assisted in building full-stack applications using React and Django.",
      "Gained practical experience in software development lifecycle.",
      "Contributed to real-world projects in a collaborative team environment.",
    ],
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-15" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-[60px] bg-accent" />
            <span className="font-display text-sm text-accent font-semibold uppercase tracking-widest">Experience</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <div className="max-w-7xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative pl-16"
              >
                {/* Timeline dot */}
                <div className={`absolute left-0 top-0 w-12 h-12 rounded-2xl flex items-center justify-center ${exp.current ? 'bg-accent' : 'bg-gradient-primary'}`}>
                  <Briefcase className={`h-5 w-5 ${exp.current ? 'text-accent-foreground' : 'text-primary-foreground'}`} />
                </div>

                <div className="p-6 rounded-2xl glass water-ripple hover:glow transition-all duration-500">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-display text-xl font-bold">{exp.title}</h3>
                      <p className="text-primary font-semibold text-sm">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-display font-semibold ${exp.current ? 'bg-accent/20 text-accent' : 'bg-secondary text-muted-foreground'}`}>
                        {exp.period}
                      </span>
                      <p className="text-xs text-muted-foreground mt-1">{exp.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {exp.points.map((p, j) => (
                      <li key={j} className="flex gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.link && (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline mt-4 font-display font-semibold"
                    >
                      View Live <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
