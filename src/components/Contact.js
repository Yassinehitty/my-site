import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <div className="contact-info-container">
        <div className="contact-info-card">
          <div className="icon">
            <FaMapMarkerAlt />
          </div>
          <h3>Address</h3>
          <p>123 Moga Drive, Morocco</p>
        </div>
        <div className="contact-info-card">
          <div className="icon">
            <FaPhone />
          </div>
          <h3>Phone</h3>
          <p>(555) 123-4567</p>
        </div>
        <div className="contact-info-card">
          <div className="icon">
            <FaEnvelope />
          </div>
          <h3>Email</h3>
          <p>info@mogafish.com</p>
        </div>
        <div className="contact-info-card">
          <div className="icon">
            <FaClock />
          </div>
          <h3>Working Hours</h3>
          <p>Mon-Sat: 8AM-6PM</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;