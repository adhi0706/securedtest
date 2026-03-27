import React from 'react';
import SectionHeader from '../common/SectionHeader';
import CommonCard from '../common/CommonCard';
import { FiSliders, FiGrid, FiShield, FiShieldOff, FiMonitor } from 'react-icons/fi';

const metrics = [
  { value: '120+', label: 'Blockchain Companies Protected' },
  { value: '$3.8B+', label: 'Industry Losses Prevented Against' },
  { value: '24/7', label: 'Continuous Monitoring' },
  { value: '5,74,710', label: 'Patent number' }
];

const partners = [
  "ChainGuard", "DeFiVault", "BlockSafe", "TokenShield", "CryptoNet", "WebThree Labs"
];

const threats = [
  {
    title: "Flash Loan & Liquidity Manipulation",
    desc: "Flash loan attacks manipulate DeFi protocols by borrowing large liquidity within a single transaction. Without real-time detection, these attacks drain pools before teams can respond.",
    icon: <FiSliders size={28} />
  },
  {
    title: "Oracle & Price Feed Manipulation",
    desc: "Attackers manipulate price feeds used by DeFi protocols to influence asset valuations, creating cascading losses across lending markets and trading platforms.",
    icon: <FiGrid size={28} />
  },
  {
    title: "Cross-Chain Bridge Vulnerabilities",
    desc: "Cross-chain bridges are frequently targeted due to their complexity and large asset transfers. Point solutions monitoring a single chain miss these cross-protocol attack vectors.",
    icon: <FiShield size={28} />
  },
  {
    title: "Governance Takeover Attacks",
    desc: "Attackers accumulate governance tokens and attempt to influence protocol decisions, diverting treasury funds or altering critical protocol parameters.",
    icon: <FiShieldOff size={28} />
  },
  {
    title: "Smart Contract Logic Exploits",
    desc: "Once deployed, vulnerabilities in smart contract logic can be exploited repeatedly. Unexpected contract calls or abnormal transaction patterns may indicate active exploitation.",
    icon: <FiMonitor size={28} />
  }
];

const SecureWatchOverviewSection = () => {
  return (
    <section className="swo-container">
      {/* Metrics Top Section */}
      <div className="swo-metrics-section">
        <div className="swo-metrics-grid">
          {metrics.map((m, idx) => (
            <div key={idx} className="swo-metric-item">
              <h2 className="swo-metric-val">{m.value}</h2>
              <p className="swo-metric-label">{m.label}</p>
            </div>
          ))}
        </div>
        
        <div className="swo-trust-section">
          <p className="swo-trust-text">Trusted by Web3 companies across DeFi, exchanges, and infrastructure platforms</p>
          <div className="swo-trust-badges">
            {partners.map((p, idx) => (
              <span key={idx} className="swo-trust-badge">{p}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Threats Section */}
      <div className="swo-threats-section mt-12">
        <div className="swo-threats-header">
          <SectionHeader 
            label="Threats" 
            title={<>The Rising Security Threats Facing <span className="text-[#00ff88]">Web3 Platforms</span></>} 
          />
          <p className="swo-threats-subtitle text-center text-secondary/80 dark:text-[#a0a5b1] max-w-4xl mx-auto -mt-4 mb-4 text-lg">
            Industry reports estimate that more than $3.8 billion has been lost to blockchain exploits and DeFi attacks in recent years. These attacks often occur within minutes, making rapid detection essential for protecting user funds. Without continuous monitoring, many of these attacks remain undetected until protocol funds have already been drained.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 justify-center w-full max-w-7xl mx-auto mt-12">
          {threats.map((t, idx) => (
            <CommonCard 
              key={idx}
              title={t.title}
              description={t.desc}
              icon={t.icon}
              className="swo-threat-card"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecureWatchOverviewSection;
