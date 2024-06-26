import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { FaAngleDown } from 'react-icons/fa';

export default function About() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <h3 className="py-8 text-center">About</h3>
      <div className="m-auto max-w-3xl text-xs">
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary expandIcon={<FaAngleDown />} aria-controls="panel1bh-content" id="panel1bh-header">
            <Typography sx={{ width: '33%', flexShrink: 0 }}>About Me</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              I am a self-taught developer with over a years personal experience using React and other popular Front End
              frameworks. Naturally, I started off by using The Holy Trinity, HTML, CSS, JS and broadened my horizons.
              <br />
              <br />
              Initially I taught myself by completing courses on Codecademy and then building personal projects, YouTube
              etc.
              <br />I have completed courses in but not limited to: React, Angular, MongoDB, Node, TypeScript, Phaser.js
              etc. Outside of programming, I believe I have fantastic communication skills, coaching ability and people
              management skills.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary expandIcon={<FaAngleDown />} aria-controls="panel2bh-content" id="panel2bh-header">
            <Typography sx={{ width: '33%', flexShrink: 0 }}>Experience</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Corporate Security Officer | Dakin Security Services | June 2023 - present
              <br />
              <br />
              Self-employed Gym Owner | TKO: HQ | June 2020 - May 2023
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary expandIcon={<FaAngleDown />} aria-controls="panel3bh-content" id="panel3bh-header">
            <Typography sx={{ width: '33%', flexShrink: 0 }}>Achievements</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              When I started learning how to code I decided I didn't want to just do courses and hope for the best. I
              have always actively sought how to get the best information possible and also give back to the community.
              <br />
              <br />
              Using this logic I decided to start up my own Discord server with the mind of helping others find their
              first role too. I understood that people would find roles and would then be able to share their story with
              others showing that it's achievable, but also providing steps as to what others should do if they want to
              be successful in this field.
              <br />
              <br />
              This community has grown to over 250 members since and is growing all the time. You can also be a member
              by clicking the Discord icon in the nav bar!
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

/* import { useState } from 'react';

// TODO Organise information to the left and decorate tabs

const About = () => {
  const [openTab, setOpenTab] = useState<number | null>(null);

  const handleTabClick = (index: number) => {
    setOpenTab((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="py-8 text-center">
      <h3 className="py-12">About Me</h3>
      <div className="flex-basis m-auto flex max-w-4xl justify-between">
        <div className="max-w-md flex-col items-center py-2">
          <button
            onClick={() => handleTabClick(0)}
            className={`w-36 max-w-28 animate-pulse cursor-pointer rounded p-2 py-2 ${
              openTab === 0 ? 'bg-gradient-to-r' : ''
            }`}
          >
            Skills
          </button>
          {openTab === 0 && (
            <div className="rounded text-left text-sm">
              <p className="py-2">
                I am a self-taught developer with over a years personal experience using React and other popular Front
                End frameworks. Naturally, I started off by using The Holy Trinity, HTML, CSS, JS and broadened my
                horizons.
                <br />
                I've taught myself initially by completing courses on Codecademy and then building personal projects.
                <br />I have completed courses in but not limited to: React, Angular, MongoDB, Node, TypeScript,
                Phaser.js etc. Outside of programming, I believe I have fantastic communication skills, coaching ability
                and people management skills.
              </p>
            </div>
          )}
        </div>
        <div className="flex max-w-md flex-col items-center py-2">
          <button
            onClick={() => handleTabClick(1)}
            className={`w-36 max-w-28 animate-pulse cursor-pointer rounded p-2 duration-500 ${
              openTab === 1 ? 'bg-gradient-to-r' : ''
            }`}
          >
            Experience
          </button>
          {openTab === 1 && (
            <div className="rounded text-left text-sm">
              <p className="py-2">Corporate Security Officer | Dakin Security Services | June 2023 - present</p>
              <p className="py-2">Self-employed Gym Owner | TKO: HQ | June 2020 - May 2023</p>
            </div>
          )}
        </div>
        <div className="flex max-w-md flex-col items-center py-2">
          <button
            onClick={() => handleTabClick(2)}
            className={`w-36 max-w-28 animate-pulse cursor-pointer rounded py-2 transition${
              openTab === 2 ? 'bg-gradient-to-r' : ''
            }`}
          >
            Achievements
          </button>
          {openTab === 2 && (
            <div className="rounded text-left text-sm">
              <p className="py-2">
                When I started learning how to code I decided I didn't want to just do courses and hope for the best. I
                have always actively sought how to get the best information possible and also give back to the
                community.
                <br />
                Using this logic I decided to start up my own Discord server with the mind of helping others find their
                first role too. I understood that people would find roles and would then be able to share their story
                with others showing that it's achievable, but also providing steps as to what others should do if they
                want to be successful in this field.
                <br />
                This community has grown to over 250 members since and is growing all the time. You can also be a member
                by clicking the Discord icon in the nav bar!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}; */
