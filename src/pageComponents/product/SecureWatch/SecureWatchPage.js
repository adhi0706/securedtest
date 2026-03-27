"use client";
import React, { useState } from 'react';
import styles from './SecureWatchPage.module.css';

import Footer from "../../../components/footer/footer";
import Navbar from "../../../components/navbar/Navbar";
import ProductServiceHero from "../../../components/common/ProductServiceHero";
import Testimonials from "../../../components/common/Testimonials";
import SectionTitle from "../../../components/common/SectionTitle";
import Button from "../../../components/common/Button";
import FAQs from "../../../components/common/FAQs";
import { reviews } from "../../home/home.data";
import MetaTags from "../../../components/common/MetaTags";
import ProductCard from "../../../components/productService/ProductCard";
import { FeatureCards } from "../../../components/productService/FeatureCard";
import ProductWhyCard from "../../../components/productService/ProductWhyCard";
import HowItWorksCard from "../../../components/productService/HowItWorksCard";
import { faqsData, threats, features } from "./data";
import BookMeetCta from "../../../components/common/bookMeetCta";
import RTMOverview from "../../../components/RTM/RTMOverview";
import RTMThreats from "../../../components/RTM/RTMThreats";
import RTMMonitoring from "../../../components/RTM/RTMMonitoring";
import RTMHowItWorks from "../../../components/RTM/RTMHowItWorks";
import RTMFeatures from "../../../components/RTM/RTMFeatures";
import RTMUseCases from "../../../components/RTM/RTMUseCases";
import RTMBenefits from "../../../components/RTM/RTMBenefits";
import RTMPlans from "../../../components/RTM/RTMPlans";
import RTMFAQ from "../../../components/RTM/RTMFAQ";
import RTMCaseStudy from "../../../components/RTM/RTMCaseStudy";
import RTMTechnology from "../../../components/RTM/RTMTechnology";
import Technology from "../../../components/RTM/Technology";
import ContinuousBenefits from "../../../components/RTM/ContinuousBenefits";
import ClientsSay from "../../../components/RTM/ClientsSay";
import MonitoringPlans from "../../../components/RTM/MonitoringPlans";
import SecureWatchFAQ from "../../../components/RTM/SecureWatchFAQ";
import SecureWatchCTA from "../../../components/RTM/SecureWatchCTA";
import SecureWatchOverviewSection from "../../../components/RTM/SecureWatchOverviewSection";
import WhatIsSection from "../../../components/RTM/WhatIsSection";
import FeaturesGridSection from "../../../components/RTM/FeaturesGridSection";
import HowItWorksSection from "../../../components/RTM/HowItWorksSection";
import UseCasesSection from "../../../components/RTM/UseCasesSection";
import SecureWatchHero from "../../../components/RTM/SecureWatchHero";
import AuditsVsMonitoringSection from "../../../components/RTM/AuditsVsMonitoringSection";
import EulerCaseStudySection from "../../../components/RTM/EulerCaseStudySection";
import SecureWatchNavbar from "../../../components/RTM/SecureWatchNavbar";
import RequestDemoModal from "../../../components/RTM/RequestDemoModal";


function SecureWatchPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (typeof window !== "undefined") {
    typeof window !== "undefined" && window.scrollTo(0, 0);
  }
  return (
    <div className={`product-container ${styles.securewatchPageBg}`}>
      {" "}
      <MetaTags
        data={{
          title: "Real-Time Blockchain Threat Monitoring",
          desc: "Secure Watch offers AI-driven real-time blockchain threat detection, ensuring smart contract security by identifying and mitigating vulnerabilities.",
          keywords:
            "blockchain threat detection, smart contract security, Secure Watch, AI-driven monitoring, blockchain security tool, unauthorized access, real-time blockchain surveillance, smart contract vulnerabilities, blockchain threat intelligence, secure watch features",
          image: "/assets/images/ProductPages/sw/hero.webp",
        }}
      />
      
      <Navbar />
      
      <div className="product">
        {/* <ProductServiceHero
          name="SECURE WATCH"
          title="Blockchain Threat Detection"
          image={"/assets/images/ProductPages/sw/hero.webp"}
          onClick={() =>
            typeof window !== "undefined" &&
            window.open("https://securewatch.securedapp.io")
          }
        /> */}
        <SecureWatchHero />
        <SecureWatchOverviewSection />
        <WhatIsSection />
        <FeaturesGridSection />
        <HowItWorksSection />
        <UseCasesSection />
        <AuditsVsMonitoringSection />
        <EulerCaseStudySection />

        {/* <RTMOverview />
        <RTMThreats />
        <RTMMonitoring />
        <RTMHowItWorks />
        <RTMFeatures />
        <RTMUseCases />
        <RTMBenefits />
        <RTMPlans />
        <RTMFAQ />
        <RTMCaseStudy />
        <RTMTechnology /> */}

        <Technology />
        <ContinuousBenefits />
        <MonitoringPlans />
        <ClientsSay />
        <ProductCard
          header={<>What is <span className="text-[#00ff88]">Secure Watch</span></>}
          description={
            "SecureWatch is a cutting-edge post-deployment security monitoring and threat detection tool that leverages AI for real-time surveillance of your projects and smart contracts. It provides continuous protection by constantly monitoring on-chain transactions to identify security breaches, unauthorized access, and abnormal behavior. <br/><br/> Seamlessly integrating with your existing DevOps processes, it guarantees that security measures are consistently applied throughout development and operations.<br/><br/>Comply with needed regulations and have complete visibility and control of your Web3 environment, 24-7, safeguarding client assets and stopping illicit finance."
          }
          buttonText={"Scan now"}
          image={"/assets/images/ProductPages/sw/1.webp"}
        />

        {/* <div>
          <SectionTitle
            name={"How it works"}
            title="How it works"
            description={
              "Streamline business processes and increase efficiency with workflow automation features."
            }
          />
        <div className="how-it-works-section">
          {howItWorksData.map((data) => {
            return (
              <HowItWorksCard
                image={data.image}
                imageAlt={data.imageAlt}
                title={data.header}
                description={data.description}
              />
            );
          })}
          <div className="how-it-works-section-end-image">
            <img layout="intrinsic"   layout="intrinsic"   
              src="/assets/images/product-1-how-it-works-1-end.svg"
              alt="product 1 how it works end"
            />
          </div>
          </div>
        </div> */}
        {/* <Testimonials reviews={reviews} /> */}
        <div>
          {/* <FAQs faqsData={faqsData} /> */}
          <SecureWatchFAQ />
        </div>
        <SecureWatchCTA />
      </div>
      <Footer />
      <RequestDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default SecureWatchPage;
