"use client";

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

function SecureWatchPage() {
  if (typeof window !== "undefined") {
    typeof window !== "undefined" && window.scrollTo(0, 0);
  }
  return (
    <div className="product-container">
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
        <ProductServiceHero
          name="SECURE WATCH"
          title="Blockchain Threat Detection"
          image={"/assets/images/ProductPages/sw/hero.webp"}
          onClick={() =>
            typeof window !== "undefined" &&
            window.open("https://securewatch.securedapp.io")
          }
        />
        <ProductCard
          header={"What is Secure Watch"}
          description={
            "SecureWatch is a cutting-edge post-deployment security monitoring and threat detection tool that leverages AI for real-time surveillance of your projects and smart contracts. It provides continuous protection by constantly monitoring on-chain transactions to identify security breaches, unauthorized access, and abnormal behavior. <br/><br/> Seamlessly integrating with your existing DevOps processes, it guarantees that security measures are consistently applied throughout development and operations.<br/><br/>Comply with needed regulations and have complete visibility and control of your Web3 environment, 24-7, safeguarding client assets and stopping illicit finance."
          }
          buttonText={"Scan now"}
          image={"/assets/images/ProductPages/sw/1.webp"}
        />
        <div className="features-section">
          <SectionTitle
            name={"Threats"}
            title={"What Threats SecureWatch Detects in a Smart Contract?"}
            description={
              "With its high-tech blockchain threat detection capabilities, Securewatch identifies a range of security breaches through its advanced monitoring system. Here’s how it keeps your smart contract secure."
            }
          />
          <FeatureCards featureData={threats} />
          {/* <div className="features-section-button">
            <Button text={"Learn more"} filled={true} />
          </div> */}
        </div>
        <div className="features-section">
          <SectionTitle
            name={"Features"}
            title={"What are the Features of SecureWatch?"}
            description={
              "SecureWatch offers several advanced features to maintain real-time blockchain security and safeguard your digital assets throughout their lifecycle."
            }
          />
          <FeatureCards featureData={features} />
          {/* <div className="features-section-button">
            <Button text={"Learn more"} filled={true} />
          </div> */}
        </div>
        <ProductWhyCard
          header={"Why Choose Secure Watch?"}
          descriptions={[
            "Choosing SecureWatch means opting for a solution that protects and enhances your smart contract's security over time.",
            "What sets SecureWatch apart is its ability to customize security policies to fit your unique needs and risk profiles, providing a customized approach to security. Additionally, its analysis of historical data helps refine security measures based on past incidents, enabling continuous improvement and a stronger defense against future threats.",
            "With Blockchain Threat Intelligence at its core, SecureWatch offers unmatched insights and threat detection capabilities, helping you stay ahead of emerging vulnerabilities and risks. By continuously tracking deviations from normal behavior, SecureWatch proactively identifies potential threats before they escalate.",
          ]}
          buttonText={"Get Started"}
          image={"/assets/images/ProductPages/sw/2.webp"}
          imageAlt={"Product 1 Why Image"}
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

export default SecureWatchPage;
