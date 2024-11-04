import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import Button from "../../../components/common/Button";
import SectionTitle from "../../../components/common/SectionTitle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const servicesData = [
  {
    id: 0,
    title: "DApp Development",
    name: "DApp Development Service",
    desc: "Focus on blockchain application development, from building applications from the ground up to providing consultancy and ongoing support. Our no-code platform ensures your decentralized applications are secure, efficient, and transformative for your business",
    alt: "",
    to: "/dapp-development",
  },
  {
    id: 1,
    title: "Smart Contract Audit",
    name: "Smart Contract Audit",
    desc: "Focus on delivering top-notch smart contract audit services at competitive prices. Our smart contract audit is dedicated to ensuring the security and reliability of your smart contracts.",
    alt: "",
    to: "/smart-contract-audit",
  },
  {
    id: 2,
    title: "Dapp Security",
    name: "DApp Security Audit",
    desc: "DApps are becoming increasingly prevalent, but developers often neglect crucial security aspects during development. We focus on robust decentralized application security measures to secure them from potential threats, vulnerabilities, and data breaches.",
    alt: "",
    to: "/dapp-security-audit",
  },
  {
    id: 3,
    title: "Token Audit",
    name: "Token Audit",
    desc: "Token audits are crucial for technical robustness and regulatory compliance. With a token audit, protect your assets and investors from threats like DDoS attacks, reentrancy, overflows, and flash loan exploits.",
    alt: "",
    to: "/token-audit",
  },
  {
    id: 4,
    title: "Web 3.0 KYC",
    name: "Web 3.0 KYC",
    desc: "As we approach a new digital era, it's essential to reimagine KYC for Web 3.0. Decentralized KYC solutions empower users by giving them control over their data",
    alt: "",
    to: "/web3-kyc",
  },
  {
    id: 5,
    title: "Web 3.0 Security",
    name: "Web 3.0 Security",
    desc: "As Web 3.0 advances, a thorough risk assessment is essential to safeguard your business and unlock its full potential. We assist in protecting your smart contracts, NFTs, and DApp with our high-tech security expertise.",
    alt: "",
    to: "/web3-security",
  },
  {
    id: 6,
    title: "Blockchain Forensics",
    name: "Blockchain Forensics",
    desc: "Using our blockchain forensics tools, investigators can trace the movement of funds, detect illicit transactions, and identify suspicious behavior and individuals involved in illegal activities",
    alt: "",
    to: "/blockchain-forensic",
  },
  {
    id: 7,
    title: "RWA Audit",
    name: "RWA Audit",
    desc: "Now is the time for early adopters and forward-thinking investors to explore the real-world asset tokenization audit for better transparency and liquidity and seize the unique business opportunity from the ground up.",
    alt: "",
    to: "/rwa-audit",
  },
  {
    id: 8,
    title: "Crypto compliance & AML",
    name: "Crypto compliance and AML",
    desc: "Top-tier crypto compliance consulting tailored to your unique needs. Understand the complexities of cryptocurrency regulations and get customized strategies to ensure your business adheres to all legal requirements.",
    alt: "",
    to: "/crypto-compliance-aml",
  },
  {
    id: 9,
    title: "Decentralized Identity",
    name: "Decentralized Identity (DID)",
    desc: "Incorporate advanced cryptographic techniques and decentralized protocols to deliver highly secure, tamper-proof digital identity solutions while ensuring compliance with the latest security standards",
    alt: "",
    to: "/decentralized-identity-did",
  },
  {
    id: 10,
    title: "NFT Development",
    name: "NFT Development",
    desc: "Offering top-notch NFT development services has significantly impacted the blockchain world, with applications in digital art, gaming, and more.",
    alt: "",
    to: "/nfts-development",
  },
  {
    id: 11,
    title: "DeFi Development",
    name: "DeFi Development",
    desc: "DeFi is evolving rapidly compared to centralized finance systems, with new applications emerging frequently. We specialize in crafting innovative DeFi solutions tailored to your needs, whether offering or receiving financial services.",
    alt: "",
    to: "/defi-development",
    image: "/assets/images/ServicePages/s12-hero.png",
  },
  {
    id: 12,
    title: "Levelup Academy",
    name: "LevelUp academy",
    desc: "SecureDApp's flagship initiative aims to foster blockchain talent and innovation across Indian universities and colleges.",
    alt: "",
    to: "/levelup-academy",
    image: "/assets/images/ServicePages/s8-3.webp",
  },
];

const Services = () => {
  const navigate = useRouter();

  const [selectedService, setService] = useState(0);
  let sliderRef = useRef(null);

  function moveLeft() {
    if (selectedService === 0) return;
    setService((prev) => prev - 1);
  }

  function moveRight() {
    if (selectedService === servicesData.length - 1) return;
    setService((prev) => prev + 1);
  }

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(selectedService);
    }
  }, [selectedService]);

  const PreviousArrow = () => {
    return (
      <div
        className="services-mobile-navbar-arrow-container hover:cursor-pointer"
        onClick={moveLeft}
      >
        <FontAwesomeIcon
          icon={faChevronLeft}
          size="xl"
          className="services-mobile-navbar-arrow"
        />
      </div>
    );
  };

  const NextArrow = () => {
    return (
      <div
        className="services-mobile-navbar-arrow-container hover:cursor-pointer"
        onClick={moveRight}
      >
        <FontAwesomeIcon
          icon={faChevronRight}
          size="xl"
          className="services-mobile-navbar-arrow"
        />
      </div>
    );
  };

  const slickSettings = {
    centerMode: true,
    arrows: false,
    accessibility: true,
    centerPadding: "0",
    slidesToShow: 5,
    lazyLoad: "progressive",
    slidesToScroll: 1,
    speed: 500,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
    beforeChange: (current, next) => {
      setService(next);
    },
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="services">
      <SectionTitle name="Services" title="Services Provided by us" />
      <div className="services-mobile-navbar">
        <PreviousArrow />
        <Slider ref={sliderRef} className="w-full" {...slickSettings}>
          {servicesData.map((service, index) => {
            return (
              <div
                onClick={() => setService(index)}
                className={`services-mobile-navbar-item ${
                  service.id === selectedService && "selected-mobile-navbar"
                }`}
              >
                {service.title}
              </div>
            );
          })}
        </Slider>
        <NextArrow />
      </div>
      <div className="services-content">
        <div className="services-content-left">
          <div className="services-content-left-title">
            {servicesData[selectedService].name}
          </div>
          <div className="services-content-left-description">
            {servicesData[selectedService].desc}
          </div>
          <div className="services-content-left-button">
            <Button
              onClick={() => navigate.push(servicesData[selectedService].to)}
              text={"Get Started"}
              filled={true}
            />
          </div>
        </div>
        <div className="services-content-right">
          <img
            layout="intrinsic"
            src={
              servicesData[selectedService].image
                ? servicesData[selectedService].image
                : `/assets/images/ServicePages/s${
                    selectedService + 1
                  }-hero.webp`
            }
            alt={servicesData[selectedService].name}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
