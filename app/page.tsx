/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Calendar,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  Phone,
  Moon,
  Sun,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { useTheme } from "next-themes";
import Link from "next/link";
import { motion } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

type FormSchema = z.infer<typeof formSchema>;

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  topics: string[];
  stargazers_count: number;
  language: string;
}

interface GitHubUser {
  avatar_url: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
}

const sections = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [userDetails, setUserDetails] = useState<GitHubUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: FormSchema) => {
    console.log(data);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;

    const fetchGitHubData = async () => {
      try {
        setIsLoading(true);
        const [userResponse, reposResponse] = await Promise.all([
          fetch("https://api.github.com/users/hitesh-puri"),
          fetch(
            "https://api.github.com/users/hitesh-puri/repos?sort=updated&per_page=8"
          ),
        ]);

        if (!userResponse.ok || !reposResponse.ok) {
          throw new Error("Failed to fetch");
        }

        const userData = await userResponse.json();
        const reposData = await reposResponse.json();

        setUserDetails(userData);
        setRepos(reposData);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGitHubData();
  }, [mounted]);

  if (!mounted) {
    return (
      <main className="min-h-screen bg-background">
        <div className="flex justify-center items-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </main>
    );
  }

  return (
    <>
      {/* Hero Section - Enhanced */}
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

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-background">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">
                Frontend Development
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full" />
                  React.js / Next.js
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full" />
                  TypeScript
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full" />
                  Tailwind CSS
                </li>
              </ul>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">
                Backend Development
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full" />
                  Node.js / Express
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full" />
                  C#
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full" />
                  PostgreSQL
                </li>
              </ul>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Tools & Others</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full" />
                  Git / GitHub
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full" />
                  Docker
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full" />
                  Azure
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-secondary/50">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Projects
          </h2>
          {isLoading ? (
            <div className="flex justify-center items-center min-h-[400px]">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {repos.map((project) => (
                <Card
                  key={project.id}
                  className="overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.name}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description || "No description available"}
                    </p>
                    <div className="flex gap-2 flex-wrap mb-4">
                      {project.topics?.map((topic) => (
                        <Button key={topic} variant="secondary" size="sm">
                          {topic}
                        </Button>
                      ))}
                      {project.language && (
                        <Button variant="secondary" size="sm">
                          {project.language}
                        </Button>
                      )}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button size="sm" variant="secondary">
                          <Github className="h-4 w-4 mr-2" />
                          Source Code
                        </Button>
                      </a>
                      {project.homepage && (
                        <a
                          href={project.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button size="sm" variant="secondary">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-background">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Work Experience
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                title: "Senior Full Stack Developer",
                company: "Tech Corp",
                period: "2020 - Present",
                description:
                  "Led development of multiple high-impact projects...",
              },
              {
                title: "Full Stack Developer",
                company: "Digital Solutions Inc",
                period: "2018 - 2020",
                description:
                  "Developed and maintained various web applications...",
              },
              {
                title: "Frontend Developer",
                company: "Web Agency",
                period: "2016 - 2018",
                description:
                  "Created responsive and interactive web interfaces...",
              },
            ].map((job, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    <p className="text-muted-foreground mb-2">
                      {job.company} • {job.period}
                    </p>
                    <p>{job.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
