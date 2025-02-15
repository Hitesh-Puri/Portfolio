"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern" />
      </div>
      <div className="container px-4 mx-auto relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-8"
          >
            <div className="inline-block mb-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="relative w-32 h-32 mx-auto mb-8"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-primary/50 animate-pulse" />
                <div className="absolute inset-1 rounded-full bg-background flex items-center justify-center text-4xl font-bold text-primary">
                  HP
                </div>
              </motion.div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              Hitesh Puri
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Full Stack Developer crafting exceptional digital experiences
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                onClick={() => scrollToSection("projects")}
              >
                View Projects
              </Button>
              <a href="/Hitesh_Puri_SSE.pdf" download>
                <Button variant="outline" size="lg">
                  Download Resume
                </Button>
              </a>
            </div>
            <div className="flex gap-6 justify-center pt-8">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="social-icons flex gap-4"
              >
                {[
                  { icon: Github, href: "https://github.com/hitesh-puri" },
                  {
                    icon: Linkedin,
                    href: "https://linkedin.com/in/hitesh-puri",
                  },
                  {
                    icon: Mail,
                    href: "mailto:hitesh1998.hp@gmail.com",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform transition-transform hover:scale-110"
                  >
                    <Button variant="ghost" size="icon">
                      <social.icon className="h-5 w-5" />
                    </Button>
                  </a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
