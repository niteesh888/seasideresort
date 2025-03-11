import React from "react";
import { motion } from "framer-motion";
import "./Gallery.css";

const images = [
  "https://seasidebeachresorthomestay.com/img/os1.jpg",
  "https://seasidebeachresorthomestay.com/img/os5.jpg",
  "https://seasidebeachresorthomestay.com/img/os3.jpeg",
  "https://seasidebeachresorthomestay.com/img/os1.jpg",
  "https://seasidebeachresorthomestay.com/img/food1.jpg",
  "https://seasidebeachresorthomestay.com/img/food3.jpg",
  "https://seasidebeachresorthomestay.com/img/room2.jpeg",
  "https://seasidebeachresorthomestay.com/img/room4.jpg",
  "https://seasidebeachresorthomestay.com/img/os7.jpg",
  "https://seasidebeachresorthomestay.com/img/washroom1.jpg",
  "https://seasidebeachresorthomestay.com/img/os9.jpg",
  "https://seasidebeachresorthomestay.com/img/room5.jpg",
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h6>-----Our Gallery-----</h6>
      <h2>Gallery</h2>
      <div className="gallery">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="gallery-item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img src={src} alt="gallery" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
