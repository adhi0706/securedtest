"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link"; // Use Link from next/link
import Image, { StaticImageData } from "next/image"; // Next.js Image component
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { ClipLoader } from "react-spinners";

// Import blockchain logos
import ethereum from "../assets/chains/ethereum.png";
import BNB from "../assets/chains/binance.png";
import Avalanche from "../assets/chains/avalanche.png";
import Arbitrum from "../assets/chains/arbitrum.png";
import Optimism from "../assets/chains/optimism.png";
import Gnosis from "../assets/chains/gnosis.png";
import Boba from "../assets/chains/boba.png";
import Base from "../assets/chains/base.png";
import Linea from "../assets/chains/lineascan.png";
import Astar from "../assets/chains/astar.png";
import Celo from "../assets/chains/celo.png";
import fire from "../assets/chains/firechain_light.png";
import Polygon from "../assets/chains/polygon.png";

// Mapping of blockchain names to their logos
const blockchainLogos: { [key: string]: StaticImageData } = {
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

type VulnerabilityCount = {
  gas: number;
  low: number;
  medium: number;
  high: number;
  critical: number;
  informational: number;
};

type ScanData = {
  id: number;
  blockchain: string;
  companyName: string;
  contractName: string;
  contractAddress: string;
  compilerVersion: string;
  securityScore: number;
  vulnerabilityCount: VulnerabilityCount;
  createdAt: string;
};

type ApiResponse = {
  scans: {
    id: number;
    company_name: string;
    contract_name: string;
    blockchain: string;
    address: string;
    compiler_version: string;
    score: string;
    vulnerability_count: VulnerabilityCount;
    created_at: string;
  }[];
  totalPages: number;
  currentPage: number;
  totalScans: number;
};

const Scanned = () => {
  const [data, setData] = useState<ScanData[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchScans = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("https://139-59-5-56.nip.io:3443/getscansAE", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ page }),
        });
        console.log("Fetch Response:", response);

        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
        }

        const result: ApiResponse = await response.json();
        console.log("API Result:", result);

        const formattedData: ScanData[] = result.scans.map((scan) => ({
          id: scan.id,
          blockchain: scan.blockchain,
          companyName: scan.company_name.trim(),
          contractName: scan.contract_name.trim(),
          contractAddress: scan.address || "",
          compilerVersion: scan.compiler_version,
          securityScore: parseFloat(scan.score) || 0,
          vulnerabilityCount: scan.vulnerability_count,
          createdAt: scan.created_at,
        }));

        setData(formattedData);
        setTotalPages(result.totalPages || 1);
      } catch (error: any) {
        setError(error.message || "An unexpected error occurred");
      }
      setLoading(false);
    };

    fetchScans();
  }, [page]);

  return (
    <div>
      <div>
        <h1 className="text-4xl text-center pb-7 text-white lg:mt-20 mt-14" id="poppins-semibold">
          Recent Scanned Contracts
        </h1>
      </div>
      <div className="overflow-x-auto lg:mx-20 mx-5 my-10">
  {loading ? (
    <div className="flex justify-center items-center">
      <ClipLoader color="#1E90FF" size={50} />
    </div>
  ) : error ? (
    <p className="text-center text-red-500">Error: {error}</p>
  ) : data.length === 0 ? (
    <p className="text-center">No scans available.</p>
  ) : (
    <div className="max-w-full">
      <table className="w-full text-left table-auto border-collapse">
        <thead className="bg-green-500 rounded-lg text-white text-lg">
          <tr>
            <th className="p-3 text-center">Blockchain</th>
            <th className="p-3 text-center">Company Name</th>
            <th className="p-3 text-center">Contract Name</th>
            <th className="p-3 text-center">Contract Address</th>
            <th className="p-3 text-center">Security Score</th>
            <th className="p-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data
            .slice()
            .reverse()
            .map((item) => (
              <tr key={item.id} className="border-b">
                <td className="p-3 flex justify-center items-center">
                  {blockchainLogos[item.blockchain] ? (
                    <Image
                      className="h-10 w-10"
                      src={blockchainLogos[item.blockchain]}
                      alt={`${item.blockchain} logo`}
                      width={40}
                      height={40}
                    />
                  ) : (
                    <div className="h-10 w-10 bg-gray-300 flex justify-center items-center">
                      <span className="text-gray-600">N/A</span>
                    </div>
                  )}
                  <h1 className="ml-2 text-center">{item.blockchain}</h1>
                </td>
                <td className="p-3 text-center">{item.companyName}</td>
                <td className="p-3 text-center">{item.contractName}</td>
                <td className="p-3 text-center">{item.contractAddress}</td>
                <td className="p-3">
                  <div className="flex justify-center items-center">
                    <div className="w-10 h-10 mr-3">
                      <CircularProgressbar
                        value={item.securityScore}
                        maxValue={100}
                        text={`${Math.round(item.securityScore)}%`}
                        styles={buildStyles({
                          pathColor: "#1E90FF",
                          textColor: "#1E90FF",
                          trailColor: "#d6d6d6",
                          textSize: "22px",
                        })}
                      />
                    </div>
                  </div>
                </td>
                <td className="p-3 text-center">
                  <Link href={`/auditexpress/${item.id}`}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      View Scan
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )}
</div>


      {/* Pagination Controls */}
      <div className="flex justify-center mt-4">
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 ${
            page === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Previous
        </button>
        <button
          disabled={page === totalPages}
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
            page === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Scanned;
