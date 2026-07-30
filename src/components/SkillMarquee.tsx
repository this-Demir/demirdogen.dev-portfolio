import type { SkillLogo } from '../data/skills';

interface SkillMarqueeProps {
  items: SkillLogo[];
}

/** Shared track classes. Both copies must animate identically to stay in sync. */
const TRACK = 'marquee-track flex min-w-full shrink-0 animate-marquee items-center gap-8';
const LOGO =
  'h-8 w-8 object-contain opacity-60 grayscale transition-opacity duration-200 dark:invert';

/**
 * Continuously scrolling logo strip. The list is rendered twice and each track
 * translates by its own width plus the gap between them, so the duplicate lands
 * exactly where the original began and the loop never seams. The duplicate is
 * hidden from assistive tech.
 *
 * Logos are forced monochrome because several brand marks are solid black and
 * would otherwise disappear against the dark theme.
 */
const SkillMarquee = ({ items }: SkillMarqueeProps) => (
  <div className="marquee relative flex gap-8 overflow-hidden py-2">
    <div
      className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent"
      aria-hidden="true"
    />
    <div
      className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent"
      aria-hidden="true"
    />

    <ul className={TRACK}>
      {items.map((item) => (
        <li key={item.name}>
          <a
            href={item.href}
            target="_blank"
            rel="noreferrer noopener"
            className="block hover:[&>img]:opacity-100"
            title={item.name}
          >
            <img
              src={item.icon}
              alt={item.name}
              width={32}
              height={32}
              loading="lazy"
              decoding="async"
              className={LOGO}
            />
          </a>
        </li>
      ))}
    </ul>

    <ul className={TRACK} aria-hidden="true">
      {items.map((item) => (
        <li key={item.name}>
          <img
            src={item.icon}
            alt=""
            width={32}
            height={32}
            loading="lazy"
            decoding="async"
            className={LOGO}
          />
        </li>
      ))}
    </ul>
  </div>
);

export default SkillMarquee;
