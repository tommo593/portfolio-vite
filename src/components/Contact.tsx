import { useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm('service_3a1ykjf', 'template_4v0vmcq', form.current, {
        publicKey: 'JPMp-qtbiMvF7o0vG',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
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
        <form ref={form} onSubmit={sendEmail} className="m-auto flex max-w-96 flex-col justify-between rounded">
          <input
            type="text"
            name="user_name"
            className="border-border_gray mb-4 h-8 rounded border p-1"
            placeholder="name"
            required
          />
          <input
            type="email"
            name="user_email"
            className="border-border_gray mb-4 h-8 rounded border p-1"
            placeholder="email"
            required
          />
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

/*  if (form.current) {
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
*/
