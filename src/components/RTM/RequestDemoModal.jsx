import React, { useState } from 'react';


const RequestDemoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="rdm-overlay">
      <div className="rdm-container">
        
        <button className="rdm-close-btn" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#797d86" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="rdm-header">
          <h2 className="rdm-title">Request a Demo</h2>
          <p className="rdm-subtitle">See SecureWatch in action for your protocol.</p>
        </div>

        <form className="rdm-form" onSubmit={(e) => e.preventDefault()}>
          <div className="rdm-form-group">
            <input type="text" placeholder="Name" required />
          </div>
          <div className="rdm-form-group">
            <input type="email" placeholder="Work Email" required />
          </div>
          <div className="rdm-form-group">
            <input type="text" placeholder="Company" required />
          </div>
          <div className="rdm-form-group">
            <select required defaultValue="">
              <option value="" disabled>Select Blockchain Network</option>
              <option value="ethereum">Ethereum</option>
              <option value="bnb">BNB Chain</option>
              <option value="polygon">Polygon</option>
              <option value="arbitrum">Arbitrum</option>
              <option value="optimism">Optimism</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="rdm-form-group">
            <textarea placeholder="Message (optional)" rows="4"></textarea>
          </div>
          <button type="submit" className="rdm-submit-btn">Submit Request <span>&rarr;</span></button>
        </form>
      </div>
    </div>
  );
};

export default RequestDemoModal;
