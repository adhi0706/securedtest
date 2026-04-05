import React from 'react';
import SolidityShieldCard from './SolidityShieldCard';
import { workflowData } from '../../pageComponents/product/SolidityShield/data';

const WorkflowSection = () => {
  return (
    <section id="workflow" className="py-24 bg-transparent flex flex-col items-center border-t border-white/5 pb-32">
      <div className="w-full max-w-7xl px-4 md:px-8 mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-secondary dark:text-white mb-16">
          Seamless Integration with Your <br className="hidden md:block" /><span className="text-[#00ff88]">Development Workflow</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-16">
          {workflowData.cards.map((card, idx) => (
            <SolidityShieldCard 
              key={idx}
              title={card.title}
              description={card.desc}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
