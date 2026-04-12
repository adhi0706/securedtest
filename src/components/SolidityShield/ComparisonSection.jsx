import React from 'react';
import { FiCheck, FiX, FiMinus } from 'react-icons/fi';
import { comparisonData } from '../../pageComponents/product/SolidityShield/data';
import SectionHeader from '../common/SectionHeader';

const ComparisonSection = () => {
  const getIcon = (val) => {
    if (val === true) return <FiCheck className="text-[#00ff88] text-2xl mx-auto" />;
    if (val === "x") return <FiX className="text-red-500 text-2xl mx-auto" />;
    return <FiMinus className="text-gray-500 text-2xl mx-auto" />;
  };

  return (
    <section id="comparison" className="py-24 bg-transparent flex flex-col items-center border-t border-white/5">
      <div className="w-full max-w-7xl px-4 md:px-8 mx-auto text-center">
        <SectionHeader 
          label="COMPARISON" 
          title={<>How Solidity Shield <span className="text-[#00ff88]">Compares</span></>} 
        />
        
        <div className="w-full max-w-5xl mx-auto flex flex-col gap-4 text-left mt-16">
          {/* Header Row */}
          <div className="hidden md:flex justify-between items-center px-8 py-4 mb-2">
            <div className="w-1/3 text-lg font-semibold text-secondary dark:text-white">Capability</div>
            <div className="w-2/3 flex justify-between">
              <div className="flex-1 text-center text-[#00ff88] font-semibold">Solidity Shield</div>
              <div className="flex-1 text-center text-gray-400 font-semibold">Basic Testing</div>
              <div className="flex-1 text-center text-gray-400 font-semibold">Manual Review</div>
            </div>
          </div>

          {/* Data Rows */}
          {comparisonData.rows.map((row, idx) => (
            <div key={idx} className="bg-white dark:bg-[#1e3255]/40 backdrop-blur-sm border border-white/5 hover:border-white/10 rounded-2xl p-6 md:px-8 md:py-6 flex flex-col md:flex-row items-center justify-between transition-all hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(0,255,136,0.1)]">
              <div className="w-full md:w-1/3 text-secondary dark:text-white text-lg font-medium mb-6 md:mb-0 text-center md:text-left">
                {row.label}
              </div>
              <div className="w-full md:w-2/3 flex justify-between items-center">
                <div className="flex-1 flex flex-col items-center">
                  <span className="md:hidden text-xs text-gray-400 mb-2">Solidity Shield</span>
                  {getIcon(row.ss)}
                </div>
                <div className="flex-1 flex flex-col items-center">
                  <span className="md:hidden text-xs text-gray-400 mb-2">Basic Testing</span>
                  {getIcon(row.basic)}
                </div>
                <div className="flex-1 flex flex-col items-center">
                  <span className="md:hidden text-xs text-gray-400 mb-2">Manual Review</span>
                  {getIcon(row.manual)}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a href="https://www.youtube.com/watch?v=9-hO4r0Mf-4&t=1s" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full border border-white/20 text-secondary dark:text-white font-medium hover:bg-white/5 transition-all flex items-center gap-2 w-max">
            {comparisonData.cta} <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
