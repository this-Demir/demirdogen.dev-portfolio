interface TimelineEntryProps {
  /** Date range shown in the left column, e.g. "2023 - Present". */
  period: string;
  children: React.ReactNode;
}

/**
 * The two-column CV row shared by experience and education: a date range on
 * the left, content on the right. Collapses to a single column on mobile.
 */
const TimelineEntry = ({ period, children }: TimelineEntryProps) => (
  <div className="grid sm:grid-cols-8 sm:gap-8">
    <div className="mb-2 text-xs font-medium uppercase tracking-wider text-subtle sm:col-span-2 sm:mb-0 sm:mt-1">
      {period}
    </div>
    <div className="sm:col-span-6">{children}</div>
  </div>
);

export default TimelineEntry;
