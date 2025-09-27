import BootstrapLogo from '../assets/tech-logos/Bootstrap.svg';
import GradleLogo from '../assets/tech-logos/Gradle.svg';
import JavaLogo from '../assets/tech-logos/Java.svg';
import JavaScriptLogo from '../assets/tech-logos/JavaScript.svg';
import JUnitLogo from '../assets/tech-logos/JUnit.svg';
import MySQLLogo from '../assets/tech-logos/MySQL.svg';
import ReactLogo from '../assets/tech-logos/React.svg';
import SeleniumLogo from '../assets/tech-logos/Selenium.svg';
import TailwindLogo from '../assets/tech-logos/tailwind.svg';
import TypeScriptLogo from '../assets/tech-logos/TypeScript.svg';
import ViteLogo from '../assets/tech-logos/Vite.js.svg';
import DotnetLogo from '../assets/tech-logos/dotnet.svg';
import GitHubLogo from '../assets/tech-logos/GitHub.svg';
import VercelLogo from '../assets/tech-logos/Vercel.svg';
import RestApisLogo from '../assets/tech-logos/rest-apis.svg';
import SqlLogo from '../assets/tech-logos/sql.svg';
import SqlServerLogo from '../assets/tech-logos/sql-server.svg';
import JwtLogo from '../assets/tech-logos/jwt.svg';
import PythonLogo from '../assets/tech-logos/python.svg';
import JavaFxLogo from '../assets/tech-logos/javafx.svg';
import BlackBoxTestingLogo from '../assets/tech-logos/black-box-testing.svg';
import IyzicoLogo from '../assets/tech-logos/iyzico.svg';

const techLogos: Record<string, { src: string; alt: string }> = {
  React: { src: ReactLogo, alt: 'React logo' },
  Vite: { src: ViteLogo, alt: 'Vite logo' },
  TypeScript: { src: TypeScriptLogo, alt: 'TypeScript logo' },
  JavaScript: { src: JavaScriptLogo, alt: 'JavaScript logo' },
  'Tailwind CSS': { src: TailwindLogo, alt: 'Tailwind CSS logo' },
  Bootstrap: { src: BootstrapLogo, alt: 'Bootstrap logo' },
  '.NET 8': { src: DotnetLogo, alt: '.NET logo' },
  'REST APIs': { src: RestApisLogo, alt: 'REST APIs illustration' },
  SQL: { src: SqlLogo, alt: 'SQL logo' },
  MySQL: { src: MySQLLogo, alt: 'MySQL logo' },
  'SQL Server': { src: SqlServerLogo, alt: 'SQL Server illustration' },
  JWT: { src: JwtLogo, alt: 'JWT logo' },
  Python: { src: PythonLogo, alt: 'Python logo' },
  Java: { src: JavaLogo, alt: 'Java logo' },
  JavaFX: { src: JavaFxLogo, alt: 'JavaFX logo' },
  Gradle: { src: GradleLogo, alt: 'Gradle logo' },
  'Selenium WebDriver': { src: SeleniumLogo, alt: 'Selenium logo' },
  'JUnit 5': { src: JUnitLogo, alt: 'JUnit logo' },
  'Black-box Testing': { src: BlackBoxTestingLogo, alt: 'Black-box testing illustration' },
  GitHub: { src: GitHubLogo, alt: 'GitHub logo' },
  Vercel: { src: VercelLogo, alt: 'Vercel logo' },
  Iyzico: { src: IyzicoLogo, alt: 'Iyzico logo' }
};

export default techLogos;
