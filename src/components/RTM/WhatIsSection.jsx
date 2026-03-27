import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';

const WhatIsSection = () => {
  const [toggleState, setToggleState] = useState('without'); // 'without' or 'with'

  return (
    <section className="rtm-whatis-container">
      <div className="rtm-whatis-inner">
        <SectionHeader 
          label="Overview" 
          title={<>What Is <span className="text-[#00ff88]">Blockchain Threat Monitoring</span></>} 
        />
        
        <div className="rtm-whatis-text">
          <p>
            Blockchain threat monitoring is the continuous analysis of blockchain transactions, smart contract
            interactions, and wallet behavior to identify malicious activity, security vulnerabilities, and financial
            fraud in real time. Unlike traditional cybersecurity monitoring, it focuses specifically on on-chain
            behavior and decentralized protocol activity.
          </p>
          <p>
            SecureWatch uses AI-driven behavioral analytics and multi-chain infrastructure to analyze blockchain
            activity, build behavioral baselines for each monitored protocol, and identify deviations that may
            indicate potential exploits.
          </p>
        </div>

        <div className="rtm-whatis-toggle-wrapper">
          <div className="rtm-whatis-toggle">
            <button 
              className={`rtm-toggle-btn ${toggleState === 'without' ? 'active-without' : ''}`}
              onClick={() => setToggleState('without')}
            >
              Without Monitoring
            </button>
            <button 
              className={`rtm-toggle-btn ${toggleState === 'with' ? 'active-with' : ''}`}
              onClick={() => setToggleState('with')}
            >
              With SecureWatch
            </button>
          </div>
        </div>

        <div className="rtm-whatis-result">
          {toggleState === 'without' ? (
            <div className="rtm-result-box rtm-result-red animation-fade-in">
              <span className="rtm-result-label red-label">WITHOUT CONTINUOUS MONITORING</span>
              <p className="rtm-result-text">
                Your team discovers the exploit hours later via social media. <span className="red-highlight">$197M drained — irreversible on-chain.</span>
              </p>
            </div>
          ) : (
            <div className="rtm-result-box rtm-result-green animation-fade-in">
              <span className="rtm-result-label green-label">WITH SECUREWATCH</span>
              <p className="rtm-result-text">
                SecureWatch detects abnormal flash loan sequence at Block #183920.<br/>
                <span className="green-highlight">Automated response triggered. Attack neutralized in milliseconds.</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
