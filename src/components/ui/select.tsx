import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, children, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          ref={ref}
          className={cn(
            "flex h-12 w-full appearance-none rounded-xl border bg-surface-2/80 px-4 pr-10 text-sm text-foreground transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent/40",
            error ? "border-red-500/60" : "border-border-subtle focus:border-accent/60",
            className
          )}
          {...props}
        >
          {children}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-2" />
      </div>
    );
  }
);
Select.displayName = "Select";

export { Select };
