import React from 'react';
import './Contact.scoped.css';

const Contact = (props) => {
  return (
    <section className="contact" ref={props.elementRef}>
      <h2 className="title">Interested in working together?</h2>
      <a href="mailto:ruben1991@protonmail.com" className="email-btn">Email Me</a>
    </section>
  )
};

export default Contact;