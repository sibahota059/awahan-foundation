import React, { useState } from 'react';
import '../../styles/components/NewsletterSection.css';

const NewsletterSection = ({ data }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  if (!data) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setStatus('error');
      return;
    }

    try {
      // TODO: Implement newsletter subscription API call
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus(''), 3000);
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-content">
          <div className="newsletter-info">
            <h2 className="newsletter-title">{data.title}</h2>
            <p className="newsletter-description">{data.description}</p>
          </div>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                placeholder={data.placeholder || "Enter your email address"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-button">
                {data.buttonText || "Subscribe"}
              </button>
            </div>
            {status === 'success' && (
              <p className="newsletter-message success">
                {data.successMessage || "Successfully subscribed!"}
              </p>
            )}
            {status === 'error' && (
              <p className="newsletter-message error">
                {data.errorMessage || "Please enter a valid email address."}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;