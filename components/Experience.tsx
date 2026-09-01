import SectionTitle from "./SectionTitle";

const roles = [
  { company: "Const ERP", role: "Front-End Developer", period: "1 year", summary: "Built ERP modules for inventory, invoicing, HR, financial reporting, and scheduling.", highlights: ["Improved dashboard load time by 40% with React Query caching.", "Reduced form validation bugs by ~25% with Formik and Yup.", "Delivered consistent interfaces across 5+ core modules using Tailwind CSS and MUI."] },
  { company: "IsIran Company", role: "Developer", period: "1 year", summary: "Delivered education platforms for students, teachers, course management, reporting, and attendance.", highlights: ["Created reusable forms, sortable tables, and progress charts used by three internal teams.", "Integrated PostgreSQL-backed dynamic reporting.", "Built responsive, accessible interfaces with React, Tailwind CSS, and Material UI."] },
  { company: "Electronic Mobin", role: "Developer", period: "1 year", summary: "Developed real-time internal tools in close collaboration with a .NET back-end team.", highlights: ["Added WebSocket updates that eliminated manual page refreshes.", "Reduced state-management boilerplate by 50% using RTK Query and React Hook Form.", "Containerized development with Docker and added unit tests for critical UI flows."] },
];

const Experience = () => (
  <section id="experience" className="section-shell section-spacing">
    <SectionTitle eyebrow="Experience" title="Three years of building for real teams." description="I have worked across ERP, education, and real-time enterprise products, taking features from requirements to production-ready UI." />
    <div className="relative space-y-5 before:absolute before:bottom-4 before:left-[7px] before:top-4 before:w-px before:bg-line/60">
      {roles.map((role) => (
        <article key={role.company} className="relative pl-10">
          <span className="absolute left-0 top-8 h-[15px] w-[15px] rounded-full border-4 border-bodyColor bg-textGreen" />
          <div className="surface-card p-6 sm:p-8">
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
              <div><h3 className="font-titleFont text-xl font-bold text-heading">{role.role}</h3><p className="mt-1 font-semibold text-textGreen">{role.company}</p></div>
              <span className="w-fit rounded-full bg-bodyColor/70 px-3 py-1 text-sm text-textDark">{role.period}</span>
            </div>
            <p className="mt-5 leading-7 text-textDark">{role.summary}</p>
            <ul className="mt-5 grid gap-3 md:grid-cols-3">{role.highlights.map((item) => <li key={item} className="rounded-xl bg-bodyColor/60 p-4 text-sm leading-6 text-textDark"><span className="mr-2 text-textGreen">✓</span>{item}</li>)}</ul>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Experience;
