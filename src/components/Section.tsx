interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section = ({ id, title, children }: SectionProps) => (
  <section id={id} className="mb-16 scroll-mt-12 lg:mb-24">
    <h2 className="mb-8 text-xs font-semibold uppercase tracking-widest text-subtle">
      {title}
    </h2>
    {children}
  </section>
);

export default Section;
