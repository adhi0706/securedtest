import React, { useState, useEffect } from 'react';


const SecureWatchNavbar = ({ onOpenModal }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`swnav-container ${scrolled ? 'swnav-scrolled' : ''}`}>
      <div className="swnav-inner">
        
        {/* Logo */}
        <div className="swnav-logo" onClick={() => window.location.href = '/'}>
          <img src="/assets/images/securedapp-logo-dark.svg" alt="SecureDApp" />
        </div>

        {/* Links */}
        <div className="swnav-links">
          <button onClick={() => scrollToSection('features')} className="swnav-link">Features</button>
          <button onClick={() => scrollToSection('how-it-works')} className="swnav-link">How It Works</button>
          <button onClick={() => scrollToSection('use-cases')} className="swnav-link">Use Cases</button>
          <button onClick={() => scrollToSection('pricing')} className="swnav-link">Pricing</button>
          <button onClick={() => scrollToSection('faq')} className="swnav-link">FAQ</button>
          
          <button onClick={() => scrollToSection('live-monitoring')} className="swnav-link swnav-live-btn">
            <span className="live-dot-green"></span> Live Monitoring
          </button>
        </div>

        {/* Action Button */}
        <div className="swnav-action">
          <a href="https://securewatch.securedapp.io/signup" target="_blank" rel="noopener noreferrer" className="swnav-trial-btn">Start Free Trial</a>
        </div>

      </div>
    </nav>
  );
};

export default SecureWatchNavbar;
