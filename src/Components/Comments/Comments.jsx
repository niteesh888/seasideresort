import React, { useEffect, useState } from "react";
import './Comments.css';

const commentsData = [
  {
    text: "We had been here twice in 02 years. The rooms, service and ambience is very nice. The owners and staff are very kind and helpful. Very safe and best option for budget travelers, looking for a peaceful vacation.",
    image: "https://seasidebeachresorthomestay.com/img/Shalinee%20Shekhar.png",
    name: "Shalinee Shekar"
  },
  
  {
    text: "One of the best places to enjoy your holiday at Gokarna. Very nice resort, located just near the sea so you will get a beautiful view from your room. On top of all the best thing about this place is the owner Mr. Satish.",
    image: "https://seasidebeachresorthomestay.com/img/Pankaj%20Bagul.png",
    name: "Pankaj Bagul"
  },
  {
    text: "Rooms are smaller in size but very clean. However, no table or cupboard is given to put the luggage. You need to put everything on ground. The owner is very rude but the service staffs are very friendly.",
    image: "https://seasidebeachresorthomestay.com/img/Nitin%20Bhartia.png",
    name: "Nitin Bhartia"
  }
  
  
    

];

const Comments = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % commentsData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about10">
      <div className="text">
      <h6>─── Testimonial ───</h6>
      <h4>Our Clients Says!!!</h4>
      </div>
      
      <div className="comment-slider">
          {commentsData.map((comment, index) => (
        <div className="special" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            <div className="comment-slide" key={index}>
              <div className="media">
              <img src="https://cdn.prod.website-files.com/621c2ce3508fa63a57104440/62bb1557720a3d4b2cf06d24_quote.svg" alt="quote" />
              <h5>{comment.text}</h5>
              <div className="profile">
                <img src={comment.image} alt={comment.name} />
                <h4>{comment.name}</h4>
              </div>
              </div>
            </div>
        </div>
          ))}
        </div>
      
      </div>
      
    
    
  );
}
export default Comments;





// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./Comments.css";

// const Comments = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: false,
//   };

//   return (
//     <div className="about3">
//       <h6>----- Testimonial -----</h6>
//       <h4>Our Clients Say!!!</h4>
//       <Slider {...settings}>
//         <div className="comment">
//           <img
            
//             alt=""
//           />
//           <h5>
//             We had been here twice in 02 years. The rooms, service and ambience
//             is very nice. The owners and staff are very kind and helpful. Very
//             safe and best option for budget travelers, looking for a peaceful
//             vacation.
//           </h5>
//           <div className="profile">
            
//           </div>
//         </div>

//         <div className="comment">
//           <img
           
//           />
//           <h5>
//             One of the best places to enjoy your holiday at Gokarna. Very nice
//             resort, located just near the sea so you will get a beautiful view
//             from your room. On top of all the best thing about this place is
//             the owner Mr. Satish.
//           </h5>
//           <div className="avatar">
           
//           </div>
//         </div>

//         <div className="comment">
//           <img
           
//           />
//           <h5>
//             Rooms are smaller in size but very clean. However, no table or
//             cupboard is given to put the luggage. You need to put everything on
//             ground. The owner is very rude but the service staffs are very
//             friendly. You just need to call them.
//           </h5>
//           <div className="avatar2">
           
//           </div>
          
//         </div>
//       </Slider>
//     </div>
//   );
// };

// export default Comments;