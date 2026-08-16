import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
  gradient?: boolean;
};

export function BrandLogo({
  className,
  priority = false,
  gradient = false,
}: BrandLogoProps) {
  if (gradient) {
    return (
      <span
        aria-hidden="true"
        className={cn("brand-logo-gradient block aspect-[87/23]", className)}
      />
    );
  }

  return (
    <Image
      src="/oryva-logo.png"
      width={764}
      height={285}
      alt="Oryva AI"
      preload={priority}
      className={cn("h-auto", className)}
    />
  );
}
