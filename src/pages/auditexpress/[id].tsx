'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'; // Correct usage for dynamic routing in Next.js
import axios from 'axios';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import VulnerabilityPieChart from './utils/VulnerabilityPieChart';
import 'react-circular-progressbar/dist/styles.css';
import { FaArrowLeft } from 'react-icons/fa';
import Navbar from '../../components/navbar/Navbar';
import { motion, useAnimation } from "framer-motion";
import { calculateSecurityScore, AuditReport } from './utils/calculateSecurityScore';
import scan from '../../AuditExpress/assets/scan.png';
import Image from 'next/image';
import Sales from '../../AuditExpress/components/Sales';
import Footer from '../../components/footer/footer';
import { ClipLoader } from 'react-spinners';
import { AiFillThunderbolt, AiTwotoneThunderbolt } from "react-icons/ai"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaGithub,FaUpload } from 'react-icons/fa';

// Import blockchain logos (ensure these paths are correct)
import ethereum from "../../AuditExpress/assets/chains/ethereum.png";
import BNB from "../../AuditExpress/assets/chains/binance.png";
import Avalanche from "../../AuditExpress/assets/chains/avalanche.png";
import Arbitrum from "../../AuditExpress/assets/chains/arbitrum.png";
import Optimism from "../../AuditExpress/assets/chains/optimism.png";
import Gnosis from "../../AuditExpress/assets/chains/gnosis.png";
import Boba from "../../AuditExpress/assets/chains/boba.png";
import Base from "../../AuditExpress/assets/chains/base.png";
import Linea from "../../AuditExpress/assets/chains/lineascan.png";
import Astar from "../../AuditExpress/assets/chains/astar.png";
import Celo from "../../AuditExpress/assets/chains/celo.png";
import fire from "../../AuditExpress/assets/chains/firechain_light.png";
import Polygon from "../../AuditExpress/assets/chains/polygon.png";

// Updated Type Definitions
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
  lines: number
  total_time_taken: any;
};

const blockchainLogos = {
  Ethereum: ethereum,
  Binance: BNB,
  Avalanche: Avalanche,
  Arbitrum: Arbitrum,
  Optimism: Optimism,
  Gnosis: Gnosis,
  Boba: Boba,
  Base: Base,
  Linea: Linea,
  Astar: Astar,
  Celo: Celo,
  FireChain: fire,
  Polygon: Polygon,
};

const ScanPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const [scanDetails, setScanDetails] = useState<ScanDetails | null>(null);
  const [scanDuration, setScanDuration] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [score, setScore] = useState<number>(100);
  const [lineCount, setLineCount] = useState<number>(0);
  const controls = useAnimation();

  const handleViewOnBlockscout = () => {
    if (!scanDetails || !scanDetails.address) return;

    if (scanDetails.address.startsWith("https://github.com/")) {
      window.open(scanDetails.address, "_blank");
    } else {
      // Otherwise, open the Blockscout URL
      const blockscoutBaseURL = getBlockscoutURL(scanDetails.blockchain);
      const contractAddress = scanDetails.address;

      if (blockscoutBaseURL && contractAddress) {
        const blockscoutURL = `${blockscoutBaseURL}/address/${contractAddress}`;
        window.open(blockscoutURL, "_blank");
      } else {
        console.error("Invalid blockchain or contract address.");
      }
    }
  };

  const getBlockscoutURL = (blockchain: string): string | null => {
    switch (blockchain.toLowerCase()) {
      case 'ethereum':
        return 'https://blockscout.com/eth/mainnet'; // Ethereum Blockscout
      case 'polygon':
        return 'https://blockscout.com/polygon/mainnet'; // Polygon Blockscout
      case 'avalanche':
        return 'https://blockscout.com/avax/mainnet'; // Avalanche Blockscout
      case 'binance':
        return 'https://blockscout.com/bsc/mainnet'; // Binance Smart Chain Blockscout
      case 'arbitrum':
        return 'https://blockscout.com/arbitrum/mainnet'; // Arbitrum Blockscout
      case 'optimism':
        return 'https://blockscout.com/optimism/mainnet'; // Optimism Blockscout
      case 'gnosis':
        return 'https://blockscout.com/xdai/mainnet'; // Gnosis Chain (formerly xDAI)
      case 'boba':
        return 'https://blockscout.com/boba/mainnet'; // Boba Network Blockscout
      case 'base':
        return 'https://blockscout.com/base/mainnet'; // Base Blockscout
      case 'linea':
        return 'https://blockscout.com/linea/mainnet'; // Linea Blockscout
      case 'astar':
        return 'https://blockscout.com/astar/mainnet'; // Astar Blockscout
      case 'celo':
        return 'https://blockscout.com/celo/mainnet'; // Celo Blockscout
      case 'firechain':
        return 'https://blockscout.com/firechain/mainnet'; // Firechain Blockscout
      default:
        return null; // Default case if blockchain is not found
    }
  };


  useEffect(() => {
    const fetchScanDetails = async () => {
      setLoading(true);
      setError(null);

      try {
        if (!id || Array.isArray(id)) {
          throw new Error('Invalid scan ID.');
        }

        const idNumber = parseInt(id, 10);
        if (isNaN(idNumber)) {
          throw new Error('Invalid scan ID format.');
        }

        const startTime = performance.now(); // Record the start time

        const response = await axios.post('https://139-59-5-56.nip.io:3443/getScanByIdAE', { id: idNumber });

        const endTime = performance.now(); // Record the end time
        const durationInSeconds = ((endTime - startTime) / 1000).toFixed(2);
        console.log("Calculated duration:", durationInSeconds);


        if (response.status === 200) {
          const fetchedData: ScanDetails = response.data;
          console.log(fetchedData);
          setScanDuration(fetchedData.total_time_taken);


          if (!fetchedData) {
            throw new Error('Scan data is incomplete.');
          }

          setScanDetails(fetchedData);
          setLineCount(fetchedData.lines);
        } else {
          setError('Failed to fetch scan details.');
        }
      } catch (err: any) {
        setError(err.message || 'An error occurred while fetching scan details.');
      }

      setLoading(false);
    };

    if (id) {
      fetchScanDetails();
    }
  }, [id]);

  useEffect(() => {
    if (scanDetails) {
      // Prepare the audit report structure using vulnerability_count
      const vulnerabilityCount = {
        critical: scanDetails.vulnerability_count.critical,
        high: scanDetails.vulnerability_count.high,
        medium: scanDetails.vulnerability_count.medium,
        low: scanDetails.vulnerability_count.low,
        informational: scanDetails.vulnerability_count.informational,
        gas: scanDetails.vulnerability_count.gas,
      };

      const auditReport: AuditReport = {
        vulnerabilityCount,
        vulnerabilities: scanDetails.vulnerabilities
      };

      // Calculate the security score
      const calculatedScore = calculateSecurityScore(auditReport);
      setScore(calculatedScore);

      // Animate the progress bar
      controls.start({
        value: calculatedScore,
        transition: { duration: 2, ease: "easeInOut" },
      });
    }
  }, [scanDetails, controls]);

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

  return (
    <div className="container mx-auto p-4 bg-[#011A3B] text-white min-h-screen flex flex-col">
      <Navbar />
      <div className='lg:flex flex-col md:flex-row justify-between mx-4 sm:mx-10 lg:mx-20 mt-24'>
        <div className="lg:mb-0 mb-4 md:mb-0 flex gap-4">
          <div className='h-10 w-10'>
            {/^0x[a-fA-F0-9]{40}$/.test(scanDetails.address) ? (
              blockchainLogos[scanDetails.blockchain] ? (
                <Image
                  className="h-10 w-10 mr-2"
                  src={blockchainLogos[scanDetails.blockchain]}
                  alt={`${scanDetails.blockchain} logo`}
                  width={40}
                  height={40}
                />
              ) : null
            ) : scanDetails.address.startsWith("https://github.com/") ? (
              <FaGithub className="h-10 w-10 text-5xl text-white size-16 mr-2" />
            ) : (
              <FaUpload className="h-10 w-10 text-5xl text-white size-16 mr-2" />
            )}
          </div>
          <div>

            <button className='truncate sm:hidden'>
              <span className='text-xl sm:text-2xl' id='poppins-semibold'>
                {scanDetails.address.startsWith("https://github.com/")
                  ? "Source GitHub"
                  : scanDetails.address.endsWith("Contract file")
                    ? "Source Contract File"
                    : scanDetails.address.substring(0,16)+"..."}
              </span>
            </button>
            <button className='hidden sm:block'>
              <span className='text-xl sm:text-2xl' id='poppins-semibold'>
                {scanDetails.address.startsWith("https://github.com/")
                  ? "Source GitHub"
                  : scanDetails.address.endsWith("Contract file")
                    ? "Source Contract File"
                    : scanDetails.address}
              </span>
            </button>
            <p>
              <span className="text-md sm:text-lg text-gray-400" id='poppins-medium'>
                {scanDetails.blockchain}
              </span>
            </p>
          </div>
        </div>

        <div className="lg:flex lg:my-0 my-3 justify-end items-center">
          {scanDetails.address && (
            <>

              {/^0x[a-fA-F0-9]{40}$/.test(scanDetails.address) ? (
                <button
                  className="text-green-500 underline text-xl sm:text-2xl"
                  onClick={handleViewOnBlockscout}
                >
                  View on Blockscout
                </button>
              ) : scanDetails.address.startsWith("https://github.com/") ? (
                <button
                  className="text-green-500 underline text-xl sm:text-2xl"
                  onClick={handleViewOnBlockscout} // Ensure this function is defined to handle GitHub links
                >
                  View on Github
                </button>
              ) : null}
            </>
          )}
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

      {/* Security Score Description */}
      <div className='md:flex justify-center items-center md:my-0 my-10 px-4 sm:px-10'>
        <div className='md:border md:border-gray-50 w-full lg:w-10/12 md:flex md:flex-col lg:flex-row justify-between px-4 sm:px-10 py-0 md:rounded-full rounded-lg'>
          <div className='flex justify-center items-center mb-4 lg:mb-0' id='poppins-semibold'>
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
          <div className='flex justify-center items-center'>
            <div className='ml-0 lg:ml-10 lg:text-left'>
              <p className='text-md sm:text-xl my-2' id='poppins-normal'>
                Your Security Score is{' '}
                <span className={`${getScoreDescription(score).color}`} id='poppins-semibold'>
                  {getScoreDescription(score).text}
                </span>
              </p>

              <p className='text-md sm:text-lg my-2' id='poppins-normal'>
                The Security score is calculated based on lines of code and weights assigned to each issue depending on the severity and confidence.
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


      {/* Vulnerability Counts and Pie Chart */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 items-center mx-4 sm:mx-10 lg:mx-40 my-2 sm:my-10'>
        {/* Left Column */}
        <div className='space-y-4 lg:space-y-8' id='poppins-semibold'>
          <div className='border border-gray-100 hover:border-green-500 cursor-default px-4 sm:px-7 py-4 sm:py-7 w-full rounded-full'>
            <p className='text-lg sm:text-2xl text-center'>Critical: {scanDetails.vulnerability_count.critical}</p>
          </div>
          <div className='border border-gray-100 hover:border-green-500 cursor-default px-4 sm:px-7 py-4 sm:py-7 w-full rounded-full'>
            <p className='text-lg sm:text-2xl text-center'>High: {scanDetails.vulnerability_count.high}</p>
          </div>
          <div className='border border-gray-100 hover:border-green-500 cursor-default px-4 sm:px-7 py-4 sm:py-7 w-full rounded-full'>
            <p className='text-lg sm:text-2xl text-center'>Medium: {scanDetails.vulnerability_count.medium}</p>
          </div>
        </div>
        {/* Center Column - Pie Chart */}
        <div className='flex justify-center'>
          <VulnerabilityPieChart scanDetails={scanDetails} />
        </div>
        {/* Right Column */}
        <div className='space-y-4 lg:space-y-8' id='poppins-semibold'>
          <div className='border border-gray-100 hover:border-green-500 cursor-default px-4 sm:px-7 py-4 sm:py-7 w-full rounded-full'>
            <p className='text-lg sm:text-2xl text-center'>Low: {scanDetails.vulnerability_count.low}</p>
          </div>
          <div className='border border-gray-100 hover:border-green-500 cursor-default px-4 sm:px-7 py-4 sm:py-7 w-full rounded-full'>
            <p className='text-lg sm:text-2xl text-center'>Informational: {scanDetails.vulnerability_count.informational}</p>
          </div>
          <div className='border border-gray-100 hover:border-green-500 cursor-default px-4 sm:px-7 py-4 sm:py-7 w-full rounded-full'>
            <p className='text-lg sm:text-2xl text-center'>Gas: {scanDetails.vulnerability_count.gas}</p>
          </div>
        </div>
      </div>

      {/* View Audit Report PDF Button */}
      <div className='flex justify-center my-5 sm:my-10 px-4 sm:px-10'>
        <div className='flex justify-center border border-green-500 hover:scale-105 transform transition duration-150 ease-in-out rounded-3xl w-full sm:w-8/12 lg:w-4/12 shadow-2xl shadow-green-800 backdrop:opacity-15'>
          <button
          onClick={()=> typeof window!=="undefined" && window.open("https://securedapp.io/solidity-shield-scan/contact")}
           className='text-xl sm:text-3xl text-green-500 px-4 sm:px-6 py-3 sm:py-5' id='poppins-bold'>
            Get Detailed Report
          </button>
        </div>
      </div>

      {/* Sales and Footer */}
      <Sales />
      <Footer />
    </div>
  );
};

// Utility function to get score description
const getScoreDescription = (score: number): { text: string; color: string; } => {
  if (score >= 90) return { text: 'EXCELLENT', color: 'text-green-500', };
  if (score >= 75) return { text: 'GOOD', color: 'text-orange-500', }
  if (score >= 60) return { text: 'AVERAGE', color: 'text-yellow-500', };
  return { text: 'POOR', color: 'text-red-500', };
};


export default ScanPage;
