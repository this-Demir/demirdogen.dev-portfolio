import { ExternalLink } from 'lucide-react';

interface WritingCardProps {
  year: string;
  title: string;
  url: string;
  image?: string;
  imageAlt?: string;
}

const WritingCard = ({ year, title, url, image, imageAlt }: WritingCardProps) => {
  return (
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate/[0.08] lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      
      <div className="z-10 sm:order-2 sm:col-span-6">
        <h3>
          <a
            className="inline-flex items-baseline font-medium leading-tight text-lightest-slate hover:text-green focus-visible:text-green group/link text-base"
            href={url}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${title} (opens in a new tab)`}
          >
            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
            <span>
              {title}
              <ExternalLink className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
            </span>
          </a>
        </h3>
        
        <div className="mt-1 text-sm font-semibold text-slate">
          {year}
        </div>
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
    </div>
  );
};

export default WritingCard;