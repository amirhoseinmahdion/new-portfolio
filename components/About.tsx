import Image from "next/image";
import { profileMe } from "../public/assets";
import SectionTitle from "./SectionTitle";

const skillGroups = [
  { title: "Front end", skills: ["React", "Next.js", "TypeScript", "Redux Toolkit", "React Query"] },
  { title: "Interface", skills: ["Tailwind CSS", "Material UI", "SASS", "Responsive design", "Accessible UI"] },
  { title: "Beyond UI", skills: ["Node.js", "NestJS", "PostgreSQL", "Prisma", "Docker", "WebSocket"] },
];

const facts = [
  { value: "3 years", label: "Professional experience" },
  { value: "5+", label: "ERP modules delivered" },
  { value: "40%", label: "Faster dashboard loading" },
];

const About = () => (
  <section id="about" className="section-shell section-spacing">
    <SectionTitle eyebrow="About me" title="A product-minded developer who cares about the details." description="I build interfaces that help people understand information, complete tasks, and move through complex workflows with confidence." />
    <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
      <div className="relative mx-auto w-full max-w-sm lg:sticky lg:top-28">
        <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-textGreen/25 via-sky-400/10 to-transparent blur-2xl" />
        <div className="relative overflow-hidden rounded-[2rem] border border-line/70 bg-surface p-2 shadow-[0_30px_80px_rgba(15,23,42,0.15)]">
          <Image src={profileMe} alt="Portrait of Amirhosein Mahdion" className="aspect-[4/5] w-full rounded-[1.5rem] object-cover object-center" sizes="(max-width: 1024px) 384px, 30vw" placeholder="blur" />
        </div>
        <div className="absolute -bottom-5 -right-3 rounded-2xl border border-line/60 bg-surface/95 px-5 py-3 shadow-xl backdrop-blur">
          <p className="text-xs uppercase tracking-[0.16em] text-textDark">Based in</p>
          <p className="mt-1 font-titleFont font-semibold text-heading">Tehran, Iran</p>
        </div>
      </div>
      <div>
        <p className="text-xl leading-9 text-heading">I&apos;m Amirhosein, a front-end developer focused on React and Next.js. Over the past three years, I&apos;ve worked on enterprise ERP systems, education platforms, and live-data products used by real teams.</p>
        <p className="mt-5 text-lg leading-8 text-textDark">I enjoy simplifying complicated requirements into reusable components and dependable product experiences. My work spans responsive interfaces, server-state architecture, real-time updates, and close collaboration with back-end teams.</p>
        <dl className="mt-8 grid grid-cols-3 gap-3">
          {facts.map((fact) => <div key={fact.label} className="surface-card p-4 sm:p-5"><dt className="font-titleFont text-xl font-bold text-textGreen sm:text-2xl">{fact.value}</dt><dd className="mt-1 text-xs leading-5 text-textDark sm:text-sm">{fact.label}</dd></div>)}
        </dl>
        <div className="mt-8 rounded-2xl border border-textGreen/20 bg-textGreen/5 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-textGreen">Education</p>
          <p className="mt-2 font-titleFont font-semibold text-heading">Master&apos;s in Computer Engineering</p>
          <p className="mt-1 text-sm text-textDark">Artificial Intelligence specialization</p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {skillGroups.map((group) => <div key={group.title} className="surface-card p-5"><h3 className="mb-4 font-titleFont font-semibold text-heading">{group.title}</h3><ul className="space-y-2 text-sm text-textDark">{group.skills.map((skill) => <li key={skill} className="flex gap-2"><span className="text-textGreen">›</span>{skill}</li>)}</ul></div>)}
        </div>
      </div>
    </div>
  </section>
);

export default About;
