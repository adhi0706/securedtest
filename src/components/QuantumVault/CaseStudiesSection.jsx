import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { caseStudiesData } from '../../pageComponents/product/QuantumVault/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="py-16 md:py-20 bg-transparent">
      <div className="w-full max-w-7xl px-4 md:px-8 mx-auto">
        <div className="flex flex-col items-center mb-10 md:mb-12">
          <SectionHeader 
            label={caseStudiesData.tag} 
            title={<>Success <span className="text-[#00ff88]">Stories</span></>} 
          />
        </div>

        <div className="flex flex-col gap-8 md:gap-12">
          {caseStudiesData.studies.map((study, idx) => (
            <div key={idx} className="bg-white dark:bg-[#1e3255] border border-secondary/10 dark:border-white/5 rounded-[20px] p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:border-[#00ff88]/30">
              <h3 className="text-2xl md:text-3xl font-black text-secondary dark:text-white mb-10 group-hover:text-[#00ff88] transition-colors">
                {study.title.split('\u2014')[0]} <span className="text-[#a0a5b1] dark:text-[#a0a5b1]/60 font-medium md:mx-4 hidden md:inline">|</span> <span className="text-[#00ff88]">{study.title.split('\u2014')[1]}</span>
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Challenge */}
                <div className="flex flex-col">
                  <h4 className="text-xl font-bold text-secondary dark:text-white mb-6 flex items-center gap-3">
                    <span className="w-8 h-1 bg-[#00ff88] rounded-full"></span>
                    The Challenge
                  </h4>
                  <p className="text-secondary/80 dark:text-[#a0a5b1] text-lg leading-relaxed">
                    {study.challenge}
                  </p>
                </div>

                {/* Approach */}
                <div className="flex flex-col">
                  <h4 className="text-xl font-bold text-secondary dark:text-white mb-6 flex items-center gap-3">
                    <span className="w-8 h-1 bg-[#00ff88] rounded-full"></span>
                    Our Approach
                  </h4>
                  <p className="text-secondary/80 dark:text-[#a0a5b1] text-lg leading-relaxed mb-6">
                    {study.approach}
                  </p>
                  <p className="text-sm font-bold text-[#00ff88] uppercase tracking-widest mb-4">Key Steps:</p>
                  <ul className="space-y-4">
                    {study.steps.map((step, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-3 text-secondary/70 dark:text-[#a0a5b1]/80">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-[#00ff88] mt-1 shrink-0" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcome */}
                <div className="flex flex-col">
                  <h4 className="text-xl font-bold text-secondary dark:text-white mb-6 flex items-center gap-3">
                    <span className="w-8 h-1 bg-[#00ff88] rounded-full"></span>
                    The Outcome
                  </h4>
                  <ul className="space-y-4 mb-8">
                    {study.outcomes.map((outcome, oIdx) => (
                      <li key={oIdx} className="flex items-start gap-3 text-secondary/70 dark:text-[#a0a5b1]/80">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-[#00ff88] mt-1 shrink-0" />
                        <span className="font-bold text-secondary dark:text-white">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="https://quantumvault.tech/" target="_blank" rel="noopener noreferrer" className="mt-auto text-left text-[#00ff88] font-bold hover:underline transition-all block w-full">
                    {study.cta}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
