import React from 'react';
import SectionHeader from '../common/SectionHeader';
import SolidityShieldCard from './SolidityShieldCard';
import { benefitsData } from '../../pageComponents/product/SolidityShield/data';

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-24 bg-transparent flex flex-col items-center border-t border-white/5">
      <div className="w-full max-w-7xl px-4 md:px-8 mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-secondary dark:text-white mb-16">
          Benefits of Choosing <span className="text-[#00ff88]">Solidity Shield</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {benefitsData.items.map((item, idx) => (
            <SolidityShieldCard 
              key={idx}
              title={item.title}
              description={item.desc}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
