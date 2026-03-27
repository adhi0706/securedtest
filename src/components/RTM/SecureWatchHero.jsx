import React from 'react';

const chains = [
  "Ethereum", "BNB Chain", "Polygon", "Arbitrum", "Optimism"
];
// Duplicate for seamless scroll
const scrollingChains = [...chains, ...chains, ...chains, ...chains];

const alerts = [
  { text: "Reentrancy detected on Contract 0x7a3...", level: "Critical", iconColor: "#ff4d4f" },
  { text: "Unusual token flow: 12,400 ETH moved", level: "High", iconColor: "#ff8c00" },
  { text: "Governance proposal anomaly flagged", level: "Medium", iconColor: "#ffd700" }
];

const SecureWatchHero = () => {
  return (
    <section id="live-monitoring" className="sw-hero-container">
      <div className="sw-hero-inner">
        
        {/* Left Side Content */}
        <div className="sw-hero-content">
          <p className="sw-hero-subtitle">REAL-TIME BLOCKCHAIN SECURITY</p>
          <h1 className="sw-hero-title">
            Real-Time <span className="highlight">Blockchain Threat Monitoring</span> That Stops Attacks Before Damage Is Done
          </h1>
          <p className="sw-hero-desc">
            SecureWatch is an AI-powered blockchain threat monitoring platform designed to protect smart contracts and decentralized applications after deployment. The platform analyzes blockchain transactions, wallet interactions, and smart contract calls across multiple networks to identify suspicious activity and prevent financial losses.
          </p>

          <a 
            href="https://www.linkedin.com/pulse/why-i-built-indias-first-real-time-blockchain-threat-monitoring-hpclc/?trackingId=7TZkJDUYStOU5wZWahQfFg%3D%3D" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="sw-hero-badge"
            style={{ textDecoration: 'none', cursor: 'pointer' }}
          >
            <span className="sw-hero-badge-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00d2ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
              </svg>
            </span>
            <span>Patent Granted — Government of India (Patent #574710)</span>
          </a>

          <div className="sw-hero-buttons">
            <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ21-NumjUBdRf0JzEARDvMYJ8kTpVE3AkdeVpX6fQ2-Xbm8sm5KICJfDsAuoF3F2-3Vd5lr50sp" target="_blank" rel="noopener noreferrer" className="sw-btn-primary">Book a Demo <span>&#8594;</span></a>
            <a href="https://securewatch.securedapp.io/signup" target="_blank" rel="noopener noreferrer" className="sw-btn-outline">Start Monitoring in Minutes</a>
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
              {alerts.map((alert, idx) => (
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
              {/* Abstract decorative layout for the chart area */}
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

export default SecureWatchHero;
