"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
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
  const [autoplay] = useState(() =>
    Autoplay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  const [emblaRef, embla] = useEmblaCarousel(
    { loop: true, align: "center" },
    [autoplay]
  );
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
      onFocusCapture={() => autoplay.stop()}
      onBlurCapture={() => autoplay.play()}
    >
      <div className="relative">
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

        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => embla?.scrollPrev()}
          className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-hairline-strong bg-paper/90 p-2 text-ink shadow-[0_8px_24px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-colors hover:border-brand/60 hover:bg-paper-2 hover:text-brand-bright"
        >
          <ChevronLeft size={18} aria-hidden />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => embla?.scrollNext()}
          className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-hairline-strong bg-paper/90 p-2 text-ink shadow-[0_8px_24px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-colors hover:border-brand/60 hover:bg-paper-2 hover:text-brand-bright"
        >
          <ChevronRight size={18} aria-hidden />
        </button>
      </div>

      <div className="mt-5 flex items-center justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={selected === i ? "true" : undefined}
            onClick={() => scrollTo(i)}
            className={cn(
              "h-2 rounded-full transition-all",
              selected === i ? "w-6 bg-signal" : "w-2 bg-hairline-strong"
            )}
          />
        ))}
      </div>
    </div>
  );
}
