import type { Project } from "@/lib/portfolio";
import { PlayArenaMedia } from "@/components/portfolio/PlayArenaMedia";
import { ScreenshotCollage } from "@/components/portfolio/ScreenshotCollage";
import { algolensShots, voyagerCardShots } from "@/lib/screenshots";

export function ProjectVisual({
  visual,
  compact = false,
}: {
  visual: Project["visual"];
  compact?: boolean;
}) {
  if (visual === "algolens") return <ScreenshotCollage title="AlgoLens" shots={algolensShots} />;
  if (visual === "voyager") return <ScreenshotCollage title="Voyager" shots={voyagerCardShots} />;
  return <PlayArenaMedia compact={compact} />;
}
