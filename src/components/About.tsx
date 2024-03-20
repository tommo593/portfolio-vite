import { useState } from "react";

const About = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [open1, setOpen1] = useState<boolean>(false);
  const [open2, setOpen2] = useState<boolean>(false);

  return (
    <div className="text-center py-8">
      <h1 className="py-4">About Me</h1>
      <div className="flex flex-col justify-center">
        <div className="text-center max-w-md justify-center">
          <button onClick={() => setOpen(!open)}>Skills</button>
          {open && (
            <div className="rounded text-center text-sm py-2 hover:bg-blue-200 hover:shadow duration-500">
              <p>
                I am a self-taught developer with over a years personal
                experience using React and other popular Front End frameworks.
                Naturally, I started off by using The Holy Trinity, HTML, CSS,
                JS and broadened my horizons.
                <br /> I've taught myself initially by completing courses on
                Codecademy and then building personal projects. <br />I have
                completed courses in but not limited to: React, Angular,
                MongoDB, Node, TypeScript, Phaser.js etc. Outside of
                programming, I believe I have fantastic communication skills,
                coaching ability and people management skills.
              </p>
            </div>
          )}
        </div>
        <div className="flex flex-col max-w-md">
          <button onClick={() => setOpen1(!open1)}>Experience</button>
          {open1 && (
            <div className="rounded text-center text-sm hover:bg-blue-200 hover:shadow duration-500">
              <p className=" py-2">
                Corporate Security Officer | Dakin Security Services | June 2023
                - present
              </p>
              <p className="py-2">
                Self-employed Gym Owner | TKO: HQ | June 2020 - May 2023
              </p>
            </div>
          )}
        </div>
        <div className="flex flex-col max-w-md">
          <button onClick={() => setOpen2(!open2)}>Achievements</button>
          {open2 && (
            <div className="rounded text-center text-sm hover:bg-blue-200 hover:shadow duration-500">
              <p>
                When I started learning how to code I decided I didn't want to
                just do courses and hope for the best. I have always actively
                sought how to get the best information possible and also give
                back to the community. <br />
                Using this logic I decided to start up my own Discord server
                with the mind of helping others find their first role too. I
                understood that people would find roles and would then be able
                to share their story with others showing that it's achievable,
                but also providing steps as to what others should do if they
                want to be successful in this field.
                <br />
                This community has grown to over 250 members since and is
                growing all the time. You can also be a member by clicking the
                Discord icon in the nav bar!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
