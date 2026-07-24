import { cn } from "@/lib/utils";

export function Eyebrow({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 font-[family-name:var(--font-label)] text-[11px] uppercase tracking-[0.22em] text-brand",
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-signal" />
      {children}
    </div>
  );
}
