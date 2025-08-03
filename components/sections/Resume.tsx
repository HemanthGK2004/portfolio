"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, useInView } from "@/lib/framer-motion";
import { Download, ExternalLink, FileText } from "lucide-react";
import { useRef } from "react";

export function Resume() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resume" ref={ref} className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Resume</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and qualifications. View or download my resume for more details.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8 flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <a
              href="/hemanth_resume.pdf"
              download
              className="w-full sm:w-auto"
            >
              <Button className="w-full sm:w-auto flex items-center gap-2">
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
            </a>
            <a
              href="/hemanth_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="outline" className="w-full sm:w-auto flex items-center gap-2">
                <ExternalLink className="h-4 w-4" />
                View Full Resume
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Tabs defaultValue="education" className="w-full">
              <TabsList className="w-full">
                <TabsTrigger value="education" className="w-full">
                  Education
                </TabsTrigger>
              </TabsList>
              <TabsContent value="education" className="mt-6">
                <EducationSection isInView={isInView} />
              </TabsContent>
            </Tabs>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 border p-8 rounded-lg bg-card"
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Resume Preview
            </h3>
            <div className="aspect-[3/4] bg-accent/20 rounded-md overflow-hidden">
              <iframe
                src="/Resume_R22EF082.pdf"
                title="Resume Preview"
                width="100%"
                height="600px"
                className="rounded-md w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function EducationSection({ isInView }: { isInView: boolean }) {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Reva University, Bengaluru – 566064",
      period: "Ongoing",
      achievements: ["CGPA: 9.53 till 6th Semester"],
    },
    {
      degree: "PUC & SSLC",
      institution: "DVS PU College and High School, Bharamasagara – 577519",
      period: "Completed",
      achievements: ["SSLC: 94.83%", "PUC: 95.83%"],
    },
  ];

  return (
    <div className="space-y-6">
      {education.map((edu, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          className="border rounded-lg p-6 bg-card"
        >
          <h3 className="text-xl font-semibold">{edu.degree}</h3>
          <p className="text-primary font-medium">{edu.institution}</p>
          <div className="flex justify-between text-sm text-muted-foreground mt-1 mb-4">
            <span>{edu.period}</span>
          </div>
          <ul className="list-disc pl-5 space-y-2">
            {edu.achievements.map((item, idx) => (
              <li key={idx} className="text-muted-foreground">
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
