"use client";

import { motion, useInView } from "@/lib/framer-motion";
import { Code, Database, Globe, Layout, Server, PenTool as Tool } from "lucide-react";
import { useRef } from "react";

interface Skill {
  name: string;
  level: number; // 1-5 scale
  category: string;
  icon: React.ReactNode;
}

const skills: Skill[] = [
  // Frontend
  { name: "HTML/CSS", level: 5, category: "Frontend", icon: <Layout className="h-5 w-5" /> },
  { name: "JavaScript", level: 4, category: "Frontend", icon: <Code className="h-5 w-5" /> },
  { name: "React", level: 4, category: "Frontend", icon: <Code className="h-5 w-5" /> },
  { name: "Next.js", level: 4, category: "Frontend", icon: <Globe className="h-5 w-5" /> },
  { name: "Tailwind CSS", level: 5, category: "Frontend", icon: <Layout className="h-5 w-5" /> },

  // Backend
  { name: "Node.js", level: 3, category: "Backend", icon: <Server className="h-5 w-5" /> },
  { name: "Express", level: 3, category: "Backend", icon: <Server className="h-5 w-5" /> },
  { name: "MongoDB", level: 3, category: "Backend", icon: <Database className="h-5 w-5" /> },
  { name: "PostgreSQL", level: 2, category: "Backend", icon: <Database className="h-5 w-5" /> },
  { name: "Flask", level: 3, category: "Backend", icon: <Server className="h-5 w-5" /> },

  // Programming
  { name: "Java", level: 3, category: "Programming", icon: <Code className="h-5 w-5" /> },
  { name: "C++", level: 4, category: "Programming", icon: <Code className="h-5 w-5" /> },
  { name: "Python", level: 3, category: "Programming", icon: <Code className="h-5 w-5" /> },

  // Tools
  { name: "Git", level: 4, category: "Tools", icon: <Tool className="h-5 w-5" /> },
];

export function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories: Record<string, Skill[]> = {};
  skills.forEach((skill) => {
    if (!categories[skill.category]) categories[skill.category] = [];
    categories[skill.category].push(skill);
  });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-16 md:py-24 bg-gradient-to-tr from-indigo-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-extrabold text-indigo-900 dark:text-indigo-300 mb-3 tracking-wide">
            Skills & Technologies
          </h2>
          <div className="mx-auto w-24 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full mb-5 shadow-md"></div>
          <p className="max-w-3xl mx-auto text-indigo-700 dark:text-indigo-400 text-lg font-light">
            Technologies and languages I've worked with and am proficient in.
          </p>
        </motion.div>

        {/* Skills by Category */}
        <div className="space-y-14">
          {Object.entries(categories).map(([category, categorySkills], catIndex) => (
            <div key={category}>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: catIndex * 0.2 }}
                className="text-2xl font-semibold text-indigo-800 dark:text-indigo-300 mb-8 border-b border-indigo-300 dark:border-indigo-600 pb-2 max-w-max"
              >
                {category}
              </motion.h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categorySkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.15 + catIndex * 0.25 }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg dark:shadow-black/40 hover:shadow-indigo-300 dark:hover:shadow-indigo-600 transition-shadow duration-300"
                  >
                    {/* Icon & Name */}
                    <div className="flex items-center mb-5">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-700 text-indigo-700 dark:text-indigo-100 mr-4">
                        {skill.icon}
                      </div>
                      <h4 className="text-xl font-semibold text-indigo-900 dark:text-indigo-200">
                        {skill.name}
                      </h4>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative h-3 w-full bg-indigo-100 dark:bg-indigo-900 rounded-full overflow-hidden shadow-inner">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level * 20}%` } : {}}
                        transition={{ duration: 1.2, delay: 0.5 + index * 0.15 }}
                        className="h-full bg-indigo-600 dark:bg-indigo-400 rounded-full shadow-lg"
                      />
                    </div>

                    {/* Percentage Label */}
                    <div className="flex justify-end mt-2">
                      <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
                        {skill.level * 20}%
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
