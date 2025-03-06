import LogoOrigami from './ui/LogoOrigami';
//import * as motion from 'motion/react-client';

const Hero: React.FC = () => {
  return (
    <div>
      <div>
        {/*<motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            scale: { type: 'spring', visualDuration: 0.8, bounce: 0.5 },
          }}
        > </motion.div>*/}
        <img src="handwritten_logo.svg" alt="Tom O'Hanlon Logo" className="m-auto mb-16 mt-8 max-h-28" />
      </div>
      <div className="m-auto mb-12 max-w-3xl p-2 text-left text-xs">
        I am a self-taught developer with over a years personal experience using React and other popular Front End
        frameworks. Naturally, I started off by using The Holy Trinity, HTML, CSS, JS and broadened my horizons.
        <br />
        <br />
        Initially I taught myself by completing courses on Codecademy and then building personal projects, YouTube
        tutorials etc. I am competent in the following technologies: React, TypeScript, Express, Node, PostgreSQL and
        Tailwind. Outside of programming, I believe I have fantastic communication skills, coaching ability and people
        management skills. When I started learning how to code I decided I didn't want to just do courses and hope for
        the best. I have always actively sought how to get the best information possible and also give back to the
        community.
        <br />
        <br />
        Using this logic I decided to start up my own Discord server with the mind of helping others find their first
        role too. I understood that people would find roles and would then be able to share their story with others
        showing that it's achievable, but also providing steps as to what others should do if they want to be successful
        in this field.
        <br />
        <br />
        This community has grown to over 250 members since and is growing all the time. You can also be a member by
        clicking the Discord icon in the nav bar!
      </div>
      <div className="m-auto mb-12">
        <LogoOrigami />
      </div>
    </div>
  );
};

export default Hero;
