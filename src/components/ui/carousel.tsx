"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Carousel({
  slides,
  className,
  ariaLabel = "Highlights",
}: {
  slides: React.ReactNode[];
  className?: string;
  ariaLabel?: string;
}) {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "center" });
  const [selected, setSelected] = useState(0);

  const scrollTo = useCallback((i: number) => embla?.scrollTo(i), [embla]);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelected(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    onSelect();
    return () => {
      embla.off("select", onSelect);
    };
  }, [embla]);

  return (
    <div
      className={cn("relative", className)}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
    >
      <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, i) => (
            <div
              key={i}
              className="min-w-0 flex-[0_0_100%]"
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${slides.length}`}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => embla?.scrollPrev()}
          className="rounded-full border border-hairline-strong p-2 text-ink transition-colors hover:bg-ink/[0.04]"
        >
          <ChevronLeft size={18} aria-hidden />
        </button>
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={selected === i}
              onClick={() => scrollTo(i)}
              className={cn(
                "h-2 rounded-full transition-all",
                selected === i ? "w-6 bg-signal" : "w-2 bg-hairline-strong"
              )}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => embla?.scrollNext()}
          className="rounded-full border border-hairline-strong p-2 text-ink transition-colors hover:bg-ink/[0.04]"
        >
          <ChevronRight size={18} aria-hidden />
        </button>
      </div>
    </div>
  );
}
