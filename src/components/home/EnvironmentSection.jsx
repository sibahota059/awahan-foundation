export const EnvironmentSection = ({ data }) => {
  return (
    <section className="environment" style={{ padding: '80px 100px', background: '#f9fafb' }}>
      <div className="container">
        <div className="environment-header" style={{ marginBottom: '36px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '10px' }}>
            <span style={{ width: '10px', height: '60px', background: '#3aa4be', borderRadius: '5px' }}></span>
            <h2 style={{ fontSize: '50px', fontWeight: 600, color: '#1d2130' }}>Environment</h2>
          </div>
          <p style={{ fontSize: '16px', color: '#525560', maxWidth: '1200px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          </p>
        </div>
        <div className="environment-grid" style={{ display: 'flex', gap: '24px' }}>
          {data.map(item => (
            <div key={item.id} className="env-card" style={{
              width: '392px',
              background: 'white',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
              border: '1px solid #e8e8ea'
            }}>
              <div className="env-card-image" style={{
                height: '240px',
                background: 'linear-gradient(135deg, #3aa4be, #2e8094)'
              }}></div>
              <div className="env-card-content" style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '24px', fontWeight: 600, color: '#1d2130', marginBottom: '16px' }}>{item.title}</h3>
                <p style={{ fontSize: '16px', color: '#525560', lineHeight: '1.6', marginBottom: '20px', height: '80px', overflow: 'hidden' }}>
                  {item.description}
                </p>
                <button style={{
                  color: '#2e8094',
                  background: 'none',
                  border: 'none',
                  fontSize: '14px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  paddingBottom: '2px',
                  borderBottom: '1px solid #2e8094'
                }}>Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnvironmentSection;
