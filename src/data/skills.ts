import BootstrapLogo from '../assets/tech-logos/Bootstrap.svg';
import CppLogo from '../assets/tech-logos/CPlusPlus.svg';
import DotNetLogo from '../assets/tech-logos/dotnet.svg';
import GitLogo from '../assets/tech-logos/Git.svg';
import GitHubLogo from '../assets/tech-logos/GitHub.svg';
import GradleLogo from '../assets/tech-logos/Gradle.svg';
import JavaLogo from '../assets/tech-logos/Java.svg';
import JSLogo from '../assets/tech-logos/JavaScript.svg';
import JUnitLogo from '../assets/tech-logos/JUnit.svg';
import MySQLLogo from '../assets/tech-logos/MySQL.svg';
import PostmanLogo from '../assets/tech-logos/Postman.svg';
import PythonLogo from '../assets/tech-logos/Python.svg';
import ReactLogo from '../assets/tech-logos/React.svg';
import SeleniumLogo from '../assets/tech-logos/Selenium.svg';
import SupabaseLogo from '../assets/tech-logos/supabase-logo-icon.svg';
import TailwindLogo from '../assets/tech-logos/Tailwind CSS.svg';
import TSLogo from '../assets/tech-logos/TypeScript.svg';
import ViteLogo from '../assets/tech-logos/Vite.js.svg';
import VulkanLogo from '../assets/tech-logos/vulkan.svg';

export interface SkillLogo {
  name: string;
  href: string;
  icon: string;
}

/** Rendered monochrome in the marquee, so brand colours here don't matter. */
export const TOOLBELT: SkillLogo[] = [
  { name: 'Java', href: 'https://www.java.com/', icon: JavaLogo },
  { name: '.NET', href: 'https://dotnet.microsoft.com/', icon: DotNetLogo },
  { name: 'C++', href: 'https://isocpp.org/', icon: CppLogo },
  { name: 'Python', href: 'https://www.python.org/', icon: PythonLogo },
  { name: 'TypeScript', href: 'https://www.typescriptlang.org/', icon: TSLogo },
  {
    name: 'JavaScript',
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    icon: JSLogo,
  },
  { name: 'React', href: 'https://react.dev', icon: ReactLogo },
  { name: 'Tailwind CSS', href: 'https://tailwindcss.com', icon: TailwindLogo },
  { name: 'Vite', href: 'https://vite.dev', icon: ViteLogo },
  { name: 'Bootstrap', href: 'https://getbootstrap.com/', icon: BootstrapLogo },
  { name: 'MySQL', href: 'https://www.mysql.com/', icon: MySQLLogo },
  { name: 'Supabase', href: 'https://supabase.com/', icon: SupabaseLogo },
  { name: 'Vulkan', href: 'https://www.vulkan.org/', icon: VulkanLogo },
  { name: 'Git', href: 'https://git-scm.com/', icon: GitLogo },
  { name: 'GitHub', href: 'https://github.com/', icon: GitHubLogo },
  { name: 'Gradle', href: 'https://gradle.org/', icon: GradleLogo },
  { name: 'JUnit', href: 'https://junit.org/', icon: JUnitLogo },
  { name: 'Selenium', href: 'https://www.selenium.dev/', icon: SeleniumLogo },
  { name: 'Postman', href: 'https://www.postman.com', icon: PostmanLogo },
];
