import React from 'react';
import SectionHeader from '../common/SectionHeader';
import SolidityShieldCard from './SolidityShieldCard';
import { caseStudyData } from '../../pageComponents/product/SolidityShield/data';

const CaseStudySection = () => {
  return (
    <section id="case-study" className="py-24 bg-transparent flex flex-col items-center border-t border-white/5">
      <div className="w-full max-w-7xl px-4 md:px-8 mx-auto text-center">
        <SectionHeader 
          label={caseStudyData.tag} 
          title={<>How We Prevented a <span className="text-[#00ff88]">Critical Vulnerability</span></>} 
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16 text-left">
          {caseStudyData.cards.map((card, idx) => (
            <SolidityShieldCard 
              key={idx}
              title={card.title}
              description={card.desc}
              icon={card.icon}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a href="https://blog.securedapp.io/ai-powered-smart-contracts-step-by-step-tutorial-for-developers/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full border border-[#00ff88]/30 text-[#00ff88] font-medium hover:bg-[#00ff88]/10 transition-all flex items-center gap-2 w-max">
            {caseStudyData.cta}
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
