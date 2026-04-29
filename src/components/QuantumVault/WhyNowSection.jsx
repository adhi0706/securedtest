import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { whyNowData } from '../../pageComponents/product/QuantumVault/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faFileAlt, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

const iconMap = {
  dollar: faDollarSign,
  file: faFileAlt,
  software: faShieldAlt
};

const WhyNowSection = () => {
    return (
        <section id="why-now" className="py-16 md:py-20 bg-transparent flex flex-col items-center">
            <div className="w-full max-w-7xl px-4 md:px-8 mx-auto flex flex-col items-center">
                <SectionHeader 
                    label={whyNowData.tag} 
                    title={whyNowData.title} 
                />
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 w-full">
                    {whyNowData.cards.map((card, idx) => (
                        <div key={idx} className="bg-white dark:bg-[#1e3255] border border-secondary/10 dark:border-white/5 rounded-[20px] p-8 flex flex-col group transition-all duration-300 hover:-translate-y-2 hover:border-[#00ff88]/30 hover:shadow-[0_15px_40px_rgba(0,255,136,0.1)]">
                            <div className="w-12 h-12 rounded-xl bg-secondary/5 dark:bg-white/5 flex items-center justify-center text-[#00ff88] mb-6 group-hover:scale-110 transition-transform">
                                <FontAwesomeIcon icon={iconMap[card.icon]} className="text-xl" />
                            </div>
                            <h3 className="text-xl font-bold text-secondary dark:text-white mb-4 group-hover:text-[#00ff88] transition-colors">
                                {card.title}
                            </h3>
                            <p className="text-secondary/70 dark:text-[#a0a5b1] leading-relaxed text-sm">
                                {card.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-[#00ff88] font-black text-lg md:text-xl uppercase tracking-[0.1em] italic opacity-90">
                        {whyNowData.footer}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WhyNowSection;
