import React, { useState } from 'react';
import '../../styles/components/TestimonialsSection.css';

const TestimonialsSection = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!data || !data.testimonials) return null;

  const handlePrev = () => {
    setActiveIndex((prev) => 
      prev === 0 ? data.testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) => 
      prev === data.testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{data.title}</h2>
          <p className="section-subtitle">{data.subtitle}</p>
        </div>
        <div className="testimonials-carousel">
          <button className="carousel-btn prev" onClick={handlePrev}>
            <i className="icon-chevron-left"></i>
          </button>
          
          <div className="testimonial-content">
            {data.testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className={`testimonial-card ${index === activeIndex ? 'active' : ''}`}
              >
                <div className="quote-icon">"</div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="author-image" 
                  />
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-designation">{testimonial.designation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button className="carousel-btn next" onClick={handleNext}>
            <i className="icon-chevron-right"></i>
          </button>
        </div>
        
        <div className="testimonials-dots">
          {data.testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;