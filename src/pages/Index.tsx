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
              </a>.
            </p>
            {/* Personal mission statement */}
            <div className="mt-8 p-6 bg-gradient-to-r from-deep-blue/50 to-ocean-blue/30 rounded-xl border border-steel-blue/30 animated-border">
              <div className="flex items-start gap-3">
                <Target className="h-5 w-5 text-ui-blue mt-1 flex-shrink-0" />
                <p className="text-silver font-medium">
                  Try my best to improve myself
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
                        <p>Built a volunteer scheduling app to help Yaşar University students select courses more easily. Drove the project from concept to a working web app.</p>
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
                {/* --- NEW VULKAN PROJECT --- */}
                <li>
                  <ProjectCard
                    title="Vulkan BVH Ray Tracer"
                    description={
                      <p>
                        A high-performance, <strong>real-time ray tracing engine</strong> engineered from the ground up with <strong>Java</strong> and <strong>Vulkan</strong> (LWJGL). 
                        It moves beyond static images, offering a <strong>live viewer</strong> where you can import <strong>custom .obj models</strong>, manipulate scene geometry, and observe physically-based light interactions (reflections, soft shadows) at <strong>60+ FPS</strong>.
                      </p>
                    }
                    technologies={['Java 21', 'Vulkan', 'LWJGL', 'GLSL Compute', 'Multithreading']}
                    links={[{ label: 'GitHub', url: 'https://github.com/this-Demir/Vulkan-BVH-RayTracer', type: 'github' }]}
                    details={
                      <Suspense fallback={<SkeletonLine w="w-24" />}>
                        <ExpandableDetails label="Technical Deep Dive" size="sm">
                           <div className="space-y-4 min-w-0 break-words hyphens-auto" style={{ contentVisibility: 'auto' }}>
                            <InViewOnce
                              placeholder={<div className="h-40 rounded-lg bg-deep-blue/20 animate-pulse" />}
                            >
                              <Suspense fallback={<div className="h-40 rounded-lg bg-deep-blue/20 animate-pulse" />}>
                                <VulkanImageGrid />
                              </Suspense>
                            </InViewOnce>

                            <div className="space-y-3">
                                <h4 className="text-sm font-semibold text-pearl">Key Engineering Features:</h4>
                                <ul className="list-disc pl-5 text-sm text-silver/90 text-balance space-y-2">
                                  <li>
                                    <strong>Dynamic OBJ Loader & Scene Graph:</strong> Seamlessly parses external 3D models and integrates them into the scene. You can add objects, move them, and see how they interact with light in real-time.
                                  </li>
                                  <li>
                                    <strong>O(log n) GPU Acceleration:</strong> Utilizes a Bounding Volume Hierarchy (BVH) built on the CPU and flattened for the GPU. This allows rendering complex scenes (49,000+ triangles) with massive performance gains over the CPU version.
                                  </li>
                                  <li>
                                    <strong>Triple-Thread Architecture:</strong> I designed a custom architecture decoupling the <em>UI (Swing)</em>, <em>Render Engine (VRT)</em>, and <em>Scene Builder (SRT)</em> threads. This ensures the UI remains buttery smooth even when the heavy BVH reconstruction is happening in the background.
                                  </li>
                                  <li>
                                    <strong>Interactive Experience:</strong> Features a fully dynamic camera (WASD) and live material editing. It's not just a renderer; it's a tool.
                                  </li>
                                </ul>
                            </div>
                            <p className="text-xs italic text-ui-purple/90 border-t border-white/10 pt-2 mt-2">
                              "This project represents the evolution from understanding the math (CPU version) to mastering the hardware (Vulkan version)."
                            </p>
                          </div>
                        </ExpandableDetails>
                      </Suspense>
                    }
                  />
                </li>

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

                {/* --- OLD RAY TRACER (UPDATED) --- */}
                <li>
                  <ProjectCard
                    title="Legacy CPU Ray Tracer"
                    description={
                      <p>
                        The <strong>predecessor</strong> to the Vulkan engine. A physically-based path tracer written in Java with a <strong>JavaFX</strong> UI. While it runs entirely on the CPU, it served as the prototyping ground for the material system, lighting logic, and scene architecture now implemented in the GPU version.
                      </p>
                    }
                    technologies={['Java', 'JavaFX', 'CPU Rendering', 'Path Tracing']}
                    links={[{ label: 'GitHub', url: 'https://github.com/this-Demir/ArtGallery_SwingUI', type: 'github' }]}
                    details={
                      <Suspense fallback={<SkeletonLine w="w-24" />}>
                        <ExpandableDetails label="Legacy Details" size="sm">
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
                                <strong>Core Logic:</strong> Implements Monte-Carlo path tracing, dielectric (glass) materials, and soft lighting on the CPU.
                              </li>
                              <li>
                                <strong>Interactive UI:</strong> Features an outliner for object selection and property editing, though rendering is slower compared to the Vulkan implementation.
                              </li>
                            </ul>
                            <p className="text-xs italic text-cool-gray/70">
                                This project laid the mathematical foundation for the Vulkan engine but is limited by CPU single-thread performance.
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
                          <p className="mt-3">
                            <strong>14</strong> automated JUnit test classes. Techniques: Equivalence Partitioning, Boundary Value Analysis, Decision Tables, and Use-Case testing.
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
            
            {/* Education (Timeline Map Style - Reverse Chronological) */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="h-6 w-6 text-ui-blue" />
                <h3 className="text-xl font-semibold text-pearl">Education</h3>
              </div>

              {/* Education Map Container */}
              <div className="relative pl-6 space-y-12 border-l border-ui-blue/20 ml-2">
                
                {/* 1. YAŞAR UNIVERSITY (Top - Current) */}
                <div className="relative">
                   {/* Dot */}
                   <div className="absolute -left-[31px] top-1 h-4 w-4 rounded-full border-2 border-ui-blue bg-midnight shadow-[0_0_12px_rgba(56,189,248,0.4)] transition-all duration-300 group-hover:scale-110" />
                   
                   <div className="group relative grid pb-4 transition-all sm:grid-cols-8 sm:gap-8 hover:!opacity-100 group-hover/list:opacity-50 p-6 bg-gradient-to-r from-deep-blue/30 to-ocean-blue/20 rounded-xl border border-steel-blue/20 animated-border glow-on-hover">
                    <div className="mb-2 mt-1 text-sm font-semibold uppercase tracking-wide text-ui-blue sm:col-span-2">
                      2023 — Present
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
                              B.Sc. Software Engineering <span className="inline-block">— Yaşar University
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform hover:-translate-y-1 hover:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                  <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                                </svg>
                              </span>
                            </span>
                          </a>
                        </div>
                      </h4>
                      <div className="mt-2 flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-cool-gray">
                          <span>3rd Year Student</span>
                          <span className="hidden sm:inline text-ui-blue/50">•</span>
                          <span>GPA: <span className="text-ui-teal font-medium">3.18</span></span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. DENEYAP (Middle) */}
                <div className="relative">
                   {/* Dot */}
                   <div className="absolute -left-[31px] top-1 h-4 w-4 rounded-full border-2 border-ui-purple bg-midnight shadow-[0_0_12px_rgba(168,85,247,0.4)] transition-all duration-300" />
                   
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
                        Certificates
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
                </div>

              </div>
            </div>

            {/* Skills (NEW T-SHAPED LAYOUT) */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Cpu className="h-6 w-6 text-ui-blue" />
                <h3 className="text-xl font-semibold text-pearl">Technical Expertise</h3>
              </div>

              {/* 1. Core Specialization (NO FILTER) */}
              <div className="mb-10">
                <div className="flex items-center gap-4 mb-6">
                   <div className="h-px flex-1 bg-gradient-to-r from-ui-blue/50 to-transparent"></div>
                   <span className="text-sm font-semibold text-ui-blue tracking-widest uppercase">Core Specialization</span>
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
                      <span className="text-xs font-medium text-cool-gray uppercase tracking-widest">Technologies Used in Projects</span>
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
                  <h4 className="text-lg font-semibold text-pearl">Personal Interests</h4>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-cool-gray">
                  <div className="flex items-center gap-2"><span className="text-ui-purple">•</span> Former National Fencer</div>
                  <div className="flex items-center gap-2"><span className="text-ui-blue">•</span> Gaming Enthusiast</div>
                  <div className="flex items-center gap-2"><span className="text-ui-teal">•</span> World Traveler</div>
                  <div className="flex items-center gap-2"><span className="text-ui-purple">•</span> Tech Explorer</div>
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