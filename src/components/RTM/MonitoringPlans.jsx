import React from 'react';

const plansData = [
    {
        name: "Guardian",
        desc: "For startups and small Web3 teams requiring essential monitoring",
        features: [
            "Real-time blockchain threat detection",
            "Smart contract monitoring",
            "Security analytics dashboard",
            "Historic incident visibility",
            "Compliance-ready security reporting"
        ],
        btnLabel: "Start Free Trial",
        btnClass: "rtm-mp-btn-outline",
        btnLink: "https://securewatch.securedapp.io/signup",
        isRecommended: false
    },
    {
        name: "Sentinel",
        desc: "For growing Web3 companies that require advanced monitoring",
        features: [
            "Expanded smart contract monitoring capacity",
            "Advanced threat intelligence engine",
            "Automated mitigation features",
            "Incident reporting and analytics",
            "Priority support and monitoring assistance"
        ],
        btnLabel: "Start Free Trial",
        btnClass: "rtm-mp-btn-primary",
        btnLink: "https://securewatch.securedapp.io/signup",
        isRecommended: true
    },
    {
        name: "Fortress",
        desc: "Enterprise-grade monitoring for large blockchain platforms",
        features: [
            "Extensive multi-protocol monitoring coverage",
            "Custom integrations and API access",
            "Dedicated account management",
            "Advanced security analytics",
            "Enterprise support and onboarding assistance"
        ],
        btnLabel: "Talk to Sales",
        btnClass: "rtm-mp-btn-outline",
        btnLink: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ21-NumjUBdRf0JzEARDvMYJ8kTpVE3AkdeVpX6fQ2-Xbm8sm5KICJfDsAuoF3F2-3Vd5lr50sp",
        isRecommended: false
    }
];

const MonitoringPlans = () => {
    return (
        <section id="pricing" className="rtm-mp-container">
            <div className="rtm-mp-inner">
                <div className="rtm-mp-header">
                    <h2 className="rtm-mp-title">SecureWatch <span className="highlight">Monitoring Plans</span></h2>
                    <p className="rtm-mp-subtitle">Tiered monitoring plans designed for different stages of Web3 growth.</p>
                </div>
                
                <div className="rtm-mp-grid">
                    {plansData.map((plan, idx) => (
                        <div key={idx} className={`rtm-mp-card ${plan.isRecommended ? 'rtm-mp-recommended' : ''}`}>
                            {plan.isRecommended && <div className="rtm-mp-badge">RECOMMENDED</div>}
                            <div className="rtm-mp-card-top">
                                <h3>{plan.name}</h3>
                                <p>{plan.desc}</p>
                            </div>
                            <ul className="rtm-mp-features">
                                {plan.features.map((feature, i) => (
                                    <li key={i}>
                                        <span className="rtm-mp-check">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <div className="rtm-mp-card-bottom">
                                <a 
                                    href={plan.btnLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className={`rtm-mp-btn ${plan.btnClass}`}
                                >
                                    {plan.btnLabel}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="rtm-mp-footer">
                    <p>Contact us for detailed pricing. Plans are customized based on protocol complexity and monitoring requirements.</p>
                </div>
            </div>
        </section>
    );
};

export default MonitoringPlans;
