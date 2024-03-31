import { useCallback, useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

interface SlideProps {
  src: string;
  alt: string;
}

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      slidesToScroll: 3,
      duration: 4000,
      breakpoints: {
        '(min-width: 1024px)': { slidesToScroll: 3 },
      },
    },
    []
  );

  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoplay = useCallback(() => {
    autoplayIntervalRef.current = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 8000);
  }, [emblaApi]);

  const stopAutoplay = useCallback(() => {
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current);
      autoplayIntervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoplay();
    return () => {
      stopAutoplay();
    };
  }, [startAutoplay, stopAutoplay]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const Slide: React.FC<SlideProps> = ({ src, alt }) => {
    return (
      <div>
        <div className="embla__slide">
          <img src={src} alt={alt} />
        </div>
      </div>
    );
  };

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__viewport">
        <div className="embla__container">
          <img src="/screenshot1.png" alt="" className="embla__slide" />
          <img src="/screenshot2.png" alt="" className="embla__slide" />
          <img src="/screenshot3.png" alt="" className="embla__slide" />
        </div>
        <button
          className="embla__prev text-white_text my-2 items-center rounded border border-transparent bg-gradient-to-t from-baby_blue to-dark_baby_blue px-2 text-center shadow"
          onClick={scrollPrev}
        >
          Prev
        </button>
        <button
          className="embla__next text-white_text my-2 items-center rounded border border-transparent bg-gradient-to-t from-baby_blue to-dark_baby_blue px-2 text-center shadow"
          onClick={scrollNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default EmblaCarousel;
