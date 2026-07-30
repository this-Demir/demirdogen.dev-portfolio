import type { Dictionary } from './content';

/** Keys under `projects` that describe an actual project rather than section copy. */
export type ProjectId = Exclude<
  keyof Dictionary['projects'],
  'title' | 'curiosityTitle' | 'curiosityIntro'
>;

export interface ProjectLink {
  label: string;
  url: string;
  type: 'github' | 'external';
}

export interface ProjectMeta {
  id: ProjectId;
  /** `featured` leads the section; `curiosity` sits under the "Just Curiosity" heading. */
  tier: 'featured' | 'curiosity';
  technologies: string[];
  /** The first link is the primary one and is what the project title points at. */
  links: ProjectLink[];
}

/**
 * Non-translatable project metadata. Display copy lives in `content.tsx` under
 * the matching `id`; render order is the order of this array.
 */
export const PROJECTS: ProjectMeta[] = [
  {
    id: 'yusync',
    tier: 'featured',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Python', 'Vercel'],
    links: [
      { label: 'yu-sync.com', url: 'https://yu-sync.com', type: 'external' },
      {
        label: 'GitHub',
        url: 'https://github.com/this-Demir/Yu-Sync-App',
        type: 'github',
      },
    ],
  },
  {
    id: 'hotel',
    tier: 'featured',
    technologies: [
      '.NET 9',
      'Next.js',
      'Ocelot',
      'RabbitMQ',
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'Docker',
      'Azure',
      'AWS Lambda',
    ],
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/this-Demir/hotel-microservices-platform',
        type: 'github',
      },
    ],
  },
  {
    id: 'airline',
    tier: 'featured',
    technologies: [
      '.NET 8',
      'Clean Architecture',
      'EF Core',
      'MySQL',
      'FastAPI',
      'Ollama',
      'Docker',
      'k6',
    ],
    links: [
      {
        label: 'Backend API',
        url: 'https://github.com/this-Demir/Airline-API-dotnet',
        type: 'github',
      },
      {
        label: 'AI Agent',
        url: 'https://github.com/this-Demir/airline-mcp-agent',
        type: 'github',
      },
    ],
  },
  {
    id: 'qa',
    tier: 'featured',
    technologies: ['Java', 'Selenium', 'JUnit 5', 'IEEE 829', 'Black-box testing'],
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/this-Demir/Se2226-Testing',
        type: 'github',
      },
    ],
  },
  {
    id: 'vulkan',
    tier: 'curiosity',
    technologies: ['Java 21', 'Vulkan', 'LWJGL', 'GLSL compute', 'Multithreading'],
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/this-Demir/3D-Ray-Tracer-Vulkan',
        type: 'github',
      },
    ],
  },
  {
    id: 'aerolink',
    tier: 'curiosity',
    technologies: ['Java', 'Vulkan', 'Sockets', 'Design patterns'],
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/this-Demir/aero-link-uav',
        type: 'github',
      },
    ],
  },
  {
    id: 'legacyRay',
    tier: 'curiosity',
    technologies: ['Java', 'JavaFX', 'Multithreading', 'CPU rendering'],
    links: [
      {
        label: 'GitHub',
        url: 'https://github.com/this-Demir/3D-ray-tracer',
        type: 'github',
      },
    ],
  },
];
