export interface Achievement {
  title: string;
  slug: string;
  organization: string;
  date: string;
  description: string;
  teammates?: string[];
  type: "hackathon" | "certification" | "award" | "competition";
  certificateUrl?: string;
  projectUrl?: string;
  // Enhanced image fields
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

export const achievements: Achievement[] = [
  {
    title: "Winner - AI4-Community",
    slug: "ai4-community-winner",
    organization: "Acharya Institute of Technology",
    date: "May 2025",
    description:
      "Secured 1st place in the AI4-Community Hackathon by building an AI-based water monitoring and chatbot system. The solution featured intelligent issue classification, real-time analytics, and multilingual support.",
    type: "hackathon",
    certificateUrl: "/certificates/AI4-community.jpg",
    teammates: ["Hemanth", "Punith B", "Sameer C", "Jeevan H S"],
    images: [
      {
        url: "/projects/home-water.png",
        caption: "Dashboard interface of our solution"
      },
      {
        url: "/projects/log-in-water.png",
        caption: "Water quality monitoring visualization"
      },
        {
            url: "/projects/main-water.png",
            caption: "Chatbot interface for user queries"
        }
    ],
    teamPhotos: [
      {
        url: "/team/ai4-team.jpg",
        caption: "Our team at the award ceremony"
      }
    ],
    eventPhotos: [
      {
        url: "/events/ai4-event.jpg",
        caption: "Presentation to the judges"
      }
    ]
  },
  {
    title: "Top 20 - Hack Kshetra '24",
    slug: "hack-kshetra-top-20",
    organization: "VVCE Mysore",
    date: "April 2024",
    description:
      "Ranked in the top 20 out of 100+ teams by designing a crowd-sourced platform for reporting campus issues using geotagged submissions and live status tracking.",
    type: "hackathon",
    certificateUrl: "/certificates/Hack_Kshetra_2024.png",
    teammates: ["Hemanth", "Teammate A", "Teammate B"],
    images: [
      {
        url: "/projects/hack-kshetra-1.jpg",
        caption: "Mobile app interface"
      }
    ],
    eventPhotos: [
      {
        url: "/events/hack-kshetra-event.jpg",
        caption: "Team working at the hackathon"
      }
    ]
  },
  {
    title: "Top 10 - Fin-A-Thon 2024",
    slug: "fin-a-thon-top-10",
    organization: "Puttannaiah Foundation Mandya",
    date: "March 2024",
    description:
      "Developed a decentralized finance dashboard using blockchain for transparent fund tracking and predictive analytics. Ranked in the top 10 among 60+ teams.",
    type: "hackathon",
    certificateUrl: "/certificates/FIN-athon_Mandya.png",
    teammates: ["Hemanth", "Teammate X", "Teammate Y"],
    images: [
      {
        url: "/projects/fin-a-thon-1.jpg",
        caption: "Dashboard showing financial analytics"
      },
      {
        url: "/projects/fin-a-thon-2.jpg",
        caption: "Blockchain transaction view"
      }
    ]
  },
  {
    title: "Participant - CICADA 24-Hour Hackathon",
    slug: "cicada-24-hour-hackathon",
    organization: "Atria Institute of Technology",
    date: "February 2024",
    description:
      "Built a prototype for an automated waste management app under 24 hours, integrating AI for waste detection and optimized collection routes.",
    type: "hackathon",
    certificateUrl: "/certificates/Atria.jpg",
    teammates: ["Hemanth", "Teammate R", "Teammate S"],
    images: [
      {
        url: "/projects/cicada-1.jpg",
        caption: "Waste detection AI interface"
      }
    ],
    teamPhotos: [
      {
        url: "/team/cicada-team.jpg",
        caption: "Our team during development"
      }
    ]
  },
  {
    title: "Top 15 - Vikasya 2025",
    slug: "vikasya-2025-top-15",
    organization: "RV University Bengaluru",
    date: "January 2025",
    description:
      "Designed a sustainability-focused mobile app that connects eco-conscious consumers with verified green products and local recycling centers.",
    type: "hackathon",
    certificateUrl: "/certificates/Vikasya.jpg",
    teammates: ["Hemanth", "Teammate M", "Teammate N"],
    images: [
      {
        url: "/projects/vikasya-1.jpg",
        caption: "App product listing screen"
      },
      {
        url: "/projects/vikasya-2.jpg",
        caption: "Recycling center locator"
      }
    ],
    eventPhotos: [
      {
        url: "/events/vikasya-event.jpg",
        caption: "Demonstration to attendees"
      }
    ]
  }
];

export function getAchievementBySlug(slug: string): Achievement | undefined {
  return achievements.find((achievement) => achievement.slug === slug);
}