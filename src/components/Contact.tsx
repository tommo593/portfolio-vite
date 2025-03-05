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
        <h3 className="py-8 text-center">Contact</h3>
      </div>
      <div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="m-auto flex max-w-96 flex-col justify-between rounded text-off-black"
        >
          <input type="text" name="user_name" className="mb-4 h-8 rounded border p-1" placeholder="name" required />
          <input type="email" name="user_email" className="mb-4 h-8 rounded border p-1" placeholder="email" required />
          <textarea
            name="message"
            className="mb-4 h-32 resize-none rounded border p-1 pb-8"
            placeholder="message"
            required
          />
          <input
            type="submit"
            value="Send"
            className="cursor-pointer rounded border border-transparent bg-mustard-yellow py-2 text-center text-off-black hover:opacity-80 active:bg-light-grey"
          />
        </form>
        {message && <p className="mt-4 text-center text-sm">{message}</p>}
      </div>
    </div>
  );
};

export default Contact;
