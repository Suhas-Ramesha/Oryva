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
        aria-invalid={error || undefined}
        className={cn(
          "flex h-12 w-full rounded-xl border bg-paper-2 px-4 text-sm text-ink placeholder:text-muted-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand/30",
          error ? "border-signal" : "border-hairline focus:border-brand",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
