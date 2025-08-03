"use client";

import { motion, useInView } from "@/lib/framer-motion";
import { Briefcase, Code2, GraduationCap } from "lucide-react";
import { useRef } from "react";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-16 md:py-24 bg-background"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about me, my background, and what I love building.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
            <p className="mb-4 text-muted-foreground">
              I'm Hemanth, a Computer Science Engineering student at REVA University,
              currently in my 6th semester. I specialize in building full-stack web
              applications using modern technologies like React, Node.js, MongoDB, and
              Next.js.
            </p>
            <p className="mb-4 text-muted-foreground">
              I've worked on impactful projects including an AI-Enabled Community Water
              Watch Platform that won 1st prize at the AI4Community Hackathon 2025.
              I love integrating AI and modern tools to solve real-world problems.
            </p>
            <p className="mb-4 text-muted-foreground">
              When I'm not coding, I enjoy learning about new technologies,
              exploring open-source projects, and mentoring peers in DSA and web dev.
            </p>
          </motion.div>

          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <Timeline>
              <TimelineItem
                icon={GraduationCap}
                title="B.Tech in Computer Science"
                place="REVA University, Bengaluru"
                date="2021 - 2025"
                delay={0}
                isInView={isInView}
              />
              <TimelineItem
                icon={Code2}
                title="AI4Community Hackathon Winner"
                place="Acharya Institute of Technology"
                date="May 2025"
                delay={0.2}
                isInView={isInView}
              />
              <TimelineItem
                icon={Briefcase}
                title="Full-Stack Project Builder"
                place="Self-Driven Projects"
                date="2022 - Present"
                delay={0.4}
                isInView={isInView}
              />
            </Timeline>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Timeline Wrapper
function Timeline({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative border-l border-border pl-6 ml-3 space-y-8">
      {children}
    </div>
  );
}

// Timeline Item Component
interface TimelineItemProps {
  icon: React.FC<{ className?: string }>;
  title: string;
  place: string;
  date: string;
  delay: number;
  isInView: boolean;
}

function TimelineItem({
  icon: Icon,
  title,
  place,
  date,
  delay,
  isInView,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: 0.3 + delay }}
      className="relative"
    >
      <span className="absolute -left-9 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
        <Icon className="h-3 w-3" />
      </span>
      <div className="bg-card p-4 rounded-lg shadow-sm">
        <h4 className="font-semibold text-lg">{title}</h4>
        <p className="text-muted-foreground">{place}</p>
        <p className="text-sm text-muted-foreground">{date}</p>
      </div>
    </motion.div>
  );
}