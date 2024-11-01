"use client";
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import left from '../assets/work left.png';
import right from '../assets/workright.png';
import Analysis from '../assets/Analysis.png';
import Erc from "../assets/Erc.png"
import report from "../assets/report.png"
import hexagon from "../assets/hexagon.png"
import flower from "../assets/flower.png"
import complex from "../assets/complex.png"

type Card = {
  image: StaticImageData; 
  description: string;
};

const cardData: Card[] = [
  {
    image: Analysis,
    description: 'Analyzes gas usage to identify optimization opportunities and reduce transaction costs.',
  },
  {
    image: Erc,
    description: 'Ensures ERC standard compatibility for smooth integration within the Ethereum ecosystem.',
  },
  {
    image: report,
    description: 'Simplifies development workflows with a user-friendly interface and detailed visual reports.',
  },
  {
    image: hexagon,
    description: 'Provides actionable insights with detailed vulnerability reports and recommendations for secure coding practices.',
  },
  {
    image: flower,
    description: 'Sends instant notifications about vulnerabilities during coding, enabling real-time issue resolution',
  },
  {
    image: complex,
    description: 'Combines automated tools with manual reviews to scan both common and complex vulnerabilities.',
  },
];

const Works = () => {
  return (
    <div className='overflow-x-hidden'>
      <div className='flex justify-center lg:mt-20 md:mt-12 mt-10'>
        <div className='flex justify-center space-x-5 items-center'>
          <Image src={left} className='h-2 w-full' alt='left' height={0} width={0} />
          <div>
            <h1 className='text-xs bg-[#3a3688] text-white px-3 py-1 rounded-full text-center text-nowrap' id='poppins-extralight'>
              How it works
            </h1>
          </div>
          <Image src={right} className='h-2 w-full' alt='right' height={0} width={0} />
        </div>
      </div>

      {/* Subtitle Section */}
      <div className='py-10 flex justify-center overflow-x-hidden'>
        <h1 className='text-center text-white lg:text-4xl text-2xl lg:w-6/12' id='poppins-regular'>
          How Audit Express Strengthens Smart Contract Security Audit
        </h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-5 py-10 text-white' id='poppins-regular'>
        {cardData.map((card, index) => (
          <div
            key={index}
            className='bg-[#304365] border border-gray-700 hover:border-gray-300 hover:scale-105 transition transform ease-in-out duration-300 backdrop-filter backdrop-blur-lg shadow-2xl bg-opacity-20 py-10 px-5 rounded-lg items-center text-left'>
            <Image src={card.image} alt='Card Image' className='h-12 w-12 mb-4' />
            <div>
            <p className='text-black dark:text-white lg:text-xl text-xs'>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
