import React from 'react';

const EducationSection = ({ data }) => {
  const educationData = data || {
    title: "Education",
    description: "As Chanakya rightly said \"Education is the best friend. An educated person is respected everywhere. Education always beats the beauty and the youth.\" Education is so rudimentary that it itself becomes an identity of an individual. It is always a much talked topic and people have debated over years of how to clinch to almost perfection; nevertheless, we outstretch a generation where there are diverse forms of education. Education gives a vision of hope for a better world.",
    image: "/images/education.jpg",
    features: [
      "Adopting a government school and scaling up its infrastructure",
      "Education On Wheels",
      "Model School",
      "Promoting Extra Ordinary Talents",
      "Girl Child Education",
      "Laptop Bank",
      "Smart Class",
      "Happiness Kit"
    ]
  };

  return (
    <section className="education-section" style={{ 
      background: '#e3f2fd',
      padding: '80px 0'
    }}>
      <div className="container" style={{ 
        maxWidth: '1240px', 
        margin: '0 auto', 
        padding: '0 32px' 
      }}>
        <div style={{
          background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
          padding: '32px',
          borderRadius: '8px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.08)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '48px',
            flexWrap: 'wrap'
          }}>
            {/* Left side - Image and buttons */}
            <div style={{ 
              flex: '1',
              minWidth: '300px'
            }}>
              <img 
                src={educationData.image || '/images/education-placeholder.jpg'} 
                alt="Education program children"
                style={{
                  width: '100%',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                }}
              />
              <div style={{ 
                marginTop: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}>
                <button style={{
                  width: '100%',
                  background: 'white',
                  color: '#333',
                  fontWeight: '600',
                  padding: '12px 24px',
                  borderRadius: '50px',
                  border: 'none',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  cursor: 'pointer',
                  fontSize: '16px',
                  transition: 'all 0.3s'
                }}>
                  Read More
                </button>
                <button style={{
                  width: '100%',
                  background: '#26a69a',
                  color: 'white',
                  fontWeight: '600',
                  padding: '12px 24px',
                  borderRadius: '50px',
                  border: 'none',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  cursor: 'pointer',
                  fontSize: '16px',
                  transition: 'all 0.3s'
                }}>
                  Donate Now
                </button>
              </div>
            </div>

            {/* Right side - Content */}
            <div style={{ 
              flex: '1',
              minWidth: '300px'
            }}>
              <h2 style={{
                fontSize: '48px',
                fontWeight: '700',
                color: '#1d2130',
                marginBottom: '24px'
              }}>
                {educationData.title}
              </h2>
              <p style={{
                color: '#525560',
                marginBottom: '32px',
                lineHeight: '1.8',
                fontSize: '16px'
              }}>
                {educationData.description}
              </p>
              
              <div style={{ marginBottom: '32px' }}>
                {educationData.features.map((feature, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '12px',
                    paddingBottom: '12px',
                    borderBottom: '1px solid #e0e0e0'
                  }}>
                    <span style={{
                      color: '#26a69a',
                      marginRight: '12px',
                      fontSize: '20px'
                    }}>✓</span>
                    <span style={{
                      color: '#4a5568',
                      fontSize: '16px',
                      flex: 1
                    }}>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Navigation arrows */}
              <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                gap: '8px'
              }}>
                <button style={{
                  background: 'white',
                  padding: '8px',
                  borderRadius: '50%',
                  border: 'none',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  cursor: 'pointer',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  ‹
                </button>
                <button style={{
                  background: 'white',
                  padding: '8px',
                  borderRadius: '50%',
                  border: 'none',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  cursor: 'pointer',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;