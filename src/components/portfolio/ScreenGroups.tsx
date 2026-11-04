import { useState } from 'react';
import { ScreenshotLightbox } from '@/components/portfolio/ScreenshotLightbox';
import type { ScreenGroup, Shot } from '@/lib/screenshots';

export function ScreenGroups({ groups }: { groups: ScreenGroup[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const allShots = groups.flatMap(group => group.shots);

  return <section className="case-screens">
    <div className="case-section-intro"><span className="eyebrow">THE INTERFACE</span><h2>Screens<span className="hero-period">.</span></h2><p>Key screens, grouped by the flow they belong to.</p></div>
    <div className="screen-groups">{groups.map(group => <div className="screen-group" key={group.title}>
      <h3>{group.title}</h3>
      <div className={`screen-grid${group.numbered ? ' screen-grid-numbered' : ''}`}>{group.shots.map((shot, i) => <ScreenItem key={shot.src} shot={shot} step={group.numbered ? i + 1 : undefined} onOpen={() => setOpenIndex(allShots.indexOf(shot))}/>)}</div>
    </div>)}</div>
    <ScreenshotLightbox shots={allShots} index={openIndex} onIndexChange={setOpenIndex}/>
  </section>;
}

function ScreenItem({ shot, step, onOpen }: { shot: Shot; step?: number; onOpen: () => void }) {
  return <figure className="screen-item">
    <button type="button" className="shot-tile" onClick={onOpen} aria-label={`Enlarge: ${shot.alt}`}>
      <img src={shot.src} alt={shot.alt} loading="lazy"/>
    </button>
    {(step !== undefined || shot.caption) && <figcaption>
      {step !== undefined && <span className="screen-step">{String(step).padStart(2, '0')}</span>}
      {shot.caption}
    </figcaption>}
  </figure>;
}
