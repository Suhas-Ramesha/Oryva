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
        className={cn(
          "flex min-h-32 w-full rounded-xl border bg-surface-2/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent/40",
          error ? "border-red-500/60" : "border-border-subtle focus:border-accent/60",
          className
        )}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
