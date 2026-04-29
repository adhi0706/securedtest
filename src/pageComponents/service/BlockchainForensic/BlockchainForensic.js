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
import { faqsData, impactData, whyChooseData } from "./data";
import BookMeetCta from "../../../components/common/bookMeetCta";

function BlockchainForensic() {
  if (typeof window !== "undefined") {
    typeof window !== "undefined" && window.scrollTo(0, 0);
  }
  return (
    <div className="service-container">
      {" "}
      <MetaTags
        data={{
          title:
            "Blockchain Forensic: Crypto Transaction Tracing & Investigation",
          desc: "Explore Blockchain Forensic solutions for tracing crypto transactions, ensuring compliance, and preventing fraud. Trusted by 120+ companies.",
          keywords:
            "Blockchain Forensics, Cryptocurrency Investigation, Crypto Transaction Tracing, Blockchain Compliance, Digital Asset Recovery, Blockchain Security Audit, Fraud Detection Blockchain, Cryptocurrency Tracing",
          image: "/assets/images/ServicePages/s7-hero.webp",
        }}
      />
      <Navbar />
      <div className="service">
        <ProductServiceHero
          name="BLOCKCHAIN FORENSIC"
          title="Tracing & Investigation Cryptocurrency Transactions"
          image={"/assets/images/ServicePages/s7-hero.webp"}
          service={true}
        />
        <ProductCard
          header={"What is a Blockchain Forensic ?"}
          description={
            "Blockchain forensics involves examining blockchain data to investigate criminal activities such as money laundering, fraud, and terrorism financing. Using blockchain forensics tools, investigators can trace the movement of funds, detect illicit transactions, and identify suspicious behavior and individuals involved in illegal activities."
          }
          buttonText={"Scan now"}
          image={"/assets/images/ServicePages/s7-1.webp"}
        />
        <ProductWhyCard
          header={"Need of Blockchain Forensic"}
          descriptions={[
            "In the past year, DeFi remained the most targeted sector for hackers, accounting for 67.4% of all incidents and resulting in total losses of $98.23 million. The situation is not just concerning, it's a critical issue that demands immediate attention and action.",
            "In the Web3 ecosystem, attackers exploit vulnerabilities in code, and the absence of robust legal frameworks makes it challenging to hold them accountable.While blockchain transactions are publicly visible, malicious actors use techniques such as peel chains, mixers, and chain hopping, complicating blockchain transaction analysis and making it extremely difficult to trace stolen funds.",
          ]}
          buttonText={"Get Started"}
          image={"/assets/images/ServicePages/s7-2.webp"}
          imageAlt={"Product 1 Why Image"}
        />
        <div>
          <SectionTitle
            name={"Why choose us"}
            title="Why Choose Our Blockchain Forensics Service"
          />
          <div className="how-it-works-section">
            {whyChooseData.map((data) => {
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
            name={"Impact"}
            title={"Visible Impact of Blockchain Forensics"}
          />
          <FeatureCards featureData={impactData} />
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

export default BlockchainForensic;
