"use client";

import { useEffect } from "react";
import Image from "next/image";
import Footer from "../../../components/footer/footer";
import Navbar from "../../../components/navbar/Navbar";
import ProductServiceHero from "../../../components/common/ProductServiceHero";
import Testimonials from "../../../components/common/Testimonials";
import SectionTitle from "../../../components/common/SectionTitle";
import Button from "../../../components/common/Button";
import FAQs from "../../../components/common/FAQs";
import { reviews } from "../../home/home.data";
import ProductCard from "../../../components/productService/ProductCard";
import { FeatureCards } from "../../../components/productService/FeatureCard";
import ProductWhyCard from "../../../components/productService/ProductWhyCard";
import HowItWorksCard from "../../../components/productService/HowItWorksCard";
import BookMeetCta from "../../../components/common/bookMeetCta";
import {
  faqsData,
  howItWorksData,
  methodology,
  features,
  benefits,
} from "./data";
import MetaTags from "../../../components/common/MetaTags";

function changeSvgFill(color) {
  const svgElements = document.querySelectorAll("svg");
  svgElements.forEach((svg) => {
    const paths = svg.querySelectorAll("path, circle, rect, polygon, ellipse");

    paths.forEach((path) => {
      path.setAttribute("fill", color);
    });
  });
}

function SolidityShieldPage() {
  if (typeof window !== "undefined") {
    typeof window !== "undefined" && window.scrollTo(0, 0);
  }
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
        <ProductServiceHero
          name="SOLIDITY SHIELD"
          title="Smart Contract Security Audit Solution"
          image={"/assets/images/ProductPages/ss/hero.webp"}
          onClick={() =>
            typeof window !== "undefined" &&
            window.open("/solidity-shield-scan")
          }
        />
        <ProductCard
          header={"What is a Smart Contract?"}
          description={`A smart contract—a digital agreement stored on a blockchain network and programmed to execute automatically when predetermined conditions are met. These self-enforcing contracts encode the agreement terms between seller and buyer directly into lines of code. Operating on a decentralized blockchain, smart contracts help several parties achieve collective outcomes promptly and accurately.
          <br/><br/>Smart contracts are not limited to a single condition. In fact, a single smart contract can include multiple conditions, showcasing their versatility. Furthermore, an application can utilize several smart contracts to support interconnected processes, demonstrating their potential in a variety of scenarios.
          <br/><br/>Multiple languages, such as Ethereum's Solidity language, are available for programming smart contracts, one of the most popular. Often, these contracts involve multiple independent parties who may not know or trust each other. To solve this, the smart contract defines exactly how users can interact with it, including:
          <br/><br/>
          <ul>
          <li> • Who can interact with the contract?</li/>
          <li> • When interactions can occur.</li/>
          <li> • What inputs result in what outputs?</li/>
          </ul/>`}
          buttonText={"Scan now"}
          image={"/assets/images/ProductPages/ss/1.webp"}
        />
        <div className="features-section">
          <SectionTitle name={"Features"} title={"Shield Features"} />
          <FeatureCards featureData={features} />
          {/* <div className="features-section-button">
            <Button text={"Learn more"} filled={true} />
          </div> */}
        </div>
        <ProductWhyCard
          header={"What is Solidity Shield?"}
          descriptions={[
            "Solidity Shield, powered by SecureDApp's cutting-edge AI, is designed to augment the security and reliability of Ethereum-based smart contracts. It uses sophisticated algorithms to detect 150+ vulnerabilities, including issues like reentrancy events and unchecked transfers, providing a comprehensive security assessment for developers",
            "Solidity Shield leverages machine learning to analyze and safeguard smart contracts written in Solidity language. This technology enhances the security of your contracts and fosters greater trust and confidence in the entire blockchain ecosystem.",
          ]}
          buttonText={"Get Started"}
          image={"/assets/images/ProductPages/ss/2.webp"}
          imageAlt={"Product 1 Why Image"}
        />
        <div>
          <SectionTitle
            name={"How it works"}
            title="How Solidity Shield Strengthens Smart Contract Security Audit"
            description={null}
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
            {/* <div className="how-it-works-section-end-image">
              <img layout="intrinsic"   layout="intrinsic"   
                src="/assets/images/product-1-how-it-works-1-end.svg"
                alt="product 1 how it works end"
              />
            </div> */}
          </div>
        </div>
        <div className="features-section">
          <SectionTitle
            name={"Benefits"}
            title={"Benefits of Choosing Solidity Shield Scanner?"}
            description={
              "Solidity Shield's AI powered engine stands as a keystone for secure smart contract development adeptly detecting and reporting vulnerabilities to support overall security."
            }
          />
          <FeatureCards featureData={benefits} />
          {/* <div className="features-section-button">
            <Button text={"Learn more"} filled={true} />
          </div> */}
        </div>
        <div className="features-section">
          <SectionTitle
            name={"Audit Methodology"}
            title={"What is SecureDApps Smart Contract Audit Methodology?"}
            description={
              "Streamline business processes and increase efficiency with workflow automation features."
            }
          />
          <FeatureCards featureData={methodology} />
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

export default SolidityShieldPage;
