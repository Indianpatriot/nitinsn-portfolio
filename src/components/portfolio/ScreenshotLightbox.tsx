import { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import type { Shot } from '@/lib/screenshots';

const SWIPE_THRESHOLD_PX = 48;

export function ScreenshotLightbox({ shots, index, onIndexChange }: { shots: Shot[]; index: number | null; onIndexChange: (index: number | null) => void }) {
  const touchStartX = useRef<number | null>(null);
  const current = index === null ? null : shots[index];

  useEffect(() => {
    if (index === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') onIndexChange((index + 1) % shots.length);
      if (event.key === 'ArrowLeft') onIndexChange((index - 1 + shots.length) % shots.length);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [index, shots.length, onIndexChange]);

  return <Dialog open={current !== null} onOpenChange={open => { if (!open) onIndexChange(null); }}>
    {current && index !== null && <DialogContent
      className="w-[96vw] max-w-[96vw] p-4 sm:max-w-[min(96vw,1200px)]"
      onTouchStart={event => { touchStartX.current = event.touches[0].clientX; }}
      onTouchEnd={event => {
        const startX = touchStartX.current;
        touchStartX.current = null;
        if (startX === null) return;
        const deltaX = event.changedTouches[0].clientX - startX;
        if (Math.abs(deltaX) < SWIPE_THRESHOLD_PX) return;
        onIndexChange(deltaX < 0 ? (index + 1) % shots.length : (index - 1 + shots.length) % shots.length);
      }}
    >
      <DialogTitle className="sr-only">Screenshot {index + 1} of {shots.length}</DialogTitle>
      <img src={current.src} alt={current.alt} className="shot-lightbox-img"/>
      <div className="shot-lightbox-controls">
        <button type="button" onClick={() => onIndexChange((index - 1 + shots.length) % shots.length)} aria-label="Previous screenshot"><ChevronLeft size={18}/></button>
        <span>{index + 1} / {shots.length}</span>
        <button type="button" onClick={() => onIndexChange((index + 1) % shots.length)} aria-label="Next screenshot"><ChevronRight size={18}/></button>
      </div>
    </DialogContent>}
  </Dialog>;
}
