import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { whatIsHSMData } from '../../pageComponents/product/QuantumVault/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faLock, faBox, faKey, faCheckCircle, faCheck } from '@fortawesome/free-solid-svg-icons';

const iconMap = {
  shield: faShieldAlt,
  box: faBox,
  lock: faLock,
  key: faKey
};

const WhatIsHSMSection = () => {
  return (
    <section id="what-is-hsm" className="py-16 md:py-20 bg-transparent">
      <div className="w-full max-w-7xl px-4 md:px-8 mx-auto flex flex-col items-center">
        <SectionHeader 
            label={whatIsHSMData.tag} 
            title={whatIsHSMData.title} 
        />
        
        {/* Main Definition Block */}
        <div className="mt-12 w-full max-w-5xl group">
          <div className="bg-white dark:bg-[#1e3255] border border-secondary/10 dark:border-white/5 rounded-[20px] p-10 md:p-12 text-center shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#00ff88]/30 hover:shadow-[0_15px_40px_rgba(0,255,136,0.1)]">
            <p className="text-xl md:text-2xl text-secondary dark:text-white leading-relaxed font-bold italic">
              {whatIsHSMData.description}
            </p>
          </div>
        </div>

        {/* Comparison Section (Screenshot 2 Top) */}
        <div className="mt-20 w-full flex flex-col items-center">
            <p className="text-secondary/60 dark:text-[#a0a5b1]/60 font-bold mb-10 text-center uppercase tracking-widest text-sm">
                {whatIsHSMData.comparisonLabel}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                {whatIsHSMData.comparisonCards.map((card, idx) => (
                    <div key={idx} className="bg-white dark:bg-[#1e3255] border border-secondary/10 dark:border-white/5 rounded-[20px] p-8 flex flex-col items-center text-center group transition-all duration-300 hover:-translate-y-1 hover:border-[#00ff88]/30 shadow-md">
                        <div className="text-[#00ff88] mb-6 group-hover:scale-110 transition-transform">
                            <FontAwesomeIcon icon={iconMap[card.icon]} className="text-2xl" />
                        </div>
                        <h4 className="text-sm font-bold text-secondary dark:text-white leading-tight">
                            {card.title}
                        </h4>
                    </div>
                ))}
            </div>
        </div>

        {/* Usage Section (Screenshot 2 Middle) */}
        <div className="mt-20 w-full flex flex-col items-center">
            <p className="text-secondary/60 dark:text-[#a0a5b1]/60 font-bold mb-8 text-center uppercase tracking-widest text-sm">
                {whatIsHSMData.usageLabel}
            </p>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
                {whatIsHSMData.usageList.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 group">
                        <div className="w-5 h-5 rounded-full bg-[#00ff88]/10 flex items-center justify-center">
                            <FontAwesomeIcon icon={faCheck} className="text-[#00ff88] text-[10px]" />
                        </div>
                        <span className="text-secondary dark:text-white font-bold text-sm group-hover:text-[#00ff88] transition-colors">{item}</span>
                    </div>
                ))}
            </div>
        </div>

        {/* Capabilities Section (Screenshot 2 Bottom) */}
        <div className="mt-24 w-full flex flex-col items-center">
            <h3 className="text-2xl md:text-3xl font-black text-secondary dark:text-white mb-10 text-center">
                {whatIsHSMData.capabilitiesTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6 w-full max-w-5xl">
                {whatIsHSMData.capabilitiesList.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 group">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-[#00ff88] mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="text-secondary/80 dark:text-[#a0a5b1] font-bold text-sm leading-relaxed">
                            {item}
                        </span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsHSMSection;
