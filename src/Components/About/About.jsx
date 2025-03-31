import React, { useEffect, useState } from 'react';
import './about.css';
import about1 from '../../assets/images/about-11.jpg';
import about2 from '../../assets/images/about-22.jpg';
import about3 from '../../assets/images/about-33.jpeg';
import about4 from '../../assets/images/about-44.jpeg';
import { IoIosCall } from "react-icons/io";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on page load
    setIsVisible(true);
  }, []);

  useEffect(() => {
    // Intersection Observer for scrolling effect
    const images = document.querySelectorAll('.abt-imgs img');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.5 }
    );

    images.forEach((img) => observer.observe(img));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about">
      <div className="abt-imgs">
        <div className="abt-imgs1">
          <div className={`abt-img1 ${isVisible ? 'fade-in' : ''}`}>
            <img src={about1} alt="about1" />
          </div>
          <div className={`abt-img2 ${isVisible ? 'fade-in' : ''}`}>
            <img src={about2} alt="about2" />
          </div>
        </div>
        <div className="abt-imgs2">
          <div className={`abt-img3 ${isVisible ? 'fade-in' : ''}`}>
            <img src={about3} alt="about3" />
          </div>
          <div className={`abt-img4 ${isVisible ? 'fade-in' : ''}`}>
            <img src={about4} alt="about4" />
          </div>
        </div>
      </div>
      <div className="abt-info">
        <div className="abt-info1">
          <h4>about Us ━━</h4>
          <h2>Welcome to Seaside Resort Homestay</h2>
        </div>
        <div className="abt-info2">
          <p>
            Seaside Resort Homestay is located on the main beach of Gokarna. We
            have AC and non-AC rooms available. We also serve food, and all
            facilities are provided at an affordable cost.
          </p>
          <p>
            The experience of the beachside in the evening and night is an
            amazing view with a colorful environment.
          </p>
          <p>For booking, click on the call button</p>
        </div>
        <div className="abt-info4">
        <IoIosCall className='iicon'/>
          
          <a href="tel:9449340027">9449340027</a>
        </div>
      </div>
    </div>
  );
};

export default About;
