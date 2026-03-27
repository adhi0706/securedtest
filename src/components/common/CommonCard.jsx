import React from 'react';

const CommonCard = ({ icon, title, description, children, pill, preTitle, className = "" }) => {
  return (
    <div className={`
      bg-[#1e3255]
      border border-[rgba(255,255,255,0.08)] 
      rounded-[14px]
      p-7 md:p-8
      transition-all duration-300 ease-in-out 
      hover:-translate-y-1
      hover:border-cyan-400/50 
      hover:shadow-[0_8px_30px_rgba(34,211,238,0.15)] 
      cursor-pointer
      flex flex-col items-start
      w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]
      group
      ${className}
    `}>
      
      {icon && (
        <div className="w-full flex justify-center mb-6 transition-colors duration-300 text-[#B0B8C1] group-hover:text-cyan-400">
          <div className="w-12 h-12 flex justify-center items-center">
             {icon}
          </div>
        </div>
      )}

      {preTitle && (
        <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3">{preTitle}</span>
      )}
      
      {title && (
        <h3 className="text-lg md:text-[1.15rem] font-bold text-white leading-snug mb-3">
          {title}
        </h3>
      )}

      {description && (
        <p className="text-[0.95rem] text-[#A0AABA] leading-relaxed">
          {description}
        </p>
      )}

      {children && (
        <div className="mt-5 w-full">
          {children}
        </div>
      )}

      {pill && (
        <div className="mt-auto pt-6 w-full">
            <span className="inline-block px-4 py-1.5 bg-[rgba(34,211,238,0.08)] text-cyan-400 text-xs font-semibold rounded-full border border-[rgba(34,211,238,0.2)]">
                {pill}
            </span>
        </div>
      )}
    </div>
  );
};

export default CommonCard;
