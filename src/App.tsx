import "./App.css";
import Navbar from "./components/Navbar";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Duolingo from "./components/Duolingo"
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
  return (
    <> 
      <div>
        <Navbar />
        <TechStack />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Duolingo />
        <Footer />
      </div>
    </>
  );
}

export default App;
