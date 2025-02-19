import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const ContactMe = () => {
  return (
    <div>
      <Navbar />
      <div className="px-4 pb-12">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ContactMe;
