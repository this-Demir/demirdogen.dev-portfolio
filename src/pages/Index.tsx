import Layout from '../components/Layout';
import ExperienceCard from '../components/ExperienceCard';
import ProjectCard from '../components/ProjectCard';
import AnimatedSkillBadge from '../components/AnimatedSkillBadge';
import VolunteerBadge from '../components/VolunteerBadge';
import PersonalizedFooter from '../components/PersonalizedFooter';
import { GraduationCap, Award, Target } from 'lucide-react';

const Index = () => {
  return (
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
              aria-label="Yaşar University (opens in a new tab)"
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
        <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <ol className="group/list space-y-8">
            <li>
              <ExperienceCard
                period="2023 — Present"
                title="Volunteer Developer & Project Lead"
                company="YU-Sync"
                companyUrl="https://yu-sync.com"
                description={
                  <div className="space-y-3">
                    <p>Built a volunteer scheduling app to help Yaşar University students select courses more easily. Drove the project from concept to a working web app and coordinated contributions, with an emphasis on simple UX and robust logic for backtracking-based course planning.</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <VolunteerBadge type="volunteer" />
                      <VolunteerBadge type="users" delay={100} />
                    </div>
                  </div>
                }
                technologies={['React', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'Python']}
                links={[
                  { label: 'yu-sync.com', url: 'https://yu-sync.com' }
                ]}
              />
            </li>
          </ol>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mb-12 scroll-mt-8 md:mb-16 lg:mb-20 lg:scroll-mt-12">
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-midnight/80 px-6 py-4 backdrop-blur md:-mx-12 md:px-12 lg:-mx-24 lg:px-24 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-cool-gray lg:sr-only">Projects</h2>
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <ul className="group/list space-y-8">
            <li>
              <ProjectCard
                title="YU-Sync — Course Scheduling App"
                description={
                  <div className="space-y-3">
                    <p>A volunteer web app that applies backtracking to help students compose valid schedules with preference handling (e.g., avoiding certain days). Front end with React + TypeScript + Tailwind; clean, mobile-first UI with robust state management and form flows for multi-step selection.</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <VolunteerBadge type="volunteer" />
                      <VolunteerBadge type="users" delay={100} />
                    </div>
                  </div>
                }
                technologies={['React', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'Python']}
                links={[
                  { label: 'yu-sync.com', url: 'https://yu-sync.com' }
                ]}
              />
            </li>
            <li>
              <ProjectCard
                title="3D Ray-Tracer Simulation"
                description="A Java-based ray tracer with a JavaFX UI for rendering previews and a small gallery of development steps. Includes a 'development journey' section documenting design choices and iterations."
                technologies={['Java', 'JavaFX', 'Gradle']}
              />
            </li>
            <li>
              <ProjectCard
                title="Avo Breeze — E-commerce Demo"
                description="A full-stack demo that showcases a production-style architecture with .NET 8 Web API, SQL database, JWT authentication, and Iyzico payment integration on the backend, paired with a React frontend using Bootstrap UI."
                technologies={['.NET 8', 'React', 'SQL', 'Bootstrap', 'JWT', 'Iyzico']}
              />
            </li>
            <li>
              <ProjectCard
                title="Art Gallery Swing UI"
                description="A SQL-focused Java Swing application for artwork listing, bidding, rating, and sales. Most business logic implemented in the database layer with stored procedures, functions, views, and triggers."
                technologies={['Java', 'MySQL', 'JDBC', 'Gradle']}
                links={[
                  { label: 'GitHub', url: 'https://github.com/this-Demir/ArtGallery_SwingUI', type: 'github' }
                ]}
              />
            </li>
          </ul>
        </div>
      </section>

      {/* Education & Skills Section */}
      <section id="writing" className="mb-12 scroll-mt-8 md:mb-16 lg:mb-20 lg:scroll-mt-12">
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-midnight/80 px-6 py-4 backdrop-blur md:-mx-12 md:px-12 lg:-mx-24 lg:px-24 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-cool-gray lg:sr-only">Education & Skills</h2>
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
                        Science High School{' '}
                        <span className="inline-block">
                          — Doğa Koleji Fen Lisesi
                        </span>
                      </span>
                    </div>
                  </h4>
                </div>
              </div>
              
              <div className="group relative grid pb-4 transition-all sm:grid-cols-8 sm:gap-8 hover:!opacity-100 group-hover/list:opacity-50 p-6 bg-gradient-to-r from-deep-blue/30 to-ocean-blue/20 rounded-xl border border-steel-blue/20 animated-border glow-on-hover">
                <div className="mb-2 mt-1 text-sm font-semibold uppercase tracking-wide text-ui-blue sm:col-span-2">
                  2023 — Present
                </div>
                <div className="sm:col-span-6">
                  <h4 className="font-medium leading-snug text-pearl text-lg">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-pearl hover:text-ui-blue focus-visible:text-ui-blue group/link transition-colors duration-300"
                        href="https://www.yasar.edu.tr/"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="Yaşar University (opens in a new tab)"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          B.Sc. Software Engineering{' '}
                          <span className="inline-block">
                            — Yaşar University
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clipRule="evenodd"
                              ></path>
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
            <div className="space-y-8">
              <div>
                <h4 className="text-base font-medium text-silver mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-ui-blue rounded-full"></span>
                  Front-end Development
                </h4>
                <div className="flex flex-wrap gap-3">
                  {['React', 'Vite', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Bootstrap'].map((skill, index) => (
                    <AnimatedSkillBadge key={skill} skill={skill} category="frontend" delay={index * 100} />
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-base font-medium text-silver mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-ui-purple rounded-full"></span>
                  Back-end Development
                </h4>
                <div className="flex flex-wrap gap-3">
                  {['.NET 8', 'REST APIs', 'SQL', 'MySQL', 'SQL Server', 'JWT', 'Python'].map((skill, index) => (
                    <AnimatedSkillBadge key={skill} skill={skill} category="backend" delay={index * 100} />
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-base font-medium text-silver mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-ui-teal rounded-full"></span>
                  Java Ecosystem
                </h4>
                <div className="flex flex-wrap gap-3">
                  {['Java', 'JavaFX', 'Gradle'].map((skill, index) => (
                    <AnimatedSkillBadge key={skill} skill={skill} category="java" delay={index * 100} />
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-base font-medium text-silver mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-ui-blue rounded-full"></span>
                  Testing & QA
                </h4>
                <div className="flex flex-wrap gap-3">
                  {['Selenium WebDriver', 'JUnit 5', 'Black-box Testing'].map((skill, index) => (
                    <AnimatedSkillBadge key={skill} skill={skill} category="testing" delay={index * 100} />
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-base font-medium text-silver mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-ui-purple rounded-full"></span>
                  Tools & Platforms
                </h4>
                <div className="flex flex-wrap gap-3">
                  {['GitHub', 'Vercel', 'Iyzico'].map((skill, index) => (
                    <AnimatedSkillBadge key={skill} skill={skill} category="tools" delay={index * 100} />
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-base font-medium text-silver mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-ui-teal rounded-full"></span>
                  Languages
                </h4>
                <div className="flex flex-wrap gap-3">
                  {['Turkish (Native)', 'English (B1+ Intermediate)'].map((skill, index) => (
                    <AnimatedSkillBadge key={skill} skill={skill} category="languages" delay={index * 100} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PersonalizedFooter />
    </Layout>
  );
};

export default Index;
