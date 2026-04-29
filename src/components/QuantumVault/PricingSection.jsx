import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { pricingData } from '../../pageComponents/product/QuantumVault/data';
import { useDispatch } from 'react-redux';
import { setIsRequestModalOpen } from '../../redux/slices/main/homeSlice';

const PricingSection = () => {
    const dispatch = useDispatch();

    return (
        <section id="pricing" className="py-16 md:py-20 bg-transparent">
            <div className="w-full max-w-7xl px-4 md:px-8 mx-auto">
                <div className="flex flex-col items-center mb-10 md:mb-12">
                    <SectionHeader 
                        label={pricingData.tag} 
                        title={<>Flexible <span className="text-[#00ff88]">Engagement Models</span></>} 
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                    {pricingData.plans.map((plan, idx) => (
                        <div 
                            key={idx} 
                            className={`bg-white dark:bg-[#1e3255] border rounded-[20px] p-8 md:p-10 flex flex-col transition-all duration-300 relative overflow-hidden group ${
                                plan.popular 
                                ? 'border-[#00ff88] shadow-[0_20px_50px_rgba(0,255,136,0.15)] scale-105 z-10' 
                                : 'border-secondary/10 dark:border-white/5 hover:border-[#00ff88]/30 shadow-xl hover:-translate-y-2'
                            }`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 right-0 bg-[#00ff88] text-secondary text-[10px] font-black uppercase px-4 py-1.5 rounded-bl-xl tracking-widest">
                                    Most Popular
                                </div>
                            )}
                            
                            <h3 className="text-2xl md:text-3xl font-black text-secondary dark:text-white mb-2 group-hover:text-[#00ff88] transition-colors">
                                {plan.name}
                            </h3>
                            <p className="text-[#00ff88] font-bold text-xs mb-10 uppercase tracking-widest opacity-80">
                                {plan.subtitle}
                            </p>

                            <button 
                                onClick={() => {
                                    if (plan.name === 'Starter' || plan.name === 'Professional' || plan.buttonText === 'Get Started') {
                                        window.open('https://app.quantumvault.tech/login', '_blank');
                                    } else if (plan.name === 'Enterprise' || plan.buttonText === 'Contact Sales') {
                                        window.open('https://calendar.app.google/DwaR8QDDAotwnafu5', '_blank');
                                    }
                                }}
                                className={`mt-auto w-full py-4 rounded-xl font-bold transition-all duration-300 text-center flex items-center justify-center gap-2 group-hover:scale-[1.02] ${
                                    plan.name === 'Enterprise' 
                                    ? 'border-2 border-secondary/20 dark:border-white/20 text-secondary dark:text-white hover:border-[#00ff88] hover:text-[#00ff88]'
                                    : plan.popular
                                        ? 'bg-[#00ff88] text-secondary hover:brightness-110 shadow-[0_10px_20px_rgba(0,255,136,0.2)]'
                                        : 'bg-secondary/5 dark:bg-white/5 text-secondary dark:text-white hover:bg-[#00ff88] hover:text-secondary'
                                }`}
                            >
                                {plan.buttonText}
                            </button>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button onClick={() => dispatch(setIsRequestModalOpen(true))} className="bg-white dark:bg-[#1e3255] border border-secondary/20 dark:border-white/10 px-8 py-4 rounded-full text-secondary dark:text-white font-black hover:text-[#00ff88] hover:border-[#00ff88]/50 dark:hover:bg-secondary/90 hover:scale-105 transition-all inline-flex items-center gap-3 shadow-sm hover:shadow-md">
                        {pricingData.footerText}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
