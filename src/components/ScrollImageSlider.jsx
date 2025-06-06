import React, { useState, useEffect } from 'react';
import './scrollSlider.css';
import { SlArrowLeft,SlArrowRight  } from "react-icons/sl";

import img1 from '../img/icture-1.jpg'
import img2 from '../img/icture-2.png'
import img3 from '../img/icture-3.jpg'
import img4 from '../img/icture-4.jpg'
import img5 from '../img/icture-5.jpg'



const images = [img1, img2, img3, img4, img5 ];

const ScrollImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Responsive მოწყობილობის შემოწმება
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // მობილურზე - scroll-სვლაზე რეაგირება
  useEffect(() => {
    if (!isMobile) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScroll;
      const index = Math.min(
        images.length - 1,
        Math.floor(scrollFraction * images.length)
      );
      setCurrentIndex(index);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  // დესკტოპისთვის ღილაკები
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
     <div className="slider-wrapper">
    <div className="slider-container">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="slider-image"
      />
      {!isMobile && (
        <div className="slider-controls">
           <SlArrowLeft className='Slide-style' onClick={prevSlide} /> 
          <SlArrowRight  className='Slide-style' onClick={nextSlide}/>
        </div>
      )}
    </div>
  </div>
  );
};

export default ScrollImageSlider;
