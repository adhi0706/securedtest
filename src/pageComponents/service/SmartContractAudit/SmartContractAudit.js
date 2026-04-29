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
import { platforms, facts, projectIndustries, faqsData } from "./data";
import BookMeetCta from "../../../components/common/bookMeetCta";

function SmartContractAudit() {
  if (typeof window !== "undefined") {
    typeof window !== "undefined" && window.scrollTo(0, 0);
  }
  return (
    <div className="service-container">
      {" "}
      <MetaTags
        data={{
          title: "Smart Contract Audits: Expert Security for Blockchain DApps",
          desc: "Get thorough smart contract audits to eliminate security flaws in your blockchain DApps. Ensure reliability and compliance with our expert services.",
          keywords:
            "smart contract audit, blockchain security, secure DApps, blockchain audit services, smart contract security, decentralized apps",
          image: "/assets/images/ServicePages/s2-hero.webp",
        }}
      />
      <Navbar />
      <div className="service">
        <ProductServiceHero
          name="SMART CONTRACT AUDIT"
          title="Helping Your Business to Launch Error-free Blockchain Applications"
          image={"/assets/images/ServicePages/s2-hero.webp"}
          service={true}
        />
        <ProductCard
          header={"What is a Smart Contract ?"}
          description={
            "A smart contract—a digital agreement stored on a blockchain network and programmed to execute automatically when predetermined conditions are met. These self-enforcing contracts encode the agreement terms between seller and buyer directly into lines of code. Operating on a decentralized blockchain, smart contracts help several parties achieve collective outcomes promptly and accurately.<br/><br/>Smart contracts are not limited to a single condition. In fact, a single smart contract can include multiple conditions, showcasing their versatility. Furthermore, an application can utilize several smart contracts to support interconnected processes, demonstrating their potential in a variety of scenarios. Multiple languages, such as Ethereum's Solidity language, are available for programming smart contracts, one of the most popular"
          }
          buttonText={"Scan now"}
          image={"/assets/images/ServicePages/s2-1.png"}
        />
        <ProductWhyCard
          header={"Smart Contract Audit Meaning"}
          descriptions={[
            "A small error while deploying smart contracts can result in huge financial losses. This is why smart contracts security audits are imperative. A smart contract audit involves a detailed analysis of a protocol’s smart contract code to identify security vulnerabilities and inefficient code before identifying solutions to resolve these issues.  Audits help ensure decentralized applications' security, reliability, and performance across Web3.",
          ]}
          buttonText={"Get Started"}
          image={"/assets/images/ServicePages/s2-2.webp"}
          imageAlt={"Product 1 Why Image"}
        />
        <ProductCard
          header={"Why SecureDApp for Smart Contract Security Audit?"}
          description={
            "SecureDApp harnesses its experience and expertise to conduct blockchain security audits, carefully examining smart contracts for existing and potential errors, security flaws, and compliance issues. SecureDApp is committed to helping businesses develop secure and reliable DApps.<br/><br/>We believe that smart contracts have the potential to transform the way businesses operate, and we are excited to be a part of that revolution. By choosing SecureDApp, you ensure your smart contracts are thoroughly audited, enhancing your blockchain applications' security, reliability, and efficiency."
          }
          buttonText={"Scan now"}
          image={"/assets/images/ServicePages/s2-3.png"}
        />
        <div className="features-section">
          <SectionTitle
            name={"Facts & Figures"}
            title={"Uniques Dapp Development Services"}
            description={
              "These numbers underscore the urgent need for smart contract security audits. With significant losses attributed to security breaches and a high frequency of attacks in critical areas like DeFi, ensuring that your smart contracts are thoroughly audited is more crucial than ever."
            }
          />
          <FeatureCards featureData={facts} />
          {/* <div className="features-section-button">
            <Button text={"Learn more"} filled={true} />
          </div> */}
        </div>
        <Benefits
          benefitsData={platforms}
          title={"Blockchain Networks We Work On"}
          subTitle={
            "SecureDApp conducts multi-chain smart contract audits across various blockchain networks, ensuring your projects are secure and high-performing."
          }
          img={"/assets/images/ServicePages/s2-4.webp"}
          button={""}
        />
        <div>
          <SectionTitle
            name={"Industries"}
            title="The ratio of audited to non-audited projects was nearly even, at 48.8% and 46.5%, respectively. "
            description={
              "At SecureDApp, we pride ourselves on delivering top-notch smart contract audit services at competitive prices. With years of experience in the industry, we are dedicated to ensuring the reliability and security of your smart contracts without breaking the ban."
            }
          />
          <div className="how-it-works-section">
            {projectIndustries.map((data) => {
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

export default SmartContractAudit;
