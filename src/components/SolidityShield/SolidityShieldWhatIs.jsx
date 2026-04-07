import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import './SolidityShieldWhatIs.css';

const SolidityShieldWhatIs = () => {
  const [toggleState, setToggleState] = useState('without'); // 'without' or 'with'

  return (
    <section className="ss-whatis-container">
      <div className="ss-whatis-inner">
        <SectionHeader 
          label="Overview" 
          title={<>What Is a <span className="text-[#00ff88]">Smart Contract?</span></>} 
        />
        
        <div className="ss-whatis-text text-left max-w-4xl mx-auto">
          <p>
            A smart contract is a digital agreement stored on a blockchain network that executes automatically when predefined conditions are met. These contracts encode the terms between parties directly into code, removing the need for intermediaries and reducing dependency on manual enforcement.
          </p>
          <p>
            Operating on decentralized infrastructure, smart contracts ensure that outcomes are executed consistently, transparently, and without manual intervention. Once deployed, they function exactly as programmed, making them highly reliable for trustless environments where multiple parties interact without prior relationships.
          </p>
          <p>
            A single smart contract can include multiple conditions and can also interact with other contracts to support complex workflows. In modern blockchain systems, it is common for applications to rely on interconnected contracts that collectively handle different aspects of functionality such as payments, governance, and data validation.
          </p>
          <p>
            This flexibility makes smart contracts powerful, but it also significantly increases the surface area for potential vulnerabilities. Even a small oversight in logic, permissions, or external interaction can introduce risks that may be exploited once the contract is live, making thorough security auditing a critical step before deployment.
          </p>
        </div>

        <div className="ss-whatis-toggle-wrapper">
          <div className="ss-whatis-toggle">
            <button 
              className={`ss-toggle-btn ${toggleState === 'without' ? 'active-without' : ''}`}
              onClick={() => setToggleState('without')}
            >
              Without Auditing
            </button>
            <button 
              className={`ss-toggle-btn ${toggleState === 'with' ? 'active-with' : ''}`}
              onClick={() => setToggleState('with')}
            >
              With Solidity Shield
            </button>
          </div>
        </div>

        <div className="ss-whatis-result">
          {toggleState === 'without' ? (
            <div className="ss-result-box ss-result-red animation-fade-in">
              <span className="ss-result-label red-label">WITHOUT SMART CONTRACT AUDITING</span>
              <p className="ss-result-text">
                Your team discovers the exploit hours later via social media. <span className="red-highlight">$197M drained — irreversible on-chain.</span>
              </p>
            </div>
          ) : (
            <div className="ss-result-box ss-result-green animation-fade-in">
              <span className="ss-result-label green-label">WITH SOLIDITY SHIELD</span>
              <p className="ss-result-text">
                Solidity Shield detects reentrancy vulnerability in withdrawal logic at Block #183920.<br/>
                <span className="green-highlight">Issue resolved before deployment. Launch successful and secure.</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SolidityShieldWhatIs;
