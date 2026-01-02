export interface StatItem {
  value: string;
  label: string;
}

export interface StatGridProps {
  stats: StatItem[];
  /** Number of columns on desktop */
  columns?: 2 | 3 | 4;
  className?: string;
}

/**
 * Grid display for statistics/metrics.
 * Server component.
 */
export default function StatGrid({
  stats,
  columns = 4,
  className = "",
}: StatGridProps) {
  const columnClasses: Record<NonNullable<StatGridProps["columns"]>, string> = {
    2: "grid-cols-2",
    3: "grid-cols-2 md:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-4",
  };

  return (
    <div className={`grid ${columnClasses[columns]} gap-6 ${className}`}>
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <p className="text-3xl font-bold text-[#22c55e]">{stat.value}</p>
          <p className="text-sm text-neutral-600">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
