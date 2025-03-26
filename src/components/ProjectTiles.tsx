import { DESKTOP_IMAGES } from '../components/carousel/carousel_images/constants';

const ProjectTiles = () => {
  return (
    <div className="m-auto grid max-w-4xl grid-cols-1 gap-4 px-4 pb-8 text-off-white md:grid-cols-2">
      <ol>
        <li>
          {DESKTOP_IMAGES.map((image, index) => (
            <article>
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
            </article>
          ))}
        </li>
      </ol>
    </div>
  );
};

export default ProjectTiles;
