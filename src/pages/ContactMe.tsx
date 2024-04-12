import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactMe = () => {
  return (
    <div>
      <Navbar />
      <div className="pb-12">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ContactMe;
