import { DitheredObject } from "@/components/DitheredObject";
import { NowPlaying } from "@/components/NowPlaying";

type Role = {
  role: string;
  org: string;
  period: string;
  note?: string;
};

const EXPERIENCE: Role[] = [
  {
    role: "Product Manager",
    org: "Topps Tiles",
    period: "2025 — Present",
    note: "0-1 build of their ecommerce mobile app for their trade customer base.",
  },
  {
    role: "Senior Product Owner",
    org: "ENSEK",
    period: "JAN-MAY, 2025",
    note: "Managed end-to-end B2B energy billing for British Gas.",
  },
  {
    role: "Product Owner → Product Manager",
    org: "QA Ltd",
    period: "2022 — 2024",
    note: "Led the 0-1 build of a custom live learning platform.",
  },
  {
    role: "Director of Business Operations",
    org: "Bot Mart",
    period: "2018 — 2023",
    note: "$5m annual revenue, 250,000 members, 20+ staff.",
  },
  {
    role: "Digital Lead",
    org: "Omni Retail Enterprises",
    period: "JAN-SEP, 2022",
    note: "Ecommerce relaunch of legacy US retail brands.",
  },
  {
    role: "Co-founder & Director",
    org: "Astro Proxies",
    period: "2018 — 2022",
    note: "2,000+ accounts, datacentres in London and Virginia.",
  },
  {
    role: "Freelance",
    org: "JTWI",
    period: "∞",
    note: "Freelance IT and business management for local businesses.",
  },
];

type Project = {
  name: string;
  line: string;
  href?: string;
};

// Every href here resolves — checked, not assumed. A dead link costs more
// than a missing one, so anything unverified ships without a link.
const PROJECTS: Project[] = [
  {
    name: "Topps Tiles Trade App",
    line: "Trade customer mobile app for the UK’s largest tile specialist",
    href: "https://www.toppstiles.co.uk/trade/trade-app",
  },
  {
    name: "FPL Stats",
    line: "Live data and stats for Fantasy Premier League managers",
    href: "https://www.fplstats.co/",
  },
  {
    name: "Serve",
    line: "All-in-one platform for UK service businesses",
    href: "https://servebusiness.co.uk/",
  },
  {
    name: "QA",
    line: "Custom live learning platform for the UK’s largest tech trainer",
    href: "https://www.qa.com/self-paced-learning/",
  },
  {
    name: "Bot Mart",
    line: "250,000-member marketplace for automation software",
    href: "https://rentals.botmrt.com/",
  },
  {
    name: "Astro Proxies",
    line: "Global proxy network, founded and run",
    href: "https://astroproxies.com/",
  },
  {
    name: "JTWI",
    line: "IT and business systems for local businesses",
  },
];

const SOCIAL = [
  {
    label: "Email",
    href: "mailto:hello@jtwi.me",
    path: "M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jordan-twiggs/",
    path: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z",
  },
  {
    label: "GitHub",
    href: "https://github.com/jtwi",
    path: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z",
  },
  {
    label: "X",
    href: "https://x.com/_jtwi",
    path: "M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z",
  },
];

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-6 font-mono text-[1.2rem] font-medium tracking-[-0.03em] text-ink">
      {children}
    </h2>
  );
}

function SocialRow({ className }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-6 ${className ?? ""}`}>
      {SOCIAL.map((item) => (
        <li key={item.label}>
          <a
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={
              item.href.startsWith("http") ? "noopener noreferrer" : undefined
            }
            aria-label={item.label}
            className="block transition-colors text-ink-faint hover:text-accent-ink"
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 16 16"
              fill="currentColor"
              aria-hidden
            >
              <path d={item.path} />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col-reverse min-h-screen lg:flex-row">
      <main className="w-full px-6 py-14 sm:px-10 md:px-14 lg:w-[54%] lg:px-16 lg:py-20 xl:px-24">
        <div className="max-w-lg mx-auto">
          <header className="rise" style={{ animationDelay: "60ms" }}>
            <h1 className="font-mono text-[clamp(1.75rem,3.8vw,2.4rem)] leading-[1.15] font-medium tracking-[-0.045em] text-ink">
              Hi, I’m Jordan.
            </h1>

            <p className="mt-5 text-[0.9375rem] leading-relaxed text-ink-soft">
              I’m a product manager who also ships code. I scaled a{" "}
              <strong className="font-semibold text-ink">£4m</strong>{" "}
              marketplace startup before delving into product management. I now
              build digital products for worldwide brands.
            </p>

            <p className="mt-5 text-[0.9375rem] leading-relaxed text-ink-soft">
              Based in Tamworth, UK.{" "}
              <span className="text-xs italic text-ink-faint">
                (Just outside of Birmingham)
              </span>
            </p>

            {/* Icons and the current track share one row; the track truncates
                so a long title can never push the icons around. */}
            <div className="flex flex-wrap items-center mt-5 gap-x-6 gap-y-3">
              <SocialRow />
              <NowPlaying className="max-w-[15rem]" />
            </div>
          </header>

          <section
            className="rise mt-14"
            style={{ animationDelay: "160ms" }}
            aria-labelledby="experience"
          >
            <Heading>
              <span id="experience">Experience:</span>
            </Heading>

            <ul className="space-y-3.5">
              {EXPERIENCE.map((item) => (
                <li
                  key={`${item.org}-${item.period}`}
                  className="text-[0.9375rem] leading-relaxed"
                >
                  <span className="font-semibold text-ink">{item.role}</span>
                  <span className="text-ink-soft">, {item.org}.</span>
                  <span className="label ml-2.5 text-ink-faint">
                    {item.period}
                  </span>
                  {item.note ? (
                    <>
                      <br />
                      <span className="text-ink-soft">{item.note}</span>
                    </>
                  ) : null}
                </li>
              ))}
            </ul>
          </section>

          <section
            className="rise mt-14"
            style={{ animationDelay: "220ms" }}
            aria-labelledby="projects"
          >
            <Heading>
              <span id="projects">Projects:</span>
            </Heading>

            {/* Name and description sit on their own lines, mirroring the
                Experience list. Inline em-dashes made every long description
                wrap mid-phrase, which is what made this section look ragged. */}
            <ul className="space-y-3.5">
              {PROJECTS.map((item) => (
                <li
                  key={item.name}
                  className="text-[0.9375rem] leading-relaxed"
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold underline transition-colors text-ink decoration-rule decoration-1 underline-offset-4 hover:text-accent-ink hover:decoration-accent"
                    >
                      {item.name}
                      <span aria-hidden> ↗</span>
                    </a>
                  ) : (
                    <span className="font-semibold text-ink">{item.name}</span>
                  )}
                  <br />
                  <span className="text-ink-soft">{item.line}</span>
                </li>
              ))}
            </ul>
          </section>

          <section
            className="rise mt-14"
            style={{ animationDelay: "280ms" }}
            aria-labelledby="education"
          >
            <Heading>
              <span id="education">Education:</span>
            </Heading>
            {/* Same two-line shape as Experience and Projects: a bold subject
                line with a mono date, then a muted detail line. */}
            <p className="text-[0.9375rem] leading-relaxed">
              <span className="font-semibold text-ink">
                First-class BSc, Business Information Technology
              </span>
              <span className="label ml-2.5 text-ink-faint">2022</span>
              <br />
              <span className="text-ink-soft">Birmingham City University</span>
            </p>
          </section>

          <footer className="rise mt-14" style={{ animationDelay: "340ms" }}>
            <SocialRow />
            <p className="label mt-7 text-ink-faint">
              © JTWI Ltd {new Date().getFullYear()}
            </p>
          </footer>
        </div>
      </main>

      <aside className="relative h-[40vh] w-full lg:sticky lg:top-0 lg:h-screen lg:w-[46%]">
        <DitheredObject
          src="/computer.gltf"
          method="bayer"
          gridSize={4}
          pixelSizeRatio={1}
          environmentIntensity={0.16}
          roughness={0.45}
          scale={2.7}
          xOffset={0}
          yOffset={0}
          floatIntensity={1}
          rotationIntensity={0.45}
          floatSpeed={1.2}
          fov={34}
          cameraDistance={7.5}
          grayscale
          invert={false}
          dither
          orbit
          zoom={false}
          autoRotate={false}
          highlight="#066aff"
          className="w-full h-full"
        />
      </aside>
    </div>
  );
}
