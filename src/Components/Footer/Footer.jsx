import React, { useState, useEffect } from "react";
import "./Footer.css";
import { MdLocationOn } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

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
          <h2>Pages ───</h2>
          <Link to ={"/"}><p><FaAngleRight className="arrow"/>
          Home</p></Link>
          <Link to ={"/about"}><p><FaAngleRight className="arrow"/>
          About Us</p></Link>
          <Link to ={"/contact"}><p><FaAngleRight className="arrow"/>
          Contact Us</p></Link>
          <Link to ={"/rooms"}><p><FaAngleRight className="arrow"/>
          Rooms</p></Link>
          <p><FaAngleRight className="arrow"/>
          Privacy Policy</p>
        </div>

        <div className="footer2">
          <h2>Contact ───</h2>
          <h1>
            <MdLocationOn className="locationIcon" />
            Dandebagh Road, Main Beach, Gokarna, Karnataka 581326
          </h1>
          <p>
            <IoCall className="callIcon" />
            {/* Add tel: link for calling directly */}
            <a href="tel:+919449340027">+91 9449340027</a>
            {/* Add WhatsApp link for direct chat */}
            <span onClick={handleWhatsAppClick} style={{ cursor: "pointer", color: "green" }}>
             
            </span>
          </p>
        </div>

        <div className="footer3">
          <h2>Entry - Exit ───</h2>
          <h1>Check In - Check Out</h1>
          <p>11:00 AM - 10:00 PM</p>
        </div>
      </div>

      <div className="footers2">
        <div className="end">
          <a href="">© @copyright 2025</a>
          <a href="">Developed By Canara Tech Labs</a>
        </div>
      </div>

      {showButton && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          &#8679;
        </button>
      )}

      <button className="whatsapp-button" onClick={handleWhatsAppClick}>
        <img
          src="https://cdn-icons-png.flaticon.com/128/4494/4494494.png"
          alt=""
          className="whatsapp-icon"
        />
      </button>
    </div>
  );
};

export default Footer;