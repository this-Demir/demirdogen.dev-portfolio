interface TechBadgeProps {
  children: React.ReactNode;
}

const TechBadge = ({ children }: TechBadgeProps) => {
  return (
    <span className="inline-flex items-center rounded-full bg-green/10 px-3 py-1 text-xs font-medium leading-5 text-green">
      {children}
    </span>
  );
};

export default TechBadge;