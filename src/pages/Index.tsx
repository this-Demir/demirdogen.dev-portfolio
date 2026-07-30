import { useState } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';

import Layout from '../components/Layout';
import Section from '../components/Section';
import ExperienceCard from '../components/ExperienceCard';
import ProjectCard from '../components/ProjectCard';
import ProjectDetails from '../components/ProjectDetails';
import TimelineEntry from '../components/TimelineEntry';
import SkillMarquee from '../components/SkillMarquee';
import PersonalizedFooter from '../components/PersonalizedFooter';

import { useLanguage } from '../context/language';
import { PROJECTS } from '../data/projects';
import { TOOLBELT } from '../data/skills';
import { DENEYAP_CERTIFICATES } from '../data/certificates';

const Index = () => {
  const [showCertificates, setShowCertificates] = useState(false);
  const { t } = useLanguage();

  const featured = PROJECTS.filter((p) => p.tier === 'featured');
  const curiosity = PROJECTS.filter((p) => p.tier === 'curiosity');

  const renderProject = (project: (typeof PROJECTS)[number]) => {
    const copy = t.projects[project.id];
    return (
      <li key={project.id}>
        <ProjectCard
          title={copy.title}
          description={copy.desc}
          technologies={project.technologies}
          links={project.links}
          details={<ProjectDetails id={project.id} t={t} />}
        />
      </li>
    );
  };

  return (
    <Layout>
      <Section id="about" title={t.about.title}>
        <div className="animate-fade-in space-y-4">
          <p className="leading-relaxed text-muted">{t.about.p1}</p>
          <p className="leading-relaxed text-muted">{t.about.p2}</p>
        </div>
      </Section>

      <Section id="experience" title={t.experience.title}>
        <ol className="space-y-12">
          <li>
            <ExperienceCard
              period={t.experience.broadangle.period}
              title={t.experience.broadangle.title}
              company={t.experience.broadangle.company}
              companyUrl="https://www.broadangle.com/"
              description={t.experience.broadangle.desc}
            />
          </li>
          <li>
            <ExperienceCard
              period={t.experience.yusync.period}
              title={t.experience.yusync.title}
              company={t.experience.yusync.company}
              companyUrl="https://yu-sync.com"
              description={t.experience.yusync.desc}
              metrics={[
                t.experience.yusync.metricUsers,
                t.experience.yusync.metricLive,
                t.experience.yusync.metricVolunteer,
              ]}
              technologies={['React', 'TypeScript', 'Tailwind CSS', 'Python']}
            />
          </li>
        </ol>
      </Section>

      <Section id="projects" title={t.projects.title}>
        <ul className="space-y-12">{featured.map(renderProject)}</ul>

        <div className="mt-20">
          {/* Rule on both sides of the label, so the group reads as a divider. */}
          <div className="flex items-center gap-4">
            <span className="h-px flex-1 bg-border" aria-hidden="true" />
            <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground">
              {t.projects.curiosityTitle}
            </h3>
            <span className="h-px flex-1 bg-border" aria-hidden="true" />
          </div>

          <p className="mx-auto mt-4 max-w-sm text-center text-sm leading-relaxed text-subtle">
            {t.projects.curiosityIntro}
          </p>

          <ul className="mt-12 space-y-12">{curiosity.map(renderProject)}</ul>
        </div>
      </Section>

      <Section id="education" title={t.education.title}>
        <div>
          <ol className="space-y-8">
            <li>
              <TimelineEntry period={t.education.yasar.date}>
                <h3 className="text-base font-semibold leading-snug text-foreground">
                  <a
                    href="https://www.yasar.edu.tr/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="transition-colors hover:text-accent"
                  >
                    {t.education.yasar.degree}, {t.education.yasar.school}
                  </a>
                </h3>
                <p className="mt-2 text-sm text-muted">
                  {t.education.yasar.year}
                  <span className="text-subtle"> · </span>
                  {t.education.yasar.gpaLabel}{' '}
                  <span className="font-medium text-foreground">
                    {t.education.yasar.gpaValue}
                  </span>
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  <span className="font-medium text-foreground">
                    {t.education.yasar.coursesLabel}:
                  </span>{' '}
                  {t.education.yasar.courses}
                </p>
              </TimelineEntry>
            </li>

            <li>
              <TimelineEntry period={t.education.deneyap.date}>
                <h3 className="text-base font-semibold leading-snug text-foreground">
                  <a
                    href="https://www.deneyap.org/en"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="transition-colors hover:text-accent"
                  >
                    {t.education.deneyap.title}, {t.education.deneyap.org}
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {t.education.deneyap.desc}
                </p>

                <button
                  type="button"
                  onClick={() => setShowCertificates((open) => !open)}
                  aria-expanded={showCertificates}
                  aria-controls="deneyap-certificates"
                  className="mt-3 inline-flex items-center gap-1.5 rounded border border-border px-2.5 py-1 text-xs font-medium text-muted transition-colors hover:border-subtle hover:text-foreground"
                >
                  {t.education.deneyap.certButton}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      showCertificates ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {showCertificates && (
                  <ul id="deneyap-certificates" className="mt-3 space-y-3">
                    {DENEYAP_CERTIFICATES.map((certificate) => (
                      <li key={certificate.title}>
                        <p className="font-mono text-xs text-subtle">{certificate.date}</p>
                        <a
                          href={certificate.url}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
                        >
                          {certificate.title}
                          <ExternalLink className="h-3 w-3" aria-hidden="true" />
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </TimelineEntry>
            </li>

            <li>
              <TimelineEntry period={t.education.highschool.date}>
                <h3 className="text-base font-semibold leading-snug text-foreground">
                  {t.education.highschool.title}, {t.education.highschool.school}
                </h3>
              </TimelineEntry>
            </li>
          </ol>

          {/* Sits well below the education list, closer to the footer. */}
          <div className="mt-28">
            <SkillMarquee items={TOOLBELT} />
            <p className="mt-3 text-center text-xs text-subtle">{t.skills.tools}</p>
          </div>
        </div>
      </Section>

      <PersonalizedFooter />
    </Layout>
  );
};

export default Index;
