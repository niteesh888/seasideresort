import React, { useState, useEffect } from "react";
import "./Contact.css";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "9449340027";
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <div className="footer">
      <div className="footers1">
        <div className="footer1">
          <h2>Pages ----</h2>
          <p>Home</p>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Rooms</p>
          <p>Privacy Policy</p>
        </div>

        <div className="footer2">
          <h2>Contact ----</h2>
          <h1>Dandebagh Road, Main Beach, Gokarna, Karnataka 581326</h1>
          <p>+91 9449340027</p>
        </div>

        <div className="footer3">
          <h2>Entry - Exit ----</h2>
          <p>Check In - Check Out</p>
          <p>11:00 AM - 10:00 AM</p>
        </div>
      </div>

      <div className="footers2">
        <div className="end">
          <a href="">© @copyright 2023</a>
          <a href="">Developed By WT Infometics</a>
        </div>
      </div>

      {showButton && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          &#8679;
        </button>
      )}

      <button className="whatsapp-button" onClick={handleWhatsAppClick}>
        <img src="https://cdn-icons-png.flaticon.com/128/4494/4494494.png" alt="" className="whatsapp-icon" />
      </button>
    </div>
  );
};

export default Footer;
