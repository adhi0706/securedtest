"use client";

import { useEffect } from "react";
import Footer from "../../../components/footer/footer";
import Navbar from "../../../components/navbar/Navbar";
import BookMeetCta from "../../../components/common/bookMeetCta";
import MetaTags from "../../../components/common/MetaTags";
import QuantumVaultHero from "../../../components/QuantumVault/QuantumVaultHero";
import AIDefinitionSection from "../../../components/QuantumVault/AIDefinitionSection";
import RisksSection from "../../../components/QuantumVault/RisksSection";
import ChallengesSection from "../../../components/QuantumVault/ChallengesSection";
import WhatIsHSMSection from "../../../components/QuantumVault/WhatIsHSMSection";
import WhyNowSection from "../../../components/QuantumVault/WhyNowSection";
import ProcessSection from "../../../components/QuantumVault/ProcessSection";
import FeaturesSection from "../../../components/QuantumVault/FeaturesSection";
import DifferentiatorSection from "../../../components/QuantumVault/DifferentiatorSection";
import ProtectionSection from "../../../components/QuantumVault/ProtectionSection";
import IndustriesSection from "../../../components/QuantumVault/IndustriesSection";
import ProcessFlowSection from "../../../components/QuantumVault/ProcessFlowSection";
import TechnologySection from "../../../components/QuantumVault/TechnologySection";
import CaseStudiesSection from "../../../components/QuantumVault/CaseStudiesSection";
import ComparisonSection from "../../../components/QuantumVault/ComparisonSection";
import BenefitsSection from "../../../components/QuantumVault/BenefitsSection";
import TimingSection from "../../../components/QuantumVault/TimingSection";
import IntegrationSection from "../../../components/QuantumVault/IntegrationSection";
import PricingSection from "../../../components/QuantumVault/PricingSection";
import SecureTodaySection from "../../../components/QuantumVault/SecureTodaySection";
import FAQSection from "../../../components/QuantumVault/FAQSection";

function QuantumVaultPage() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="product-container">
      <MetaTags
        data={{
          title: "Quantum Vault: Next-Generation Digital Asset Security",
          desc: "Protect your digital assets with Quantum Vault's state-of-the-art security solutions. Future-proof your blockchain operations with quantum-resistant protection.",
          keywords:
            "Quantum Vault, blockchain security, digital asset protection, quantum-resistant, secure vault, crypto security, SecureDApp",
          image: "/assets/images/ProductPages/ss/hero.webp",
        }}
      />
      <Navbar />
      <div className="product">
        <QuantumVaultHero />
        <AIDefinitionSection />
        <RisksSection />
        <ChallengesSection />
        <WhatIsHSMSection />
        <WhyNowSection />
        <ProcessSection />
        <FeaturesSection />
        <DifferentiatorSection />
        <ProtectionSection />
        <IndustriesSection />
        <ProcessFlowSection />
        <TechnologySection />
        <CaseStudiesSection />
        <ComparisonSection />
        <BenefitsSection />
        <TimingSection />
        <IntegrationSection />
        <PricingSection />
        <SecureTodaySection />
        <FAQSection />
      </div>
      <Footer />
      <BookMeetCta />
    </div>
  );
}

export default QuantumVaultPage;
