"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'; // Correct usage for dynamic routing in Next.js
import axios from 'axios';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import VulnerabilityPieChart from './utils/VulnerabilityPieChart';
import 'react-circular-progressbar/dist/styles.css';
import { motion, useAnimation } from "framer-motion";
import { calculateSecurityScore, AuditReport } from './utils/calculateSecurityScore';
// import scan from '../../AuditExpress/assets/scan.png';
import Image from 'next/image';
import Sales from '../../AuditExpress/components/Sales';
import Footer from '../../components/footer/footer';
import { ClipLoader } from 'react-spinners';
import { AiFillThunderbolt, AiOutlineCode } from "react-icons/ai"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaDiscord, FaGithub, FaLinkedin, FaTelegram, FaTwitter, FaUpload, FaWhatsapp } from 'react-icons/fa';

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
import Neox from "../../AuditExpress/assets/chains/NeoX.png";
import RequestQuoteModal from '../../components/modal/RequestQuoteModal';
import { useDispatch } from 'react-redux';
import { setIsRequestModalOpen } from '../../redux/slices/main/homeSlice';
import Navbar from '../../AuditExpress/components/Navbar';
import Head from 'next/head';

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
  NeoX: Neox,
};

const ScanPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  const [textColor, setTextColor] = useState(localStorage.getItem('theme') === "dark" ? "#ffffff" : "#000000");

  useEffect(() => {
    const handleThemeChange = () => {
      const theme = localStorage.getItem('theme');
      setTextColor(theme === "dark" ? "#ffffff" : "#000000");
    };

    // Listen to storage changes (for example, if theme changes elsewhere)
    window.addEventListener('storage', handleThemeChange);

    // Clean up event listener
    return () => {
      window.removeEventListener('storage', handleThemeChange);
    };
  }, []);
  const [scanDetails, setScanDetails] = useState<ScanDetails | null>(null);
  const [scanDuration, setScanDuration] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [score, setScore] = useState<number>(100);
  const [lineCount, setLineCount] = useState<number>(0);
  const controls = useAnimation();
  const dispatch = useDispatch();

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
        return 'https://eth.blockscout.com'; // Ethereum Blockscout
      case 'polygon':
        return 'https://polygon.blockscout.com/'; // Polygon Blockscout
      case 'avalanche':
        return 'https://blockscout.com/avax/mainnet'; // Avalanche Blockscout
      case 'binance':
        return 'https://bscscan.com'; // Binance Smart Chain Blockscout
      case 'arbitrum':
        return 'https://arbitrum.blockscout.com'; // Arbitrum Blockscout
      case 'optimism':
        return 'https://blockscout.com/optimism/mainnet'; // Optimism Blockscout
      case 'gnosis':
        return 'https://gnosis.blockscout.com'; // Gnosis Chain (formerly xDAI)
      case 'boba':
        return 'https://blockscout.com/boba/mainnet'; // Boba Network Blockscout
      case 'base':
        return 'https://base.blockscout.com'; // Base Blockscout
      case 'linea':
        return 'https://explorer.linea.build'; // Linea Blockscout
      case 'astar':
        return 'https://astar.blockscout.com'; // Astar Blockscout
      case 'celo':
        return 'https://celoscan.io/'; // Celo Blockscout
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

  if (router.isReady && !id && loading) {
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
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader color="#1E90FF" size={50} />
      </div>
    )
  }

  const socialMediaTemplates = {
    twitter: [
      {
        template: (pageUrl: string, projectName?: string) => 
          `Just got ${projectName || 'my project'} audited by @secure_DApp! 🔒 Super easy and informative process. Highly recommend! #BlockchainSecurity #SmartContractAudit ${pageUrl}`
      },
      {
        template: (pageUrl: string, projectName?: string) => 
          `SecureDApp made auditing ${projectName || 'my project'} a breeze. Check out the results! 🛡️ #CryptoSecurity #DAppAudit @secure_DApp ${pageUrl}`
      },
      {
        template: (pageUrl: string, projectName?: string) => 
          `${projectName || 'My project'}'s security is top-notch, thanks to @secure_DApp's comprehensive audit. Check out the results! 🚀 #BlockchainTrust #SecureDevelopment ${pageUrl}`
      },
      {
        template: (pageUrl: string, projectName?: string) => 
          `Blockchain security matters! Proud to have @secure_DApp audit ${projectName || 'our smart contracts'}. Transparency is key! 🔐 #CyberSecurity #Web3 ${pageUrl}`
      },
      {
        template: (pageUrl: string, projectName?: string) => 
          `Elevating ${projectName || 'project'} security with @secure_DApp. Professional, thorough, and reliable audit services! 💯 #SmartContractSecurity ${pageUrl}`
      }
    ],
    linkedin: [
      {
        template: (pageUrl: string, projectName?: string) => 
          `🔒 Blockchain Security Audit Completed ${projectName ? `for ${projectName}` : 'with SecureDApp'}!
  
  Ensuring the highest standards of smart contract security is crucial in the blockchain ecosystem. Our recent audit provides comprehensive insights and peace of mind.
  
  Key Highlights:
  - Thorough security analysis
  - Detailed report
  - Expert recommendations
  
  Check out the full audit report: ${pageUrl}
  
  #BlockchainSecurity #SmartContractAudit #CryptoSecurity #DAppDevelopment @secure_DApp`
      },
      {
        template: (pageUrl: string, projectName?: string) => 
          `🛡️ Investing in Security: ${projectName ? `${projectName}'s` : 'Our'} Smart Contract Audit Journey
  
  In the fast-evolving world of blockchain, security isn't just an option—it's a necessity. We partnered with SecureDApp to ensure our project meets the highest security standards.
  
  What we learned:
  - Vulnerabilities can hide in plain sight
  - Proactive auditing prevents potential risks
  - Expert insights are invaluable
  
  Full audit details: ${pageUrl}
  
  #Web3Security #BlockchainInnovation #TechDueDiligence @secure_DApp`
      }
    ]
  };
  
  const getRandomTemplate = (platform: 'twitter' | 'linkedin', projectName?: string) => {
    const templates = socialMediaTemplates[platform];
    const randomTemplate = templates[Math.floor(Math.random() * templates.length)];
    return randomTemplate.template(
      `${process.env.NEXT_PUBLIC_BASE_URL || 'https://securedapp.io'}/auditexpress/${id}`, 
      projectName
    );
  };
  
  const AuditReport = ({ 
    id, 
    title, 
    description, 
    imageUrl, 
    projectName 
  }: {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    projectName?: string;
  }) => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://securedapp.io';
    const pageUrl = `${baseUrl}/auditexpress/${id}`;
  
    // State to store randomly selected captions
    const [twitterCaption, setTwitterCaption] = useState('');
    const [linkedinCaption, setLinkedinCaption] = useState('');
  
    // Regenerate captions on component mount
    useEffect(() => {
      setTwitterCaption(getRandomTemplate('twitter', projectName));
      setLinkedinCaption(getRandomTemplate('linkedin', projectName));
    }, [id, projectName]);
  
    const handleShare = (platform: string) => {
      switch (platform) {
        case 'twitter':
          window.open(
            `https://twitter.com/intent/tweet?text=${encodeURIComponent(twitterCaption)}`,
            '_blank'
          );
          break;
        case 'linkedin':
          window.open(
            `https://www.linkedin.com/feed/?shareActive=true&text=${encodeURIComponent(linkedinCaption)}`,
            '_blank'
          );
          break;
        case 'discord':
          navigator.clipboard.writeText(`SecureDApp Audit Report: ${pageUrl}`);
          alert('Link copied to clipboard! You can now paste it in Discord.');
          break;
      }
    };

  return (
    <div className="container mx-auto p-4 dark:bg-[#001938] text-white min-h-screen flex flex-col">
       <Head>
        {/* Essential Meta Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />

        {/* Open Graph Meta Tags for social sharing */}
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:alt" content="SecureDApp Audit Express Report" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@secure_DApp" />
        <meta name="twitter:creator" content="@secure_DApp" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:image:alt" content="SecureDApp Audit Express Report" />

        {/* Additional SEO and Sharing Improvements */}
        <link rel="canonical" href={pageUrl} />
        <meta name="robots" content="index, follow" />
      </Head>

      <Navbar />
      <div className="pt-32 font-poppins-regular dark:text-white text-black" id="poppins">
        <div className="flex justify-center">
          <div className="lg:text-4xl text-2xl text-center font-bold lg:flex space-x-3">
            <h1 className='dark:text-white text-black'>
              SecureDApp <span className="text-green-600">Audit Express</span>
            </h1>
            <div className="lg:flex gap-2 hidden dark:text-white text-black">
              {[...Array(5)].map((_, index) => (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-8 text-yellow-400"
                  key={index}
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
          </div>
        </div>
        <p className="lg:text-lg text-xs dark:text-white text-black text-center font-semilight my-2">
          Trusted by more than 120+ companies
        </p>
      </div>
      <div id='poppins-regular'>
        <p className="text-center lg:px-10 px-10 text-balance dark:text-white text-black">
          Audit Express is a cutting-edge smart contract auditing tool designed to provide developers with a quick and easy assessment of their project's security. Developed by SecureDApp, Audit Express leverages advanced algorithms to identify potential vulnerabilities and bugs within smart contracts. Audit Express gives a clear and concise security score to gain a rapid understanding of your project's vulnerability profile.
        </p>
      </div>
      <div className='lg:flex flex-col md:flex-row justify-between mx-4 sm:mx-10 lg:mx-20 mt-12'>
        <div className="lg:mb-0 mb-4 md:mb-0 flex gap-4 dark:text-white text-black">
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
                    : scanDetails.address.substring(0, 16) + "..."}
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
                {(scanDetails.blockchain !== "github" && scanDetails.blockchain !== "upload") && (
                  <div className="ml-3 flex flex-col justify-center text-left">
                    <h1 className="text-base font-semibold">{scanDetails.blockchain}</h1>
                  </div>
                )}
              </span>
            </p>
          </div>
        </div>
        <div className="lg:flex lg:my-0 my-3 justify-end items-center dark:text-white text-black">
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
      <div className='flex flex-col md:flex-row justify-between dark:text-white text-black mx-4 sm:mx-10 lg:mx-20 my-2 sm:my-10 space-y-2 md:space-y-0'>
        {/* Security Score */}
        <div className='border border-black dark:border-gray-50 w-full md:w-1/3 lg:w-1/4 h-24 flex justify-between px-4 sm:px-10 rounded-full'>
          <div className='flex flex-col justify-center'>
            <p className='text-lg sm:text-2xl lg:text-xl' id='poppins-semibold'>Security Score</p>
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
        <div className='border border-black dark:border-gray-50 w-full md:w-1/3 lg:w-1/4 h-24 flex justify-between px-4 sm:px-10 rounded-full'>
          <div className='flex flex-col justify-center'>
            <p className='text-lg sm:text-2xl lg:text-xl' id='poppins-semibold'>Scan duration</p>
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
        <div className='border border-black dark:border-gray-50 w-full md:w-1/3 lg:w-1/4 h-24 flex justify-between px-4 sm:px-10 rounded-full'>
          <div className='flex flex-col justify-center'>
            <p className='text-lg sm:text-2xl lg:text-xl' id='poppins-semibold'>Lines of code</p>
            <p className='text-lg sm:text-2xl' id='poppins-normal'>{lineCount}</p>
          </div>
          <div className='flex items-center'>
            <AiOutlineCode className='text-white-500 size-14' />
          </div>
        </div>
      </div>

      {/* Security Score Description */}
      <div className='md:flex justify-center items-center md:my-0 my-10 px-4 sm:px-10'>
        <div className='md:border md:border-black md:dark:border-gray-50 w-full lg:w-10/12 md:flex md:flex-col lg:flex-row justify-between px-4 sm:px-10 py-0 md:rounded-full rounded-lg'>
          <div className='flex justify-center items-center mb-4 lg:mb-0' id='poppins-semibold'>
            <CircularProgressbar
              className='md:w-40 md:h-40 w-40 h-40 text-white rounded-full'
              text={`${scanDetails.score}%`}
              value={scanDetails.score}
              maxValue={100}
              styles={buildStyles({
                height: '100%',
                pathColor: '#12D576',
                textColor: textColor,
                backgroundColor: "#ffffff",
                trailColor: '#d6d6d6',
                textSize: '20px'
              })}
            />
          </div>
          <div className='flex justify-center items-center dark:text-white text-black'>
            <div className='ml-0 lg:ml-10 lg:text-left'>
              <p className='text-md sm:text-xl my-2' id='poppins-normal'>
                Your Security Score is{' '}
                <span className={`${getScoreDescription(score).color}`} id='poppins-bold'>
                  {getScoreDescription(score).text}
                </span>
              </p>

              <p className='text-md sm:text-lg my-2 dark:text-white text-black' id='poppins-normal'>
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
      <div className='grid grid-cols-1 lg:grid-cols-3 dark:text-white text-black gap-6 lg:gap-10 items-center mx-4 sm:mx-10 lg:mx-40 my-2 sm:my-10'>
        {/* Left Column */}
        <div className='space-y-4 lg:space-y-8' id='poppins-semibold'>
          <div className='border border-black dark:border-gray-100 hover:border-green-500 cursor-default px-4 sm:px-7 py-4 sm:py-7 w-full rounded-full'>
            <p className='text-lg sm:text-2xl text-center'>Critical: {scanDetails.vulnerability_count.critical}</p>
          </div>
          <div className='border border-black dark:border-gray-100 hover:border-green-500 cursor-default px-4 sm:px-7 py-4 sm:py-7 w-full rounded-full'>
            <p className='text-lg sm:text-2xl text-center'>High: {scanDetails.vulnerability_count.high}</p>
          </div>
          <div className='border border-black dark:border-gray-100 hover:border-green-500 cursor-default px-4 sm:px-7 py-4 sm:py-7 w-full rounded-full'>
            <p className='text-lg sm:text-2xl text-center'>Medium: {scanDetails.vulnerability_count.medium}</p>
          </div>
        </div>
        {/* Center Column - Pie Chart */}
        <div className='flex justify-center'>
          <VulnerabilityPieChart scanDetails={scanDetails} />
        </div>
        {/* Right Column */}
        <div className='space-y-4 lg:space-y-8' id='poppins-semibold'>
          <div className='border border-black dark:border-gray-100 hover:border-green-500 cursor-default px-4 sm:px-7 py-4 sm:py-7 w-full rounded-full'>
            <p className='text-lg sm:text-2xl text-center'>Low: {scanDetails.vulnerability_count.low}</p>
          </div>
          <div className='border border-black dark:border-gray-100 hover:border-green-500 cursor-default px-4 sm:px-7 py-4 sm:py-7 w-full rounded-full'>
            <p className='text-lg sm:text-2xl text-center'>Informational: {scanDetails.vulnerability_count.informational}</p>
          </div>
          <div className='border border-black dark:border-gray-100 hover:border-green-500 cursor-default px-4 sm:px-7 py-4 sm:py-7 w-full rounded-full'>
            <p className='text-lg sm:text-2xl text-center'>Gas: {scanDetails.vulnerability_count.gas}</p>
          </div>
        </div>
      </div>

      {/* View Audit Report PDF Button */}
      <div className='flex justify-center my-5 sm:my-10 px-4 sm:px-10 dark:text-white text-black'>
        <div className='flex justify-center border border-green-500 hover:scale-105 transform transition duration-150 ease-in-out rounded-3xl w-full sm:w-8/12 lg:w-4/12 shadow-2xl shadow-green-800 backdrop:opacity-15'>
          <button
            onClick={() => dispatch(setIsRequestModalOpen(true))}
            className="text-xl  sm:text-3xl text-green-500 px-4 sm:px-6 py-3 sm:py-5"
            id="poppins-bold"
          >
            Get Detailed Report
          </button>

        </div>
      </div>
      <div className="flex justify-center font-poppins-bold items-center mx-40 my-10 gap-6">
        <p className='text-green-500 font-poppins-bold lg:text-3xl text-xl hidden lg:block'>Share Your Report in Socials</p>
        <button
          onClick={() => handleShare('twitter')}
          aria-label="Share on Twitter"
          className="transition-transform hover:scale-110"
        >
          <svg
            width="20"
            height="20"
            className="text-3xl text-black dark:text-white hover:text-green-500"
            viewBox="0 0 1200 1227"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
              fill="currentColor"
            />
          </svg>


        </button>
        <button
          onClick={() => handleShare('discord')}
          aria-label="Share on Discord"
          className="transition-transform hover:scale-110"
        >
          <FaDiscord className="text-3xl text-black dark:text-white hover:text-green-500" />
        </button>
        <button
          onClick={() => handleShare('linkedin')}
          aria-label="Share on LinkedIn"
          className="transition-transform hover:scale-110"
        >
          <FaLinkedin className="text-3xl text-black dark:text-white hover:text-green-500" />
        </button>
        <button
          onClick={() => handleShare('telegram')}
          aria-label="Share on Telegram"
          className="transition-transform hover:scale-110"
        >
          <FaTelegram className="text-3xl text-black dark:text-white hover:text-green-500" />
        </button>
        {/* <button
            onClick={() => handleShare('whatsapp')}
            aria-label="Share on Telegram"
            className="transition-transform hover:scale-110"
          >
            <FaWhatsapp className="text-3xl text-green-500 hover:text-green-600" />
          </button> */}
      </div>

      {/* Sales and Footer */}
      <Sales />
      <div className='dark:text-white text-black'>
        <Footer />
      </div>
      <RequestQuoteModal />
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
};


export default ScanPage;
