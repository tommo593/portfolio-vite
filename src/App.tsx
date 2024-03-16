import "./App.css";
import Navbar from "./components/Navbar";
import ParticleBg from "./components/ParticleBg";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <ParticleBg />
        <TechStack />
        <Projects />
      </div>
    </>
  );
}

export default App;
