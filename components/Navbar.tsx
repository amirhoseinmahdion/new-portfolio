import { useEffect, useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#project", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line/50 bg-bodyColor/80 backdrop-blur-xl">
      <nav className="section-shell flex h-20 items-center justify-between" aria-label="Primary navigation">
        <a href="#home" className="font-titleFont text-lg font-bold tracking-tight text-heading"><span className="text-textGreen">A</span>M<span className="text-textGreen">.</span></a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => <a key={link.href} href={link.href} className="text-sm font-medium text-textDark transition hover:text-heading">{link.label}</a>)}
          <ThemeToggle />
          <a href="/assets/MyResume.pdf" target="_blank" rel="noreferrer" className="secondary-button !px-4 !py-2.5">Resume</a>
        </div>
        <div className="flex items-center gap-2 md:hidden"><ThemeToggle /><button type="button" onClick={() => setOpen((value) => !value)} className="rounded-xl border border-line/70 bg-surface/60 p-2 text-2xl text-heading" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open}>{open ? <HiXMark /> : <HiBars3 />}</button></div>
      </nav>
      {open ? (
        <div className="fixed inset-x-0 top-20 h-[calc(100vh-5rem)] border-t border-line/50 bg-bodyColor/95 px-6 py-10 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-2">
            {links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-4 font-titleFont text-2xl font-semibold text-heading hover:bg-textGreen/10">{link.label}</a>)}
            <a href="/assets/MyResume.pdf" target="_blank" rel="noreferrer" className="primary-button mt-5 justify-center">View resume</a>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
