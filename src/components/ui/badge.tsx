import * as React from "react";
import { cn } from "@/lib/utils";

function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-border-strong bg-surface-2 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-muted",
        className
      )}
      {...props}
    />
  );
}

export { Badge };
