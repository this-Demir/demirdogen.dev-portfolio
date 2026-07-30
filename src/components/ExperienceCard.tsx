import { ArrowUpRight } from 'lucide-react';
import TechBadge from './TechBadge';
import TimelineEntry from './TimelineEntry';

interface ExperienceCardProps {
  period: string;
  title: string;
  company: string;
  companyUrl?: string;
  description?: React.ReactNode;
  /** Short outcome statements, e.g. "7,000+ unique visitors". */
  metrics?: string[];
  technologies?: string[];
}

const ExperienceCard = ({
  period,
  title,
  company,
  companyUrl,
  description,
  metrics = [],
  technologies = [],
}: ExperienceCardProps) => (
  <article className="group">
    <TimelineEntry period={period}>
      <h3 className="text-base font-semibold leading-snug text-foreground">
        {title}
        <span className="text-subtle"> · </span>
        {companyUrl ? (
          <a
            className="inline-flex items-baseline gap-0.5 transition-colors hover:text-accent focus-visible:text-accent"
            href={companyUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${company} (opens in a new tab)`}
          >
            {company}
            <ArrowUpRight
              className="h-4 w-4 shrink-0 translate-y-px text-subtle transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        ) : (
          company
        )}
      </h3>

      {description && (
        <div className="mt-2 text-sm leading-relaxed text-muted">{description}</div>
      )}

      {metrics.length > 0 && (
        <ul className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-subtle">
          {metrics.map((metric, index) => (
            <li key={metric} className="flex items-center gap-3">
              {index > 0 && <span aria-hidden="true">·</span>}
              {metric}
            </li>
          ))}
        </ul>
      )}

      {technologies.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Technologies used">
          {technologies.map((tech) => (
            <li key={tech}>
              <TechBadge>{tech}</TechBadge>
            </li>
          ))}
        </ul>
      )}
    </TimelineEntry>
  </article>
);

export default ExperienceCard;
