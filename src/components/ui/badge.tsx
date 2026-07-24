import * as React from "react";
import { cn } from "@/lib/utils";

function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-brand/20 bg-brand-dim px-3 py-1 font-[family-name:var(--font-label)] text-[11px] uppercase tracking-[0.14em] text-brand",
        className
      )}
      {...props}
    />
  );
}

export { Badge };
