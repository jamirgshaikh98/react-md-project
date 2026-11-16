import React from "react";
import "../CSS/Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-subtitle">
        We’d love to hear from you! Reach out to Frute Company for any inquiries.
      </p>

      <div className="contact-info">
        <h2>Our Details</h2>
        <p>📍Name: MD Fruits,Sangola</p>
        <p>📍 Address: In front of Sadanand Hotel, Miraj Road Sangola, Dist-Solapur,Maharshtra, India</p>
        <p>📞 Phone: <a href="tel:7038299786">7038299786</a></p>
        {/* <p>✉️ Email: </p> */}
      </div>
    </div>
  );
};

export default Contact;