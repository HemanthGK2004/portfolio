"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { motion, useInView } from "@/lib/framer-motion";
import { Award, Calendar, ChevronLeft, ChevronRight, Code, ExternalLink, FileCheck, Trophy, Users, X } from "lucide-react";
import { useRef, useState } from "react";

interface Achievement {
  title: string;
  organization: string;
  date: string;
  description: string;
  teammates?: string[];
  type: "hackathon" | "certification" | "award" | "competition";
  certificateUrl?: string;
  projectUrl?: string;
  images?: {
    url: string;
    caption?: string;
  }[];
  teamPhotos?: {
    url: string;
    caption?: string;
  }[];
  eventPhotos?: {
    url: string;
    caption?: string;
  }[];
}

const achievements: Achievement[] = [
  {
    title: "Winner - AI4-Community Hackathon",
    organization: "Acharya Institute of Technology",
    date: "May 2025",
    description: "Secured 1st place in the AI4-Community Hackathon by building an AI-based water monitoring and chatbot system. The solution featured intelligent issue classification, real-time analytics, and multilingual support.\n\nOur innovative platform combines IoT sensors with machine learning algorithms to provide real-time water quality monitoring and predictive maintenance for community water systems.",
    type: "hackathon",
    certificateUrl: "#",
    projectUrl: "https://github.com/hemanth/ai4-community-water",
    teammates: ["Hemanth", "Punith B", "Sameer C", "Jeevan H S"],
    images: [
      {
        url: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg",
        caption: "Dashboard interface of our AI water monitoring solution"
      },
      {
        url: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
        caption: "Water quality monitoring visualization and analytics"
      },
      {
        url: "https://images.pexels.com/photos/3182778/pexels-photo-3182778.jpeg",
        caption: "Chatbot interface for user queries and support"
      }
    ],
    teamPhotos: [
      {
        url: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
        caption: "Our team at the award ceremony"
      },
      {
        url: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
        caption: "Team collaboration during development"
      }
    ],
    eventPhotos: [
      {
        url: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
        caption: "Presentation to the judges"
      },
      {
        url: "https://images.pexels.com/photos/3184466/pexels-photo-3184466.jpeg",
        caption: "Hackathon venue and participants"
      }
    ]
  },
  {
    title: "Top 20 - Hack Kshetra '24",
    organization: "VVCE Mysore",
    date: "April 2024",
    description: "Ranked in the top 20 out of 100+ teams by designing a crowd-sourced platform for reporting campus issues using geotagged submissions and live status tracking.\n\nThe platform enables students and staff to report infrastructure issues, maintenance requests, and safety concerns with real-time tracking and automated assignment to relevant departments.",
    type: "hackathon",
    certificateUrl: "#",
    projectUrl: "https://github.com/hemanth/hack-kshetra-campus",
    teammates: ["Hemanth", "Arjun Kumar", "Priya Nair"],
    images: [
      {
        url: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
        caption: "Mobile app interface for issue reporting"
      },
      {
        url: "https://images.pexels.com/photos/3184361/pexels-photo-3184361.jpeg",
        caption: "Admin dashboard for issue management"
      }
    ],
    teamPhotos: [
      {
        url: "https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg",
        caption: "Team working at the hackathon"
      }
    ],
    eventPhotos: [
      {
        url: "https://images.pexels.com/photos/3184467/pexels-photo-3184467.jpeg",
        caption: "Hack Kshetra event opening ceremony"
      }
    ]
  },
  {
    title: "Top 10 - Fin-A-Thon 2024",
    organization: "Puttannaiah Foundation Mandya",
    date: "March 2024",
    description: "Developed a decentralized finance dashboard using blockchain for transparent fund tracking and predictive analytics. Ranked in the top 10 among 60+ teams.\n\nOur solution provides real-time financial insights, automated compliance reporting, and smart contract integration for transparent fund management.",
    type: "hackathon",
    certificateUrl: "#",
    projectUrl: "https://github.com/hemanth/fin-a-thon-blockchain",
    teammates: ["Hemanth", "Rajesh Sharma", "Kavya Reddy"],
    images: [
      {
        url: "https://images.pexels.com/photos/3184362/pexels-photo-3184362.jpeg",
        caption: "Dashboard showing financial analytics and insights"
      },
      {
        url: "https://images.pexels.com/photos/3184363/pexels-photo-3184363.jpeg",
        caption: "Blockchain transaction view and smart contracts"
      }
    ],
    teamPhotos: [
      {
        url: "https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg",
        caption: "Team during final presentation"
      }
    ],
    eventPhotos: [
      {
        url: "https://images.pexels.com/photos/3184468/pexels-photo-3184468.jpeg",
        caption: "Fin-A-Thon networking session"
      }
    ]
  },
  {
    title: "Participant - CICADA 24-Hour Hackathon",
    organization: "Atria Institute of Technology",
    date: "February 2024",
    description: "Built a prototype for an automated waste management app under 24 hours, integrating AI for waste detection and optimized collection routes.\n\nThe application uses computer vision to classify waste types and machine learning algorithms to optimize collection schedules and routes for maximum efficiency.",
    type: "hackathon",
    certificateUrl: "#",
    projectUrl: "https://github.com/hemanth/cicada-waste-management",
    teammates: ["Hemanth", "Suresh Kumar", "Anitha Rao"],
    images: [
      {
        url: "https://images.pexels.com/photos/3184364/pexels-photo-3184364.jpeg",
        caption: "Waste detection AI interface and classification"
      },
      {
        url: "https://images.pexels.com/photos/3184365/pexels-photo-3184365.jpeg",
        caption: "Route optimization dashboard"
      }
    ],
    teamPhotos: [
      {
        url: "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg",
        caption: "Our team during the 24-hour development sprint"
      }
    ],
    eventPhotos: [
      {
        url: "https://images.pexels.com/photos/3184469/pexels-photo-3184469.jpeg",
        caption: "CICADA hackathon workspace"
      }
    ]
  },
  {
    title: "Top 15 - Vikasya 2025",
    organization: "RV University Bengaluru",
    date: "January 2025",
    description: "Designed a sustainability-focused mobile app that connects eco-conscious consumers with verified green products and local recycling centers.\n\nThe platform features product verification, carbon footprint tracking, and a reward system for sustainable purchasing decisions.",
    type: "hackathon",
    certificateUrl: "#",
    projectUrl: "https://github.com/hemanth/vikasya-sustainability",
    teammates: ["Hemanth", "Meera Patel", "Nikhil Joshi"],
    images: [
      {
        url: "https://images.pexels.com/photos/3184366/pexels-photo-3184366.jpeg",
        caption: "App product listing screen with sustainability ratings"
      },
      {
        url: "https://images.pexels.com/photos/3184367/pexels-photo-3184367.jpeg",
        caption: "Recycling center locator and navigation"
      }
    ],
    teamPhotos: [
      {
        url: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg",
        caption: "Team brainstorming session"
      }
    ],
    eventPhotos: [
      {
        url: "https://images.pexels.com/photos/3184470/pexels-photo-3184470.jpeg",
        caption: "Demonstration to attendees at Vikasya"
      }
    ]
  }
];

export function Achievements() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const getIconByType = (type: string) => {
    switch (type) {
      case "hackathon": return <Code className="h-5 w-5" />;
      case "certification": return <FileCheck className="h-5 w-5" />;
      case "award": return <Trophy className="h-5 w-5" />;
      case "competition": return <Award className="h-5 w-5" />;
      default: return <Award className="h-5 w-5" />;
    }
  };

  const getPreviewImage = (achievement: Achievement) => {
    return achievement.images?.[0]?.url || 
           achievement.teamPhotos?.[0]?.url || 
           achievement.eventPhotos?.[0]?.url;
  };

  const getTotalImageCount = (achievement: Achievement) => {
    return (achievement.images?.length || 0) + 
           (achievement.teamPhotos?.length || 0) + 
           (achievement.eventPhotos?.length || 0);
  };

  const getAllImages = (achievement: Achievement) => {
    return [
      ...(achievement.images || []),
      ...(achievement.teamPhotos || []),
      ...(achievement.eventPhotos || [])
    ];
  };

  const handleAchievementClick = (achievement: Achievement) => {
    setSelectedAchievement(achievement);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedAchievement(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedAchievement) {
      const allImages = getAllImages(selectedAchievement);
      setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
    }
  };

  const prevImage = () => {
    if (selectedAchievement) {
      const allImages = getAllImages(selectedAchievement);
      setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
    }
  };

  return (
    <section id="achievements" ref={ref} className="py-16 md:py-24 bg-accent/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Recognition from hackathons, competitions, and more.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card 
                className="h-full flex flex-col transition-all hover:shadow-lg cursor-pointer border-border/50 hover:border-primary/30 overflow-hidden group"
                onClick={() => handleAchievementClick(achievement)}
              >
                {/* Preview Image */}
                {getPreviewImage(achievement) && (
                  <div className="relative h-48 bg-gray-100 dark:bg-gray-800 overflow-hidden">
                    <img
                      src={getPreviewImage(achievement)!}
                      alt={achievement.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    
                    {/* Image count indicator */}
                    {getTotalImageCount(achievement) > 0 && (
                      <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {getTotalImageCount(achievement)} photos
                      </div>
                    )}
                  </div>
                )}
                
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <Badge variant="outline" className="mb-2">
                        {achievement.type.charAt(0).toUpperCase() + achievement.type.slice(1)}
                      </Badge>
                      <CardTitle className="text-xl line-clamp-2">
                        {achievement.title}
                      </CardTitle>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      {getIconByType(achievement.type)}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-2 h-4 w-4" />
                      {achievement.date}
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-1">
                      {achievement.organization}
                    </p>
                    <p className="text-sm line-clamp-3">{achievement.description.split('\n')[0]}</p>

                    {achievement.teammates && achievement.teammates.length > 0 && (
                      <div className="pt-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                          <Users className="h-4 w-4" />
                          <span>Team</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {achievement.teammates.slice(0, 3).map((teammate, idx) => (
                            <Badge key={idx} variant="secondary" className="truncate max-w-[80px]">
                              {teammate}
                            </Badge>
                          ))}
                          {achievement.teammates.length > 3 && (
                            <Badge variant="outline" className="px-2">
                              +{achievement.teammates.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Achievement Detail Modal */}
        <Dialog open={!!selectedAchievement} onOpenChange={(open) => !open && closeModal()}>
          {selectedAchievement && (
            <DialogContent className="max-w-5xl w-[95vw] max-h-[90vh] p-0 gap-0 overflow-hidden">
              <div className="flex flex-col h-full max-h-[90vh]">
                {/* Fixed Header */}
                <DialogHeader className="border-b p-4 md:p-6 flex-shrink-0 bg-background">
                  <div className="flex justify-between items-start gap-4">
                    <div className="space-y-2 min-w-0 flex-1">
                      <Badge variant="outline" className="w-fit">
                        {selectedAchievement.type.charAt(0).toUpperCase() + selectedAchievement.type.slice(1)}
                      </Badge>
                      <DialogTitle className="text-xl md:text-2xl font-bold leading-tight">
                        {selectedAchievement.title}
                      </DialogTitle>
                      <p className="text-base md:text-lg text-muted-foreground">
                        {selectedAchievement.organization}
                      </p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>{selectedAchievement.date}</span>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={closeModal}
                      className="rounded-full flex-shrink-0"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                </DialogHeader>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto">
                  <div className="p-4 md:p-6 space-y-6">
                    {/* Project Description */}
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Project Description</h3>
                      <div className="prose dark:prose-invert max-w-none">
                        {selectedAchievement.description.split('\n').map((paragraph: string, i: number) => (
                          <p key={i} className="mb-3 last:mb-0 text-sm md:text-base leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* Team Members */}
                    {selectedAchievement.teammates && selectedAchievement.teammates.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 text-lg font-semibold mb-3">
                          <Users className="h-5 w-5" />
                          <span>Team Members</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {selectedAchievement.teammates.map((teammate: string, idx: number) => (
                            <Badge key={idx} variant="secondary" className="text-sm px-3 py-1">
                              {teammate}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      {selectedAchievement.certificateUrl && (
                        <Button asChild variant="default" size="sm" className="gap-2">
                          <a
                            href={selectedAchievement.certificateUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FileCheck className="h-4 w-4" />
                            View Certificate
                            <ExternalLink className="h-3 w-3 ml-1" />
                          </a>
                        </Button>
                      )}
                      {selectedAchievement.projectUrl && (
                        <Button asChild variant="outline" size="sm" className="gap-2">
                          <a
                            href={selectedAchievement.projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Code className="h-4 w-4" />
                            View Project
                            <ExternalLink className="h-3 w-3 ml-1" />
                          </a>
                        </Button>
                      )}
                    </div>

                    {/* Photo Gallery */}
                    {(() => {
                      const allImages = getAllImages(selectedAchievement);
                      if (allImages.length === 0) return null;

                      return (
                        <div>
                          <h3 className="text-lg font-semibold mb-4">
                            Project Gallery ({allImages.length} photos)
                          </h3>
                          
                          {/* Main Image Display */}
                          <div className="mb-4">
                            <div className="relative aspect-video bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden mb-3">
                              <img
                                src={allImages[currentImageIndex].url}
                                alt={allImages[currentImageIndex].caption || "Achievement image"}
                                className="w-full h-full object-contain"
                              />
                              
                              {/* Navigation Arrows */}
                              {allImages.length > 1 && (
                                <>
                                  <button
                                    onClick={prevImage}
                                    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 rounded-full p-2 md:p-3 shadow-lg z-10 transition-colors"
                                  >
                                    <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
                                  </button>
                                  <button
                                    onClick={nextImage}
                                    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 rounded-full p-2 md:p-3 shadow-lg z-10 transition-colors"
                                  >
                                    <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
                                  </button>
                                </>
                              )}
                              
                              {/* Image Counter */}
                              <div className="absolute top-2 md:top-4 right-2 md:right-4 bg-black/70 text-white text-xs md:text-sm px-2 md:px-3 py-1 rounded-full">
                                {currentImageIndex + 1} / {allImages.length}
                              </div>
                            </div>
                            
                            {/* Image Caption */}
                            {allImages[currentImageIndex]?.caption && (
                              <div className="text-center text-muted-foreground text-sm md:text-base">
                                {allImages[currentImageIndex].caption}
                              </div>
                            )}
                          </div>

                          {/* Thumbnail Grid */}
                          {allImages.length > 1 && (
                            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
                              {allImages.map((image, index) => (
                                <button
                                  key={index}
                                  onClick={() => setCurrentImageIndex(index)}
                                  className={`relative aspect-square overflow-hidden rounded-md border-2 transition-all hover:scale-105 ${
                                    currentImageIndex === index 
                                      ? "ring-2 ring-primary border-primary" 
                                      : "border-border hover:border-primary/50"
                                  }`}
                                >
                                  <img
                                    src={image.url}
                                    alt={image.caption || `Image ${index + 1}`}
                                    className="w-full h-full object-cover"
                                  />
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })()}
                  </div>
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
}