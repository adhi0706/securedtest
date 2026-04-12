import React from 'react';
import { useDispatch } from 'react-redux';
import { pricingData } from '../../pageComponents/product/SolidityShield/data';
import SectionHeader from '../common/SectionHeader';
import { setIsRequestModalOpen } from '../../redux/slices/main/homeSlice';

const PricingSection = () => {
  const dispatch = useDispatch();
  return (
    <section id="pricing" className="py-24 bg-transparent flex flex-col items-center border-t border-white/5">
      <div className="w-full max-w-7xl px-4 md:px-8 mx-auto text-center">
        <SectionHeader 
          label={pricingData.tag} 
          title={<>Flexible <span className="text-[#00ff88]">Engagement Models</span></>} 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-16 text-left items-stretch">
          {pricingData.cards.map((card, idx) => (
            <div 
              key={idx}
              className={`relative flex flex-col justify-between p-8 rounded-2xl backdrop-blur-sm transition-all hover:-translate-y-1 ${
                card.highlight 
                  ? 'bg-white dark:bg-[#1e3255]/60 border border-[#00ff88]/30 shadow-[0_0_30px_rgba(0,255,136,0.15)] dark:shadow-[0_0_30px_rgba(0,255,136,0.15)]' 
                  : 'bg-cardBackgroundLight dark:bg-[#1e3255]/40 border border-cardBorderColorLight dark:border-white/5 hover:border-[#12D576] dark:hover:border-white/10 shadow-sm'
              }`}
            >
              <div>
                {card.highlight && (
                  <span className="inline-block bg-[#00ff88] text-[#031b34] text-xs font-bold px-3 py-1 rounded-full mb-6">
                    {card.badge}
                  </span>
                )}
                <h3 className="text-2xl font-bold text-secondary dark:text-white mb-2">{card.name}</h3>
                <p className="text-[#12D576] font-medium mb-4">{card.subtitle}</p>
                <p className="text-secondary/70 dark:text-gray-400 text-sm leading-relaxed mb-8">{card.desc}</p>
              </div>
              
              <button 
                onClick={() => {
                  if (card.name === 'Starter' || card.name === 'Professional') {
                    window.location.href = 'https://securedapp.io/solidity-shield-scan/pricing';
                  } else if (card.name === 'Enterprise') {
                    window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ21-NumjUBdRf0JzEARDvMYJ8kTpVE3AkdeVpX6fQ2-Xbm8sm5KICJfDsAuoF3F2-3Vd5lr50sp', '_blank');
                  }
                }}
                className={`w-full py-3 rounded-lg font-medium transition-colors ${
                  card.highlight 
                    ? 'bg-[#12D576] text-white dark:text-[#031b34] hover:bg-[#00e078] shadow-[0_4px_14px_rgba(0,255,136,0.4)]' 
                    : 'bg-secondary/5 dark:bg-white/5 text-secondary dark:text-white hover:bg-secondary/10 dark:hover:bg-white/10'
                }`}
              >
                {card.buttonLabel}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button 
            onClick={() => dispatch(setIsRequestModalOpen(true))}
            className="px-8 py-3 rounded-full border border-secondary/20 dark:border-white/20 text-secondary dark:text-white font-medium hover:bg-secondary/5 dark:hover:bg-white/5 transition-all"
          >
            {pricingData.cta}
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
