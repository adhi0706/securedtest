import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import { faqData } from '../../pageComponents/product/SolidityShield/data';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-transparent flex flex-col items-center border-t border-white/5 pb-32">
      <div className="w-full max-w-4xl px-4 md:px-8 mx-auto text-center">
        <SectionHeader 
          label={faqData.tag} 
          title={<>Frequently Asked <span className="text-[#00ff88]">Questions</span></>} 
        />
        
        <div className="mt-16 text-left flex flex-col gap-4">
          {faqData.items.map((faq, i) => (
            <div 
              key={i} 
              className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                activeIndex === i 
                  ? 'border-[#00ff88]/50 bg-white dark:bg-[#1e3255]/60 shadow-[0_4px_20px_rgba(0,255,136,0.1)]' 
                  : 'border-secondary/10 dark:border-[#00ff88]/20 bg-cardBackgroundLight dark:bg-[#1e3255]/30 hover:border-[#12D576] dark:hover:border-[#00ff88]/40 hover:bg-secondary/5 dark:hover:bg-[#1e3255]/50'
              }`}
            >
              <div 
                className="flex items-center justify-between p-6 cursor-pointer" 
                onClick={() => toggleFAQ(i)}
              >
                <h4 className="text-secondary dark:text-white font-medium pr-8">{faq.q}</h4>
                <div className="flex-shrink-0 text-[#00ff88]">
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className={`transition-transform duration-300 ${activeIndex === i ? 'rotate-180' : 'rotate-0'}`}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
              <div 
                className="transition-all duration-300 ease-in-out"
                style={{
                  maxHeight: activeIndex === i ? '500px' : '0',
                  opacity: activeIndex === i ? 1 : 0
                }}
              >
                <div className="px-6 pb-6 text-secondary/70 dark:text-gray-400 leading-relaxed border-t border-secondary/10 dark:border-white/10 pt-4 mt-2">
                  <p>{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
