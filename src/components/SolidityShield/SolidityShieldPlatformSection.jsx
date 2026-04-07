import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { platformData } from '../../pageComponents/product/SolidityShield/data';

const SolidityShieldPlatformSection = () => {
  return (
    <section id="platform" className="py-20 px-6 bg-transparent flex flex-col items-center">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        {/* Left Column */}
        <div className="flex-1">
          <SectionHeader 
            label={platformData.tag} 
            title={<>What Is <span className="text-[#00ff88]">Solidity Shield?</span></>} 
          />
          <div className="text-gray-600 dark:text-[#a0a5b1] text-lg leading-relaxed mt-6 space-y-6 max-w-2xl">
            <p>{platformData.description1}</p>
            <p>{platformData.description2}</p>
          </div>
        </div>

        {/* Right Column - Stat Cards */}
        <div className="flex-1 w-full max-w-md space-y-4">
          {platformData.stats.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-6 bg-white dark:bg-[#1e3255]/50 border border-white/5 rounded-2xl p-6 hover:border-[#00ff88]/30 transition-all group">
              <div className="w-14 h-14 rounded-xl bg-white dark:bg-[#1e3255] flex items-center justify-center text-[#00ff88] group-hover:scale-110 transition-transform shadow-lg">
                {stat.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-secondary dark:text-white">{stat.value}</span>
                <span className="text-gray-600 dark:text-[#a0a5b1] text-sm font-medium">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolidityShieldPlatformSection;
