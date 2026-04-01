import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import profileImg from "@/assets/afaq_ahmad.jpeg";

const roles = ["REACT DEVELOPER", "ANGULAR DEVELOPER", "NEXT.JS DEVELOPER", "PYTHON DEVELOPER", "WEB DEVELOPER"];
const techLogos = [
  { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
];

const useTypingEffect = (words: string[], typingSpeed = 80, deletingSpeed = 50, pauseTime = 1500) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, isDeleting ? text.length - 1 : text.length + 1));
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
};

export const HeroSection = () => {
  const typedText = useTypingEffect(roles);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const blob1Y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const blob3Y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-cyan-500/20 animate-gradient blur-3xl" />
      </div>
      {/* Parallax animated background blobs */}
      <motion.div style={{ y: blob1Y }} className="absolute top-20 -right-20 w-[500px] h-[500px] bg-primary/15 animate-blob animate-float rounded-full blur-3xl" />
      <motion.div style={{ y: blob2Y }} className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-accent/20 animate-blob rounded-full blur-3xl" />
      <motion.div style={{ y: blob3Y }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 animate-blob rounded-full blur-3xl" />

      {/* Dot grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '30px 30px',
      }} />
      {/* Floating tech logos background */}
      {/* <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        {techLogos.map((tech) => {
          const randomX = Math.random() * 90;
          const randomY = Math.random() * 90;

          return (
            <motion.img
              key={tech.name}
              src={tech.logo}
              alt={tech.name}
              className="absolute w-10 h-10 object-contain opacity-60 blur-[0.5px]"
              style={{
                left: `${randomX}%`,
                top: `${randomY}%`,
              }}
              animate={{
                y: [0, -60, 0],
                x: [0, 40, -40, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 40,   // much slower movement
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div> */}

      <motion.div style={{ y: contentY }} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8">
          {/* Left content */}
          {/* Left content */}
          <div className="flex-1 order-2 lg:order-1">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center lg:justify-start mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-muted-foreground">Available for work</span>
              </div>
            </motion.div>

            {/* Main heading with typing effect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-center lg:text-left"
            >
              {/* Main heading */}
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[0.95] tracking-tight mb-2">
                <span className="block text-gradient" style={{ minHeight: '1.1em' }}>
                  <span className="invisible absolute">ANGULAR DEVELOPER</span>
                  <span className="visible">{typedText}</span>
                  <span className="inline-block w-[3px] h-[0.85em] bg-accent ml-1 align-middle animate-pulse" />
                </span>
              </h1>

              {/* Subtitle — smaller text */}
              <p className="text-lg sm:text-xl md:text-2xl text-accent mt-2">
                Turning ideas into interactive, user-friendly web apps
              </p>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center lg:text-left mt-6"
            >
              <p className="text-lg text-muted-foreground max-w-md leading-relaxed mx-auto lg:mx-0">
                Hi, I'm <span className="text-foreground font-semibold">Afaq Ahmad</span> — building responsive,
                efficient, and beautiful web applications with React, Angular & modern technologies.
              </p>

              <div className="flex items-center gap-4 mt-8 justify-center lg:justify-start flex-wrap">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 font-display font-semibold text-base group">
                  <a href="#contact">
                    Hire Me
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="rounded-full px-8 font-display font-semibold text-base">
                  <a href="#projects">Projects</a>
                </Button>
                <Button variant="outline" size="lg" asChild className="rounded-full px-8 font-display font-semibold text-base">
                  <a href="/resume.pdf" download="Afaq_Ahmad_Resume.pdf">
                    <Download className="h-4 w-4 mr-2" />
                    Resume
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-4 mt-10 justify-center lg:justify-start"
            >
              {[
                { icon: Github, href: "https://github.com/http-afaq", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/afaq-ahmad-ab386228b", label: "LinkedIn" },
                { icon: Mail, href: "mailto:afaqahmed6862@gmail.com", label: "Email" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:glow transition-all duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </a>

              ))}


            </motion.div>
          </div>

          {/* Right - Profile Image */}
          {/* Right - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex-shrink-0 order-1 lg:order-2"
          >
            <div className="relative w-44 h-44 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 blur-2xl animate-pulse" />
              <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-primary/30 via-accent/20 to-primary/30 animate-blob" />
              {/* Image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-border/50 glass-strong transition-transform duration-500 hover:scale-105">

                <img
                  src={profileImg}
                  alt="Afaq Ahmad"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-2 -right-2 px-4 py-2 rounded-full glass-strong text-sm font-display font-semibold text-accent"
              >
                2+ Years Exp.
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center mt-12 sm:mt-16 mb-10 -translate-y-6"
        >
          <a href="#about" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group">
            <span className="font-display">Scroll Down</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom marquee */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-border/50 bg-card/30 backdrop-blur-sm py-3 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-8 mx-4">
              {techLogos.map((tech) => (
                <span
                  key={`${tech.name}-${i}`}
                  className="text-sm font-display text-muted-foreground flex items-center gap-2"
                >
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-5 h-5 object-contain"
                  />
                  {tech.name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
