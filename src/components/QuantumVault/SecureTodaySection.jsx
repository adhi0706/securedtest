import React from 'react';
import { secureTodayData } from '../../pageComponents/product/QuantumVault/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faBolt, faCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const iconMap = {
  clock: faClock,
  bolt: faBolt,
  circle: faCircle
};

const SecureTodaySection = () => {
  return (
    <section id="cta" className="py-16 md:py-24 bg-transparent overflow-hidden">
      <div className="w-full max-w-7xl px-4 md:px-8 mx-auto">
        <div className="bg-white dark:bg-[#1e3255] border border-secondary/10 dark:border-white/5 rounded-[20px] p-8 md:p-16 relative shadow-2xl overflow-hidden mb-16 transition-all duration-300 hover:border-[#00ff88]/30 group">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00ff88]/5 blur-[100px] -translate-y-1/2 translate-x-1/2 rounded-full group-hover:bg-[#00ff88]/10 transition-all"></div>
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-5xl font-black text-secondary dark:text-white mb-6 group-hover:scale-[1.01] transition-transform">
              Start Securing Your <span className="text-[#00ff88]">Keys Today</span>
            </h2>
            <p className="text-lg text-secondary/70 dark:text-[#a0a5b1] max-w-3xl mb-10 leading-relaxed">
              {secureTodayData.description}
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              {secureTodayData.highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-secondary dark:text-[#00ff88] font-bold text-sm">
                  <FontAwesomeIcon icon={iconMap[item.icon]} className="text-[10px] opacity-40 group-hover:opacity-100 transition-opacity" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-3xl md:text-4xl font-black text-secondary dark:text-white mb-4 text-center">
            Trusted for <span className="text-[#00ff88]">Enterprise Key Security</span>
          </h3>
          <p className="text-base text-secondary/70 dark:text-[#a0a5b1] text-center max-w-xl mb-10">
            {secureTodayData.trustedSub}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5 mb-12 max-w-3xl">
            {secureTodayData.trustedList.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 group">
                <FontAwesomeIcon icon={faCheckCircle} className="text-[#00ff88] mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-secondary dark:text-white font-bold text-sm">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-3xl">
            {secureTodayData.buttons.map((btn, idx) => (
              <button 
                key={idx}
                onClick={() => {
                  if (btn.text === 'Book a Free Demo' || btn.text === 'Download Security Report') {
                    window.open('https://app.quantumvault.tech/login', '_blank');
                  } else if (btn.text === 'Talk to a Security Expert') {
                    window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ21-NumjUBdRf0JzEARDvMYJ8kTpVE3AkdeVpX6fQ2-Xbm8sm5KICJfDsAuoF3F2-3Vd5lr50sp', '_blank');
                  }
                }}
                className={`flex-1 py-4 px-6 rounded-xl font-black text-base transition-all duration-300 flex items-center justify-center gap-2 ${
                  btn.primary 
                  ? 'bg-[#00ff88] text-secondary hover:brightness-110 hover:scale-[1.05] shadow-[0_10px_30px_rgba(0,255,136,0.3)]'
                  : btn.outline
                    ? 'border-2 border-secondary/20 dark:border-white/20 text-secondary dark:text-white hover:border-[#00ff88] hover:text-[#00ff88] hover:scale-[1.05]'
                    : 'bg-white dark:bg-[#1e3255] border border-secondary/20 dark:border-white/10 text-secondary dark:text-white hover:text-[#00ff88] hover:scale-[1.05] hover:border-[#00ff88]/50 shadow-sm hover:shadow-md'
                }`}
              >
                {btn.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecureTodaySection;
