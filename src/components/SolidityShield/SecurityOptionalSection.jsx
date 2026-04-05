import React from 'react';
import CommonCard from '../common/CommonCard';
import { optionalSectionData } from '../../pageComponents/product/SolidityShield/data';

const SecurityOptionalSection = () => {
  return (
    <section id="security-optional" className="py-20 bg-transparent flex flex-col items-center">
      <div className="w-full max-w-7xl px-4 md:px-8 mx-auto text-center">
        <h2 className="text-4xl font-bold text-secondary dark:text-white mb-16 px-4">
          Why Smart Contract Security Is <span className="text-[#00ff88]">No Longer Optional</span>
        </h2>
        
        <div className="flex flex-wrap gap-6 justify-center w-full mt-12">
          {optionalSectionData.cards.map((card, idx) => (
            <CommonCard 
              key={idx}
              title={card.title}
              description={card.desc}
              icon={card.icon}
              className="text-left"
            />
          ))}
        </div>

        <div className="mt-16 text-center">
            <a href="https://securedapp.io/solidity-shield-scan/auth" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-[#00ff88]/30 text-[#00ff88] py-3 px-6 rounded-lg font-semibold hover:bg-[#00ff88]/10 transition-all">
                {optionalSectionData.footerLink} <span>&rarr;</span>
            </a>
        </div>
      </div>
    </section>
  );
};

export default SecurityOptionalSection;
