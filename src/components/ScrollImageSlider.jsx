import React, { useState, useEffect, useRef } from 'react';
import './scrollSlider.css';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
const BASE_URL = 'https://res.cloudinary.com/dluqegrav/image/upload/v175131249';

const images = [
  `${BASE_URL}6/icture-1_zednn0.jpg`,
  `${BASE_URL}5/icture-2_lrxomc.jpg`,
  `${BASE_URL}6/icture-3_bz6fyj.jpg`,
  `${BASE_URL}7/icture-4_dugy0q.jpg`,
  `${BASE_URL}7/icture-5_bvacar.jpg`,
  `${BASE_URL}7/icture-6_qtqcyf.jpg`,
  `${BASE_URL}7/icture-7_kbeswj.jpg`,
  `${BASE_URL}7/icture-8_lziqca.jpg`,
  'https://res.cloudinary.com/dluqegrav/image/upload/v1751278227/FB_IMG_1746686130069_mmratz.jpg'
];

const ScrollImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile || !scrollRef.current) return;

    const scrollContainer = scrollRef.current;

    const handleScroll = () => {
      const scrollLeft = scrollContainer.scrollLeft;
      const maxScroll = scrollContainer.scrollWidth / 2;
      const scrollFraction = (scrollLeft % maxScroll) / maxScroll;

      const index = Math.floor(scrollFraction * images.length);
      setCurrentIndex(index);

      if (scrollLeft <= 0) {
        scrollContainer.scrollLeft = maxScroll;
      } else if (scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = maxScroll - scrollContainer.clientWidth;
      }
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    scrollContainer.scrollLeft = scrollContainer.scrollWidth / 2;

    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

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