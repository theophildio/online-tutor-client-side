import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className='contact-container'>
      <div className="call-me">
        <h3>Call me</h3>
        <p>Give me a call to discuss anything you need to discuss. Book your online courses, ask questions or make suggestions.</p>
        <button className='tutor-btn'><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> +880 1712345678</button>
      </div>
      <div className="form-container">
        <h3>Get in touch</h3>
        <form className='contact-form'>
          <input type="text" name="name" id="fName" placeholder='Your name' required/>
          <input type="email" name="email" id="email" placeholder='Your email' required/>
          <input type="text" name="subject" id="subject" placeholder='Subject'/>
          <textarea name="message" id="message" cols="30" rows="10" placeholder='Your message...' required></textarea>
          <input className='tutor-btn' type="submit" value="Send Message" />
        </form>
      </div>
    </section>
  );
};

export default Contact;