import ExpandableDetails from './ExpandableDetails';
import type { Dictionary } from '../data/content';
import type { ProjectId } from '../data/projects';

import vulkanShot1 from '../assets/projects/raytracer/vulkan-render-1.webp';
import vulkanShot2 from '../assets/projects/raytracer/vulkan-render-2.webp';
import vulkanShot3 from '../assets/projects/raytracer/vulkan-render-3.webp';
import rayShot1 from '../assets/projects/raytracer/solarsystem.webp';
import rayShot2 from '../assets/projects/raytracer/rays-ui.webp';
import rayShot3 from '../assets/projects/raytracer/glass-metal.webp';

const QA_TEAM = [
  'Demir Demirdöğen',
  'Yağmur Pazı',
  'Batuhan Salcan',
  'Egemen Üner',
  'Efe Bırık',
];

/** A titled paragraph inside a deep-dive panel. */
const Block = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <h4 className="text-sm font-semibold text-foreground">{title}</h4>
    <p className="mt-1.5 text-sm leading-relaxed text-muted">{children}</p>
  </div>
);

const Note = ({ children }: { children: React.ReactNode }) => (
  <p className="border-t border-border pt-3 text-xs text-subtle">{children}</p>
);

const Shots = ({ images }: { images: { src: string; alt: string }[] }) => (
  <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
    {images.map(({ src, alt }) => (
      <img
        key={src}
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        sizes="(max-width: 640px) 100vw, 33vw"
        className="w-full rounded border border-border"
      />
    ))}
  </div>
);

/**
 * Optional expandable deep dives, keyed by project id. A project without an
 * entry here simply renders without a disclosure.
 */
const DETAILS: Partial<Record<ProjectId, (t: Dictionary) => React.ReactNode>> = {
  yusync: (t) => (
    <>
      <Block title={t.projects.yusync.whatTitle}>{t.projects.yusync.whatDesc}</Block>
      <Block title={t.projects.yusync.statsTitle}>{t.projects.yusync.statsDesc}</Block>
      <Block title={t.projects.yusync.perfTitle}>{t.projects.yusync.perfDesc}</Block>
      <Note>{t.projects.yusync.note}</Note>
    </>
  ),

  hotel: (t) => (
    <>
      <Block title={t.projects.hotel.archTitle}>{t.projects.hotel.archDesc}</Block>
      <Block title={t.projects.hotel.dataTitle}>{t.projects.hotel.dataDesc}</Block>
      <Block title={t.projects.hotel.opsTitle}>{t.projects.hotel.opsDesc}</Block>
      <Note>{t.projects.hotel.note}</Note>
    </>
  ),

  airline: (t) => (
    <>
      <Block title={t.projects.airline.apiTitle}>{t.projects.airline.apiDesc}</Block>
      <Block title={t.projects.airline.agentTitle}>{t.projects.airline.agentDesc}</Block>
      <Note>{t.projects.airline.note}</Note>
    </>
  ),

  qa: (t) => (
    <>
      <Block title={t.projects.qa.storyTitle}>{t.projects.qa.storyDesc}</Block>
      <Block title={t.projects.qa.techTitle}>{t.projects.qa.techDesc}</Block>
      <div>
        <h4 className="text-sm font-semibold text-foreground">{t.projects.qa.teamTitle}</h4>
        <ul className="mt-1.5 grid grid-cols-1 gap-x-4 gap-y-1 text-sm text-muted sm:grid-cols-2">
          {QA_TEAM.map((member) => (
            <li key={member}>{member}</li>
          ))}
        </ul>
      </div>
      <Note>{t.projects.qa.note}</Note>
    </>
  ),

  vulkan: (t) => (
    <>
      <Shots
        images={[
          { src: vulkanShot1, alt: 'High-fidelity Vulkan render' },
          { src: vulkanShot2, alt: 'Complex OBJ model loaded into the scene' },
          { src: vulkanShot3, alt: 'Real-time dynamic lighting' },
        ]}
      />
      <div>
        <h4 className="text-sm font-semibold text-foreground">
          {t.projects.vulkan.featuresTitle}
        </h4>
        <ul className="mt-1.5 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted">
          <li>{t.projects.vulkan.f1}</li>
          <li>{t.projects.vulkan.f2}</li>
          <li>{t.projects.vulkan.f3}</li>
          <li>{t.projects.vulkan.f4}</li>
        </ul>
      </div>
      <Note>{t.projects.vulkan.quote}</Note>
    </>
  ),

  aerolink: (t) => (
    <>
      <Block title={t.projects.aerolink.arch1Title}>{t.projects.aerolink.arch1Desc}</Block>
      <Block title={t.projects.aerolink.arch2Title}>{t.projects.aerolink.arch2Desc}</Block>
      <Block title={t.projects.aerolink.arch3Title}>{t.projects.aerolink.arch3Desc}</Block>
    </>
  ),

  legacyRay: (t) => (
    <>
      <Shots
        images={[
          { src: rayShot1, alt: 'Solar-system style scene' },
          { src: rayShot2, alt: 'Ray debug view with UI panel' },
          { src: rayShot3, alt: 'Glass and metal materials' },
        ]}
      />
      <Block title={t.projects.legacyRay.archTitle}>{t.projects.legacyRay.archDesc}</Block>
      <Block title={t.projects.legacyRay.limitsTitle}>
        {t.projects.legacyRay.limitsDesc}
      </Block>
      <Note>{t.projects.legacyRay.takeaway}</Note>
    </>
  ),
};

interface ProjectDetailsProps {
  id: ProjectId;
  t: Dictionary;
}

const ProjectDetails = ({ id, t }: ProjectDetailsProps) => {
  const render = DETAILS[id];
  if (!render) return null;

  // Every project with a deep dive also defines a label for its disclosure.
  const copy = t.projects[id] as { detailLabel?: string };

  return (
    <ExpandableDetails label={copy.detailLabel}>
      <div className="space-y-5">{render(t)}</div>
    </ExpandableDetails>
  );
};

export default ProjectDetails;
