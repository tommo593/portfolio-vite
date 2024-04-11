import { DESKTOP_IMAGES } from '../components/carousel/carousel_images/constants';
import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

export function MyWork() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1,
    duration: 10,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div>
      <div className="px-4">
        <h3 className="py-12 text-center">My Projects</h3>
        <div className="flex flex-col">
          <div className="mx-auto flex max-w-80 flex-row items-center justify-center overflow-hidden" ref={emblaRef}>
            <div className="flex flex-row gap-2">
              {DESKTOP_IMAGES.map((image, index) => (
                <div className="flex-[0_0_100%]" key={index}>
                  <a href={image.url} target="_blank" rel="noopener noreferrer" title={image.title}>
                    <img
                      src={image.src}
                      alt=""
                      height={400}
                      width={800}
                      className="justify-between rounded border border-border_gray"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="m-auto flex flex-row gap-8 pb-12 pt-4">
            <button
              className="embla__prev btn items-center rounded border border-transparent py-2 text-center text-white_text shadow"
              onClick={scrollPrev}
            >
              Prev
            </button>
            <button
              className="embla__next btn items-center rounded border border-transparent py-2 text-center text-white_text shadow"
              onClick={scrollNext}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyWork;
