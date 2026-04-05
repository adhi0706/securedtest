import React from 'react';
import SectionHeader from '../common/SectionHeader';
import SolidityShieldCard from './SolidityShieldCard';
import { keyFeaturesData } from '../../pageComponents/product/SolidityShield/data';

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-transparent flex flex-col items-center border-t border-white/5">
      <div className="w-full max-w-7xl px-4 md:px-8 mx-auto">
        <SectionHeader 
          label={keyFeaturesData.tag} 
          title={<>Key Features of <span className="text-[#00ff88]">Solidity Shield</span></>} 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 text-left">
          {keyFeaturesData.features.map((feature, idx) => (
            <SolidityShieldCard 
              key={idx}
              title={feature.title}
              description={feature.desc}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
