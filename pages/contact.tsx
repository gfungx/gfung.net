import type { FunctionalComponent } from 'preact';

import { useState, useRef, useEffect } from 'preact/hooks';
import { useForm } from 'react-hook-form';
import Filter from 'bad-words';
import ReCAPTCHA from 'react-google-recaptcha';
import { useTheme } from 'next-themes';

import Container from 'components/Container';

const title = 'Contact';
const description = 'Got something to say? Contact me today!';
const url = 'https://gfung.net/contact';

type Inputs = {
  email: string;
  title: string;
  message: string;
};

const emailPattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
const filter = new Filter();

const Contact: FunctionalComponent = () => {
  const { register, handleSubmit, errors, reset } = useForm<Inputs>();
  const { resolvedTheme } = useTheme();
  const [isVerified, setIsVerified] = useState(false);
  const [missedRecaptcha, setMissedRecaptcha] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const recaptchaRef = useRef<ReCAPTCHA>();

  const onSubmit = async (data: Inputs) => {
    if (!isVerified) {
      setMissedRecaptcha(true);
    } else {
      await fetch('/api/contact', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          recaptcha: recaptchaRef.current.getValue(),
          email: data.email,
          title: data.title,
          message: data.message
        })
      });

      setIsSubmitted(true);
    }
  };

  useEffect(() => {
    if (isSubmitted) {
      reset();
      recaptchaRef.current.reset();
    }
  }, [isSubmitted, reset, recaptchaRef]);

  return (
    <Container SEO={{ title, description, url }}>
      <h1 className="heading">Get in touch</h1>
      <p className="text-lg my-4">
        Although I'm busy most days, my inbox is always open and I'll try to get back to you as soon
        as possible!
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email" className="font-bold">
          Email
        </label>
        <input
          name="email"
          id="email"
          aria-label="Your email"
          placeholder="me@gmail.com"
          ref={register({
            required: true,
            pattern: emailPattern
          })}
          className={`input ${
            errors.email ? 'ring-2 ring-red-400' : 'input-effects'
          } w-2/3 xl:w-1/2 px-4`}
        />
        <label htmlFor="title" className="inline-block font-bold pt-4">
          Title
        </label>
        <input
          name="title"
          id="title"
          aria-label="The title of your message"
          placeholder="Hey!"
          ref={register({
            required: true,
            validate: {
              profane: value => !filter.isProfane(value)
            }
          })}
          className={`input ${
            errors.title ? 'ring-2 ring-red-400' : 'input-effects'
          } w-2/3 xl:w-1/2 px-4`}
        />
        <label htmlFor="message" className="inline-block font-bold pt-4">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          aria-label="Your message"
          placeholder="What's up?"
          rows={5}
          ref={register({
            required: true,
            validate: {
              profane: value => !filter.isProfane(value)
            }
          })}
          className={`input ${
            errors.message ? 'ring-2 ring-red-400' : 'input-effects'
          } w-full px-4 mb-4`}
        />

        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
          onChange={token =>
            token ? (setIsVerified(true), setMissedRecaptcha(false)) : setIsVerified(false)
          }
          theme={resolvedTheme === 'light' ? 'light' : 'dark'}
        />
        {!isVerified && (
          <p className={`text-sm ${missedRecaptcha ? 'text-red-400' : ''} mt-2`}>
            Please complete the ReCAPTCHA, we need to see if you're really a human.
          </p>
        )}
        <button
          type="submit"
          className="rounded-xl bg-gray-700 dark:bg-gray-500 font-bold text-lg text-white p-2 px-4 mt-2"
        >
          Send!
        </button>
      </form>
    </Container>
  );
};

export default Contact;
