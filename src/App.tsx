import "./App.css";
import Navbar from "./components/Navbar";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Duolingo from "./components/Duolingo"
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import EmblaCarousel from "./components/EmblaCarousel";

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
