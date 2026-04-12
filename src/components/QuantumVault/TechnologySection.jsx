import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { technologyData } from '../../pageComponents/product/QuantumVault/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShieldAlt, 
  faKey, 
  faCloud, 
  faPlug, 
  faCheckCircle 
} from '@fortawesome/free-solid-svg-icons';

const iconMap = {
  shield: faShieldAlt,
  key: faKey,
  cloud: faCloud,
  plug: faPlug,
  'check-circle': faCheckCircle
};

const TechnologySection = () => {
  return (
    <section id="technology" className="py-16 md:py-20 bg-transparent">
      <div className="w-full max-w-7xl px-4 md:px-8 mx-auto">
        <div className="flex flex-col items-center mb-10 md:mb-12">
          <SectionHeader 
            label={technologyData.tag} 
            title={<>Technology Powering <span className="text-[#00ff88]">Quantum Vault</span></>} 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {technologyData.cards.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white dark:bg-[#1e3255] border border-secondary/10 dark:border-white/5 rounded-[20px] p-8 flex flex-col group transition-all duration-300 hover:-translate-y-2 hover:border-[#00ff88]/40 shadow-sm hover:shadow-[0_15px_40px_rgba(0,255,136,0.1)]"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/5 dark:bg-[#1e3255] flex items-center justify-center text-[#00ff88] mb-6 shadow-md group-hover:scale-110 transition-transform">
                <FontAwesomeIcon icon={iconMap[item.icon]} className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-secondary dark:text-white mb-4 group-hover:text-[#00ff88] transition-colors">
                {item.title}
              </h3>
              <p className="text-secondary/70 dark:text-[#a0a5b1] leading-relaxed text-[0.85rem]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-secondary dark:text-white mb-4 text-center">
                {technologyData.standardsTitle.split('Supported')[0]} <span className="text-[#00ff88]">Supported</span>
            </h2>
            <p className="text-lg text-secondary/70 dark:text-[#a0a5b1] text-center max-w-3xl mb-12">
                {technologyData.standardsDesc}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {technologyData.standards.map((std, idx) => (
                    <div key={idx} className="bg-white dark:bg-[#1e3255] border border-[#00ff88]/20 rounded-full px-6 py-3 flex items-center gap-3 group hover:border-[#00ff88]/50 transition-all">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-[#00ff88]" />
                        <span className="text-secondary dark:text-white font-bold">{std.text}</span>
                    </div>
                ))}
            </div>

            <p className="text-secondary/60 dark:text-[#a0a5b1]/60 text-center max-w-2xl italic text-sm">
                {technologyData.footerNote}
            </p>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
