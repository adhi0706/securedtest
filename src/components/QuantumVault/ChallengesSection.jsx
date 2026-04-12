import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { challengesData } from '../../pageComponents/product/QuantumVault/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faShieldAlt, faClock, faCloud, faFileAlt, faLightbulb } from '@fortawesome/free-solid-svg-icons';

const iconMap = {
  eye: faEye,
  shield: faShieldAlt,
  clock: faClock,
  cloud: faCloud,
  file: faFileAlt
};

const ChallengesSection = () => {
  return (
    <section id="challenges" className="py-16 md:py-20 bg-transparent">
      <div className="w-full max-w-7xl px-4 md:px-8 mx-auto">
        <div className="flex flex-col items-center mb-10 md:mb-12">
          <SectionHeader 
            label={challengesData.tag} 
            title={<>The Challenges of <span className="text-[#00ff88]">Software-Based Key Management</span></>} 
          />
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {challengesData.challenges.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white dark:bg-[#1e3255] border border-secondary/10 dark:border-white/5 rounded-[20px] p-8 flex flex-col group transition-all duration-300 hover:-translate-y-2 hover:border-[#00ff88]/40 shadow-sm hover:shadow-[0_15px_40px_rgba(0,255,136,0.1)] w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-2rem)]"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/5 dark:bg-[#1e3255] flex items-center justify-center text-[#ff4d4d] mb-6 shadow-md group-hover:scale-110 transition-transform">
                <FontAwesomeIcon icon={iconMap[item.icon]} className="text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-secondary dark:text-white mb-4 group-hover:text-[#ff4d4d] transition-colors leading-tight">
                {item.title}
              </h3>
              <p className="text-secondary/70 dark:text-[#a0a5b1] leading-relaxed text-[0.85rem]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-[#1e3255] border border-secondary/10 dark:border-[#00ff88]/20 rounded-2xl p-8 md:p-10 relative overflow-hidden group hover:border-[#00ff88]/40 transition-all duration-300">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="bg-[#00ff88]/10 p-3 rounded-xl text-[#00ff88]">
                <FontAwesomeIcon icon={faLightbulb} className="text-2xl" />
            </div>
            <p className="text-lg md:text-xl leading-relaxed text-secondary/80 dark:text-[#a0a5b1]">
                <span className="text-[#00ff88] font-black mr-2 uppercase tracking-widest">AI Insight:</span>
                {challengesData.aiInsight}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
