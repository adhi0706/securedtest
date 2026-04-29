import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { protectionData } from '../../pageComponents/product/QuantumVault/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faUserSlash, faLockOpen, faGavel, faUnlock } from '@fortawesome/free-solid-svg-icons';

const iconMap = {
  warning: faShieldAlt,
  "user-slash": faUserSlash,
  "lock-open": faLockOpen,
  gavel: faGavel,
  unlocked: faUnlock
};

const ProtectionSection = () => {
  return (
    <section id="protection" className="py-16 md:py-20 bg-transparent">
      <div className="w-full max-w-7xl px-4 md:px-8 mx-auto">
        <div className="flex flex-col items-center mb-10 md:mb-12">
          <SectionHeader 
            label={protectionData.tag} 
            title={<>Key Risks <span className="text-[#00ff88]">We Prevent</span></>} 
          />
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {protectionData.risks.map((risk, idx) => (
            <div 
              key={idx} 
              className={`bg-white dark:bg-[#1e3255] border border-secondary/10 dark:border-white/5 rounded-[20px] p-8 flex flex-col items-center text-center group transition-all duration-300 hover:-translate-y-2 hover:border-[#ff4d4d]/40 shadow-sm hover:shadow-[0_15px_40px_rgba(255,77,77,0.1)] w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-2rem)]`}
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/5 dark:bg-[#1e3255] flex items-center justify-center text-[#ff4d4d] mb-6 shadow-md group-hover:scale-110 transition-transform">
                <FontAwesomeIcon icon={iconMap[risk.icon]} className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-secondary dark:text-white mb-4 group-hover:text-[#ff4d4d] transition-colors leading-tight">{risk.title}</h3>
              <p className="text-secondary/70 dark:text-[#a0a5b1] leading-relaxed text-[0.95rem]">
                {risk.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProtectionSection;
