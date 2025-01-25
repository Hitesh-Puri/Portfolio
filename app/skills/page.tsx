"use client";

import { Card } from "@/components/ui/card";

// Move skills section here

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
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
            <h3 className="text-xl font-semibold mb-4">Backend Development</h3>
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
  );
}
