import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { risksData } from '../../pageComponents/product/QuantumVault/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faKey, faLock, faEye, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

const iconMap = {
  key: faKey,
  lock: faLock,
  eye: faEye,
  shield: faShieldAlt
};

const RisksSection = () => {
  return (
    <section id="risks" className="py-16 md:py-20 bg-transparent">
      <div className="w-full max-w-7xl px-4 md:px-8 mx-auto">
        <div className="flex flex-col items-center mb-10 md:mb-12">
          <SectionHeader 
            label={risksData.tag} 
            title={<>The Growing Risks of <span className="text-[#00ff88]">Poor Key Management</span></>} 
          />
          <p className="text-center text-secondary/80 dark:text-[#a0a5b1] max-w-4xl mx-auto -mt-4 mb-4 text-base md:text-lg">
            {risksData.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 md:mb-20">
          {risksData.risks.map((risk, idx) => (
            <div key={idx} className="bg-white dark:bg-[#1e3255] border border-secondary/10 dark:border-white/5 rounded-[20px] p-6 md:p-8 flex flex-col items-center text-center gap-6 group hover:border-[#ff4d4d]/30 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2">
              <div className="text-[#ff4d4d] group-hover:scale-110 transition-transform">
                <FontAwesomeIcon icon={faExclamationTriangle} className="text-3xl md:text-4xl" />
              </div>
              <h3 className="text-lg font-bold text-secondary dark:text-white leading-snug">
                {risk.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center">
            <h4 className="text-xl md:text-2xl font-black text-secondary dark:text-white mb-8 text-center uppercase tracking-wider">
                {risksData.criticalRisksTitle}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
                {risksData.criticalRisks.map((risk, idx) => (
                    <div key={idx} className="bg-white dark:bg-[#1e3255] border border-secondary/10 dark:border-white/5 rounded-[20px] p-6 md:p-8 flex flex-col items-center text-center gap-6 group hover:border-[#ffa500]/30 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2">
                        <div className="text-[#ffa500] group-hover:scale-110 transition-transform">
                            <FontAwesomeIcon icon={iconMap[risk.icon]} className="text-3xl md:text-4xl" />
                        </div>
                        <span className="text-lg font-semibold text-secondary/80 dark:text-white">{risk.text}</span>
                    </div>
                ))}
            </div>
            <div className="mt-12 md:mt-16 text-center space-y-4">
                <p className="text-secondary/60 dark:text-[#a0a5b1]/80 text-base md:text-lg italic">
                    {risksData.footerNote}
                </p>
                <p className="text-[#00ff88] font-black text-lg md:text-2xl uppercase tracking-[0.2em]">
                    {risksData.footerHighlight}
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default RisksSection;
