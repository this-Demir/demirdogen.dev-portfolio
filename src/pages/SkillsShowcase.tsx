import { useState, type SVGProps } from "react";
import LogoChips from "@/components/LogoChips";
import LogoGrid from "@/components/LogoGrid";
import LogoModal from "@/components/LogoModal";
import type { LogoItem } from "@/types/logo";

import ReactLogoUrl from "@/assets/tech-logos/React.svg";
import TypeScriptLogoUrl from "@/assets/tech-logos/TypeScript.svg";
import JavaScriptLogoUrl from "@/assets/tech-logos/JavaScript.svg";
import TailwindLogoUrl from "@/assets/tech-logos/tailwind.svg";
import ViteLogoUrl from "@/assets/tech-logos/Vite.js.svg";
import DotnetLogoUrl from "@/assets/tech-logos/dotnet.svg";
import RestApisLogoUrl from "@/assets/tech-logos/rest-apis.svg";
import SqlServerLogoUrl from "@/assets/tech-logos/sql-server.svg";
import SqlLogoUrl from "@/assets/tech-logos/sql.svg";
import GradleLogoUrl from "@/assets/tech-logos/Gradle.svg";
import JunitLogoUrl from "@/assets/tech-logos/JUnit.svg";
import SeleniumLogoUrl from "@/assets/tech-logos/Selenium.svg";
import GitHubLogoUrl from "@/assets/tech-logos/GitHub.svg";
import VercelLogoUrl from "@/assets/tech-logos/Vercel.svg";
import BootstrapLogoUrl from "@/assets/tech-logos/Bootstrap.svg";
import IyzicoLogoUrl from "@/assets/tech-logos/iyzico.svg";
import JwtLogoUrl from "@/assets/tech-logos/jwt.svg";
import PythonLogoUrl from "@/assets/tech-logos/python.svg";

const AccessibilityIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
    <circle cx={12} cy={7} r={2.5} />
    <path d="M4 9h16M9 9l-3 12m9-12 3 12M12 11v6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MotionIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
    <path d="M5 5h6l8 8-4 4-8-8z" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx={9} cy={9} r={3} />
  </svg>
);

const ApiGatewayIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
    <rect x={3.75} y={4.5} width={16.5} height={15} rx={2} ry={2} />
    <path d="M8.5 9.5h7M8.5 14.5h4" strokeLinecap="round" />
  </svg>
);

const CloudOpsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
    <path
      d="M7.5 9.5a4 4 0 0 1 7.85-1.5A3.25 3.25 0 1 1 16.5 18h-7A4.5 4.5 0 0 1 7.5 9.5Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BrowserAutomationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
    <rect x={3} y={4.5} width={18} height={15} rx={2} />
    <circle cx={8} cy={9} r={1} />
    <circle cx={12} cy={9} r={1} />
    <circle cx={16} cy={9} r={1} />
    <path d="M7.5 13.5h3l-1.5 3zM13.5 13.5h3l-1.5 3z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MonitoringIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
    <path
      d="M4.5 5.5h15v9h-5.25L12 18.5l-2.25-4H4.5z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M8 9l2 2 3-3 3 3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const frontendItems: LogoItem[] = [
  {
    name: "React",
    href: "https://react.dev",
    imgSrc: ReactLogoUrl,
    brandColorHex: "#61DAFB",
  },
  {
    name: "TypeScript",
    href: "https://www.typescriptlang.org",
    imgSrc: TypeScriptLogoUrl,
    brandColorHex: "#3178C6",
  },
  {
    name: "JavaScript",
    href: "https://developer.mozilla.org/docs/Web/JavaScript",
    imgSrc: JavaScriptLogoUrl,
    brandColorHex: "#F7DF1E",
  },
  {
    name: "Tailwind CSS",
    href: "https://tailwindcss.com",
    imgSrc: TailwindLogoUrl,
    brandColorHex: "#38BDF8",
  },
  {
    name: "Vite",
    href: "https://vitejs.dev",
    imgSrc: ViteLogoUrl,
    brandColorHex: "#646CFF",
  },
  {
    name: "Framer Motion",
    href: "https://www.framer.com/motion",
    Icon: MotionIcon,
    brandColorHex: "#E51776",
  },
  {
    name: "Design Systems",
    href: "https://uxdesign.cc",
    Icon: AccessibilityIcon,
    brandColorHex: "#34D399",
  },
  {
    name: "Bootstrap",
    href: "https://getbootstrap.com",
    imgSrc: BootstrapLogoUrl,
    brandColorHex: "#7952B3",
  },
  {
    name: "Progressive Web Apps",
    href: "https://web.dev/progressive-web-apps",
    Icon: CloudOpsIcon,
    brandColorHex: "#0EA5E9",
  },
];

const backendItems: LogoItem[] = [
  {
    name: ".NET",
    href: "https://dotnet.microsoft.com",
    imgSrc: DotnetLogoUrl,
    brandColorHex: "#512BD4",
  },
  {
    name: "REST APIs",
    href: "https://restfulapi.net",
    imgSrc: RestApisLogoUrl,
    brandColorHex: "#0EA5E9",
  },
  {
    name: "SQL Server",
    href: "https://learn.microsoft.com/sql",
    imgSrc: SqlServerLogoUrl,
    brandColorHex: "#A91D22",
  },
  {
    name: "MySQL",
    href: "https://www.mysql.com",
    imgSrc: SqlLogoUrl,
    brandColorHex: "#4479A1",
  },
  {
    name: "Gradle",
    href: "https://gradle.org",
    imgSrc: GradleLogoUrl,
    brandColorHex: "#02303A",
  },
  {
    name: "API Gateways",
    href: "https://aws.amazon.com/api-gateway/",
    Icon: ApiGatewayIcon,
    brandColorHex: "#F97316",
  },
  {
    name: "Python",
    href: "https://www.python.org",
    imgSrc: PythonLogoUrl,
    brandColorHex: "#3776AB",
  },
];

const testingItems: LogoItem[] = [
  {
    name: "JUnit",
    href: "https://junit.org",
    imgSrc: JunitLogoUrl,
    brandColorHex: "#25A162",
  },
  {
    name: "Selenium",
    href: "https://www.selenium.dev",
    imgSrc: SeleniumLogoUrl,
    brandColorHex: "#43B02A",
  },
  {
    name: "Playwright",
    href: "https://playwright.dev",
    Icon: BrowserAutomationIcon,
    brandColorHex: "#2EAD33",
  },
  {
    name: "Monitoring",
    href: "https://grafana.com",
    Icon: MonitoringIcon,
    brandColorHex: "#F97316",
  },
];

const allTools: LogoItem[] = [
  ...frontendItems,
  ...backendItems,
  ...testingItems,
  {
    name: "GitHub",
    href: "https://github.com",
    imgSrc: GitHubLogoUrl,
    brandColorHex: "#1F2328",
  },
  {
    name: "Vercel",
    href: "https://vercel.com",
    imgSrc: VercelLogoUrl,
    brandColorHex: "#FFFFFF",
  },
  {
    name: "JWT",
    href: "https://jwt.io",
    imgSrc: JwtLogoUrl,
    brandColorHex: "#872EC4",
  },
  {
    name: "Iyzico",
    href: "https://www.iyzico.com",
    imgSrc: IyzicoLogoUrl,
    brandColorHex: "#1D9CD8",
  },
];

const MAX_TOOLS_VISIBLE = 12;

const SkillsShowcase = () => {
  const [toolsModalOpen, setToolsModalOpen] = useState(false);
  const showViewAll = allTools.length > MAX_TOOLS_VISIBLE;

  return (
    <main className="min-h-screen bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-6xl space-y-16 px-6">
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Capabilities</p>
          <h1 className="text-3xl font-semibold text-white">Technical Skills Showcase</h1>
          <p className="max-w-2xl text-sm text-slate-300">
            Balanced logo treatments keep every tool legible across dark surfaces while hover states reveal each brand&apos;s true
            color palette. Explore the grids below or open the full tools library.
          </p>
        </header>

        <LogoGrid title="Front-end Development" items={frontendItems} />

        <LogoGrid title="Back-end / APIs" items={backendItems} />

        <section className="space-y-4">
          <h3 className="text-sm font-medium text-slate-300">Testing &amp; QA</h3>
          <p className="text-xs text-slate-300/80">
            Lightweight chips keep continuous testing workflows visible without overwhelming dense text sections.
          </p>
          <LogoChips items={testingItems} />
        </section>

        <section className="space-y-4">
          <LogoGrid title="Tools &amp; Platforms" items={allTools} maxVisible={MAX_TOOLS_VISIBLE} />
          {showViewAll && (
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setToolsModalOpen(true)}
                className="text-xs font-medium text-slate-300 underline underline-offset-4 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
              >
                View all tools
              </button>
            </div>
          )}
        </section>
      </div>

      <LogoModal
        open={toolsModalOpen}
        onClose={() => setToolsModalOpen(false)}
        title="All Tools & Platforms"
        items={allTools}
      />
    </main>
  );
};

export default SkillsShowcase;
