import React from 'react';
import '../../App.css';
import '../SignUp.css';
import Footer from '../Footer';

export default function SignUp() {
  return (
<div className="contact-us">
      <h1 className='headingcontact'>Contact Us</h1>
      <div className="contact-wrapper">
        <div className="contact-info">
          <h2>Email Addresses</h2>
          <p><strong>Sponsor Inquiries:</strong> <a href="mailto:sponsors@topgunztriteam.com">sponsors@topgunztriteam.com</a></p>
          <p><strong>Athlete Inquiries:</strong> <a href="mailto:athletes@topgunztriteam.com">athletes@topgunztriteam.com</a></p>
          <p><strong>General Inquiries:</strong> <a href="mailto:needforspeed@topgunztriteam.com">needforspeed@topgunztriteam.com</a></p>

          <h2>Contact Number</h2>
          <p>Phone: <a href="tel:+19783376717">978-337-6717</a></p>

        </div>
        <div className="contact-map">
          <img src="/images/cyclingabout.jpg" alt="Map to our location" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
