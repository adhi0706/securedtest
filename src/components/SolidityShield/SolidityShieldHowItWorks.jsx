import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { FiFileText, FiSearch, FiCode, FiActivity, FiClipboard, FiShield } from 'react-icons/fi';
import './SolidityShieldHowItWorks.css';

const steps = [
  {
    num: "STEP 1",
    title: "Code Intake & Scope",
    desc: "Review of contract specifications, architecture, and behavior to define audit scope.",
    icon: <FiFileText size={20} />
  },
  {
    num: "STEP 2",
    title: "Automated Detection",
    desc: "AI-powered tools scan codebase to identify known vulnerability patterns.",
    icon: <FiSearch size={20} />
  },
  {
    num: "STEP 3",
    title: "Manual Line Review",
    desc: "Security experts conduct detailed analysis to uncover complex logic flaws.",
    icon: <FiCode size={20} />
  },
  {
    num: "STEP 4",
    title: "Attack Simulation",
    desc: "Simulated scenarios are executed to evaluate behavior under real-world conditions.",
    icon: <FiActivity size={20} />
  },
  {
    num: "STEP 5",
    title: "Reporting",
    desc: "Detailed reports with severity classification and actionable recommendations.",
    icon: <FiClipboard size={20} />
  },
  {
    num: "STEP 6",
    title: "Revalidation",
    desc: "Contracts are re-tested after fixes to ensure all vulnerabilities are resolved.",
    icon: <FiShield size={20} />
  }
];

const SolidityShieldHowItWorks = () => {
  return (
    <section id="how-it-works" className="ss-hiw-container">
      <div className="ss-hiw-inner">
        <SectionHeader 
          label="Process" 
          title={<>How <span className="text-[#00ff88]">Solidity Shield</span> Works</>} 
        />
        
        <div className="ss-hiw-timeline-wrapper mt-16">
          <div className="ss-hiw-timeline-line"></div>
          <div className="ss-hiw-steps">
            {steps.map((s, idx) => (
              <div key={idx} className="ss-hiw-step">
                <div className="ss-hiw-icon-wrapper">
                  <div className="ss-hiw-icon-box">
                    {s.icon}
                  </div>
                </div>
                <span className="ss-hiw-num">{s.num}</span>
                <h3 className="ss-hiw-step-title">{s.title}</h3>
                <p className="ss-hiw-step-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="ss-hiw-ai-block mt-20 max-w-4xl mx-auto p-8 rounded-xl border border-[#00d2ff]/20 bg-[#00d2ff]/5">
            <p className="text-[#00d2ff] font-medium leading-relaxed italic text-center">
                "Smart contract auditing works by combining automated vulnerability detection, manual code review, attack simulation, and revalidation to ensure contracts are secure before deployment."
            </p>
        </div>
      </div>
    </section>
  );
};

export default SolidityShieldHowItWorks;
