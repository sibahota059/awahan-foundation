import React from 'react';

const DonateCauseSection = ({ data }) => {
  const donateData = data || {
    title: "Donate for cause",
    description: "Your contribution has the power to transform lives. At Aahwahan Foundation, we are committed to uplifting underprivileged communities by providing education, healthcare, skill development, and livelihood opportunities. Every donation, big or small, helps us create a more inclusive and sustainable future.",
    image: "/images/donate-cause.jpg",
    readMoreLink: "#"
  };

  return (
    <section className="donate-cause-section" style={{ 
      background: 'white',
      padding: '64px 0'
    }}>
      <div className="container" style={{ 
        maxWidth: '1240px', 
        margin: '0 auto', 
        padding: '0 32px' 
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '48px',
          flexWrap: 'wrap'
        }}>
          {/* Left side - Content */}
          <div style={{ 
            flex: '1',
            minWidth: '300px',
            paddingRight: '32px'
          }}>
            <h2 style={{
              fontSize: '36px',
              fontWeight: '700',
              color: '#1d2130',
              marginBottom: '24px',
              paddingLeft: '16px',
              borderLeft: '4px solid #26a69a',
              lineHeight: '1.2'
            }}>
              {donateData.title}
            </h2>
            <p style={{
              color: '#525560',
              marginBottom: '24px',
              lineHeight: '1.8',
              fontSize: '16px'
            }}>
              {donateData.description}
            </p>
            <a 
              href={donateData.readMoreLink}
              style={{
                color: '#26a69a',
                fontWeight: '600',
                fontSize: '16px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
              onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
            >
              Read More →
            </a>
          </div>

          {/* Right side - Image */}
          <div style={{ 
            flex: '1',
            minWidth: '300px',
            marginTop: '32px'
          }}>
            <img 
              src={donateData.image || '/images/donate-placeholder.jpg'} 
              alt="Women packing clothes into a donation box"
              style={{
                width: '100%',
                borderRadius: '8px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateCauseSection;