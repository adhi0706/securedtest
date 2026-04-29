import React from 'react';
import SectionHeader from '../common/SectionHeader';
import SolidityShieldCard from './SolidityShieldCard';
import { processData } from '../../pageComponents/product/SolidityShield/data';

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 bg-transparent flex flex-col items-center">
      <div className="w-full max-w-7xl px-4 md:px-8 mx-auto">
        <SectionHeader 
          label={processData.tag} 
          title={<>How <span className="text-[#00ff88]">Solidity Shield</span> Works</>} 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {processData.steps.map((step, idx) => (
            <SolidityShieldCard 
              key={idx}
              title={step.title}
              description={step.desc}
              icon={step.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
