import { useState } from "react";

const About = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="text-center py-8">
      <h1 className="py-4">About Me</h1>
      <div className="flex flex-row justify-center space-x-28">
        <div>
          <h4>Skills</h4>
        </div>
        <div>
          <h4>Experience</h4>
        </div>
        <div>
          <h4>Achievements</h4>
        </div>
      </div>
    </div>
  );
};

export default About;
