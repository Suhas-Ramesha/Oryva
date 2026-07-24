import { cn } from "@/lib/utils";

export function Eyebrow({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "flex items-center gap-2.5 font-[family-name:var(--font-label)] text-[13px] font-medium uppercase tracking-[0.18em] text-brand",
        className
      )}
    >
      <span className="h-2 w-2 rounded-full bg-signal" />
      {children}
    </div>
  );
}
