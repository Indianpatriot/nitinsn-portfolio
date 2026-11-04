import { ArrowUpRight, MapPin, Ticket } from 'lucide-react';
import type { Project } from '@/lib/portfolio';
import { ScreenshotCollage } from '@/components/portfolio/ScreenshotCollage';

export function ProjectVisual({ visual, compact = false }: { visual: Project['visual']; compact?: boolean }) {
  if (visual === 'algolens') return <ScreenshotCollage/>;
  if (visual === 'voyager') return <div className={`project-art art-voyager ${compact ? 'art-compact' : ''}`} aria-label="Illustration of the Voyager booking interface" role="img">
    <div className="art-topline"><span className="art-brand"><Ticket size={15}/> voyager<span className="art-brand-dot">.</span></span><span>Explore routes <span className="art-sep">/</span> My bookings</span></div>
    <div className="voyager-panel"><div className="art-kicker">YOUR NEXT JOURNEY</div><div className="voyager-dest">Bengaluru <span>→</span> Mysuru</div><div className="voyager-meta"><span>Fri, 24 Oct</span><span>1 passenger</span><span className="voyager-search">Find buses <ArrowUpRight size={12}/></span></div></div>
    <div className="voyager-bottom"><div><span className="art-kicker">AVAILABLE SEATS</span><div className="seat-grid">{Array.from({length: 20}, (_, i) => <i key={i} className={i === 5 || i === 10 || i === 14 ? 'seat selected' : i === 2 || i === 9 || i === 17 ? 'seat unavailable' : 'seat'} />)}</div></div><div className="voyager-ticket"><span className="art-kicker">BOOKING SUMMARY</span><strong>Seat 08, 11, 16</strong><small>3 seats selected</small><span className="ticket-rule"/><span className="ticket-confirm">Continue to booking <ArrowUpRight size={12}/></span></div></div>
  </div>;
  return <div className={`project-art art-playarena ${compact ? 'art-compact' : ''}`} aria-label="Illustration of the PlayArena booking interface" role="img">
    <div className="art-topline"><span className="art-brand"><span className="arena-symbol">✳</span> playarena</span><span>Discover <span className="art-sep">/</span> Bookings</span></div>
    <div className="arena-heading"><div><span className="art-kicker">FIND YOUR SPACE</span><strong>Game on, your way.</strong></div><span className="arena-location"><MapPin size={13}/> Bengaluru</span></div>
    <div className="arena-image"><div className="arena-field"><div className="field-middle"/><div className="field-circle"/><div className="field-box left"/><div className="field-box right"/></div><div className="arena-image-label"><span>FEATURED VENUE</span><strong>Find a place to play <ArrowUpRight size={14}/></strong></div></div>
    <div className="arena-days"><span>SELECT A TIME</span><b>Mon 21</b><b className="active-day">Tue 22</b><b>Wed 23</b><b>Thu 24</b></div>
    <div className="arena-slots"><span>06:00 AM</span><span className="active-slot">07:00 AM</span><span>08:00 AM</span><span>09:00 AM</span></div>
  </div>;
}
