import React from "react";
import Link from "next/link";

const RTMMonitoring = () => {
  return (
    <section className="rtm-monitoring-container">
      <div className="rtm-monitoring-inner">
        <div className="rtm-monitoring-content">
          <h2>What is Real-Time Monitoring?</h2>
          <p>
            While a <Link href="/smart-contract-audit" className="rtm-inline-link">smart contract audit</Link> ensures 
            your code is secure pre-deployment, real-time monitoring actively 
            watches over your live transactions on-chain. It is your dynamic defense layer, 
            identifying deviations in normal operating parameters, providing early warnings 
            for potential exploits, and enabling rapid incident response.
          </p>
          <ul className="rtm-monitoring-capabilities">
            <li><strong>Anomaly Detection:</strong> Uses AI baselines to spot unusual volume or access patterns.</li>
            <li><strong>Transaction Simulation:</strong> Tests mempool transactions before they land on-chain.</li>
            <li><strong>Automated Mitigation:</strong> Pauses contracts instantly when critical thresholds are breached.</li>
          </ul>
        </div>
        <div className="rtm-monitoring-why">
          <h2>Why Monitoring matters</h2>
          <div className="rtm-why-cards">
            <div className="rtm-why-card">
              <h4>Irreversible Transactions</h4>
              <p>Once assets are drained, they rarely return. Stop bleeding fast.</p>
            </div>
            <div className="rtm-why-card">
              <h4>Infinite Liquidity Exposure</h4>
              <p>DeFi protocols host millions; monitoring limits catastrophic exposure.</p>
            </div>
            <div className="rtm-why-card">
              <h4>Zero-Day Vulnerabilities</h4>
              <p>Catch attacks that bypassed static testing via active threat intelligence.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RTMMonitoring;
