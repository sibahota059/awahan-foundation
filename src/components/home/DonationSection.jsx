import React from 'react';
import '../../styles/components/DonationSection.css';

const DonationSection = ({ data }) => {
  const formatCurrency = (amount) => {
    return `₹${amount.toLocaleString('en-IN')}`;
  };

  return (
    <section className="donation-section">
      <div className="container">
        <div className="donation-carousel">
          <button className="carousel-nav prev">‹</button>
          
          <div className="donation-cards-wrapper">
            {data.map((item) => (
              <div key={item.id} className="donation-card">
                <div 
                  className="donation-image"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <span className="category-tag">{item.category}</span>
                </div>
                
                <div className="donation-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  
                  <div className="progress-wrapper">
                    <div className="progress-info">
                      <span>{item.progress}%</span>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                    <div className="donation-stats">
                      <span className="raised">
                        {formatCurrency(item.raised)} Raised
                      </span>
                      <span className="goal">
                        {formatCurrency(item.goal)} Goal
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button className="carousel-nav next">›</button>
        </div>
        
        <div className="carousel-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;