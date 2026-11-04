import { ArrowUpRight, MapPin } from 'lucide-react';
import type { Project } from '@/lib/portfolio';
import { ScreenshotCollage } from '@/components/portfolio/ScreenshotCollage';
import { algolensShots, voyagerCardShots } from '@/lib/screenshots';

export function ProjectVisual({ visual, compact = false }: { visual: Project['visual']; compact?: boolean }) {
  if (visual === 'algolens') return <ScreenshotCollage title="AlgoLens" shots={algolensShots}/>;
  if (visual === 'voyager') return <ScreenshotCollage title="Voyager" shots={voyagerCardShots}/>;
  return <div className={`project-art art-playarena ${compact ? 'art-compact' : ''}`} aria-label="Illustration of the PlayArena booking interface" role="img">
    <div className="art-topline"><span className="art-brand"><span className="arena-symbol">✳</span> playarena</span><span>Discover <span className="art-sep">/</span> Bookings</span></div>
    <div className="arena-heading"><div><span className="art-kicker">FIND YOUR SPACE</span><strong>Game on, your way.</strong></div><span className="arena-location"><MapPin size={13}/> Bengaluru</span></div>
    <div className="arena-image"><div className="arena-field"><div className="field-middle"/><div className="field-circle"/><div className="field-box left"/><div className="field-box right"/></div><div className="arena-image-label"><span>FEATURED VENUE</span><strong>Find a place to play <ArrowUpRight size={14}/></strong></div></div>
    <div className="arena-days"><span>SELECT A TIME</span><b>Mon 21</b><b className="active-day">Tue 22</b><b>Wed 23</b><b>Thu 24</b></div>
    <div className="arena-slots"><span>06:00 AM</span><span className="active-slot">07:00 AM</span><span>08:00 AM</span><span>09:00 AM</span></div>
  </div>;
}
