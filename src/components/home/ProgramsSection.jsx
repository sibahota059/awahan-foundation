// src/components/home/ProgramsSection.jsx
import React, { useState } from 'react';
import '../../styles/components/ProgramsSection.css';

const ProgramsSection = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  return (
    <section className="programs-section">
      <div className="container">
        <div className="programs-carousel">
          <button className="carousel-nav prev" onClick={prevSlide}>
            ‹
          </button>
          
          <div className="program-cards">
            {data.map((program, index) => (
              <div 
                key={program.id} 
                className={`program-card ${program.featured ? 'main' : 'side'}`}
              >
                {program.featured ? (
                  <div className="program-content main-content">
                    <h3>{program.title}</h3>
                    <p>{program.description}</p>
                    <button className="learn-more-btn">Learn More</button>
                  </div>
                ) : (
                  <div 
                    className="program-bg" 
                    style={{ backgroundImage: `url(${program.image})` }}
                  >
                    <div className="program-content">
                      <h3>{program.title}</h3>
                      <p>{program.description}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <button className="carousel-nav next" onClick={nextSlide}>
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;