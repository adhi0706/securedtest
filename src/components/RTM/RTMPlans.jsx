import React from "react";

const plans = [
  {
    name: "Guardian",
    target: "For emerging projects",
    features: ["Standard Anomaly Detection", "Email/Discord Alerts", "Daily Reporting", "1 Smart Contract"],
    recommended: false
  },
  {
    name: "Sentinel",
    target: "For active DeFi protocols",
    features: ["Advanced ML Models", "Mempool Inspection", "Telegram/Webhook Alerts", "Automated Mitigation", "Up to 5 Contracts"],
    recommended: true
  },
  {
    name: "Fortress",
    target: "For Enterprise & Exchanges",
    features: ["Custom Threat Models", "Dedicated Analyst Support", "SLA Guarantees", "Unlimited Contracts", "API Access"],
    recommended: false
  }
];

const RTMPlans = () => {
  return (
    <section className="rtm-plans-container">
      <div className="rtm-plans-inner">
        <h2>Choose Your Protection Level</h2>
        <p className="rtm-plans-sub">Flexible security plans that scale with your protocol's TVL.</p>
        
        <div className="rtm-plans-grid">
          {plans.map((p, i) => (
            <div key={i} className={`rtm-plan-card ${p.recommended ? 'recommended' : ''}`}>
              {p.recommended && <div className="rtm-plan-badge">Most Popular</div>}
              <h3>{p.name}</h3>
              <p className="rtm-plan-target">{p.target}</p>
              <ul className="rtm-plan-features">
                {p.features.map((f, idx) => (
                  <li key={idx}>{f}</li>
                ))}
              </ul>
              <a href="/book-a-demo" className="rtm-plan-btn">Get Started</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RTMPlans;
