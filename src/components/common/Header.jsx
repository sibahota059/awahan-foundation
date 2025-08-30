import React, { useState } from 'react';
import '../../styles/components/Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="header">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-content">
          <div className="top-links">
            <a href="/career">CAREER</a>
            <a href="/volunteer">VOLUNTEER REGISTRATION</a>
          </div>
          <div className="top-actions">
            <button className="btn-header-action">DONATION</button>
            <button className="btn-header-action">LOGIN</button>
            <button className="btn-header-action">REGISTER HERE</button>
            <button className="btn-search">🔍</button>
            <button className="btn-menu">☰</button>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="nav-left">
            <a href="/" className="nav-link active">Home</a>
            <a href="/covid" className="nav-link">Covid-19</a>
            <div className="dropdown">
              <button 
                className="nav-link dropdown-toggle"
                onClick={() => toggleDropdown('journey')}
              >
                Our Journey ▼
              </button>
              {activeDropdown === 'journey' && (
                <div className="dropdown-menu">
                  <a href="/about">About Us</a>
                  <a href="/history">Our History</a>
                  <a href="/team">Our Team</a>
                </div>
              )}
            </div>
            <div className="dropdown">
              <button 
                className="nav-link dropdown-toggle"
                onClick={() => toggleDropdown('programs')}
              >
                Programs ▼
              </button>
              {activeDropdown === 'programs' && (
                <div className="dropdown-menu">
                  <a href="/programs/education">Education</a>
                  <a href="/programs/health">Health</a>
                  <a href="/programs/environment">Environment</a>
                  <a href="/programs/women">Women Empowerment</a>
                </div>
              )}
            </div>
            <div className="dropdown">
              <button 
                className="nav-link dropdown-toggle"
                onClick={() => toggleDropdown('achievements')}
              >
                Achievements ▼
              </button>
              {activeDropdown === 'achievements' && (
                <div className="dropdown-menu">
                  <a href="/achievements/awards">Awards</a>
                  <a href="/achievements/recognition">Recognition</a>
                  <a href="/achievements/impact">Impact Stories</a>
                </div>
              )}
            </div>
          </div>
          
          <div className="logo">
            <img src="/images/logo.png" alt="Aahwahan Foundation" />
          </div>
          
          <div className="nav-right">
            <a href="/products" className="nav-link">Products</a>
            <a href="/patrika" className="nav-link">Aahwahan Patrika</a>
            <div className="dropdown">
              <button 
                className="nav-link dropdown-toggle"
                onClick={() => toggleDropdown('media')}
              >
                Media Presence ▼
              </button>
              {activeDropdown === 'media' && (
                <div className="dropdown-menu">
                  <a href="/media/videos">Videos</a>
                  <a href="/media/photos">Photos</a>
                  <a href="/media/news">News Coverage</a>
                  <a href="/media/events">Events</a>
                </div>
              )}
            </div>
            <a href="/csr" className="nav-link">Corporate CSR</a>
            <a href="/blogs" className="nav-link">Blogs</a>
          </div>
          
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <a href="/">Home</a>
          <a href="/covid">Covid-19</a>
          <a href="/journey">Our Journey</a>
          <a href="/programs">Programs</a>
          <a href="/achievements">Achievements</a>
          <a href="/products">Products</a>
          <a href="/patrika">Aahwahan Patrika</a>
          <a href="/media">Media Presence</a>
          <a href="/csr">Corporate CSR</a>
          <a href="/blogs">Blogs</a>
        </div>
      )}
    </header>
  );
};

export default Header;