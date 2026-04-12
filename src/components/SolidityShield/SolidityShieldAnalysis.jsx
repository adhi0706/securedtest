import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { FiAlertTriangle, FiArrowRightCircle, FiLock, FiGlobe, FiFastForward, FiGrid } from 'react-icons/fi';
import './SolidityShieldAnalysis.css';

const vulnerabilities = [
  {
    title: "Reentrancy Attacks",
    desc: "Recursive execution allowing repeated withdrawals before balance updates, one of the most critical DeFi exploits.",
    icon: <FiAlertTriangle size={24} color="#ff4d4f" />
  },
  {
    title: "Unchecked Transfers",
    desc: "Failures in validating transaction outcomes leading to inconsistencies and potential loss of funds.",
    icon: <FiArrowRightCircle size={24} color="#00d2ff" />
  },
  {
    title: "Access Control Issues",
    desc: "Improper permissions and role management exposing sensitive functions to unauthorized actors.",
    icon: <FiLock size={24} color="#ffd700" />
  },
  {
    title: "Oracle Manipulation",
    desc: "Exploitation of external data inputs and price feeds to manipulate contract outcomes and valuations.",
    icon: <FiGlobe size={24} color="#B5E4CA" />
  },
  {
    title: "Flash Loan Attack Paths",
    desc: "Multi-step attacks exploiting protocol logic within a single transaction using uncollateralized liquidity.",
    icon: <FiFastForward size={24} color="#FFBC99" />
  },
  {
    title: "Business Logic Flaws",
    desc: "Design-level issues that can be exploited despite correct technical execution of the code.",
    icon: <FiGrid size={24} color="#00ff88" />
  }
];

const SolidityShieldAnalysis = () => {
  return (
    <section className="ss-analysis-container">
      <div className="ss-analysis-inner">
        <SectionHeader 
          label="Detection" 
          title={<>Vulnerabilities We Detect and <span className="text-[#00ff88]">Prevent</span></>} 
        />
        
        <div className="ss-analysis-grid mt-16">
          {vulnerabilities.map((v, idx) => (
            <div key={idx} className="ss-analysis-card">
              <div className="ss-analysis-icon-box">
                {v.icon}
              </div>
              <div className="ss-analysis-content">
                <h3 className="ss-analysis-card-title">{v.title}</h3>
                <p className="ss-analysis-card-desc">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolidityShieldAnalysis;
