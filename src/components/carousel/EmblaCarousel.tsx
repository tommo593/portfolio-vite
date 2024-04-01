// import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { IMAGES } from './carousel_images/constants';

// TODO -- Create overlay for images with text

export function EmblaCarousel() {
  const [emblaRef /*, emblaApi*/] = useEmblaCarousel(
    {
      loop: true,
      slidesToScroll: 1,
      duration: 5000,
    },
    [Autoplay({ delay: 0, rootNode: (emblaRoot: HTMLElement) => emblaRoot.parentElement, stopOnInteraction: false })]
  );

  /* const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]); */

  return (
    <div className="flex flex-col">
      <div className="mx-auto flex max-w-80 flex-row items-center justify-center overflow-hidden" ref={emblaRef}>
        <div className="flex flex-row gap-4">
          {IMAGES.map((image, index) => (
            <div className="flex-[0_0_100%]" key={index}>
              <a href={image.url} target="_blank" rel="noopener noreferrer" title={image.title}>
                {' '}
                <img src={image.src} alt="" height={400} width={200} className="rounded" />
              </a>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="flex flex-row items-center justify-between ">
        <button
          className="embla__prev my-2 items-center rounded border border-transparent bg-gradient-to-t from-baby_blue to-dark_baby_blue px-2 text-center text-white_text shadow"
          onClick={scrollPrev}
        >
          Prev
        </button>
        <button
          className="embla__next my-2 items-center rounded border border-transparent bg-gradient-to-t from-baby_blue to-dark_baby_blue px-2 text-center text-white_text shadow"
          onClick={scrollNext}
        >
          Next
        </button>
          </div> */}
    </div>
  );
}

export default EmblaCarousel;
