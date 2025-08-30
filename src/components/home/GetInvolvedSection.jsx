export const GetInvolvedSection = ({ data }) => {
  return (
    <section className="get-involved" style={{ padding: '40px 100px', background: '#f9fafb' }}>
      <div className="container">
        <div className="section-title" style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '36px' }}>
          <span style={{ width: '9px', height: '60px', background: '#3aa4be', borderRadius: '0 16px 16px 0' }}></span>
          <h2 style={{ fontSize: '50px', fontWeight: 400 }}>
            <span style={{ fontWeight: 600, color: '#1d2130' }}>Get</span>{' '}
            <span style={{ fontWeight: 600, color: '#2e8094' }}>Involved</span>
          </h2>
        </div>
        <div className="involved-cards" style={{ display: 'flex', gap: '20px' }}>
          {data.map(item => (
            <div key={item.id} className="involved-card" style={{
              width: '400px',
              background: 'white',
              borderRadius: '12px',
              padding: '16px'
            }}>
              <div className="involved-image" style={{
                height: '248px',
                background: 'linear-gradient(135deg, #3aa4be, #2e8094)',
                borderRadius: '12px',
                position: 'relative'
              }}>
                <span className="share-tag" style={{
                  position: 'absolute',
                  bottom: '10px',
                  right: '10px',
                  background: '#3aa4be',
                  color: 'white',
                  padding: '6px 8px',
                  borderRadius: '2px',
                  fontSize: '10px'
                }}>Share Now →</span>
              </div>
              <div className="involved-content" style={{ padding: '20px 0' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#1d2130', marginBottom: '6px' }}>{item.title}</h3>
                <p style={{ fontSize: '14px', color: '#525560', marginBottom: '20px' }}>
                  {item.description}... <a href="#more" style={{ color: '#2e8094' }}>Read More</a>
                </p>
              </div>
              <div className="involved-actions" style={{ display: 'flex', gap: '6px' }}>
                <button style={{
                  flex: 1,
                  padding: '16px',
                  background: '#3aa4be',
                  border: 'none',
                  borderRadius: '4px 0 0 4px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: 'white'
                }}>Know More</button>
                <button style={{
                  flex: 1,
                  padding: '16px',
                  background: '#2e8094',
                  border: 'none',
                  borderRadius: '0 4px 4px 0',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: 'white'
                }}>Join Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;
