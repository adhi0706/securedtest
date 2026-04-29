'use client';
import React, { useState, ChangeEvent, useEffect } from "react";
import img from "../assets/grid.png";
import BlockchainModal from "./modal/BlockChainModal";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import AuthScreen from "../../pages/solidity-shield-scan/auth"
import OtpVerificationPopup from "./OTPverification";
import OTPverification from "./OTPverification";
import OTPVerification from "./OTPverification";
import { ClipLoader } from "react-spinners";

type Props = {};

const bg = {
  backgroundImage: `url(${img})`,
};

const Hero = (props: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSource, setSelectedSource] = useState<string>("contract_address"); // Initialize to empty string
  const [companyName, setCompanyName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [contractAddress, setContractAddress] = useState<string>("");
  const [selectedBlockchain, setSelectedBlockchain] = useState<string>("");
  const [githubURL, setGithubURL] = useState<string>("");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [contractName, setContractName] = useState<string>("");
  const [isContractNameAutoFilled, setIsContractNameAutoFilled] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [authRequired, setAuthRequired] = useState(false);
  const [isVerified, setIsVerified] = useState<boolean>(false); // New state for OTP verification
  

  // const [scanDuration, setScanDuration] = useState<number>(0);
  const Router = useRouter();

  // console.log(scanDuration);


  // Handlers for Modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);



  // Handler for Source Change
  const handleSourceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSource(e.target.value);
    // Clear previous inputs when source changes
    setCompanyName("");
    setContractAddress("");
    setGithubURL("");
    setUploadedFile(null);
    setContractName("");
    setSelectedBlockchain("");
    setIsContractNameAutoFilled(false);
    setError(null);
    setSuccessMessage(null);
    setEmail("");
  };

  // Handler for Input Changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { placeholder, value, files } = e.target;

    switch (placeholder) {
      case "Company Name":
        setCompanyName(value);
        break;
      case "Type or paste your contract address":
        setContractAddress(value);
        break;
      case "URL":
        setGithubURL(value);
        break;
      case "Email Address":
        setEmail(value);
        break
      case "Contract Name":
        if (!isContractNameAutoFilled) {
          setContractName(value);
        }
        break;
      default:
        if (files && files.length > 0) {
          setUploadedFile(files[0]);
        }
        break;
    }
  };

  // Handler for Blockchain Selection
  const handleSelectBlockchain = (name: string) => {
    setSelectedBlockchain(name);
  };

  // Basic Ethereum Address Validation
  const isValidAddress = (address: string) => {
    return /^0x[a-fA-F0-9]{40}$/.test(address);
  };

  const apiKeys = {
    Ethereum: "HSCU35TU2C6H937X9SN6K5KDW1YA26HN8U",
    Avalanche: "API_KEY_FOR_AVALANCHE",
    Binance: "W28N8GAQE7DJ44MNBADFM39QIM6FJ11Q2E",
    Arbitrum: "UK8MK41QI3VXPAR3962KFCK5EB32B558T7",
    Polygon: "4B8JZ5UMD5IVF5MZBZ3EJMTQ5A1XVKDU77",
    Optimism: "P6V69J8CN8QTEDBXMPWF34ZVSXQKDVMDPS",
    Gnosis: "A5EXMI6I79TG2UXXV3Y6S6PCE61GX6EFGT",
    Boba: "API_KEY_FOR_BOBA",
    Base: "7AU5TIMANNSS1R2TTMFMVD162IS5WH2CME",
    Linea: "T5AKV4SA4N8EBV2RTBKB6Q9ABZDRIXY5XU",
    Astar: "8a3f647c-cc0a-4349-8d42-39ef5a5b00c3",
    Celo: "JFYK9NFHTZJ7VEG8A7YFQR1XI6S4AF2KBG",
    "5ireChain": "API_KEY_FOR_5IRECHAIN",
  };

  const chainUrls = {
    Ethereum: "https://api.etherscan.io",
    Avalanche: "https://api.snowtrace.io",
    Binance: "https://api.bscscan.com",
    Arbitrum: "https://api.arbiscan.io",
    Polygon: "https://api.polygonscan.com",
    Optimism: "https://api-optimistic.etherscan.io",
    Gnosis: "https://api.gnosisscan.io",
    Boba: "https://api.bobascan.com",
    Base: "https://api.basescan.org",
    Linea: "https://api.lineascan.build",
    Astar: "https://astar.blockscout.com",
    Celo: "https://api.celoscan.io",
    "5ireChain": "https://api.5irescan.com",
  };

  const fetchContractFromEtherscan = async (addressOrUrl: string, selectedChain: string) => {
    try {
      // Define chain-specific API keys and base URLs
      const apiKey = apiKeys[selectedChain];
      const baseUrl = chainUrls[selectedChain];
  
      if (selectedChain === "Neo X") {
        const neoxBaseUrl = "https://xexplorer.neo.org";
        let contractAddress = addressOrUrl;
  
        if (addressOrUrl.includes(neoxBaseUrl)) {
          const parts = addressOrUrl.split("/address/");
          if (parts.length > 1) {
            contractAddress = parts[1].split("?")[0];
          } else {
            throw new Error("Invalid NeoX explorer URL format.");
          }
        }
  
        if (!isValidAddress(contractAddress)) {
          throw new Error("Invalid NeoX address format.");
        }
  
        // Construct the NeoX explorer URL
        const url = `${neoxBaseUrl}/address/${contractAddress}`;
  
        console.log(`Fetching NeoX contract from: ${url}`);
  
        // Fetch contract details (mock, since NeoX may not have API endpoints like Etherscan)
        const response = await fetch(url);
        const html = await response.text();
  
        // Parsing the response may require using DOMParser or a similar library for HTML
        console.log("NeoX Explorer response:", html);
  
        // This part is placeholder logic - adapt based on NeoX's actual response structure
        return {
          sourceCode: "Source code would be parsed from HTML (adapt logic here)",
          address: contractAddress,
          contractName: "Contract name extracted from HTML or NeoX-specific logic",
        };
      }
  
      // Default handling for Etherscan-compatible explorers
      if (!apiKey || !baseUrl) {
        throw new Error(`API key or URL not set for ${selectedChain}.`);
      }
  
      let contractAddress = addressOrUrl;
      if (addressOrUrl.includes("etherscan.io")) {
        const parts = addressOrUrl.split("/address/");
        if (parts.length > 1) {
          contractAddress = parts[1].split("#")[0];
        } else {
          throw new Error("Invalid Etherscan URL format.");
        }
      }
  
      if (!isValidAddress(contractAddress)) {
        throw new Error("Invalid Ethereum address format.");
      }
  
      const url = `${baseUrl}/api?module=contract&action=getsourcecode&address=${contractAddress}&apikey=${apiKey}`;
      console.log(`Fetching contract from: ${url}`);
  
      const response = await fetch(url);
      const data = await response.json();
      console.log("Etherscan-compatible response:", data);
  
      if (data.status === "1" && data.result.length > 0) {
        return {
          sourceCode: data.result[0].SourceCode,
          address: contractAddress,
          contractName: data.result[0].ContractName,
        };
      } else {
        throw new Error("Contract not found or invalid address.");
      }
    } catch (error) {
      console.error("Error fetching contract:", error);
      throw new Error("Error fetching contract details.");
    }
  };
  



  const fetchContractFromGitHub = async (repoUrl: string) => {
    try {
      if (!repoUrl.includes("github.com")) {
        throw new Error("Invalid GitHub URL.");
      }

      let rawUrl = repoUrl;

      if (repoUrl.includes("/blob/")) {
        rawUrl = repoUrl.replace("github.com", "raw.githubusercontent.com").replace("/blob/", "/");
      } else if (repoUrl.includes("/tree/")) {
        rawUrl = repoUrl.replace("github.com", "raw.githubusercontent.com").replace("/tree/", "/");
      } else {
        throw new Error("Unsupported GitHub URL format.");
      }


      const response = await fetch(rawUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch contract from GitHub.");
      }

      const content = await response.text();
      console.log("Fetched content from GitHub:", content);
      localStorage.setItem("giturl", rawUrl);

      return content;
    } catch (error) {
      console.error("Error fetching contract from GitHub:", error);
      throw new Error("Error fetching contract from GitHub.");
    }
  };

  // Function to fetch contract from File Upload
  const fetchContractFromFile = async (file: File) => {
    try {
      return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target?.result) {
            resolve(e.target.result as string);
          } else {
            reject("Error reading file.");
          }
        };
        reader.readAsText(file);
        localStorage.setItem("filename", file.name);
      });
    } catch (error) {
      console.error("Error reading contract from file:", error);
      throw new Error("Error reading contract from file.");
    }
  };


  // const extractCompilerVersion = (sourceCode: string): string | null => {
  //   const pragmaRegex = /pragma solidity\s+([^;]+);/;
  //   const match = sourceCode.match(pragmaRegex);
  //   if (match && match[1]) {
  //     return match[1].replace("^", "").trim();
  //   }
  //   return null;
  // };

  const extractCompilerVersion = (sourceCode: string): string | null => {
    const pragmaRegex = /pragma solidity\s+([^;]+);/g;
    let match;
    const versions: { major: number; minor: number; patch: number; original: string }[] = [];
  
    const parseVersion = (v: string) => {
      const parts = v.split(".").map(Number);
      return { major: parts[0] || 0, minor: parts[1] || 0, patch: parts[2] || 0 };
    };
  
    const compareVersions = (a: any, b: any) => {
      if (a.major !== b.major) return b.major - a.major;
      if (a.minor !== b.minor) return b.minor - a.minor;
      return b.patch - a.patch;
    };
  
    while ((match = pragmaRegex.exec(sourceCode)) !== null) {
      const pragma = match[1].trim();
      
      // Match explicit version: 0.8.9, 0.7.6 etc.
      const explicitVersionMatch = pragma.match(/\b\d+\.\d+\.\d+\b/);
      if (explicitVersionMatch) {
        const parsed = parseVersion(explicitVersionMatch[0]);
        versions.push({ ...parsed, original: explicitVersionMatch[0] });
      }
    }
  
    if (versions.length === 0) return null;
  
    // Sort and return the highest explicit version
    const highest = versions.sort(compareVersions)[0];
    return highest.original;
  };

  const extractContractName = (sourceCode: string): string | null => {
    const contractRegex = /contract\s+([A-Za-z0-9_]+)/;
    const match = sourceCode.match(contractRegex);
    if (match && match[1]) {
      return match[1].trim();
    }
    return null;
  };

  const validateFields = () => {

    if (!companyName) {
      toast.warning("Please Enter your Company Name.");
      return false;
    }
    if (!selectedSource) {
      toast.warning("Please select a source (contract address, GitHub, or upload).");
      return false;
    }

    if (selectedSource === "contract_address" && !contractAddress) {
      toast.warning("Please enter the contract address.");
      return false;
    }

    if (selectedSource === "github" && !githubURL) {
      toast.warning("Please enter the GitHub URL.");
      return false;
    }

    if (selectedSource === "upload" && !uploadedFile) {
      toast.warning("Please upload a contract file.");
      return false;
    }

    if (!email) {
      toast.warning("Please enter your email address.");
      return false;
    }
    if (!contractName && (selectedSource === "github" || selectedSource === "upload")) {
      toast.warning("Please enter the Contract Name.");
      return false;
    }

    if (selectedSource === "contract_address" && !selectedBlockchain) {
      toast.warning("Please select a blockchain.");
      return false;
    }


    return true;
  };

  const openOTPModal = () => {
    if (validateFields()) {
      setAuthRequired(true);
    }
  };

  const closeOTPModal = () => {
    setAuthRequired(false);
  };


  const handleOTPVerificationSuccess = () => {
    setIsVerified(true);
    setAuthRequired(false);
    handleGetAuditReport();
  };

  const handleGetAuditReport = async () => {
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      let sourceCode = null;
      let address = null;
      let extractedContractName = null;
      let blockchain = "";
      let emailAddress = email;

      if (!emailAddress) {
        toast.warning("Please enter your email address.");
        setLoading(false);
        return;
      }

      if (!selectedSource) {
        toast.warning("Please select a source (contract address, GitHub, or upload).");
        setLoading(false);
        return;
      }

      if (selectedSource === "contract_address" && !contractAddress) {
        toast.warning("Please enter the contract address.");
        setLoading(false);
        return;
      }

      if (selectedSource === "github" && !githubURL) {
        toast.warning("Please enter the GitHub URL.");
        setLoading(false);
        return;
      }

      if (selectedSource === "upload" && !uploadedFile) {
        toast.warning("Please upload a contract file.");
        setLoading(false);
        return;
      }

      if (!contractName && (selectedSource === "github" || selectedSource === "upload")) {
        toast.warning("Please enter the Contract Name.");
        setLoading(false);
        return;
      }

      if (selectedSource === "contract_address" && !selectedBlockchain) {
        toast.warning("Please select a blockchain.");
        setLoading(false);
        return;
      }


      if (selectedSource === "contract_address") {
        const data = await fetchContractFromEtherscan(contractAddress, selectedBlockchain);
        sourceCode = data.sourceCode;
        address = data.address;
        extractedContractName = data.contractName;
        blockchain = selectedBlockchain;

        if (!extractedContractName) {
          extractedContractName = extractContractName(sourceCode);
        }

      } else if (selectedSource === "github") {
        sourceCode = await fetchContractFromGitHub(githubURL);
        address = githubURL;
        extractedContractName = contractName;
        blockchain = "github";

      } else if (selectedSource === "upload") {
        sourceCode = await fetchContractFromFile(uploadedFile);
        extractedContractName = contractName;
        address = 'Contract file';
        blockchain = "upload";
      }

      if (!sourceCode) {
        throw new Error("Source code is empty.");
      }

      const compilerVersion = extractCompilerVersion(sourceCode);
      if (!compilerVersion) {
        throw new Error("Unable to extract compiler version from source code.");
      }

      const linesOfCode = sourceCode.replace(/\r\n/g, "\n").split('\n').length;

      const jsonData = {
        email: emailAddress,
        otp: localStorage.getItem("UserOtp"),
        compiler_version: compilerVersion,
        company_name: companyName,
        contract_name: extractedContractName,
        source_code: sourceCode,
        blockchain,
        lines: linesOfCode,
        address,
      };

      localStorage.setItem("address", address);
      localStorage.setItem("blockchain", blockchain);

      const startTime = performance.now();

      const response = await fetch("https://139-59-5-56.nip.io:3443/analyzeAE", {
        // const response = await fetch("http://localhost:8000/analyzeAE", {

        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonData),
      });
      // console.log(response);
      

      const endTime = performance.now();
      const durationInSeconds = ((endTime - startTime) / 1000).toFixed(2);

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API Error: ${errorText}`);
      }

      const resultData = await response.json();
      setSuccessMessage("Audit report submitted successfully!");
      Router.push({
        pathname: `/auditexpress/results/${resultData.id}`,
        query: {
          score: resultData.score,
          lines: linesOfCode,
          duration: durationInSeconds,
          vulnerabilityCount: JSON.stringify(resultData.vulnerabilityCount),
        },
      });

    } catch (err) {
      setError((err).message);
    } finally {
      setLoading(false);
    }
  };

  const cleanSourceCode = (sourceCode: string): string => {
    let cleanedCode = sourceCode.replace(/\/\/.*$/gm, "");

    // Remove multi-line comments
    cleanedCode = cleanedCode.replace(/\/\*[\s\S]*?\*\//g, "");

    // Remove any lines that contain URLs
    cleanedCode = cleanedCode.replace(/https?:\/\/[^\s]+/g, "");

    // Remove excess whitespace
    cleanedCode = cleanedCode.replace(/\n\s*\n/g, "\n").trim();

    return cleanedCode;
  };


  return (
    <div
  className={`dark:bg-custom-bg border-e-transparent mt-20 dark:text-white pb-10 relative`}
  style={bg}
>
  {loading && (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="animate-spin rounded-full h-14 w-14 border-t-2 border-b-2 border-green-700"></div>
    </div>
  )}
  <div className="pt-20 font-poppins-regular" id="poppins">
    <div className="flex justify-center">
      <div className="lg:text-4xl text-2xl text-center font-bold lg:flex space-x-3">
        <h1>
          SecureDApp <span className="text-green-600">Audit Express</span>
        </h1>
        <div className="lg:flex gap-2 hidden">
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
    <p className="lg:text-lg text-xs text-center font-semilight my-2">
      Trusted by more than 120+ companies
    </p>
  </div>

  {/* Description Section */}
  <div id="poppins-regular" className="px-4">
    <p className="text-center lg:px-10 px-10 text-balance">
      Audit Express is a cutting-edge smart contract auditing tool designed to
      provide developers with a quick and easy assessment of their project's
      security. Developed by SecureDApp, Audit Express leverages advanced
      algorithms to identify potential vulnerabilities and bugs within smart
      contracts. Audit Express gives a clear and concise security score to gain
      a rapid understanding of your project's vulnerability profile.
    </p>
    <div className="flex justify-center mt-6">
      <div className="lg:w-5/12 w-10/12 relative">
        <select
          className="w-full text-black bg-[#3a3688] border backdrop-filter backdrop-blur-lg shadow-2xl bg-opacity-20 rounded-xl px-4 py-3 text-2xl dark:text-white appearance-none"
          onChange={handleSourceChange}
          value={selectedSource}
        >
          <option className="text-black" value="">
            Select Source
          </option>
          {/* <option className="text-black" value="contract_address">
            Contract Address
          </option> */}
          <option className="text-black" value="github">
            GitHub
          </option>
          <option className="text-black" value="upload">
            Upload
          </option>
        </select>
        <svg
          className="absolute top-1/2 right-4 transform -translate-y-1/2 h-10 w-10 text-white dark:text-white pointer-events-none"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  </div>

  <div className="mt-8">
    {selectedSource === "contract_address" && (
      <>
        {/* Company Name */}
        <div className="flex justify-center">
          <input
            placeholder="Company Name"
            className="lg:w-5/12 w-8/12 text-xl font-light bg-[#3a3688] backdrop-filter backdrop-blur-lg
            shadow-2xl bg-opacity-10 rounded-2xl px-4 my-4 py-3 dark:text-gray-200 text-black dark:placeholder:text-gray-400 placeholder:text-gray-800"
            value={companyName}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex justify-center">
          <input
            placeholder="Email Address"
            className="lg:w-5/12 w-8/12 text-xl font-light bg-[#3a3688] backdrop-filter backdrop-blur-lg
            shadow-2xl bg-opacity-10 rounded-2xl px-4 my-4 py-3 dark:text-gray-200 text-black dark:placeholder:text-gray-400 placeholder:text-gray-800"
            value={email}
            onChange={handleInputChange}
          />
        </div>

        {/* Contract Address */}
        <div className="flex justify-center">
          <input
            placeholder="Type or paste your contract address"
            className="lg:w-5/12 w-8/12 text-xl font-light bg-[#3a3688] backdrop-filter backdrop-blur-lg
            shadow-2xl bg-opacity-10 rounded-2xl px-4 my-4 py-3 dark:text-gray-200 text-black dark:placeholder:text-gray-400 placeholder:text-gray-800"
            value={contractAddress}
            onChange={handleInputChange}
          />
        </div>

        {/* Blockchain Selector */}
        <div className="flex justify-center">
          <button
            className="lg:w-5/12 w-8/12 text-xl font-light bg-[#3a3688] backdrop-filter backdrop-blur-lg shadow-2xl bg-opacity-10 rounded-2xl px-4 my-4 py-3 text-gray-800 dark:text-gray-200 flex justify-center items-center"
            onClick={openModal}
          >
            {selectedBlockchain || "Select Blockchain"}
          </button>
        </div>

        {/* Indicate Auto-filled Contract Name */}
        {isContractNameAutoFilled && (
          <div className="flex justify-center">
            <p className="text-sm text-gray-400 mt-1">
              Contract name fetched from Etherscan.
            </p>
          </div>
        )}
      </>
    )}

    {selectedSource === "github" && (
      <>
        {/* GitHub URL */}
        <div className="flex justify-center">
          <input
            placeholder="URL"
            className="lg:w-5/12 w-8/12 text-xl font-light bg-[#3a3688] backdrop-filter backdrop-blur-lg
            shadow-2xl bg-opacity-10 rounded-2xl px-4 my-4 py-3 dark:text-gray-200 text-gray-800"
            value={githubURL}
            onChange={handleInputChange}
          />
        </div>

        {/* Company Name */}
        <div className="flex justify-center">
          <input
            placeholder="Company Name"
            className="lg:w-5/12 w-8/12 text-xl font-light bg-[#3a3688] backdrop-filter backdrop-blur-lg
            shadow-2xl bg-opacity-10 rounded-2xl px-4 my-4 py-3 dark:text-gray-200 text-gray-800"
            value={companyName}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex justify-center">
          <input
            placeholder="Email Address"
            type="email"
            className="lg:w-5/12 w-8/12 text-xl font-light bg-[#3a3688] backdrop-filter backdrop-blur-lg
            shadow-2xl bg-opacity-10 rounded-2xl px-4 my-4 py-3 dark:text-gray-200 text-gray-800"
            value={email}
            onChange={handleInputChange}
          />
        </div>

        {/* Contract Name (Manual Input) */}
        <div className="flex justify-center">
          <input
            placeholder="Contract Name"
            className="lg:w-5/12 w-8/12 text-xl font-light bg-[#3a3688] backdrop-filter backdrop-blur-lg
            shadow-2xl bg-opacity-10 rounded-2xl px-4 my-4 py-3 dark:text-gray-200 text-gray-800"
            value={contractName}
            onChange={handleInputChange}
          />
        </div>
      </>
    )}

    {selectedSource === "upload" && (
      <>
        {/* File Upload */}
        <div className="flex justify-center">
          <input
            type="file"
            accept=".sol"
            className="lg:w-5/12 w-8/12 text-xl font-light bg-[#3a3688] backdrop-filter backdrop-blur-lg
            shadow-2xl bg-opacity-10 rounded-2xl px-4 my-4 py-3 dark:text-gray-200 text-gray-800"
            onChange={handleInputChange}
          />
        </div>

        {/* Company Name */}
        <div className="flex justify-center">
          <input
            placeholder="Company Name"
            className="lg:w-5/12 w-8/12 text-xl font-light bg-[#3a3688] backdrop-filter backdrop-blur-lg
            shadow-2xl bg-opacity-10 rounded-2xl px-4 my-4 py-3 dark:text-gray-200 text-gray-800"
            value={companyName}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex justify-center">
          <input
            placeholder="Email Address"
            className="lg:w-5/12 w-8/12 text-xl font-light bg-[#3a3688] backdrop-filter backdrop-blur-lg
            shadow-2xl bg-opacity-10 rounded-2xl px-4 my-4 py-3 dark:text-gray-200 text-gray-800"
            value={email}
            onChange={handleInputChange}
          />
        </div>

        {/* Contract Name (Manual Input) */}
        <div className="flex justify-center">
          <input
            placeholder="Contract Name"
            className="lg:w-5/12 w-8/12 text-xl font-light bg-[#3a3688] backdrop-filter backdrop-blur-lg
            shadow-2xl bg-opacity-10 rounded-2xl px-4 my-4 py-3 dark:text-gray-200 text-gray-800"
            value={contractName}
            onChange={handleInputChange}
          />
        </div>
      </>
    )}
  </div>
  <div className="flex justify-center text-black text-xl py-4">
    {authRequired && !isVerified ? (
      <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-transparent p-6 rounded-lg shadow-lg lg:w-8/12 w-11/12 relative">
          <OTPVerification
            onSuccess={handleOTPVerificationSuccess}
            OTPemail={email}
            onClose={closeOTPModal} // This should be a function to close the component
            theme="dark" // or "light", depending on the desired theme
          />
        </div>
      </div>
    ) : (
      <button
        className="px-6 py-3 rounded-lg bg-green-500 hover:bg-green-600 hover:scale-105
      transform transition disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={openOTPModal}
        disabled={loading}
      >
        {loading ? "Fetching..." : "Get Audit Report"}
      </button>
    )}
  </div>
  {error && (
    <div className="flex justify-center text-red-500">
      <p>{error}</p>
    </div>
  )}
  {successMessage && (
    <div className="flex justify-center text-green-500">
      <p>{successMessage}</p>
    </div>
  )}
  <div className="z-50">
    <BlockchainModal
      isOpen={isModalOpen}
      onClose={closeModal}
      onSelect={handleSelectBlockchain}
    />
  </div>
  <div></div>
</div>

    
  );
};

export default Hero;
