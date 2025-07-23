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

function AlgoShieldPage() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, []);

  const handleGetStarted = () => {
    // Redirect to AlgoShield tool
    if (typeof window !== "undefined") {
      window.location.href = "/algoshield";
    }
  };

  return (
    <div className="product-container">
      <MetaTags
        data={{
          title: "AlgoShield: Algorand Smart Contract Security Audit",
          desc: "Secure your Algorand smart contracts with AlgoShield's AI-driven audits. Detect vulnerabilities, enhance security, and ensure blockchain compliance.",
          keywords:
            "AI-powered smart contract audit, AlgoShield, Algorand security, blockchain security, vulnerability detection, smart contract compliance, DeFi security, Algorand language, smart contract analysis, reentrancy issues, code quality improvement, SaaS blockchain audit",
          image: "/assets/images/ProductPages/as/hero.webp",
        }}
      />
      <Navbar />
      <div className="product">
        <ProductServiceHero
          name="ALGOSHIELD"
          title="Algorand Smart Contract Security Audit Solution"
          image={"/assets/images/ProductPages/as/hero.webp"}
          onClick={handleGetStarted}
        />
        <ProductCard
          header={"What is an Algorand Smart Contract?"}
          description={`An Algorand smart contract—a digital agreement stored on the Algorand blockchain network and programmed to execute automatically when predetermined conditions are met. These self-enforcing contracts encode the agreement terms between seller and buyer directly into lines of code. Operating on the decentralized Algorand blockchain, smart contracts help several parties achieve collective outcomes promptly and accurately.
          <br/><br/>Algorand smart contracts are not limited to a single condition. In fact, a single smart contract can include multiple conditions, showcasing their versatility. Furthermore, an application can utilize several smart contracts to support interconnected processes, demonstrating their potential in a variety of scenarios.
          <br/><br/>Algorand supports multiple languages, such as TEAL (Transaction Execution Approval Language) and PyTeal, for programming smart contracts. Often, these contracts involve multiple independent parties who may not know or trust each other. To solve this, the smart contract defines exactly how users can interact with it, including:
          <br/><br/>
          <ul>
          <li> • Who can interact with the contract?</li/>
          <li> • When interactions can occur.</li/>
          <li> • What inputs result in what outputs?</li/>
          </ul/>`}
          buttonText={"Scan now"}
          image={"/assets/images/ProductPages/as/1.webp"}
          link="/algoshield"
        />
        <div className="features-section">
          <SectionTitle name={"Features"} title={"Shield Features"} />
          <FeatureCards featureData={features} />
        </div>
        <ProductWhyCard
          header={"What is AlgoShield?"}
          descriptions={[
            "AlgoShield, powered by SecureDApp's cutting-edge AI, is designed to augment the security and reliability of Algorand-based smart contracts. It uses sophisticated algorithms to detect 150+ vulnerabilities, including issues like reentrancy events and unchecked transfers, providing a comprehensive security assessment for Algorand developers",
            "AlgoShield leverages machine learning to analyze and safeguard smart contracts written for the Algorand blockchain. This technology enhances the security of your contracts and fosters greater trust and confidence in the entire Algorand ecosystem.",
          ]}
          buttonText={"Get Started"}
          image={"/assets/images/ProductPages/as/2.webp"}
          imageAlt={"Product 1 Why Image"}
          link="/algoshield"
        />
        <div>
          <SectionTitle
            name={"How it works"}
            title="How AlgoShield Strengthens Algorand Smart Contract Security Audit"
            description={null}
          />
          <div className="how-it-works-section">
            {howItWorksData.map((data, index) => {
              return (
                <HowItWorksCard
                  key={index}
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
            name={"Benefits"}
            title={"Benefits of Choosing AlgoShield Scanner?"}
            description={
              "AlgoShield's AI powered engine stands as a keystone for secure Algorand smart contract development adeptly detecting and reporting vulnerabilities to support overall security."
            }
          />
          <FeatureCards featureData={benefits} />
        </div>
        <div className="features-section">
          <SectionTitle
            name={"Audit Methodology"}
            title={"What is SecureDApps Algorand Smart Contract Audit Methodology?"}
            description={
              "Streamline business processes and increase efficiency with workflow automation features for Algorand contracts."
            }
          />
          <FeatureCards featureData={methodology} />
        </div>
        <Testimonials reviews={reviews} />
        <div>
          <FAQs faqsData={[faqsData]} faqHeaders={["General"]} />
        </div>
      </div>
      <Footer />
      <BookMeetCta />
    </div>
  );
}

export default AlgoShieldPage; 