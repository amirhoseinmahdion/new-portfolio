import { HiArrowUpRight } from "react-icons/hi2";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";

const projects = [
  { name: "Barbershop", type: "Booking platform", description: "A full-stack appointment and business management experience built with a modern Next.js architecture.", stack: ["Next.js App Router", "Express", "TypeScript", "PostgreSQL", "Tailwind"] },
  { name: "OnlineChat", type: "Real-time application", description: "A responsive chat product with live messaging and persistent conversations powered by Socket.IO.", stack: ["Next.js", "Socket.IO", "Express", "TypeScript", "PostgreSQL"] },
  { name: "Sunglasses", type: "Commerce experience", description: "A full-stack storefront with type-safe data access and a clean, conversion-focused shopping flow.", stack: ["Next.js", "Express", "Prisma", "TypeScript", "PostgreSQL"] },
  { name: "ConstERP", type: "Enterprise software", description: "Feature-rich ERP modules for teams managing operations, finance, people, and internal workflows.", stack: ["Next.js", "TypeScript", "MUI", "Formik", "React Query"] },
  { name: "Fitness App", type: "Health & fitness", description: "A responsive application for exploring and tracking fitness experiences across devices.", stack: ["Next.js", "Axios", "Cookies", "Tailwind"] },
  { name: "Divar Project", type: "Marketplace", description: "A classifieds-style interface with API-driven listings, authentication flows, and server-state caching.", stack: ["React", "Swagger", "Axios", "React Query"] },
  { name: "Peyvand", type: "Product platform", description: "A responsive React product with data-rich interfaces and reusable design components.", stack: ["React", "PostgreSQL", "Tailwind", "Material UI"] },
  { name: "Hamshagerdi", type: "Community platform", description: "An accessible, responsive interface designed around discovery and community interaction.", stack: ["React", "PostgreSQL", "Tailwind", "Material UI"] },
];

const Projects = () => (
  <section id="project" className="section-shell section-spacing">
    <SectionTitle eyebrow="Selected work" title="Products built to solve real problems." description="A selection of full-stack, real-time, enterprise, and consumer projects. Visit GitHub to explore the available source code." />
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <article key={project.name} className={`surface-card group flex min-h-[320px] flex-col p-6 transition duration-300 hover:-translate-y-1 hover:border-textGreen/30 ${index === 0 || index === 3 ? "lg:col-span-2" : ""}`}>
          <div className="flex items-center justify-between"><span className="text-xs font-semibold uppercase tracking-[0.18em] text-textGreen">{project.type}</span><HiArrowUpRight className="text-xl text-textDark transition group-hover:text-textGreen" /></div>
          <h3 className="mt-8 font-titleFont text-2xl font-bold text-heading">{project.name}</h3>
          <p className="mt-4 flex-1 leading-7 text-textDark">{project.description}</p>
          <ul className="mt-7 flex flex-wrap gap-2">{project.stack.map((item) => <li key={item} className="rounded-full border border-line/60 bg-bodyColor/40 px-3 py-1 text-xs text-textDark">{item}</li>)}</ul>
        </article>
      ))}
    </div>
    <a href="https://github.com/amirhoseinmahdion" target="_blank" rel="noreferrer" className="secondary-button mx-auto mt-10 w-fit">View GitHub profile <TbBrandGithub /></a>
  </section>
);

export default Projects;
