import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";

export const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-28" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-[60px] bg-accent" />
            <span className="font-display text-sm text-accent font-semibold uppercase tracking-widest">Education</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">
            Education & <span className="text-gradient">Certificates</span>
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-6">

          {/* Education (full width) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-2xl glass water-ripple hover:glow transition-all duration-500"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center mb-5">
              <GraduationCap className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="font-display text-xl font-bold">BS Computer Science</h3>
            <p className="text-accent font-semibold text-sm mb-1">Islamia University of Bahawalpur</p>
            <span className="inline-block px-3 py-1 rounded-full bg-secondary text-xs font-display text-muted-foreground mb-4">
              2020 – 2024 · CGPA: 3.2
            </span>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Data Structures & Algorithms, OOP, DBMS, AI, Data Science,
              Machine Learning, Web Technologies, Mobile App Development
            </p>
          </motion.div>

          {/* Certificates Grid (3 in one row) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Python Programming",
                org: "Certificate of Completion — Fundamentals",
                details: "Covered core Python concepts including OOP, file handling, and basic data structures.",
                skills: ["Python", "OOP", "File Handling"],
              },
              {
                title: "WordPress",
                org: "Digiskills Training Certificate",
                details: "Learned website creation, theme customization, plugins, and SEO basics.",
                skills: ["WordPress", "Elementor", "SEO"],
              },
              {
                title: "Web Development",
                org: "Practical Projects & Learning",
                details: "Built responsive websites using React, Angular, and modern UI frameworks.",
                skills: ["React", "Angular", "Tailwind"],
              },
            ].map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="p-6 rounded-2xl glass water-ripple hover:glow transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Award className="h-6 w-6 text-accent-foreground" />
                </div>

                <h3 className="font-display text-lg font-bold">{cert.title}</h3>

                <p className="text-sm text-muted-foreground mt-1">
                  {cert.org}
                </p>

                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  {cert.details}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-xs rounded-full bg-secondary text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <span className="inline-block mt-4 px-3 py-1 rounded-full bg-secondary text-xs font-display text-muted-foreground">
                  Verified
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
