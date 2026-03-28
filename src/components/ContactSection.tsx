import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Linkedin, Github, Send, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const contacts = [
  { icon: Mail, label: "EMAIL", value: "afaqahmed6862@gmail.com", href: "mailto:afaqahmed6862@gmail.com" },
  { icon: Phone, label: "PHONE", value: "+92 318 0079356", href: "tel:+923180079356" },
  { icon: Linkedin, label: "LINKEDIN", value: "afaq-ahmad", href: "https://linkedin.com/in/afaq-ahmad-ab386228b" },
  { icon: Github, label: "GITHUB", value: "http-afaq", href: "https://github.com/http-afaq" },
];

export const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-28 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-display font-semibold uppercase tracking-wider mb-6">
              Contact
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2">
              Let's build
            </h2>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gradient leading-tight mb-6">
              something great
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-md">
              I'm open to full-time roles, freelance projects, or just a great tech conversation. My inbox is always open — let's talk!
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 font-display font-semibold text-base group">
                <a href="mailto:afaqahmed6862@gmail.com">
                  <Send className="h-4 w-4 mr-2" />
                  Send an Email
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="rounded-full px-8 font-display font-semibold text-base group">
                <a href="https://linkedin.com/in/afaq-ahmad-ab386228b" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn Profile
                  <ExternalLink className="h-3 w-3 ml-1.5 opacity-50" />
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right - Contact Cards */}
          <div className="space-y-4">
            {contacts.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-5 p-5 rounded-2xl glass water-ripple hover:glow transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <c.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-display uppercase tracking-widest font-semibold mb-0.5">{c.label}</p>
                  <p className="text-base font-medium text-foreground group-hover:text-primary transition-colors">{c.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
