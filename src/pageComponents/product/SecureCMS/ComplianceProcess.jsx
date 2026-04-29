import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../../../components/common/SectionTitle';

const ComplianceProcess = ({ steps }) => {
  return (
    <div className="features-section">
      <SectionTitle
        name="Process"
        title="How Our Consent Management Platform Works"
        description="A seamless 4-step engine designed to automate your compliance lifecycle."
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-16 relative">
        {/* Connecting line (Desktop) */}
        <div className="hidden lg:block absolute top-[40px] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 border border-gray-100 dark:border-white/10 group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(0,255,136,0.2)] transition-all duration-500 bg-primary dark:bg-[#1e3255] relative z-10 shadow-sm">
                {step.icon}
              </div>

              <div className="bg-primary dark:bg-[#1e3255] border border-gray-100 dark:border-white/10 p-6 rounded-2xl w-full h-full shadow-sm hover:shadow-md transition-all">
                <h3 className="text-xl font-bold text-secondary dark:text-primary mb-1 font-outfit">
                  {step.title}
                </h3>
                <p className="text-highlight dark:text-primary font-bold text-sm mb-3">
                  {step.subtitle}
                </p>
                <p className="text-secondary/70 dark:text-primary/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComplianceProcess;
