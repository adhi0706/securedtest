import React from "react";

const RTMTechnology = () => {
  return (
    <section className="rtm-tech-container">
      <div className="rtm-tech-inner">
        <h2>Technology & Integrations</h2>
        <p className="rtm-tech-desc">
          Built on a globally distributed node infrastructure for minimum latency 
          and maximum reliability. Leverage our API to pipe threat intelligence directly 
          into your existing enterprise tools.
        </p>
        <div className="rtm-tech-grid">
          <div className="rtm-tech-card">
            <h4>Machine Learning Kernel</h4>
            <p>Our models are trained on historical exploits and billions of safe transactions to eliminate false positives.</p>
          </div>
          <div className="rtm-tech-card">
            <h4>Mempool Sniffer</h4>
            <p>Direct low-level peering with mining pools and sequencers to inspect blocks before they solidify.</p>
          </div>
          <div className="rtm-tech-card">
            <h4>SIEM Integrations</h4>
            <p>Send normalized alert payloads to Splunk, Datadog, Slack, or any custom webhook endpoint.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RTMTechnology;
