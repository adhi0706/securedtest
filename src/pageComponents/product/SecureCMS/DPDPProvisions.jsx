import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../../../components/common/SectionTitle';

const DPDPProvisions = ({ provisions }) => {
  return (
    <div className="features-section">
      <SectionTitle
        name="Compliance"
        title="Understanding the DPDP Act"
        description="The Digital Personal Data Protection (DPDP) Act, 2023, is India's framework for digital privacy. Here are the key provisions every business must follow."
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12">
        <div className="grid md:grid-cols-2 gap-8">
          {provisions.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-primary dark:bg-[#1e3255] border border-gray-100 dark:border-white/10 p-8 rounded-2xl flex gap-6 hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-all duration-300 shadow-sm"
            >
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 flex items-center justify-center shadow-md">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary dark:text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-secondary/70 dark:text-primary/70 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DPDPProvisions;
