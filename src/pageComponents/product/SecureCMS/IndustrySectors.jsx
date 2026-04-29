import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../../../components/common/SectionTitle';

const IndustrySectors = ({ industries }) => {
  return (
    <div className="features-section">
      <SectionTitle
        name="Ecosystem"
        title="Industries We Serve"
        description="DPDP compliance is critical across all sectors. We provide specialized playbooks for your industry."
      />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12">
        <div className="flex flex-wrap justify-center gap-6">
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-primary dark:bg-[#1e3255] border border-gray-100 dark:border-white/10 p-6 w-48 flex flex-col items-center text-center gap-4 group cursor-default shadow-sm hover:shadow-md transition-all rounded-2xl"
            >
              <div className="w-16 h-16 rounded-full bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 flex items-center justify-center shadow-inner transition-all group-hover:scale-110">
                {industry.icon}
              </div>
              <span className="text-xs font-bold text-secondary dark:text-primary tracking-wide uppercase">
                {industry.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustrySectors;
