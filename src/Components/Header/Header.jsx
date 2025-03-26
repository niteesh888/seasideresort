import react, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Header.css'
// import navbar from './navbar.jpg';


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

      const toggleMenu = () => {
       setIsOpen(!isOpen);
      };
    return (

       
         <div className="header">
            <div className="inner11">
         
        
             <h1>Seaside Beach Resort Homestay</h1>
             </div>
             
             <div className="inner1">
             <Link to="/"><h6>Home</h6></Link>
             <Link to="/about"><p>About</p></Link>
             <Link to="/rooms"><p>Rooms</p></Link>
             
             
             <p>Contact</p>
             <p>Service</p>
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
         <Link to="/service" onClick={toggleMenu}>Service</Link>
       </nav>
     </div>
            
             </div>
             
    

    );       
};

export default Header;
























// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Header.css';

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="header">
//       {/* <h1 className="title">Seaside Beach Resort Homestay</h1> */}
//       <div className="menu-icon" onClick={toggleMenu}>
//         ☰
//       </div>
//       <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
//         <Link to="/" onClick={toggleMenu}>Home</Link>
//         <Link to="/rooms" onClick={toggleMenu}>Rooms</Link>
//         <Link to="/about" onClick={toggleMenu}>About</Link>
//         <Link to="/contact" onClick={toggleMenu}>Contact</Link>
//         <Link to="/service" onClick={toggleMenu}>Service</Link>
//       </nav>
//     </div>
//   );
// };

// export default Header;
