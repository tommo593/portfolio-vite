const Projects = () => {

  return (
    <div className="py-8">
      <h3 className="text-center py-12">Projects</h3>
      <div className="flex flex-row justify-center space-x-8 pt-4 cursor-pointer">
        <a href="https://github.com/tommo593/portfolio-vite">
          <img
            src="screenshot3.png"
            className="max-h-96 rounded-md rounded-r-none transition hover:scale-125 duration-300"
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
            className="max-h-96 rounded-md rounded-l-none transition hover:scale-125 duration-300"
          />
        </a>
      </div>
    </div>
  );
};

export default Projects;
