import Image from "next/image";
import { profileMe } from "../public/assets";
import SectionTitle from "./SectionTitle";

const skillGroups = [
  { title: "Core", skills: ["JavaScript", "TypeScript", "React.js", "Next.js", "HTML & CSS"] },
  { title: "State & UI", skills: ["Redux Toolkit", "React Query", "Tailwind CSS", "Material UI", "SASS"] },
  { title: "Back end & tools", skills: ["Node.js", "NestJS", "PostgreSQL", "Prisma", "Docker", "WebSocket", "Git"] },
];

const About = () => (
  <section id="about" className="section-shell section-spacing">
    <SectionTitle eyebrow="About me" title="Engineering thoughtful digital experiences." description="I combine strong front-end fundamentals with practical back-end knowledge to ship complete, dependable products." />
    <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
      <div className="relative mx-auto w-full max-w-sm">
        <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-textGreen/30 to-sky-400/10 blur-xl" />
        <Image src={profileMe} alt="Amirhosein Mahdion" className="relative aspect-[4/5] w-full rounded-3xl object-cover object-center grayscale transition duration-500 hover:grayscale-0" sizes="(max-width: 1024px) 384px, 32vw" priority />
      </div>
      <div>
        <p className="text-lg leading-8 text-textDark">I&apos;m a front-end developer based in Tehran with three years of experience building business software, education platforms, and real-time internal tools. My work focuses on turning complex workflows into clear interfaces that teams can use confidently.</p>
        <p className="mt-5 text-lg leading-8 text-textDark">I care about reusable architecture, responsive design, clean code, and measurable improvements. I also use AI-assisted development, prompt engineering, and context engineering to explore solutions and move faster without compromising quality.</p>
        <div className="mt-7 rounded-2xl border border-textGreen/20 bg-textGreen/5 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-textGreen">Education</p>
          <p className="mt-2 font-titleFont font-semibold text-heading">Master&apos;s in Computer Engineering</p>
          <p className="mt-1 text-sm text-textDark">Artificial Intelligence specialization</p>
        </div>
        <div className="mt-9 grid gap-4 sm:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="surface-card p-5">
              <h3 className="mb-4 font-titleFont font-semibold text-heading">{group.title}</h3>
              <ul className="space-y-2 text-sm text-textDark">{group.skills.map((skill) => <li key={skill} className="flex gap-2"><span className="text-textGreen">›</span>{skill}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
