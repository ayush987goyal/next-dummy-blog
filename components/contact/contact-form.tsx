import { FormEvent, useState } from 'react';

import classes from './contact-form.module.css';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const sendMessageHandler = async (event: FormEvent) => {
    event.preventDefault();

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, name, message }),
    });
    const data = await response.json();
    console.log(data);
  };

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
    </section>
  );
};

export default ContactForm;
