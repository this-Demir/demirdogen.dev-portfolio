import {
  useState,
  useMemo,
  useCallback,
  useEffect,
  useRef,
  Suspense,
  lazy,
  type ReactNode,
} from 'react';
import { GraduationCap, Award, Target, Briefcase, Code2, ChevronDown, ExternalLink, Cpu, Globe, Wrench } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// --- LOGO IMPORTS (Dosya İsimlerine Tam Uyumlu) ---
import JavaLogo from '../assets/tech-logos/Java.svg';
import DotNetLogo from '../assets/tech-logos/dotnet.svg';
import SupabaseLogo from '../assets/tech-logos/supabase-logo-icon.svg'; 
import MySQLLogo from '../assets/tech-logos/MySQL.svg';
import ReactLogo from '../assets/tech-logos/React.svg';
import TSLogo from '../assets/tech-logos/TypeScript.svg';
import JSLogo from '../assets/tech-logos/JavaScript.svg';
import PythonLogo from '../assets/tech-logos/Python.svg';
import TailwindLogo from '../assets/tech-logos/Tailwind CSS.svg'; 
import ViteLogo from '../assets/tech-logos/Vite.js.svg'; 
import GitHubLogo from '../assets/tech-logos/GitHub.svg';
import PostmanLogo from '../assets/tech-logos/Postman.svg';
import SeleniumLogo from '../assets/tech-logos/Selenium.svg';
import BootstrapLogo from '../assets/tech-logos/Bootstrap.svg';
import GradleLogo from '../assets/tech-logos/Gradle.svg';
import JUnitLogo from '../assets/tech-logos/JUnit.svg';
import cppLogo from '../assets/tech-logos/CPlusPlus.svg';
import vulkanLogo from '../assets/tech-logos/vulkan.svg';
import gitLogo from '../assets/tech-logos/Git.svg';

// LAZY COMPONENT IMPORTS
const Layout = lazy(() => import('../components/Layout'));
const ExperienceCard = lazy(() => import('../components/ExperienceCard'));
const ProjectCard = lazy(() => import('../components/ProjectCard'));
const VolunteerBadge = lazy(() => import('../components/VolunteerBadge'));
const PersonalizedFooter = lazy(() => import('../components/PersonalizedFooter'));
const SkillMarquee = lazy(() => import('../components/SkillMarquee')); 
const ExpandableDetails = lazy(() => import('@/components/ExpandableDetails'));


export interface SkillLogoItem {
  name: string;
  href: string;
  icon: string; 
}


// 1. CORE SPECIALIZATION 
const CORE_LOGOS: SkillLogoItem[] = [
  { name: 'Java', href: 'https://www.java.com/', icon: JavaLogo },          
  { name: '.NET 8', href: 'https://dotnet.microsoft.com/', icon: DotNetLogo },
  { name: 'C++', href: 'https://isocpp.org/', icon: cppLogo },             
  { name: 'MySQL', href: 'https://www.mysql.com/', icon: MySQLLogo },        
];

// 2. THE TOOLBELT (Kayan şeritte dönecek araçlar)
const TOOLBELT_LOGOS: SkillLogoItem[] = [
  { name: 'Vulkan', href: 'https://www.vulkan.org/', icon: vulkanLogo },      
  { name: 'React', href: 'https://react.dev', icon: ReactLogo },            
  { name: 'TypeScript', href: 'https://www.typescriptlang.org/', icon: TSLogo }, 
  { name: 'JavaScript', href : 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', icon: JSLogo},
  { name: 'Python', href: 'https://www.python.org/', icon: PythonLogo },      
  { name: 'Supabase', href: 'https://supabase.com/', icon: SupabaseLogo },      
  { name: 'Bootstrap', href : 'https://getbootstrap.com/', icon: BootstrapLogo},
  { name: 'Tailwind CSS', href: 'https://tailwindcss.com', icon: TailwindLogo }, 
  { name: 'Vite.js', href: 'https://vitejs.dev', icon: ViteLogo },           
  { name: 'Git', href: 'https://git-scm.com/', icon: gitLogo },            
  { name: 'Postman', href: 'https://www.postman.com', icon: PostmanLogo },    
  { name: 'Selenium', href: 'https://www.selenium.dev/', icon: SeleniumLogo }, 
  { name: 'Gradle', href: 'https://gradle.org/', icon: GradleLogo },
  { name: 'JUnit', href: 'https://junit.org/', icon: JUnitLogo },
];

/* --------------------------------
   SKELETONS / SMALL HELPERS
--------------------------------- */
const SkeletonLine = ({ w = 'w-32' }: { w?: string }) => (
  <div className={`h-4 ${w} rounded bg-deep-blue/30 animate-pulse`} />
);

const CardSkeleton = () => (
  <div className="rounded-xl border border-steel-blue/20 p-6 bg-midnight/40">
    <div className="flex flex-col gap-3">
      <SkeletonLine w="w-40" />
      <SkeletonLine w="w-64" />
      <SkeletonLine w="w-52" />
    </div>
  </div>
);

/** Görünür olunca yalnızca 1 kez mount eder (IntersectionObserver) */
function InViewOnce({
  children,
  className,
  rootMargin = '200px',
  placeholder,
}: {
  children: ReactNode;
  className?: string;
  rootMargin?: string;
  placeholder?: ReactNode;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current || visible) return;
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { root: null, rootMargin, threshold: 0 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [visible, rootMargin]);

  return <div ref={ref} className={className}>{visible ? children : placeholder ?? null}</div>;
}

/* --------------------------------
   LAZY CHUNK: RAY TRACER IMAGES (OLD CPU)
--------------------------------- */
const RayImageGrid = lazy(async () => {
  const [shot1, shot2, shot3] = await Promise.all([
    import('../assets/projects/raytracer/solarsystem.png'),
    import('../assets/projects/raytracer/rays-ui.png'),
    import('../assets/projects/raytracer/glass-metal.png'),
  ]);

  const Comp = () => (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 overflow-hidden">
      <img
        src={shot1.default}
        alt="Solar system style scene"
        className="block w-full h-auto max-w-full rounded-lg border border-slate/15 opacity-80 hover:opacity-100 transition-opacity"
        loading="lazy"
        decoding="async"
        fetchPriority="low"
        sizes="(max-width: 640px) 100vw, 33vw"
      />
      <img
        src={shot2.default}
        alt="Ray debug + UI panel"
        className="block w-full h-auto max-w-full rounded-lg border border-slate/15 opacity-80 hover:opacity-100 transition-opacity"
        loading="lazy"
        decoding="async"
        fetchPriority="low"
        sizes="(max-width: 640px) 100vw, 33vw"
      />
      <img
        src={shot3.default}
        alt="Glass & metal materials"
        className="block w-full h-auto max-w-full rounded-lg border border-slate/15 opacity-80 hover:opacity-100 transition-opacity"
        loading="lazy"
        decoding="async"
        fetchPriority="low"
        sizes="(max-width: 640px) 100vw, 33vw"
      />
    </div>
  );
  return { default: Comp };
});

/* --------------------------------
   LAZY CHUNK: VULKAN RAY TRACER IMAGES (NEW)
--------------------------------- */
const VulkanImageGrid = lazy(async () => {
  // Resimler yoksa fallback olarak eskileri kullanır, varsa yenileri yükler
  const [shot1, shot2, shot3] = await Promise.all([
    import('../assets/projects/raytracer/vulkan-render-1.png'), 
    import('../assets/projects/raytracer/vulkan-render-2.png'),
    import('../assets/projects/raytracer/vulkan-render-3.png'),
  ]).catch(() => {
     return Promise.all([
        import('../assets/projects/raytracer/glass-metal.png'),
        import('../assets/projects/raytracer/solarsystem.png'),
        import('../assets/projects/raytracer/rays-ui.png'),
      ]);
  });

  const Comp = () => (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 overflow-hidden">
      <img
        src={shot1.default}
        alt="High-fidelity Vulkan Rendering"
        className="block w-full h-auto max-w-full rounded-lg border border-slate/15 shadow-lg shadow-ui-blue/10 transition-transform hover:scale-105 duration-500"
        loading="lazy"
        decoding="async"
      />
      <img
        src={shot2.default}
        alt="Complex OBJ Model Loading"
        className="block w-full h-auto max-w-full rounded-lg border border-slate/15 shadow-lg shadow-ui-purple/10 transition-transform hover:scale-105 duration-500"
        loading="lazy"
        decoding="async"
      />
      <img
        src={shot3.default}
        alt="Real-time Dynamic Lighting"
        className="block w-full h-auto max-w-full rounded-lg border border-slate/15 shadow-lg shadow-ui-teal/10 transition-transform hover:scale-105 duration-500"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
  return { default: Comp };
});

/* --------------------------------
   LAZY CHUNK: DENEYAP CERT LIST
--------------------------------- */
const DeneyapCertList = lazy(async () => {
  const [software, advRob, iot, robCoding, design] = await Promise.all([
    import('../assets/certificates/01198133400321.png'),
    import('../assets/certificates/79043806143681.png'),
    import('../assets/certificates/13456881419360.png'),
    import('../assets/certificates/58744354428702.png'),
    import('../assets/certificates/86104404021822.png'),
  ]);

  const CERTS = [
    { title: 'Software Technologies', date: 'Apr 2 – Jul 17, 2022', url: software.default },
    { title: 'Advanced Robotics', date: 'Jan 3 – Apr 10, 2022', url: advRob.default },
    { title: 'Electronics Programming & Internet of Things', date: 'Dec 18, 2021 – Mar 27, 2022', url: iot.default },
    { title: 'Robotics & Coding', date: 'Sep 4 – Nov 28, 2021', url: robCoding.default },
    { title: 'Design & Manufacturing', date: 'May 1 – Jun 27, 2021', url: design.default },
  ];

  const Comp = () => (
    <div className="relative pl-2 pt-1 pb-1">
      {/* Timeline Vertical Line for Certs */}
      <div className="absolute left-[5px] top-2 bottom-2 w-px bg-gradient-to-b from-ui-blue/40 via-ui-purple/40 to-transparent" />
      
      <div className="space-y-6">
        {CERTS.map((c) => (
          <div key={c.title} className="relative pl-6 group">
            {/* Timeline Dot */}
            <div className="absolute left-[1px] top-1.5 h-2 w-2 rounded-full bg-midnight border border-ui-blue group-hover:bg-ui-blue group-hover:scale-125 transition-all duration-300 shadow-[0_0_0_4px_rgba(2,6,23,1)]" />
            
            <div className="flex flex-col gap-1">
              {/* Date */}
              <div className="flex items-center justify-between">
                 <span className="text-xs font-mono text-ui-blue/80 tracking-tight">{c.date}</span>
              </div>
              
              {/* Certificate Title Link */}
              <a
                href={c.url}
                target="_blank"
                rel="noreferrer noopener"
                className="text-sm font-medium text-pearl hover:text-ui-purple transition-colors inline-flex items-center gap-2"
              >
                {c.title}
                <ExternalLink className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return { default: Comp };
});

const Index = () => {
  // Deneyap sertifikalarını açıp kapatan state
  const [showDeneyapCerts, setShowDeneyapCerts] = useState(false);
  const { t } = useLanguage();

  return (
    <Suspense fallback={<div className="min-h-screen bg-background text-foreground font-sans relative overflow-x-clip"></div>}>
      <Layout>
        {/* About Section */}
        <section id="about" className="mb-12 scroll-mt-8 md:mb-16 lg:mb-20 lg:scroll-mt-12">
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-midnight/80 px-6 py-4 backdrop-blur md:-mx-12 md:px-12 lg:-mx-24 lg:px-24 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-cool-gray lg:sr-only">{t.nav.about}</h2>
          </div>
          <div className="space-y-6 animate-fade-in-up">
            <p className="text-lg leading-relaxed text-silver">
              {t.about.p1}
            </p>
            <p className="leading-relaxed text-cool-gray">
              {t.about.p2}
            </p>
            {/* Personal mission statement */}
            <div className="mt-8 p-6 bg-gradient-to-r from-deep-blue/50 to-ocean-blue/30 rounded-xl border border-steel-blue/30 animated-border">
              <div className="flex items-start gap-3">
                <Target className="h-5 w-5 text-ui-blue mt-1 flex-shrink-0" />
                <p className="text-silver font-medium">
                  {t.about.mission}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-12 scroll-mt-8 md:mb-16 lg:mb-20 lg:scroll-mt-12">
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-midnight/80 px-6 py-4 backdrop-blur md:-mx-12 md:px-12 lg:-mx-24 lg:px-24 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-cool-gray lg:sr-only">{t.nav.experience}</h2>
          </div>
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="h-6 w-6 text-ui-blue" />
            <h2 className="text-xl font-semibold text-pearl">{t.experience.title}</h2>
          </div>

          <Suspense fallback={<CardSkeleton />}>
            <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <ol className="group/list space-y-8">
                <li>
                  <ExperienceCard
                    period={t.experience.yusync.period}
                    title={t.experience.yusync.title}
                    company={t.experience.yusync.company}
                    companyUrl="https://yu-sync.com"
                    description={
                      <div className="space-y-3">
                        <p>{t.experience.yusync.desc}</p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          <Suspense fallback={<SkeletonLine w="w-20" />}>
                            <VolunteerBadge type="volunteer" />
                          </Suspense>
                          <Suspense fallback={<SkeletonLine w="w-20" />}>
                            <VolunteerBadge type="users" delay={100} />
                          </Suspense>
                        </div>
                      </div>
                    }
                    technologies={['React', 'TypeScript', 'Tailwind', 'JavaScript', 'Python']}
                    links={[{ label: 'yu-sync.com', url: 'https://yu-sync.com' }]}
                  />
                </li>
              </ol>
            </div>
          </Suspense>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-12 scroll-mt-8 md:mb-16 lg:mb-20 lg:scroll-mt-12">
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-midnight/80 px-6 py-4 backdrop-blur md:-mx-12 md:px-12 lg:-mx-24 lg:px-24 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-cool-gray lg:sr-only">{t.nav.projects}</h2>
          </div>
          <div className="flex items-center gap-3 mb-8">
            <Code2 className="h-6 w-6 text-ui-purple" />
            <h2 className="text-xl font-semibold text-pearl">{t.projects.title}</h2>
          </div>

          <Suspense fallback={<CardSkeleton />}>
            <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <ul className="group/list space-y-8">
                {/* --- NEW VULKAN PROJECT --- */}
                <li>
                  <ProjectCard
                    title={t.projects.vulkan.title}
                    description={<p>{t.projects.vulkan.desc}</p>}
                    technologies={['Java 21', 'Vulkan', 'LWJGL', 'GLSL Compute', 'Multithreading']}
                    links={[{ label: 'GitHub', url: 'https://github.com/this-Demir/Vulkan-BVH-RayTracer', type: 'github' }]}
                    details={
                      <Suspense fallback={<SkeletonLine w="w-24" />}>
                        <ExpandableDetails label={t.projects.vulkan.detailLabel} size="sm">
                           <div className="space-y-4 min-w-0 break-words hyphens-auto" style={{ contentVisibility: 'auto' }}>
                            <InViewOnce
                              placeholder={<div className="h-40 rounded-lg bg-deep-blue/20 animate-pulse" />}
                            >
                              <Suspense fallback={<div className="h-40 rounded-lg bg-deep-blue/20 animate-pulse" />}>
                                <VulkanImageGrid />
                              </Suspense>
                            </InViewOnce>

                            <div className="space-y-3">
                                <h4 className="text-sm font-semibold text-pearl">{t.projects.vulkan.featuresTitle}</h4>
                                <ul className="list-disc pl-5 text-sm text-silver/90 text-balance space-y-2">
                                  <li>
                                    <strong>Dynamic OBJ Loader & Scene Graph:</strong> {t.projects.vulkan.f1}
                                  </li>
                                  <li>
                                    <strong>O(log n) GPU Acceleration:</strong> {t.projects.vulkan.f2}
                                  </li>
                                  <li>
                                    <strong>Triple-Thread Architecture:</strong> {t.projects.vulkan.f3}
                                  </li>
                                  <li>
                                    <strong>Interactive Experience:</strong> {t.projects.vulkan.f4}
                                  </li>
                                </ul>
                            </div>
                            <p className="text-xs italic text-ui-purple/90 border-t border-white/10 pt-2 mt-2">
                              {t.projects.vulkan.quote}
                            </p>
                          </div>
                        </ExpandableDetails>
                      </Suspense>
                    }
                  />
                </li>

                <li>
                  <ProjectCard
                    title={t.projects.yusync.title}
                    description={t.projects.yusync.desc}
                    technologies={['React', 'TypeScript', 'Tailwind', 'JavaScript', 'Python']}
                    links={[{ label: 'yu-sync.com', url: 'https://yu-sync.com' }]}
                    details={
                      <Suspense fallback={<SkeletonLine w="w-24" />}>
                        <ExpandableDetails label={t.projects.yusync.detailLabel} size="sm">
                          <div className="space-y-3">
                            <div className="rounded-lg border border-steel-blue/30 bg-midnight/40 p-3">
                              <p className="text-sm text-cool-gray mb-2 font-medium">{t.projects.yusync.whatTitle}</p>
                              <ul className="list-disc pl-5 text-sm text-cool-gray space-y-1">
                                <li>
                                  {t.projects.yusync.whatDesc}
                                </li>
                              </ul>
                            </div>

                            <div className="rounded-lg border border-steel-blue/30 bg-midnight/40 p-3">
                              <p className="text-sm text-cool-gray mb-2 font-medium">{t.projects.yusync.statsTitle}</p>
                              <ul className="list-disc pl-5 text-sm text-cool-gray space-y-1">
                                <li>
                                  {t.projects.yusync.statsDesc}
                                </li>
                              </ul>
                            </div>

                            <div className="rounded-lg border border-steel-blue/30 bg-midnight/40 p-3">
                              <p className="text-sm text-cool-gray mb-2 font-medium">{t.projects.yusync.perfTitle}</p>
                              <ul className="list-disc pl-5 text-sm text-cool-gray space-y-1">
                                <li>
                                  {t.projects.yusync.perfDesc}
                                </li>
                              </ul>
                            </div>

                            <p className="text-xs italic text-ui-purple/90">
                              {t.projects.yusync.note}
                            </p>
                          </div>
                        </ExpandableDetails>
                      </Suspense>
                    }
                  />
                </li>

                {/* --- OLD RAY TRACER (UPDATED) --- */}
                <li>
                  <ProjectCard
                    title={t.projects.legacyRay.title}
                    description={<p>{t.projects.legacyRay.desc}</p>}
                    technologies={['Java', 'JavaFX', 'CPU Rendering', 'Path Tracing']}
                    links={[{ label: 'GitHub', url: 'https://github.com/this-Demir/ArtGallery_SwingUI', type: 'github' }]}
                    details={
                      <Suspense fallback={<SkeletonLine w="w-24" />}>
                        <ExpandableDetails label={t.projects.legacyRay.detailLabel} size="sm">
                          <div className="space-y-3 min-w-0 break-words hyphens-auto" style={{ contentVisibility: 'auto' }}>
                            <InViewOnce
                              placeholder={<div className="h-28 rounded-lg bg-deep-blue/20 animate-pulse" />}
                            >
                              <Suspense fallback={<div className="h-28 rounded-lg bg-deep-blue/20 animate-pulse" />}>
                                <RayImageGrid />
                              </Suspense>
                            </InViewOnce>

                            <ul className="list-disc pl-5 text-sm text-silver/90 text-balance">
                              <li>
                                <strong>{t.projects.legacyRay.coreLogic}</strong>
                              </li>
                              <li>
                                <strong>{t.projects.legacyRay.uiLogic}</strong>
                              </li>
                            </ul>
                          </div>
                        </ExpandableDetails>
                      </Suspense>
                    }
                  />
                </li>

                <li>
                  <ProjectCard
                    title={t.projects.udemy.title}
                    description={<p>{t.projects.udemy.desc}</p>}
                    technologies={['Java', 'JUnit 5', 'Selenium WebDriver', 'ChromeDriver']}
                    links={[{ label: 'GitHub', url: 'https://github.com/this-Demir/Se2226-Testing', type: 'github' }]}
                    details={
                      <Suspense fallback={<SkeletonLine w="w-24" />}>
                        <ExpandableDetails label="Details" size="sm">
                          <p className="mt-3">
                            {t.projects.udemy.detailText}
                          </p>
                        </ExpandableDetails>
                      </Suspense>
                    }
                  />
                </li>

                <li>
                  <ProjectCard
                    title={t.projects.avo.title}
                    description={t.projects.avo.desc}
                    technologies={['.NET 8', 'React', 'SQL', 'Bootstrap', 'JWT', 'Iyzico']}
                    links={[{ label: 'GitHub', url: 'https://github.com/this-Demir/ArtGallery_SwingUI', type: 'github' }]}
                  />
                </li>

                <li>
                  <ProjectCard
                    title={t.projects.artGallery.title}
                    description={t.projects.artGallery.desc}
                    technologies={['Java', 'MySQL']}
                    links={[{ label: 'GitHub', url: 'https://github.com/this-Demir/ArtGallery_SwingUI', type: 'github' }]}
                  />
                </li>
              </ul>
            </div>
          </Suspense>
        </section>

        {/* Education & Skills Section */}
        <section id="writing" className="mb-12 scroll-mt-8 md:mb-16 lg:mb-20 lg:scroll-mt-12">
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-midnight/80 px-6 py-4 backdrop-blur md:-mx-12 md:px-12 lg:-mx-24 lg:px-24 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-cool-gray lg:sr-only">{t.education.title} &amp; {t.skills.title}</h2>
          </div>

          <div className="space-y-12 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            
            {/* Education (Timeline Map Style - Reverse Chronological) */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="h-6 w-6 text-ui-blue" />
                <h3 className="text-xl font-semibold text-pearl">{t.education.title}</h3>
              </div>

              {/* Education Map Container */}
              <div className="relative pl-6 space-y-12 border-l border-ui-blue/20 ml-2">
                
                {/* 1. YAŞAR UNIVERSITY (Top - Current) */}
                <div className="relative">
                   {/* Dot */}
                   <div className="absolute -left-[31px] top-1 h-4 w-4 rounded-full border-2 border-ui-blue bg-midnight shadow-[0_0_12px_rgba(56,189,248,0.4)] transition-all duration-300 group-hover:scale-110" />
                   
                   <div className="group relative grid pb-4 transition-all sm:grid-cols-8 sm:gap-8 hover:!opacity-100 group-hover/list:opacity-50 p-6 bg-gradient-to-r from-deep-blue/30 to-ocean-blue/20 rounded-xl border border-steel-blue/20 animated-border glow-on-hover">
                    <div className="mb-2 mt-1 text-sm font-semibold uppercase tracking-wide text-ui-blue sm:col-span-2">
                      {t.education.yasar.date}
                    </div>
                    <div className="sm:col-span-6">
                      <h4 className="font-medium leading-snug text-pearl text-lg">
                        <div>
                          <a
                            className="relative inline-flex items-baseline font-medium leading-tight text-pearl hover:text-ui-blue focus-visible:text-ui-blue transition-colors duration-300"
                            href="https://www.yasar.edu.tr/"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Yaşar University (opens in a new tab)"
                          >
                            <span className="absolute pointer-events-none -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                            <span>
                              {t.education.yasar.degree} <span className="inline-block">— {t.education.yasar.school}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform hover:-translate-y-1 hover:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                  <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                                </svg>
                              </span>
                            </span>
                          </a>
                        </div>
                      </h4>
                      <div className="mt-2 flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-cool-gray">
                          <span>{t.education.yasar.year}</span>
                          <span className="hidden sm:inline text-ui-blue/50">•</span>
                          <span>{t.education.yasar.gpa}: <span className="text-ui-teal font-medium">3.18</span></span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. DENEYAP (Middle) */}
                <div className="relative">
                   {/* Dot */}
                   <div className="absolute -left-[31px] top-1 h-4 w-4 rounded-full border-2 border-ui-purple bg-midnight shadow-[0_0_12px_rgba(168,85,247,0.4)] transition-all duration-300" />
                   
                   <div className="group relative grid pb-4 transition-all sm:grid-cols-8 sm:gap-8 hover:!opacity-100 group-hover/list:opacity-50 p-6 bg-gradient-to-r from-deep-blue/30 to-ocean-blue/20 rounded-xl border border-steel-blue/20 animated-border glow-on-hover">
                    <div className="mb-2 mt-1 text-sm font-semibold uppercase tracking-wide text-ui-purple sm:col-span-2">{t.education.deneyap.date}</div>
                    <div className="sm:col-span-6">
                      <h4 className="font-medium leading-snug text-pearl text-lg">
                        <div>
                          <a
                            className="relative inline-flex items-baseline font-medium leading-tight text-pearl hover:text-ui-blue focus-visible:text-ui-blue transition-colors duration-300"
                            href="https://www.deneyap.org/en"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="DENEYAP Technology Workshops (opens in a new tab, English)"
                          >
                            <span className="absolute pointer-events-none -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                            <span>
                              {t.education.deneyap.title} {' '}
                              <span className="inline-block">
                                — {t.education.deneyap.org}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform hover:-translate-y-1 hover:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                  <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                                </svg>
                              </span>
                            </span>
                          </a>
                        </div>
                      </h4>

                      <p className="text-sm text-cool-gray mt-2">
                        {t.education.deneyap.desc}
                      </p>

                      {/* DENEYAP Certificates Toggle */}
                      <button
                        type="button"
                        className="mt-3 relative z-10 inline-flex items-center gap-2 text-sm font-medium text-ui-blue hover:text-ui-purple focus-visible:text-ui-purple transition-colors"
                        onClick={e => {
                          e.stopPropagation();
                          setShowDeneyapCerts(prev => !prev);
                        }}
                        aria-expanded={showDeneyapCerts}
                        aria-controls="deneyap-certs"
                      >
                        {t.education.deneyap.certButton}
                        <ChevronDown className={`h-4 w-4 transition-transform ${showDeneyapCerts ? 'rotate-180' : ''}`} />
                      </button>

                      {/* Certificates Content - Mounts only when open but is lazy loaded */}
                      {showDeneyapCerts && (
                        <div
                          id="deneyap-certs"
                          className="mt-3 relative z-20 rounded-lg border border-steel-blue/30 bg-midnight/40 p-4 text-sm text-cool-gray"
                        >
                          <Suspense fallback={<SkeletonLine w="w-28" />}>
                            <DeneyapCertList />
                          </Suspense>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* 3. HIGH SCHOOL (Bottom - Oldest) */}
                <div className="relative">
                   {/* Dot */}
                   <div className="absolute -left-[31px] top-1 h-4 w-4 rounded-full border-2 border-ui-teal bg-midnight shadow-[0_0_12px_rgba(45,212,191,0.4)] transition-all duration-300" />

                   <div className="group relative grid pb-4 transition-all sm:grid-cols-8 sm:gap-8 hover:!opacity-100 group-hover/list:opacity-50 p-6 bg-gradient-to-r from-deep-blue/30 to-ocean-blue/20 rounded-xl border border-steel-blue/20 animated-border glow-on-hover">
                    <div className="mb-2 mt-1 text-sm font-semibold uppercase tracking-wide text-ui-teal sm:col-span-2">
                      {t.education.highschool.date}
                    </div>
                    <div className="sm:col-span-6">
                      <h4 className="font-medium leading-snug text-pearl text-lg">
                        <div>
                          <span>
                            {t.education.highschool.title} <span className="inline-block">— {t.education.highschool.school}</span>
                          </span>
                        </div>
                      </h4>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Skills (NEW T-SHAPED LAYOUT) */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Cpu className="h-6 w-6 text-ui-blue" />
                <h3 className="text-xl font-semibold text-pearl">{t.skills.title}</h3>
              </div>

              {/* 1. Core Specialization (NO FILTER) */}
              <div className="mb-10">
                <div className="flex items-center gap-4 mb-6">
                   <div className="h-px flex-1 bg-gradient-to-r from-ui-blue/50 to-transparent"></div>
                   <span className="text-sm font-semibold text-ui-blue tracking-widest uppercase">{t.skills.core}</span>
                   <div className="h-px flex-1 bg-gradient-to-l from-ui-blue/50 to-transparent"></div>
                </div>
                
                <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                  {CORE_LOGOS.map((item) => (
                    <a key={item.name} href={item.href} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-3 group">
                      <div className="h-16 w-16 p-3 bg-midnight rounded-2xl border border-ui-blue/20 shadow-lg shadow-ui-blue/5 group-hover:border-ui-blue/50 group-hover:shadow-ui-blue/20 transition-all duration-300 transform group-hover:-translate-y-1">
                         <img 
                           src={item.icon} 
                           alt={item.name} 
                           className="w-full h-full object-contain transition-all duration-300"
                           onError={(e) => { e.currentTarget.style.display = 'none'; }} 
                         />
                      </div>
                      <span className="text-sm text-pearl font-medium group-hover:text-ui-blue transition-colors">{item.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* 2. The Toolbelt (Infinite Marquee) */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                   <div className="h-px flex-1 bg-white/10"></div>
                      <span className="text-xs font-medium text-cool-gray uppercase tracking-widest">{t.skills.tools}</span>
                   <div className="h-px flex-1 bg-white/10"></div>
                </div>
                
                <div className="w-full overflow-hidden bg-midnight/30 py-6">
                   <Suspense fallback={<div className="h-12 w-full animate-pulse bg-white/5" />}>
                      <SkillMarquee items={TOOLBELT_LOGOS} speed="slow" />
                   </Suspense>
                </div>
              </div>
            </div>

            {/* Personal Interests */}
            <div className="pt-8 border-t border-white/5">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xl opacity-80">✨</span>
                  <h4 className="text-lg font-semibold text-pearl">{t.skills.interestsTitle}</h4>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-cool-gray">
                  <div className="flex items-center gap-2"><span className="text-ui-purple">•</span> {t.skills.i1}</div>
                  <div className="flex items-center gap-2"><span className="text-ui-blue">•</span> {t.skills.i2}</div>
                  <div className="flex items-center gap-2"><span className="text-ui-teal">•</span> {t.skills.i3}</div>
                  <div className="flex items-center gap-2"><span className="text-ui-purple">•</span> {t.skills.i4}</div>
                </div>
            </div>

          </div>
        </section>

        <Suspense fallback={<div className="my-8"><SkeletonLine w="w-40" /></div>}>
          <PersonalizedFooter />
        </Suspense>
      </Layout>
    </Suspense>
  );
};

export default Index;