export const CommunitySection = ({ data }) => {
  return (
    <>
      <section className="community" style={{ padding: '60px 100px', background: '#f9fafb' }}>
        <div className="container">
          <div className="community-header" style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '36px' }}>
            <span style={{ width: '10px', height: '60px', background: '#3aa4be', borderRadius: '0 8px 8px 0' }}></span>
            <h2 style={{ fontSize: '40px', fontWeight: 600, color: '#1d2130' }}>Community Development</h2>
          </div>
          <div className="community-content" style={{ display: 'flex', gap: '48px', alignItems: 'center' }}>
            <div className="community-text" style={{ flex: 1 }}>
              <p style={{ fontSize: '20px', color: '#525560', lineHeight: '1.8', marginBottom: '24px' }}>{data.description}</p>
              <p style={{ fontSize: '20px', color: '#525560', lineHeight: '1.8', marginBottom: '24px' }}>{data.additionalDescription}</p>
              <a href="#more" className="btn-link" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                color: '#2e8094',
                fontSize: '16px',
                fontWeight: 500,
                textDecoration: 'none',
                paddingBottom: '8px',
                borderBottom: '1.5px solid #2e8094'
              }}>Read More →</a>
            </div>
            <div className="community-image" style={{
              width: '700px',
              height: '700px',
              background: 'linear-gradient(135deg, #3aa4be, #2e8094)',
              borderRadius: '50%'
            }}></div>
          </div>
        </div>
      </section>
      
      <section className="community-features" style={{ padding: '75px 0', background: '#f9fafb', position: 'relative' }}>
        <div style={{
          content: '',
          position: 'absolute',
          right: 0,
          top: 0,
          width: '289px',
          height: '100%',
          background: '#2e8094'
        }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <p className="features-quote" style={{
            fontSize: '22px',
            fontWeight: 500,
            color: '#1d2130',
            maxWidth: '1000px',
            marginBottom: '60px',
            lineHeight: '1.6'
          }}>{data.quote}</p>
          <div className="features-cards" style={{ display: 'flex', gap: '30px' }}>
            {data.features.map((feature, index) => (
              <div key={index} className="feature-card" style={{
                width: '410px',
                background: 'white',
                borderRadius: '20px',
                padding: '50px 40px',
                textAlign: 'center',
                border: index === 2 ? '1px solid #2e8094' : 'none'
              }}>
                <div className="feature-icon" style={{
                  width: '100px',
                  height: '100px',
                  background: '#2e8094',
                  borderRadius: '50%',
                  margin: '0 auto 40px'
                }}></div>
                <h3 style={{ fontSize: '22px', fontWeight: 600, color: '#1d2130', marginBottom: '20px', lineHeight: '1.3' }}>
                  {feature.title}
                </h3>
                <p style={{ fontSize: '16px', color: '#525560', lineHeight: '1.4' }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CommunitySection;