import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TestComponent from '../components/TestComponent';

const ContactMe = () => {
  return (
    <div>
      <Navbar />
      <div className="px-4 pb-12">
        <Contact />
      </div>
      <Footer />
      <div className="pb-8">
        <TestComponent />
      </div>
    </div>
  );
};

export default ContactMe;
