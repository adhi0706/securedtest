import React from 'react';
import SectionHeader from '../common/SectionHeader';
import CommonCard from '../common/CommonCard';
import { FiCpu, FiGlobe, FiShield, FiServer } from 'react-icons/fi';

const techData = [
  {
    icon: <FiCpu size={28} />,
    title: "AI and Machine Learning",
    desc: "Behavioral anomaly detection models analyze blockchain activity and identify suspicious patterns across millions of daily transactions."
  },
  {
    icon: <FiGlobe size={28} />,
    title: "Multi-Chain Monitoring Infrastructure",
    desc: "The platform monitors smart contracts across multiple blockchain networks simultaneously with unified visibility."
  },
  {
    icon: <FiShield size={28} />,
    title: "Threat Intelligence Integration",
    desc: "Blockchain activity is correlated with global cybersecurity intelligence feeds for comprehensive threat context."
  },
  {
    icon: <FiServer size={28} />,
    title: "Scalable Security Architecture",
    desc: "Infrastructure designed to scale across high-throughput blockchain networks processing millions of transactions."
  }
];

const Technology = () => {
  return (
    <section className="py-20 flex flex-col items-center">
      <div className="w-full max-w-7xl px-4 md:px-8 mx-auto">
        <SectionHeader 
          label="Technology" 
          title={<>Technology Behind <span className="text-[#00ff88]">SecureWatch</span></>} 
        />
        
        <div className="flex flex-wrap gap-6 justify-center w-full mt-12">
          {techData.map((tech, idx) => (
            <CommonCard 
              key={idx}
              title={tech.title}
              description={tech.desc}
              icon={tech.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
