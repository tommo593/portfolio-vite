import './App.css';
import Navbar from './components/Navbar';
import TechStack from './components/TechStack';
import About from './components/About';
import Contact from './components/Contact';
import Duolingo from './components/Duolingo';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <div className="px-4">
          <TechStack />
          <Hero />
          <About />
          <Projects />
          <Duolingo />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
