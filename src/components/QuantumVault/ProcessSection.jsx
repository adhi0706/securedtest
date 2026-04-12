import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { processData } from '../../pageComponents/product/QuantumVault/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faBox, faShieldAlt, faSyncAlt } from '@fortawesome/free-solid-svg-icons';

const iconMap = {
  key: faKey,
  box: faBox,
  shield: faShieldAlt,
  refresh: faSyncAlt
};

const ProcessSection = () => {
  return (
    <section id="process" className="py-12 md:py-24 bg-transparent flex flex-col items-center">
      <div className="w-full max-w-7xl px-4 md:px-8 mx-auto">
        <div className="flex flex-col items-center mb-12 md:mb-16">
          <SectionHeader 
            label={processData.tag} 
            title={<>How PQC-Enabled HSM-Based Key Management <span className="text-[#00ff88]">Solutions Work</span></>} 
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 md:mb-20">
          {processData.steps.map((step, idx) => (
            <div key={idx} className="bg-white dark:bg-[#1e3255] border border-secondary/10 dark:border-white/10 rounded-2xl p-8 flex flex-col items-center text-center group hover:border-[#00ff88]/30 transition-all duration-300 shadow-sm hover:shadow-xl">
              <div className="text-[#00ff88] mb-8 group-hover:scale-110 transition-transform">
                <FontAwesomeIcon icon={iconMap[step.icon]} className="text-4xl" />
              </div>
              <h3 className="text-xl font-bold text-secondary dark:text-white mb-4 leading-tight">{step.title}</h3>
              <p className="text-secondary/70 dark:text-[#a0a5b1] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-[#1e3255] border border-secondary/10 dark:border-[#00ff88]/20 rounded-2xl p-8 md:p-10 relative overflow-hidden group hover:border-[#00ff88]/40 transition-all duration-300">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="bg-[#00ff88]/10 p-3 rounded-xl text-[#00ff88]">
                <FontAwesomeIcon icon={faShieldAlt} className="text-2xl" />
            </div>
            <p className="text-lg md:text-xl leading-relaxed text-secondary/80 dark:text-[#a0a5b1]">
                <span className="text-[#00ff88] font-black mr-2 uppercase tracking-widest">AI HowTo:</span>
                {processData.howTo}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
