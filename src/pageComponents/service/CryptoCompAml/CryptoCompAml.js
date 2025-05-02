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
import { faqsData, whyChooseData, whyData, importanceData } from "./data";
import BookMeetCta from "../../../components/common/bookMeetCta";

function CryptoComplianceAml() {
  if (typeof window !== "undefined") {
    typeof window !== "undefined" && window.scrollTo(0, 0);
  }
  return (
    <div className="service-container">
      {" "}
      <MetaTags
        data={{
          title: "Crypto Compliance: Leading KYC & AML Solutions for Business",
          desc: "Secure your business with Crypto KYC & AML solutions. Trusted by 120+ companies for compliance, fraud prevention, and regulatory adherence.",
          keywords:
            "crypto compliance, AML solutions, KYC services, anti-money laundering, cryptocurrency regulation, financial compliance, secure crypto transactions",
          image: "/assets/images/ServicePages/s9-hero.webp",
        }}
      />
      <Navbar />
      <div className="service">
        <ProductServiceHero
          name="CRYPTO COMPLIANCE & AML"
          title="Crypto KYC, and AML Solutions Under One Place"
          image={"/assets/images/ServicePages/s9-hero.webp"}
          service={true}
        />
        <ProductCard
          header={"What Is Anti-money Laundering (AML)?"}
          description={
            "Anti-money laundering (AML) involves a comprehensive framework of policies, laws, and regulations to thwart financial crimes and illicit activities. Global and local regulators collaborate to enforce these measures, targeting a broad spectrum of offenses, such as corruption, tax evasion, market manipulation, illicit trade, and terrorist financing. "
          }
          buttonText={"Scan now"}
          image={"/assets/images/ServicePages/s9-1.webp"}
        />
        <ProductWhyCard
          header={"AML is Crucial For:"}
          descriptions={[
            `• Safeguarding brand reputation 
            <br/><br/>• Ensuring compliance and crypto transaction monitoring
            <br/><br/>• Reporting any suspicious activity
            <br/><br/>• Avoiding legal penalties and fines due to non-compliance
            <br/><br/>• Reducing costs associated with fines and IT infrastructure
            <br/><br/>• Securing shareholder's value`,
          ]}
          buttonText={"Get Started"}
          image={"/assets/images/ServicePages/s9-2.webp"}
          imageAlt={"Product 1 Why Image"}
        />
        <ProductCard
          header={"AML for Cryptocurrency"}
          description={
            "Cryptocurrency offers a cost-effective, direct settlement process, making it an attractive option for money launderers to move illicit funds with minimal detection. This is where Anti-Money Laundering (AML) practices play a crucial role, providing necessary oversight to prevent financial crimes. AML measures to safeguard the cryptocurrency ecosystem, ensuring compliance with regulatory standards and protecting the industry's reputation.<br/><br/>In 2023 alone, crypto companies faced over $ 5.8 billion in fines due to inadequate AML programs. Effective AML practices are therefore essential for cryptocurrency exchanges, wallet providers, and other virtual asset service providers (VASPs) to comply with legal requirements, avoid penalties, and build trust.<br/><br/>By enforcing these standards, AML initiatives protect the industry and promote broader acceptance and adoption of cryptocurrencies."
          }
          buttonText={"Scan now"}
          image={"/assets/images/ServicePages/s9-3.webp"}
        />
        <ProductWhyCard
          header={"What are Crypto Compliance and AML Services?"}
          descriptions={[
            "Crypto Compliance and AML (Anti-Money Laundering) services are designed to help cryptocurrency companies comply with regulatory standards. These services include establishing strong Know Your Customer (KYC) protocols, monitoring transactions, and reporting suspicious activities to the appropriate authorities. The primary aim is to prevent money laundering, terrorist financing, and other financial crimes in crypto.",
          ]}
          buttonText={"Get Started"}
          image={"/assets/images/ServicePages/s9-4.webp"}
          imageAlt={"Product 1 Why Image"}
        />
        <div>
          <SectionTitle
            name={"Compliances"}
            title="Why is Cryptocurrency Compliance Crucial?"
          />
          <div className="how-it-works-section">
            {whyData.map((data) => {
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
            name={"Importance"}
            title={"Importance of Cryptocurrency KYC"}
            description={
              "KYC (Know Your Customer) is essential in cryptocurrency as it collects and verifies customer information to identify potential risks and outliers. This process is a fundamental expectation that ensures cryptocurrency businesses conduct thorough due diligence and gain a clear understanding of their users. By implementing KYC, financial institutions and crypto platforms can:"
            }
          />
          <FeatureCards featureData={importanceData} />
          {/* <div className="features-section-button">
            <Button text={"Learn more"} filled={true} />
          </div> */}
        </div>
        <div className="features-section">
          <SectionTitle
            name={"Why choose us"}
            title={"Why Choose SecureDApp for Your Business?"}
          />
          <FeatureCards featureData={whyChooseData} />
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

export default CryptoComplianceAml;
