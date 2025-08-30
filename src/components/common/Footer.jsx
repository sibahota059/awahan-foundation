import React from 'react';
import '../../styles/components/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section footer-about">
            <h4>About Aahwahan</h4>
            <p>
              Aahwahan - is an NGO that is involved<br/>
              in promoting the welfare of the<br/>
              economically backward sections of the<br/>
              society by generating employment<br/>
              across various sectors.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" aria-label="Facebook">
                <i className="fab fa-facebook">f</i>
              </a>
              <a href="https://twitter.com" aria-label="Twitter">
                <i className="fab fa-twitter">t</i>
              </a>
              <a href="https://instagram.com" aria-label="Instagram">
                <i className="fab fa-instagram">i</i>
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn">
                <i className="fab fa-linkedin">in</i>
              </a>
              <a href="https://youtube.com" aria-label="YouTube">
                <i className="fab fa-youtube">y</i>
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About us</a></li>
              <li><a href="/media">Media Center</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/events">Events</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/volunteers">Volunteers</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>What We Do</h4>
            <ul>
              <li><a href="/programs/education">Education</a></li>
              <li><a href="/programs/health">Health</a></li>
              <li><a href="/programs/women">Women Empowerment</a></li>
              <li><a href="/programs/agriculture">Integrated Agriculture</a></li>
              <li><a href="/programs/beach-cleaning">Beach Cleaning</a></li>
              <li><a href="/programs/plantation">Plantation</a></li>
              <li><a href="/programs/blanket-donation">Blanket Donation</a></li>
            </ul>
          </div>
          
          <div className="footer-section footer-contact">
            <div className="contact-block">
              <h4>Address</h4>
              <p>
                Building No-40. 4th Floor,<br/>
                9th Block Jayanagar,<br/>
                Bangalore-69
              </p>
            </div>
            <div className="contact-block">
              <h4>Contact Us</h4>
              <p>
                Phone : 9113018004 / 7795065657<br/>
                Email : info@aahwahan.com
              </p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>2025 All Rights Reserved © Aahwahan</p>
          <div className="footer-links">
            <a href="/terms">Terms & Conditions</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/contact">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;