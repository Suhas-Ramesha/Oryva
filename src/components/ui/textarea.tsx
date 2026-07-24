import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        aria-invalid={error || undefined}
        className={cn(
          "flex min-h-32 w-full rounded-xl border bg-paper-2 px-4 py-3 text-sm text-ink placeholder:text-muted-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand/30",
          error ? "border-signal" : "border-hairline focus:border-brand",
          className
        )}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
