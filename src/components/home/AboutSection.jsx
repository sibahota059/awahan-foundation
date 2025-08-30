import React from 'react';
import '../../styles/components/AboutSection.css';

const AboutSection = ({ data }) => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <img 
              src={data.image || '/images/about-placeholder.jpg'} 
              alt="About Aahwahan Foundation" 
            />
          </div>
          <div className="about-text">
            <div className="section-header">
              <span className="title-bar"></span>
              <h2>{data.title}</h2>
            </div>
            <p>{data.description}</p>
            <a href={data.readMoreLink || '#'} className="btn-link">
              Read More <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;