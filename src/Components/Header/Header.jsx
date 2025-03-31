import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Header.css'
import { IoIosCall } from "react-icons/io";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="main-header">
            <div className="header-no">
                <IoIosCall className='icon' />
                <div>
                    {/* Make the phone number a link for both call and WhatsApp */}
                    <a href="tel:+9449340027"><h2>9449340027</h2></a> {/* Link for dialing */}
                    <a href="https://wa.me/9449340027" target="_blank" rel="noopener noreferrer">
                        
                    </a> {/* Link for WhatsApp */}
                </div>
            </div>

            <div className="header">
                <div className="inner11">
                    <h1>Seaside Beach Resort Homestay</h1>
                </div>

                <div className="inner1">
                    <Link to="/"><h6>Home</h6></Link>
                    <Link to="/about"><p>About</p></Link>
                    <Link to="/rooms"><p>Rooms</p></Link>
                    <Link to={"/contact"}><p>Contact</p></Link>
                    {/* <p>Service</p> */}
                </div>
                <div className="bar">
                    <div className="menu-icon" onClick={toggleMenu}>
                        ☰
                    </div>
                    <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
                        <Link to="/" onClick={toggleMenu}>Home</Link>
                        <Link to="/rooms" onClick={toggleMenu}>Rooms</Link>
                        <Link to="/about" onClick={toggleMenu}>About</Link>
                        <Link to="/contact" onClick={toggleMenu}>Contact</Link>
                        {/* <Link to="/service" onClick={toggleMenu}>Service</Link> */}
                    </nav>
                </div>

            </div>

        </div>
    );
};

export default Header;
