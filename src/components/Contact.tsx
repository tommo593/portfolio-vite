import { FaPhone, FaEnvelope, FaFile } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <h1 className="text-center py-8">Contact</h1>
      <div className="flex flex-row justify-center space-x-8 pb-8">
        <div>
          <FaPhone />
        </div>
        <div>
          <FaEnvelope />
        </div>
        <div>
          <FaFile />
        </div>
      </div>
    </div>
  );
};

export default Contact;
