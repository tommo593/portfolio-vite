import { useState } from "react";

const Projects = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="py-8">
      <h1 className="text-center py-4">Projects</h1>
      <div className="text-center">
        <button
          className="animate-pulse font-bold py-4"
          onClick={() => setOpen(!open)}
        >
          Click
        </button>
        {open && <p className="pb-4">You rascal</p>}
      </div>
      <div className="flex flex-row justify-center space-x-8 pt-4 cursor-pointer">
        <a href="https://github.com/tommo593/portfolio-vite">
          <img
            src="screenshot3.png"
            className="max-h-96 rounded rounded-r-none transition hover:scale-125 duration-300"
          />
        </a>
        <a href="https://job-satisfaction-ts.vercel.app/">
          <img
            src="screenshot2.png"
            className="max-h-96 transition hover:scale-125 duration-300"
          />
        </a>
        <a href="https://github.com/tommo593/hagl-nextjs">
          <img
            src="screenshot1.png"
            className="max-h-96 rounded rounded-l-none transition hover:scale-125 duration-300"
          />
        </a>
      </div>
    </div>
  );
};

export default Projects;
