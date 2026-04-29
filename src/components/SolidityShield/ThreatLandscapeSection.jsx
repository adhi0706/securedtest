import React from 'react';
import Link from 'next/link';
import SectionHeader from '../common/SectionHeader';
import CommonCard from '../common/CommonCard';
import { threatsData } from '../../pageComponents/product/SolidityShield/data';

const ThreatLandscapeSection = () => {
  return (
    <section id="threats" className="py-20 bg-transparent flex flex-col items-center">
      <div className="w-full max-w-7xl px-4 md:px-8 mx-auto">
        <div className="flex flex-col items-center mb-16">
            <SectionHeader 
            label={threatsData.tag} 
            title={<>The Growing Threat Landscape Facing <span className="text-[#00ff88]">Smart Contracts</span></>} 
            />
            <p className="text-center text-secondary/80 dark:text-[#a0a5b1] max-w-4xl mx-auto -mt-4 mb-4 text-lg">
                {threatsData.description}
            </p>
        </div>
        
        <div className="flex flex-wrap gap-6 justify-center w-full mt-12">
          {threatsData.threats.map((t, idx) => (
            <CommonCard 
              key={idx}
              title={t.title}
              description={t.desc}
              icon={t.icon}
              className="lg:w-[calc(25%-1.25rem)]"
            />
          ))}
        </div>

        <div className="mt-16 text-center">
            <Link href="/solidity-shield-vulnerabilities" className="text-[#00ff88] hover:underline flex items-center justify-center gap-2 text-lg font-medium">
                {threatsData.footerLink} <span>&rarr;</span>
            </Link>
        </div>
      </div>
    </section>
  );
};

export default ThreatLandscapeSection;
