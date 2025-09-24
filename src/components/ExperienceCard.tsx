import { ExternalLink } from 'lucide-react';
import TechBadge from './TechBadge';
import SpotlightCard from './SpotlightCard';

interface ExperienceCardProps {
  period: string;
  title: string;
  company: string;
  companyUrl?: string;
  description: React.ReactNode;
  technologies: string[];
  links?: Array<{
    label: string;
    url: string;
  }>;
}

const ExperienceCard = ({
  period,
  title,
  company,
  companyUrl,
  description,
  technologies,
  links = []
}: ExperienceCardProps) => {
  return (
    <SpotlightCard className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-1 -inset-y-1 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-1.5 lg:block lg:group-hover:bg-slate/[0.08] lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      
      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate sm:col-span-2">
        {period}
      </header>
      
      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-snug text-lightest-slate">
          <div>
            <a
              className="inline-flex items-baseline font-medium leading-tight text-lightest-slate hover:text-green focus-visible:text-green group/link text-base"
              href={companyUrl}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${title} at ${company}`}
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              <span>
                {title} ·{' '}
                <span className="inline-block">
                  {company}
                  <ExternalLink className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                </span>
              </span>
            </a>
          </div>
        </h3>
        
        <div className="mt-2 text-sm leading-normal text-slate">
          {description}
        </div>
        
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
                >
                  <ExternalLink className="mr-1 h-3 w-3" />
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        )}
        
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
          {technologies.map((tech) => (
            <li key={tech} className="mr-1.5 mt-2">
              <TechBadge>{tech}</TechBadge>
            </li>
          ))}
        </ul>
      </div>
    </SpotlightCard>
  );
};

export default ExperienceCard;