/* import { useState } from "react";
import emailjs from "@emailjs/browser";
import { contactInfo } from "../assets/constants";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [stateMessage, setStateMessage] = useState<string | null>(null);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
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
}; */

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(form.current) {
    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      
      );
    }
  };

  return (
    <div>
      <div>
    <h3 className="text-center py-8">Contact</h3>
    </div>
    <div>
    <form ref={form} onSubmit={sendEmail} className="max-w-96 flex flex-col m-auto justify-between">
      <label>Name</label>
      <input type="text" name="user_name" className="pb-4" />
      <label>Email</label>
      <input type="email" name="user_email" className="pb-4" />
      <label>Message</label>
      <textarea name="message" className="h-1/5 pb-4 resize-none" />
      <input type="submit" value="Send" className="pb-28" />
    </form>
    </div>
    </div>
  );
};

export default Contact;
