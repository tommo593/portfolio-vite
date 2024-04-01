import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import { contactInfo } from '../assets/constants';

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_3a1ykjf', 'portfolio_vite', form.current, {
          publicKey: 'JPMp-qtbiMvF7o0vG',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          }
        );
    }
  };

  return (
    <div>
      <div>
        <h3 className="py-8 text-center">Contact</h3>
      </div>
      <div>
        <form ref={form} onSubmit={sendEmail} className="m-auto flex max-w-96 flex-col justify-between">
          <input type="text" name="user_name" placeholder="Your name" className="mb-4 h-8" />
          <input type="email" name="user_email" placeholder="Your email" className="mb-4 h-8" />
          <textarea name="message" placeholder="Your message" className="mb-4 h-32 resize-none pb-8" />
          <input
            type="submit"
            title="Submit"
            className="cursor-pointer items-center rounded border border-transparent bg-gradient-to-t from-baby_blue to-dark_baby_blue py-2 text-center text-white_text shadow"
          />
        </form>
      </div>
      {/* <div className="flex flex-row justify-center space-x-8 pb-8 pt-8">
        <ul className="social-icons cursor-pointer">
          {contactInfo.map((contactInfo) => (
            <li key={contactInfo.id}>
              <a href={contactInfo.url}>{contactInfo.icon}</a>
            </li>
          ))}
        </ul>
          </div> */}
    </div>
  );
};

export default Contact;
