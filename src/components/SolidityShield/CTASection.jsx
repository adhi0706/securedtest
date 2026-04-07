import React from 'react';
import { ctaData } from '../../pageComponents/product/SolidityShield/data';

const CTASection = () => {
  return (
    <section id="cta" className="py-24 bg-transparent flex flex-col items-center border-t border-secondary/10 dark:border-white/5">
      <div className="w-full max-w-4xl px-4 md:px-8 mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-secondary dark:text-white mb-6">
          Start Securing Your <span className="text-[#00ff88]">Smart Contracts</span> Today
        </h2>
        
        <p className="text-secondary/70 dark:text-gray-400 text-lg mb-12 leading-relaxed">
          {ctaData.desc}
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a href="https://securedapp.io/solidity-shield-scan/auth" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-lg bg-[#00ff88] text-[#031b34] font-bold hover:bg-[#00e078] shadow-[0_4px_14px_rgba(0,255,136,0.3)] transition-all inline-block">
            {ctaData.buttons[0].label}
          </a>
          
          <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ21-NumjUBdRf0JzEARDvMYJ8kTpVE3AkdeVpX6fQ2-Xbm8sm5KICJfDsAuoF3F2-3Vd5lr50sp" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-lg border border-secondary/20 dark:border-white/20 text-secondary dark:text-white font-medium hover:bg-secondary/5 dark:hover:bg-white/5 transition-all inline-block">
            {ctaData.buttons[1].label}
          </a>

          <a href="https://securedapp.io/solidity-shield-scan/auth" target="_blank" rel="noopener noreferrer" className="text-[#00ff88] font-medium hover:underline underline-offset-4 decoration-[#00ff88]">
            {ctaData.buttons[2].label}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
