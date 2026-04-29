import React from 'react';
import SectionHeader from '../common/SectionHeader';
import CommonCard from '../common/CommonCard';
import { FiLock, FiZap, FiShield, FiHeart } from 'react-icons/fi';

const benefitsData = [
    {
        title: "Proactive Security",
        icon: <FiLock size={28} />,
        highlights: [
            "Identify vulnerabilities before exploitation",
            "Eliminate blind spots in smart contracts",
            "Continuous 24/7 on-chain surveillance"
        ]
    },
    {
        title: "Lightning Speed",
        icon: <FiZap size={28} />,
        highlights: [
            "Sub-second anomaly detection",
            "Real-time alerts via Webhook & Slack",
            "Automated incident response triggers"
        ]
    },
    {
        title: "Exploit Prevention",
        icon: <FiShield size={28} />,
        highlights: [
            "Block malicious transactions mid-flight",
            "Prevent flash loan and reentrancy attacks",
            "Minimize financial loss drastically"
        ]
    },
    {
        title: "Unshakable Trust",
        icon: <FiHeart size={28} />,
        highlights: [
            "Boost user confidence in your platform",
            "Maintain regulatory compliance effortlessly",
            "Enterprise-grade reliability and uptime"
        ]
    }
];

const Benefits = () => {
    return (
        <section className="py-20 flex flex-col items-center">
            <div className="w-full max-w-7xl px-4 md:px-8 mx-auto">
                <div className="mb-12">
                   <SectionHeader 
                     label="Benefits" 
                     title={<>The <span className="text-[#00d2ff]">SecureWatch</span> Advantage</>} 
                   />
                   <p className="text-center text-secondary/80 dark:text-[#a0a5b1] max-w-2xl mx-auto -mt-4 text-lg">
                       Maximize your protocol's resilience with next-generation threat prevention.
                   </p>
                </div>
                
                <div className="flex flex-wrap gap-6 justify-center w-full mt-12">
                    {benefitsData.map((item, idx) => (
                        <CommonCard 
                          key={idx}
                          title={item.title}
                          icon={item.icon}
                        >
                            <ul className="flex flex-col gap-3 mt-2">
                                {item.highlights.map((highlight, index) => (
                                    <li key={index} className="flex items-start text-sm text-secondary/80 dark:text-[#94a3b8]">
                                        <span className="text-[#00d2ff] mr-3 mt-1 text-xs">●</span>
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                        </CommonCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
