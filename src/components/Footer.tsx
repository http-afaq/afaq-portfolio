import { Github, Linkedin, Mail } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Github, href: "https://github.com/http-afaq" },
  { icon: Linkedin, href: "https://linkedin.com/in/afaq-ahmad-ab386228b" },
  { icon: Mail, href: "mailto:afaqahmed6862@gmail.com" },
];

export const Footer = () => (
  <footer className="py-10 border-t border-border">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="font-display text-xl font-bold text-gradient">AFAQ</span>
          <span className="font-display text-xl font-bold text-accent">.</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors font-display">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.href}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-xs text-muted-foreground font-display">
          © {new Date().getFullYear()} Afaq Ahmad. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);
