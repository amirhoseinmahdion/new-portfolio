import { HiArrowUpRight, HiOutlineEnvelope, HiOutlinePhone } from "react-icons/hi2";
import { SlSocialLinkedin } from "react-icons/sl";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";

const Contact = () => (
  <section id="contact" className="section-shell section-spacing">
    <div className="overflow-hidden rounded-3xl border border-textGreen/25 bg-gradient-to-br from-textGreen/10 via-surface/90 to-surface p-7 shadow-[0_30px_100px_rgba(15,23,42,0.1)] sm:p-12 lg:p-16">
      <SectionTitle eyebrow="Contact" title="Have a product in mind? Let's talk." description="I’m interested in front-end and full-stack opportunities where thoughtful UI, solid engineering, and teamwork matter." />
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <div className="space-y-3 text-textDark">
          <a href="mailto:mahdionamirhosein@gmail.com" className="flex items-center gap-3 transition hover:text-heading"><HiOutlineEnvelope className="text-textGreen" /> mahdionamirhosein@gmail.com</a>
          <a href="tel:+989397009636" className="flex items-center gap-3 transition hover:text-heading"><HiOutlinePhone className="text-textGreen" /> +98 939 700 9636</a>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href="https://www.linkedin.com/in/amirhosein-mahdion/" target="_blank" rel="noreferrer" className="secondary-button"><SlSocialLinkedin /> LinkedIn</a>
          <a href="https://github.com/amirhoseinmahdion" target="_blank" rel="noreferrer" className="secondary-button"><TbBrandGithub /> GitHub</a>
          <a href="mailto:mahdionamirhosein@gmail.com" className="primary-button">Send a message <HiArrowUpRight /></a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
