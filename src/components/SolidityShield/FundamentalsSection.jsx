import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { fundamentalsData } from '../../pageComponents/product/SolidityShield/data';

const FundamentalsSection = () => {
  return (
    <section id="fundamentals" className="py-20 px-6 bg-transparent flex flex-col items-center">
      <div className="w-full max-w-7xl mx-auto">
        <div className="mb-12">
            <SectionHeader 
            label={fundamentalsData.tag} 
            title={""} 
            />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold text-secondary dark:text-white mb-6">
              {fundamentalsData.leftColumn.title}
            </h2>
            <div className="text-gray-600 dark:text-[#a0a5b1] text-lg leading-relaxed mb-8 space-y-4">
              <p>{fundamentalsData.leftColumn.contentLine1}</p>
              <p>{fundamentalsData.leftColumn.contentLine2}</p>
            </div>
            <ul className="space-y-4">
              {fundamentalsData.leftColumn.items.map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-secondary dark:text-white text-lg">
                  <div className="w-10 h-10 rounded-lg bg-white dark:bg-[#1e3255] flex items-center justify-center text-[#00ff88]">
                    {item.icon}
                  </div>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold text-secondary dark:text-white mb-6">
              What Is Smart Contract <span className="text-[#00ff88]">Security & Auditing?</span>
            </h2>
            <div className="text-gray-600 dark:text-[#a0a5b1] text-lg leading-relaxed mb-8">
              <p>{fundamentalsData.rightColumn.content}</p>
            </div>
            <ul className="space-y-4">
              {fundamentalsData.rightColumn.items.map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-secondary dark:text-white text-lg">
                  <div className="w-10 h-10 rounded-lg bg-white dark:bg-[#1e3255] flex items-center justify-center text-[#00ff88]">
                    {item.icon}
                  </div>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FundamentalsSection;
