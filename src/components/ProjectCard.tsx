import { ArrowUpRight, Github } from 'lucide-react';
import TechBadge from './TechBadge';
import type { ProjectLink } from '../data/projects';

interface ProjectCardProps {
  title: string;
  description: React.ReactNode;
  technologies?: string[];
  links?: ProjectLink[];
  /** Extra content, e.g. an ExpandableDetails block. Rendered below the badges. */
  details?: React.ReactNode;
}

const ProjectCard = ({
  title,
  description,
  technologies = [],
  links = [],
  details,
}: ProjectCardProps) => {
  // The title points at the first link, but every link still gets its own
  // badge so a project is never left without a visible repository link.
  const [primaryLink] = links;

  return (
    <article className="group">
      <h3 className="text-base font-semibold leading-snug text-foreground">
        {primaryLink ? (
          <a
            className="inline-flex items-baseline gap-1 transition-colors hover:text-accent focus-visible:text-accent"
            href={primaryLink.url}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${title} (opens in a new tab)`}
          >
            <span>{title}</span>
            <ArrowUpRight
              className="h-4 w-4 shrink-0 translate-y-px text-subtle transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        ) : (
          title
        )}
      </h3>

      <div className="mt-2 text-sm leading-relaxed text-muted">{description}</div>

      {links.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1" aria-label="Related links">
          {links.map((link) => (
            <li key={link.url}>
              <a
                className="inline-flex items-center gap-1.5 text-xs font-medium text-muted transition-colors hover:text-accent"
                href={link.url}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${link.label} (opens in a new tab)`}
              >
                {link.type === 'github' ? (
                  <Github className="h-3.5 w-3.5" aria-hidden="true" />
                ) : (
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                )}
                {link.label}
              </a>
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

      {details}
    </article>
  );
};

export default ProjectCard;
