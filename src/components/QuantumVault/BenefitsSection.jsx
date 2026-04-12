import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { benefitsData } from '../../pageComponents/product/QuantumVault/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShieldAlt, 
  faFileAlt, 
  faBuilding, 
  faExclamationTriangle 
} from '@fortawesome/free-solid-svg-icons';

const iconMap = {
  shield: faShieldAlt,
  'file-alt': faFileAlt,
  building: faBuilding,
  'exclamation-triangle': faExclamationTriangle
};

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-12 md:py-24 bg-transparent">
      <div className="w-full max-w-7xl px-4 md:px-8 mx-auto text-center">
        <div className="flex flex-col items-center mb-12 md:mb-16">
          <SectionHeader 
            label={benefitsData.tag} 
            title={<>Benefits of <span className="text-[#00ff88]">HSM-Based Key Management Solutions</span></>} 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefitsData.benefits.map((benefit, idx) => (
            <div 
              key={idx} 
              className="bg-white dark:bg-[#1e3255] border border-secondary/10 dark:border-white/5 rounded-2xl p-8 flex flex-col items-center group hover:border-[#00ff88]/30 transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <div className="text-[#00ff88] mb-8 group-hover:scale-110 transition-transform">
                <FontAwesomeIcon icon={iconMap[benefit.icon]} className="text-4xl" />
              </div>
              <h3 className="text-xl font-bold text-secondary dark:text-white mb-4">
                {benefit.title}
              </h3>
              <p className="text-secondary/70 dark:text-[#a0a5b1] leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
