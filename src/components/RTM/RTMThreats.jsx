import React from "react";

const threatsData = [
  {
    title: "Flash Loan Attacks",
    description: "Exploiting uncollateralized loans to manipulate markets and drain asset pools instantly."
  },
  {
    title: "Oracle Manipulation",
    description: "Tampering with price feeds to execute trades at highly skewed, artificial prices."
  },
  {
    title: "Reentrancy Attacks",
    description: "Repeatedly calling a vulnerable contract function before the previous execution completes."
  },
  {
    title: "Governance Exploits",
    description: "Malicious actors accumulating voting power to pass self-serving proposals."
  }
];

const RTMThreats = () => {
  return (
    <section className="rtm-threats-container">
      <div className="rtm-threats-inner">
        <div className="rtm-section-header">
          <h2>Security Threats in Web3</h2>
          <p>The decentralized ecosystem is evolving, but so are the risks. Without active monitoring, your protocols remain exposed to devastating attacks.</p>
        </div>
        <div className="rtm-threats-grid">
          {threatsData.map((threat, index) => (
            <div key={index} className="rtm-threat-card">
              <div className="rtm-threat-icon">⚠️</div>
              <h3>{threat.title}</h3>
              <p>{threat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RTMThreats;
