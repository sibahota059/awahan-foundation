export const ProductsSection = ({ data }) => {
  return (
    <section className="products" style={{ padding: '40px 120px', background: '#f9fafb' }}>
      <div className="container">
        <div className="products-header" style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 600, color: '#2e8094', marginBottom: '16px' }}>Products</h2>
          <p style={{ fontSize: '14px', color: '#525560', maxWidth: '936px', margin: '0 auto' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          </p>
        </div>
        <div className="products-carousel" style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <button className="carousel-nav" style={{
            width: '50px',
            height: '50px',
            background: 'white',
            border: '1px solid #2e8094',
            borderRadius: '50%',
            cursor: 'pointer',
            fontSize: '24px',
            color: '#2e8094'
          }}>‹</button>
          <div className="products-grid" style={{ display: 'flex', gap: '24px', flex: 1 }}>
            {data.map(product => (
              <div key={product.id} className="product-card" style={{
                width: '304px',
                background: 'white',
                borderRadius: '12px',
                padding: '16px',
                boxShadow: '0 0 4px rgba(0,0,0,0.16)'
              }}>
                <div className="product-image" style={{
                  height: '184px',
                  background: 'linear-gradient(135deg, #3aa4be, #2e8094)',
                  borderRadius: '12px',
                  position: 'relative'
                }}>
                  <span className="product-share" style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    background: '#2e8094',
                    color: 'white',
                    padding: '6px 8px',
                    borderRadius: '2px',
                    fontSize: '10px'
                  }}>Share Now →</span>
                </div>
                <div className="product-content" style={{ padding: '20px 0' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: 500, color: '#1d2130', marginBottom: '10px' }}>{product.title}</h3>
                  <p style={{ fontSize: '10px', color: '#525560', lineHeight: '1.6', marginBottom: '10px' }}>{product.description}</p>
                  <div className="product-price" style={{ fontSize: '16px', fontWeight: 600, color: '#1d2130', marginBottom: '20px' }}>
                    ₹ {product.price}/-
                  </div>
                </div>
                <div className="product-actions" style={{ display: 'flex', gap: '3px' }}>
                  <button style={{
                    flex: 1,
                    padding: '12px',
                    background: '#3aa4be',
                    border: 'none',
                    borderRadius: '4px 0 0 4px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    color: 'white'
                  }}>Add to Cart</button>
                  <button style={{
                    flex: 1,
                    padding: '12px',
                    background: '#2e8094',
                    border: 'none',
                    borderRadius: '0 4px 4px 0',
                    cursor: 'pointer',
                    fontSize: '14px',
                    color: 'white'
                  }}>Buy Now</button>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-nav" style={{
            width: '50px',
            height: '50px',
            background: 'white',
            border: '1px solid #2e8094',
            borderRadius: '50%',
            cursor: 'pointer',
            fontSize: '24px',
            color: '#2e8094'
          }}>›</button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;