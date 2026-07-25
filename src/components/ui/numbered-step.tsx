import { cn } from "@/lib/utils";

export function NumberedStep({
  index,
  title,
  className,
  surface = "elevated",
  children,
}: {
  index: string;
  title: string;
  className?: string;
  /** Use `paper` on tinted (paper-2) section backgrounds for contrast */
  surface?: "elevated" | "paper";
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "group relative flex h-full flex-col rounded-2xl border border-hairline p-6 transition-colors hover:border-brand/40 sm:p-7",
        surface === "paper" ? "bg-paper" : "bg-paper-2",
        className
      )}
    >
      <span className="font-label text-sm font-medium tracking-[0.22em] text-signal">
        {index}
      </span>
      <h3 className="mt-3 font-display text-xl leading-tight text-ink sm:text-2xl">
        {title}
      </h3>
      <p className="mt-3 text-pretty leading-relaxed text-muted">{children}</p>
    </div>
  );
}
