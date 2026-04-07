import React from 'react';
import { heroData } from '../../pageComponents/product/SolidityShield/data';

const chains = [
  "Ethereum", "BNB Chain", "Polygon", "Arbitrum", "Optimism"
];
const scrollingChains = [...chains, ...chains, ...chains, ...chains];

const SolidityShieldHero = () => {
  return (
    <section id="solidity-shield-hero" className="sw-hero-container">
      <div className="sw-hero-inner">
        
        {/* Left Side Content */}
        <div className="sw-hero-content">
          <p className="sw-hero-subtitle">{heroData.tag}</p>
          <h1 className="sw-hero-title">
            Smart Contract <span className="highlight">Security Audit Solution</span> for Secure Blockchain Deployment
          </h1>
          <p className="sw-hero-desc">
            {heroData.description}
          </p>

          <div className="sw-hero-buttons">
            <a href="/solidity-shield-scan" className="sw-btn-primary">{heroData.primaryCta}</a>
            <a href="https://www.youtube.com/watch?v=ubvywC8rYCA" target="_blank" rel="noopener noreferrer" className="sw-btn-outline">{heroData.secondaryCta}</a>
          </div>
        </div>

        {/* Right Side UI Mock */}
        <div className="sw-hero-mock">
          <div className="sw-mock-box">
            
            <div className="sw-mock-header">
              <div className="sw-mock-status">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00ff88" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span className="sw-mock-status-text">All Systems Secure</span>
              </div>
              <div className="sw-mock-live">
                <span className="live-dot"></span> Live
              </div>
            </div>

            <div className="sw-mock-ticker">
              <div className="ticker-track">
                {scrollingChains.map((chain, idx) => (
                  <div key={idx} className="ticker-item">
                    <span className="ticker-dot"></span> {chain}
                  </div>
                ))}
              </div>
            </div>

            <div className="sw-mock-alerts">
              {heroData.alerts.map((alert, idx) => (
                <div key={idx} className="sw-mock-alert-row">
                  <div className="alert-left">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={alert.iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                      <line x1="12" y1="9" x2="12" y2="13"></line>
                      <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                    <span>{alert.text}</span>
                  </div>
                  <span className={`alert-badge alert-${alert.level.toLowerCase()}`}>{alert.level}</span>
                </div>
              ))}
            </div>

            <div className="sw-mock-chart">
              <div className="chart-bg">
                <div className="chart-col"></div><div className="chart-col"></div><div className="chart-col"></div>
                <div className="chart-col"></div><div className="chart-col"></div><div className="chart-col"></div>
                <div className="chart-col"></div>
              </div>
              <div className="chart-dots">
                <span className="chart-dot d1"></span>
                <span className="chart-dot d2"></span>
                <span className="chart-dot d3"></span>
                <span className="chart-dot d4"></span>
                <span className="chart-dot d5"></span>
              </div>
              <div className="chart-footer">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00d2ff" strokeWidth="2">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
                <span>Live Threat Map — Multi-Chain Monitoring</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default SolidityShieldHero;
