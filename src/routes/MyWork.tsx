import { DESKTOP_IMAGES } from '../components/carousel/carousel_images/constants';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export function MyWork() {
  return (
    <div>
      <Navbar />
      <div className="px-4">
        <h3 className="py-12 text-center">My Projects</h3>
      </div>
      <div>
        <p className="px-2 pb-8 text-center">
          See the tiles below to view my work, click on the images to be taken to the live site or GitHub repo
        </p>
        <div className="m-auto grid max-w-4xl grid-cols-1 gap-4 px-4 pb-8 text-off-white md:grid-cols-2">
          {DESKTOP_IMAGES.map((image, index) => (
            <div className=" flex flex-col rounded p-4" key={index}>
              <p className="mb-1 text-xs">{image.id}</p>
              <a href={image.url} target="_blank" rel="noopener noreferrer" title={image.title}>
                <img
                  src={image.src}
                  alt={image.placeholder}
                  height={200}
                  width={400}
                  className="mb-4 w-full items-center rounded duration-300 hover:opacity-80"
                />
              </a>
              <div className="pb-2 text-left">
                <p className="pb-1 text-left text-lg font-bold text-mustard-yellow">{image.title}</p>
                <p className="pb-1 text-left text-xs text-light-grey">{image.placeholder}</p>
                <p className="text-left text-xs italic">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MyWork;

/*
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

        <div className="m-auto pb-8 text-center leading-relaxed">
          <p>
            On the carousel below you'll see all of my proudest projects so far.
            <br />
            Please click on the tiles to take you to either the live site or the code on GitHub to find out more
            information!
          </p>
        </div>
        <div className="flex flex-col">
          <div className="m-auto flex max-w-80 flex-row items-center justify-center overflow-hidden" ref={emblaRef}>
            <div className="flex flex-row gap-2">
              {DESKTOP_IMAGES.map((image, index) => (
                <div className="flex-[0_0_100%]" key={index}>
                  <a href={image.url} target="_blank" rel="noopener noreferrer" title={image.title}>
                    <img
                      src={image.src}
                      alt=""
                      height={300}
                      width={600}
                      className="border-border_gray m-auto mb-4 justify-between rounded border"
                    />
                    <div className="m-auto">
                      <p className="m-auto items-center text-center text-sm">{image.placeholder}</p>
                      <p className="m-auto items-center  text-center text-xs italic">{image.description}</p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="m-auto flex flex-row gap-4 pb-12 pt-4">
            <button
              className="embla__prev btn text-white_text items-center rounded border border-transparent py-2 text-center shadow"
              onClick={scrollPrev}
            >
              Prev
            </button>
            <button
              className="embla__next btn text-white_text items-center rounded border border-transparent py-2 text-center shadow"
              onClick={scrollNext}
            >
              Next
            </button>
          </div>
        </div>
           */
