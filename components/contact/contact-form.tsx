import { FormEvent, useEffect, useState } from 'react';

import Notification, { NotificationProps } from '../ui/notification';
import classes from './contact-form.module.css';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (status === 'success' || status === 'error') {
      const timer = setTimeout(() => {
        setStatus('');
        setError('');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  const sendMessageHandler = async (event: FormEvent) => {
    event.preventDefault();
    setStatus('pending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, message }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw Error(data.message || 'Some error occurred!');
      }
      setStatus('success');
      setEmail('');
      setName('');
      setMessage('');
    } catch (err) {
      setStatus('error');
      setError(err);
    }
  };

  let notification: NotificationProps;
  if (status === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending message...',
      message: 'Your message is on its way!',
    };
  } else if (status === 'success') {
    notification = {
      status: 'success',
      title: 'Success!',
      message: 'Message sent successfully!',
    };
  } else if (status === 'error') {
    notification = {
      status: 'error',
      title: 'Error!',
      message: error,
    };
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        <div className={classes.control}>
          <label htmlFor="name">Your Message</label>
          <textarea
            rows={5}
            name="message"
            id="message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>

      {notification && <Notification {...notification} />}
    </section>
  );
};

export default ContactForm;
