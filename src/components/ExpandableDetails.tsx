import { useEffect, useId, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface ExpandableDetailsProps {
  label?: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

/**
 * A disclosure that animates its own height. It measures the panel with a
 * ResizeObserver so nested lazy content (images, code blocks) that arrives
 * after mount still expands to the right size.
 */
export default function ExpandableDetails({
  label = 'Details',
  defaultOpen = false,
  children,
}: ExpandableDetailsProps) {
  const [open, setOpen] = useState(defaultOpen);
  const [height, setHeight] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    // getBoundingClientRect keeps sub-pixel precision; scrollHeight rounds down
    // and can shave a hairline off the panel's bottom border.
    const update = () => setHeight(el.getBoundingClientRect().height);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [children]);

  return (
    <div className="mt-4">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={`details-panel-${id}`}
        className="inline-flex items-center gap-1.5 rounded border border-border px-2.5 py-1 text-xs font-medium text-muted transition-colors hover:border-subtle hover:text-foreground"
      >
        {label}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      {/*
        `visibility: hidden` while collapsed keeps the panel out of the tab
        order and the accessibility tree, which `height: 0` alone does not do.
        It is listed in the transition so it only flips back to hidden once the
        collapse animation has finished.
      */}
      <div
        id={`details-panel-${id}`}
        style={{ height: open ? height : 0 }}
        className={`overflow-hidden transition-[height,visibility] duration-300 ease-out ${
          open ? 'visible' : 'invisible'
        }`}
      >
        {/*
          The gap above the panel is padding on the measured element, not a
          margin on the panel itself. Margins are excluded from the measured
          height, which pushed the panel down and let `overflow-hidden` clip
          its rounded bottom corners.
        */}
        <div ref={panelRef} className="pt-3">
          <div className="rounded-xl border border-border bg-surface p-5 text-sm leading-relaxed text-muted">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
