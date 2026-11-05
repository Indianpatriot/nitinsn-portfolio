import { useState } from 'react';
import { ScreenshotLightbox } from '@/components/portfolio/ScreenshotLightbox';
import type { Shot } from '@/lib/screenshots';

export function ScreenshotCollage({ title, shots }: { title: string; shots: Shot[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return <>
    <figure className="shot-frame">
      <div className="shot-frame-bar">
        <span className="terminal-controls" aria-hidden="true"><i/><i/><i/></span>
        <span className="shot-frame-title">{title}</span>
      </div>
      <div className="shot-grid">
        {shots.map((shot, i) => <figure className="shot-item" key={shot.src}>
          <button type="button" className="shot-tile" onClick={() => setOpenIndex(i)} aria-label={`Enlarge screenshot ${i + 1} of ${shots.length}`}>
            <img src={shot.src} alt={shot.alt} loading="lazy"/>
          </button>
        </figure>)}
      </div>
    </figure>
    <ScreenshotLightbox shots={shots} index={openIndex} onIndexChange={setOpenIndex}/>
  </>;
}
