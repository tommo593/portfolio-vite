import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import { contactInfo } from '../assets/constants';

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('service_3a1ykjf', 'template_4v0vmcq', form.current, 'JPMp-qtbiMvF7o0vG').then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log('FAILED...', error);
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
        <form ref={form} onSubmit={sendEmail} className="m-auto flex max-w-96 flex-col justify-between rounded">
          <label className="pb-2">Name</label>
          <input type="text" name="user_name" className="mb-4 h-8 rounded border border-border_gray" />
          <label className="pb-2">Email</label>
          <input type="email" name="user_email" className="mb-4 h-8 rounded border border-border_gray" />
          <label className="pb-2">Message</label>
          <textarea name="message" className="mb-4 h-32 resize-none rounded border border-border_gray pb-8" />
          <input
            type="submit"
            value="send"
            className="btn items-center rounded border border-transparent py-2 text-center text-white_text shadow"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;

/* <div className="flex flex-row justify-center space-x-8 pb-8 pt-8">
        <ul className="social-icons cursor-pointer">
          {contactInfo.map((contactInfo) => (
            <li key={contactInfo.id}>
              <a href={contactInfo.url}>{contactInfo.icon}</a>
            </li>
          ))}
        </ul>
          </div> */
