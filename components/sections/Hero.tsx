"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import { ChevronDown, FileText, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [typedText, setTypedText] = useState("");
  const textToType = "Software Developer & Tech Enthusiast";
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    
    // Typing animation
    if (textIndex < textToType.length) {
      const timeout = setTimeout(() => {
        setTypedText(prev => prev + textToType[textIndex]);
        setTextIndex(textIndex + 1);
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [textIndex]);

  const scrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToResume = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const resumeSection = document.querySelector("#resume");
    if (resumeSection) {
      resumeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollDown = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center">
        <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text content */}
          <motion.div 
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-primary">Hello, I'm</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                Hemanth G K
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 h-8 text-muted-foreground">
              {typedText}
              <span className="animate-pulse">|</span>
            </p>
            <p className="mb-8 max-w-lg mx-auto md:mx-0 text-muted-foreground leading-relaxed">
              I specialize in building exceptional digital experiences with modern web technologies. 
              Focused on creating responsive, user-friendly applications that solve real-world problems.
            </p>
            
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button onClick={scrollToResume} size="lg" className="gap-2">
                  <FileText className="h-4 w-4" />
                  View Resume
                </Button>
                <Button onClick={scrollToContact} variant="outline" size="lg" className="gap-2">
                  <Mail className="h-4 w-4" />
                  Contact Me
                </Button>
              </div>
              
              <div className="flex gap-4 justify-center md:justify-start">
                <Link href="https://github.com/HemanthGK2004" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Github className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="https://linkedin.com/in/hemanthgk" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
          
          {/* Profile Image */}
          <motion.div 
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden ring-2 ring-primary/20">
                <img 
                  src="/images/image1.jpg"
                  alt="Profile" 
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll down indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0, y: -10 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6, repeat: Infinity, repeatType: "reverse" }}
          onClick={scrollDown}
        >
          <ChevronDown className="h-8 w-8 text-primary animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}