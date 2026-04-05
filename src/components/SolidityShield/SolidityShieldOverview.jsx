import React from 'react';
import Link from 'next/link';
import SectionHeader from '../common/SectionHeader';
import CommonCard from '../common/CommonCard';
import { FiSliders, FiGrid, FiShield, FiShieldOff, FiMonitor } from 'react-icons/fi';
import './SolidityShieldOverview.css';

const metrics = [
  { value: '120+', label: 'Organizations Protected' },
  { value: '500+', label: 'Smart Contract Audits' },
  { value: '100%', label: 'Security Track Record' },
  { value: '5,74,710', label: 'Patent Number' }
];

const partners = [
  "ChainGuard", "DeFiVault", "BlockSafe", "TokenShield", "CryptoNet", "WebThree Labs"
];

const threats = [
  {
    title: "Reentrancy exploits",
    desc: "Recursive execution allowing repeated withdrawals before balance updates, draining funds through recursive calls.",
    icon: <FiSliders size={28} />
  },
  {
    title: "Flash loan attacks",
    desc: "Manipulating protocol logic within a single transaction to drain asset pools or skew valuations.",
    icon: <FiGrid size={28} />
  },
  {
    title: "Oracle manipulation",
    desc: "Exploitation of external data inputs affecting contract outcomes and pricing mechanisms.",
    icon: <FiShield size={28} />
  },
  {
    title: "Access control flaws",
    desc: "Improper permissions exposing sensitive functions or administrative privileges to unauthorized actors.",
    icon: <FiShieldOff size={28} />
  }
];

const SolidityShieldOverview = () => {
  return (
    <section className="sso-container">
      {/* Metrics Top Section */}
      <div className="sso-metrics-section">
        <div className="sso-metrics-grid">
          {metrics.map((m, idx) => (
            <div key={idx} className="sso-metric-item">
              <h2 className="sso-metric-val">{m.value}</h2>
              <p className="sso-metric-label">{m.label}</p>
            </div>
          ))}
        </div>
        
        <div className="sso-trust-section">
          <p className="sso-trust-text">Trusted by more than 120 organizations across the blockchain ecosystem</p>
          <div className="sso-trust-badges">
            {partners.map((p, idx) => (
              <span key={idx} className="sso-trust-badge">{p}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Threats Section */}
      <div className="sso-threats-section mt-12">
        <div className="sso-threats-header">
          <SectionHeader 
            label="Threat Landscape" 
            title={<>The Growing Threat Landscape Facing <span className="text-[#00ff88]">Smart Contracts</span></>} 
          />
          <p className="sso-threats-subtitle text-center text-secondary/80 dark:text-[#a0a5b1] max-w-4xl mx-auto -mt-4 mb-8 text-lg">
            Smart contract vulnerabilities continue to be one of the leading causes of financial loss in blockchain ecosystems. As decentralized applications scale, attackers are increasingly targeting flaws in contract logic rather than infrastructure weaknesses.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 justify-center w-full max-w-7xl mx-auto mt-12">
          {threats.map((t, idx) => (
            <CommonCard 
              key={idx}
              title={t.title}
              description={t.desc}
              icon={t.icon}
              className="sso-threat-card"
            />
          ))}
        </div>

        <div className="sso-threats-footer mt-16 max-w-4xl mx-auto text-center">
            <p className="text-secondary/80 dark:text-[#a0a5b1] text-lg mb-8">
                A significant portion of DeFi exploits originate from vulnerabilities that could have been identified before deployment. Without proper auditing, these risks remain hidden until exploited, often within minutes of going live.
            </p>
            <Link href="/solidity-shield-vulnerabilities" className="inline-block text-[#00ff88] hover:text-[#00d2ff] font-semibold transition-colors duration-300">
                See How We Secure Smart Contracts →
            </Link>
            
            <div className="sso-ai-block mt-12 p-6 rounded-xl border border-[#00ff88]/20 bg-[#00ff88]/5">
                <p className="text-[#00ff88] font-medium leading-relaxed italic">
                    "Without smart contract auditing, blockchain applications remain vulnerable to exploits such as reentrancy attacks, flash loan manipulation, and logic flaws that can result in immediate and irreversible financial loss."
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default SolidityShieldOverview;
