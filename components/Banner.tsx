import { HiArrowDown, HiArrowUpRight, HiOutlineMapPin } from "react-icons/hi2";

const Banner = () => (
  <section id="home" className="section-shell flex min-h-[88vh] items-center py-24">
    <div className="max-w-5xl">
      <div className="reveal-up mb-8 flex flex-wrap items-center gap-3 text-sm text-textDark">
        <span className="rounded-full border border-textGreen/30 bg-textGreen/10 px-4 py-2 font-semibold text-textGreen">Available for front-end opportunities</span>
        <span className="flex items-center gap-1.5"><HiOutlineMapPin /> Tehran, Iran</span>
      </div>
      <p className="reveal-up reveal-delay-1 mb-4 font-titleFont text-sm font-semibold uppercase tracking-[0.24em] text-textGreen">Front-End Developer · React & Next.js</p>
      <h1 className="reveal-up reveal-delay-2 font-titleFont text-5xl font-bold leading-[1.02] tracking-[-0.045em] text-heading sm:text-6xl lg:text-8xl">Amirhosein Mahdion</h1>
      <h2 className="reveal-up reveal-delay-3 mt-6 max-w-4xl font-titleFont text-3xl font-semibold leading-tight text-textDark sm:text-4xl lg:text-5xl">I build reliable front-end experiences for complex digital products.</h2>
      <p className="reveal-up reveal-delay-4 mt-7 max-w-2xl text-lg leading-8 text-textDark">With three years of professional experience, I transform product requirements into responsive, maintainable interfaces—from data-rich ERP dashboards and education platforms to real-time team tools.</p>
      <div className="reveal-up reveal-delay-5 mt-10 flex flex-wrap gap-4">
        <a className="primary-button" href="#project">View selected work <HiArrowUpRight /></a>
        <a className="secondary-button" href="/assets/MyResume.pdf" target="_blank" rel="noreferrer">Download résumé <HiArrowDown /></a>
      </div>
    </div>
  </section>
);

export default Banner;
