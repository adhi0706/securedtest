import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../../../components/common/SectionTitle';

const ComplianceRisks = ({ risks }) => {
  return (
    <div className="features-section">
      <SectionTitle
        name="Penalties & Risks"
        title="The Growing Need for Consent Management"
        description="With the arrival of India's DPDP Act, manual consent management is no longer an option. Businesses that fail to adapt face unprecedented financial and legal risks."
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {risks.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-primary dark:bg-[#1e3255] border border-gray-100 dark:border-white/10 p-8 rounded-2xl relative overflow-hidden group flex flex-col items-center text-center transition-all duration-500 hover:border-red-500/50 hover:shadow-xl hover:shadow-red-500/5 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm relative z-10 group-hover:scale-110 group-hover:bg-red-500/10 transition-all duration-500">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-secondary dark:text-primary mb-3 relative z-10 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-secondary/70 dark:text-primary/70 text-sm leading-relaxed relative z-10 transition-colors duration-300">
                {item.desc}
              </p>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-0 bg-red-500 group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500">
            <span className="font-bold text-xl">73% of Indian businesses are not fully DPDP compliant</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComplianceRisks;
