import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { timingData } from '../../pageComponents/product/QuantumVault/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const TimingSection = () => {
  return (
    <section id="timing" className="py-16 md:py-20 bg-transparent border-t border-secondary/5 dark:border-white/5">
      <div className="w-full max-w-7xl px-4 md:px-8 mx-auto">
        <div className="flex flex-col items-center mb-10 md:mb-12">
          <SectionHeader 
            label={timingData.tag} 
            title={<>When Should You Implement <span className="text-[#00ff88]">HSM-Based Key Management?</span></>} 
          />
          <p className="mt-4 text-lg text-secondary/70 dark:text-[#a0a5b1] text-center max-w-3xl">
            {timingData.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white dark:bg-[#1e3255] border border-secondary/10 dark:border-white/5 rounded-[20px] p-8 md:p-12 shadow-xl hover:border-[#00ff88]/20 transition-all duration-300">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {timingData.list.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4 group">
                <FontAwesomeIcon icon={faCheckCircle} className="text-[#00ff88] mt-1 text-xl shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-secondary dark:text-white font-bold leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          
          <div className="mt-12 pt-8 border-t border-secondary/10 dark:border-white/10 text-center">
            <p className="text-secondary/60 dark:text-[#a0a5b1]/60 italic">
              {timingData.footer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimingSection;
