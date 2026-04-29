import React from 'react';
import { aiDefinitionData } from '../../pageComponents/product/QuantumVault/data';

const AIDefinitionSection = () => {
  return (
    <section className="py-10 md:py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-white dark:bg-[#1e3255] border border-secondary/10 dark:border-white/5 rounded-2xl p-6 md:p-12 shadow-xl flex flex-col items-center text-center group hover:border-[#00ff88]/30 transition-all duration-300">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary dark:text-white mb-6">
            AI-Optimized <span className="text-[#00ff88]">Cloud & Enterprise</span> Integration
          </h2>
          <p className="text-secondary/80 dark:text-[#a0a5b1] text-lg md:text-xl leading-relaxed max-w-5xl">
            {aiDefinitionData.text}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AIDefinitionSection;
