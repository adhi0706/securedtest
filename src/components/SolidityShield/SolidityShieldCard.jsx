import React from 'react';

const SolidityShieldCard = ({ icon, title, description, number, className = "" }) => {
  return (
    <div className={`
      relative
      bg-white dark:bg-[#1e3255]
      border border-secondary/10 dark:border-[rgba(255,255,255,0.05)]
      rounded-[20px]
      p-8
      transition-all duration-300 ease-in-out
      hover:-translate-y-2
      hover:border-[#12D576] dark:hover:border-[#00ff88]/30
      hover:shadow-[0_15px_40px_rgba(18,213,118,0.15)] dark:hover:shadow-[0_15px_40px_rgba(0,255,136,0.1)]
      flex flex-col items-start
      w-full
      group
      ${className}
    `}>
      {/* Step Number for Process Section */}
      {number && (
        <span className="absolute top-6 right-8 text-secondary/10 dark:text-[rgba(255,255,255,0.1)] text-lg font-bold group-hover:text-[#12D576]/20 dark:group-hover:text-[#00ff88]/20 transition-colors">
          {number}
        </span>
      )}

      {/* Icon Container */}
      {icon && (
        <div className="w-14 h-14 rounded-xl bg-secondary/5 dark:bg-[#1e3255] flex items-center justify-center text-[#12D576] mb-6 shadow-lg group-hover:scale-110 transition-transform">
          {icon}
        </div>
      )}

      {/* Title */}
      {title && (
        <h3 className="text-xl font-bold text-secondary dark:text-white leading-tight mb-4 group-hover:text-[#12D576] transition-colors">
          {title}
        </h3>
      )}

      {/* Description */}
      {description && (
        <p className="text-[1rem] text-secondary/70 dark:text-[#a0a5b1] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SolidityShieldCard;
