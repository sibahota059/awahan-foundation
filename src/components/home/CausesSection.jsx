import React from 'react';
import '../../styles/components/CausesSection.css';

const CausesSection = ({ data }) => {
  if (!data || !data.causes) return null;

  return (
    <section className="causes-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{data.title}</h2>
          <p className="section-subtitle">{data.subtitle}</p>
        </div>
        <div className="causes-grid">
          {data.causes.map((cause) => (
            <div key={cause.id} className="cause-card">
              <div className="cause-icon">
                <i className={`icon-${cause.icon}`}></i>
              </div>
              <h3 className="cause-title">{cause.title}</h3>
              <p className="cause-description">{cause.description}</p>
              <a href={cause.link} className="cause-link">Learn More →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CausesSection;