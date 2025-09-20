import Layout from '../components/Layout';
import ExperienceCard from '../components/ExperienceCard';
import ProjectCard from '../components/ProjectCard';
import WritingCard from '../components/WritingCard';

const Index = () => {
  return (
    <Layout>
      {/* About Section */}
      <section id="about" className="mb-8 scroll-mt-8 md:mb-12 lg:mb-16 lg:scroll-mt-12">
        <div className="sticky top-0 z-20 -mx-6 mb-2 w-screen bg-navy/75 px-6 py-3 backdrop-blur md:-mx-12 md:px-12 lg:-mx-24 lg:px-24 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate lg:sr-only">About</h2>
        </div>
        <div>
          <p className="mb-4">
            I'm a Software Engineering student who enjoys turning ideas into useful, well-crafted products. I focus on clear problem framing, thoughtful UI/UX, and reliable engineering—from front-end work in React/TypeScript to back-end APIs with .NET and SQL.
          </p>
          <p className="mb-4">
            I value teamwork, clarity, and incremental improvement, and I'm motivated by building things that genuinely help people. Currently pursuing my{' '}
            <a
              className="font-medium text-slate hover:text-green focus-visible:text-green"
              href="https://www.yasar.edu.tr/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Yaşar University (opens in a new tab)"
            >
              Bachelor's degree in Software Engineering at Yaşar University
            </a>
            , where I've gained hands-on experience with modern web technologies and software development practices.
          </p>
          <p className="mb-4">
            My technical expertise spans across front-end development with React, Vite, TypeScript, and Tailwind CSS, as well as back-end development using .NET 8, REST APIs, and SQL databases. I also have experience with Java ecosystem including JavaFX and Gradle, and comprehensive testing using Selenium WebDriver and JUnit 5.
          </p>
          <p>
            When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and finding creative solutions to everyday problems through software development.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="mb-8 scroll-mt-8 md:mb-12 lg:mb-16 lg:scroll-mt-12">
        <div className="sticky top-0 z-20 -mx-6 mb-2 w-screen bg-navy/75 px-6 py-3 backdrop-blur md:-mx-12 md:px-12 lg:-mx-24 lg:px-24 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate lg:sr-only">Experience</h2>
        </div>
        <div>
          <ol className="group/list">
            <li className="mb-12">
              <ExperienceCard
                period="2023 — Present"
                title="Volunteer Developer & Project Lead"
                company="YU-Sync"
                companyUrl="https://yu-sync.com"
                description="Built a volunteer scheduling app to help Yaşar University students select courses more easily. Drove the project from concept to a working web app and coordinated contributions, with an emphasis on simple UX and robust logic for backtracking-based course planning."
                technologies={['React', 'TypeScript', 'Tailwind CSS', 'JavaScript']}
                links={[
                  { label: 'yu-sync.com', url: 'https://yu-sync.com' }
                ]}
              />
            </li>
          </ol>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mb-8 scroll-mt-8 md:mb-12 lg:mb-16 lg:scroll-mt-12">
        <div className="sticky top-0 z-20 -mx-6 mb-2 w-screen bg-navy/75 px-6 py-3 backdrop-blur md:-mx-12 md:px-12 lg:-mx-24 lg:px-24 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate lg:sr-only">Projects</h2>
        </div>
        <div>
          <ul className="group/list">
            <li className="mb-12">
              <ProjectCard
                title="YU-Sync — Course Scheduling App"
                description="A volunteer web app that applies backtracking to help students compose valid schedules with preference handling (e.g., avoiding certain days). Front end with React + TypeScript + Tailwind; clean, mobile-first UI with robust state management and form flows for multi-step selection."
                technologies={['React', 'TypeScript', 'Tailwind CSS', 'JavaScript']}
                links={[
                  { label: 'yu-sync.com', url: 'https://yu-sync.com' }
                ]}
              />
            </li>
            <li className="mb-12">
              <ProjectCard
                title="3D Ray-Tracer Simulation"
                description="A Java-based ray tracer with a JavaFX UI for rendering previews and a small gallery of development steps. Includes a 'development journey' section documenting design choices and iterations."
                technologies={['Java', 'JavaFX', 'Gradle']}
              />
            </li>
            <li className="mb-12">
              <ProjectCard
                title="Avo Breeze — E-commerce Demo"
                description="A full-stack demo that showcases a production-style architecture with .NET 8 Web API, SQL database, JWT authentication, and Iyzico payment integration on the backend, paired with a React frontend using Bootstrap UI."
                technologies={['.NET 8', 'React', 'SQL', 'Bootstrap', 'JWT', 'Iyzico']}
              />
            </li>
            <li className="mb-12">
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
      <section id="writing" className="mb-8 scroll-mt-8 md:mb-12 lg:mb-16 lg:scroll-mt-12">
        <div className="sticky top-0 z-20 -mx-6 mb-2 w-screen bg-navy/75 px-6 py-3 backdrop-blur md:-mx-12 md:px-12 lg:-mx-24 lg:px-24 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate lg:sr-only">Education & Skills</h2>
        </div>
        <div>
          <div className="mb-8">
            <h3 className="text-lg font-medium text-lightest-slate mb-4">Education</h3>
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 hover:!opacity-100 group-hover/list:opacity-50">
              <div className="mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate sm:col-span-2">
                2023 — Present
              </div>
              <div className="sm:col-span-6">
                <h4 className="font-medium leading-snug text-lightest-slate">
                  <div>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-lightest-slate hover:text-green focus-visible:text-green  group/link text-base"
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

          <div>
            <h3 className="text-lg font-medium text-lightest-slate mb-4">Technical Skills</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-slate mb-2">Front-end Development</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Vite', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Bootstrap'].map((skill) => (
                    <span key={skill} className="inline-flex items-center rounded-full bg-green/10 px-2 py-1 text-xs font-medium text-green ring-1 ring-inset ring-green/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-slate mb-2">Back-end Development</h4>
                <div className="flex flex-wrap gap-2">
                  {['.NET 8', 'REST APIs', 'SQL', 'MySQL', 'SQL Server', 'JWT'].map((skill) => (
                    <span key={skill} className="inline-flex items-center rounded-full bg-green/10 px-2 py-1 text-xs font-medium text-green ring-1 ring-inset ring-green/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-slate mb-2">Java Ecosystem</h4>
                <div className="flex flex-wrap gap-2">
                  {['Java', 'JavaFX', 'Gradle'].map((skill) => (
                    <span key={skill} className="inline-flex items-center rounded-full bg-green/10 px-2 py-1 text-xs font-medium text-green ring-1 ring-inset ring-green/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-slate mb-2">Testing & QA</h4>
                <div className="flex flex-wrap gap-2">
                  {['Selenium WebDriver', 'JUnit 5', 'Black-box Testing'].map((skill) => (
                    <span key={skill} className="inline-flex items-center rounded-full bg-green/10 px-2 py-1 text-xs font-medium text-green ring-1 ring-inset ring-green/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-slate mb-2">Tools & Platforms</h4>
                <div className="flex flex-wrap gap-2">
                  {['GitHub', 'Vercel', 'Iyzico'].map((skill) => (
                    <span key={skill} className="inline-flex items-center rounded-full bg-green/10 px-2 py-1 text-xs font-medium text-green ring-1 ring-inset ring-green/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-slate mb-2">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {['Turkish (Native)', 'English (B1+ Intermediate)'].map((skill) => (
                    <span key={skill} className="inline-flex items-center rounded-full bg-green/10 px-2 py-1 text-xs font-medium text-green ring-1 ring-inset ring-green/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
