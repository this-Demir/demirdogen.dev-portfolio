import Layout from '../components/Layout';
import ExperienceCard from '../components/ExperienceCard';
import ProjectCard from '../components/ProjectCard';
import WritingCard from '../components/WritingCard';

const Index = () => {
  return (
    <Layout>
      {/* About Section */}
      <section id="about" className="mb-8 scroll-mt-8 md:mb-12 lg:mb-16 lg:scroll-mt-12">
        <div className="sticky top-0 z-20 -mx-1.5 mb-2 w-screen bg-navy/75 px-1.5 py-3 backdrop-blur md:-mx-3 md:px-3 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate lg:sr-only">About</h2>
        </div>
        <div>
          <p className="mb-4">
            I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.
          </p>
          <p className="mb-4">
            Currently, I'm a Senior Front-End Engineer at{' '}
            <a
              className="font-medium text-slate hover:text-green focus-visible:text-green"
              href="https://www.klaviyo.com/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Klaviyo (opens in a new tab)"
            >
              Klaviyo
            </a>
            , specializing in accessibility. I contribute to the creation and maintenance of UI components that power Klaviyo's frontend, ensuring our platform meets web accessibility standards and best practices to deliver an inclusive user experience.
          </p>
          <p className="mb-4">
            In the past, I've had the opportunity to develop software across a variety of settings — from{' '}
            <a
              className="font-medium text-slate hover:text-green focus-visible:text-green"
              href="https://us.mullenlowe.com/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="advertising agencies (opens in a new tab)"
            >
              advertising agencies
            </a>{' '}
            and{' '}
            <a
              className="font-medium text-slate hover:text-green focus-visible:text-green"
              href="https://www.apple.com/apple-music/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="large corporations (opens in a new tab)"
            >
              large corporations
            </a>{' '}
            to{' '}
            <a
              className="font-medium text-slate hover:text-green focus-visible:text-green"
              href="https://starry.com/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="start-ups (opens in a new tab)"
            >
              start-ups
            </a>{' '}
            and{' '}
            <a
              className="font-medium text-slate hover:text-green focus-visible:text-green"
              href="https://upstatement.com/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="small digital product studios (opens in a new tab)"
            >
              small digital product studios
            </a>
            . Additionally, I also released a{' '}
            <a
              className="font-medium text-slate hover:text-green focus-visible:text-green"
              href="https://www.newline.co/courses/build-a-spotify-connected-app"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="comprehensive video course (opens in a new tab)"
            >
              comprehensive video course
            </a>{' '}
            a few years ago, guiding learners through building a web app with the Spotify API.
          </p>
          <p>
            In my spare time, I'm usually climbing, playing tennis, hanging out with my wife and two cats, or running around Hyrule searching for{' '}
            <span className="group/korok relative inline-flex cursor-help items-center text-slate hover:text-green">
              <span className="sr-only">Korok seeds</span>
              <span className="group-hover/korok:text-green" aria-hidden="true">
                Korok seeds
              </span>
            </span>
            .
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="mb-8 scroll-mt-8 md:mb-12 lg:mb-16 lg:scroll-mt-12">
        <div className="sticky top-0 z-20 -mx-1.5 mb-2 w-screen bg-navy/75 px-1.5 py-3 backdrop-blur md:-mx-3 md:px-3 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate lg:sr-only">Experience</h2>
        </div>
        <div>
          <ol className="group/list">
            <li className="mb-6 lg:mb-8">
              <ExperienceCard
                period="2024 — Present"
                title="Senior Frontend Engineer, Accessibility"
                company="Klaviyo"
                companyUrl="https://www.klaviyo.com/"
                description="Build and maintain critical components used to construct Klaviyo's frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility."
                technologies={['JavaScript', 'TypeScript', 'React', 'Storybook']}
              />
            </li>
            <li className="mb-12">
              <ExperienceCard
                period="2018 — 2024"
                title="Lead Engineer"
                company="Upstatement"
                companyUrl="https://upstatement.com/"
                description="Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools."
                technologies={['JavaScript', 'TypeScript', 'HTML & SCSS', 'React', 'Next.js', 'React Native', 'WordPress', 'Contentful', 'Node.js', 'PHP']}
              />
            </li>
            <li className="mb-12">
              <ExperienceCard
                period="Summer 2017"
                title="UI Engineer Co-op"
                company="Apple"
                companyUrl="https://www.apple.com/apple-music/"
                description="Developed and styled interactive web apps for Apple Music, including the user interface of Apple Music's embeddable web player widget for in-browser user authorization and full song playback."
                technologies={['Ember', 'SCSS', 'JavaScript', 'MusicKit.js']}
                links={[
                  { label: 'MusicKit.js', url: 'https://developer.apple.com/documentation/musickitjs' },
                  { label: '9to5Mac', url: 'https://9to5mac.com/2018/06/03/apple-music-embeddable-web-player-listen-browser/' },
                  { label: 'The Verge', url: 'https://www.theverge.com/2017/10/5/16433770/facebook-messenger-apple-music-bot-song-streaming' }
                ]}
              />
            </li>
            <li className="mb-12">
              <ExperienceCard
                period="2016 — 2017"
                title="Developer"
                company="Scout Studio"
                companyUrl="https://scout.camd.northeastern.edu/"
                description="Collaborated with other student designers and engineers on pro-bono projects to create new brands, design systems, and websites for organizations in the community."
                technologies={['Jekyll', 'SCSS', 'JavaScript', 'WordPress']}
              />
            </li>
            <li className="mb-12">
              <ExperienceCard
                period="Summer 2016"
                title="Software Engineer Co-op"
                company="Starry"
                companyUrl="https://starry.com/"
                description="Worked with the UI team to engineer and improve major features of Starry's customer-facing Android app."
                technologies={['Cordova', 'Backbone', 'JavaScript', 'CSS']}
                links={[
                  { label: 'Android App', url: 'https://play.google.com/store/apps/details?id=com.starry.management&hl=en_US&gl=US' },
                  { label: 'ScreenTime 2.0', url: 'https://starry.com/blog/product/whats-new-screentime-just-got-better-for-parents' }
                ]}
              />
            </li>
            <li className="mb-6 lg:mb-8">
              <ExperienceCard
                period="Summer 2015"
                title="Creative Technologist Co-op"
                company="MullenLowe U.S."
                companyUrl="https://us.mullenlowe.com/"
                description="Developed, maintained, and shipped production code for client websites. Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more."
                technologies={['HTML', 'CSS', 'JavaScript', 'jQuery']}
              />
            </li>
          </ol>
          <div className="mt-12">
            <a
              className="inline-flex items-center font-medium leading-tight text-slate hover:text-green focus-visible:text-green font-semibold text-slate group/link text-base"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="View Full Résumé (opens in a new tab)"
            >
              <span>
                View Full{' '}
                <span className="inline-block">
                  Résumé
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
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mb-8 scroll-mt-8 md:mb-12 lg:mb-16 lg:scroll-mt-12">
        <div className="sticky top-0 z-20 -mx-1.5 mb-2 w-screen bg-navy/75 px-1.5 py-3 backdrop-blur md:-mx-3 md:px-3 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate lg:sr-only">Projects</h2>
        </div>
        <div>
          <ul className="group/list">
            <li className="mb-12">
              <ProjectCard
                title="Build a Spotify Connected App"
                description="Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more."
                links={[
                  { label: 'newline.co', url: 'https://www.newline.co/courses/build-a-spotify-connected-app' }
                ]}
              />
            </li>
            <li className="mb-12">
              <ProjectCard
                title="Spotify Profile"
                description="Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more."
                technologies={['React', 'Express', 'Spotify API', 'Heroku']}
                stats="696 stars on GitHub"
                links={[
                  { label: 'spotify-profile.herokuapp.com', url: 'https://spotify-profile.herokuapp.com/' },
                  { label: 'GitHub', url: 'https://github.com/bchiang7/spotify-profile', type: 'github' }
                ]}
              />
            </li>
            <li className="mb-6 lg:mb-8">
              <ProjectCard
                title="Halcyon Theme"
                description="Minimal dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more."
                stats="100k+ Installs"
                links={[
                  { label: 'halcyon-theme.netlify.app', url: 'https://halcyon-theme.netlify.app/' },
                  { label: 'VS Code Marketplace', url: 'https://marketplace.visualstudio.com/items?itemName=brittanychiang.halcyon-vscode' }
                ]}
              />
            </li>
            <li className="mb-12">
              <ProjectCard
                title="brittanychiang.com (v4)"
                description="An old portfolio site built with Gatsby with 6k+ stars and 3k+ forks"
                technologies={['Gatsby', 'Styled Components', 'Netlify']}
                stats="8,064 stars on GitHub"
                links={[
                  { label: 'v4.brittanychiang.com', url: 'https://v4.brittanychiang.com/' },
                  { label: 'GitHub', url: 'https://github.com/bchiang7/v4', type: 'github' }
                ]}
              />
            </li>
          </ul>
          <div className="mt-12">
            <a
              className="inline-flex items-center font-medium leading-tight text-slate hover:text-green focus-visible:text-green font-semibold text-slate group/link text-base"
              href="/archive"
              aria-label="View Full Project Archive"
            >
              <span>
                View Full{' '}
                <span className="inline-block">
                  Project Archive
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Writing Section */}
      <section id="writing" className="mb-8 scroll-mt-8 md:mb-12 lg:mb-16 lg:scroll-mt-12">
        <div className="sticky top-0 z-20 -mx-1.5 mb-2 w-screen bg-navy/75 px-1.5 py-3 backdrop-blur md:-mx-3 md:px-3 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate lg:sr-only">Writing</h2>
        </div>
        <div>
          <ul className="group/list">
            <li className="mb-12">
              <WritingCard
                year="2024"
                title="5 Common Accessibility Pitfalls and How to Avoid Them"
                url="https://klaviyo.tech/5-common-accessibility-pitfalls-and-how-to-avoid-them-e316dfc55ff0"
              />
            </li>
            <li className="mb-12">
              <WritingCard
                year="2020"
                title="Integrating Algolia Search with WordPress Multisite"
                url="https://upstatement.com/blog/integrating-algolia-search-with-wordpress-multisite/"
              />
            </li>
            <li className="mb-12">
              <WritingCard
                year="2019"
                title="Building a Headless Mobile App CMS From Scratch"
                url="https://upstatement.com/blog/building-a-headless-mobile-app-cms-from-scratch/"
              />
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
