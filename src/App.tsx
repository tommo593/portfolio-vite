import './App.css';
import Navbar from './components/Navbar';
import TechStack from './components/TechStack';
import Duolingo from './components/Duolingo';
import Footer from './components/Footer';
import Hero from './components/Hero';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <div className="px-4">
          <TechStack />
          <Hero />
          <p className="text-center">
            Hi there, don't be shy, take a look around. Maybe drop me a message in the contact form. <br />
            Let me know where I can improve, what changes you'd make, what you like, what you don't like! <br />
            <br />
            You can find all my important contact information in the Nav Bar. You can find a link to my Discord server,
            "Hire-A-n00b", <br />
            where you'll find plenty of like-minded individuals to give you help on projects, interviews, CV stuff and
            general chit-chat. <br />
            There's about 250 people in there, I'm sure you'll find someone! <br />
            <br />
            You'll also find my most up-to-date CV up there, along with my GitHub, LinkedIn and plenty of links to send
            you <br />
            back and forth between them in an infinite loop. Enjoy!
          </p>
          <div className="pb-12">
            <Duolingo />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
