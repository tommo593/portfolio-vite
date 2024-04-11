import './App.css';
import Navbar from './components/Navbar';
import TechStack from './components/TechStack';
import Duolingo from './components/Duolingo';
import Footer from './components/Footer';
import Hero from './components/Hero';
import AboutMe from './pages/AboutMe';
import MyWork from './pages/MyWork';
import ContactMe from './pages/ContactMe';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <div className="px-4">
          <TechStack />
          <Hero />
          <AboutMe />
          <MyWork />
          <ContactMe />
          <Duolingo />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
