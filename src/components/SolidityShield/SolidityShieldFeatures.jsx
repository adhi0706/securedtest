import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { FiShield, FiCpu, FiZap, FiLayout, FiCheckCircle, FiSearch } from 'react-icons/fi';
import './SolidityShieldFeatures.css';

const features = [
  {
    title: "Advanced Vulnerability Detection",
    desc: "Identifies over 150 types of vulnerabilities across smart contract code, from common exploits to niche edge cases.",
    icon: <FiShield size={24} color="#00ff88" />,
    pill: "Comprehensive"
  },
  {
    title: "AI-Powered Analysis",
    desc: "Leverages machine learning to detect complex patterns and potential logic flaws beyond standard rule-based systems.",
    icon: <FiCpu size={24} color="#00d2ff" />,
    pill: "AI-Driven"
  },
  {
    title: "Real-Time Feedback",
    desc: "Provides instant notifications and security insights during development for faster and more efficient issue resolution.",
    icon: <FiZap size={24} color="#ff8c00" />,
    pill: "Dynamic"
  },
  {
    title: "Detailed Reporting Dashboard",
    desc: "Offers visual, easy-to-understand reports with actionable insights and severity classifications for every identified issue.",
    icon: <FiLayout size={24} color="#B5E4CA" />,
    pill: "Insightful"
  },
  {
    title: "ERC Standard Compatibility",
    desc: "Ensures seamless integration within blockchain ecosystems by validating compliance with standard token interfaces.",
    icon: <FiCheckCircle size={24} color="#FFBC99" />,
    pill: "Standardized"
  },
  {
    title: "Combined Automated & Manual Audits",
    desc: "Covers both common vulnerabilities and complex attack vectors through a hybrid approach of AI and expert review.",
    icon: <FiSearch size={24} color="#FFD88D" />,
    pill: "Hybrid"
  }
];

const SolidityShieldFeatures = () => {
  return (
    <section className="ssf-container">
      <div className="ssf-header">
        <SectionHeader 
          label="Features" 
          title={<>Key Features of <span className="text-[#00ff88]">Solidity Shield</span></>} 
        />
      </div>

      <div className="ssf-grid">
        {features.map((f, idx) => (
          <div key={idx} className="ssf-card">
            <div className="ssf-icon-area">
              {f.icon}
            </div>
            <div className="ssf-content-area">
              <h3 className="ssf-card-title">{f.title}</h3>
              <p className="ssf-card-desc">{f.desc}</p>
            </div>
            <div className="ssf-pill-area">
              <span className="ssf-pill">{f.pill}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SolidityShieldFeatures;
