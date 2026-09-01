import { motion } from "framer-motion";
import { HiArrowUpRight, HiOutlineMapPin } from "react-icons/hi2";

const Banner = () => (
  <section id="home" className="section-shell flex min-h-[88vh] items-center py-24">
    <div className="max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-8 flex flex-wrap items-center gap-3 text-sm text-textDark">
        <span className="rounded-full border border-textGreen/30 bg-textGreen/10 px-4 py-2 font-semibold text-textGreen">Available for new opportunities</span>
        <span className="flex items-center gap-1.5"><HiOutlineMapPin /> Tehran, Iran</span>
      </motion.div>
      <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-4 font-titleFont text-sm font-semibold uppercase tracking-[0.24em] text-textGreen">Front-End Developer · 3+ years of experience</motion.p>
      <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-titleFont text-5xl font-bold leading-[1.05] tracking-tight text-heading sm:text-6xl lg:text-8xl">Amirhosein Mahdion</motion.h1>
      <motion.h2 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-5 max-w-3xl font-titleFont text-3xl font-semibold leading-tight text-textDark sm:text-4xl lg:text-5xl">I build complex products that feel simple to use.</motion.h2>
      <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-7 max-w-2xl text-lg leading-8 text-textDark">I turn product requirements into responsive, maintainable interfaces—specializing in ERP dashboards, real-time applications, and scalable React and Next.js systems.</motion.p>
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-10 flex flex-wrap gap-4">
        <a className="primary-button" href="#project">Explore my work <HiArrowUpRight /></a>
        <a className="secondary-button" href="mailto:mahdionamirhosein@gmail.com">Let&apos;s work together</a>
      </motion.div>
    </div>
  </section>
);

export default Banner;
