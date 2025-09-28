import { ExternalLink, Github } from 'lucide-react';
import TechBadge from './TechBadge';
import SpotlightCard from './SpotlightCard';

interface ProjectCardProps {
  title: string;
  description: React.ReactNode;
  image?: string;
  imageAlt?: string;
  technologies?: string[];
  links?: Array<{
    label: string;
    url: string;
    type?: 'external' | 'github';
  }>;
  stats?: string;
  /** extra content (e.g., ExpandableDetails). Rendered UNDER tech & links */
  details?: React.ReactNode;
}

const ProjectCard = ({
  title,
  description,
  image,
  imageAlt,
  technologies = [],
  links = [],
  stats,
  details
}: ProjectCardProps) => {
  const contentColClasses = image ? 'sm:order-2 sm:col-span-6' : 'sm:col-span-8';

  // Sadece GitHub linki başlığa bağlansın
  const githubLink = links.find((l) => l.type === 'github');

  return (
    <SpotlightCard className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-1 -inset-y-1 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-1.5 lg:block lg:group-hover:bg-slate/[0.08] lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

      <div className={`z-10 ${contentColClasses}`}>
        <h3>
          {githubLink ? (
            <a
              className="relative inline-flex items-baseline font-medium leading-tight text-lightest-slate hover:text-green focus-visible:text-green group/link text-base"
              href={githubLink.url}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${title} (opens in a new tab)`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* dekoratif highlight — tıklanamaz */}
              <span className="absolute pointer-events-none -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
              <span>
                {title}
                <ExternalLink className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
              </span>
            </a>
          ) : (
            <span className="inline-flex items-baseline font-medium leading-tight text-lightest-slate group/link text-base">
              {title}
            </span>
          )}
        </h3>

        <div className="mt-2 text-sm leading-normal text-slate">{description}</div>

        {stats && <div className="mt-2 text-sm font-medium text-slate">{stats}</div>}

        {links.length > 0 && (
          <ul className="mt-2 flex flex-wrap" aria-label="Related links">
            {links.map((link, index) => (
              <li key={index} className="mr-4">
                <a
                  className="relative mt-2 inline-flex items-center text-sm font-medium text-slate hover:text-green focus-visible:text-green"
                  href={link.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`${link.label} (opens in a new tab)`}
                  onClick={(e) => e.stopPropagation()}
                >
                  {link.type === 'github' ? (
                    <Github className="mr-1 h-3 w-3" />
                  ) : (
                    <ExternalLink className="mr-1 h-3 w-3" />
                  )}
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        )}

        {technologies.length > 0 && (
          <ul className="mt-2 flex flex-wrap gap-1.5" aria-label="Technologies used">
            {technologies.map((tech) => (
              <li key={tech} className="flex-shrink-0">
                <TechBadge>{tech}</TechBadge>
              </li>
            ))}
          </ul>
        )}

        {/* Details: links & tech'in ALTINDA */}
        {details && <div className="mt-3">{details}</div>}
      </div>

      {image && (
        <img
          alt={imageAlt}
          loading="lazy"
          width="200"
          height="48"
          decoding="async"
          className="rounded border-2 border-slate/10 transition group-hover:border-slate/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
          src={image}
        />
      )}
    </SpotlightCard>
  );
};

export default ProjectCard;
