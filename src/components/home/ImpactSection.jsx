import React from 'react';
import '../../styles/components/ImpactSection.css';

const ImpactSection = ({ data }) => {
  if (!data || !data.impacts) return null;

  return (
    <section className="impact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{data.title}</h2>
          <p className="section-subtitle">{data.subtitle}</p>
        </div>
        <div className="impact-grid">
          {data.impacts.map((impact) => (
            <div key={impact.id} className="impact-card">
              <div className="impact-icon">
                <i className={`icon-${impact.icon}`}></i>
              </div>
              <div className="impact-number">{impact.number}</div>
              <div className="impact-label">{impact.label}</div>
              <p className="impact-description">{impact.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;