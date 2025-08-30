import React from 'react';

export const AchievementsSection = ({ data }) => {
  return (
    <section className="achievements section" style={{ padding: '50px 100px', background: '#fefeff' }}>
      <div className="container">
        <div className="section-title" style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '36px' }}>
          <span style={{ width: '9px', height: '60px', background: '#3aa4be', borderRadius: '0 16px 16px 0' }}></span>
          <h2 style={{ fontSize: '50px', fontWeight: 600 }}>
            <span style={{ color: '#1d2130' }}>Our</span>{' '}
            <span style={{ color: '#2e8094' }}>Achievements</span>
          </h2>
        </div>
        <div className="achievements-grid" style={{ display: 'flex', gap: '20px' }}>
          {data.map(item => (
            <div key={item.id} className="achievement-card" style={{
              width: '360px',
              height: '400px',
              position: 'relative',
              overflow: 'hidden',
              background: `linear-gradient(rgba(11,7,6,0.8), rgba(11,7,6,0.8)), url(${item.image || '#'})`,
              backgroundSize: 'cover',
              cursor: 'pointer'
            }}>
              <div className="achievement-overlay" style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(11,7,6,0.8)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '40px',
                color: 'white',
                textAlign: 'center'
              }}>
                <h3 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '36px', lineHeight: '1.5' }}>{item.title}</h3>
                <p style={{ fontSize: '14px', marginBottom: '36px', lineHeight: '1.6' }}>{item.description}</p>
                <button style={{
                  padding: '16px 32px',
                  background: '#2e8094',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: 500
                }}>Read more</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;