"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const sections = [
  { id: "home", label: "Home", path: "/" },
  { id: "skills", label: "Skills", path: "/skills" },
  { id: "projects", label: "Projects", path: "/projects" },
  { id: "contact", label: "Contact", path: "/contact" },
];

export function Footer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className="py-12 bg-background border-t">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About</h3>
            <p className="text-muted-foreground">
              Full stack developer passionate about creating innovative web
              solutions and exceptional digital experiences.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              {sections.map((section) => (
                <Link
                  key={section.id}
                  href={section.path}
                  className="text-muted-foreground hover:text-primary"
                >
                  {section.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Email: hitesh1998.hp@gmail.com</p>
              <p>Location: India</p>
              <div className="flex gap-4 pt-2">
                <a
                  href="https://github.com/hitesh-puri"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="icon">
                    <Github className="h-5 w-5" />
                  </Button>
                </a>
                <a
                  href="https://linkedin.com/in/hitesh-puri"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="icon">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="text-center text-sm text-muted-foreground">
          © {mounted ? new Date().getFullYear() : "----"} Hitesh Puri. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}
