import React from "react";
import Link from "next/link";

const featuresData = [
  {
    icon: "🛡️",
    title: "AI-Powered Defense",
    desc: "Machine learning models identify complex attack patterns that traditional rules-based systems miss."
  },
  {
    icon: "⚡",
    title: "Mempool Inspection",
    desc: "Stop exploits before they are mined by analyzing pending transactions for destructive state changes."
  },
  {
    icon: "🔗",
    title: "Multi-Chain Visibility",
    desc: "Support across Ethereum, Polygon, BSC, Arbitrum, Optimism, and other EVM-compatible networks."
  },
  {
    icon: "🔍",
    title: "Fraud Detection",
    desc: "Couples seamlessly with our crypto fraud detection tools to track illicit money flows."
  }
];

const RTMFeatures = () => {
  return (
    <section className="rtm-features-container">
      <div className="rtm-features-inner">
        <h2>Robust Features Built for Security</h2>
        <p className="rtm-features-sub">Protecting DeFi and Enterprise scale applications natively.</p>
        
        <div className="rtm-features-grid">
          {featuresData.map((f, i) => (
            <div key={i} className="rtm-features-card">
              <div className="rtm-feat-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
        <div className="rtm-features-link-wrapper">
          <Link href="/crypto-fraud-detection" className="rtm-btn-secondary">Explore Fraud Detection Integrations</Link>
        </div>
      </div>
    </section>
  );
};

export default RTMFeatures;
