import React from 'react';

const useCasesData = [
    {
        title: "DeFi Platforms",
        icon: "🏦",
        description: "DeFi protocols require constant monitoring due to large liquidity pools. Protect against flash loan attacks, oracle manipulation, and reentrancy exploits."
    },
    {
        title: "Cryptocurrency Exchanges",
        icon: "💱",
        description: "Monitor high transaction volumes and detect abnormal trading or withdrawal behavior in real time across custody and trading infrastructure."
    },
    {
        title: "NFT Marketplaces",
        icon: "🖼️",
        description: "Mitigate risks including wallet compromises, token manipulation, and targeted phishing attacks aimed at draining contract funds."
    },
    {
        title: "Enterprise Deployments",
        icon: "🏢",
        description: "Gain continuous security visibility across permissioned deployments in supply chain, healthcare, finance, and other enterprise sectors."
    }
];

const UseCases = () => {
    return (
        <section className="rtm-uc-new-container">
            <div className="rtm-uc-new-inner">
                <h2 className="rtm-uc-new-title">Industries Protected by <span className="highlight">SecureWatch</span></h2>
                <div className="rtm-uc-new-grid">
                    {useCasesData.map((item, idx) => (
                        <div key={idx} className="rtm-uc-new-card">
                            <div className="rtm-uc-new-icon">{item.icon}</div>
                            <h4 className="rtm-uc-new-card-title">{item.title}</h4>
                            <p className="rtm-uc-new-card-desc">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UseCases;
