import React from 'react';
import SectionHeader from '../common/SectionHeader';
import CommonCard from '../common/CommonCard';
import { FiDatabase, FiRepeat, FiImage, FiCrosshair, FiBriefcase } from 'react-icons/fi';

const industries = [
  {
    icon: <FiDatabase size={28} />,
    title: "DeFi Platforms",
    desc: "DeFi protocols require constant monitoring because of the large liquidity pools they manage. Protect against flash loan attacks, oracle manipulation, and reentrancy exploits."
  },
  {
    icon: <FiRepeat size={28} />,
    title: "Cryptocurrency Exchanges",
    desc: "Exchanges must monitor high transaction volumes and detect abnormal trading or withdrawal behavior in real time across custody and trading infrastructure."
  },
  {
    icon: <FiImage size={28} />,
    title: "NFT Marketplaces",
    desc: "NFT platforms face risks including wallet compromise, token manipulation, and phishing attacks targeting contract funds."
  },
  {
    icon: <FiCrosshair size={28} />,
    title: "Web3 Gaming Ecosystems",
    desc: "Gaming platforms involve complex asset economies and frequent transactions. Safeguard in-game token economies from exploit-driven attacks."
  },
  {
    icon: <FiBriefcase size={28} />,
    title: "Enterprise Blockchain Deployments",
    desc: "Organizations using blockchain infrastructure require continuous security visibility across permissioned deployments in supply chain, healthcare, finance, and more."
  }
];

const UseCasesSection = () => {
  return (
    <section id="use-cases" className="py-20 bg-transparent flex flex-col items-center">
      <div className="w-full max-w-7xl px-4 md:px-8 mx-auto">
        <SectionHeader 
          label="Use Cases" 
          title={<>Industries Protected by <span className="text-[#00ff88]">SecureWatch</span></>} 
        />
        
        <div className="flex flex-wrap gap-6 justify-center w-full mt-12">
          {industries.map((ind, idx) => (
            <CommonCard 
              key={idx}
              title={ind.title}
              description={ind.desc}
              icon={ind.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
