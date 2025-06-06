import React, { useState, useEffect, useRef } from 'react';
import './scrollSlider.css';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

import img1 from '../img/icture-1.jpg';
import img2 from '../img/icture-2.png';
import img3 from '../img/icture-3.jpg';
import img4 from '../img/icture-4.jpg';
import img5 from '../img/icture-5.jpg';

const images = [img1, img2, img3, img4, img5];

const ScrollImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef(null);

  // Responsive მოწყობილობის შემოწმება
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // მობილურზე - უსასრულო scroll
  useEffect(() => {
    if (!isMobile || !scrollRef.current) return;

    const scrollContainer = scrollRef.current;

    const handleScroll = () => {
      const scrollLeft = scrollContainer.scrollLeft;
      const maxScroll = scrollContainer.scrollWidth / 2;
      const scrollFraction = (scrollLeft % maxScroll) / maxScroll;

      const index = Math.floor(scrollFraction * images.length);
      setCurrentIndex(index);

      // ავტომატური გადახტომა დასაწყისში/ბოლოში
      if (scrollLeft <= 0) {
        scrollContainer.scrollLeft = maxScroll;
      } else if (scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = maxScroll - scrollContainer.clientWidth;
      }
    };

    scrollContainer.addEventListener('scroll', handleScroll);

    // დასაწყისშივე შუაში გადაახტეს
    scrollContainer.scrollLeft = scrollContainer.scrollWidth / 2;

    return () => scrollContainer.removeEventListener('scroll', handleScroll);
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
      {isMobile ? (
        <div className="scroll-container" ref={scrollRef}>
          {[...images, ...images].map((img, idx) => (
            <img key={idx} src={img} alt={`Slide ${idx % images.length}`} className="scroll-image" />
          ))}
        </div>
      ) : (
        <div className="slider-container">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className="slider-image"
          />
          <div className="slider-controls">
            <SlArrowLeft className='Slide-style' onClick={prevSlide} />
            <SlArrowRight className='Slide-style' onClick={nextSlide} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ScrollImageSlider;