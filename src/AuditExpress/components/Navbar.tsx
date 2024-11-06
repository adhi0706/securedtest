"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import securedapplogo from "../assets/securedapplogo.png";
import mode from "../assets/mode.png";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage the modal

  // Check localStorage for theme on mount and apply it
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setIsDarkMode(savedTheme === "dark");
  }, []);

  // Toggle the dark mode and persist the setting in localStorage
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Toggle dropdown and ensure only one stays open at a time
  const toggleDropdown = (name: string) => {
    setDropdownOpen(dropdownOpen === name ? null : name);
  };

  // Function to open the modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Handlers for hover events (desktop)
  const handleMouseEnter = (name: string) => {
    setDropdownOpen(name);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(null);
  };

  return (
    <nav className="px-4 text-white font-medium text-sm py-4 dark:text-black">
      <div className="flex justify-between max-w-7xl mx-auto items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/">
            <p className="flex items-center space-x-2">
              <Image src={securedapplogo} alt="SecureDApp Logo" height={40} width={40} />
              <span className="font-bold text-xl">SecureDApp</span>
            </p>
          </Link>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-5 bg-gray-600 p-4 rounded-full text-white">
          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("products")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="hover:text-gray-300 text-xl flex items-center focus:outline-none"
              onClick={() => toggleDropdown("products")}
              aria-haspopup="true"
              aria-expanded={dropdownOpen === "products"}
            >
              Products
              <svg
                className={`ml-2 w-4 h-4 transition-transform ${
                  dropdownOpen === "products" ? "rotate-180" : "rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {dropdownOpen === "products" && (
              <div className="absolute left-0 w-40 bg-[#001938] dark:bg-gray-800 text-white p-2 rounded shadow-lg z-50">
                <Link href="https://securedapp.io/solidity-shield">
                  <p className="block px-4 py-2 hover:bg-gray-200 hover:text-black dark:hover:bg-gray-700">
                    Solidity Shield
                  </p>
                </Link>
                <Link href="https://securedapp.io/secure-watch">
                  <p className="block px-4 py-2 hover:bg-gray-200 hover:text-black dark:hover:bg-gray-700">
                    Secure Watch
                  </p>
                </Link>
                <Link href="https://securedapp.io/secure-trace">
                  <p className="block px-4 py-2 hover:bg-gray-200 hover:text-black dark:hover:bg-gray-700">
                    Secure Trace
                  </p>
                </Link>
                <Link href="https://securedapp.io/secure-pad">
                  <p className="block px-4 py-2 hover:bg-gray-200 hover:text-black dark:hover:bg-gray-700">
                    Secure Pad
                  </p>
                </Link>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="hover:text-gray-300 text-xl flex items-center focus:outline-none"
              onClick={() => toggleDropdown("services")}
              aria-haspopup="true"
              aria-expanded={dropdownOpen === "services"}
            >
              Services
              <svg
                className={`ml-2 w-4 h-4 transition-transform ${
                  dropdownOpen === "services" ? "rotate-180" : "rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {dropdownOpen === "services" && (
              <div className="absolute left-0 w-[800px] bg-[#001938] dark:bg-gray-800 text-white p-4 rounded shadow-lg z-50">
                <div className="flex gap-4">
                  {/* Audit Section */}
                  <div>
                    <h1 className="pl-4 py-2 text-white font-semibold">Audit</h1>
                    <div>
                      <Link href="https://securedapp.io/smart-contract-audit">
                        <p className="block px-4 py-2 hover:bg-gray-200 text-white hover:text-black dark:hover:bg-gray-700">
                          Smart Contract Audit
                        </p>
                      </Link>
                      <Link href="https://securedapp.io/dapp-security-audit">
                        <p className="block px-4 py-2 hover:bg-gray-200 text-white hover:text-black dark:hover:bg-gray-700">
                          DApp Security Audit
                        </p>
                      </Link>
                      <Link href="https://securedapp.io/token-audit">
                        <p className="block px-4 py-2 hover:bg-gray-200 text-white hover:text-black dark:hover:bg-gray-700">
                          Token Audit
                        </p>
                      </Link>
                      <Link href="https://securedapp.io/rwa-audit">
                        <p className="block px-4 py-2 hover:bg-gray-200 text-white hover:text-black dark:hover:bg-gray-700">
                          RAW Audit
                        </p>
                      </Link>
                    </div>
                  </div>

                  {/* Security Section */}
                  <div>
                    <h1 className="pl-4 py-2 text-white font-semibold">Security</h1>
                    <div>
                      <Link href="https://securedapp.io/web3-security">
                        <p className="block px-4 py-2 hover:bg-gray-200 text-white hover:text-black dark:hover:bg-gray-700">
                          Web3 Security
                        </p>
                      </Link>
                      <Link href="https://securedapp.io/web3-kyc">
                        <p className="block px-4 py-2 hover:bg-gray-200 text-white hover:text-black dark:hover:bg-gray-700">
                          Web3 KYC
                        </p>
                      </Link>
                      <Link href="https://securedapp.io/blockchain-forensic">
                        <p className="block px-4 py-2 hover:bg-gray-200 text-white hover:text-black dark:hover:bg-gray-700">
                          Blockchain Forensic
                        </p>
                      </Link>
                    </div>
                  </div>

                  {/* Regulatory Solutions Section */}
                  <div>
                    <h1 className="pl-4 py-2 text-white font-semibold">Regulatory Solutions</h1>
                    <div>
                      <Link href="https://securedapp.io/crypto-compliance-aml">
                        <p className="block px-4 py-2 hover:bg-gray-200 text-white hover:text-black dark:hover:bg-gray-700">
                          Crypto Compliance & AML
                        </p>
                      </Link>
                      <Link href="https://securedapp.io/decentralized-identity-did">
                        <p className="block px-4 py-2 hover:bg-gray-200 text-white hover:text-black dark:hover:bg-gray-700">
                          Decentralized Identity (DID)
                        </p>
                      </Link>
                      <Link href="https://securedapp.io/dapp-development">
                        <p className="block px-4 py-2 hover:bg-gray-200 text-white hover:text-black dark:hover:bg-gray-700">
                          DApp Development
                        </p>
                      </Link>
                      <Link href="https://securedapp.io/nfts-development">
                        <p className="block px-4 py-2 hover:bg-gray-200 text-white hover:text-black dark:hover:bg-gray-700">
                          NFTs Development
                        </p>
                      </Link>
                      <Link href="https://securedapp.io/defi-development">
                        <p className="block px-4 py-2 hover:bg-gray-200 text-white hover:text-black dark:hover:bg-gray-700">
                          DeFi Development
                        </p>
                      </Link>
                    </div>
                  </div>

                  {/* Training & Education Section */}
                  <div>
                    <h1 className="pl-4 py-2 text-white font-semibold">Training & Education</h1>
                    <div>
                      <Link href="https://securedapp.io/levelup-academy">
                        <p className="block px-4 py-2 hover:bg-gray-200 text-white hover:text-black dark:hover:bg-gray-700">
                          LevelUp Academy
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("resources")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="hover:text-gray-300 text-xl flex items-center focus:outline-none"
              onClick={() => toggleDropdown("resources")}
              aria-haspopup="true"
              aria-expanded={dropdownOpen === "resources"}
            >
              Resources
              <svg
                className={`ml-2 w-4 h-4 transition-transform ${
                  dropdownOpen === "resources" ? "rotate-180" : "rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {dropdownOpen === "resources" && (
              <div className="absolute left-0 w-40 bg-[#001938] dark:bg-gray-800 text-white p-2 rounded shadow-lg z-50">
                <Link href="https://securedapp.io/blog">
                  <p className="block px-4 py-2 hover:bg-gray-200 hover:text-black dark:hover:bg-gray-700">
                    Blogs
                  </p>
                </Link>
                <Link href="https://securedapp.io/about">
                  <p className="block px-4 py-2 hover:bg-gray-200 hover:text-black dark:hover:bg-gray-700">
                    About Us
                  </p>
                </Link>
                <Link href="https://securedapp.io/authors">
                  <p className="block px-4 py-2 hover:bg-gray-200 hover:text-black dark:hover:bg-gray-700">
                    Our Authors
                  </p>
                </Link>
                <Link href="https://securedapp.io/media">
                  <p className="block px-4 py-2 hover:bg-gray-200 hover:text-black dark:hover:bg-gray-700">
                    Media
                  </p>
                </Link>
              </div>
            )}
          </div>

          {/* Pricing Link */}
          <Link href="/pricing">
            <p className="hover:text-gray-300 text-xl">Pricing</p>
          </Link>
        </div>

        {/* Right Section: Theme Toggle & Request Quote */}
        <div className="flex lg:gap-3 items-center">
          {/* Theme Toggle Button */}
          <button onClick={toggleTheme} className="focus:outline-none">
            {isDarkMode ? (
              // Sun Icon for Light Mode
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="yellow"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
                />
              </svg>
            )}
          </button>
          <button
            onClick={handleOpenModal}
            className="border border-green-500 hidden lg:block hover:bg-green-500 rounded-xl text-xl text-white p-2 text-nowrap transition-colors dark:text-black"
          >
            Request Quote
          </button>
        </div>
        <button onClick={toggleMenu} className="md:hidden text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center bg-[#001938] p-4 space-y-4">
          <div className="w-full">
            <button
              onClick={() => toggleDropdown("products")}
              className="w-full text-left px-4 py-2 bg-[#001938] rounded-md flex justify-between items-center"
            >
              Products
              <svg
                className={`ml-2 w-4 h-4 transition-transform ${
                  dropdownOpen === "products" ? "rotate-180" : "rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {dropdownOpen === "products" && (
              <div className="space-y-2 pl-4">
                <Link href="https://securedapp.io/solidity-shield">
                  <p className="block px-4 py-2 hover:bg-gray-200 hover:text-black dark:hover:bg-gray-700">
                    Solidity Shield
                  </p>
                </Link>
                <Link href="https://securedapp.io/secure-watch">
                  <p className="block px-4 py-2 hover:bg-gray-200 hover:text-black dark:hover:bg-gray-700">
                    Secure Watch
                  </p>
                </Link>
                <Link href="https://securedapp.io/secure-trace">
                  <p className="block px-4 py-2 hover:bg-gray-200 hover:text-black dark:hover:bg-gray-700">
                    Secure Trace
                  </p>
                </Link>
                <Link href="https://securedapp.io/secure-pad">
                  <p className="block px-4 py-2 hover:bg-gray-200 hover:text-black dark:hover:bg-gray-700">
                    Secure Pad
                  </p>
                </Link>
              </div>
            )}
          </div>
          <div className="w-full">
            <button
              onClick={() => toggleDropdown("services")}
              className="w-full text-left px-4 py-2 bg-[#001938] rounded-md flex justify-between items-center"
            >
              Services
              <svg
                className={`ml-2 w-4 h-4 transition-transform ${
                  dropdownOpen === "services" ? "rotate-180" : "rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {dropdownOpen === "services" && (
              <div className="mt-2 space-y-2 pl-4">
                <div>
                  <h1 className="pl-4 py-2 text-white font-semibold text-sm">Audit</h1>
                  <div>
                    <Link href="https://securedapp.io/smart-contract-audit">
                      <p className="block px-4 py-2 hover:bg-gray-200 hover:text-black dark:hover:bg-gray-700">
                        Smart Contract Audit
                      </p>
                    </Link>
                    <Link href="https://securedapp.io/dapp-security-audit">
                      <p className="block px-4 py-2 hover:bg-gray-200 hover:text-black dark:hover:bg-gray-700">
                        DApp Security Audit
                      </p>
                    </Link>
                    <Link href="https://securedapp.io/token-audit">
                      <p className="block px-4 py-2 hover:bg-gray-200 hover:text-black dark:hover:bg-gray-700">
                        Token Audit
                      </p>
                    </Link>
                    <Link href="https://securedapp.io/rwa-audit">
                      <p className="block px-4 py-2 hover:bg-gray-200 hover:text-black dark:hover:bg-gray-700">
                        RAW Audit
                      </p>
                    </Link>
                  </div>
                </div>
                <div>
                  <h1 className="pl-4 py-2 text-white font-semibold text-sm">Security</h1>
                  <div>
                    <Link href="https://securedapp.io/web3-security">
                      <p className="block px-4 py-2 hover:bg-gray-200 hover:text-black dark:hover:bg-gray-700">
                        Web3 Security
                      </p>
                    </Link>
                    <Link href="https://securedapp.io/web3-kyc">
                      <p className="block px-4 py-2 hover:bg-gray-200 hover:text-black dark:hover:bg-gray-700">
                        Web3 KYC
                      </p>
                    </Link>
                    <Link href="https://securedapp.io/blockchain-forensic">
                      <p className="block px-4 py-2 hover:bg-gray-200 hover:text-black dark:hover:bg-gray-700">
                        Blockchain Forensic
                      </p>
                    </Link>
                  </div>
                </div>

                {/* Regulatory Solutions Section */}
                <div>
                  <h1 className="pl-4 py-2 text-white font-semibold text-sm">Regulatory Solutions</h1>
                  <div>
                    <Link href="https://securedapp.io/crypto-compliance-aml">
                      <p className="block px-4 py-2 hover:bg-gray-200 hover:text-black dark:hover:bg-gray-700">
                        Crypto Compliance & AML
                      </p>
                    </Link>
                    <Link href="https://securedapp.io/decentralized-identity-did">
                      <p className="block px-4 py-2 hover:bg-gray-200 hover:text-black dark:hover:bg-gray-700">
                        Decentralized Identity (DID)
                      </p>
                    </Link>
                    <Link href="https://securedapp.io/dapp-development">
                      <p className="block px-4 py-2 hover:bg-gray-200 hover:text-black dark:hover:bg-gray-700">
                        DApp Development
                      </p>
                    </Link>
                    <Link href="https://securedapp.io/nfts-development">
                      <p className="block px-4 py-2 hover:bg-gray-200 hover:text-black dark:hover:bg-gray-700">
                        NFTs Development
                      </p>
                    </Link>
                    <Link href="https://securedapp.io/defi-development">
                      <p className="block px-4 py-2 hover:bg-gray-200 hover:text-black dark:hover:bg-gray-700">
                        DeFi Development
                      </p>
                    </Link>
                  </div>
                </div>

                {/* Training & Education Section */}
                <div>
                  <h1 className="pl-4 py-2 text-white font-semibold text-sm">Training & Education</h1>
                  <div>
                    <Link href="https://securedapp.io/levelup-academy">
                      <p className="block px-4 py-2 hover:bg-gray-200 hover:text-black dark:hover:bg-gray-700">
                        LevelUp Academy
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Resources Dropdown */}
          <div className="w-full md:hidden">
            <button
              onClick={() => toggleDropdown("resources")}
              className="w-full text-left px-4 py-2 bg-[#001938] rounded-md flex justify-between items-center"
            >
              Resources
              <svg
                className={`ml-2 w-4 h-4 transition-transform ${
                  dropdownOpen === "resources" ? "rotate-180" : "rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {dropdownOpen === "resources" && (
              <div className="mt-2 space-y-2 pl-4">
                <Link href="https://securedapp.io/blog">
                  <p className="block px-4 py-2 hover:bg-gray-200 hover:text-black dark:hover:bg-gray-700">
                    Blogs
                  </p>
                </Link>
                <Link href="https://securedapp.io/about">
                  <p className="block px-4 py-2 hover:bg-gray-200 hover:text-black dark:hover:bg-gray-700">
                    About Us
                  </p>
                </Link>
                <Link href="https://securedapp.io/authors">
                  <p className="block px-4 py-2 hover:bg-gray-200 hover:text-black dark:hover:bg-gray-700">
                    Our Authors
                  </p>
                </Link>
                <Link href="https://securedapp.io/media">
                  <p className="block px-4 py-2 hover:bg-gray-200 hover:text-black dark:hover:bg-gray-700">
                    Media
                  </p>
                </Link>
              </div>
            )}
          </div>

          {/* Pricing Link (Mobile) */}
          <Link href="">
            <p className="w-full text-center py-2 bg-[#001938] rounded-md hover:bg-gray-700 text-white">Pricing</p>
          </Link>
        </div>
      )}

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 z-40 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-[#011A3B] p-8 rounded-lg shadow-lg w-11/12 md:w-6/12 lg:w-6/12 h-auto border">
            <h2 className="text-xl text-center font-bold mb-4" id="poppins-bold">
              Tell us about your Projects
            </h2>
            <form id="poppins-regular" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="bg-[#1A304C] text-xs p-2 border rounded-xl"
                  required
                />
                <input
                  type="text"
                  placeholder="Mobile Number"
                  className="bg-[#1A304C] text-xs p-2 border rounded-xl"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <select
                  className="bg-[#1A304C] p-2 border text-xs rounded-xl text-white"
                  required
                >
                  <option value="">Choose a Service...</option>
                  <option>Dapp Development</option>
                  <option>Smart Contract Audit</option>
                  <option>Dapp Security Audit</option>
                  <option>Token Audit</option>
                  <option>Web3 KYC</option>
                  <option>Web3 Security</option>
                  <option>Blockchain Forensic</option>
                  <option>RWA Audit</option>
                  <option>Crypto Compliance & AML</option>
                  <option>Decentralized Identity (DID)</option>
                  <option>NFTs Development</option>
                  <option>DeFi Development</option>
                  <option>LevelUp Academy</option>
                </select>
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-[#1A304C] text-xs p-2 border rounded-xl"
                  required
                />
              </div>
              <textarea
                placeholder="Project Details"
                className="bg-[#1A304C] text-xs p-2 border w-full h-20 rounded-xl mb-4"
                required
              />
              <div className="flex items-center mb-4">
                <input type="checkbox" className="mr-2" required />
                <label className="text-lg">
                  I agree with the{" "}
                  <a
                    href="https://securedapp.gitbook.io/securedapp-launchpad/privacy-policy-securedapp"
                    className="underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>{" "}
                  and information being used to contact me
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input type="checkbox" className="mr-2" />
                <label className="text-lg">Get cyber-security research reports</label>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="mr-4 text-red-500"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded-xl"
                  onClick={() => {
                    // Handle form submission logic here
                    handleCloseModal();
                    // Optionally, add toast notifications or other feedback
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
