import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import algorithmIdentified from '@/assets/images/algolens-collage/image copy.png';
import complexityReport from '@/assets/images/algolens-collage/image.png';
import workspace from '@/assets/images/algolens-collage/image copy 2.png';

type Shot = { src: string; alt: string; caption?: string };

const shots: Shot[] = [
  {
    src: workspace,
    alt: 'AlgoLens workspace with a Python binary search function on the left and a step-by-step visualization of the search on the right',
  },
  {
    src: complexityReport,
    alt: 'AlgoLens Complexity Report tab showing O(log n) time and O(1) space estimates with high confidence, the reasoning behind them, and extracted structural features',
  },
  {
    src: algorithmIdentified,
    alt: 'AlgoLens Algorithm Identified tab showing Binary Search detected with high confidence and the features that drove the classification',
  },
];

const step = (index: number, delta: number) => (index + delta + shots.length) % shots.length;

export function ScreenshotCollage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
      const delta = event.key === 'ArrowRight' ? 1 : -1;
      setOpenIndex(index => (index === null ? null : step(index, delta)));
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const current = openIndex === null ? null : shots[openIndex];

  return <>
    <figure className="shot-frame">
      <div className="shot-frame-bar">
        <span className="terminal-controls" aria-hidden="true"><i/><i/><i/></span>
        <span className="shot-frame-title">AlgoLens</span>
      </div>
      <div className="shot-grid">
        {shots.map((shot, i) => <figure className="shot-item" key={shot.src}>
          <button type="button" className="shot-tile" onClick={() => setOpenIndex(i)} aria-label={`Enlarge screenshot ${i + 1} of ${shots.length}`}>
            <img src={shot.src} alt={shot.alt} loading="lazy"/>
          </button>
          {shot.caption && <figcaption>{shot.caption}</figcaption>}
        </figure>)}
      </div>
    </figure>

    <Dialog open={current !== null} onOpenChange={open => { if (!open) setOpenIndex(null); }}>
      {current && openIndex !== null && <DialogContent
        className="w-[96vw] max-w-[96vw] p-4 sm:max-w-[min(96vw,1200px)]"
        onTouchStart={event => { touchStartX.current = event.touches[0].clientX; }}
        onTouchEnd={event => {
          const startX = touchStartX.current;
          touchStartX.current = null;
          if (startX === null) return;
          const deltaX = event.changedTouches[0].clientX - startX;
          if (Math.abs(deltaX) > 48) setOpenIndex(index => (index === null ? null : step(index, deltaX < 0 ? 1 : -1)));
        }}
      >
        <DialogTitle className="sr-only">AlgoLens screenshot {openIndex + 1} of {shots.length}</DialogTitle>
        <img src={current.src} alt={current.alt} className="shot-lightbox-img"/>
        <div className="shot-lightbox-controls">
          <button type="button" onClick={() => setOpenIndex(step(openIndex, -1))} aria-label="Previous screenshot"><ChevronLeft size={18}/></button>
          <span>{openIndex + 1} / {shots.length}</span>
          <button type="button" onClick={() => setOpenIndex(step(openIndex, 1))} aria-label="Next screenshot"><ChevronRight size={18}/></button>
        </div>
      </DialogContent>}
    </Dialog>
  </>;
}
