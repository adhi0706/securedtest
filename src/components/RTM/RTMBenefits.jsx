import React from "react";

const benefits = [
  "Minimize financial losses by stopping exploits before they land.",
  "Maintain brand reputation and user trust through proactive security.",
  "Achieve regulatory compliance with undeniable audit trails.",
  "Reduce developer overhead with our easy plug-and-play integration.",
  "Get actionable threat intelligence to improve future smart contract versions."
];

const RTMBenefits = () => {
  return (
    <section className="rtm-benefits-container">
      <div className="rtm-benefits-inner">
        <div className="rtm-benefits-image">
          {/* Abstract placeholder for UI */}
          <div className="rtm-benefits-mockup">
            <div className="rtm-mockup-header">🛡️ SecureWatch Analytics</div>
            <div className="rtm-mockup-body">
              <div className="line l1"></div>
              <div className="line l2"></div>
              <div className="line l3"></div>
            </div>
          </div>
        </div>
        <div className="rtm-benefits-content">
          <h2>The SecureWatch Advantage</h2>
          <ul className="rtm-benefits-list">
            {benefits.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RTMBenefits;
