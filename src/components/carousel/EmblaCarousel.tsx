import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { IMAGES } from './carousel_images/constants';

// TODO : Link carousel images to github pages

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      slidesToScroll: 1,
      duration: 3000,
    },
    [Autoplay({ delay: 0, rootNode: (emblaRoot: HTMLElement) => emblaRoot.parentElement, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="flex flex-col">
      <div className="mx-auto flex max-w-80 flex-row items-center justify-center overflow-hidden" ref={emblaRef}>
        <div className="flex flex-row gap-4">
          {IMAGES.map((image) => (
            <div className="flex-[0_0_100%]">
              <img src={image} alt="" height={400} width={200} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row items-center justify-center">
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
