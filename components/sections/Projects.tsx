"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useRef } from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "AI-Enabled Community Water Watch Platform",
    description:
      "Smart reporting platform addressing water issues, using AI to classify 1,000+ user-submitted images with 90%+ accuracy, chatbot integration, and geotagged reports with live status updates via Leaflet maps.",
    image:
      "/projects/main-water.png",
    technologies: ["React.js", "Flask", "MongoDB", "Python", "Machine Learning", "REST APIs"],
    github: "https://github.com/HemanthGK2004/Water-Watch-X",
    demo: "https://youtu.be/your-demo-video",
    featured: true,
  },
  {
    title: "Full-Stack Recruitment Management System",
    description:
      "A full-stack job portal with secure authentication, real-time analytics, media uploads, and management of 200+ job listings and 500+ applicants.",
    image:"/projects/image1.png",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Cloudinary"],
    github: "https://github.com/HemanthGK2004/Job-Portal",
    demo: "https://job-portal-live-link.com",
    featured: true,
  },
  {
    title: "Wedding Planner - Smart Event Management Platform",
    description:
      "Web-based wedding planning platform for vendor bookings, budget tracking, and expense management. Improved user budget control by 30%.",
    image:
      "https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["HTML5", "CSS", "JavaScript"],
    github: "https://github.com/HemanthGK2004/Wedding-Repository",
    demo: "https://wedding-planner-live-link.com",
  },
  {
    title: "Risk-Based Proctoring System",
    description:
      "Ensures secure online exams by detecting suspicious activities, tracking tab switches, and providing real-time risk assessment using AI-based behavior analysis.",
    image:
      "/projects/image2.png",
    technologies: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "FastAPI",
      "MongoDB",
      "Firebase",
    ],
    github: "https://github.com/HemanthGK2004/Risk-Based-Proctoring",
    demo: "https://risk-proctoring-live-link.com",
  },
  {
    title: "Fireworks AI Web Application",
    description:
      "Flask-based app using Fireworks AI API for chat, essay generation, and text analysis. Demonstrates AI-driven creativity in text and simulation.",
    image:
      "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Flask", "Python", "Fireworks AI API"],
    github: "https://github.com/HemanthGK2004/Fireworks-AI",
    demo: "https://fireworks-ai-demo-link.com",
  },
];

export function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const sortedProjects = [...projects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });

  return (
    <section id="projects" ref={ref} className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sortedProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
  isInView: boolean;
}

function ProjectCard({ project, index, isInView }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <Card className="overflow-hidden h-full flex flex-col">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
          />
          {project.featured && (
            <span className="absolute top-2 right-2">
              <Badge variant="secondary" className="bg-primary text-primary-foreground">
                Featured
              </Badge>
            </span>
          )}
        </div>
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="bg-accent/50">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" size="sm" asChild>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </Button>

          {project.demo && (
            <Button size="sm" asChild>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
