import { type CSSProperties } from "react";
import { cn } from "@/lib/utils";
import type { LogoItem } from "@/types/logo";

/**
 * Inline chip list used for more text-dense layouts.
 */
export type LogoChipsProps = {
  /** Logo entries rendered as compact chips. */
  items: LogoItem[];
  /** Optional style extension hook for the chip container. */
  className?: string;
};

const chipBaseClass =
  "group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-3 py-1.5 text-xs text-slate-200 transition hover:bg-white/6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20";

const chipIconClass =
  "size-5 shrink-0 transition duration-300 filter grayscale group-hover:grayscale-0 group-hover:saturate-150";

/**
 * Displays logo metadata inside pill-shaped chips.
 */
const LogoChips = ({ items, className }: LogoChipsProps) => (
  <div className={cn("flex flex-wrap gap-2", className)}>
    {items.map((item) => {
      const Icon = item.Icon;
      const style = item.brandColorHex
        ? ({
            ["--logo-brand" as const]: item.brandColorHex,
          } as CSSProperties)
        : undefined;

      const content = (
        <span className="inline-flex items-center gap-2" style={style}>
          <span className="grid size-7 place-items-center rounded-full bg-slate-900/50">
            {Icon ? (
              <Icon
                aria-hidden
                className={cn(
                  chipIconClass,
                  "text-slate-200/80 group-hover:text-white group-hover:[color:var(--logo-brand)] group-hover:[fill:var(--logo-brand)]"
                )}
              />
            ) : item.imgSrc ? (
              <img
                alt=""
                src={item.imgSrc}
                loading="lazy"
                className={cn(chipIconClass, "object-contain")}
              />
            ) : (
              <span className="text-[10px] text-slate-400">{item.name.charAt(0)}</span>
            )}
          </span>
          <span className="truncate text-xs text-slate-200 transition group-hover:text-white">{item.name}</span>
        </span>
      );

      if (item.href) {
        const isExternal = /^https?:/i.test(item.href);
        return (
          <a
            key={item.name}
            aria-label={item.name}
            title={item.name}
            href={item.href}
            className={chipBaseClass}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noreferrer" : undefined}
          >
            {content}
          </a>
        );
      }

      return (
        <span
          key={item.name}
          aria-label={item.name}
          title={item.name}
          className={chipBaseClass}
          tabIndex={0}
          role="img"
        >
          {content}
        </span>
      );
    })}
  </div>
);

export default LogoChips;
