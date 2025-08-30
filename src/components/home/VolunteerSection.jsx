import React, { useState } from 'react';

const VolunteerSection = ({ data }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Volunteer registration:', formData);
  };

  return (
    <section className="volunteer" style={{ padding: '40px 100px', background: 'white' }}>
      <div className="container">
        <div className="volunteer-header" style={{ textAlign: 'center', padding: '40px' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 600, color: '#1d2130', lineHeight: '1.2' }}>{data.title}</h2>
        </div>
        <div className="volunteer-content" style={{ position: 'relative', height: '526px', marginBottom: '40px' }}>
          <div className="volunteer-image" style={{
            width: '100%',
            height: '511px',
            background: 'linear-gradient(135deg, #3aa4be, #2e8094)',
            borderRadius: '8px'
          }}></div>
        </div>
        <div className="volunteer-form" style={{
          position: 'relative',
          marginTop: '-100px',
          width: '90%',
          maxWidth: '800px',
          margin: '-100px auto 0',
          background: '#3aa4be',
          borderRadius: '12px',
          padding: '40px 80px'
        }}>
          <h3 style={{ fontSize: '32px', fontWeight: 600, color: 'white', textAlign: 'center', marginBottom: '24px' }}>
            {data.formTitle}
          </h3>
          <form onSubmit={handleSubmit} className="form-fields" style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <input 
              type="text" 
              placeholder="Full Name"
              value={formData.fullName}
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              required
              style={{
                flex: 1,
                padding: '12px 24px',
                border: '1px solid white',
                background: 'white',
                borderRadius: '2px',
                fontSize: '14px'
              }}
            />
            <input 
              type="email" 
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
              style={{
                flex: 1,
                padding: '12px 24px',
                border: '1px solid white',
                background: 'white',
                borderRadius: '2px',
                fontSize: '14px'
              }}
            />
            <button type="submit" style={{
              padding: '12px 24px',
              background: '#2e8094',
              color: 'white',
              border: 'none',
              borderRadius: '2px',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer'
            }}>Register</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;