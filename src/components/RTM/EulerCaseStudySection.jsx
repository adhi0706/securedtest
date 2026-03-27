import React from 'react';
import SectionHeader from '../common/SectionHeader';

const EulerCaseStudySection = () => {
  return (
    <section className="ecs-container">
      <div className="ecs-header mb-8">
        <SectionHeader 
          label="Case Study" 
          title={<>Case Study: <span className="text-[#00ff88]">The Euler Finance Exploit</span></>} 
        />
      </div>

      <div className="ecs-card">
        <div className="ecs-card-header">
          <div className="ecs-icon-box ecs-alert-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff4d4f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
          </div>
          <div className="ecs-header-text">
            <h4 className="ecs-date">March 2023 — Euler Finance</h4>
            <span className="ecs-loss">$197 Million Lost</span>
          </div>
        </div>

        <div className="ecs-body">
          <p>
            In March 2023, the decentralized lending protocol Euler Finance experienced one of the largest exploits in DeFi history. An attacker used a flash loan strategy combined with weaknesses in the protocol's smart contract logic.
          </p>
          <p>
            By repeatedly borrowing and repaying assets in a carefully structured sequence of transactions, the attacker manipulated collateral calculations and extracted funds from liquidity pools — resulting in approximately $197 million in losses.
          </p>
          <p>
            The attack demonstrated how quickly blockchain exploits can unfold and highlighted the importance of real-time monitoring systems capable of detecting abnormal transaction patterns. Continuous monitoring platforms are designed to identify these patterns early, enabling security teams to respond quickly and limit financial damage.
          </p>
        </div>

        <div className="ecs-pills">
          <span className="ecs-pill">Flash Loan Attack</span>
          <span className="ecs-pill">Collateral Manipulation</span>
          <span className="ecs-pill">Multi-Transaction Exploit</span>
        </div>
      </div>
    </section>
  );
};

export default EulerCaseStudySection;
