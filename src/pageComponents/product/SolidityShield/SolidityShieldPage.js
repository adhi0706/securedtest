"use client";

import { useEffect } from "react";
import Footer from "../../../components/footer/footer";
import Navbar from "../../../components/navbar/Navbar";
import BookMeetCta from "../../../components/common/bookMeetCta";
import MetaTags from "../../../components/common/MetaTags";
import SolidityShieldHero from "../../../components/SolidityShield/SolidityShieldHero";
import ThreatLandscapeSection from "../../../components/SolidityShield/ThreatLandscapeSection";
import FundamentalsSection from "../../../components/SolidityShield/FundamentalsSection";
import SecurityOptionalSection from "../../../components/SolidityShield/SecurityOptionalSection";
import SolidityShieldPlatformSection from "../../../components/SolidityShield/SolidityShieldPlatformSection";
import ProcessSection from "../../../components/SolidityShield/ProcessSection";
import FeaturesSection from "../../../components/SolidityShield/FeaturesSection";
import VulnerabilitiesSection from "../../../components/SolidityShield/VulnerabilitiesSection";
import IndustriesSection from "../../../components/SolidityShield/IndustriesSection";
import MethodologySection from "../../../components/SolidityShield/MethodologySection";
import CaseStudySection from "../../../components/SolidityShield/CaseStudySection";
import ComparisonSection from "../../../components/SolidityShield/ComparisonSection";
import BenefitsSection from "../../../components/SolidityShield/BenefitsSection";
import WorkflowSection from "../../../components/SolidityShield/WorkflowSection";
import PricingSection from "../../../components/SolidityShield/PricingSection";
import CTASection from "../../../components/SolidityShield/CTASection";
import FAQSection from "../../../components/SolidityShield/FAQSection";


function SolidityShieldPage() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="product-container">
      <MetaTags
        data={{
          title: "Solidity Shield: Smart Contract Security Audit",
          desc: "Secure your Ethereum smart contracts with Solidity Shield's AI-driven audits. Detect vulnerabilities, enhance security, and ensure blockchain compliance.",
          keywords:
            "AI-powered smart contract audit, Solidity Shield, Ethereum security, blockchain security, vulnerability detection, smart contract compliance, DeFi security, Solidity language, smart contract analysis, reentrancy issues, code quality improvement, SaaS blockchain audit",
          image: "/assets/images/ProductPages/ss/hero.webp",
        }}
      />
      <Navbar />
      <div className="product">
        <SolidityShieldHero />
        <ThreatLandscapeSection />
        <FundamentalsSection />
        <SecurityOptionalSection />
        <SolidityShieldPlatformSection />
        <ProcessSection />
        <FeaturesSection />
        <VulnerabilitiesSection />
        <IndustriesSection />
        <MethodologySection />
        <CaseStudySection />
        <ComparisonSection />
        <BenefitsSection />
        <WorkflowSection />
        <PricingSection />
        <CTASection />
        <FAQSection />

      </div>
      <Footer />
      <BookMeetCta />
    </div>
  );
}

export default SolidityShieldPage;
