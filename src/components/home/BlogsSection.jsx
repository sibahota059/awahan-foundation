export const BlogsSection = ({ data }) => {
  return (
    <section className="blogs" style={{ padding: '40px 100px', background: 'white' }}>
      <div className="container">
        <div className="section-title" style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '36px' }}>
          <span style={{ width: '9px', height: '60px', background: '#3aa4be', borderRadius: '0 16px 16px 0' }}></span>
          <h2 style={{ fontSize: '50px', fontWeight: 600 }}>
            <span style={{ color: '#1d2130' }}>Our</span>{' '}
            <span style={{ color: '#2e8094' }}>Blogs</span>
          </h2>
        </div>
        
        <div className="blog-featured" style={{ display: 'flex', gap: '42px', marginBottom: '56px' }}>
          <div className="blog-featured-image" style={{
            flex: 1,
            height: '400px',
            background: 'linear-gradient(135deg, #3aa4be, #2e8094)',
            borderRadius: '8px'
          }}></div>
          <div className="blog-featured-content" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3 style={{ fontSize: '42px', fontWeight: 700, color: '#1d2130', marginBottom: '20px' }}>{data.featured.title}</h3>
            <div className="blog-meta" style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px' }}>
              <div className="blog-author" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#ddd' }}></div>
                <span style={{ color: '#525560', fontSize: '16px' }}>{data.featured.author}</span>
              </div>
              <span style={{ color: '#525560', fontSize: '16px' }}>{data.featured.date}</span>
            </div>
            <p style={{ fontSize: '20px', color: '#525560', lineHeight: '1.8', marginBottom: '36px' }}>{data.featured.description}</p>
            <a href="#more" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              color: '#2e8094',
              fontSize: '16px',
              fontWeight: 500,
              textDecoration: 'none',
              paddingBottom: '8px',
              borderBottom: '1.5px solid #2e8094',
              width: 'fit-content'
            }}>Read More →</a>
          </div>
        </div>
        
        <div className="blog-grid" style={{ background: '#c1f1f9', padding: '56px', borderRadius: '12px', position: 'relative' }}>
          <span className="related-label" style={{
            position: 'absolute',
            top: '-12px',
            left: '92px',
            background: '#2e8094',
            color: 'white',
            padding: '6px 12px',
            borderRadius: '0 4px 0 4px',
            fontSize: '16px',
            fontWeight: 500
          }}>Related Blog</span>
          <div className="blog-cards" style={{ display: 'flex', gap: '24px' }}>
            {data.related.map(blog => (
              <div key={blog.id} className="blog-card" style={{
                width: '392px',
                background: 'white',
                borderRadius: '12px',
                padding: '16px'
              }}>
                <div className="blog-card-image" style={{
                  height: '240px',
                  background: 'linear-gradient(135deg, #3aa4be, #2e8094)',
                  borderRadius: '6px',
                  marginBottom: '20px'
                }}></div>
                <div className="blog-card-content" style={{ padding: '8px' }}>
                  <span className="blog-category" style={{
                    display: 'inline-block',
                    background: 'rgba(46,128,148,0.05)',
                    color: '#2e8094',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '13px',
                    fontWeight: 500,
                    marginBottom: '16px'
                  }}>{blog.category}</span>
                  <h4 style={{ fontSize: '22px', fontWeight: 600, color: '#1d2130', marginBottom: '20px', lineHeight: '1.3' }}>
                    {blog.title}
                  </h4>
                  <div className="blog-card-meta" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className="blog-card-author" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#ddd' }}></div>
                      <span style={{ color: '#525560', fontSize: '16px' }}>{blog.author}</span>
                      <span style={{ color: '#525560', fontSize: '16px' }}>{blog.date}</span>
                    </div>
                    <div className="blog-comments" style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      background: 'rgba(46,128,148,0.05)',
                      padding: '6px 8px',
                      borderRadius: '4px'
                    }}>
                      <span>💬</span>
                      <span style={{ color: '#2e8094', fontSize: '14px', fontWeight: 500 }}>{blog.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;

