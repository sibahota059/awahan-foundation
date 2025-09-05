import React from 'react';
import '../../styles/components/PartnersSection.css';

const PartnersSection = ({ data }) => {
  if (!data || !data.partners) return null;

  return (
    <section className="partners-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{data.title}</h2>
          <p className="section-subtitle">{data.subtitle}</p>
        </div>
        <div className="partners-wrapper">
          <div className="partners-track">
            {/* Duplicate partners for continuous scroll effect */}
            {[...data.partners, ...data.partners].map((partner, index) => (
              <div key={`${partner.id}-${index}`} className="partner-item">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="partner-logo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;