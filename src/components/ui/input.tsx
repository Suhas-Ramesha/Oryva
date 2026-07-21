import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "flex h-12 w-full rounded-xl border bg-surface-2/80 px-4 text-sm text-foreground placeholder:text-muted-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent/40",
          error ? "border-red-500/60" : "border-border-subtle focus:border-accent/60",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
