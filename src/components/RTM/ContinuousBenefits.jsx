import React from 'react';
import SectionHeader from '../common/SectionHeader';

const bcbItems = [
    "Early detection of potential security threats",
    "Reduced financial losses from exploit attempts",
    "Improved user trust and platform reputation",
    "Faster incident detection and response",
    "Enhanced security visibility across decentralized ecosystems"
];

const ContinuousBenefits = () => {
    return (
        <section className="rtm-bcb-container">
            <div className="rtm-bcb-inner">
                <SectionHeader 
                  label="Value" 
                  title={<>Benefits of Continuous <span className="text-[#00ff88]">Blockchain Monitoring</span></>} 
                />
                <div className="rtm-bcb-list mt-8">
                    {bcbItems.map((item, idx) => (
                        <div key={idx} className="rtm-bcb-item">
                            <div className="rtm-bcb-icon-box">
                                <span className="rtm-bcb-check">✓</span>
                            </div>
                            <span className="rtm-bcb-text">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContinuousBenefits;
