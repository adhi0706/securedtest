import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';

const faqsMerged = [
  {
    q: "What is blockchain threat monitoring?",
    a: "Blockchain threat monitoring is the continuous analysis of blockchain transactions, smart contract interactions, and wallet activity to identify malicious behavior and potential security risks. Monitoring systems observe how contracts are used on-chain and detect abnormal patterns such as suspicious token transfers, repeated contract calls, or unusual liquidity movements. By analyzing these events in real time, monitoring platforms help security teams identify exploit attempts early, investigate suspicious activity, and take action before attackers can drain funds or manipulate decentralized protocols."
  },
  {
    q: "How is monitoring different from a smart contract audit?",
    a: "A smart contract audit is a security review performed before deployment to identify vulnerabilities in the contract code. Security researchers examine the contract logic, identify potential weaknesses, and recommend fixes before the protocol goes live. Monitoring, however, occurs after deployment and focuses on live blockchain activity. Even well-audited protocols can still face attacks through economic manipulation or new exploit techniques. Continuous monitoring helps detect suspicious behavior during real-world operation and provides ongoing protection for deployed smart contracts."
  },
  {
    q: "What types of attacks can monitoring detect?",
    a: "Blockchain monitoring systems can detect several categories of attacks that target decentralized platforms. These include flash loan attacks that manipulate liquidity pools, oracle manipulation affecting token price feeds, governance attacks that attempt to influence protocol decisions, and bridge exploits involving cross-chain asset transfers. Monitoring tools analyze transaction sequences and contract interactions to identify abnormal patterns. By detecting unusual activity early, security teams gain valuable time to investigate potential threats and implement mitigation strategies before significant losses occur."
  },
  {
    q: "How quickly can SecureWatch detect threats?",
    a: "SecureWatch analyzes blockchain transactions immediately after they appear on the network. The monitoring system evaluates transaction flows, smart contract calls, and asset movements to determine whether behavior deviates from established protocol patterns. When abnormal activity is detected, alerts are generated within seconds and sent to security teams through configured notification channels. This rapid detection allows teams to respond quickly, investigate suspicious transactions, and potentially limit the impact of exploit attempts or unauthorized protocol interactions."
  },
  {
    q: "Which blockchain networks are supported?",
    a: "SecureWatch currently supports several major blockchain ecosystems including Ethereum, Polygon, BNB Chain, Arbitrum, and Optimism. These networks host a large portion of decentralized finance activity and smart contract deployments. The monitoring architecture is designed to be flexible and can integrate additional blockchain networks depending on protocol requirements. By supporting multiple networks, SecureWatch allows organizations to monitor smart contracts and digital assets across their entire blockchain infrastructure rather than managing separate monitoring tools for each network."
  },
  {
    q: "Does SecureWatch monitor blockchain activity continuously?",
    a: "Yes. SecureWatch operates continuously and monitors blockchain activity around the clock. Because blockchain networks operate twenty-four hours a day without centralized control, attacks can occur at any time. Continuous monitoring ensures that suspicious behavior is detected as soon as it appears on-chain. The system automatically analyzes new transactions, smart contract calls, and wallet interactions, allowing security teams to receive alerts immediately when abnormal activity is identified."
  },
  {
    q: "Can monitoring prevent flash loan attacks?",
    a: "Monitoring systems cannot always stop an attack before it begins, but they play a critical role in identifying suspicious activity associated with flash loan exploits. Flash loan attacks typically involve large borrowing transactions followed by rapid protocol interactions. Monitoring platforms analyze these patterns and detect abnormal sequences of transactions. Early detection allows security teams to review activity, implement mitigation measures, or temporarily pause vulnerable components before attackers can complete large-scale financial manipulation."
  },
  {
    q: "Can SecureWatch help investigate security incidents?",
    a: "Yes. SecureWatch provides detailed transaction analytics and historical monitoring data that help security teams investigate suspicious events. When abnormal activity is detected, the platform records the sequence of transactions, contract calls, and wallet interactions associated with the event. Security teams can analyze these records to understand how an exploit attempt occurred and determine the scope of the incident. These insights are valuable for improving future security policies and strengthening the protocol's overall security posture."
  },
  {
    q: "Is monitoring necessary if a protocol already completed an audit?",
    a: "Yes. Smart contract audits are essential for identifying vulnerabilities before deployment, but they represent a snapshot of security at a specific point in time. After launch, protocols interact with external systems, user wallets, and changing market conditions. New attack strategies can emerge that were not anticipated during the audit process. Continuous monitoring provides ongoing visibility into protocol activity and helps detect suspicious behavior as it occurs in the live blockchain environment."
  },
  {
    q: "How does SecureWatch identify abnormal activity?",
    a: "SecureWatch uses behavioral analysis models that examine historical blockchain transaction data to establish a baseline of normal protocol behavior. These models track patterns such as transaction frequency, asset movement flows, and contract interaction sequences. When new activity deviates significantly from the established baseline, the system flags it as potentially suspicious. By combining statistical analysis with machine learning techniques, SecureWatch can detect subtle anomalies that may indicate exploit attempts or malicious activity."
  },
  {
    q: "Can monitoring support DeFi protocols?",
    a: "Yes. SecureWatch is specifically designed to monitor complex DeFi environments where multiple smart contracts interact with liquidity pools, lending markets, and governance systems. DeFi platforms often involve automated financial logic that can be manipulated through sophisticated attack techniques. Monitoring tools analyze these interactions in real time, helping security teams detect abnormal liquidity movements, suspicious lending activity, and exploit patterns that could threaten the stability of decentralized financial protocols."
  },
  {
    q: "Does SecureWatch support enterprise security workflows?",
    a: "Yes. SecureWatch integrates with enterprise monitoring systems and operational security workflows. Security teams can configure alerts to be delivered through messaging platforms, incident management tools, or security operations dashboards. This integration allows organizations to incorporate blockchain monitoring into their existing security infrastructure. By aligning blockchain monitoring with established operational processes, enterprises can respond more effectively to security events affecting their decentralized systems."
  },
  {
    q: "How long does onboarding take?",
    a: "The onboarding process for SecureWatch is typically straightforward once the relevant smart contract addresses and protocol components are identified. Security teams configure which contracts, wallets, and transaction flows should be monitored. After configuration, the system begins analyzing blockchain activity and building behavioral baselines for the protocol. The exact onboarding timeline may vary depending on protocol complexity, but many deployments can begin monitoring activity within a relatively short setup period."
  },
  {
    q: "Can monitoring improve regulatory compliance?",
    a: "Monitoring solutions can help organizations maintain transparency and accountability within blockchain environments. By recording transaction activity and detecting suspicious behavior, monitoring platforms create detailed logs that can support compliance reviews and internal risk assessments. These records may also assist organizations in demonstrating security controls to regulators, partners, or auditors who require visibility into how digital asset systems are protected against financial crime and security threats."
  }
];

const SecureWatchFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="rtm-swfaq-container">
      <div className="rtm-swfaq-inner">
        <SectionHeader 
          label="FAQs" 
          title={<>Frequently Asked Questions About <span className="text-[#00ff88]">Blockchain Threat Monitoring</span></>} 
        />
        
        <div className="rtm-swfaq-list mt-8">
          {faqsMerged.map((faq, i) => (
            <div 
              key={i} 
              className={`rtm-swfaq-item ${activeIndex === i ? 'active' : ''}`}
            >
              <div className="rtm-swfaq-question" onClick={() => toggleFAQ(i)}>
                <h4>{faq.q}</h4>
                <span className="rtm-swfaq-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </div>
              <div 
                className="rtm-swfaq-answer" 
                style={{
                  maxHeight: activeIndex === i ? '1000px' : '0',
                  opacity: activeIndex === i ? 1 : 0,
                  overflow: 'hidden',
                  transition: 'all 0.3s ease-in-out'
                }}
              >
                <div className="rtm-swfaq-answer-inner">
                  <p>{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecureWatchFAQ;
