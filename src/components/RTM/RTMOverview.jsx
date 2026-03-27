import React from "react";

const RTMOverview = () => {
  return (
    <section className="rtm-overview-container">
      <div className="rtm-overview-content">
        <h2 className="rtm-title">Blockchain Threat Monitoring with SecureWatch</h2>
        <p className="rtm-description">
          Protect your smart contracts and digital assets with AI-driven, real-time 
          surveillance. SecureWatch detects unauthorized access, anomalies, and 
          vulnerabilities before they can be exploited, ensuring continuous compliance 
          and Web3 security.
        </p>
        <div className="rtm-trust-signals">
          <span>✔️ 24/7 AI Surveillance</span>
          <span>✔️ Multi-Chain Support</span>
          <span>✔️ Real-Time Threat Intelligence</span>
        </div>
        <div className="rtm-overview-ctas">
          <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ21-NumjUBdRf0JzEARDvMYJ8kTpVE3AkdeVpX6fQ2-Xbm8sm5KICJfDsAuoF3F2-3Vd5lr50sp" target="_blank" rel="noopener noreferrer" className="rtm-btn-primary">Book a Demo</a>
          <a href="https://securewatch.securedapp.io/signup" target="_blank" rel="noopener noreferrer" className="rtm-btn-secondary">Start Monitoring</a>
        </div>
      </div>
    </section>
  );
};

export default RTMOverview;
