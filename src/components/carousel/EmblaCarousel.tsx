import { useCallback, useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { IMAGES } from '../carousel/carousel_images/constants';

interface SlideProps {
  src: string;
  alt: string;
}

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      slidesToScroll: 1,
      duration: 8000,
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

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <img
            src=""
            alt=""
            {...IMAGES.map((IMAGES) => (
              <li key={IMAGES.id}>
                <a>{IMAGES.url}</a>
              </li>
            ))}
          />
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

interface SlideProps {
  src: string;
  alt: string;
}

const Slide: React.FC<SlideProps> = ({ src, alt }) => {
  return (
    <div className="embla__slide">
      <img src={src} alt={alt} />
    </div>
  );
};

export default EmblaCarousel;
