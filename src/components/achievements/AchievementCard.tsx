import React from "react";
import { Achievement } from "@/types";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { GraduationCap, Award, Milestone, ExternalLink } from "lucide-react";

interface AchievementCardProps {
  achievement: Achievement;
}

export function AchievementCard({ achievement }: AchievementCardProps) {
  const getIcon = () => {
    switch (achievement.category) {
      case "Education":
        return <GraduationCap className="w-5 h-5 text-blue-500" />;
      case "Certification":
        return <Award className="w-5 h-5 text-amber-500" />;
      case "Milestone":
      default:
        return <Milestone className="w-5 h-5 text-emerald-500" />;
    }
  };

  return (
    <Card hoverEffect className="p-6 flex flex-col justify-between">
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <div className="p-2.5 rounded-lg border border-(--border) bg-(--bg-elevated)">
            {getIcon()}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-(--text-secondary)">
              {achievement.date}
            </span>
            <Badge variant="accent" size="sm">
              {achievement.category}
            </Badge>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-(--text-primary)">
            {achievement.title}
          </h3>
          <div className="text-xs font-medium text-(--accent) mt-0.5">
            {achievement.issuer}
          </div>
        </div>

        <p className="text-sm text-(--text-secondary) leading-relaxed">
          {achievement.description}
        </p>
      </div>

      {achievement.credentialUrl && (
        <div className="pt-4 mt-2 border-t border-(--border)">
          <a
            href={achievement.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-(--accent) hover:underline"
          >
            <span>Verify Credential</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      )}
    </Card>
  );
}
