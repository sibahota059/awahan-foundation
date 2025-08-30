export const InitiativesSection = ({ data }) => {
  return (
    <section className="initiatives" style={{ padding: '75px 0', background: 'white', position: 'relative' }}>
      <div style={{
        content: '',
        position: 'absolute',
        right: 0,
        top: 0,
        width: '289px',
        height: '100%',
        background: '#2e8094'
      }}></div>
      <div className="initiatives-container" style={{ maxWidth: '1290px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div className="initiatives-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
          <div className="initiatives-title">
            <h2 style={{ fontSize: '48px', fontWeight: 600, color: '#1d2130', marginBottom: '16px' }}>Our Innovative Initiatives</h2>
            <p style={{ fontSize: '18px', color: '#525560', maxWidth: '800px', lineHeight: '1.6' }}>
              At Aahwahan Foundation, we believe in driving meaningful change through innovative and sustainable solutions.
            </p>
          </div>
          <div className="initiatives-nav" style={{ display: 'flex', gap: '20px' }}>
            <button style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'white',
              border: '2px solid #2e8094',
              color: '#2e8094',
              cursor: 'pointer'
            }}>‹</button>
            <button style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'white',
              border: '2px solid #2e8094',
              color: '#2e8094',
              cursor: 'pointer'
            }}>›</button>
          </div>
        </div>
        <div className="initiatives-cards" style={{ display: 'flex', gap: '20px' }}>
          {data.map(item => (
            <div key={item.id} className="initiative-card" style={{ width: '315px' }}>
              <div className="initiative-image" style={{
                height: '290px',
                background: 'linear-gradient(135deg, #3aa4be, #2e8094)',
                position: 'relative'
              }}>
                <button style={{
                  position: 'absolute',
                  bottom: '20px',
                  right: '20px',
                  width: '40px',
                  height: '40px',
                  background: '#2e8094',
                  borderRadius: '50%',
                  border: 'none',
                  color: 'white',
                  cursor: 'pointer'
                }}>→</button>
              </div>
              <div className="initiative-content" style={{
                background: '#f1f0ee',
                padding: '24px 16px',
                borderRadius: '0 0 20px 20px'
              }}>
                <h3 style={{ fontSize: '22px', fontWeight: 600, color: '#1d2130' }}>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InitiativesSection;

