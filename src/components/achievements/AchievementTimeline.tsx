import React from "react";
import { Achievement } from "@/types";
import { AchievementCard } from "./AchievementCard";

interface AchievementTimelineProps {
  achievements: Achievement[];
}

export function AchievementTimeline({ achievements }: AchievementTimelineProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {achievements.map((item) => (
        <AchievementCard key={item.id} achievement={item} />
      ))}
    </div>
  );
}
