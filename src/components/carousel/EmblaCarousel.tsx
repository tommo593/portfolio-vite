import { useCallback, useEffect } from 'react';
import { EmblaCarouselType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

type Stage = {
  id: number;
  label: string;
  description: string;
  image: string;
};

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      slidesToScroll: 1,
      duration: 8000,
      breakpoints: {
        '(min-width: 1024px)': { slidesToScroll: 2 },
      },
    },
    [Autoplay({ delay: 0, rootNode: (emblaRoot: HTMLElement) => emblaRoot.parentElement, stopOnInteraction: false })]
  );

  const logSlidesInView = useCallback((emblaApi: EmblaCarouselType) => {
    console.log(emblaApi.slidesInView());
  }, []);

  useEffect(() => {
    if (emblaApi) emblaApi.on('slidesInView', logSlidesInView);
  }, [emblaApi, logSlidesInView]);

  return (
    <div className="embla m-auto mb-12 mt-12 w-1/4 border pb-20 pt-20" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <img src="screenshot1.png" alt="" />
        </div>
        <div className="embla__slide">
          <img src="screenshot2.png" alt="" />
        </div>
        <div className="embla__slide">
          <img src="screenshot3.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default EmblaCarousel;
