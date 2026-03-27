import React from 'react';

const steps = [
  { id: "01", title: "Protocol Asset Discovery", desc: "SecureWatch connects to deployed smart contracts and identifies components that require monitoring.", icon: "🔍" },
  { id: "02", title: "Behavioral Baseline Analysis", desc: "Machine learning models analyze historical activity to establish normal behavioral patterns.", icon: "📊" },
  { id: "03", title: "Real-Time Transaction Surveillance", desc: "Every transaction involving monitored contracts is analyzed immediately upon appearing on-chain.", icon: "📡" },
  { id: "04", title: "Threat Detection & Alerts", desc: "The system identifies suspicious behavior such as abnormal token transfers or governance anomalies.", icon: "⚠️" },
  { id: "05", title: "Automated Mitigation", desc: "Security teams receive instant alerts and can trigger pre-configured automated response workflows.", icon: "🛡️" }
];

const HowItWorks = () => {
    return (
        <section className="rtm-hiw-new-container">
            <div className="rtm-hiw-new-inner">
                <h2 className="rtm-hiw-new-title">How SecureWatch <span className="highlight">Blockchain Monitoring</span> Works</h2>
                <div className="rtm-hiw-new-grid">
                    {steps.map((step, index) => (
                        <div key={index} className="rtm-hiw-new-card">
                            <div className="rtm-hiw-new-icon-wrapper">
                                <span className="rtm-hiw-new-icon">{step.icon}</span>
                            </div>
                            <div className="rtm-hiw-new-step-number">{step.id}</div>
                            <h4 className="rtm-hiw-new-card-title">{step.title}</h4>
                            <p className="rtm-hiw-new-card-desc">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
