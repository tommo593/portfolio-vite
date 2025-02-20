import Duolingo from '../components/Duolingo';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import * as motion from 'motion/react-client';

const AboutMe = () => {
  return (
    <div>
      <Navbar />
      <h3 className="py-12 text-center">About Me</h3>
      <div className="flex justify-center space-x-8 px-4 pb-12 text-sm sm:flex-col sm:text-center md:flex-row">
        <div>
          <h4>What have I been doing lately?</h4>
          <br />
          <p className="text-left">
            I'd been thinking about giving coding a little try for a long time but I'd also always wanted to hit
            personal goals too.
            <br />
            I wanted to open up my own business in my mid-twenties, so thats exactly what I did. It took me nearly 4
            <br />
            years to open up my gym from inception. It was a long old road, but it was worth it. <br />
            <br />
            Unfortunately I had to close that down back in 2022, I knew I didn't have time to spare and that I needed
            <br />
            to get back onto a career path. I knew I was going to finally give coding a crack. <br />
            <br />
            From the very first second I put "Hello World!" in between those P tags and saw that text in my browser,{' '}
            <br />I knew it was a good choice. <br />
            <br />
            I've been learning to code for over a year now and constantly expanding and improving my skillset. <br />
            Technologies I have used include but aren't limited to: React, Angular, Next.js, Vite, Node, Express,
            TypeScript, <br />
            C++, Phaser.js.
          </p>
        </div>
      </div>
      <div className="mb-12 p-2">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            scale: { type: 'spring', visualDuration: 0.8, bounce: 0.5 },
          }}
        >
          {' '}
          <Duolingo />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutMe;
