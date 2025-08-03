"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Award,
  Code,
  Contact,
  FileText,
  Folder,
  Home,
  Menu,
  User,
  X,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Projects", href: "#projects", icon: Folder },
  { name: "Achievements", href: "#achievements", icon: Award },
  { name: "Resume", href: "#resume", icon: FileText },
  { name: "Contact", href: "#contact", icon: Contact },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to sections
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#home"
          onClick={(e) => scrollToSection(e, "#home")}
          className="font-bold text-xl text-primary"
        >
          Hemanth G K
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={cn(
          "md:hidden fixed inset-0 top-16 bg-background/95 backdrop-blur-sm z-40 transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="container mx-auto px-4 py-6 flex flex-col space-y-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="flex items-center space-x-2 p-3 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Icon className="h-5 w-5" />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
