"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const skillsData = {
  overview: [
    "Data Structures and Algorithms",
    "Frontend Development",
    "Backend Development",
    "Database Management",
    "System Design",
    "LLMs",
    "and Generative AI Workflows",
  ],
  programming: [
    {
      name: "JavaScript",
      icon: "https://img.icons8.com/color/144/000000/javascript--v1.png",
    },
    {
      name: "TypeScript",
      icon: "https://img.icons8.com/color/96/000000/typescript.png",
    },
  ],
  fullStack: [
    {
      name: "React",
      icon: "https://img.icons8.com/color/144/000000/react-native.png",
    },
    {
      name: "Node.js",
      icon: "https://img.icons8.com/color/96/000000/nodejs.png",
    },
    {
      name: "Next.js",
      icon: "https://img.icons8.com/color/96/000000/nextjs.png",
    },
    {
      name: "Tailwind",
      icon: "https://img.icons8.com/color/96/000000/tailwindcss.png",
    },
    {
      name: "Bootstrap",
      icon: "https://img.icons8.com/color/96/000000/bootstrap.png",
    },
    {
      name: "SASS",
      icon: "https://img.icons8.com/color/96/000000/sass.png",
    },
  ],
  database: [
    {
      name: "SQL",
      icon: "https://img.icons8.com/color/96/000000/sql.png",
    },
    {
      name: "Redis",
      icon: "https://img.icons8.com/color/96/000000/redis.png",
    },
    {
      name: "MongoDB",
      icon: "https://img.icons8.com/color/96/000000/mongodb.png",
    },
  ],
  devOps: [
    {
      name: "Git",
      icon: "https://img.icons8.com/color/96/000000/git.png",
    },
    {
      name: "GitHub",
      icon: "https://img.icons8.com/color/96/000000/github.png",
    },
    {
      name: "Bitbucket",
      icon: "https://img.icons8.com/color/96/000000/bitbucket.png",
    },
    {
      name: "Azure App Service",
      icon: "https://img.icons8.com/color/144/000000/azure-1.png",
    },
  ],
  tools: [
    {
      name: "Visual Studio Code",
      icon: "https://img.icons8.com/color/96/000000/visual-studio-code-2019.png",
    },
    {
      name: "Postman",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTILwHh21Dky51ePyPy2V_qsPeQWd5n136Sa8PQuhIMmOGLpprK6Zt7qWn9cRL21LE3RzM&usqp=CAU",
    },
  ],
};

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-secondary/50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold text-primary">Skills</h2>

          <div className="prose dark:prose-invert max-w-none">
            <p className="text-muted-foreground">
              {skillsData.overview.join(", ")}
            </p>
          </div>

          <div className="space-y-6">
            <SkillCategory
              title="Programming"
              skills={skillsData.programming}
            />
            <SkillCategory
              title="Full-Stack Development"
              skills={skillsData.fullStack}
            />
            <SkillCategory title="Database" skills={skillsData.database} />
            <SkillCategory title="DevOps" skills={skillsData.devOps} />
            <SkillCategory title="Tools" skills={skillsData.tools} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SkillCategory({
  title,
  skills,
}: {
  title: string;
  skills: { name: string; icon: string }[];
}) {
  return (
    <div className="space-y-3">
      <h3 className="text-xl font-semibold text-muted-foreground">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2 p-2 rounded-lg hover:bg-secondary/80"
          >
            <div className="relative w-8 h-8">
              <Image
                src={skill.icon}
                alt={skill.name}
                fill
                className="object-contain"
              />
            </div>
            <span className="text-sm font-medium">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
