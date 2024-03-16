import { useState } from "react";

const Projects = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="py-8">
      <h1 className="text-center">Projects</h1>
      <div>
        <button onClick={() => setOpen(!open)}>Click</button>
        {open && <p>Open!</p>}
        <img src="mockup.jpg" />
      </div>
    </div>
  );
};

export default Projects;
