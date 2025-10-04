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
import { GraduationCap, Award, Target, Briefcase, Code2, ChevronDown, ExternalLink } from 'lucide-react';

// LAZY COMPONENT IMPORTS
const Layout = lazy(() => import('../components/Layout'));
const ExperienceCard = lazy(() => import('../components/ExperienceCard'));
const ProjectCard = lazy(() => import('../components/ProjectCard'));
const VolunteerBadge = lazy(() => import('../components/VolunteerBadge'));
const PersonalizedFooter = lazy(() => import('../components/PersonalizedFooter'));
const SkillLogoGrid = lazy(() => import('../components/SkillLogoGrid'));
const ExpandableDetails = lazy(() => import('@/components/ExpandableDetails'));

import type { SkillLogoItem } from '../components/SkillLogoGrid';
import { PassThrough } from 'stream';
import { skipToken } from '@tanstack/react-query';

/* ----------- LOGOS ----------- */
const FRONTEND_LOGOS: SkillLogoItem[] = [
  { name: 'React', query: ['react'], href: 'https://react.dev' },
  { name: 'Vite', query: ['vite'], href: 'https://vitejs.dev' },
  { name: 'TypeScript', query: ['typescript', 'ts'], href: 'https://www.typescriptlang.org/' },
  { name: 'JavaScript', query: ['javascript', 'js'], href: 'https://developer.mozilla.org/docs/Web/JavaScript' },
  { name: 'Tailwind CSS', query: ['tailwind', 'tailwindcss'], href: 'https://tailwindcss.com' },
  { name: 'Bootstrap', query: ['bootstrap'], href: 'https://getbootstrap.com' },
];

const BACKEND_LOGOS: SkillLogoItem[] = [
  { name: '.NET 8', query: ['dotnet', 'net', '.net'], href: 'https://dotnet.microsoft.com/' },
  { name: 'REST APIs', query: ['rest', 'openapi', 'swagger'], href: 'https://swagger.io/specification/' },
  { name: 'MySQL', query: ['mysql'], href: 'https://www.mysql.com/' },
  { name: 'C#', query: ['csharp', 'c#', 'c-sharp', 'cs'], href: 'https://learn.microsoft.com/dotnet/csharp/' },
  { name: 'Python', query: ['python', 'py'], href: 'https://www.python.org/' },
];

const JAVA_LOGOS: SkillLogoItem[] = [
  { name: 'Java', query: ['java'], href: 'https://www.java.com/' },
  { name: 'JavaFX', query: ['javafx'] },
  { name: 'Gradle', query: ['gradle'], href: 'https://gradle.org/' },
];

const TESTING_LOGOS: SkillLogoItem[] = [
  { name: 'Selenium', query: ['selenium', 'webdriver'], href: 'https://www.selenium.dev/' },
  { name: 'JUnit 5', query: ['junit5', 'junit'], href: 'https://junit.org/junit5/' },
  { name: 'Postman', query: ['postman'], href: 'https://www.postman.com' },
];

const TOOLS_LOGOS: SkillLogoItem[] = [
  { name: 'GitHub', query: ['github'], href: 'https://github.com' },
  { name: 'Vercel', query: ['vercel'], href: 'https://vercel.com' },
  { name: 'Iyzico', query: ['iyzico'], href: 'https://www.iyzico.com' },
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
   LAZY CHUNK: RAY TRACER IMAGES
   (sadece görünür olduğunda yüklenir)
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
        className="block w-full h-auto max-w-full rounded-lg border border-slate/15"
        loading="lazy"
        decoding="async"
        fetchPriority="low"
        sizes="(max-width: 640px) 100vw, 33vw"
      />
      <img
        src={shot2.default}
        alt="Ray debug + UI panel"
        className="block w-full h-auto max-w-full rounded-lg border border-slate/15"
        loading="lazy"
        decoding="async"
        fetchPriority="low"
        sizes="(max-width: 640px) 100vw, 33vw"
      />
      <img
        src={shot3.default}
        alt="Glass & metal materials"
        className="block w-full h-auto max-w-full rounded-lg border border-slate/15"
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
   LAZY CHUNK: DENEYAP CERT LIST
   (toggle edilince indirilir)
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
    <ul className="space-y-2">
      {CERTS.map(c => (
        <li key={c.title}>
          <a
            href={c.url}
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex items-center justify-between w-full rounded-md px-3 py-2 border border-steel-blue/30 hover:border-ui-blue/50 bg-midnight/40 hover:bg-midnight/60 transition-colors text-pearl"
            aria-label={`${c.title} certificate (${c.date}) — opens in a new tab`}
          >
            <span className="text-sm">
              <span className="font-medium">{c.title}</span>
              <span className="text-cool-gray"> — {c.date}</span>
            </span>
            <ExternalLink className="h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity" />
          </a>
        </li>
      ))}
    </ul>
  );

  return { default: Comp };
});

const Index = () => {
  const [showDeneyapCerts, setShowDeneyapCerts] = useState(false);

  const navItems = useMemo(
    () => [
      { id: 'about', label: 'About' },
      { id: 'experience', label: 'Experience' },
      { id: 'projects', label: 'Projects' },
      { id: 'writing', label: 'Skills' },
    ],
    []
  );

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <Suspense fallback={<div className="min-h-screen bg-background text-foreground font-sans relative overflow-x-clip"></div>}>
      <Layout>
        {/* About Section */}
        <section id="about" className="mb-12 scroll-mt-8 md:mb-16 lg:mb-20 lg:scroll-mt-12">
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-midnight/80 px-6 py-4 backdrop-blur md:-mx-12 md:px-12 lg:-mx-24 lg:px-24 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-cool-gray lg:sr-only">About</h2>
          </div>
          <div className="space-y-6 animate-fade-in-up">
            <p className="text-lg leading-relaxed text-silver">
              I'm a Software Engineering student who enjoys turning ideas into useful, well-crafted products. I focus on clear problem framing, thoughtful UI/UX, and reliable engineering—from front-end work in React/TypeScript to back-end APIs with .NET and SQL.
            </p>
            <p className="leading-relaxed text-cool-gray">
              I value teamwork, clarity, and incremental improvement, and I'm motivated by building things that genuinely help people. Currently pursuing my{' '}
              <a
                className="font-medium text-ui-blue hover:text-ui-purple focus-visible:text-ui-purple transition-colors duration-300 glow-on-hover px-1 py-0.5 rounded"
                href="https://www.yasar.edu.tr/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Yaşar University"
              >
                Bachelor's degree in Software Engineering at Yaşar University
              </a>
              , where I've gained hands-on experience with modern web technologies and software development practices.
            </p>
            <p className="leading-relaxed text-cool-gray">
              My technical expertise spans across front-end development with React, Vite, TypeScript, and Tailwind CSS, as well as back-end development using .NET 8, REST APIs, and SQL databases. I also have experience with Java ecosystem including JavaFX and Gradle, and comprehensive testing using Selenium WebDriver and JUnit 5.
            </p>

            {/* Personal mission statement */}
            <div className="mt-8 p-6 bg-gradient-to-r from-deep-blue/50 to-ocean-blue/30 rounded-xl border border-steel-blue/30 animated-border">
              <div className="flex items-start gap-3">
                <Target className="h-5 w-5 text-ui-blue mt-1 flex-shrink-0" />
                <p className="text-silver font-medium">
                  "When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and finding creative solutions to everyday problems through software development."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-12 scroll-mt-8 md:mb-16 lg:mb-20 lg:scroll-mt-12">
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-midnight/80 px-6 py-4 backdrop-blur md:-mx-12 md:px-12 lg:-mx-24 lg:px-24 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-cool-gray lg:sr-only">Experience</h2>
          </div>
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="h-6 w-6 text-ui-blue" />
            <h2 className="text-xl font-semibold text-pearl">Experience</h2>
          </div>

          <Suspense fallback={<CardSkeleton />}>
            <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <ol className="group/list space-y-8">
                <li>
                  <ExperienceCard
                    period="2025 — Present"
                    title="Volunteer Developer & Project Lead"
                    company="YU-Sync"
                    companyUrl="https://yu-sync.com"
                    description={
                      <div className="space-y-3">
                        <p>
                          Built a volunteer scheduling app to help Yaşar University students select courses more easily. Drove the project from concept to a working web app and coordinated contributions, with an emphasis on simple UX and robust logic for backtracking-based course planning.
                        </p>
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
            <h2 className="text-sm font-bold uppercase tracking-widest text-cool-gray lg:sr-only">Projects</h2>
          </div>
          <div className="flex items-center gap-3 mb-8">
            <Code2 className="h-6 w-6 text-ui-purple" />
            <h2 className="text-xl font-semibold text-pearl">Featured Projects</h2>
          </div>

          <Suspense fallback={<CardSkeleton />}>
            <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <ul className="group/list space-y-8">
                <li>
                  <ProjectCard
                    title="YU-Sync — Smart Course Scheduler"
                    description="A volunteer web app that helps Yaşar University students build conflict-free timetables with a clean, mobile-first UX. Uses a backtracking solver to generate valid schedules while honoring user preferences."
                    technologies={['React', 'TypeScript', 'Tailwind', 'JavaScript', 'Python']}
                    links={[{ label: 'yu-sync.com', url: 'https://yu-sync.com' }]}
                    details={
                      <Suspense fallback={<SkeletonLine w="w-24" />}>
                        <ExpandableDetails label="Details" size="sm">
                          <div className="space-y-3">
                            <div className="rounded-lg border border-steel-blue/30 bg-midnight/40 p-3">
                              <p className="text-sm text-cool-gray mb-2 font-medium">What it does</p>
                              <ul className="list-disc pl-5 text-sm text-cool-gray space-y-1">
                                <li>
                                  <strong>Helps Yaşar University students</strong> build conflict-free timetables using a backtracking search with lightweight heuristics and pruning.
                                </li>
                                <li>
                                  <strong>One-tap selection</strong> flows for quick add/remove and “try another schedule”.
                                </li>
                                <li>
                                  Focused, <strong>mobile-first UI</strong> for fast, distraction-free course picking.
                                </li>
                              </ul>
                            </div>

                            <div className="rounded-lg border border-steel-blue/30 bg-midnight/40 p-3">
                              <p className="text-sm text-cool-gray mb-2 font-medium">Usage & Reach (snapshot)</p>
                              <ul className="list-disc pl-5 text-sm text-cool-gray space-y-1">
                                <li>
                                  <strong>~5–6K</strong> visitors • <strong>~10–12K</strong> page views (recent 2-week window)
                                </li>
                                <li>Primarily organic discovery via search.</li>
                              </ul>
                            </div>

                            <div className="rounded-lg border border-steel-blue/30 bg-midnight/40 p-3">
                              <p className="text-sm text-cool-gray mb-2 font-medium">Performance</p>
                              <ul className="list-disc pl-5 text-sm text-cool-gray space-y-1">
                                <li>
                                  Real Experience Score (Desktop): <strong>100/100</strong>
                                </li>
                              </ul>
                            </div>

                            <p className="text-xs italic text-ui-purple/90">
                              Built as a community project; no affiliation with Yaşar University. Hosting on Vercel. Numbers shown are indicative ranges; raw analytics are not exposed.
                            </p>
                          </div>
                        </ExpandableDetails>
                      </Suspense>
                    }
                  />
                </li>

                <li>
                  <ProjectCard
                    title="Java 3D Ray Tracing Simulation"
                    description={
                      <p>
                        A physically-based <strong>path tracer</strong> written in Java with an interactive <strong>JavaFX</strong> UI. Supports diffuse/metal/glass (dielectric) and emissive materials, reflections/refractions, soft lighting and an exposure/ brightness workflow. The outliner + material panel let you tweak objects live and visualize bounce rays while rendering.
                      </p>
                    }
                    technologies={['Java 21', 'Gradle', 'JavaFX UI', 'Path Tracing', 'AABB']}
                    links={[{ label: 'GitHub', url: 'https://github.com/this-Demir/ArtGallery_SwingUI', type: 'github' }]}
                    details={
                      <Suspense fallback={<SkeletonLine w="w-24" />}>
                        <ExpandableDetails label="Details" size="sm">
                          {/* metin taşmalarını engelle */}
                          <div className="space-y-3 min-w-0 break-words hyphens-auto" style={{ contentVisibility: 'auto' }}>
                            {/* Görünür olunca mount olur → resim chunk'ı o zaman iner */}
                            <InViewOnce
                              placeholder={<div className="h-28 rounded-lg bg-deep-blue/20 animate-pulse" />}
                            >
                              <Suspense fallback={<div className="h-28 rounded-lg bg-deep-blue/20 animate-pulse" />}>
                                <RayImageGrid />
                              </Suspense>
                            </InViewOnce>

                            <ul className="list-disc pl-5 text-sm text-silver/90 text-balance">
                              <li>
                                <strong>Renderer:</strong> Monte-Carlo path tracing with multiple bounces, tone mapping / exposure &amp; gamma correction.
                              </li>
                              <li>
                                <strong>Materials:</strong> Lambertian (diffuse), Metal, Dielectric (glass) and Emissive lights.
                              </li>
                              <li>
                                <strong>UI/Tools:</strong> Outliner (select objects), live <em>Transform</em> &amp; <em>Material</em> editing, add/remove spheres, “Show Rays” overlay, mouse-look camera, SPP/Exposure sliders.
                              </li>
                              <li>
                                <strong>Geometry:</strong> Spheres, XZ rectangles, disks; intersection bounds via <em>AABB</em>.
                              </li>
                            </ul>

                            <p className="text-xs italic text-ui-purple/90 text-balance">
                              This simulation is <strong>CPU</strong> based.
                            </p>
                          </div>
                        </ExpandableDetails>
                      </Suspense>
                    }
                  />
                </li>

                <li>
                  <ProjectCard
                    title="Udemy Web Application Test Plan"
                    description={
                      <p>
                        A black-box UI testing project for a learning website. Using <strong> Selenium WebDriver</strong> and <strong>JUnit 5</strong>, it automates user flows like search, category navigation, cart, checkout, and total calculations to verify the site behaves correctly—even with unexpected inputs.
                      </p>
                    }
                    technologies={['Java', 'JUnit 5', 'Selenium WebDriver', 'ChromeDriver']}
                    links={[{ label: 'GitHub', url: 'https://github.com/this-Demir/Se2226-Testing', type: 'github' }]}
                    details={
                      <Suspense fallback={<SkeletonLine w="w-24" />}>
                        <ExpandableDetails label="Details" size="sm">
                          <div className="rounded-lg border border-steel-blue/30 bg-midnight/40 p-3">
                            <p className="text-sm text-cool-gray mb-2 font-medium">Test Bots</p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-cool-gray">
                              <li>• <strong>DiscUdemyTestBot</strong> — search, category navigation, title validation</li>
                              <li>• <strong>UdemyTestBot</strong> — search testing (limited by Cloudflare bot protection)</li>
                              <li>• <strong>SauceDemoTestBot</strong> — cart, checkout, totals/tax verification</li>
                            </ul>
                          </div>

                          <p className="mt-3">
                            <strong>14</strong> automated JUnit test classes. Techniques: Equivalence Partitioning, Boundary Value Analysis, Decision Tables, and Use-Case testing.
                          </p>

                          <ul className="list-disc pl-5">
                            <li>Search: valid/invalid keywords, length limits, forbidden characters</li>
                            <li>Categories: navigation across multiple category buttons</li>
                            <li>Cart/Checkout: add/remove, login requirement, duplicates, boundary states</li>
                            <li>Financials: total = subtotal + tax; mismatch and zero-tax scenarios</li>
                          </ul>

                          <p className="text-xs italic text-ui-blue/90 mt-2">
                            Note: Due to bot protection on Udemy, search tests use DiscUdemy where possible. SauceDemo is used as a reliable e-commerce simulation.
                          </p>

                          <p className="text-xs italic text-ui-purple/90">This project is <strong>entirely for educational purposes</strong>.</p>
                        </ExpandableDetails>
                      </Suspense>
                    }
                  />
                </li>

                <li>
                  <ProjectCard
                    title="Avo Breeze — E-commerce Demo"
                    description="A full-stack demo that showcases a production-style architecture with .NET 8 Web API, SQL database, JWT authentication, and Iyzico payment integration on the backend, paired with a React frontend using Bootstrap UI."
                    technologies={['.NET 8', 'React', 'SQL', 'Bootstrap', 'JWT', 'Iyzico']}
                    links={[{ label: 'GitHub', url: 'https://github.com/this-Demir/ArtGallery_SwingUI', type: 'github' }]}
                  />
                </li>

                <li>
                  <ProjectCard
                    title="Art Gallery Swing UI"
                    description="A SQL-focused Java Swing application for artwork listing, bidding, rating, and sales. Most business logic implemented in the database layer with stored procedures, functions, views, and triggers."
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
            <h2 className="text-sm font-bold uppercase tracking-widest text-cool-gray lg:sr-only">Education &amp; Skills</h2>
          </div>

          <div className="space-y-12 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="h-6 w-6 text-ui-blue" />
                <h3 className="text-xl font-semibold text-pearl">Education</h3>
              </div>
              <div className="space-y-6">
                <div className="group relative grid pb-4 transition-all sm:grid-cols-8 sm:gap-8 hover:!opacity-100 group-hover/list:opacity-50 p-6 bg-gradient-to-r from-deep-blue/30 to-ocean-blue/20 rounded-xl border border-steel-blue/20 animated-border glow-on-hover">
                  <div className="mb-2 mt-1 text-sm font-semibold uppercase tracking-wide text-ui-teal sm:col-span-2">
                    2019 — 2023
                  </div>
                  <div className="sm:col-span-6">
                    <h4 className="font-medium leading-snug text-pearl text-lg">
                      <div>
                        <span>
                          Science High School <span className="inline-block">— Doğa Koleji Fen Lisesi</span>
                        </span>
                      </div>
                    </h4>
                  </div>
                </div>

                {/* DENEYAP */}
                <div className="group relative grid pb-4 transition-all sm:grid-cols-8 sm:gap-8 hover:!opacity-100 group-hover/list:opacity-50 p-6 bg-gradient-to-r from-deep-blue/30 to-ocean-blue/20 rounded-xl border border-steel-blue/20 animated-border glow-on-hover">
                  <div className="mb-2 mt-1 text-sm font-semibold uppercase tracking-wide text-ui-purple sm:col-span-2">2020 — 2023</div>
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
                            Science &amp; Innovation Program of Turkey{' '}
                            <span className="inline-block">
                              — DENEYAP Technology Workshops
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform hover:-translate-y-1 hover:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                              </svg>
                            </span>
                          </span>
                        </a>
                      </div>
                    </h4>

                    <p className="text-sm text-cool-gray mt-2">
                      Advanced technology and innovation program focused on STEM education, programming, and project-based learning.
                    </p>

                    {/* DENEYAP Certificates Toggle (mount-on-toggle) */}
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
                      Certificates
                      <ChevronDown className={`h-4 w-4 transition-transform ${showDeneyapCerts ? 'rotate-180' : ''}`} />
                    </button>

<div
  id="deneyap-certs"
  className={`mt-3 relative z-20 rounded-lg border border-steel-blue/30 bg-midnight/40 p-4 text-sm text-cool-gray ${
    showDeneyapCerts ? '' : 'hidden'
  }`}
  aria-hidden={!showDeneyapCerts}
>
  <Suspense fallback={<SkeletonLine w="w-28" />}>
    <DeneyapCertList />
  </Suspense>
</div>

                  </div>
                </div>

                {/* Yaşar University */}
                <div className="group relative grid pb-4 transition-all sm:grid-cols-8 sm:gap-8 hover:!opacity-100 group-hover/list:opacity-50 p-6 bg-gradient-to-r from-deep-blue/30 to-ocean-blue/20 rounded-xl border border-steel-blue/20 animated-border glow-on-hover">
                  <div className="mb-2 mt-1 text-sm font-semibold uppercase tracking-wide text-ui-blue sm:col-span-2">2023 — Present</div>
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
                            B.Sc. Software Engineering <span className="inline-block">— Yaşar University
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform hover:-translate-y-1 hover:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                              </svg>
                            </span>
                          </span>
                        </a>
                      </div>
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Award className="h-6 w-6 text-ui-purple" />
                <h3 className="text-xl font-semibold text-pearl">Technical Skills</h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Frontend Skills */}
                <div className="bg-gradient-to-br from-ui-blue/10 to-ui-blue/5 p-7 rounded-xl border border-ui-blue/20 hover:border-ui-blue/40 transition-all duration-300 glow-on-hover min-h-[260px]">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 bg-ui-blue rounded-full animate-pulse" />
                    <h4 className="text-lg font-semibold text-pearl">Front-end Development</h4>
                  </div>
                  <Suspense fallback={<SkeletonLine w="w-28" />}>
                    <SkillLogoGrid items={FRONTEND_LOGOS} perRow={3} size="lg" className="mx-auto" />
                  </Suspense>
                </div>

                {/* Backend Skills */}
                <div className="bg-gradient-to-br from-ui-purple/10 to-ui-purple/5 p-7 rounded-xl border border-ui-purple/20 hover:border-ui-purple/40 transition-all duration-300 glow-on-hover min-h-[260px]">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 bg-ui-purple rounded-full animate-pulse" />
                    <h4 className="text-lg font-semibold text-pearl">Back-end Development</h4>
                  </div>
                  <Suspense fallback={<SkeletonLine w="w-28" />}>
                    <SkillLogoGrid items={BACKEND_LOGOS} perRow={3} size="lg" className="mx-auto" />
                  </Suspense>
                </div>

                {/* Java Skills */}
                <div className="bg-gradient-to-br from-ui-teal/10 to-ui-teal/5 p-7 rounded-xl border border-ui-teal/20 hover:border-ui-teal/40 transition-all duration-300 glow-on-hover min-h-[230px]">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 bg-ui-teal rounded-full animate-pulse" />
                    <h4 className="text-lg font-semibold text-pearl">Java Ecosystem</h4>
                  </div>
                  <Suspense fallback={<SkeletonLine w="w-28" />}>
                    <SkillLogoGrid items={JAVA_LOGOS} perRow={3} size="lg" className="mx-auto" />
                  </Suspense>
                </div>

                {/* Testing Skills */}
                <div className="bg-gradient-to-br from-ui-blue/10 to-ui-teal/5 p-7 rounded-xl border border-ui-blue/20 hover:border-ui-teal/40 transition-all duration-300 glow-on-hover min-h-[230px]">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 bg-gradient-to-r from-ui-blue to-ui-teal rounded-full animate-pulse" />
                    <h4 className="text-lg font-semibold text-pearl">Testing &amp; QA</h4>
                  </div>
                  <Suspense fallback={<SkeletonLine w="w-28" />}>
                    <SkillLogoGrid items={TESTING_LOGOS} perRow={3} size="lg" className="mx-auto" />
                  </Suspense>
                </div>

                {/* Tools & Platforms */}
                <div className="lg:col-span-2">
                  <div className="bg-gradient-to-r from-ui-purple/10 via-ui-blue/10 to-ui-teal/10 p-7 rounded-xl border border-ui-purple/20 hover:border-ui-blue/40 transition-all duration-300 glow-on-hover min-h-[230px]">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-3 h-3 bg-gradient-to-r from-ui-purple via-ui-blue to-ui-teal rounded-full animate-pulse" />
                      <h4 className="text-lg font-semibold text-pearl">Tools &amp; Platforms</h4>
                    </div>
                    <Suspense fallback={<SkeletonLine w="w-28" />}>
                      <SkillLogoGrid items={TOOLS_LOGOS} perRow={3} size="lg" className="mx-auto" />
                    </Suspense>
                  </div>
                </div>

                {/* Languages */}
                <div className="lg:col-span-2">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-xl mr-1 select-none opacity-90" aria-hidden="true" title="Languages">🌐</span>
                      <h4 className="text-lg font-semibold text-pearl">Languages</h4>
                    </div>
                    <div className="flex gap-12 justify-center">
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-3 mb-2">
                          <span className="text-3xl">🇹🇷</span>
                        </div>
                        <div>
                          <h5 className="font-semibold text-pearl text-lg">Turkish</h5>
                          <span className="text-sm text-ui-teal">Native</span>
                        </div>
                      </div>

                      <div className="text-center">
                        <div className="flex items-center justify-center gap-3 mb-2">
                          <span className="text-3xl">🇺🇸</span>
                        </div>
                        <div>
                          <h5 className="font-semibold text-pearl text-lg">English</h5>
                          <span className="text-sm text-ui-blue">B1+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Personal Interests */}
                <div className="lg:col-span-2">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-xl mr-1 select-none opacity-90" aria-hidden="true" title="Personal Interests">☆</span>
                      <h4 className="text-lg font-semibold text-pearl">Personal Interests</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="flex items-center gap-3">
                        <div>
                          <h5 className="font-semibold text-pearl">Former National Fencer</h5>
                          <span className="text-sm text-ui-purple">Turkey National Team</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div>
                          <h5 className="font-semibold text-pearl">Gaming Enthusiast</h5>
                          <span className="text-sm text-ui-blue">Online Games</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div>
                          <h5 className="font-semibold text-pearl">Travel Explorer</h5>
                          <span className="text-sm text-ui-teal">World Traveler</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div>
                          <h5 className="font-semibold text-pearl">Tech Learning</h5>
                          <span className="text-sm text-ui-purple">New Technologies</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

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
