import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_2pxhkh9', 'template_avp7u6p', form.current, {
        publicKey: '5YoB77HdcnS1NXoVm',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='container'>
    <form className='contact_form' ref={form} onSubmit={sendEmail}>
      <a className="click_contact" href="#contact"></a>
      <h1>Contact Us</h1>
      <a id="contact"></a>
      <label>Name</label>
      <input type="text" placeholder='Yogesh' name="user_name" />
      <label>Email</label>
      <input type="email" placeholder='Email' name="user_email" />
      <label>Message</label>
      <textarea name="message" placeholder='Message...' />
      <br />
      <input type="submit" value="Send" />
    </form>
    </div>
  );
};

export default ContactUs;

{/* <a className="click_contact" href="#contact"></a>
<a id="contact"></a> */}