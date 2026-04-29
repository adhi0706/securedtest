import React from 'react';
import SectionHeader from '../common/SectionHeader';
import CommonCard from '../common/CommonCard';
import { FiSearch, FiTrendingUp, FiEye, FiAlertTriangle, FiShield } from 'react-icons/fi';

const steps = [
  {
    num: "01",
    icon: <FiSearch size={28} />,
    title: "Protocol Asset Discovery",
    desc: "SecureWatch connects to deployed smart contracts and identifies the protocol components that require monitoring."
  },
  {
    num: "02",
    icon: <FiTrendingUp size={28} />,
    title: "Behavioral Baseline Analysis",
    desc: "Machine learning models analyze historical blockchain activity to establish normal behavioral patterns for the protocol."
  },
  {
    num: "03",
    icon: <FiEye size={28} />,
    title: "Real-Time Transaction Surveillance",
    desc: "Every blockchain transaction involving monitored contracts is analyzed immediately after appearing on-chain."
  },
  {
    num: "04",
    icon: <FiAlertTriangle size={28} />,
    title: "Threat Detection & Alerts",
    desc: "The system identifies suspicious behavior such as abnormal token transfers, exploit patterns, and governance anomalies."
  },
  {
    num: "05",
    icon: <FiShield size={28} />,
    title: "Automated Mitigation",
    desc: "Security teams receive alerts instantly and can trigger automated response workflows when threats are detected."
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 flex flex-col items-center">
      <div className="w-full max-w-7xl px-4 md:px-8 mx-auto">
        <SectionHeader 
          label="Workflow" 
          title={<>How SecureWatch <span className="text-[#00ff88]">Blockchain Monitoring Works</span></>} 
        />
        
        <div className="flex flex-wrap gap-6 justify-center w-full mt-12">
          {steps.map((step, idx) => (
            <CommonCard 
              key={idx}
              preTitle={`STEP ${step.num}`}
              title={step.title}
              description={step.desc}
              icon={step.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
