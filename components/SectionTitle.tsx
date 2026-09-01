interface Props { eyebrow: string; title: string; description?: string; }

const SectionTitle = ({ eyebrow, title, description }: Props) => (
  <div className="mb-12 max-w-3xl">
    <p className="mb-3 font-titleFont text-sm font-semibold uppercase tracking-[0.2em] text-textGreen">{eyebrow}</p>
    <h2 className="font-titleFont text-3xl font-bold tracking-tight text-heading sm:text-5xl">{title}</h2>
    {description ? <p className="mt-5 text-lg leading-8 text-textDark">{description}</p> : null}
  </div>
);

export default SectionTitle;
