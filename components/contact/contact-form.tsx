import classes from './contact-form.module.css';

const ContactForm = () => {
  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" name="email" id="email" required />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" name="name" id="name" required />
          </div>
        </div>

        <div className={classes.control}>
          <label htmlFor="name">Your Message</label>
          <textarea rows={5} name="message" id="message" />
        </div>

        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
