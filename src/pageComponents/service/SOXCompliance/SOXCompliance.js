"use client";

import Footer from "../../../components/footer/footer";
import Navbar from "../../../components/navbar/Navbar";
import ProductServiceHero from "../../../components/common/ProductServiceHero";
import Testimonials from "../../../components/common/Testimonials";
import SectionTitle from "../../../components/common/SectionTitle";
import Button from "../../../components/common/Button";
import ProductCard from "../../../components/productService/ProductCard";
import ProductWhyCard from "../../../components/productService/ProductWhyCard";
import FAQs from "../../../components/common/FAQs";
import { reviews } from "../../home/home.data";
import MetaTags from "../../../components/common/MetaTags";
import { FeatureCards } from "../../../components/productService/FeatureCard";
import HowItWorksCard from "../../../components/productService/HowItWorksCard";
import Benefits from "../sections/Benefits";
import { services, benefits, faqsData, offerings } from "./data";
import BookMeetCta from "../../../components/common/bookMeetCta";

function SoxCompliance() {
  if (typeof window !== "undefined") {
    typeof window !== "undefined" && window.scrollTo(0, 0);
  }
  return (
    <div className="service-container">
      {" "}
      <MetaTags
        data={{
          title: "Blockchain Identity Verification for Secure KYC & Compliance",
          desc: "Secure your business with Blockchain Identity Verification for KYC and compliance. Trusted by 120+ companies in DeFi, NFTs, and crypto exchanges.",
          keywords:
            "Blockchain Identity Verification, KYC, Compliance, Decentralized Finance, NFT Marketplaces, Cryptocurrency Exchanges",
          image: "/assets/images/ServicePages/sox-1.png",
        }}
      />
      <Navbar />
      <div className="service">
      <ProductServiceHero
  name={
    <>
      <span className="green-x">SOX Compliance Solutions</span>
    </>
  }
  title="Ensure Accurate Financial Reporting & IT Controls Compliance with SecureDApp"
  image={"/assets/images/ServicePages/s2-1.png"}
  service={true}
/>
        <ProductCard
          header={"What is SOX Compliance ?"}
          description={
            "SOX (Sarbanes-Oxley) Compliance refers to a set of financial and IT control standards mandated under the Sarbanes-Oxley Act of 2002. This US federal law aims to protect investors by improving the accuracy and reliability of corporate financial disclosures. SOX enforces strict internal controls and governance frameworks around financial reporting processes. <br/><br/>In the digital era, SOX Compliance also covers IT systems that manage financial data. This includes implementing Information Technology General Controls (ITGC), managing access rights, tracking system changes, securing data backups, and ensuring overall IT security. For Indian businesses operating globally, especially in BFSI, SaaS, IT services, and crypto sectors. SOX Compliance is essential for building trust, ensuring transparency, and meeting client or investor requirements."
          }
          buttonText={"Scan now"}
          image={"/assets/images/ServicePages/s1-1.png"}
        />
        <div>
          <div className="sox-compliance-section">
            {benefits.map((data) => {
              return (
                <HowItWorksCard
                  image={data.image}
                  imageAlt={data.imageAlt}
                  title={data.header}
                  description={data.description}
                />
              );
            })}
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center max-w-6xl mx-auto px-5 py-16 gap-12">
          <div className="flex-1 lg:pr-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              SecureDApp's SOX Compliance Services
            </h2>
            <p className="text-lg mb-6 leading-relaxed">
              At SecureDApp, we help your organisation achieve and maintain SOX
              compliance through expert-led assessments, control framework implementation, and automated compliance solutions.
            </p>
          </div>
          <div className="flex-1 lg:pl-8">
            <img
              src="/assets/images/ServicePages/s12-2.webp"
              alt="SOX Compliance Framework"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
        
        <div>
          <SectionTitle
            name={"Our Offerings"}
            title="Our SOX Compliance Offerings"
            description=""
          />
          <div className="flex flex-col items-center max-w-4xl mx-auto">
  {offerings.map((offering, index) => (
    <div 
      key={index} 
      className="w-full p-4 text-left"
    >
      <div className="font-semibold">
        {offering.header}
      </div>
      <div className="">
        {offering.description}
      </div>
    </div>
  ))}
</div>
</div>
        <div className="features-section">
          <SectionTitle
            name={"Services"}
            title={"Why Choose SecureDApp for SOX Compliance ?"}
          />
          <FeatureCards featureData={services} />
          {/* <div className="features-section-button">
            <Button text={"Learn more"} filled={true} />
          </div> */}
        </div>
        <Testimonials reviews={reviews} />
        <div>
          <FAQs faqsData={faqsData} />
        </div>
      </div>
      <Footer />
      <BookMeetCta />
    </div>
  );
}

export default SoxCompliance;
