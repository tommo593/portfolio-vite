import { useCallback, useEffect } from 'react'
import { EmblaCarouselType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel()

  const logSlidesInView = useCallback((emblaApi: EmblaCarouselType) => {
    console.log(emblaApi.slidesInView())
  }, [])

  useEffect(() => {
    if (emblaApi) emblaApi.on('slidesInView', logSlidesInView)
  }, [emblaApi, logSlidesInView])

  return (
    <div className="embla border w-1/4 m-auto pt-20 pb-20 mt-12 mb-12" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">Slide 1</div>
        <div className="embla__slide">Slide 2</div>
        <div className="embla__slide">Slide 3</div>
      </div>
    </div>
  )
}

export default EmblaCarousel
