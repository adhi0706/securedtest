import React from 'react';
import { heroData } from '../../pageComponents/product/QuantumVault/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cloudProviders = [
  "AWS KMS", "Azure HSM", "On-Prem", "GCP", "Multi-Cloud"
];

const QuantumVaultHero = () => {
  return (
    <section id="quantum-vault-hero" className="pt-28 md:pt-40 pb-16 md:pb-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Side Content */}
        <div className="w-full lg:w-1/2">
          <p className="text-[#00ff88] font-bold tracking-wider mb-4 uppercase text-sm md:text-base">{heroData.tag}</p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-secondary dark:text-white">
            PQC-enabled <span className="text-[#00ff88]">HSM-Based</span> Key Management Solutions
          </h1>
          <div className="space-y-4 text-secondary/80 dark:text-[#a0a5b1] text-base md:text-lg leading-relaxed mb-8">
            <p>
              Quantum Vault delivers Enterprise HSM Key Management powered by tamper-resistant hardware security modules (HSMs), giving organisations complete control over key generation, storage, and lifecycle management.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mb-10">
            <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ21-NumjUBdRf0JzEARDvMYJ8kTpVE3AkdeVpX6fQ2-Xbm8sm5KICJfDsAuoF3F2-3Vd5lr50sp" target="_blank" rel="noopener noreferrer" className="bg-[#00ff88] text-black px-8 py-4 rounded-lg font-bold hover:bg-[#00cc6a] transition-all duration-300 shadow-lg shadow-[#00ff88]/20">
              {heroData.primaryCta}
            </a>
            <a href="https://app.quantumvault.tech/login" target="_blank" rel="noopener noreferrer" className="border border-secondary/20 dark:border-white/20 text-secondary dark:text-white px-8 py-4 rounded-lg font-bold hover:bg-secondary/5 dark:hover:bg-white/5 transition-all duration-300">
              {heroData.secondaryCta}
            </a>
          </div>

          <div className="grid grid-cols-2 md:flex md:flex-wrap gap-x-8 gap-y-4 mt-8">
            {heroData.badges.map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2 text-[#00ff88] text-xs md:text-sm font-semibold">
                <FontAwesomeIcon icon={faCheckCircle} />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side HSM Dashboard Mock */}
        <div className="w-full lg:w-1/2">
          <div className="bg-white dark:bg-[#1e3255] border border-secondary/10 dark:border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden group">
            
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-3">
                <div className="bg-[#00ff88]/20 p-2.5 rounded-xl">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00ff88" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                </div>
                <span className="font-bold text-secondary dark:text-white text-xl">System Secure</span>
              </div>
              <div className="flex items-center gap-2 text-[#00ff88] text-xs font-black tracking-widest bg-[#00ff88]/10 px-3 py-1.5 rounded-full">
                <span className="w-2 h-2 bg-[#00ff88] rounded-full animate-pulse"></span> LIVE
              </div>
            </div>

            <div className="mb-8 overflow-hidden">
              <div className="flex flex-wrap gap-3">
                {cloudProviders.map((provider, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-secondary/5 dark:bg-white/5 px-4 py-2 rounded-xl text-xs font-bold text-secondary/60 dark:text-[#a0a5b1]">
                    <span className="w-2 h-2 bg-[#00ff88] rounded-full"></span> {provider}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {heroData.alerts.slice(0, 2).map((alert, idx) => (
                <div key={idx} className="flex justify-between items-center bg-secondary/[0.02] dark:bg-white/5 p-5 rounded-2xl border border-secondary/5 dark:border-white/5 group-hover:border-[#00ff88]/30 transition-all duration-300">
                  <div className="flex items-center gap-4 text-secondary dark:text-white">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: `${alert.iconColor}10` }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={alert.iconColor} strokeWidth="2.5">
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                        </svg>
                    </div>
                    <span className="font-bold text-sm md:text-base">{alert.text}</span>
                  </div>
                  <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-tighter`} style={{ backgroundColor: `${alert.iconColor}20`, color: alert.iconColor }}>
                    {alert.level}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-secondary/5 dark:border-white/10 flex items-center gap-4 text-secondary/40 dark:text-[#a0a5b1]/40 text-xs">
                <div className="p-2 bg-cyan-500/10 rounded-lg">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00d2ff" strokeWidth="2.5">
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                    </svg>
                </div>
                <span className="font-bold tracking-tight">Active Cryptographic Tunneling: Cloud Primary — Optimized HSM Sync</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default QuantumVaultHero;
