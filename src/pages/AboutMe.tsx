import Navbar from '../components/Navbar';

const AboutMe = () => {
  return (
    <div>
      <Navbar />
      <h1>About Me</h1>
      <div className="flex flex-row">
        <img src="hols.jpg" alt="Me" />
        <div>
          <h3>What have I been doing lately?</h3>
          <p>Up until a couple of years ago I had my own business and had always thought about giving coding a try.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
