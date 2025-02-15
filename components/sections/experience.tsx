import { Calendar, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function ExperienceSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const experiencePoints = [
    "Developed and maintained responsive web applications focusing on UI development using React and JavaScript",
    "Implemented Fetch, Await, and Promises for efficient asynchronous operations and integrated RESTful APIs",
    "Utilized Node.js, NPM, Yarn, and Webpack for efficient project setup and dependency management",
    "Conducted unit testing and participated in code reviews to ensure code quality",
    "Implemented bug fixes and enhancements based on technical design and user feedback",
    "Ensured web accessibility standards compliance in UI design and development",
    "Integrated visualization libraries and utilized React Hooks, Redux, and React Router",
    "Worked in Agile methodologies for efficient project management and collaboration",
    "Utilized both object-oriented and functional JavaScript paradigms",
  ];

  const skillsUsed = [
    "React.js",
    "JavaScript",
    "Node.js",
    "Redux",
    "React Router",
  ];

  /**
   * If the experience is expanded, show all the points, otherwise show only the first 2 points
   */
  const visiblePoints = isExpanded
    ? experiencePoints
    : experiencePoints.slice(0, 2);

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl font-bold mb-12">Work Experience</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-muted" />

          {/* Experience Items */}
          <div className="space-y-12">
            <div className="relative flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center relative z-10">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-semibold">Software Engineer</h3>
                    <span className="text-primary">at</span>
                    <Link
                      href="#"
                      className="text-primary hover:underline flex items-center gap-1"
                    >
                      Accenture
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                  <span className="text-muted-foreground">
                    August 2021 — Present
                  </span>
                </div>
                <div className="flex gap-2 mb-4">
                  {skillsUsed.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs rounded-full bg-secondary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  {visiblePoints.map((point, index) => (
                    <li key={index} className="leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-primary hover:underline mt-4 flex items-center gap-1"
                >
                  {isExpanded ? "See less" : "Read more"}
                  <span className="text-xs">{isExpanded ? "↑" : "↓"}</span>
                </button>
              </div>
            </div>

            {/* You can add previous experience items here */}
            {/* Example format for previous roles:
            <div className="relative flex gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-secondary flex items-center justify-center relative z-10">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-grow">
                // ... content ...
              </div>
            </div>
            */}
          </div>
        </div>
      </div>
    </section>
  );
}
