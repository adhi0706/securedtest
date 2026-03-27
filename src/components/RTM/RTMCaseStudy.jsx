import React from "react";

const RTMCaseStudy = () => {
  return (
    <section className="rtm-casestudy-container">
      <div className="rtm-casestudy-inner">
        <div className="rtm-cs-left">
          <div className="rtm-cs-badge">Case Study</div>
          <h2>The Euler Finance Exploit</h2>
          <p>
            In March 2023, Euler Finance suffered a devastating flash loan attack resulting in a $197 million loss. The vulnerability lay hidden in a seemingly benign code update that bypassed traditional audits.
          </p>
          <div className="rtm-cs-highlight">
            <h4>How SecureWatch Changes the Outcome</h4>
            <p>
              With our Mempool Inspection and Anomaly Detection tools, the massive, irregular transaction would have been flagged and paused <strong>before</strong> the block was finalized.
            </p>
          </div>
        </div>
        <div className="rtm-cs-right">
          <div className="rtm-metrics-card">
            <div className="rtm-metric">
              <span className="rtm-metric-value">$197M</span>
              <span className="rtm-metric-label">Lost in Exploit</span>
            </div>
            <div className="rtm-metric rtm-blue">
              <span className="rtm-metric-value">0 Sec</span>
              <span className="rtm-metric-label">Prevention Time Needed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RTMCaseStudy;
