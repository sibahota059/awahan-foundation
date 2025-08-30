import React, { useState, useEffect } from 'react';
import '../../styles/components/HeroSection.css';

const HeroSection = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % data.slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [data.slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % data.slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + data.slides.length) % data.slides.length);
  };

  return (
    <section className="hero">
      <div className="hero-slider">
        <div 
          className="slides-container"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {data.slides.map((slide, index) => (
            <div 
              key={slide.id} 
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              
            </div>
          ))}
        </div>
        
        <button className="slider-nav prev" onClick={prevSlide}>
          ‹
        </button>
        <button className="slider-nav next" onClick={nextSlide}>
          ›
        </button>
        
        <div className="slider-dots">
          {data.slides.map((_, index) => (
            <button 
              key={index}
              className={`dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      <div className="hero-actions">
        <div className="action-card donate">
          <h3>Donate Now</h3>
        </div>
        <div className="action-card join">
          <h3>Join Us</h3>
        </div>
        <div className="action-card involved">
          <h3>Get Involved</h3>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;