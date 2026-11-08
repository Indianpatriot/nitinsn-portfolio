import { useState } from "react";
import { Play } from "lucide-react";
import { ScreenshotLightbox } from "@/components/portfolio/ScreenshotLightbox";
import type { Shot } from "@/lib/screenshots";

type PlayArenaShot = Shot & {
  width: number;
  height: number;
  captionTitle: string;
  captionText: string;
};

const videoSource = "https://drive.google.com/file/d/1oWxflRjwcKd95nIYVulaF8kQG482ZOww/preview";
const videoLink = "https://drive.google.com/file/d/1oWxflRjwcKd95nIYVulaF8kQG482ZOww/view";

const shots: PlayArenaShot[] = [
  {
    src: "/assets/playarena/image.png",
    alt: "Separate PlayArena sign-in screens for players and venue owners",
    captionTitle: "Role-based login",
    captionText:
      "Separate sign-in for players and venue owners, with each role sent to its own dashboard.",
    width: 631,
    height: 346,
  },
  {
    src: "/assets/playarena/image copy.png",
    alt: "PlayArena player dashboard showing venue discovery, sports, dates, and available booking slots",
    captionTitle: "Player dashboard",
    captionText:
      "Discover venues, pick a date and time slot, and see live slot availability before booking.",
    width: 696,
    height: 515,
  },
  {
    src: "/assets/playarena/image copy 2.png",
    alt: "PlayArena owner dashboard showing booking analytics, slot information, and player feedback ratings",
    captionTitle: "Owner dashboard",
    captionText:
      "Venue owners manage slots and bookings, with analytics driven by player feedback and ratings.",
    width: 617,
    height: 457,
  },
  {
    src: "/assets/playarena/image copy 3.png",
    alt: "PlayArena checkout screen beside a confirmation ticket showing the booked game and payment details",
    captionTitle: "Checkout and ticket",
    captionText:
      "Review the booked slot, complete a demo payment, and receive a confirmation ticket instantly.",
    width: 633,
    height: 377,
  },
];

export function PlayArenaMedia({ compact = false }: { compact?: boolean }) {
  const [showVideo, setShowVideo] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const lightboxShots: Shot[] = shots.map(({ src, alt }) => ({ src, alt }));

  return (
    <div className={`playarena-media${compact ? " playarena-media-compact" : ""}`}>
      <div className="playarena-video-wrap">
        {showVideo ? (
          <iframe
            className="playarena-video"
            src={videoSource}
            title="PlayArena demo video"
            loading="lazy"
            allow="fullscreen"
          />
        ) : (
          <button
            type="button"
            className="playarena-poster"
            onClick={() => setShowVideo(true)}
            aria-label="Play PlayArena demo video"
          >
            <img
              src={shots[1].src}
              alt="PlayArena demo video preview"
              width={shots[1].width}
              height={shots[1].height}
            />
            <span className="playarena-play">
              <Play size={20} fill="currentColor" />
            </span>
          </button>
        )}
      </div>
      <a
        className="playarena-drive-link"
        href={videoLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        Watch on Google Drive
      </a>
      <div className="playarena-gallery" aria-label="PlayArena screenshots">
        {shots.map((shot, index) => (
          <figure className="playarena-gallery-item" key={shot.src}>
            <button
              type="button"
              className="playarena-gallery-button"
              onClick={() => setOpenIndex(index)}
              aria-label={`Open ${shot.captionTitle}`}
            >
              <img
                src={shot.src}
                srcSet={`${encodeURI(shot.src)} ${shot.width}w`}
                alt={shot.alt}
                width={shot.width}
                height={shot.height}
                loading="lazy"
              />
            </button>
            <figcaption>
              <strong>{shot.captionTitle}</strong> {shot.captionText}
            </figcaption>
          </figure>
        ))}
      </div>
      <ScreenshotLightbox shots={lightboxShots} index={openIndex} onIndexChange={setOpenIndex} />
    </div>
  );
}
