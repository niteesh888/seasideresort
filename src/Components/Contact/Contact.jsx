import React, { useState } from 'react';
import './Contact.css';
import { IoCall } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, textContent } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: textContent
    }));
  };

  const handleFocus = (e) => {
    if (e.target.textContent === e.target.getAttribute('data-placeholder')) {
      e.target.textContent = '';
    }
  };

  const handleBlur = (e) => {
    if (e.target.textContent.trim() === '') {
      e.target.textContent = e.target.getAttribute('data-placeholder');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      alert('Please fill in all the details.');
      return;
    }

    console.log('Form Submitted:', formData);
    alert('Message Sent Successfully!');
  };

  return (
    <div className="outercontact">
      <h6>━━ Contact Us ━━</h6>
      <h2>Contact For Any Query</h2>
      <div className="innercontact">
        <div className="innercontact3">
          <div className="subinnercontact3">
            <h4>Contact Number ━━</h4>
            <p><IoCall className='iconn'/> +91 9449340027</p>
          </div>
          <div className="innercontact4">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.120798989246!2d74.31439357506256!3d14.550275185918464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbec4bf68d474fb%3A0x69515b259eb92d85!2sSeaside%20Beach%20Resort%20Homestay!5e0!3m2!1sen!2sin!4v1711600000000" width="100%" height="370vh" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div className="innercontact2">
          <div className="subinnercontact2">
            <h4>Address ━━</h4>
            <p><MdLocationOn className='dandebagh'/> Dandebagh Road, Main Beach, Gokarna, Karnataka 581326</p>
          </div>
          <form className="innercontact5" onSubmit={handleSubmit}>
            <div className="feedback1">
              <div className="subfeedback2" contentEditable="true" name="name" onInput={handleChange} onFocus={handleFocus} onBlur={handleBlur} data-placeholder="Your Name">Your Name</div>
              <div className="subfeedback1" contentEditable="true" name="email" onInput={handleChange} onFocus={handleFocus} onBlur={handleBlur} data-placeholder="Your Email">Your Email</div>
            </div>
            <div className="feedback2" contentEditable="true" name="subject" onInput={handleChange} onFocus={handleFocus} onBlur={handleBlur} data-placeholder="Subject">Subject</div>
            <div className="feedback3" contentEditable="true" name="message" onInput={handleChange} onFocus={handleFocus} onBlur={handleBlur} data-placeholder="Message">Message</div>
            <div className="sendmessage">
              <button type="submit">SEND MESSAGE</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
