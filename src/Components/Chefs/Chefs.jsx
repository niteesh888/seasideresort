import React from "react";
import './Chefs.css';
import chef1 from './team1.jpg';
import chef2 from './team 2.jpg';
import chef3 from './team 3.jpg';
import chef4 from './team 4.jpg';

const Chefs =()=>{
    return(
        <div className="Chefs">
              <p>----- Team Members -----</p>
              <h1>Our Master Chefs</h1>
        

         <div className="Chefss">
            <div className="chefsss1">
            <div className="Chefs1">
              <img src={chef1} alt="" />
              <h3>Full Name</h3>
              <h6>Designation</h6>
            </div>
            <div className="Chefs2">
              <img src={chef2} alt="" />
              <h3>Full Name</h3>
              <h6>Designation</h6>
            </div>
            </div>
            <div className="chefsss2">
            <div className="Chefs3">
              <img src={chef3} alt="" />
              <h3>Full Name</h3>
              <h6>Designation</h6>
            </div>
            <div className="Chefs4">
              <img src={chef4} alt="" />
              <h3>Full Name</h3>
              <h6>Designation</h6>
            </div>
            </div>
            </div>
            </div>
    );
};

export default Chefs;
