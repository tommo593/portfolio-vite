import "./App.css";
import Navbar from "./components/Navbar";
import ParticleBg from "./components/ParticleBg";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Duolingo from "./components/Duolingo"

function App() {
  return (
    <>
      <div>
        <Navbar />
        <ParticleBg />
        <TechStack />
        <Duolingo />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
