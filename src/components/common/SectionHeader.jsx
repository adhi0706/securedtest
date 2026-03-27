import React from 'react';

const SectionHeader = ({ label, title }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full mb-10" data-aos="fade-up">
      <div className="flex items-center justify-center w-full max-w-3xl mb-4">
        <div className="h-[1px] bg-gradient-to-r from-transparent to-[#00d2ff]/40 flex-1"></div>
        <span className="mx-4 px-5 py-1.5 text-xs font-bold tracking-widest text-[#00d2ff] bg-[#00d2ff]/10 border border-[#00d2ff]/30 rounded-full uppercase shadow-[0_0_15px_rgba(0,210,255,0.15)]">
          {label}
        </span>
        <div className="h-[1px] bg-gradient-to-l from-transparent to-[#00d2ff]/40 flex-1"></div>
      </div>
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-secondary dark:text-white leading-tight">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;
