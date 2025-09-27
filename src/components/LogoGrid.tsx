import { Fragment, type CSSProperties } from "react";
import { cn } from "@/lib/utils";
import type { LogoItem } from "@/types/logo";

/**
 * Responsive grid that presents technology logos inside consistent icon tiles.
 */
export type LogoGridProps = {
  /** Section heading shown above the grid. */
  title?: string;
  /** Logo entries to render in the grid layout. */
  items: LogoItem[];
  /** Maximum number of items to display before truncating. */
  maxVisible?: number;
  /** Optional style extension hook for the wrapper element. */
  className?: string;
};

const tileBaseClass =
  "group relative flex h-full flex-col justify-between rounded-2xl border border-white/5 bg-white/2 p-3 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 hover:bg-white/4";

const iconWrapperClass =
  "grid place-items-center size-14 rounded-xl bg-slate-900/50 transition";

const iconClass =
  "size-8 transition duration-300 filter grayscale group-hover:grayscale-0 group-hover:saturate-150";

/**
 * Renders a single logo tile either as a link or as a static focusable element.
 */
const LogoTile = ({ item }: { item: LogoItem }) => {
  const { Icon, imgSrc } = item;
  const style = item.brandColorHex
    ? ({
        ["--logo-brand" as const]: item.brandColorHex,
      } as CSSProperties)
    : undefined;

  const content = (
    <Fragment>
      <div className={iconWrapperClass}>
        {Icon ? (
          <Icon
            aria-hidden
            className={cn(
              iconClass,
              "text-slate-200/80 group-hover:text-white group-hover:[color:var(--logo-brand)] group-hover:[fill:var(--logo-brand)]"
            )}
          />
        ) : imgSrc ? (
          <img
            alt=""
            src={imgSrc}
            className={cn(iconClass, "object-contain")}
            loading="lazy"
          />
        ) : (
          <span className="text-xs text-slate-400">{item.name.charAt(0)}</span>
        )}
      </div>
      <p className="mt-3 truncate text-xs text-slate-300/80 transition group-hover:text-white">
        {item.name}
      </p>
    </Fragment>
  );

  if (item.href) {
    const isExternal = /^https?:/i.test(item.href);
    return (
      <a
        aria-label={item.name}
        title={item.name}
        href={item.href}
        className={tileBaseClass}
        style={style}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <div
      aria-label={item.name}
      title={item.name}
      tabIndex={0}
      role="img"
      className={tileBaseClass}
      style={style}
    >
      {content}
    </div>
  );
};

/**
 * Grid-based presentation of technology logos with consistent sizing and hover styling.
 */
const LogoGrid = ({ title, items, maxVisible = 12, className }: LogoGridProps) => {
  const visibleItems = maxVisible ? items.slice(0, maxVisible) : items;
  const showHeader = Boolean(title) || items.length > visibleItems.length;

  return (
    <section className={cn("space-y-4", className)}>
      {showHeader && (
        <header className="flex items-center justify-between">
          {title ? (
            <h3 className="text-sm font-medium text-slate-300">{title}</h3>
          ) : (
            <span aria-hidden className="text-sm font-medium text-slate-300" />
          )}
          {items.length > visibleItems.length && (
            <span className="text-xs text-slate-300/70">
              Showing {visibleItems.length} of {items.length}
            </span>
          )}
        </header>
      )}
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
        {visibleItems.map((item) => (
          <LogoTile key={item.name} item={item} />
        ))}
      </div>
    </section>
  );
};

export default LogoGrid;
