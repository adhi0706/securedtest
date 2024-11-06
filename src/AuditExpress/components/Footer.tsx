// components/Footer.tsx
"use client";
import React, { useState } from "react";
import Logo from "../assets/securedapplogo.png";
import Image from "next/image";
import { FaDiscord, FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";

const Footer = () => {
  const [email, setEmail] = useState("");

  async function subscribe() {
    if (email.trim().length === 0) {
      toast.warn("Please enter your email");
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      toast.error("Invalid Email");
    } else {
      try {
        const response = await fetch("https://139-59-5-56.nip.io:3443/addSecurewatchUser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            mail: email,
          }),
        });

        if (response.ok) {
          console.log(response);
          
          toast.success("Successfully Subscribed!");
          setEmail("");
        } else {
          const errorText = await response.text();
          toast.error(`Subscription failed: ${errorText}`);
        }
      } catch (error) {
        console.error(error);
        toast.error("Unexpected error! Try again.");
      }
    }
  }

  return (
    <footer className="bg-darkblue text-white dark:text-black lg:py-8">
      {/* Newsletter Section */}
      <div className="lg:flex justify-between max-w-7xl lg:mx-20 sm:px-6 lg:px-8 md:block text-center">
        <div>
          <h3 className="text-lg lg:text-start font-medium" id="poppins-semibold">
            Join our newsletter
          </h3>
          <p className="text-sm pt-2" id="poppins-regular">
            Keep up to date with everything Secure Dapp
          </p>
        </div>
        <div className="flex mt-4 justify-center lg:justify-end">
          <input
            id="poppins-light"
            type="email"
            className="mx-6 w-60 lg:w-96 border px-2 text-white border-gray-400 rounded-lg bg-[#1A304C] dark:bg-white dark:text-black"
            placeholder="    Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={subscribe}
            id="poppins-semibold"
            className="ml-4 bg-green-500 hover:scale-105 transform transition ease-in-out duration-150 text-black px-4 py-2 rounded-2xl"
          >
            Subscribe
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="lg:pt-20 border-gray-50 pt-8 mx-6 lg:mx-28">
        <div
          style={{
            opacity: "0.2",
            background: "linear-gradient(180deg, #A9ACE7 0%, rgba(138, 142, 220, 0.40) 100%)",
          }}
          className="w-full h-0.5"
        ></div>
      </div>

      {/* Links Section */}
      <div className="max-w-7xl mx-auto px-4 lg:pt-10 sm:px-6 lg:px-2 mt-8">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Logo and Social Links */}
          <div className="mb-6 md:mb-0">
            <div className="flex items-center justify-center md:justify-start">
              <Image className="h-10 w-10" src={Logo} alt="SecureDApp Logo" />
              <h2 className="text-2xl lg:pt-2 font-bold ml-2">SecureDApp</h2>
            </div>
          </div>

          {/* Navigation Links */}
          <div id="poppins-medium" className="grid grid-cols-2 md:grid-cols-4 gap-8 mx-2 lg:mx-0">
            {/* Product Links */}
            <div>
              <h4 className="text-xl font-semibold mb-4" id="poppins-semibold">
                Product
              </h4>
              <ul className="space-y-1" id="poppins-regular">
                <li>
                  <Link
                    href="https://securedapp.io/solidity-shield"
                    className="text-xs text-gray-300 dark:text-black hover:dark:text-green-500 hover:text-green-500"
                  >
                    Solidity Shield Scan
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://securedapp.io/secure-watch"
                    className="text-xs text-gray-300 dark:text-black hover:dark:text-green-500 hover:text-green-500"
                  >
                    Secure Watch
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-xs text-gray-300 dark:text-black hover:dark:text-green-500 hover:text-green-500">
                    Audit Express
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://securedapp.io/secure-trace"
                    className="text-xs text-gray-300 dark:text-black hover:dark:text-green-500 hover:text-green-500"
                  >
                    Secure Trace
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://securedapp.io/secure-pad"
                    className="text-xs text-gray-300 dark:text-black hover:dark:text-green-500 hover:text-green-500"
                  >
                    Secure Pad
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4" id="poppins-semibold">
                Services
              </h4>
              <ul className="space-y-1" id="poppins-regular">
                <li>
                  <Link
                    href="https://securedapp.io/smart-contract-audit"
                    className="text-xs text-gray-300 dark:text-black hover:dark:text-green-500 hover:text-green-500"
                  >
                    Audit
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://securedapp.io/web3-security"
                    className="text-xs text-gray-300 dark:text-black hover:dark:text-green-500 hover:text-green-500"
                  >
                    Security
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://securedapp.io/crypto-compliance-aml"
                    className="text-xs text-gray-300 dark:text-black hover:dark:text-green-500 hover:text-green-500"
                  >
                    Regulatory Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://securedapp.io/levelup-academy"
                    className="text-xs text-gray-300 dark:text-black hover:dark:text-green-500 hover:text-green-500"
                  >
                    Training & Education
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4" id="poppins-semibold">
                Company
              </h4>
              <ul className="space-y-1" id="poppins-regular">
                <li>
                  <Link
                    href="https://securedapp.io/about"
                    className="text-xs text-gray-300 dark:text-black hover:dark:text-green-500 hover:text-green-500"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://securedapp.io/authors"
                    className="text-xs text-gray-300 dark:text-black hover:dark:text-green-500 hover:text-green-500"
                  >
                    Authors
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://securedapp.io/media"
                    className="text-xs text-gray-300 dark:text-black hover:dark:text-green-500 hover:text-green-500"
                  >
                    Media
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://securedapp.gitbook.io/securedapp-launchpad/careers"
                    className="text-xs text-gray-300 dark:text-black hover:dark:text-green-500 hover:text-green-500"
                  >
                    Career
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://securedapp.gitbook.io/securedapp-launchpad/contact-us"
                    className="text-xs text-gray-300 dark:text-black hover:dark:text-green-500 hover:text-green-500"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4" id="poppins-semibold">
                Resources
              </h4>
              <ul className="space-y-1" id="poppins-regular">
                <li>
                  <Link
                    href="https://securedapp.io/blog"
                    className="text-xs text-gray-300 dark:text-black hover:dark:text-green-500 hover:text-green-500"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://securedapp.io/audits"
                    className="text-xs text-gray-300 dark:text-black hover:dark:text-green-500 hover:text-green-500"
                  >
                    Audits
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://securedapp.io/solidity-shield-vulnerabilities"
                    className="text-xs text-gray-300 dark:text-black hover:dark:text-green-500 hover:text-green-500"
                  >
                    Vulnerabilities
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/securedapp-github"
                    className="text-xs text-gray-300 dark:text-black hover:dark:text-green-500 hover:text-green-500"
                  >
                    Github
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://securedapp.gitbook.io/securedapp-launchpad/workplace-policy"
                    className="text-xs text-gray-300 dark:text-black hover:dark:text-green-500 hover:text-green-500"
                  >
                    Workplace Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://securedapp.gitbook.io/securedapp-launchpad/shipping-and-delivery-policy"
                    className="text-xs text-gray-300 dark:text-black hover:dark:text-green-500 hover:text-green-500"
                  >
                    Shipping & Delivery Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://securedapp.gitbook.io/securedapp-launchpad/pricing-policy"
                    className="text-xs text-gray-300 dark:text-black hover:dark:text-green-500 hover:text-green-500"
                  >
                    Pricing Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://securedapp.gitbook.io/securedapp-launchpad/cancellation-and-refund-policy"
                    className="text-xs text-gray-300 dark:text-black hover:dark:text-green-500 hover:text-green-500"
                  >
                    Cancellation & Refunds
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://securedapp.gitbook.io/securedapp-launchpad"
                    className="text-xs text-gray-300 dark:text-black hover:dark:text-green-500 hover:text-green-500"
                  >
                    Whitepaper
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex lg:justify-start justify-center gap-4 pt-8">
          <Link href="https://discord.com/invite/pqDC8ddnYQ" aria-label="Discord">
            <FaDiscord className="h-8 w-8 hover:text-green-600" />
          </Link>
          <Link href="https://x.com/secure_dapp" aria-label="Twitter">
            <FaTwitter className="h-8 w-8 hover:text-green-600" />
          </Link>
          <Link href="https://www.linkedin.com/company/securedapp/" aria-label="LinkedIn">
            <FaLinkedin className="h-8 w-8 hover:text-green-600" />
          </Link>
          <Link href="https://telegram.me/securedappcommunity" aria-label="Telegram">
            <FaTelegram className="h-8 w-8 hover:text-green-600" />
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="lg:pt-10 border-gray-50 mx-6 pt-10 lg:mx-28">
        <div
          style={{
            opacity: "0.2",
            background: "linear-gradient(180deg, #A9ACE7 0%, rgba(138, 142, 220, 0.40) 100%)",
          }}
          className="w-full h-0.5"
        ></div>
      </div>

      {/* Footer Bottom Section */}
      <div className="lg:mt-8 md:flex justify-between lg:mx-36 pt-10 pb-10 text-center lg:pt-10 lg:pb-10">
        <div id="poppins-regular" className="lg:flex justify-center space-x-4">
          <Link
            href="#"
            className="text-sm text-gray-400 dark:text-black hover:dark:text-green-500 hover:text-green-500"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-sm text-gray-400 dark:text-black hover:dark:text-green-500 hover:text-green-500"
          >
            <span className="pr-2">⚪</span> Terms of Conditions
          </Link>
        </div>
        <div id="poppins-regular" className="flex justify-center pt-2 px-4 sm:px-6">
          <p className="text-sm text-gray-400">© 2024 Secure DApp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
