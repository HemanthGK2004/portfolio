import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { achievements } from "@/lib/data";
import { ArrowLeft, Calendar, Code, FileCheck, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return achievements.map((achievement) => ({
    slug: achievement.slug,
  }));
}

export default function AchievementDetail({ params }: { params: { slug: string } }) {
  const achievement = achievements.find((a) => a.slug === params.slug);
  if (!achievement) return notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Back Button */}
      <Link 
        href="/#achievements" 
        className="flex items-center text-sm text-muted-foreground mb-6 hover:underline"
        scroll={false}
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Achievements
      </Link>

      {/* Title & Meta */}
      <h1 className="text-3xl md:text-4xl font-bold mb-2">{achievement.title}</h1>
      <p className="text-muted-foreground mb-4">{achievement.organization}</p>
      <div className="flex items-center text-sm text-muted-foreground mb-2">
        <Calendar className="h-4 w-4 mr-2" />
        {achievement.date}
      </div>

      {/* Description */}
      <p className="mb-6">{achievement.description}</p>

      {/* Team Members */}
      {achievement.teammates && achievement.teammates.length > 0 && (
        <div className="mb-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
            <Users className="h-4 w-4" />
            <span>Team Members:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {achievement.teammates.map((teammate, idx) => (
              <Badge key={idx} variant="secondary">
                {teammate}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* Links */}
      <div className="flex gap-4 mb-6">
        {achievement.certificateUrl && (
          <Button asChild variant="outline" size="sm">
            <a href={achievement.certificateUrl} target="_blank" rel="noopener noreferrer">
              <FileCheck className="h-4 w-4 mr-1" />
              View Certificate
            </a>
          </Button>
        )}
        {achievement.projectUrl && (
          <Button asChild variant="outline" size="sm">
            <a href={achievement.projectUrl} target="_blank" rel="noopener noreferrer">
              <Code className="h-4 w-4 mr-1" />
              View Project
            </a>
          </Button>
        )}
      </div>

      {/* Certificate Image */}
      {achievement.certificateUrl && (
        <div className="mt-10">
          <Image
            src={achievement.certificateUrl}
            alt="Certificate"
            width={800}
            height={600}
            className="rounded-md shadow max-w-full h-auto"
            priority
          />
        </div>
      )}
    </div>
  );
}