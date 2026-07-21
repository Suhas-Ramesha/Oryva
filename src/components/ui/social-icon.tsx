import { cn } from "@/lib/utils";

export function SocialIcon({ label, className }: { label: string; className?: string }) {
  return (
    <span
      className={cn(
        "flex h-full w-full items-center justify-center font-mono text-[11px] font-medium uppercase tracking-tight",
        className
      )}
    >
      {label}
    </span>
  );
}
