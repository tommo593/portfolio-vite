import { useState } from "react";
import emailjs from "@emailjs/browser";
import { contactInfo } from "../assets/constants";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [stateMessage, setStateMessage] = useState<string>(null);
  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        () => {
          setStateMessage("Message sent!");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        () => {
          setStateMessage("Something went wrong, please try again later");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );

    // Clears the form after sending the email
    e.target.reset();
  };

  return (
    <div>
      <h1 className="text-center py-8">Contact</h1>
      <div>
        {""}
        <form
          onSubmit={sendEmail}
          className="flex flex-col max-w-80 justify-center py-2"
        >
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input
            type="submit"
            value="Send"
            disabled={isSubmitting}
            className="rounded border border-gray-100 shadow p-2 transition bg-gradient-to-r from-blue-200 to-blue-300 cursor-pointer max-w-28"
          />
          {stateMessage && <p>{stateMessage}</p>}
        </form>
      </div>
      <div className="flex flex-row justify-center space-x-8 pb-8">
        <ul className="social-icons cursor-pointer">
          {contactInfo.map((contactInfo) => (
            <li key={contactInfo.id}>
              <a>{contactInfo.icon}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Contact;
