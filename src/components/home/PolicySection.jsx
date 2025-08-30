export const PolicySection = ({ data }) => {
  return (
    <section className="policy" style={{ padding: '40px 100px', background: '#f9fafb' }}>
      <div className="container">
        <div className="policy-content" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 80px'
        }}>
          <h2 className="policy-title" style={{
            fontSize: '36px',
            fontWeight: 600,
            color: '#1d2730',
            lineHeight: '1.3',
            maxWidth: '600px'
          }}>{data.title}</h2>
          <a href={data.link} className="btn btn-primary" style={{
            padding: '16px 32px',
            background: '#2e8094',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            fontWeight: 500,
            display: 'inline-block'
          }}>
            {data.buttonText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default PolicySection;