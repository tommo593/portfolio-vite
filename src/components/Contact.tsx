import { useRef, useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm('service_3a1ykjf', 'template_4v0vmcq', form.current, {
        publicKey: 'JPMp-qtbiMvF7o0vG',
      })
      .then(
        () => {
          setMessage('Message sent successfully!');
          form.current?.reset();
        },
        (error) => {
          setMessage('Failed to send message. Please try again.');
          console.error('FAILED...', error.text);
        }
      );
  };

  return (
    <div>
      <div>
        <h2 className="py-8 text-center">Contact</h2>
      </div>
      <div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="m-auto flex max-w-96 flex-col justify-between rounded text-off-black"
        >
          <label htmlFor="user_name" className="mb-1 font-medium">
            Name
          </label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            className="mb-4 h-10 rounded border p-2 focus:outline-none focus:ring-2 focus:ring-mustard-yellow"
            placeholder="Enter your name"
            required
            aria-required="true"
          />

          <label htmlFor="user_email" className="mb-1 font-medium">
            Email
          </label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            className="mb-4 h-10 rounded border p-2 focus:outline-none focus:ring-2 focus:ring-mustard-yellow"
            placeholder="Enter your email"
            required
            aria-required="true"
          />

          <label htmlFor="message" className="mb-1 font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="mb-4 h-32 resize-none rounded border p-2 focus:outline-none focus:ring-2 focus:ring-mustard-yellow"
            placeholder="Type your message here..."
            required
            aria-required="true"
          ></textarea>

          <input
            type="submit"
            value="Send"
            className="cursor-pointer rounded border border-transparent bg-mustard-yellow py-2 text-center text-off-black hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-mustard-yellow active:bg-light-grey"
          />
        </form>

        {message && <p className="mt-4 text-center text-sm">{message}</p>}
      </div>
    </div>
  );
};

export default Contact;
