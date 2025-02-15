"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface IGitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  topics: string[];
  stargazers_count: number;
  language: string;
  owner: {
    login: string;
  };
  default_branch: string;
}

interface IProjectData {
  id: number;
  name: string;
  image: string;
  liveDemo: string;
}

const projectData: IProjectData[] = [
  {
    id: 1,
    name: "Portfolio",
    image: "/images/portfolio.png",
    liveDemo: "https://demo-project1.com",
  },
  {
    id: 2,
    name: "Pathfinding Algo",
    image: "/images/PathfindingAlgo.png",
    liveDemo: "https://demo-project3.com",
  },
  {
    id: 3,
    name: "Redux Filter Component",
    image: "/images/react-redux-filter.png",
    liveDemo: "https://demo-project4.com",
  },
  {
    id: 4,
    name: "React Finance Tracker",
    image: "/images/financeTracker.png",
    liveDemo: "https://demo-project5.com",
  },
];

export default function Projects() {
  const [repos, setRepos] = useState<IGitHubRepo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setIsLoading(true);
        const reposResponse = await fetch(
          "https://api.github.com/users/hitesh-puri/repos?sort=updated&per_page=8"
        );

        if (!reposResponse.ok) {
          throw new Error("Failed to fetch");
        }

        const reposData = await reposResponse.json();
        setRepos(reposData);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  // Function to get repository image URL
  const getRepoImage = (repo: IGitHubRepo) => {
    const projectInfo = projectData.find(
      (project) => project.name.toLowerCase() === repo.name.toLowerCase()
    );
    return projectInfo?.image;
  };

  // Function to get live demo URL
  const getLiveDemo = (repo: IGitHubRepo) => {
    const projectInfo = projectData.find(
      (project) => project.name.toLowerCase() === repo.name.toLowerCase()
    );
    return projectInfo?.liveDemo || repo.homepage;
  };

  const fallbackImage = "/images/portfolio.png";

  return (
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
              <motion.div
                key={project.id}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="overflow-hidden group">
                  <div className="relative aspect-video">
                    {/* Fallback background */}
                    <div className="absolute inset-0 bg-secondary" />

                    {/* Project Image */}
                    <Image
                      width={500}
                      height={500}
                      src={getRepoImage(project) || fallbackImage}
                      alt={project.name}
                      className="object-cover w-full h-full"
                      onError={(e) => {
                        // If image fails to load, show a gradient background
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                      <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <a
                          href={project.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button variant="secondary" size="sm">
                            <Github className="h-4 w-4 mr-2" />
                            Source Code
                          </Button>
                        </a>
                        {getLiveDemo(project) && (
                          <a
                            href={getLiveDemo(project)}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button variant="secondary" size="sm">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Live Demo
                            </Button>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.name}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description || "No description available"}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {project.topics?.map((topic) => (
                        <span
                          key={topic}
                          className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                        >
                          {topic}
                        </span>
                      ))}
                      {project.language && (
                        <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                          {project.language}
                        </span>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
