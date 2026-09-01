const Footer = () => (
  <footer className="section-shell flex flex-col gap-2 border-t border-line/50 py-8 text-sm text-textDark sm:flex-row sm:items-center sm:justify-between">
    <p>© {new Date().getFullYear()} Amirhosein Mahdion</p>
    <p>Designed and built with Next.js & TypeScript.</p>
  </footer>
);

export default Footer;
