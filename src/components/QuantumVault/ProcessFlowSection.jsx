import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { processFlowData } from '../../pageComponents/product/QuantumVault/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSearch, 
  faKey, 
  faBox, 
  faSync, 
  faChartBar 
} from '@fortawesome/free-solid-svg-icons';

const iconMap = {
  search: faSearch,
  key: faKey,
  box: faBox,
  sync: faSync,
  'chart-bar': faChartBar
};

const ProcessFlowSection = () => {
  return (
    <section id="process-flow" className="py-16 md:py-20 bg-transparent">
      <div className="w-full max-w-7xl px-4 md:px-8 mx-auto">
        <div className="flex flex-col items-center mb-10 md:mb-12">
          <SectionHeader 
            label={processFlowData.tag} 
            title={<>Our End-to-End <span className="text-[#00ff88]">Key Management Process</span></>} 
          />
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {processFlowData.steps.map((step, idx) => (
            <div 
              key={idx} 
              className="bg-white dark:bg-[#1e3255] border border-secondary/10 dark:border-white/5 rounded-[20px] p-8 flex flex-col group transition-all duration-300 hover:-translate-y-2 hover:border-[#00ff88]/40 shadow-sm hover:shadow-[0_15px_40px_rgba(0,255,136,0.1)] w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-2rem)]"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/5 dark:bg-[#1e3255] flex items-center justify-center text-[#00ff88] mb-6 shadow-md group-hover:scale-110 transition-transform">
                <FontAwesomeIcon icon={iconMap[step.icon]} className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-secondary dark:text-white mb-4 group-hover:text-[#00ff88] transition-colors leading-tight">
                {step.title}
              </h3>
              <p className="text-secondary/70 dark:text-[#a0a5b1] leading-relaxed text-[0.95rem]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessFlowSection;
