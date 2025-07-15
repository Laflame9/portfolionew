"use client";
import dynamic from "next/dynamic";

const RadialOrbitalTimeline = dynamic(() => import("@/components/ui/radial-orbital-timeline"), {
  ssr: false,
});

export default function RadialOrbitalTimelineClient({ timelineData }: { timelineData: TimelineItem[] }) {
  return <RadialOrbitalTimeline timelineData={timelineData} />;
}