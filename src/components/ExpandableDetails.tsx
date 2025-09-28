// src/components/ExpandableDetails.tsx
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

interface ExpandableDetailsProps {
  label?: string;
  defaultOpen?: boolean;
  className?: string;
  size?: "sm" | "md";
  children: React.ReactNode;
}

export default function ExpandableDetails({
  label = "Details",
  defaultOpen = false,
  className = "",
  size = "sm", 
  children,
}: ExpandableDetailsProps) {
  const [open, setOpen] = useState(defaultOpen);
  const [height, setHeight] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    if (!panelRef.current) return;
    const el = panelRef.current;
    const update = () => setHeight(el.scrollHeight);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [children]);

  const sizeClasses =
    size === "sm" ? "px-3 py-1.5 text-xs" : "px-3.5 py-2 text-sm";

  return (
    <div className={`mt-3 ${className}`}>
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); setOpen(v => !v); }} // ← güvenli
        aria-expanded={open}
        aria-controls={`details-panel-${id}`}
        className={`
          inline-flex items-center gap-2 rounded-lg border
          ${sizeClasses}
          border-steel-blue/40 bg-midnight/50 hover:bg-midnight/70
          text-pearl transition-all duration-300
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ui-blue/60
        `}
      >
        {label}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      <div
        id={`details-panel-${id}`}
        style={{ height: open ? height : 0 }}
        className="overflow-hidden transition-[height] duration-400 ease-out
                   rounded-lg border border-steel-blue/30 bg-midnight/40 mt-2"
        aria-hidden={!open}
      >
        <div
          ref={panelRef}
          className="p-4 sm:p-5 text-sm text-cool-gray"
          style={{
            opacity: open ? 1 : 0,
            transform: open ? "translateY(0)" : "translateY(-4px)",
            transition: "opacity 300ms, transform 300ms",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
