import React from "react";

const useCasesData = [
  { industry: "DeFi Protocols", focus: "Liquidations, liquidity pools, and yield farms." },
  { industry: "Exchanges", focus: "Deposit/withdrawal anomalies and hot wallet security." },
  { industry: "NFT Platforms", focus: "Minting exploits and unauthorized royalty drain." },
  { industry: "Gaming (GameFi)", focus: "In-game economy manipulation and token exploits." },
  { industry: "Enterprise Web3", focus: "Compliance monitoring and private consortium tracking." }
];

const RTMUseCases = () => {
  return (
    <section className="rtm-uc-container">
      <div className="rtm-uc-inner">
        <h2 className="rtm-section-title">Industries We Protect</h2>
        <div className="rtm-uc-grid">
          {useCasesData.map((uc, i) => (
            <div key={i} className="rtm-uc-card">
              <h4>{uc.industry}</h4>
              <p>{uc.focus}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RTMUseCases;
