import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { differentiatorData } from '../../pageComponents/product/QuantumVault/data';

const DifferentiatorSection = () => {
  return (
    <section id="differentiator" className="py-16 md:py-20 bg-transparent">
      <div className="w-full max-w-7xl px-4 md:px-8 mx-auto">
        <div className="flex flex-col items-center mb-10 md:mb-12 text-center">
          <SectionHeader 
            label={differentiatorData.tag} 
            title={<>What Makes <span className="text-[#00ff88]">Quantum Vault Different</span></>} 
          />
          <div className="max-w-4xl mx-auto space-y-4 -mt-4">
            <p className="text-secondary/70 dark:text-[#a0a5b1] text-lg leading-relaxed">
                {differentiatorData.description}
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {differentiatorData.cards.map((card, idx) => (
            <div key={idx} className="bg-white dark:bg-[#1e3255] border border-secondary/10 dark:border-white/5 rounded-[20px] p-8 md:p-10 group transition-all duration-300 hover:-translate-y-2 hover:border-[#00ff88]/40 shadow-sm hover:shadow-[0_15px_40px_rgba(0,255,136,0.1)]">
              <h3 className="text-xl font-bold text-secondary dark:text-white mb-4 group-hover:text-[#00ff88] transition-colors">{card.title}</h3>
              <p className="text-secondary/70 dark:text-[#a0a5b1] leading-relaxed text-[0.95rem]">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorSection;
