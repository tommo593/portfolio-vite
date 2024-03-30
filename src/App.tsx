import './App.css';
import Navbar from './components/Navbar';
import TechStack from './components/TechStack';
import About from './components/About';
import Contact from './components/Contact';
import Duolingo from './components/Duolingo';
import Footer from './components/Footer';
import Hero from './components/Hero';
import EmblaCarousel from './components/carousel/EmblaCarousel';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <TechStack />
        <Hero />
        <About />
        <Projects />
        <EmblaCarousel />
        <Contact />
        <Duolingo />
        <Footer />
      </div>
    </>
  );
}

export default App;
