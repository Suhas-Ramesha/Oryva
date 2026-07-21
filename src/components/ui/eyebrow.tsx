import { cn } from "@/lib/utils";

export function Eyebrow({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent-bright",
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-accent-bright shadow-[0_0_12px_var(--accent-bright)]" />
      {children}
    </div>
  );
}
