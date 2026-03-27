import React from "react";

const steps = [
  { step: "1", title: "Integration", desc: "Connect wallets or smart contracts to our platform seamlessly." },
  { step: "2", title: "Monitoring", desc: "Our AI engine analyzes on-chain traffic and memory pools 24/7." },
  { step: "3", title: "Detection", desc: "Identifies anomalies like flash loans or abnormal asset transfers." },
  { step: "4", title: "Alerting", desc: "Real-time alerts generated and sent via Telegram, Slack, or webhook." },
  { step: "5", title: "Mitigation", desc: "Automated responses can pause contracts and halt exploitation." }
];

const RTMHowItWorks = () => {
  return (
    <section className="rtm-hiw-container">
      <div className="rtm-hiw-inner">
        <h2>How It Works</h2>
        <p className="rtm-hiw-subtitle">A seamless 5-step process securing your digital assets</p>
        
        <div className="rtm-timeline">
          {steps.map((s, idx) => (
            <div key={idx} className="rtm-timeline-step">
              <div className="rtm-timeline-number">{s.step}</div>
              <div className="rtm-timeline-content">
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RTMHowItWorks;
