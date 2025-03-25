import Duolingo from '../components/Duolingo';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const AboutMe = () => {
  return (
    <div>
      <Navbar />
      <h2 className="mb-6 mt-8 text-center">About Me</h2>
      <div className="flex justify-center space-x-8 px-4 pb-12 text-sm sm:flex-col sm:text-center md:flex-row">
        <div>
          <p className="mt-8 max-w-2xl text-left text-xs">
            Since I was young I've trained martial arts and have sampled many different types and styles. I received my
            1st Dan black belt in Karate when I was 17 and then moved on to other martial arts like Muay Thai and BJJ. I
            kept it as a passion long enough that I decided I would open my own martial arts gym. I pulled off this feat
            when I was 25 years old and it was one of the best experiences of my life. Even though it didn't work out, I
            made many great memories and always look back at it fondly. From travelling across the country to compete,
            having an ad for Bruce Buffer's (iykyk) energy drink shot at my gym and making life long friendships.
            <br />
            <br />
            My other hobbies include gaming (mainly competitive shooters and RPGs), food (that's cooking AND eating) and
            watching crappy TV with my wife :)
          </p>
        </div>
      </div>
      <div className="m-auto hidden max-w-60 flex-row justify-center gap-4 shadow-xl lg:flex">
        <img
          src="bjj.jpg"
          alt="Me practicing Brazilian Jiu-Jitsu"
          className="rounded transition duration-300 hover:scale-105"
        />
        <img src="hols.jpg" alt="Me on holiday in Cyprus" className="rounded duration-300 hover:scale-105" />
        <img src="dinner.jpg" alt="Me on a dinner date" className="rounded duration-300 hover:scale-105" />
      </div>
      <div className="mb-12 p-2">
        <Duolingo />
      </div>
      <Footer />
    </div>
  );
};

export default AboutMe;
