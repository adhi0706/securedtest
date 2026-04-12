import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { integrationData } from '../../pageComponents/product/QuantumVault/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFileAlt, 
  faUsers, 
  faCode, 
  faCloud 
} from '@fortawesome/free-solid-svg-icons';

const iconMap = {
  'file-alt': faFileAlt,
  users: faUsers,
  code: faCode,
  cloud: faCloud
};

const IntegrationSection = () => {
  return (
    <section id="integrations" className="py-16 md:py-20 bg-transparent">
      <div className="w-full max-w-7xl px-4 md:px-8 mx-auto">
        <div className="flex flex-col items-center mb-10 md:mb-12">
          <SectionHeader 
            label={integrationData.tag} 
            title={<>Seamless Integration with Your <span className="text-[#00ff88]">Security Stack</span></>} 
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {integrationData.items.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white dark:bg-[#1e3255] border border-secondary/10 dark:border-white/5 rounded-[20px] p-8 flex flex-col items-center text-center group transition-all duration-300 hover:-translate-y-2 hover:border-[#00ff88]/40 shadow-sm hover:shadow-[0_15px_40px_rgba(0,255,136,0.1)]"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/5 dark:bg-[#1e3255] flex items-center justify-center text-[#00ff88] mb-6 shadow-md group-hover:scale-110 transition-transform">
                <FontAwesomeIcon icon={iconMap[item.icon]} className="text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-secondary dark:text-white leading-tight group-hover:text-[#00ff88] transition-colors">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
