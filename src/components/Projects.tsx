import { useState } from "react";

const Projects = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="py-8">
      <h1 className="text-center py-4">Projects</h1>
      <div className="text-center">
        <button onClick={() => setOpen(!open)}>Click</button>
        {open && <p>Hi Dan!</p>}
      </div>
    </div>
  );
};

export default Projects;
