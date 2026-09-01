import { HiCheck } from "react-icons/hi2";
import SectionTitle from "./SectionTitle";

const roles = [
  { company: "Const ERP", role: "Front-End Developer", period: "1 year", summary: "Developed ERP workflows for inventory, invoicing, HR, financial reporting, and team scheduling.", highlights: ["Improved dashboard load time by 40% through React Query caching.", "Reduced validation bugs by about 25% with Formik and Yup.", "Created a consistent UI across more than five core modules with Tailwind CSS and MUI."], stack: ["Next.js", "TypeScript", "React Query", "Formik", "MUI"] },
  { company: "IsIran Company", role: "Front-End Developer", period: "1 year", summary: "Delivered student and teacher portals, course-management dashboards, reporting, and attendance tools.", highlights: ["Built reusable forms, sortable tables, and progress charts for three internal teams.", "Connected PostgreSQL-backed reporting and attendance experiences.", "Delivered responsive and accessible interfaces across desktop and mobile devices."], stack: ["React", "Tailwind CSS", "Material UI", "PostgreSQL"] },
  { company: "Electronic Mobin", role: "Front-End Developer", period: "1 year", summary: "Built real-time internal products in close collaboration with a .NET back-end team.", highlights: ["Introduced WebSocket updates and removed the need for manual page refreshes.", "Cut state-management boilerplate by 50% with RTK Query and React Hook Form.", "Containerized the development environment and tested critical interface flows."], stack: ["React", "WebSocket", "RTK Query", "Docker", ".NET APIs"] },
];

const Experience = () => (
  <section id="experience" className="section-shell section-spacing">
    <SectionTitle eyebrow="Experience" title="Impact measured in better product outcomes." description="Three years across enterprise, education, and real-time software—building features from requirements through production delivery." />
    <div className="space-y-6">
      {roles.map((role, index) => (
        <article key={role.company} className="surface-card group overflow-hidden transition duration-300 hover:border-textGreen/35">
          <div className="grid lg:grid-cols-[0.42fr_1fr]">
            <div className="border-b border-line/60 bg-bodyColor/45 p-6 sm:p-8 lg:border-b-0 lg:border-r">
              <span className="text-xs font-semibold tracking-[0.2em] text-textGreen">0{index + 1}</span>
              <h3 className="mt-5 font-titleFont text-2xl font-bold text-heading">{role.role}</h3>
              <p className="mt-2 font-semibold text-textGreen">{role.company}</p><p className="mt-1 text-sm text-textDark">{role.period}</p>
              <div className="mt-6 flex flex-wrap gap-2">{role.stack.map((item) => <span key={item} className="rounded-full border border-line/60 px-3 py-1 text-xs text-textDark">{item}</span>)}</div>
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-lg leading-8 text-heading">{role.summary}</p>
              <ul className="mt-6 grid gap-4">{role.highlights.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-textDark sm:text-base"><span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-textGreen/10 text-xs text-textGreen"><HiCheck /></span>{item}</li>)}</ul>
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Experience;
