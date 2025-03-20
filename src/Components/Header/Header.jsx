import react from 'react'
import { Link } from 'react-router-dom';
import './Header.css'
// import navbar from './navbar.jpg';

const Header = () => {

    return (

       
         <div className="header">
            <div className="inner1">
         
        
             <h1>Seaside Beach Resort Homestay</h1>
             </div>

             <div className="inner1">
             <h5>Home</h5>
             <Link to="/about"><p>About</p></Link>
             <Link to="/rooms"><p>Rooms</p></Link>
             
             
             <p>Contact</p>
             <p>Service</p>
             </div>
             </div>
    

    );       
};

export default Header;