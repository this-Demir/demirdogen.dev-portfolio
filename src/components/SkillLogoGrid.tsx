import React from "react";

/* /src/assets/tech-logos/** içindeki svg/png/webp dosyaları otomatik toplanır */
const ALL_LOGOS = import.meta.glob("../assets/tech-logos/**/*.{svg,png,webp}", {
  eager: true,
  as: "url",
}) as Record<string, string>;

export type SkillLogoItem = {
  name: string;
  query?: string | string[];
  href?: string;
};

interface SkillLogoGridProps {
  items: SkillLogoItem[];
  /** Her satırda en fazla kaç öğe? (Tailwind için 1–6 arası sabit sınıflar) */
  perRow?: 1 | 2 | 3 | 4 | 5 | 6;
  /** Tile boyutu */
  size?: "sm" | "md" | "lg";
  maxVisible?: number;
  className?: string;
  showCaption?: boolean;
}

const normalize = (s: string) => s.toLowerCase().replace(/[^a-z0-9+.-]/g, "");
const ALIASES: Record<string, string[]> = {
  ".net": [".net", "dotnet", "net"],
  "rest apis": ["rest", "openapi", "swagger", "api"],
  "tailwind css": ["tailwind", "tailwindcss"],
  "selenium webdriver": ["selenium", "webdriver"],
  "junit 5": ["junit5", "junit"],
  "black-box testing": ["testing", "qa"],
};

function resolveLogoUrl(query: string | string[] | undefined, fallback: string) {
  const arr = Array.isArray(query) ? query : query ? [query] : [fallback];
  const expanded = arr.flatMap((q) => {
    const key = q.toLowerCase();
    return [q, ...(ALIASES[key] ?? [])];
  });
  const keys = Object.keys(ALL_LOGOS);
  for (const raw of expanded) {
    const q = normalize(raw);
    const hit = keys.find((k) => normalize(k).includes(q));
    if (hit) return ALL_LOGOS[hit];
  }
  return null;
}

const COL_MAP: Record<number, string> = {
  1: "grid grid-cols-1",
  2: "grid grid-cols-2",
  3: "grid grid-cols-3",
  4: "grid grid-cols-4",
  5: "grid grid-cols-5",
  6: "grid grid-cols-6",
};

const SkillLogoGridBase: React.FC<SkillLogoGridProps> = ({
  items,
  perRow = 3,              // ← her satırda en fazla 3
  size = "lg",              // ← daha büyük ve ferah
  maxVisible,
  className = "",
  showCaption = true,
}) => {
  const tileSize =
    size === "sm" ? "size-12" : size === "md" ? "size-14" : "size-16"; // 48 / 56 / 64px
  const iconWH = size === "sm" ? 28 : size === "md" ? 32 : 36;
  const itemWidth = size === "lg" ? "w-[124px]" : size === "md" ? "w-[108px]" : "w-[96px]";
  const list = maxVisible ? items.slice(0, maxVisible) : items;

  return (
    <ul
      className={`
        ${COL_MAP[perRow] ?? COL_MAP[3]}
        justify-center content-center justify-items-center
        gap-x-6 gap-y-7
        ${className}
      `}
    >
      {list.map((it) => {
        const url = resolveLogoUrl(it.query, it.name);
        const Wrapper: React.ElementType = it.href ? "a" : "div";
        return (
          <li key={`${it.name}-${it.href ?? ""}`} className="list-none">
            <Wrapper
              href={it.href}
              target={it.href ? "_blank" : undefined}
              rel={it.href ? "noreferrer noopener" : undefined}
              aria-label={it.name}
              title={it.name}
              className={`
                group flex flex-col items-center ${itemWidth}
                rounded-xl p-2.5
                transition hover:bg-white/5
                focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20
              `}
            >
              <div className={`grid place-items-center ${tileSize}`}>
                {url ? (
                  <img
                    src={url}
                    alt=""
                    width={iconWH}
                    height={iconWH}
                    loading="lazy"
                    decoding="async"
                    draggable="false"
                    className="block object-contain opacity-95 group-hover:opacity-100 transition"
                    style={{ width: iconWH, height: iconWH }}
                  />
                ) : (
                  <div
                    aria-hidden="true"
                    className="grid place-items-center h-8 w-8 rounded-lg bg-white/10 text-white/80 text-sm font-semibold"
                  >
                    {it.name.slice(0, 1).toUpperCase()}
                  </div>
                )}
              </div>
              {showCaption && (
                <span className="mt-2 w-full truncate text-center text-[11px] text-slate-200">
                  {it.name}
                </span>
              )}
            </Wrapper>
          </li>
        );
      })}
    </ul>
  );
};

const SkillLogoGrid = React.memo(SkillLogoGridBase);
export default SkillLogoGrid;
