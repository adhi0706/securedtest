'use client';

import React, { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import VulnerabilityPieChart from '../utils/VulnerabilityPieChart';
import 'react-circular-progressbar/dist/styles.css';
import Navbar from '../../../components/navbar/Navbar';
import { ClipLoader } from 'react-spinners';
import Sales from '../../../AuditExpress/components/Sales';
import Footer from '../../../components/footer/footer';
import { FaGithub, FaFileUpload } from 'react-icons/fa';
import Image, { StaticImageData } from 'next/image';
import { motion, useAnimation } from "framer-motion";
import scan from '../../../AuditExpress/assets/scan.png';

// Import blockchain images
import ethereum from "../../../AuditExpress/assets/chains/ethereum.png";
import BNB from "../../../AuditExpress/assets/chains/binance.png";
import Avalanche from "../../../AuditExpress/assets/chains/avalanche.png";
import Arbitrum from "../../../AuditExpress/assets/chains/arbitrum.png";
import Optimism from "../../../AuditExpress/assets/chains/optimism.png";
import Gnosis from "../../../AuditExpress/assets/chains/gnosis.png";
import Boba from "../../../AuditExpress/assets/chains/boba.png";
import Base from "../../../AuditExpress/assets/chains/base.png";
import Linea from "../../../AuditExpress/assets/chains/lineascan.png";
import Astar from "../../../AuditExpress/assets/chains/astar.png";
import Celo from "../../../AuditExpress/assets/chains/celo.png";
import fire from "../../../AuditExpress/assets/chains/firechain_light.png";
import Polygon from "../../../AuditExpress/assets/chains/polygon.png";
import { AiFillThunderbolt } from 'react-icons/ai';

type Vulnerability = {
  type: string;
  reason: string;
};

type VulnerabilityCount = {
  gas: number;
  low: number;
  high: number;
  medium: number;
  critical: number;
  informational: number;
};

type ScanDetails = {
  id: number;
  company_name: string;
  contract_name: string;
  source_code: string;
  blockchain: string;
  address: string;
  compiler_version: string;
  score: string;
  vulnerability_count: VulnerabilityCount;
  vulnerabilities: Vulnerability[];
  created_at: string;
  lines: number;
};

type ScanPageProps = {
  scanId: string | string[] | undefined;
  resultData: {
    score: number;
    lines: number;
    duration: number;
    vulnerabilityCount: VulnerabilityCount;
  };
};

const blockchainIcons: { [key: string]: StaticImageData } = {
  Ethereum: ethereum,
  BinanceSmartChain: BNB,
  Avalanche: Avalanche,
  Arbitrum: Arbitrum,
  Optimism: Optimism,
  Gnosis: Gnosis,
  Boba: Boba,
  Base: Base,
  Linea: Linea,
  Astar: Astar,
  Celo: Celo,
  Firechain: fire,
  Polygon: Polygon,
};

const ScanPage: React.FC<ScanPageProps> = ({ scanId, resultData }) => {
  const [address, setAddress] = useState<string | "">(null);
  const [scanDuration, setScanDuration] = useState<number>(0);
  const [lineCount, setLineCount] = useState<number>(0);
  const [blockchain, setBlockchain] = useState<string | null>(null);
  const [scanDetails, setScanDetails] = useState<ScanDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [score, setScore] = useState<number>(resultData.score);
  const controls = useAnimation();
  const filename = localStorage.getItem("filename");
  const github = localStorage.getItem("giturl");

  useEffect(() => {
    if (resultData) {
      setScore(resultData.score);
      setLineCount(resultData.lines);
      setScanDuration(resultData.duration);
    }
  }, [resultData]);

  useEffect(() => {
    const fetchScanDetails = async () => {
      setLoading(false);
      setScanDetails({
        id: parseInt(scanId as string),
        company_name: 'Example Company',
        contract_name: 'Example Contract',
        source_code: 'Sample source code here...',
        blockchain: 'Ethereum',
        address: '0x1234567890abcdef',
        compiler_version: '0.8.0',
        score: resultData.score.toString(),
        vulnerability_count: resultData.vulnerabilityCount,
        vulnerabilities: [],
        created_at: new Date().toISOString(),
        lines: 100,
      });
    };

    const walletAddress = localStorage.getItem("address");
    setAddress(walletAddress);
    const chain = localStorage.getItem("blockchain");
    setBlockchain(chain);
    if (scanId) {
      fetchScanDetails();
    }
  }, [scanId, resultData]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader color="#1E90FF" size={50} />
      </div>
    );
  }

  if (error) {
    return <p className='text-center text-red-500 mt-5'>{error}</p>;
  }

  if (!scanDetails) {
    return <p className='text-center mt-5'>No details available.</p>;
  }

  // Determine icon and label based on blockchain or source type
  const isGitHub = blockchain?.toLowerCase().includes("via github");
  const isUploadedFile = blockchain?.toLowerCase().includes("via upload");
  const blockchainIcon = blockchainIcons[blockchain ?? ""] || null;

  return (
    <div className="mx-0 md:mx-auto p-4 bg-[#011A3B] text-white min-h-screen">
      <Navbar />

      <div className="mt-20 mx-4 sm:mx-10 lg:mx-20 lg:mt-24">
        <div className="flex items-center">
          {isGitHub ? (
            <FaGithub className="text-2xl mr-2" />
          ) : isUploadedFile ? (
            <FaFileUpload className="text-2xl mr-2" />
          ) : blockchainIcon ? (
            <Image src={blockchainIcon} alt={`${blockchain} logo`} className="w-10 h-10 mr-2" />
          ) : null}
          <div className="items-center">
            <p className="text-xl sm:text-2xl">{blockchainIcon ? address : ""}</p>
            <p className="text-md sm:text-lg text-gray-400">
              {isGitHub ? (
                <a href={github} target="_blank" rel="noopener noreferrer" className="text-white hover:underline truncate">
                  {github}
                </a>
              ) : isUploadedFile ? (
                <p>{filename}</p>
              ) :
                blockchainIcon ? (
                  <p>{blockchain}</p>
                ) : null}
            </p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row justify-between mx-4 sm:mx-10 lg:mx-20 my-2 sm:my-10 space-y-2 md:space-y-0'>
        {/* Security Score */}
        <div className='border border-gray-50 w-full md:w-1/3 lg:w-1/4 h-24 flex justify-between px-4 sm:px-10 rounded-full'>
          <div className='flex flex-col justify-center'>
            <p className='text-lg sm:text-2xl' id='poppins-normal'>Security Score</p>
            <p className='text-lg sm:text-2xl' id='poppins-normal'>{scanDetails.score}/100</p>
          </div>
          <div className='flex items-center'>
            <motion.div
              initial={{ value: 0 }}
              animate={controls}
              onUpdate={(latest: any) => setScore(latest.value)}
            >
              <CircularProgressbar
                className='w-10 h-10 sm:w-12 sm:h-12'
                value={score}
                maxValue={100}
                styles={buildStyles({
                  pathColor: '#12D576',
                  textColor: '#1E90FF',
                  trailColor: '#d6d6d6',
                  textSize: '22px'
                })}
              />
            </motion.div>
          </div>
        </div>
        {/* Scan Duration */}
        <div className='border border-gray-50 w-full md:w-1/3 lg:w-1/4 h-24 flex justify-between px-4 sm:px-10 rounded-full'>
          <div className='flex flex-col justify-center'>
            <p className='text-lg sm:text-2xl' id='poppins-semibold'>Scan duration</p>
            <p className='text-lg sm:text-2xl' id='poppins-normal'>{scanDuration}</p>
          </div>
          <div className='flex items-center'>
            {/* <CircularProgressbar
              className='w-10 h-10 sm:w-12 sm:h-12'
              value={score}
              maxValue={100}
              styles={buildStyles({
                pathColor: '#12D576',
                textColor: '#1E90FF',
                trailColor: '#d6d6d6',
                textSize: '22px'
              })}
            /> */}
            <AiFillThunderbolt className='text-yellow-500 size-14' />
          </div>
        </div>
        {/* Lines of Code */}
        <div className='border border-gray-50 w-full md:w-1/3 lg:w-1/4 h-24 flex justify-between px-4 sm:px-10 rounded-full'>
          <div className='flex flex-col justify-center'>
            <p className='text-lg sm:text-2xl' id='poppins-normal'>Lines of code</p>
            <p className='text-lg sm:text-2xl' id='poppins-normal'>{lineCount}</p>
          </div>
        </div>
      </div>
        <div className='md:flex justify-center items-center md:mt-10 md:my-0 my-10 px-4 sm:px-3'>
          <div className='md:border md:border-gray-50 w-full lg:w-10/12 md:flex md:flex-col lg:flex-row justify-between px-4 sm:px-3 py-0 md:rounded-full rounded-lg'>
            <div className='flex justify-center items-center mb-4 lg:mb-0 ml-6' id='poppins-semibold'>
              <CircularProgressbar
                className='md:w-40 md:h-40 w-40 h-40 text-white rounded-full'
                text={`${scanDetails.score}%`}
                value={scanDetails.score}
                maxValue={100}
                styles={buildStyles({
                  height: '100%',
                  pathColor: '#12D576',
                  textColor: '#ffffff',
                  backgroundColor: "#ffffff",
                  trailColor: '#d6d6d6',
                  textSize: '20px'
                })}
              />
            </div>
            <div className='flex justify-center items-center' id='poppins-regular'>
              <div className='ml-0 lg:ml-10 lg:text-left'>
                <p className='text-md sm:text-xl my-2' id='poppins-normal'>
                  Your Security Score is{' '}
                  <span className={`${getScoreDescription(score).color}`} id='poppins-semibold'>
                    {getScoreDescription(score).text}
                  </span>
                </p>

                <p className='text-md text-left sm:text-lg my-2' id='poppins-normal'>
                  The score is calculated based on lines of code and weights assigned to each issue depending on the severity and confidence.
                  To improve your score, view the detailed result and leverage the remediation solutions provided.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="md:flex justify-center hidden">
          <div className='md:border-dashed md:border w-9/12 md:bg-[#071F3D] border-gray-50 mx-4 sm:mx-10 lg:mx-32 my-5 sm:my-10 py-3 flex sm:flex-row justify-between px-4 sm:px-10 md:rounded-full'>
            <div className='md:flex gap-4 sm:gap-10 items-center'>
              <div className='md:flex-shrink-0 flex justify-center'>
                <Image src={scan} height={70} width={70} alt="scan" className="rounded-full" />
              </div>
              <div className='text-center w-full sm:w-8/12'>
                <p className='text-md text-left sm:text-xl' id='poppins-regular'>
                  This audit report has not been verified by the SolidityScan team. To learn more about our published reports.
                  <button className='text-blue-400 underline ml-1' id='poppins-semibold'>click here</button>
                </p>
              </div>
            </div>
          </div>
        </div> */}


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center mx-4 sm:mx-10 lg:mx-10 mt-0" id='poppins-normal'>
          <VulnerabilityCount scanDetails={scanDetails} />
          <div className="flex justify-center">
            <VulnerabilityPieChart scanDetails={scanDetails} />
          </div>
          <VulnerabilityCount scanDetails={scanDetails} reverse />
        </div>
        <div className='flex justify-center my-5 sm:my-10 px-4 sm:px-10'>
          <div className='flex justify-center border border-green-500 hover:scale-105 transform transition duration-150 ease-in-out rounded-3xl w-full sm:w-8/12 lg:w-4/12 shadow-2xl shadow-green-800 backdrop:opacity-15'>
            <button className='text-xl sm:text-3xl text-green-500 px-4 sm:px-6 py-3 sm:py-5' id='poppins-bold'>
              Get Detailed Report
            </button>
          </div>
        </div>

        <Sales />
      </div>

      <Footer />
    </div>
  );
};

// ScoreCard Component
const ScoreCard: React.FC<{ label: string, value: string }> = ({ label, value }) => (
  <div className="border border-gray-50 w-full md:w-1/3 lg:w-1/4 h-24 flex flex-col justify-center items-center rounded-full px-4">
    <p className="text-lg sm:text-2xl" id='poppins-semibold'>{label}</p>
    <p className="text-lg sm:text-2xl" id='poppins-medium'>{value}</p>
  </div>
);

// VulnerabilityCount Component
const VulnerabilityCount: React.FC<{ scanDetails: ScanDetails; reverse?: boolean }> = ({ scanDetails, reverse }) => {
  const vulnerabilities = reverse ? ["low", "informational", "gas"] : ["critical", "high", "medium"];

  return (
    <div className="space-y-4 lg:space-y-8">
      {vulnerabilities.map((type) => (
        <div key={type} className="border border-gray-100 hover:border-green-500 cursor-default px-4 py-4 rounded-full">
          <p className="text-lg sm:text-2xl text-center capitalize">
            {type}: {scanDetails.vulnerability_count[type as keyof VulnerabilityCount]}
          </p>
        </div>
      ))}
    </div>
  );
};
const getScoreDescription = (score: number): { text: string; color: string;} => {
  if (score >= 80) return { text: 'EXCELLENT', color: 'text-green-500',  };
  if (score >= 60) return { text: 'GOOD', color: 'text-orange-500',  };
  if (score >= 40) return { text: 'AVERAGE', color: 'text-yellow-500',  };
  return { text: 'POOR', color: 'text-red-500',  };
};


export default ScanPage;
