import { Calendar } from "lucide-react";

export function LastUpdated({ date }: { date: string }) {
  const formatted = new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

  return (
    <p className="mt-4 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
      <Calendar className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
      <span>Last updated:</span>
      <time dateTime={date} className="font-semibold text-foreground">
        {formatted}
      </time>
    </p>
  );
}
