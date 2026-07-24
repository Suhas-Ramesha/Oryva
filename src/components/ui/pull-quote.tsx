import { cn } from "@/lib/utils";

export function PullQuote({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <blockquote
      className={cn(
        "font-[family-name:var(--font-display)] text-balance text-2xl italic leading-snug text-ink sm:text-3xl md:text-[2.5rem] md:leading-[1.15]",
        className
      )}
    >
      {children}
    </blockquote>
  );
}
