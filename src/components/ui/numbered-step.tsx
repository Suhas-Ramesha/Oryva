import { cn } from "@/lib/utils";

export function NumberedStep({
  index,
  title,
  className,
  children,
}: {
  index: string;
  title: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "group relative flex h-full flex-col rounded-2xl border border-hairline bg-paper-2 p-6 transition-colors hover:border-brand/40 sm:p-8",
        className
      )}
    >
      <span className="font-[family-name:var(--font-label)] text-sm font-medium tracking-[0.22em] text-signal">
        {index}
      </span>
      <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl leading-tight text-ink sm:text-2xl">
        {title}
      </h3>
      <p className="mt-3 text-pretty leading-relaxed text-muted">{children}</p>
    </div>
  );
}
