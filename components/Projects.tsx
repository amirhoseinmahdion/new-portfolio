import { HiArrowUpRight } from "react-icons/hi2";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";

const projects = [
  { name: "ConstERP", type: "Enterprise platform", description: "Operations software for inventory, invoicing, HR, reporting, and scheduling—designed to make dense business workflows easier to manage.", stack: ["Next.js", "TypeScript", "MUI", "Formik", "React Query"], accent: "from-emerald-400/25 via-cyan-400/10 to-transparent" },
  { name: "OnlineChat", type: "Real-time application", description: "A full-stack messaging experience with live conversations, persistent data, and a responsive interface powered by Socket.IO.", stack: ["Next.js", "Socket.IO", "Express", "TypeScript", "PostgreSQL"], accent: "from-sky-400/25 via-indigo-400/10 to-transparent" },
  { name: "Barbershop", type: "Booking platform", description: "A modern appointment and business-management product with a type-safe front end and scalable API architecture.", stack: ["Next.js App Router", "Express", "TypeScript", "PostgreSQL", "Tailwind"], accent: "from-amber-400/20 via-orange-400/10 to-transparent" },
  { name: "Sunglasses", type: "Commerce experience", description: "A full-stack storefront with type-safe data access and a focused, responsive shopping journey.", stack: ["Next.js", "Express", "Prisma", "TypeScript", "PostgreSQL"], accent: "from-fuchsia-400/20 via-violet-400/10 to-transparent" },
  { name: "Fitness App", type: "Health & fitness", description: "A responsive application for discovering and tracking fitness experiences across desktop and mobile devices.", stack: ["Next.js", "Axios", "Cookies", "Tailwind CSS"], accent: "from-lime-400/20 via-emerald-400/10 to-transparent" },
  { name: "Divar Project", type: "Marketplace", description: "A classifieds interface with API-driven listings, authentication flows, and reliable server-state caching.", stack: ["React", "Swagger", "Axios", "React Query"], accent: "from-rose-400/20 via-red-400/10 to-transparent" },
];

const Projects = () => (
  <section id="project" className="section-shell section-spacing">
    <SectionTitle eyebrow="Selected work" title="Products designed around real workflows." description="A focused selection of enterprise, real-time, commerce, and consumer products built with maintainable front-end architecture." />
    <div className="grid gap-5 md:grid-cols-2">
      {projects.map((project, index) => (
        <article key={project.name} className={`surface-card group relative flex min-h-[360px] overflow-hidden p-6 transition duration-300 hover:-translate-y-1 hover:border-textGreen/35 sm:p-8 ${index === 0 || index === 3 ? "lg:col-span-2 lg:min-h-[330px]" : ""}`}>
          <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-60 transition duration-500 group-hover:opacity-100`} />
          <span className="absolute -right-2 -top-8 font-titleFont text-[9rem] font-black leading-none text-heading/[0.035] transition duration-500 group-hover:text-heading/[0.065]">0{index + 1}</span>
          <div className="relative flex w-full flex-col">
            <div className="flex items-center justify-between gap-4"><span className="text-xs font-semibold uppercase tracking-[0.18em] text-textGreen">{project.type}</span><HiArrowUpRight className="text-xl text-textDark transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-textGreen" /></div>
            <div className="mt-auto max-w-2xl pt-16">
              <h3 className="font-titleFont text-3xl font-bold tracking-tight text-heading">{project.name}</h3>
              <p className="mt-4 max-w-xl leading-7 text-textDark">{project.description}</p>
              <ul className="mt-7 flex flex-wrap gap-2">{project.stack.map((item) => <li key={item} className="rounded-full border border-line/60 bg-surface/50 px-3 py-1 text-xs text-textDark backdrop-blur-sm">{item}</li>)}</ul>
            </div>
          </div>
        </article>
      ))}
    </div>
    <a href="https://github.com/amirhoseinmahdion" target="_blank" rel="noreferrer" className="secondary-button mx-auto mt-10 w-fit">Explore all projects <TbBrandGithub /></a>
  </section>
);

export default Projects;
