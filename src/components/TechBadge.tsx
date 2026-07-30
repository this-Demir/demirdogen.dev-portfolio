interface TechBadgeProps {
  children: React.ReactNode;
}

const TechBadge = ({ children }: TechBadgeProps) => (
  <span className="inline-flex items-center rounded border border-border bg-surface px-2 py-0.5 text-xs font-medium text-muted">
    {children}
  </span>
);

export default TechBadge;
