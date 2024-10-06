import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactMe = () => {
  return (
    <div>
      <Navbar />
      <div className="px-4 pb-12">
        <Contact />
      </div>
      <Footer />
      <div className="pb-8 "></div>
    </div>
  );
};

export default ContactMe;
