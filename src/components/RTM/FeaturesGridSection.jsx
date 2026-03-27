import React from 'react';
import SectionHeader from '../common/SectionHeader';
import CommonCard from '../common/CommonCard';
import { FiActivity, FiCpu, FiGlobe, FiSettings, FiLayers } from 'react-icons/fi';

const features = [
  {
    icon: <FiActivity size={28} />,
    title: "Real-Time Transaction Monitoring",
    desc: "SecureWatch continuously monitors blockchain activity across multiple networks. Every blockchain transaction involving monitored contracts is analyzed immediately after appearing on-chain.",
    pill: "Immediate threat detection"
  },
  {
    icon: <FiCpu size={28} />,
    title: "AI-Powered Behavioral Analysis",
    desc: "Machine learning models analyze millions of blockchain transactions each day to detect abnormal patterns. Behavioral anomaly detection identifies suspicious activity — including emerging and unknown exploit techniques.",
    pill: "Detects novel attack vectors"
  },
  {
    icon: <FiGlobe size={28} />,
    title: "Multi-Chain Security Visibility",
    desc: "SecureWatch monitors smart contracts across several blockchain ecosystems including Ethereum, BNB Chain, Polygon, Arbitrum, and Optimism — with a unified dashboard for cross-chain visibility.",
    pill: "No blind spots across chains"
  },
  {
    icon: <FiSettings size={28} />,
    title: "Custom Monitoring Policies",
    desc: "Organizations can configure alert thresholds, security rules, and automated response triggers tailored to their specific protocol architecture and risk tolerance.",
    pill: "Tailored security profiles"
  },
  {
    icon: <FiLayers size={28} />,
    title: "Enterprise Security Integrations",
    desc: "SecureWatch integrates with enterprise security platforms and operational workflows including Slack alerts, Webhooks, SIEM platforms, and security operations dashboards.",
    pill: "Fits existing workflows"
  }
];

const FeaturesGridSection = () => {
  return (
    <section id="features" className="py-20 bg-transparent flex flex-col items-center">
      <div className="w-full max-w-7xl px-4 md:px-8 mx-auto">
        <SectionHeader 
          label="Features" 
          title={<>Key Features of <span className="text-[#00ff88]">SecureWatch</span></>} 
        />
        
        <div className="flex flex-wrap gap-6 justify-center w-full mt-12">
          {features.map((f, idx) => (
            <CommonCard 
              key={idx}
              title={f.title}
              description={f.desc}
              icon={f.icon}
              pill={f.pill}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGridSection;
