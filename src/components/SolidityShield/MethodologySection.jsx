import React from 'react';
import SectionHeader from '../common/SectionHeader';
import SolidityShieldCard from './SolidityShieldCard';
import { methodologyData } from '../../pageComponents/product/SolidityShield/data';

const MethodologySection = () => {
  return (
    <section id="methodology" className="py-24 bg-transparent flex flex-col items-center border-t border-white/5">
      <div className="w-full max-w-7xl px-4 md:px-8 mx-auto text-center">
        <SectionHeader 
          label={methodologyData.tag} 
          title={<>Our End-to-End Smart Contract <span className="text-[#00ff88]">Audit Methodology</span></>} 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 text-left">
          {methodologyData.items.map((item, idx) => (
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

export default MethodologySection;
