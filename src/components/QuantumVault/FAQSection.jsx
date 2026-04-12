import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import { faqData } from '../../pageComponents/product/QuantumVault/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faqs" className="py-16 md:py-20 bg-transparent border-t border-secondary/5 dark:border-white/5">
            <div className="w-full max-w-5xl px-4 md:px-8 mx-auto">
                <div className="flex flex-col items-center mb-12">
                    <SectionHeader 
                        label={faqData.tag} 
                        title={<>Frequently Asked <span className="text-[#00ff88]">Questions</span></>} 
                    />
                </div>

                <div className="flex flex-col gap-4">
                    {faqData.faqs.map((faq, idx) => (
                        <div 
                            key={idx} 
                            className={`bg-white dark:bg-[#1e3255] border transition-all duration-300 overflow-hidden rounded-[20px] ${
                                openIndex === idx 
                                ? 'border-[#00ff88]/50 shadow-lg' 
                                : 'border-secondary/10 dark:border-white/5 hover:border-[#00ff88]/30 shadow-sm'
                            }`}
                        >
                            <button 
                                onClick={() => toggleAccordion(idx)}
                                className="w-full px-8 py-6 flex items-center justify-between text-left group"
                            >
                                <span className={`text-[1.05rem] font-bold transition-all ${
                                    openIndex === idx 
                                    ? 'text-[#00ff88]' 
                                    : 'text-secondary dark:text-white group-hover:text-[#00ff88]'
                                }`}>
                                    {faq.q}
                                </span>
                                <div className={`w-8 h-8 flex items-center justify-center rounded-xl transition-all ${
                                    openIndex === idx 
                                    ? 'bg-[#00ff88] text-secondary rotate-180' 
                                    : 'bg-secondary/5 dark:bg-white/5 text-secondary dark:text-white group-hover:bg-[#00ff88]/10'
                                }`}>
                                    <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
                                </div>
                            </button>
                            
                            <div 
                                className={`transition-all duration-300 ease-in-out ${
                                    openIndex === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className="px-8 pb-8 pt-0 border-t border-secondary/5 dark:border-white/5">
                                    <p className="text-secondary/70 dark:text-[#a0a5b1] leading-relaxed text-[1rem] pt-6">
                                        {faq.a}
                                    </p>
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
