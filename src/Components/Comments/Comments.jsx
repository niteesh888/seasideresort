import React from "react";
import './Comments.css';
import profile from './profile1.jpg'
import person from './person.jpg'
import  girl from './girl.jpg'


const Comments = () => {
    return (
      <div className="about3">
      <h6>----- Testimonial-----</h6>
      <h4>Our Clients Says!!!</h4>
      
        <div className="comment">
              <div className="comment1">
              <img src="https://cdn.prod.website-files.com/621c2ce3508fa63a57104440/62bb1557720a3d4b2cf06d24_quote.svg" alt="" />
                <h5>We had been here twice in 02 years. The rooms, service and ambience is very nice. The owners and staff are very kind and helpful. Very safe and best option for budget travelers, looking for a peaceful vacation.</h5>
                <div className="profile">
                <img src={profile} alt="" />
                </div>
              </div>
              <div className="comment2">
              <img src=" https://cdn.prod.website-files.com/621c2ce3508fa63a57104440/62bb1557720a3d4b2cf06d24_quote.svg" alt="" />
              <h5>One of the best places to enjoy your holiday at Gokarna. Very nice resort, located just near the sea so you will get a beautiful view from your room. On top of all the best thing about this place is the owner Mr. Satish.</h5>
              <div className="avatar">
              <img src={person} alt="" />
              </div>
              </div>
              <div className="comment3">
              <img src="https://cdn.prod.website-files.com/621c2ce3508fa63a57104440/62bb1557720a3d4b2cf06d24_quote.svg" alt="" />
              <h5>Rooms are smaller in size but very clean. However, no table or cupboard is given to put the luggage. You need to put everything on ground. The owner is very rude but the service staffs are very friendly. </h5>
              <div className="avatar2">
              <img src={girl} alt="" />
              </div>
              </div>
              </div>
              </div>

    );
};

export default Comments;