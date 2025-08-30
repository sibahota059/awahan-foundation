// ============================================
// src/components/home/HealthSection.jsx
// ============================================
import React from 'react';

const HealthSection = ({ data }) => {
  return (
    <section className="health-section" style={{
      padding: '80px 120px',
      background: 'linear-gradient(rgba(22,133,177,0.6), rgba(22,133,177,0.6)), #2e8094',
      display: 'flex',
      alignItems: 'center',
      gap: '64px'
    }}>
      <div className="health-content" style={{ flex: 1, color: 'white' }}>
        <div className="health-title" style={{ marginBottom: '36px' }}>
          <h2 style={{ fontSize: '50px', fontWeight: 600, marginBottom: '4px' }}>{data.title}</h2>
          <span style={{ display: 'block', width: '95px', height: '4px', background: 'white' }}></span>
        </div>
        <p style={{ fontSize: '20px', lineHeight: '1.8', marginBottom: '36px' }}>{data.description}</p>
        <div className="health-actions" style={{ display: 'flex', gap: '36px' }}>
          <button style={{ padding: '16px 32px', background: '#2e8094', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Donate Now
          </button>
          <button style={{ padding: '16px 32px', background: 'white', color: '#1d2130', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Read More
          </button>
        </div>
      </div>
      <div className="health-image" style={{ width: '500px', height: '400px', background: 'linear-gradient(135deg, #3aa4be, #2e8094)', borderRadius: '8px' }}></div>
    </section>
  );
};

export default HealthSection;
