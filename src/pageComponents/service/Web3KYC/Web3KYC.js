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
import { services, benefits, faqsData } from "./data";
import BookMeetCta from "../../../components/common/bookMeetCta";

function Web3KYC() {
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
          image: "/assets/images/ServicePages/s5-hero.webp",
        }}
      />
      <Navbar />
      <div className="service">
      <ProductServiceHero
  name={
    <>
      <span className="white-text">Secure</span>
      <span className="green-x">X</span>
      <span className="white-text">-ID: Decentralized KYC/AML for Web3</span>
    </>
  }
  title="Your Gateway to Compliant and Secure Decentralized Finance"
  image={"/assets/images/ServicePages/s5-hero.webp"}
  service={true}
/>
        <ProductCard
          header={"What is SecureX-ID ?"}
          description={
            "SecureX-ID is a comprehensive, decentralised KYC/AML platform designed to address the unique needs of Web3, DeFi, and DApps.<br></br> It offers a suite of tools and services that allow businesses to meet regulatory obligations while maintaining a user-centric approach. SecureX-ID uses blockchain technology to establish a secure, transparent, and efficient identity verification process.."
          }
          buttonText={"Scan now"}
          image={"/assets/images/ServicePages/s5-1.webp"}
        />
        <div>
          <SectionTitle
            name={"Benefits"}
            title="Benefits of SecureX-ID"
            description={
              "As we approach a new digital era, it's essential to reimagine KYC for the Web 3.0 landscape. Although the fundamental objective of KYC—to verify customer identities—remains unchanged, the methods and approaches to achieving this goal have significantly advanced."
            }
          />
          <div className="how-it-works-section">
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
        <div className="features-section">
          <SectionTitle
            name={"Services"}
            title={"Deep Dive into our Services"}
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

export default Web3KYC;
