import { useCallback, useEffect, useId, useRef, type MouseEventHandler } from "react";
import type { LogoItem } from "@/types/logo";
import LogoGrid from "./LogoGrid";

/**
 * Accessible modal dialog that reveals the full logo collection.
 */
export type LogoModalProps = {
  /** Controls the modal visibility. */
  open: boolean;
  /** Callback triggered when the modal should close. */
  onClose: () => void;
  /** Title displayed in the modal header. */
  title: string;
  /** Complete list of logo entries to render. */
  items: LogoItem[];
};

const focusableSelector =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

const LogoModal = ({ open, onClose, title, items }: LogoModalProps) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const getFocusable = useCallback(() => {
    const dialog = dialogRef.current;
    if (!dialog) return [] as HTMLElement[];
    return Array.from(dialog.querySelectorAll<HTMLElement>(focusableSelector));
  }, []);

  useEffect(() => {
    if (!open) return;

    previousFocusRef.current = document.activeElement as HTMLElement | null;
    const dialog = dialogRef.current;

    const focusables = getFocusable();
    (focusables[0] ?? dialog)?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key === "Tab") {
        const currentFocusables = getFocusable();
        if (!currentFocusables.length) {
          event.preventDefault();
          return;
        }
        const first = currentFocusables[0];
        const last = currentFocusables[currentFocusables.length - 1];
        if (event.shiftKey) {
          if (document.activeElement === first) {
            event.preventDefault();
            last.focus();
          }
        } else if (document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    const bodyStyle = document.body.style;
    const previousOverflow = bodyStyle.overflow;
    bodyStyle.overflow = "hidden";

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      bodyStyle.overflow = previousOverflow;
      previousFocusRef.current?.focus?.();
    };
  }, [getFocusable, onClose, open]);

  if (!open) {
    return null;
  }

  const handleOverlayMouseDown: MouseEventHandler<HTMLDivElement> = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onMouseDown={handleOverlayMouseDown}
      className="fixed inset-0 z-50 grid place-items-center bg-slate-950/80 p-6 backdrop-blur"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className="relative w-full max-w-5xl rounded-3xl border border-white/10 bg-slate-950/95 p-6 shadow-2xl outline-none"
      >
        <header className="mb-6 flex items-start justify-between gap-4">
          <div className="space-y-1">
            <h2 id={titleId} className="text-lg font-semibold text-white">
              {title}
            </h2>
            <p className="text-sm text-slate-300/80">Browse the complete toolset.</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
            aria-label="Close dialog"
          >
            <span aria-hidden className="text-lg leading-none">×</span>
          </button>
        </header>
        <LogoGrid title={undefined} items={items} maxVisible={undefined} className="space-y-6" />
      </div>
    </div>
  );
};

export default LogoModal;
